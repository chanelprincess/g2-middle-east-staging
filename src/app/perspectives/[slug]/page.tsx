import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This will be connected to Supabase in the future
// For now, we'll use a simple placeholder structure
interface PerspectiveData {
  slug: string
  title: string
  author: string
  authorTitle: string
  date: string
  readTime: string
  excerpt: string
  heroImage?: string
  content: string
}

// TODO: Replace with Supabase query
async function getPerspective(slug: string): Promise<PerspectiveData | null> {
  // Placeholder data - will be replaced with Supabase connection
  const placeholderData: Record<string, PerspectiveData> = {
    'competing-ai-arena': {
      slug: 'competing-ai-arena',
      title: 'Competing in the AI Arena: The New Frontier of Brand Strategy',
      author: 'Tim Jacobs',
      authorTitle: 'Regional COO, G2 Middle East',
      date: 'October 2025',
      readTime: '12 min',
      excerpt: 'In an era where AI is reshaping every aspect of business, brands face a critical question: how do you compete when the rules of engagement are being rewritten in real-time?',
      heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80',
      content: '<p>This article will be loaded from Supabase. The content structure matches the legacy PerspectiveDetail.tsx layout exactly.</p>'
    }
  }

  return placeholderData[slug] || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const perspective = await getPerspective(slug)
  
  if (!perspective) {
    return {
      title: 'Article Not Found | G2 Middle East',
    }
  }

  return {
    title: `${perspective.title} | G2 Middle East`,
    description: perspective.excerpt,
    openGraph: {
      title: perspective.title,
      description: perspective.excerpt,
      url: `https://g2middleeast.com/perspectives/${perspective.slug}`,
      type: 'article',
      images: perspective.heroImage ? [{ url: perspective.heroImage }] : [],
    },
  }
}

export default async function PerspectiveDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const perspective = await getPerspective(slug)

  if (!perspective) {
    notFound()
  }

  // Generate Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://g2middleeast.com/perspectives/${perspective.slug}#article`,
        "headline": perspective.title,
        "description": perspective.excerpt,
        "image": perspective.heroImage ? {
          "@type": "ImageObject",
          "url": perspective.heroImage,
          "width": 1200,
          "height": 630,
          "caption": perspective.title
        } : undefined,
        "author": {
          "@type": "Person",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person",
          "name": perspective.author,
          "jobTitle": perspective.authorTitle,
          "url": "https://g2middleeast.com/team/tim-jacobs",
          "sameAs": [
            "https://www.linkedin.com/in/tim-jacobs-6673091a",
            "https://beforeitsnews.com/business/2025/10/the-new-rules-of-digital-authority-mastering-brand-positioning-in-the-ai-era-3771257.html"
          ]
        },
        "publisher": {"@id": "https://g2middleeast.com/#organization"},
        "datePublished": perspective.date,
        "dateModified": perspective.date,
        "inLanguage": "en",
        "articleSection": "Strategic Insights",
        "about": [
          {"@type": "Thing", "name": "Strategic Advisory"},
          {"@type": "Thing", "name": "Brand Architecture"},
          {"@type": "Thing", "name": "Strategic Communications"},
          {"@type": "Thing", "name": "Middle East Business"}
        ],
        "keywords": `${perspective.title}, G2 Middle East, Tim Jacobs, strategic advisory, brand strategy, Middle East, GCC, strategic communications`,
        "isPartOf": {
          "@type": "Blog",
          "@id": "https://g2middleeast.com/perspectives#blog",
          "name": "G2 Middle East Perspectives"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://g2middleeast.com/perspectives/${perspective.slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://g2middleeast.com"},
          {"@type": "ListItem", "position": 2, "name": "Perspectives", "item": "https://g2middleeast.com/perspectives"},
          {"@type": "ListItem", "position": 3, "name": perspective.title, "item": `https://g2middleeast.com/perspectives/${perspective.slug}`}
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Schema.org Structured Data - Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema)
      }} />

      {/* Hero Section with Background Image */}
      <section className="relative py-16 md:py-24 border-b border-white/5 overflow-hidden">
        {/* Hero Image Background with 70% opacity */}
        {perspective.heroImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={perspective.heroImage} 
              alt={perspective.title}
              className="w-full h-full object-cover"
              style={{opacity: 0.7}}
            />
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
          </div>
        )}
        
        {/* Content overlay */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/perspectives" className="inline-flex items-center text-g2-gold hover:text-white transition-colors mb-8">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Perspectives
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {perspective.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-g2-gold/20 flex items-center justify-center">
                  <i className="fas fa-user text-g2-gold"></i>
                </div>
                <div>
                  <div className="text-white font-semibold">{perspective.author}</div>
                  <div className="text-gray-400">{perspective.authorTitle}</div>
                </div>
              </div>
              <div className="text-gray-500">•</div>
              <div className="text-gray-400">{perspective.date}</div>
              <div className="text-gray-500">•</div>
              <div className="text-gray-400">{perspective.readTime} read</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content - TIGHT LinkedIn-style spacing */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto prose prose-invert prose-lg 
            prose-headings:text-white 
            prose-headings:font-bold 
            prose-h2:text-2xl prose-h2:mb-2 prose-h2:mt-6
            prose-h3:text-lg prose-h3:mb-2 prose-h3:mt-5
            prose-p:text-gray-300 prose-p:mb-3 prose-p:leading-normal
            prose-strong:text-white prose-strong:font-semibold
            prose-a:text-g2-gold prose-a:no-underline hover:prose-a:text-white 
            prose-ul:my-3 prose-li:mb-1
            prose-img:my-10 prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: perspective.content }}
          />
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-g2-darker border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-white">More Perspectives</h3>
            <Link href="/perspectives" className="inline-flex items-center text-g2-gold hover:text-white transition-colors">
              View all articles <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Generate static params for known slugs (optional - can be added later with Supabase data)
export async function generateStaticParams() {
  // TODO: Fetch from Supabase
  return [
    { slug: 'competing-ai-arena' },
    { slug: 'digital-authority-ai-era' },
    { slug: 'perilous-path-brand-destruction' },
    { slug: 'converging-virile-viral-approaches' },
    { slug: 'cost-losing-10-percent' },
    { slug: 'artistry-discovery' },
    { slug: 'cultural-intelligence' },
  ]
}
