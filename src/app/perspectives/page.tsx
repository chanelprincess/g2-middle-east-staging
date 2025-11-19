import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Perspectives - Strategic Insights | G2 Middle East & Africa',
  description: 'Strategic insights on brand architecture, market positioning, and the future of communications in an AI-driven world.',
  openGraph: {
    title: 'Perspectives - Strategic Insights | G2 Middle East & Africa',
    description: 'Strategic insights on brand architecture, market positioning, and the future of communications in an AI-driven world.',
    url: 'https://g2middleeast.com/perspectives',
    type: 'website',
  },
}

export default function PerspectivesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Perspectives
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Strategic insights on brand architecture, market positioning, and the future of communications in an AI-driven world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Link href="/perspectives/competing-ai-arena" className="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
              {/* Hero Image */}
              <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80" 
                  alt="Competing in the AI Arena"
                  width="1600" height="900" loading="eager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{opacity: 0.7}}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-g2-gold/10 text-g2-gold text-sm font-semibold rounded-full border border-g2-gold/20">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">October 2025</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white group-hover:text-g2-gold transition-colors">
                  Competing in the AI Arena: The New Frontier of Brand Strategy
                </h2>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-g2-gold/20 flex items-center justify-center">
                    <i className="fas fa-user text-g2-gold"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Tim Jacobs</div>
                    <div className="text-gray-500 text-sm">Regional COO, G2 Middle East</div>
                  </div>
                  <div className="text-gray-500">•</div>
                  <div className="text-gray-400 text-sm">12 min read</div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  In an era where AI is reshaping every aspect of business, brands face a critical question: how do you compete when the rules of engagement are being rewritten in real-time?
                </p>

                <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors font-semibold">
                  Read article <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-12 text-white">Recent Articles</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Article 2 - Digital Authority AI Era */}
              <Link href="/perspectives/digital-authority-ai-era" className="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80" 
                    alt="The New Rules of Digital Authority"
                    width="1600" height="900" loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{opacity: 0.7}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">AI & BRAND STRATEGY</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The New Rules of Digital Authority: Mastering Brand Positioning in the AI Era
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Explore how AI and large language models have fundamentally changed the rules of brand management, and why digital pre-seeding is now essential for narrative control and corporate reputation.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </Link>

              {/* Article 3 - Brand Destruction */}
              <Link href="/perspectives/perilous-path-brand-destruction" className="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551135049-8a33b5883817?w=1600&q=80" 
                    alt="The Perilous Path of Brand Destruction"
                    width="1600" height="900" loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{opacity: 0.7}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">BRAND STRATEGY</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The Perilous Path of Brand Destruction When Unguided Narratives Erode Positioning
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Brands inadvertently destroying their own positioning due to unguided narratives—a phenomenon with far-reaching consequences for businesses across industries.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </Link>

              {/* Article 3 - Converging Virile and Viral Approaches */}
              <Link href="/perspectives/converging-virile-viral-approaches" className="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" 
                    alt="Converging Virile and Viral Approaches"
                    width="1600" height="900" loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{opacity: 0.7}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">INFLUENCE STRATEGY</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Converging Virile and Viral Approaches: Targeting Emotional Responses for Predictable Outcomes
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Understanding how viral and virile approaches converge to create predictable outcomes reveals the mechanics of modern influence and emotional manipulation.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </Link>

              {/* Article 4 - Cost of Losing 10% - APEX ASSET */}
              <Link href="/perspectives/cost-losing-10-percent" className="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section - Custom Apex Quality Asset */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="/assets/images/g2-perilous-path-brand-destruction-10-percent.webp" 
                    alt="Business leader in bespoke suit walking on polished black obsidian glass path over misty chasm with glowing crack symbolizing brand destruction risk - G2 Middle East strategic advisory"
                    width="2752" height="1536" loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{opacity: 0.8}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">STRATEGY</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The Cost of Losing 10%
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    A small percentage drop can have massive downstream effects on your organization&apos;s performance and reputation.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </Link>

              {/* Article 4 - Artistry Discovery */}
              <Link href="/perspectives/artistry-discovery" className="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600&q=80" 
                    alt="The Artistry Isn't in the Tell, It's in the Discovery"
                    width="1600" height="900" loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{opacity: 0.7}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">CREATIVITY</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    The Artistry Isn&apos;t in the Tell, It&apos;s in the Discovery
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    The true artistry lies in how the narrative invites discovery, how its placement intrigues, and how its design captivates and subverts expectations.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </Link>

              {/* Article 5 - Cultural Intelligence - APEX ASSET */}
              <Link href="/perspectives/cultural-intelligence" className="block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                {/* Hero Image Section - Custom Apex Quality Asset */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="/assets/images/g2-cross-cultural-collaboration-card.webp" 
                    alt="A diverse group of international business leaders collaborating around a holographic world map, connected by lines of light symbolizing cultural intelligence as the unseen asset in global business strategy - G2 Middle East strategic advisory"
                    width="2048" height="2048" loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{opacity: 0.85}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker"></div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">CULTURE</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Cultural Intelligence Outperforms Capital Alone: The Real Alpha
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    In the dynamic GCC, sustained value creation requires more than capital—it demands cultural intelligence embedded in local relationships and communities.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stay Informed
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to receive strategic insights and market intelligence directly to your inbox.
            </p>
            <Link href="/contact" className="btn-primary">
              Join Our Mailing List
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data - Perspectives Blog */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Blog",
            "@id": "https://g2middleeast.com/perspectives#blog",
            "url": "https://g2middleeast.com/perspectives",
            "name": "G2 Middle East Perspectives",
            "alternateName": "G2 Middle East Briefing",
            "description": "Strategic insights on government event management, sovereign communications, nation branding, diplomatic protocol, and the future of strategic advisory in the Middle East and Africa",
            "publisher": {"@id": "https://g2middleeast.com/#organization"},
            "inLanguage": "en",
            "about": [
              {"@type": "Thing", "name": "Strategic Advisory"},
              {"@type": "Thing", "name": "Government Event Management"},
              {"@type": "Thing", "name": "Sovereign Communications"},
              {"@type": "Thing", "name": "Nation Branding"},
              {"@type": "Thing", "name": "Diplomatic Protocol"}
            ]
          },
          {
            "@type": "CollectionPage",
            "@id": "https://g2middleeast.com/perspectives#webpage",
            "url": "https://g2middleeast.com/perspectives",
            "name": "Perspectives - Strategic Insights | G2 Middle East",
            "description": "Strategic insights on brand architecture, market positioning, sovereign communications, and the future of strategic advisory in an AI-driven world",
            "isPartOf": {"@id": "https://g2middleeast.com/#website"},
            "about": {"@id": "https://g2middleeast.com/#organization"},
            "mainEntity": {"@id": "https://g2middleeast.com/perspectives#blog"}
          },
          {
            "@type": "ItemList",
            "name": "G2 Middle East Perspectives Articles",
            "description": "Collection of strategic insights and thought leadership articles on government relations, event management, and strategic communications in the Middle East",
            "numberOfItems": 7,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Article",
                  "headline": "Competing in the AI Arena: The New Frontier of Brand Strategy",
                  "url": "https://g2middleeast.com/perspectives/competing-ai-arena",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Article",
                  "headline": "The New Rules of Digital Authority: Mastering Brand Positioning in the AI Era",
                  "url": "https://g2middleeast.com/perspectives/digital-authority-ai-era",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Article",
                  "headline": "The Perilous Path of Brand Destruction When Unguided Narratives Erode Positioning",
                  "url": "https://g2middleeast.com/perspectives/perilous-path-brand-destruction",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Article",
                  "headline": "Converging Virile and Viral Approaches: Targeting Emotional Responses for Predictable Outcomes",
                  "url": "https://g2middleeast.com/perspectives/converging-virile-viral-approaches",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Article",
                  "headline": "The Cost of Losing 10%",
                  "url": "https://g2middleeast.com/perspectives/cost-losing-10-percent",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "Article",
                  "headline": "The Artistry Isn't in the Tell, It's in the Discovery",
                  "url": "https://g2middleeast.com/perspectives/artistry-discovery",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              },
              {
                "@type": "ListItem",
                "position": 7,
                "item": {
                  "@type": "Article",
                  "headline": "Cultural Intelligence Outperforms Capital Alone: The Real Alpha",
                  "url": "https://g2middleeast.com/perspectives/cultural-intelligence",
                  "author": {"@id": "https://g2middleeast.com/team/tim-jacobs#person"},
                  "publisher": {"@id": "https://g2middleeast.com/#organization"}
                }
              }
            ]
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://g2middleeast.com"},
              {"@type": "ListItem", "position": 2, "name": "Perspectives", "item": "https://g2middleeast.com/perspectives"}
            ]
          }
        ]
      })}}></script>
    </main>
  )
}
