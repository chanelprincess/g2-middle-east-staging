/**
 * Storage Utilities
 * Helper functions for uploading files to Supabase Storage
 */

import { createClient } from '@/utils/supabase/client';

export interface UploadResult {
  success: boolean;
  path?: string;
  url?: string;
  error?: string;
}

/**
 * Upload file to public-assets bucket
 * Returns public URL
 */
export async function uploadPublicAsset(
  file: File,
  folder: string = 'blog'
): Promise<UploadResult> {
  try {
    const supabase = createClient();
    
    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

    // Upload to public-assets bucket
    const { data, error } = await supabase.storage
      .from('public-assets')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('public-assets')
      .getPublicUrl(data.path);

    return {
      success: true,
      path: data.path,
      url: urlData.publicUrl
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed'
    };
  }
}

/**
 * Upload file to secure-assets bucket
 * Returns storage path (use createSignedUrl to generate access URL)
 */
export async function uploadSecureAsset(
  file: File,
  folder: string = 'projects'
): Promise<UploadResult> {
  try {
    const supabase = createClient();
    
    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

    // Upload to secure-assets bucket
    const { data, error } = await supabase.storage
      .from('secure-assets')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    return {
      success: true,
      path: data.path
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed'
    };
  }
}

/**
 * Delete file from storage
 */
export async function deleteFile(
  bucket: 'public-assets' | 'secure-assets',
  path: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = createClient();
    
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Delete failed'
    };
  }
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Validate file type
 */
export function validateFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type);
}

/**
 * Validate file size (in MB)
 */
export function validateFileSize(file: File, maxSizeMB: number): boolean {
  return file.size <= maxSizeMB * 1024 * 1024;
}
