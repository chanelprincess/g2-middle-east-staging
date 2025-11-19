import { Metadata } from 'next'
import Link from 'next/link'
import { WithContext, BreadcrumbList, FAQPage, HowTo, WebPage } from 'schema-dts'

export const metadata: Metadata = {
  title: 'Strategic Services - G2 Middle East & Africa',
  description: 'Strategic communications and brand architecture for sovereign entities and global brands. From national strategy to major event delivery.',
  openGraph: {
    title: 'Strategic Services - G2 Middle East & Africa',
    description: 'Strategic communications and brand architecture for sovereign entities and global brands.',
    url: 'https://g2middleeast.com/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  // Enhanced Schema with @graph structure - Individual Service schemas + Organization
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const servicesSchema: any = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://g2middleeast.com/#organization",
        "name": "G2 Middle East & Africa",
        "description": "Strategic communications and brand architecture for sovereign entities and global brands",
        "url": "https://g2middleeast.com",
        "logo": "https://g2middleeast.com/assets/logo-g2me.svg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mazyad Offices 3 - Office 36",
          "addressLocality": "Mohammed Bin Zayed City",
          "addressRegion": "Abu Dhabi",
          "addressCountry": "AE"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971-02-654-4049",
          "email": "tim@g2middleeast.com",
          "contactType": "New Business & Strategic Enquiries"
        }
      },
      // Individual Service 1: Sovereign & Governmental Services
      {
        "@type": "Service",
        "@id": "https://g2middleeast.com/services#sovereign",
        "name": "Sovereign & Governmental Services",
        "description": "Strategic positioning and narrative architecture for nations, governments, and sovereign entities. National strategy, global stakeholder engagement, and sovereign experience design.",
        "serviceType": "Government Event Management",
        "provider": {
          "@id": "https://g2middleeast.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Middle East and Africa"
        },
        "url": "https://g2middleeast.com/services#sovereign"
      },
      // Individual Service 2: Global Brand & Luxury
      {
        "@type": "Service",
        "@id": "https://g2middleeast.com/services#luxury",
        "name": "Global Brand & Luxury Targeted Experiences",
        "description": "Strategic positioning and experience design for luxury brands and global enterprises. Prestige brand architecture, luxury experiences, and market entry strategies.",
        "serviceType": "Luxury Brand Positioning",
        "provider": {
          "@id": "https://g2middleeast.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Middle East and Africa"
        },
        "url": "https://g2middleeast.com/services#luxury"
      },
      // Individual Service 3: Strategic Communications
      {
        "@type": "Service",
        "@id": "https://g2middleeast.com/services#strategic",
        "name": "Strategic Communications & Narrative Control",
        "description": "High-stakes communication strategy and narrative development. Crisis communications, thought leadership programs, and stakeholder alignment.",
        "serviceType": "Strategic Communications",
        "provider": {
          "@id": "https://g2middleeast.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Middle East and Africa"
        },
        "url": "https://g2middleeast.com/services#strategic"
      },
      // Individual Service 4: Major Event Architecture
      {
        "@type": "Service",
        "@id": "https://g2middleeast.com/services#events",
        "name": "Major Event Architecture & Delivery",
        "description": "End-to-end conceptualization and execution of events of national and international importance. Mega-project blueprinting, financial modelling, and flawless operational delivery.",
        "serviceType": "Event Management",
        "provider": {
          "@id": "https://g2middleeast.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Middle East and Africa"
        },
        "url": "https://g2middleeast.com/services#events"
      },
      // Individual Service 5: Personal Brand & Reputation
      {
        "@type": "Service",
        "@id": "https://g2middleeast.com/services#crisis",
        "name": "Personal Brand & Reputation Positioning",
        "description": "Proactive executive brand positioning and digital legacy management. Strategic brand foundation, authority amplification, and digital legacy management.",
        "serviceType": "Reputation Management",
        "provider": {
          "@id": "https://g2middleeast.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Middle East and Africa"
        },
        "url": "https://g2middleeast.com/services#crisis"
      },
      // Individual Service 6: Corporate & Shareholder Engagement
      {
        "@type": "Service",
        "@id": "https://g2middleeast.com/services#corporate",
        "name": "Corporate & Shareholder Engagement",
        "description": "High-impact corporate events and stakeholder alignment strategies. High-impact AGMs, IPO & M&A communications, and C-suite message delivery.",
        "serviceType": "Corporate Communications",
        "provider": {
          "@id": "https://g2middleeast.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Middle East and Africa"
        },
        "url": "https://g2middleeast.com/services#corporate"
      },
      // Individual Service 7: Cultural Diplomacy & Placemaking
      {
        "@type": "Service",
        "@id": "https://g2middleeast.com/services#cultural",
        "name": "Cultural Diplomacy & Placemaking",
        "description": "Building cultural capital through strategic cultural events and legacy placemaking. National identity showcases, international soft power initiatives, and legacy placemaking.",
        "serviceType": "Cultural Events",
        "provider": {
          "@id": "https://g2middleeast.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Middle East and Africa"
        },
        "url": "https://g2middleeast.com/services#cultural"
      },
      // Individual Service 8: Experience Design & Immersive Targeting
      {
        "@type": "Service",
        "@id": "https://g2middleeast.com/services#experience",
        "name": "Experience Design & Immersive Targeting",
        "description": "Engineering deep audience engagement through immersive experiences and sensory design. Audience journey mapping, immersive technology integration, and sensory design.",
        "serviceType": "Experience Design",
        "provider": {
          "@id": "https://g2middleeast.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Middle East and Africa"
        },
        "url": "https://g2middleeast.com/services#experience"
      },
      // Individual Service 9: Approach Modelling & ROI
      {
        "@type": "Service",
        "@id": "https://g2middleeast.com/services#roi",
        "name": "Approach Modelling & ROI",
        "description": "Measuring intangible value and providing C-suite financial justification for strategic projects. Intangible value metrics, C-suite financial justification, and ROI forecasting.",
        "serviceType": "Strategic Analysis",
        "provider": {
          "@id": "https://g2middleeast.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Middle East and Africa"
        },
        "url": "https://g2middleeast.com/services#roi"
      }
    ]
  }

  // BreadcrumbList Schema for Services Page
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://g2middleeast.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://g2middleeast.com/services"
      }
    ]
  }

  // FAQPage Schema for AI/LLM Optimization
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes G2 Middle East different from other event management companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East specializes exclusively in sovereign-level strategic counsel and government event management. Unlike traditional event agencies, we operate at the intersection of policy, diplomacy, and execution. Our team has delivered 50+ major government projects including the Papal Mass Abu Dhabi (180,000 attendees), Queen Elizabeth II State Visit, and COP27 Egypt. We provide strategic positioning counsel first, then architect flawless execution—ensuring every event advances national objectives and creates lasting legacy."
        }
      },
      {
        "@type": "Question",
        "name": "Which governments and regions does G2 Middle East serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East serves governments, sovereign entities, and global brands across the GCC and MENA region. Our primary markets include United Arab Emirates, Saudi Arabia, Qatar, Egypt, Bahrain, Kuwait, and Oman. We have delivered projects for UAE Federal Government, Abu Dhabi Government, Saudi Arabian authorities, Egyptian Government (COP27), and international organizations including the Vatican, United Nations, and Special Olympics. Our headquarters is in Abu Dhabi with regional reach across Middle East and Africa."
        }
      },
      {
        "@type": "Question",
        "name": "What types of events does G2 Middle East manage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East manages events of national and international significance: State visits and royal engagements (Queen Elizabeth II State Visit UAE), religious landmark events (Papal Mass Abu Dhabi - 180,000 attendees), international summits (COP27 Egypt), humanitarian sporting events (Special Olympics World Games), national day celebrations, cultural heritage festivals (Qasr Al Hosn Festival), diplomatic protocols, VIP hospitality programs, and crisis communications. We specialize in high-stakes government events where strategic positioning and flawless execution are non-negotiable."
        }
      },
      {
        "@type": "Question",
        "name": "How do I engage G2 Middle East for strategic counsel or event management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial engagement begins with a confidential strategic consultation where we assess your objectives, stakeholders, and desired outcomes. Contact Tim Jacobs, Regional COO, directly at tim@g2middleeast.com or call +971-02-654-4049. We guarantee 24-hour response for government and sovereign entity inquiries. Our process: (1) Strategic discovery session, (2) Bespoke proposal with strategic framework, (3) Stakeholder alignment, (4) Execution blueprinting, (5) Operational delivery. We serve governments, royal families, sovereign wealth funds, and global brands requiring discretion, strategic acumen, and flawless execution."
        }
      }
    ]
  }

  // HowTo Schema - How to Engage G2 Middle East
  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Engage G2 Middle East for Strategic Counsel and Event Management",
    "description": "A step-by-step guide for governments and organizations to engage G2 Middle East for strategic advisory and world-class event management services",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Initial Contact",
        "text": "Contact Tim Jacobs, Regional COO, at tim@g2middleeast.com or call +971-02-654-4049. We guarantee 24-hour response for government and sovereign entity inquiries.",
        "url": "https://g2middleeast.com/contact"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Strategic Discovery Session",
        "text": "Participate in a confidential consultation where we assess your strategic objectives, key stakeholders, geopolitical context, and desired outcomes. This session establishes the strategic foundation.",
        "url": "https://g2middleeast.com/services"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Bespoke Proposal Development",
        "text": "Receive a comprehensive proposal including strategic positioning framework, execution blueprint, stakeholder engagement plan, budget modeling, and ROI forecasting tailored to your specific objectives.",
        "url": "https://g2middleeast.com/services"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Stakeholder Alignment",
        "text": "We facilitate alignment sessions with key stakeholders—government ministries, royal offices, diplomatic corps, international partners—to ensure unified strategic direction and buy-in.",
        "url": "https://g2middleeast.com/services"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Execution & Delivery",
        "text": "Our team executes the strategic plan with military precision—managing logistics, protocols, communications, VIP coordination, media relations, and crisis management. We deliver flawless execution that creates lasting legacy.",
        "url": "https://g2middleeast.com/projects"
      }
    ]
  }

  // Speakable Schema for Voice Search Optimization
  const speakableSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "G2 Middle East Services - Strategic Counsel and Event Management",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".service-intro", ".service-summary"]
    }
  }

  return (
    <>
      {/* Schema.org JSON-LD - Organization & Services */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(servicesSchema)
      }} />

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }} />

      {/* FAQPage Schema - AI/LLM Optimization */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }} />

      {/* HowTo Schema - Engagement Process */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(howToSchema)
      }} />

      {/* Speakable Schema - Voice Search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(speakableSchema)
      }} />

      {/* Hero Section */}
      <section className="relative py-32 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Strategic Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed fade-in-delay-1 service-intro">
              We architect intangible value through sophisticated communication and experience design. 
              Our services transform complexity into competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Sovereign & Governmental Services */}
      <section id="sovereign" className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                01. Sovereign & Governmental Services
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Strategic Positioning for Nations
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We work with governments, sovereign entities, and national institutions to architect 
                compelling narratives that position nations strategically on the global stage.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">National Strategy</h3>
                    <p className="text-gray-400">Architecting strategic frameworks that define and articulate national competitive advantages.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Global Stakeholder Engagement</h3>
                    <p className="text-gray-400">Crafting targeted narratives for international investors, institutions, and decision makers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Sovereign Experience Design</h3>
                    <p className="text-gray-400">Creating high-level events and platforms that showcase national capabilities and vision.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary">
                ENGAGE YOUR VISION
              </Link>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Strategic Positioning for Nations"
                width={800} height={600} loading="lazy"
                className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Global Brand & Luxury Targeted Experiences */}
      <section id="luxury" className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80" 
                alt="Elevating Luxury Brands"
                width={800} height={600} loading="lazy"
                className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                02. Global Brand & Luxury Targeted Experiences
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Elevating Luxury Brands
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We partner with luxury brands and global enterprises to craft sophisticated narratives 
                and experiences that command premium positioning and lasting competitive advantage.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Prestige Brand Architecture</h3>
                    <p className="text-gray-400">Defining and protecting brand essence while enabling strategic growth and market presence.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Luxury Experiences</h3>
                    <p className="text-gray-400">Curating exclusive, high-impact moments that embody brand values and create lasting emotional connections.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Market Entry & Expansion</h3>
                    <p className="text-gray-400">Navigating and succeeding in the complex dynamics of Middle Eastern luxury markets.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary">
                DEFINE YOUR LEGACY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Strategic Communications & Narrative Control */}
      <section id="strategic" className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                03. Strategic Communications & Narrative Control
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Narratives that Transform
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                High-stakes situations demand sophisticated communication strategies. We craft narratives 
                that shift perception, mobilize support, and create measurable business value.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Crisis Communications</h3>
                    <p className="text-gray-400">Rapid response strategies that protect reputation and maintain stakeholder confidence in high-stakes situations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Thought Leadership Programs</h3>
                    <p className="text-gray-400">Building platforms that establish market authority and shape industry-wide conversations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Stakeholder Alignment</h3>
                    <p className="text-gray-400">Developing frameworks that align complex ecosystems around a shared vision and narrative.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary">
                TRANSFORM YOUR NARRATIVE
              </Link>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Narratives that Transform"
                width={800} height={600} loading="lazy"
                className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Major Event Architecture & Delivery */}
      <section id="events" className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative overflow-hidden rounded-lg">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/59e3cf3797a31275a47d384aa5c53c5c" 
                alt="Creating Global Moments"
                width={800} height={600} loading="lazy"
                className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                04. Major Event Architecture & Delivery
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Creating Global Moments
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                From concept to execution, we deliver events of national and international importance 
                that become defining moments for nations, brands, and movements.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Mega-Project Blueprinting</h3>
                    <p className="text-gray-400">End-to-end conceptualisation and strategic planning for events of national and international importance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Financial Modelling & Feasibility</h3>
                    <p className="text-gray-400">Providing C-suite level financial justification and ROI analysis for complex, large-scale projects.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Flawless Operational Delivery</h3>
                    <p className="text-gray-400">Executing with precision to deliver seamless, high-impact experiences on a global scale.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary">
                BUILD YOUR LEGACY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Personal Brand & Reputation Positioning */}
      <section id="crisis" className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                05. Personal Brand & Reputation Positioning
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Executive Brand Architecture
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                In an era of total transparency, an executive&apos;s personal brand is their most critical professional asset. 
                We proactively position and manage the digital legacy of leaders, building an unshakeable foundation of authority and influence.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Strategic Brand Foundation</h3>
                    <p className="text-gray-400">Core narrative development, thought leadership pillars, and digital footprint optimization.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Authority Amplification</h3>
                    <p className="text-gray-400">Securing strategic media opportunities, targeted content placement, and reputation monitoring.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Digital Legacy Management</h3>
                    <p className="text-gray-400">Proactive reputation positioning and stakeholder network curation for lasting influence.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary">
                POSITION YOUR BRAND
              </Link>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn1.genspark.ai/user-upload-image/5_generated/773d5d9b-7b8f-476c-9ae9-c48e55a4aef5.jpeg" 
                alt="Strategic Reputation Management"
                width={800} height={600} loading="lazy"
                className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: Corporate & Shareholder Engagement */}
      <section id="corporate" className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative overflow-hidden rounded-lg">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/1aa05e202d206907659122ca7fe7ee17" 
                alt="Aligning Corporate Positioning"
                width={800} height={600} loading="lazy"
                className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                06. Corporate & Shareholder Engagement
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Aligning Corporate Positioning
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Critical corporate moments demand precision. We architect shareholder experiences 
                and communications that build confidence, align stakeholders, and drive value.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">High-Impact AGMs & Investor Days</h3>
                    <p className="text-gray-400">Designing critical corporate events to ensure precise message delivery and build investor confidence.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">IPO & M&A Communications</h3>
                    <p className="text-gray-400">Architecting the narrative and stakeholder engagement for pivotal financial transactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">C-Suite Message Delivery</h3>
                    <p className="text-gray-400">Crafting and executing communication strategies that align leadership and key financial stakeholders.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary">
                ENGAGE YOUR STAKEHOLDERS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 7: Cultural Diplomacy & Placemaking */}
      <section id="cultural" className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                07. Cultural Diplomacy & Placemaking
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Building Cultural Capital
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Culture is soft power made tangible. We create cultural experiences and landmarks 
                that define identity, build bridges, and establish lasting legacy.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">National Identity Showcases</h3>
                    <p className="text-gray-400">Developing large-scale cultural events that define a location&apos;s identity and global brand.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">International Soft Power Initiatives</h3>
                    <p className="text-gray-400">Using culture as a strategic tool to build bridges and enhance international influence.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Legacy Placemaking</h3>
                    <p className="text-gray-400">Creating permanent or semi-permanent installations and experiences that become cultural landmarks.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary">
                SHAPE YOUR NARRATIVE
              </Link>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/03d158de23b25a03c25a4d32bf0e4524" 
                alt="Building Cultural Capital"
                width={800} height={600} loading="lazy"
                className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 8: Immersive Targeting & Design */}
      <section id="experience" className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Creating Deep Engagement"
                width={800} height={600} loading="lazy"
                className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                08. Immersive Targeting & Design
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Creating Deep Engagement
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Strategic experiences are engineered, not imagined. We design every moment to guide 
                audiences toward specific outcomes through immersive, multi-sensory engagement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Audience Journey Mapping</h3>
                    <p className="text-gray-400">Designing every touchpoint of an experience to guide a specific, high-value audience to a desired conclusion.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Immersive Technology Integration</h3>
                    <p className="text-gray-400">Leveraging cutting-edge technology (AR, VR, interactive installations) to create captivating, memorable moments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Sensory Design</h3>
                    <p className="text-gray-400">Crafting multi-sensory environments that engage audiences on a deep, emotional level.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary">
                CAPTIVATE YOUR AUDIENCE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 9: Approach Modelling & ROI */}
      <section id="roi" className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-g2-gold/10 text-g2-gold rounded-full text-sm font-semibold mb-6">
                09. Approach Modelling & ROI
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Measuring Strategic Value
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Strategic investments demand rigorous justification. We develop bespoke frameworks 
                that measure intangible value and prove ROI to C-suite decision makers.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Intangible Value Metrics</h3>
                    <p className="text-gray-400">Developing bespoke models to measure the impact of variables like reputation, influence, and brand equity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">C-Suite Financial Justification</h3>
                    <p className="text-gray-400">Creating the business case for major projects, linking strategic vision directly to financial and strategic returns.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-g2-gold mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">ROI Forecasting & Analysis</h3>
                    <p className="text-gray-400">Providing data-driven forecasts that prove the tangible and intangible value of strategic experiences.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary">
                PROVE THE VALUE
              </Link>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                alt="Measuring Strategic Value"
                width={800} height={600} loading="lazy"
                className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to architect your strategic advantage?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how G2 Middle East can help you navigate complexity and create lasting value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Start a Conversation
              </Link>
              <Link href="/whitepapers" className="btn-secondary text-lg">
                Download Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
