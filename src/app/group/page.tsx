import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Casta Diva Group - G2 Middle East & Africa',
  description: 'Explore the portfolio of specialist companies within Casta Diva Group, spanning live communication, creative production, brand experiences, and strategic event services.',
  openGraph: {
    title: 'Casta Diva Group - G2 Middle East & Africa',
    description: 'A global communications powerhouse architecting narratives and delivering experiences for the world\'s leading brands.',
    url: 'https://g2middleeast.com/group',
    type: 'website',
  },
}

export default function GroupPage() {
  return (
    <main className="min-h-screen bg-g2-darker">
      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://www.g2middleeast.com/#organization",
            "name": "G2 Middle East",
            "url": "https://www.g2middleeast.com/",
            "logo": "https://www.g2middleeast.com/assets/logo-g2me.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "New Business & Strategic Enquiries",
              "email": "tim@g2middleeast.com"
            },
            "brand": [
              {"@type": "Brand", "name": "G2 Eventi", "url": "https://www.g2eventi.com/en/"},
              {"@type": "Brand", "name": "Genius Progetti", "url": "https://www.geniusprogetti.com/"},
              {"@type": "Brand", "name": "Blue Note Milano", "url": "https://www.bluenotemilano.com/"},
              {"@type": "Brand", "name": "CastaDiva Art & Show", "url": "https://www.castadivaartandshow.com/en/"},
              {"@type": "Brand", "name": "FirstClass", "url": "https://www.fclassevents.com/en/home_eng/"},
              {"@type": "Brand", "name": "agenZy", "url": "https://www.agenzy.it/"},
              {"@type": "Brand", "name": "CastaDiva Pictures", "url": "https://www.castadivapictures.com/"},
              {"@type": "Brand", "name": "Akita Film", "url": "https://www.akitafilm.com/"},
              {"@type": "Brand", "name": "E-Motion", "url": "https://www.e-motion.tv/"}
            ]
          },
          {
            "@type": "CollectionPage",
            "@id": "https://www.g2middleeast.com/group#webpage",
            "url": "https://www.g2middleeast.com/group",
            "name": "Group Companies of G2 Middle East",
            "inLanguage": "en",
            "isPartOf": {
              "@id": "https://www.g2middleeast.com/#website"
            },
            "mainEntity": {
              "@id": "https://www.g2middleeast.com/#organization"
            },
            "description": "Explore the portfolio of specialist companies and strategic partners within the G2 Middle East group, spanning live communication, creative production, brand experiences, and strategic event services.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.g2middleeast.com/"},
                {"@type": "ListItem", "position": 2, "name": "Group", "item": "https://www.g2middleeast.com/group"}
              ]
            }
          }
        ]
      })}} />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://page.gensparksite.com/v1/base64_upload/fa12b2ddb7735e8ec1f79c67c91f0f02" 
            alt="Historic Castle at Twilight"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-g2-darker/70 via-g2-darker/80 to-g2-darker"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-6 flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Casta Diva Group: A Global Communications Powerhouse
            </h1>
            <p className="text-2xl text-g2-gold font-light">
              Architecting narratives, producing content, and delivering experiences that shape perception 
              for the world&apos;s leading brands and institutions.
            </p>
          </div>
        </div>
      </section>

      {/* G2's Role Section */}
      <section className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              G2: The Apex of Strategic Advisory
            </h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                Within Casta Diva Group, G2 Middle East serves as the specialised division for high-stakes 
                strategic advisory, governmental affairs, and sovereign event architecture. We operate at the 
                intersection of policy, finance, and diplomacy, leveraging the Group&apos;s global creative and 
                production capabilities to deliver outcomes with unparalleled impact for our clients in 
                government and the C-suite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Core Capabilities
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Column 1: Live & Digital Communication */}
              <div className="bg-g2-dark p-10 rounded-lg border border-white/10">
                <div className="text-g2-gold text-4xl mb-6">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Live & Digital Communication
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  The design and execution of high-impact live and digital experiences. This includes major 
                  corporate events, state-level ceremonies, product launches, international conventions, and 
                  bespoke VIP engagements. The Group possesses specialised expertise in:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-300">Medical & Scientific Congresses</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-300">Luxury Brand Experiences</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-300">Art Shows & Cultural Ceremonies</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-300">Gen Z Strategic Communication</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Creative Content Production */}
              <div className="bg-g2-dark p-10 rounded-lg border border-white/10">
                <div className="text-g2-gold text-4xl mb-6">
                  <i className="fas fa-video"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Creative Content Production
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  The creation of compelling, narrative-driven content for global audiences. The Group is a 
                  world leader in producing branded content, advertising films, television programming, and 
                  corporate videos, serving over 100 of the world&apos;s top brands.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-300">Branded Content, Cinema & TV</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-300">Advertising Film Production</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-300">Corporate & Digital Video</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-g2-gold mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-300">Music & Entertainment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Companies Grid */}
      <section className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Group Companies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Company 1: G2 EVENTI */}
              <a href="https://www.g2eventi.com/en/" target="_blank" className="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300" data-entity="group-company" data-company="G2 EVENTI">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" 
                    alt="G2 EVENTI"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
                <div className="p-8 flex flex-col" style="min-height: 320px;">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">LIVE COMMUNICATION</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    G2 Eventi
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    G2 event designs unforgettable events, characterised by a propensity for teamwork and excellence. We create emotional experiences built on creativity, technology, reliability, and cost effectiveness.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                    Visit the website <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Company 2: GENIUS PROGETTI */}
              <a href="https://www.geniusprogetti.com/" target="_blank" className="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300" data-entity="group-company" data-company="GENIUS PROGETTI">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" 
                    alt="GENIUS PROGETTI"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
                <div className="p-8 flex flex-col" style="min-height: 320px;">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">LUXURY EXPERIENCES</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Genius Progetti
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    We engineer the unforgettable to showcase the uniqueness of prestigious brands through bespoke experiences. We combine Italian style with an international work ethic to handle all aspects of your project.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                    Visit the website <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Company 3: BLUENOTEMILANO */}
              <a href="https://www.bluenotemilano.com/" target="_blank" className="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300" data-entity="group-company" data-company="BLUENOTEMILANO">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80" 
                    alt="BLUENOTEMILANO"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
                <div className="p-8 flex flex-col" style="min-height: 320px;">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">MUSIC & ENTERTAINMENT</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Blue Note Milano
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Blue Note Milano is a legendary jazz club and restaurant in Milan. As one of Europe&apos;s most influential jazz venues, it hosts over 300 shows per year for a community of over 100,000 customers.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                    Visit the website <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Company 4: CASTADIVA ART&SHOW */}
              <a href="https://www.castadivaartandshow.com/en/" target="_blank" className="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300" data-entity="group-company" data-company="CASTADIVA ART&SHOW">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/c84949d7500a49b2feaa35ca242c81b2" 
                    alt="CASTADIVA ART&SHOW"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
                <div className="p-8 flex flex-col" style="min-height: 320px;">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">CULTURAL EVENTS</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Castadiva Art & Show
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    The division dedicated to creating and producing major art events in Italy and worldwide. We transform creative ideas into memorable experiences, blending tradition and modernity.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                    Visit the website <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Company 5: FIRSTCLASS */}
              <a href="https://www.fclassevents.com/en/home_eng/" target="_blank" className="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300" data-entity="group-company" data-company="FIRSTCLASS">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80" 
                    alt="FIRSTCLASS"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
                <div className="p-8 flex flex-col" style="min-height: 320px;">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">SCIENTIFIC EVENTS</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    FirstClass
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Designs and organizes congresses, meetings, and training events, with particular expertise in the medical-scientific field. A complete partner with strong planning and communication skills.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                    Visit the website <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Company 6: agenZy */}
              <a href="https://www.agenzy.it/" target="_blank" className="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300" data-entity="group-company" data-company="agenZy">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                    alt="agenZy"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
                <div className="p-8 flex flex-col" style="min-height: 320px;">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">DIGITAL STRATEGY</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    AgenZy
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Created to solve the challenge of communicating with Generation Z. We design strategies and campaigns that leverage the cultural codes and languages of younger generations for the 18-35 target audience.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                    Visit the website <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Company 7: CASTADIVA PICTURES */}
              <a href="https://www.castadivapictures.com/" target="_blank" className="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300" data-entity="group-company" data-company="CASTADIVA PICTURES">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80" 
                    alt="CASTADIVA PICTURES"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
                <div className="p-8 flex flex-col" style="min-height: 320px;">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">CONTENT PRODUCTION</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Castadiva Pictures
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Operates in branded content, ad productions, films, and TV programming. With fourteen branches, it is the most extensive advertising production network worldwide, working with over 100 top brands.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                    Visit the website <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Company 8: AKITAFILM */}
              <a href="https://www.akitafilm.com/" target="_blank" className="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300" data-entity="group-company" data-company="AKITAFILM">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?w=800&q=80" 
                    alt="AKITAFILM"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
                <div className="p-8 flex flex-col" style="min-height: 320px;">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">FILM PRODUCTION</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    Akita Film
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Produces and organizes commercials and corporate videos for major brands worldwide. Akita Film stands out for its expertise in scouting top talent, including directors, photographers, and videomakers.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                    Visit the website <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

              {/* Company 9: E-MOTION */}
              <a href="https://www.e-motion.tv/" target="_blank" className="service-card block group border border-white/10 rounded-2xl overflow-hidden bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300" data-entity="group-company" data-company="E-MOTION">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80" 
                    alt="E-MOTION"
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    style="opacity: 0.7; filter: brightness(92%) grayscale(20%);"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-g2-darker transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
                <div className="p-8 flex flex-col" style="min-height: 320px;">
                  <div className="mb-6">
                    <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">VIDEO PRODUCTION</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-g2-gold transition-colors">
                    E-Motion
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    A production company specializing in corporate, product, and event videos. Among the first to adopt Red Digital Cinema technology, delivering integrated solutions without compromising on quality.
                  </p>
                  <div className="inline-flex items-center text-g2-gold group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                    Visit the website <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Want to Engage Our Global Team?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              From strategic counsel to full-scale execution, we bring the resources of a global network 
              to every engagement.
            </p>
            <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-g2-gold text-g2-darker font-bold text-lg rounded hover:bg-white transition-colors duration-300">
              Engage Our Global Team
              <i className="fas fa-arrow-right ml-4"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
