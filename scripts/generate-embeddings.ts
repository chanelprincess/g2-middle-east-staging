/**
 * G2 Middle East Platform: Embedding Generation Script
 * 
 * Purpose: Generate OpenAI embeddings for semantic search
 * Model: text-embedding-3-small (1536 dimensions)
 * 
 * Usage:
 *   1. Set environment variables: OPENAI_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *   2. Run: npx tsx scripts/generate-embeddings.ts
 * 
 * Features:
 *   - Text chunking (~1000 characters with overlap)
 *   - Batch processing for efficiency
 *   - Metadata preservation (URL, title, date)
 *   - Progress tracking
 *   - Error handling and retry logic
 */

import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

// ========================================
// CONFIGURATION
// ========================================
const CHUNK_SIZE = 1000; // Target characters per chunk
const CHUNK_OVERLAP = 200; // Overlap between chunks for context preservation
const EMBEDDING_MODEL = 'text-embedding-3-small';
const BATCH_SIZE = 10; // Process 10 chunks at a time

// ========================================
// ENVIRONMENT VALIDATION
// ========================================
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!OPENAI_API_KEY) {
  console.error('❌ Missing OPENAI_API_KEY environment variable');
  process.exit(1);
}

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

// Initialize clients
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ========================================
// TYPES
// ========================================
interface DocumentChunk {
  content: string;
  metadata: {
    url: string;
    title: string;
    section?: string;
    date?: string;
    chunkIndex?: number;
    totalChunks?: number;
  };
}

interface SourceDocument {
  url: string;
  title: string;
  content: string;
  date?: string;
}

// ========================================
// TEXT CHUNKING
// ========================================
/**
 * Split text into overlapping chunks for better context preservation
 */
function chunkText(text: string, chunkSize: number, overlap: number): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    let chunk = text.slice(start, end);

    // Try to break at sentence boundaries
    if (end < text.length) {
      const lastPeriod = chunk.lastIndexOf('. ');
      const lastNewline = chunk.lastIndexOf('\n');
      const breakPoint = Math.max(lastPeriod, lastNewline);

      if (breakPoint > chunkSize * 0.5) {
        chunk = chunk.slice(0, breakPoint + 1);
      }
    }

    chunks.push(chunk.trim());
    start += chunk.length - overlap;
  }

  return chunks;
}

// ========================================
// EMBEDDING GENERATION
// ========================================
/**
 * Generate embedding for a single text chunk
 */
async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: text,
    });

    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

/**
 * Process a single document: chunk, embed, and store
 */
async function processDocument(doc: SourceDocument): Promise<number> {
  console.log(`\n📄 Processing: ${doc.title}`);
  console.log(`   URL: ${doc.url}`);

  // Split into chunks
  const textChunks = chunkText(doc.content, CHUNK_SIZE, CHUNK_OVERLAP);
  console.log(`   📦 Split into ${textChunks.length} chunks`);

  let successCount = 0;

  // Process chunks in batches
  for (let i = 0; i < textChunks.length; i += BATCH_SIZE) {
    const batch = textChunks.slice(i, Math.min(i + BATCH_SIZE, textChunks.length));
    
    console.log(`   ⚙️  Processing chunks ${i + 1}-${i + batch.length}...`);

    // Generate embeddings for batch
    const embeddings = await Promise.all(
      batch.map((chunk) => generateEmbedding(chunk))
    );

    // Prepare records for insertion
    const records = batch.map((chunk, idx) => ({
      content: chunk,
      metadata: {
        url: doc.url,
        title: doc.title,
        date: doc.date,
        chunkIndex: i + idx + 1,
        totalChunks: textChunks.length,
      },
      embedding: embeddings[idx],
    }));

    // Insert into Supabase
    const { error } = await supabase.from('documents').insert(records);

    if (error) {
      console.error(`   ❌ Error inserting batch ${i + 1}:`, error);
    } else {
      successCount += batch.length;
      console.log(`   ✅ Inserted chunks ${i + 1}-${i + batch.length}`);
    }
  }

  console.log(`   ✨ Completed: ${successCount}/${textChunks.length} chunks inserted`);
  return successCount;
}

// ========================================
// SOURCE DOCUMENTS
// ========================================
/**
 * Define your source documents here
 * In production, you might load these from files, API, or CMS
 */
const SOURCE_DOCUMENTS: SourceDocument[] = [
  {
    url: 'https://www.g2middleeast.com/briefing/digital-sovereignty-gcc',
    title: 'Digital Sovereignty in the GCC',
    date: '2024-01-15',
    content: `
Digital sovereignty has emerged as a critical strategic priority for Gulf Cooperation Council (GCC) nations. This comprehensive analysis examines the multifaceted approach these nations are taking to establish technological independence while fostering innovation.

Data Localization Initiatives:
The GCC states have implemented stringent data localization requirements, mandating that sensitive government and citizen data must be stored and processed within national borders. This policy serves multiple objectives: enhancing national security, protecting citizen privacy, and building domestic technological capabilities. Saudi Arabia's Cloud Computing Regulatory Framework and the UAE's Data Protection Law exemplify this approach.

Indigenous Cloud Infrastructure:
Nations are investing billions in developing sovereign cloud platforms. The Saudi Federation for Cybersecurity and Programming launched the National Cloud Computing Strategy, while the UAE established G42's data centers as regional technology hubs. These initiatives reduce dependence on foreign cloud providers while creating opportunities for local tech talent.

Cybersecurity Frameworks:
Robust cybersecurity architectures are fundamental to digital sovereignty. The GCC Unified Cybersecurity Protocol establishes common standards across member states, covering critical infrastructure protection, incident response, and information sharing mechanisms.

Economic Implications:
Digital sovereignty initiatives are catalyzing the growth of local technology ecosystems. Venture capital investment in GCC tech startups reached $2.3 billion in 2023, with significant capital flowing into cybersecurity, cloud services, and AI companies. This investment is creating high-value employment opportunities and reducing brain drain.

International Partnerships:
While pursuing sovereignty, GCC nations maintain strategic technology partnerships with established players. However, these relationships increasingly emphasize technology transfer, joint development, and local capacity building rather than simple procurement.

Strategic Recommendations:
G2 Middle East advises clients on navigating this evolving landscape through: (1) Compliance audits ensuring adherence to data localization requirements, (2) Partnership strategies balancing sovereignty objectives with technology access, (3) Investment opportunities in emerging local tech champions, (4) Risk mitigation strategies for technology supply chain vulnerabilities.
    `.trim(),
  },
  {
    url: 'https://www.g2middleeast.com/briefing/cultural-intelligence-market-entry',
    title: 'Cultural Intelligence in Middle East Market Entry',
    date: '2024-02-01',
    content: `
Successful market entry in the Middle East requires sophisticated cultural intelligence that transcends basic awareness. This briefing provides strategic guidance for organizations seeking to establish or expand operations in the region.

Relationship-Based Business Culture:
Middle Eastern business ecosystems operate fundamentally on personal relationships and trust networks. Unlike transactional Western markets, business development here is a long-term investment in relationship capital. Initial meetings focus on building rapport rather than immediate deals. G2 Middle East facilitates these critical relationship-building phases through strategic introductions to key decision-makers.

Communication Protocols:
Effective communication in the region requires understanding both explicit and implicit messaging. High-context communication means that what is unsaid often carries as much weight as formal statements. Hierarchy matters: decisions typically flow from senior leadership, and understanding organizational power structures is essential. We advise clients on appropriate communication channels, timing, and cultural nuances.

Religious and Cultural Considerations:
Islamic principles influence business practices, from prayer times affecting meeting schedules to Ramadan's impact on business rhythms. Halal compliance matters beyond food industries, extending to finance, pharmaceuticals, and cosmetics. Gender dynamics in business settings vary by country and organization, requiring adaptive approaches.

Government Relations and Regulatory Environment:
Public and private sectors are deeply intertwined. Government relationships are not merely regulatory compliance but strategic partnerships. Understanding which ministries, agencies, and officials influence specific sectors is critical. G2's government relations expertise provides clients with navigation strategies for complex bureaucratic environments.

Local Partnership Structures:
Most GCC nations require foreign investors to establish local partnerships or joint ventures. Selecting the right local partner is perhaps the most critical market entry decision. We conduct comprehensive due diligence on potential partners, evaluating not just financial capacity but relationship networks, reputation, and strategic alignment.

Negotiation Dynamics:
Negotiations in the Middle East follow distinct patterns. Initial positions may appear far apart, with extensive back-and-forth expected. Patience is essential; rushing the process signals disrespect or desperation. Face-saving mechanisms must be built into agreements to allow both parties to claim success.

Strategic Entry Modes:
G2 Middle East recommends phased market entry approaches: (1) Market intelligence and relationship building (6-12 months), (2) Strategic partnership identification and due diligence (3-6 months), (3) Pilot operations or joint ventures (12-24 months), (4) Full-scale operations with local management integration.

Common Pitfalls:
Organizations frequently fail by: underestimating relationship-building timelines, applying Western business models without adaptation, neglecting government stakeholder mapping, selecting partners based solely on financial criteria, or lacking patience during protracted negotiation processes.

Case Study Example:
A European technology firm's successful Saudi market entry illustrates best practices. Rather than rushing direct sales, they invested 18 months building relationships through industry events, strategic advisory board participation, and thought leadership. This groundwork led to a joint venture with a well-connected Saudi family office, combining the firm's technology with local market access and government relationships.
    `.trim(),
  },
  {
    url: 'https://www.g2middleeast.com/briefing/energy-transition-gcc',
    title: 'Energy Transition Strategies in the GCC',
    date: '2024-02-20',
    content: `
Gulf Cooperation Council nations are orchestrating one of the most ambitious energy transitions in history, balancing their traditional hydrocarbon dominance with aggressive renewable energy deployment and economic diversification strategies.

Strategic Imperatives:
The GCC's energy transition is driven by multiple factors: global decarbonization pressures, long-term oil demand uncertainty, economic diversification imperatives, and opportunities to leverage abundant solar resources. Unlike purely environmental motivations in some regions, GCC strategies explicitly balance energy security, economic development, and climate objectives.

Renewable Energy Megaprojects:
The scale of renewable deployment is staggering. Saudi Arabia's Vision 2030 targets 50% renewable electricity generation by 2030, requiring 58.7 GW of renewable capacity. The UAE's Mohammed bin Rashid Al Maktoum Solar Park will ultimately produce 5,000 MW, making it one of the world's largest solar installations. Oman is developing 10 GW of renewable capacity by 2030 focused on green hydrogen production.

Green Hydrogen Economy:
GCC nations are positioning themselves as future global green hydrogen suppliers. Saudi Arabia's NEOM project includes the world's largest green hydrogen plant (4 GW electrolyzer capacity). The UAE and Oman are developing similar facilities. This strategy leverages cheap renewable electricity, existing energy export infrastructure, and proximity to key European and Asian markets.

Carbon Capture and Storage:
Alongside renewables, CCS technology features prominently in GCC decarbonization strategies. Saudi Aramco's Hawiyah CCS facility captures 0.8 million tons of CO2 annually. ADNOC's Al Reyadah CCS plant injects CO2 into oil reservoirs for enhanced recovery while sequestering emissions. These projects position the GCC as CCS technology leaders.

Petrochemical Industry Evolution:
Rather than abandoning hydrocarbons, GCC strategies emphasize moving up the value chain. Focus is shifting from crude oil exports to high-value petrochemicals, plastics, and specialty chemicals. Investments in carbon-neutral or carbon-negative production processes aim to maintain competitiveness in a decarbonizing global economy.

Nuclear Energy Development:
The UAE's Barakah Nuclear Power Plant, now fully operational with 5.6 GW capacity, provides approximately 25% of the nation's electricity. Saudi Arabia has announced plans for 2.9 GW of nuclear capacity as part of its baseload power strategy. Nuclear energy is viewed as essential for reliable, low-carbon electricity.

Economic Diversification Linkages:
Energy transition initiatives are explicitly linked to broader economic diversification. Renewable energy projects create domestic manufacturing opportunities, technology transfer requirements, and local employment. The UAE's Masdar City demonstrates integrated approaches combining renewable energy, sustainable urban development, and technology sector growth.

Private Sector Opportunities:
Energy transition opens vast commercial opportunities across multiple sectors: renewable energy development and operations, energy storage systems, smart grid technology, EV charging infrastructure, green hydrogen production and export, carbon trading platforms, sustainable finance instruments, and energy efficiency solutions.

Regulatory Evolution:
Regulatory frameworks are rapidly evolving to support transition objectives. Power sector reforms introduce competition and independent power producers. Green finance regulations facilitate capital flows to sustainable projects. Technology transfer requirements in major projects build local capabilities.

Strategic Investment Priorities:
G2 Middle East identifies priority areas for client engagement: (1) Renewable energy project partnerships and investment opportunities, (2) Green hydrogen value chain participation, (3) CCS technology deployment and carbon credit strategies, (4) Sustainable finance and ESG compliance advisory, (5) Technology transfer and local capability development partnerships.

Geopolitical Implications:
The GCC's energy transition has significant geopolitical dimensions. Success in renewable energy and green hydrogen could maintain the region's energy superpower status beyond the oil age. Competition with other aspiring green hydrogen exporters (Australia, Chile, North Africa) is intensifying. Energy transition diplomacy is becoming as important as traditional energy diplomacy.
    `.trim(),
  },
  {
    url: 'https://www.g2middleeast.com/briefing/saudi-vision-2030-update',
    title: "Saudi Vision 2030: 2024 Progress Assessment",
    date: '2024-03-10',
    content: `
Saudi Arabia's Vision 2030 transformation program has entered its critical implementation phase. This assessment evaluates progress across key pillars and identifies strategic opportunities for international engagement.

Macroeconomic Indicators:
Non-oil revenue reached 44% of total government revenue in 2023, up from 29% in 2015, demonstrating substantial diversification progress. Foreign direct investment inflows exceeded $18 billion in 2023, though still below the $100 billion annual target. Private sector contribution to GDP has grown to 48%, approaching the 65% target. Female workforce participation reached 35.6%, significantly surpassing the 30% milestone.

NEOM and Giga-Projects:
NEOM development is proceeding with $500 billion in committed investment. The Line's construction has begun with initial infrastructure development visible. Trojena mountain resort is on track for 2026 Asian Winter Games hosting. Sindalah luxury island resort opened in 2023. However, scope adjustments and timeline revisions reflect pragmatic recalibration of initial ambitions.

Red Sea Project and Tourism:
The Red Sea Project represents Saudi Arabia's luxury tourism ambitions, targeting ultra-high-net-worth travelers with 90-island development. Phase One completion scheduled for 2024 includes 16 hotels and luxury residences. The broader tourism strategy aims for 100 million annual visitors by 2030, up from 64 million in 2023. Religious tourism (Hajj and Umrah) remains foundational, while cultural and entertainment tourism is expanding.

Financial Sector Transformation:
The Saudi Exchange (Tadawul) now includes over 200 listed companies with $2.7 trillion market capitalization. Capital market reforms have increased foreign investor participation. The fintech sector is booming with 140+ licensed fintech companies. The Riyadh Financial District is attracting regional headquarters relocations.

Entertainment and Quality of Life:
The Entertainment sector has undergone revolutionary change. Saudi Arabia now hosts Formula 1, LIV Golf, Riyadh Season festivals, and major concerts. Cinema screens nationwide exceed 500, compared to zero before 2018. These developments directly support talent retention and attraction objectives.

Defense and Security Industries:
The General Authority for Defense Development (GADE) aims for 50% defense equipment localization by 2030. SAMI (Saudi Arabian Military Industries) is establishing joint ventures with global defense contractors. This initiative combines security objectives with industrial development and technology transfer.

Education and Human Capital:
Major investments in education seek to build knowledge economy foundations. Partnerships with leading global universities are expanding. STEM education emphasis is evident in curriculum reforms. Scholarship programs are evolving from pure overseas education to blended models incorporating domestic institutions.

Technology and Innovation:
The Saudi Digital Academy is training 20,000 digital specialists annually. Coding bootcamps and accelerator programs are proliferating. AI and data science investments position Saudi Arabia as a regional technology hub. Government digitization is reducing bureaucracy and improving business environment.

Implementation Challenges:
Several challenges are evident: (1) Execution capacity constraints as multiple megaprojects compete for resources and talent, (2) Private sector development lagging behind infrastructure investment, (3) Cultural adaptation to rapid social change, (4) Dependence on oil revenue despite diversification progress, (5) Regional geopolitical tensions affecting investor confidence.

Opportunities for Strategic Engagement:
G2 Middle East identifies priority areas for client engagement: (1) Tourism development partnerships in luxury, cultural, and sports tourism, (2) Financial services and fintech opportunities in expanding capital markets, (3) Defense industry joint ventures and technology transfer, (4) Entertainment and media content partnerships, (5) Education and training program development, (6) Smart city technology and infrastructure projects, (7) Healthcare sector expansion addressing growing population needs.

Assessment Conclusion:
Vision 2030 represents a genuine transformation, not merely aspirational rhetoric. While timelines and specific targets are adjusting, the fundamental commitment to economic diversification, social reform, and global engagement is unwavering. The scale of investment and policy reform is creating unprecedented opportunities for international businesses with appropriate cultural intelligence, local partnerships, and long-term orientation.
    `.trim(),
  },
  {
    url: 'https://www.g2middleeast.com/briefing/uae-fintech-ecosystem',
    title: 'UAE Fintech Ecosystem Analysis',
    date: '2024-03-25',
    content: `
The United Arab Emirates has established itself as the Middle East's leading fintech hub, combining regulatory innovation, strategic geographic positioning, and ambitious digital economy objectives.

Regulatory Environment:
The UAE Central Bank's Financial Infrastructure Transformation Program provides the regulatory foundation for fintech innovation. The Stored Values Facilities (SVF) regime regulates digital wallets and payment services. Regulatory sandboxes allow fintech startups to test products under supervised conditions before full licensing. Abu Dhabi Global Market (ADGM) and Dubai International Financial Centre (DIFC) offer specialized frameworks for financial innovation.

Digital Banking Revolution:
Digital-only banks are disrupting traditional banking. Mashreq Neo, Liv by Emirates NBD, and YAP offer mobile-first banking experiences. Wio Bank received a digital banking license, becoming the UAE's first platform bank. These institutions target tech-savvy millennials and Gen Z customers with streamlined onboarding and innovative features.

Payment System Innovation:
The UAE's Instant Payment Platform (IPP) enables real-time fund transfers between banks. Digital wallets like Beam, Spotii, and PayBy are expanding rapidly. Buy-now-pay-later (BNPL) services are proliferating in e-commerce. Cross-border payment solutions address the UAE's large expatriate population's remittance needs.

Cryptocurrency and Blockchain:
Dubai's Virtual Asset Regulatory Authority (VARA) provides comprehensive crypto regulation. Major crypto exchanges including Binance, Bybit, and Crypto.com have secured Dubai licenses. Blockchain applications extend beyond cryptocurrency to supply chain management, real estate transactions, and government services. The UAE is positioning itself as a global crypto hub with clear regulatory frameworks contrasting with uncertainty in many other jurisdictions.

Wealth Management and Investment Technology:
Robo-advisory platforms are democratizing investment management. Sarwa, Wahed Invest, and Zoya offer automated portfolio management with low minimum investments. These platforms particularly appeal to younger investors and expatriates seeking simple, accessible investment vehicles.

Islamic Fintech:
Shariah-compliant fintech solutions represent a significant market segment. Islamic neo-banks, halal investment platforms, and Zakat calculation tools serve Muslim consumers. This niche has global export potential given the 1.8 billion global Muslim population.

Regulatory Technology (RegTech):
Financial institutions face increasing compliance complexity. RegTech solutions automate KYC/AML processes, sanctions screening, and regulatory reporting. UAE companies like NymCard and Mitigram are developing solutions with regional and global applications.

Insurtech Emergence:
Digital insurance platforms are modernizing a traditionally conservative sector. On-demand insurance, usage-based policies, and streamlined claims processing are emerging. Partnerships between insurtech startups and established insurers are accelerating innovation.

Venture Capital and Funding:
UAE fintech venture capital investment reached $635 million in 2023, representing 45% of total MENA fintech funding. Government-backed funds like Mubadala and ADQ are active investors. International VCs including Tiger Global and Sequoia have deployed capital in UAE fintech.

Challenges and Opportunities:
Key challenges include: (1) Talent acquisition competing with global fintech hubs, (2) Customer acquisition costs in competitive market, (3) Path to profitability for startups, (4) Regulatory compliance complexity, (5) Cybersecurity threats requiring robust defenses.

Strategic opportunities include: (1) Regional expansion leveraging UAE as regional hub, (2) Technology export to emerging fintech markets, (3) Partnership opportunities with traditional financial institutions, (4) Blockchain infrastructure development, (5) Islamic fintech solutions with global reach.

Government Vision:
The UAE government's ambition is explicit: become the world's leading digital economy. Financial technology is a core pillar of this vision. Regulatory support, infrastructure investment, and active promotion position the UAE as fintech destination.

Recommendations for Market Entry:
G2 Middle East advises fintech companies considering UAE market entry to: (1) Carefully evaluate DIFC, ADGM, or mainland licensing based on business model, (2) Secure local partnerships for market access and regulatory navigation, (3) Invest in robust compliance infrastructure from inception, (4) Develop culturally appropriate products for diverse population, (5) Plan regional expansion strategy from outset, not afterthought.
    `.trim(),
  },
];

// ========================================
// MAIN EXECUTION
// ========================================
async function main(): Promise<void> {
  console.log('🚀 G2 Middle East Platform: Embedding Generation');
  console.log('================================================\n');
  console.log(`📊 Configuration:`);
  console.log(`   Model: ${EMBEDDING_MODEL}`);
  console.log(`   Chunk Size: ${CHUNK_SIZE} characters`);
  console.log(`   Chunk Overlap: ${CHUNK_OVERLAP} characters`);
  console.log(`   Batch Size: ${BATCH_SIZE} chunks`);
  console.log(`   Documents: ${SOURCE_DOCUMENTS.length}`);

  let totalChunks = 0;
  let totalDocuments = 0;

  for (const doc of SOURCE_DOCUMENTS) {
    try {
      const chunkCount = await processDocument(doc);
      totalChunks += chunkCount;
      totalDocuments += 1;
    } catch (error) {
      console.error(`\n❌ Failed to process document: ${doc.title}`);
      console.error(error);
    }
  }

  console.log('\n================================================');
  console.log('✅ Embedding Generation Complete!');
  console.log(`   Documents Processed: ${totalDocuments}/${SOURCE_DOCUMENTS.length}`);
  console.log(`   Total Chunks Inserted: ${totalChunks}`);
  console.log('\n💡 Next Steps:');
  console.log('   1. Test semantic search via /api/search endpoint');
  console.log('   2. Try queries like: "What are G2\'s positions on digital sovereignty?"');
  console.log('   3. Monitor vector search performance in Supabase dashboard');
}

// Run the script
main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
