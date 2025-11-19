/**
 * Minimal Test Embedding Script
 * Generates embeddings for 2 small test documents
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function generateEmbedding(text: string): Promise<number[]> {
  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: text,
    }),
  });

  const data = await response.json();
  return data.data[0].embedding;
}

async function main() {
  console.log('🚀 G2 Middle East: Test Embedding Generation\n');

  const testDocs = [
    {
      title: 'Digital Sovereignty in the GCC',
      url: 'https://www.g2middleeast.com/briefing/digital-sovereignty-gcc',
      content: 'Digital sovereignty has emerged as a critical strategic priority for GCC nations. Data localization initiatives mandate sensitive data storage within national borders.',
    },
    {
      title: 'Cultural Intelligence in Market Entry',
      url: 'https://www.g2middleeast.com/briefing/cultural-intelligence',
      content: 'Middle Eastern business requires sophisticated cultural intelligence. Relationship-based business culture operates on personal trust networks.',
    },
  ];

  for (const doc of testDocs) {
    console.log(`📄 Processing: ${doc.title}`);
    
    const embedding = await generateEmbedding(doc.content);
    
    const { error } = await supabase.from('documents').insert({
      content: doc.content,
      metadata: { title: doc.title, url: doc.url },
      embedding,
    });

    if (error) {
      console.log(`   ❌ Error: ${error.message}`);
    } else {
      console.log(`   ✅ Inserted successfully`);
    }
  }

  console.log('\n✅ Complete! Test embeddings generated.');
}

main();
