/**
 * Optimized Embedding Generation Script
 * Memory-efficient version that processes one document at a time
 */

import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const CHUNK_SIZE = 800; // Reduced from 1000
const CHUNK_OVERLAP = 150; // Reduced from 200
const EMBEDDING_MODEL = 'text-embedding-3-small';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!OPENAI_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Missing environment variables');
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

function chunkText(text: string, chunkSize: number, overlap: number): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    let chunk = text.slice(start, end);

    if (end < text.length) {
      const lastPeriod = chunk.lastIndexOf('. ');
      if (lastPeriod > chunkSize * 0.5) {
        chunk = chunk.slice(0, lastPeriod + 1);
      }
    }

    chunks.push(chunk.trim());
    start += chunk.length - overlap;
    
    if (start >= text.length) break;
  }

  return chunks;
}

async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: text,
  });
  return response.data[0]?.embedding || [];
}

async function processDocument(doc: { url: string; title: string; content: string; date?: string }): Promise<number> {
  console.log(`\n📄 Processing: ${doc.title}`);
  
  const textChunks = chunkText(doc.content, CHUNK_SIZE, CHUNK_OVERLAP);
  console.log(`   📦 Split into ${textChunks.length} chunks`);

  let successCount = 0;

  // Process one chunk at a time to save memory
  for (let i = 0; i < textChunks.length; i++) {
    const chunk = textChunks[i];
    
    try {
      console.log(`   ⚙️  Processing chunk ${i + 1}/${textChunks.length}...`);
      
      const embedding = await generateEmbedding(chunk);
      
      const { error } = await supabase.from('documents').insert({
        content: chunk,
        metadata: {
          url: doc.url,
          title: doc.title,
          date: doc.date,
          chunkIndex: i + 1,
          totalChunks: textChunks.length,
        },
        embedding,
      });

      if (error) {
        console.error(`   ❌ Error inserting chunk ${i + 1}:`, error.message);
      } else {
        successCount++;
        console.log(`   ✅ Inserted chunk ${i + 1}`);
      }
      
      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (error) {
      console.error(`   ❌ Error processing chunk ${i + 1}`);
    }
  }

  console.log(`   ✨ Completed: ${successCount}/${textChunks.length} chunks inserted`);
  return successCount;
}

// Smaller documents for testing
const SOURCE_DOCUMENTS = [
  {
    url: 'https://www.g2middleeast.com/briefing/digital-sovereignty-gcc',
    title: 'Digital Sovereignty in the GCC',
    date: '2024-01-15',
    content: `Digital sovereignty has emerged as a critical strategic priority for Gulf Cooperation Council (GCC) nations. This comprehensive analysis examines the multifaceted approach these nations are taking to establish technological independence while fostering innovation.

Data Localization Initiatives: The GCC states have implemented stringent data localization requirements, mandating that sensitive government and citizen data must be stored and processed within national borders. Saudi Arabia's Cloud Computing Regulatory Framework and the UAE's Data Protection Law exemplify this approach.

Indigenous Cloud Infrastructure: Nations are investing billions in developing sovereign cloud platforms. The Saudi Federation for Cybersecurity launched the National Cloud Computing Strategy, while the UAE established G42's data centers as regional technology hubs.

Cybersecurity Frameworks: Robust cybersecurity architectures are fundamental to digital sovereignty. The GCC Unified Cybersecurity Protocol establishes common standards across member states.`.trim(),
  },
  {
    url: 'https://www.g2middleeast.com/briefing/cultural-intelligence-market-entry',
    title: 'Cultural Intelligence in Market Entry',
    date: '2024-02-01',
    content: `Successful market entry in the Middle East requires sophisticated cultural intelligence that transcends basic awareness.

Relationship-Based Business Culture: Middle Eastern business ecosystems operate fundamentally on personal relationships and trust networks. Unlike transactional Western markets, business development here is a long-term investment in relationship capital.

Communication Protocols: Effective communication in the region requires understanding both explicit and implicit messaging. High-context communication means that what is unsaid often carries as much weight as formal statements.

Religious and Cultural Considerations: Islamic principles influence business practices, from prayer times affecting meeting schedules to Ramadan's impact on business rhythms.`.trim(),
  },
];

async function main(): Promise<void> {
  console.log('🚀 G2 Middle East Platform: Optimized Embedding Generation');
  console.log('================================================\n');

  let totalChunks = 0;

  for (const doc of SOURCE_DOCUMENTS) {
    try {
      const chunkCount = await processDocument(doc);
      totalChunks += chunkCount;
    } catch (error) {
      console.error(`\n❌ Failed to process document: ${doc.title}`);
    }
  }

  console.log('\n================================================');
  console.log('✅ Embedding Generation Complete!');
  console.log(`   Total Chunks Inserted: ${totalChunks}`);
  console.log('\n💡 Next Steps:');
  console.log('   1. Test semantic search via /api/search endpoint');
  console.log('   2. Deploy to Vercel staging');
}

main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
