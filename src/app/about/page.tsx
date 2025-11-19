import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/structured-data/JsonLd';
import type { WithContext, Organization, BreadcrumbList, FAQPage, VideoObject } from 'schema-dts';

export const metadata: Metadata = {
  title: 'About G2 Middle East | Strategic Advisory & Government Relations',
  description: 'G2 Middle East & Africa specializes in strategic advisory and event architecture for sovereign entities, government agencies, and global brands. Part of Casta Diva Group.',
};

export default function AboutPage() {
  // Organization Schema with comprehensive information
  const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "G2 Middle East & Africa",
    "alternateName": "G2 Middle East",
    "url": "https://g2middleeast.com",
    "logo": "https://g2middleeast.com/assets/logo-g2me.svg",
    "description": "Strategic counsel and world-class event management for governments, sovereign entities, and global brands across Middle East and Africa. Part of Casta Diva Group.",
    "foundingDate": "2017",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mazyad Offices 3 - Office 36 - Sultan Bin Mohammed Al, 75, Qubaisi St",
      "addressLocality": "Mohammed Bin Zayed City",
      "addressRegion": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971-02-654-4049",
        "contactType": "New Business & Strategic Enquiries",
        "email": "tim@g2middleeast.com",
        "areaServed": ["AE", "SA", "QA", "EG", "BH", "KW", "OM"],
        "availableLanguage": ["en", "ar"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/g2-middle-east",
      "https://www.castadivagroup.com"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Casta Diva Group",
      "url": "https://www.castadivagroup.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Middle East and Africa"
    },
    "knowsAbout": [
      "Government Event Management",
      "State Visit Coordination",
      "Diplomatic Protocol",
      "Strategic Communications",
      "Sovereign Advisory",
      "Major Event Architecture",
      "Crisis Management",
      "Brand Positioning"
    ]
  };

  // BreadcrumbList Schema
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
        "name": "About",
        "item": "https://g2middleeast.com/about"
      }
    ]
  };

  // FAQPage Schema for AI/LLM Optimization
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is G2 Middle East's core philosophy and approach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East operates on three strategic pillars: Strategy, Positioning, and Legacy. We believe every sovereign entity, government, and global brand possesses untapped strategic potential that requires sophisticated counsel to unlock. Our approach begins with Strategy—defining the narrative architecture that positions our clients advantageously on the global stage. This creates powerful Positioning through targeted communications, diplomatic protocols, and stakeholder engagement. The result is enduring Legacy—measurable outcomes that transcend the immediate event and create lasting geopolitical, economic, or cultural capital. We are The Architects of Strategy & Legacy."
        }
      },
      {
        "@type": "Question",
        "name": "How is G2 Middle East related to Casta Diva Group?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East & Africa is the specialized division of Casta Diva Group focused exclusively on strategic advisory and governmental affairs across Middle East and Africa. Founded in 2010, G2 Middle East leverages Casta Diva Group's global network spanning 15 cities across four continents while maintaining deep regional expertise in GCC markets. This structure provides clients with the best of both worlds: intimate knowledge of Middle Eastern geopolitical dynamics, cultural intelligence, and government protocols, combined with international execution capabilities and global best practices. We operate with strategic independence while accessing Casta Diva Group's resources when projects require international coordination."
        }
      },
      {
        "@type": "Question",
        "name": "What qualifies G2 Middle East to advise governments and sovereign entities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East brings 20+ years of proven government event management and strategic advisory experience across the GCC and MENA region. Our track record includes: 50+ major government projects delivered, Papal Mass Abu Dhabi 2019 (180,000 attendees—executed in 71 hours), Queen Elizabeth II State Visit UAE 2010, COP27 Egypt 2022, Special Olympics World Games Abu Dhabi 2019, UAE National Day celebrations, presidential and royal state visits, and strategic communications for sovereign entities. Our team is led by Tim Jacobs (Regional COO) with deep diplomatic protocol expertise, government stakeholder relationships across UAE, Saudi Arabia, Qatar, and Egypt, and proven capability to manage events where failure is not an option."
        }
      },
      {
        "@type": "Question",
        "name": "What makes G2 Middle East's government event management capabilities unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East occupies a unique position in the Middle East market: we are strategic counsel first, execution partner second. Unlike traditional event agencies that focus on logistics, we begin with strategic frameworks—defining how the event advances national vision, positions the sovereign entity, engages stakeholders, and creates measurable legacy. Our capabilities span: diplomatic protocol and international relations, crisis management and reputation positioning, VIP experience design and royal protocols, mega-event architecture (180,000+ attendees), government communications and narrative control, cultural intelligence and regional dynamics, financial modeling and ROI forecasting. We operate with absolute discretion, political neutrality, and commitment to our clients' strategic success."
        }
      }
    ]
  };

  // VideoObject Schema - Multimedia Richness
  const videoSchema: WithContext<VideoObject> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": "https://g2middleeast.com/about#video",
    "name": "About G2 Middle East: The Architects of Strategy & Legacy",
    "description": "Discover the story behind G2 Middle East & Africa, the region's leading strategic advisory and government event management agency. Learn about our three strategic pillars—Strategy, Positioning, Legacy—and how we architect intangible value for sovereign entities and global brands across the Middle East and Africa.",
    "thumbnailUrl": "https://g2middleeast.com/assets/video-thumbnails/g2-about.jpg",
    "uploadDate": "2024-01-15T00:00:00Z",
    "duration": "PT3M15S",
    "contentUrl": "https://g2middleeast.com/videos/g2-about.mp4",
    "embedUrl": "https://g2middleeast.com/videos/embed/g2-about",
    "publisher": {
      "@type": "Organization",
      "@id": "https://g2middleeast.com/#organization"
    },
    "inLanguage": "en",
    "potentialAction": {
      "@type": "WatchAction",
      "target": "https://g2middleeast.com/videos/g2-about.mp4"
    }
  };

  return (
    <main className="min-h-screen bg-g2-darker">
      {/* JSON-LD Structured Data */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={videoSchema} />

      {/* Hero Section */}
      <section className="relative py-32 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              About G2 Middle East
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              Strategic counsel and world-class event management for governments, sovereign entities, 
              and global brands across the Middle East and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Who We Are
            </h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                G2 Middle East & Africa is the specialized division of <strong className="text-white">Casta Diva Group</strong> focused 
                on high-stakes strategic advisory, governmental affairs, and sovereign event architecture. We operate at the 
                intersection of policy, finance, and diplomacy.
              </p>
              <p>
                With over <strong className="text-g2-gold">50+ major government projects</strong> delivered across the UAE, Saudi Arabia, 
                Qatar, Egypt, and the wider Middle East and Africa, we bring unparalleled expertise in managing events of 
                national and international significance.
              </p>
              <p>
                Our team has coordinated some of the region&apos;s most significant moments—from the historic 
                <Link href="/projects/papal-mass-abu-dhabi" className="text-g2-gold hover:underline font-bold"> Papal Mass in Abu Dhabi with 180,000 attendees</Link> to state visits by heads of 
                state, international summits, and major cultural celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Our Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Expertise 1 */}
              <div className="bg-g2-dark p-8 rounded-lg border border-white/10">
                <div className="text-g2-gold text-3xl mb-4">
                  <i className="fas fa-landmark"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Government & Sovereign Advisory
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Strategic counsel for governments, royal families, and sovereign entities on major 
                  events, state visits, diplomatic protocol, and national celebrations.
                </p>
              </div>

              {/* Expertise 2 */}
              <div className="bg-g2-dark p-8 rounded-lg border border-white/10">
                <div className="text-g2-gold text-3xl mb-4">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Major Event Architecture
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  End-to-end conceptualization and execution of events with national and international 
                  importance, from world expos to international summits.
                </p>
              </div>

              {/* Expertise 3 */}
              <div className="bg-g2-dark p-8 rounded-lg border border-white/10">
                <div className="text-g2-gold text-3xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Crisis & Reputation Management
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Rapid response strategies that protect reputation and maintain stakeholder confidence 
                  during high-stakes situations and sensitive moments.
                </p>
              </div>

              {/* Expertise 4 */}
              <div className="bg-g2-dark p-8 rounded-lg border border-white/10">
                <div className="text-g2-gold text-3xl mb-4">
                  <i className="fas fa-chess-king"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Strategic Communications
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  High-impact communication strategies and narrative development for governments, 
                  corporations, and institutions seeking to shape global perception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy. Positioning. Legacy. Section */}
      <section className="py-24 bg-g2-dark border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Strategy. Positioning. Legacy.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center">
              These three pillars define our approach to sovereign advisory and government event management. Every engagement begins with strategic clarity, creates powerful positioning, and delivers enduring legacy.
            </p>
            <div className="space-y-8">
              <div className="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div className="flex items-start">
                  <div className="text-g2-gold text-5xl mr-6 flex-shrink-0">
                    <i className="fas fa-chess"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Strategy: The Foundation of Everything</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We believe every sovereign entity, government, and global brand possesses untapped strategic potential that requires sophisticated counsel to unlock. Our approach begins with <strong className="text-white">Strategic Framework Development</strong>—defining the narrative architecture that positions our clients advantageously on the global stage.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      This isn&apos;t about event logistics—it&apos;s about understanding how your initiative advances national transformation goals (Vision 2030-style agendas), how it positions your nation in the global conversation, and how it creates measurable strategic capital. Strategy is the foundation upon which all execution rests. Without strategic clarity, events become transactional. With it, they become transformational.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div className="flex items-start">
                  <div className="text-g2-gold text-5xl mr-6 flex-shrink-0">
                    <i className="fas fa-crosshairs"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Positioning: Creating Competitive Advantage</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Strategic positioning is where narrative meets execution. Through <strong className="text-white">targeted communications, diplomatic protocols, and stakeholder engagement</strong>, we position our clients in ways that create lasting competitive advantage—whether that&apos;s attracting foreign direct investment, strengthening diplomatic alliances, or establishing cultural leadership.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Every event we manage—from the Papal Mass Abu Dhabi to the Queen Elizabeth II State Visit—is designed to position the host nation as capable, sophisticated, and globally relevant. We understand that positioning isn&apos;t what you say about yourself; it&apos;s what others perceive when they experience your nation&apos;s hospitality, professionalism, and strategic acumen. We architect those perceptions with precision.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div className="flex items-start">
                  <div className="text-g2-gold text-5xl mr-6 flex-shrink-0">
                    <i className="fas fa-monument"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Legacy: Measurable, Enduring Impact</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      The true measure of our work is the <strong className="text-white">legacy it creates</strong>—outcomes that transcend the immediate event and generate lasting geopolitical, economic, or cultural capital. When we delivered the Papal Mass Abu Dhabi, the legacy wasn&apos;t just 180,000 attendees; it was positioning the UAE as a beacon of religious tolerance in the Middle East—a narrative that continues to generate strategic value years later.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We measure legacy through quantifiable outcomes: Did foreign direct investment increase? Did diplomatic relations strengthen? Did the nation&apos;s global reputation improve measurably? Did the event create infrastructure, institutional knowledge, or capability that endures? Legacy is what remains long after the event concludes. At G2 Middle East, we architect legacy by design—not by accident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Excellence Section */}
      <section className="py-24 bg-g2-darker border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Our Commitment to Excellence
            </h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                At G2 Middle East, <strong className="text-white">excellence is non-negotiable</strong>. When governments entrust us with projects of national significance—state visits, international summits, religious landmark events—they expect flawless execution under conditions where failure would have geopolitical consequences. This is the standard we hold ourselves to on every engagement.
              </p>
              <p>
                Our commitment to excellence manifests in three core principles: <strong className="text-white">Absolute Discretion</strong> (every engagement is conducted with the highest levels of confidentiality and security, recognizing the sensitive nature of sovereign-level communications), <strong className="text-white">Cultural Intelligence</strong> (deep understanding of Middle Eastern geopolitical dynamics, diplomatic protocols, and cultural sensitivities that cannot be learned from textbooks), and <strong className="text-white">Operational Precision</strong> (military-grade planning and execution where contingency protocols anticipate risks before they materialize).
              </p>
              <p>
                We recognize that in government event management, there is no second chance. The Papal Mass Abu Dhabi was delivered in 71 hours with zero margin for error. The Queen Elizabeth II State Visit required managing 8 high-profile events over 20 hours with absolute protocol compliance. These are not theoretical scenarios—they are the reality of our work. Excellence, in this context, means the difference between creating national legacy and creating diplomatic incident.
              </p>
              <p>
                This commitment extends beyond operational delivery to <strong className="text-white">strategic counsel</strong>. We advise governments on how to navigate an increasingly complex global landscape—where cognitive security, counter-disinformation, and AI-driven influence operations require sophisticated strategic responses. Our excellence lies not just in what we deliver, but in the strategic frameworks we provide that empower governments to make informed decisions about their future positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Track Record Section */}
      <section className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Proven Track Record
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {/* Metric 1 */}
              <div className="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div className="text-5xl font-bold text-g2-gold mb-3">
                  50+
                </div>
                <div className="text-gray-300">
                  Major Government Projects
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div className="text-5xl font-bold text-g2-gold mb-3">
                  180K
                </div>
                <div className="text-gray-300">
                  Largest Single Event (Papal Mass)
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div className="text-5xl font-bold text-g2-gold mb-3">
                  20+
                </div>
                <div className="text-gray-300">
                  Years Combined Experience
                </div>
              </div>

              {/* Metric 4 */}
              <div className="bg-g2-darker p-8 rounded-lg border border-g2-gold/20">
                <div className="text-5xl font-bold text-g2-gold mb-3">
                  7
                </div>
                <div className="text-gray-300">
                  GCC Countries Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part of Casta Diva Group Section */}
      <section className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Part of Casta Diva Group
            </h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                As a specialized division of <strong className="text-white">Casta Diva Group</strong>, we leverage the resources 
                and capabilities of a global communications powerhouse with presence in 15 cities across four continents.
              </p>
              <p>
                This unique positioning allows us to combine <strong className="text-g2-gold">local Middle East expertise</strong> with 
                <strong className="text-g2-gold"> global execution capabilities</strong>—from creative content production to 
                large-scale event delivery.
              </p>
              <p>
                Our parent group serves over 100 of the world&apos;s top brands and has delivered thousands of successful 
                projects across live communication, branded content, and strategic advisory.
              </p>
            </div>
            
            <div className="mt-12">
              <Link href="/group" className="inline-flex items-center px-8 py-4 bg-g2-gold text-g2-darker font-bold rounded hover:bg-g2-gold-light transition-colors">
                Explore the Group
                <i className="fas fa-arrow-right ml-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to architect your strategic advantage?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how G2 Middle East can help you navigate complexity and create lasting value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-g2-gold hover:bg-g2-gold-light text-g2-darker font-bold rounded-lg transition-colors text-lg">
                Start a Conversation
              </Link>
              <Link href="/projects" className="px-8 py-4 border border-g2-gold text-g2-gold hover:bg-g2-gold hover:text-g2-darker font-bold rounded-lg transition-colors text-lg">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
