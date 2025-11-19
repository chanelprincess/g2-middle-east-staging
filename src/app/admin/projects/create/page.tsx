'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { uploadSecureAsset, formatFileSize, validateFileSize } from '@/utils/storage';

interface Client {
  id: string;
  email: string;
  company_name: string | null;
}

interface FileWithPreview {
  file: File;
  name: string;
  size: number;
  uploading: boolean;
  uploaded: boolean;
  path?: string;
  error?: string;
}

export default function CreateProjectPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loadingClients, setLoadingClients] = useState(true);
  
  const [clientId, setClientId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'Active' | 'Pending' | 'Completed'>('Active');
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    fetchClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, company_name')
        .eq('role', 'client')
        .order('email');

      if (error) throw error;
      setClients(data || []);
    } catch (err) {
      console.error('Error fetching clients:', err);
      setError('Failed to load clients');
    } finally {
      setLoadingClients(false);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    // Validate file sizes (max 10MB each)
    const validFiles = selectedFiles.filter(file => {
      if (!validateFileSize(file, 10)) {
        alert(`File ${file.name} exceeds 10MB limit`);
        return false;
      }
      return true;
    });

    const newFiles: FileWithPreview[] = validFiles.map(file => ({
      file,
      name: file.name,
      size: file.size,
      uploading: false,
      uploaded: false
    }));

    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleCoverImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!validateFileSize(file, 5)) {
        alert('Cover image must be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Cover image must be an image file');
        return;
      }
      setCoverImage(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      // Validate required fields
      if (!clientId || !title) {
        throw new Error('Please fill in all required fields');
      }

      // Upload cover image if provided
      let coverImagePath: string | undefined;
      if (coverImage) {
        const result = await uploadSecureAsset(coverImage, 'projects/covers');
        if (!result.success) {
          throw new Error(`Failed to upload cover image: ${result.error}`);
        }
        coverImagePath = result.path;
      }

      // Upload all files
      const uploadedFiles: Array<{ name: string; path: string; size: number }> = [];
      
      for (let i = 0; i < files.length; i++) {
        const fileItem = files[i];
        if (!fileItem || !fileItem.file) {
          throw new Error(`No file at index ${i}`);
        }
        
        setFiles(prev => prev.map((f, idx) => 
          idx === i ? { ...f, uploading: true } : f
        ));
        
        const result = await uploadSecureAsset(fileItem.file, 'projects/files');
        
        if (!result.success) {
          setFiles(prev => prev.map((f, idx) => 
            idx === i ? { ...f, uploading: false, error: result.error } : f
          ));
          throw new Error(`Failed to upload ${fileItem.name}: ${result.error}`);
        }

        uploadedFiles.push({
          name: fileItem.name,
          path: result.path!,
          size: fileItem.size
        });

        setFiles(prev => prev.map((f, idx) => 
          idx === i ? { ...f, uploading: false, uploaded: true, path: result.path } : f
        ));
      }

      // Create project in database
      const { error: insertError } = await supabase
        .from('projects')
        .insert({
          client_id: clientId,
          title,
          description: description || null,
          status,
          cover_image_path: coverImagePath,
          secure_files: uploadedFiles
        });

      if (insertError) throw insertError;

      // Success - redirect to admin dashboard
      router.push('/admin?tab=projects');
      router.refresh();
    } catch (err) {
      console.error('Error creating project:', err);
      setError(err instanceof Error ? err.message : 'Failed to create project');
      setSubmitting(false);
    }
  };

  if (loadingClients) {
    return (
      <div className="min-h-screen bg-g2-darker flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-g2-gold"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-g2-darker">
      {/* Header */}
      <header className="bg-g2-dark border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-g2-gold">
                Create New Project
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Add a new secure client project
              </p>
            </div>
            <Link
              href="/admin"
              className="px-4 py-2 text-sm border border-white/10 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {error && (
            <div className="mb-6 bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Client Selection */}
            <div className="bg-g2-dark border border-white/10 rounded-xl p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Client <span className="text-red-400">*</span>
              </label>
              <select
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                required
                className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
              >
                <option value="">Select a client...</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>
                    {client.company_name || client.email}
                  </option>
                ))}
              </select>
              {clients.length === 0 && (
                <p className="mt-2 text-sm text-gray-500">
                  No clients found. Create a client user first in Supabase Auth.
                </p>
              )}
            </div>

            {/* Project Details */}
            <div className="bg-g2-dark border border-white/10 rounded-xl p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="e.g., Market Entry Strategy Q1 2025"
                  className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Brief description of the project..."
                  className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as typeof status)}
                  className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Cover Image */}
            <div className="bg-g2-dark border border-white/10 rounded-xl p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cover Image (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageSelect}
                className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-g2-gold file:text-g2-darker file:font-medium hover:file:bg-g2-gold-light transition-colors"
              />
              {coverImage && (
                <div className="mt-3 flex items-center justify-between px-3 py-2 bg-g2-darker rounded-lg">
                  <span className="text-sm text-gray-300">{coverImage.name}</span>
                  <button
                    type="button"
                    onClick={() => setCoverImage(null)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Remove
                  </button>
                </div>
              )}
              <p className="mt-2 text-xs text-gray-500">
                Max size: 5MB • Formats: JPG, PNG, WebP
              </p>
            </div>

            {/* File Attachments */}
            <div className="bg-g2-dark border border-white/10 rounded-xl p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Files
              </label>
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-g2-gold file:text-g2-darker file:font-medium hover:file:bg-g2-gold-light transition-colors"
              />
              <p className="mt-2 text-xs text-gray-500">
                Max size per file: 10MB • Multiple files allowed
              </p>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-3 py-2 bg-g2-darker rounded-lg"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-300 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                        {file.error && (
                          <p className="text-xs text-red-400 mt-1">{file.error}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        {file.uploading && (
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-g2-gold"></div>
                        )}
                        {file.uploaded && (
                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                        {!file.uploading && !file.uploaded && (
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-400 hover:text-red-300 text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end gap-4">
              <Link
                href="/admin"
                className="px-6 py-3 border border-white/10 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={submitting || !clientId || !title}
                className="px-6 py-3 bg-g2-gold text-g2-darker font-semibold rounded-lg hover:bg-g2-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Creating Project...' : 'Create Project'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
