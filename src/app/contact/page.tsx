import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/structured-data/JsonLd';
import type { WithContext, LocalBusiness, BreadcrumbList, FAQPage } from 'schema-dts';

export const metadata: Metadata = {
  title: 'Contact G2 Middle East | Strategic Advisory & Government Relations',
  description: 'Contact G2 Middle East for strategic advisory, government event management, and sovereign positioning. Located in Abu Dhabi, UAE. 24-hour response guarantee.',
};

export default function ContactPage() {
  // LocalBusiness Schema for Dubai office
  const localBusinessSchema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://g2middleeast.com#localbusiness",
    "name": "G2 Middle East & Africa",
    "alternateName": "G2 Middle East",
    "legalName": "G2 Middle East & Africa",
    "description": "Strategic advisory and event architecture for sovereign entities, government agencies, and global brands across Middle East and Africa. Specialists in government event management, state visit coordination, and diplomatic protocol.",
    "url": "https://g2middleeast.com",
    "telephone": "+971-02-654-4049",
    "email": "contact@g2middleeast.com",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mazyad Offices 3 - Office 36 - Sultan Bin Mohammed Al, 75, Qubaisi St - Mohammed Bin Zayed City",
      "addressLocality": "Abu Dhabi",
      "addressRegion": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.4539,
      "longitude": 54.3773
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Egypt"
      },
      {
        "@type": "Country",
        "name": "Bahrain"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Oman"
      }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Casta Diva Group",
      "url": "https://www.castadiva.it/"
    },
    "knowsAbout": [
      "Government Event Management",
      "State Visit Coordination",
      "Diplomatic Protocol Advisory",
      "Strategic Communications",
      "Crisis Management",
      "Nation Branding",
      "VIP Protocol Management",
      "Major Event Architecture",
      "Sovereign Communications",
      "GCC Government Relations"
    ],
    "slogan": "Architecture of Intangible Value",
    "foundingDate": "2010",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "20+"
    },
    "award": [
      "50+ major government projects delivered",
      "Papal Mass Abu Dhabi 2019 - 180,000 attendees",
      "Queen Elizabeth II State Visit UAE 2010",
      "Special Olympics World Games Abu Dhabi 2019"
    ]
  };

  // BreadcrumbList Schema for Contact Page
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
        "name": "Contact",
        "item": "https://g2middleeast.com/contact"
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
        "name": "How quickly does G2 Middle East respond to inquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East guarantees 24-hour response for government and sovereign entity inquiries. For urgent or time-sensitive matters, contact Tim Jacobs, Regional COO, directly at tim@g2middleeast.com or call +971-02-654-4049. We understand the confidential and time-critical nature of government communications and prioritize rapid response with strategic clarity. Standard business inquiries receive response within 48 hours during UAE business hours (Sunday-Thursday, 9:00 AM - 6:00 PM GST)."
        }
      },
      {
        "@type": "Question",
        "name": "What is G2 Middle East's office location in Abu Dhabi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East headquarters is located at Mazyad Offices 3, Office 36, Sultan Bin Mohammed Al Qubaisi Street, Mohammed Bin Zayed City, Abu Dhabi, United Arab Emirates. Our office is strategically positioned between Abu Dhabi International Airport (15 minutes) and Abu Dhabi city center (20 minutes), providing convenient access for government officials and international clients. We maintain additional project coordination offices across the GCC as required for major initiatives. For in-person consultations, please schedule via tim@g2middleeast.com."
        }
      },
      {
        "@type": "Question",
        "name": "Does G2 Middle East work with private companies or only governments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "G2 Middle East works with three client categories: (1) Governments and sovereign entities (UAE Federal Government, Abu Dhabi Government, Saudi Arabian authorities, GCC governments), (2) Royal families and sovereign wealth funds requiring discretion and strategic counsel, and (3) Global Fortune 500 brands and luxury enterprises requiring government relations, strategic positioning, or major event delivery in Middle East and Africa. We do not work with small businesses, startups, or non-strategic commercial clients. Our minimum engagement threshold ensures we maintain focus on high-stakes projects where strategic acumen and diplomatic protocol expertise are essential."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-g2-darker">
      {/* JSON-LD Structured Data */}
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Start a Conversation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              Bring us your high-stakes challenges. We&apos;ll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Whether you&apos;re facing a strategic communications challenge, exploring a nation branding 
                    initiative, or seeking to elevate your luxury brand in the Middle East, we&apos;re here to help.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-g2-gold text-2xl mr-4 mt-1">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@g2middleeast.com" className="text-gray-300 hover:text-g2-gold transition-colors">
                        contact@g2middleeast.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-g2-gold text-2xl mr-4 mt-1">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:+97126544049" className="text-gray-300 hover:text-g2-gold transition-colors">
                        (+971) 02 654 4049
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-g2-gold text-2xl mr-4 mt-1">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-300">
                        Mazyad Offices 3 - Office 36<br />
                        Sultan Bin Mohammed Al, 75, Qubaisi St<br />
                        Mohammed Bin Zayed City<br />
                        Abu Dhabi, UAE<br />
                        <span className="text-sm">Serving clients across the GCC</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-white font-semibold mb-4">Connect with Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/g2-middle-east/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-g2-darker rounded-full flex items-center justify-center text-g2-gold hover:bg-g2-gold hover:text-g2-darker transition-all">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" className="w-12 h-12 bg-g2-darker rounded-full flex items-center justify-center text-g2-gold hover:bg-g2-gold hover:text-g2-darker transition-all">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="w-12 h-12 bg-g2-darker rounded-full flex items-center justify-center text-g2-gold hover:bg-g2-gold hover:text-g2-darker transition-all">
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-g2-gold/10 p-6 rounded-lg border border-g2-gold/30">
                  <div className="flex items-start">
                    <i className="fas fa-clock text-g2-gold text-2xl mr-4"></i>
                    <div>
                      <h4 className="text-white font-semibold mb-2">24-Hour Response Time</h4>
                      <p className="text-gray-300 text-sm">
                        We review every inquiry personally and respond within one business day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <form id="contactForm" className="space-y-6 bg-g2-darker p-8 rounded-lg border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-semibold mb-2">
                        Company
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        className="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                        placeholder="Your organization"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white font-semibold mb-2">
                        Phone
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select 
                      id="subject" 
                      name="subject" 
                      required
                      className="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none"
                    >
                      <option value="">Select a topic...</option>
                      <option value="sovereign">Sovereign & Nation Branding</option>
                      <option value="luxury">Luxury Brand Positioning</option>
                      <option value="strategic">Strategic Communications</option>
                      <option value="crisis">Crisis Management</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded bg-g2-dark border border-white/20 text-white focus:border-g2-gold focus:outline-none resize-none"
                      placeholder="Tell us about your challenge or opportunity..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      name="consent" 
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="consent" className="text-gray-400 text-sm">
                      I agree to G2 Middle East&apos;s privacy policy and consent to being contacted regarding my inquiry. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div id="formMessage" className="hidden p-4 rounded"></div>

                  <button 
                    type="submit" 
                    className="w-full bg-g2-gold hover:bg-g2-gold-light text-g2-darker font-bold py-4 rounded-lg transition-colors text-lg"
                  >
                    <span id="submitText">Send Message</span>
                    <span id="submitLoading" className="hidden">
                      <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
                    </span>
                  </button>

                  <p className="text-gray-400 text-sm text-center">
                    All inquiries are treated with strict confidentiality
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Engage G2 Section */}
      <section className="py-24 bg-g2-dark border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Engage G2 Middle East?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-g2-gold text-4xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Absolute Discretion</h3>
                <p className="text-gray-400">
                  Every engagement is conducted with the highest levels of confidentiality and security. We understand the sensitive nature of government and sovereign-level communications.
                </p>
              </div>
              <div className="text-center">
                <div className="text-g2-gold text-4xl mb-4">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Strategic First, Execution Second</h3>
                <p className="text-gray-400">
                  Unlike traditional agencies, we begin with strategic frameworks that define how your initiative advances national objectives. Execution follows strategy—never the reverse.
                </p>
              </div>
              <div className="text-center">
                <div className="text-g2-gold text-4xl mb-4">
                  <i className="fas fa-medal"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Proven Track Record</h3>
                <p className="text-gray-400">
                  50+ major government projects delivered including Papal Mass Abu Dhabi (180,000 attendees), Queen Elizabeth II State Visit, and COP27 Egypt. When failure is not an option, governments choose G2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Consultation Process Section */}
      <section className="py-24 bg-g2-darker border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">The Consultation Process</h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              From first contact to strategic delivery, our process is designed for clarity, confidentiality, and measurable outcomes.
            </p>
            <div className="space-y-6">
              <div className="bg-g2-dark p-6 rounded-lg border border-g2-gold/20">
                <div className="flex items-start">
                  <div className="bg-g2-gold text-g2-darker w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Initial Contact & Confidentiality Agreement</h3>
                    <p className="text-gray-400">Contact Tim Jacobs directly at tim@g2middleeast.com or call +971-02-654-4049. We guarantee 24-hour response for government and sovereign entity inquiries. All conversations begin under strict non-disclosure.</p>
                  </div>
                </div>
              </div>
              <div className="bg-g2-dark p-6 rounded-lg border border-g2-gold/20">
                <div className="flex items-start">
                  <div className="bg-g2-gold text-g2-darker w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Strategic Discovery Session</h3>
                    <p className="text-gray-400">We conduct a confidential consultation to assess your objectives, stakeholders, geopolitical context, and desired outcomes. This establishes the strategic foundation and ensures alignment before any formal engagement.</p>
                  </div>
                </div>
              </div>
              <div className="bg-g2-dark p-6 rounded-lg border border-g2-gold/20">
                <div className="flex items-start">
                  <div className="bg-g2-gold text-g2-darker w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Bespoke Proposal & Strategic Framework</h3>
                    <p className="text-gray-400">You receive a comprehensive proposal including strategic positioning framework, execution blueprint, stakeholder engagement plan, budget modeling, ROI forecasting, and risk assessment—tailored specifically to your objectives.</p>
                  </div>
                </div>
              </div>
              <div className="bg-g2-dark p-6 rounded-lg border border-g2-gold/20">
                <div className="flex items-start">
                  <div className="bg-g2-gold text-g2-darker w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Stakeholder Alignment & Execution Planning</h3>
                    <p className="text-gray-400">We facilitate alignment sessions with key stakeholders—government ministries, royal offices, diplomatic corps, international partners—to ensure unified strategic direction and buy-in before operational delivery begins.</p>
                  </div>
                </div>
              </div>
              <div className="bg-g2-dark p-6 rounded-lg border border-g2-gold/20">
                <div className="flex items-start">
                  <div className="bg-g2-gold text-g2-darker w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Operational Delivery & Legacy Measurement</h3>
                    <p className="text-gray-400">Our team executes with military precision—managing logistics, protocols, communications, VIP coordination, media relations, and crisis management. We deliver flawless execution that creates lasting geopolitical, economic, or cultural legacy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Other Ways to Connect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-g2-darker p-8 rounded-lg border border-white/10 text-center">
                <div className="text-g2-gold text-4xl mb-4">
                  <i className="fas fa-file-download"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Download Our Credentials</h3>
                <p className="text-gray-400 mb-6">
                  Get a comprehensive overview of our services, case studies, and strategic approach.
                </p>
                <Link href="/whitepapers" className="inline-block px-6 py-3 border border-g2-gold text-g2-gold hover:bg-g2-gold hover:text-g2-darker rounded-lg transition-colors font-semibold">
                  View Credentials
                </Link>
              </div>

              <div className="bg-g2-darker p-8 rounded-lg border border-white/10 text-center">
                <div className="text-g2-gold text-4xl mb-4">
                  <i className="fas fa-newspaper"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Subscribe to Perspectives</h3>
                <p className="text-gray-400 mb-6">
                  Strategic insights and market intelligence delivered to your inbox monthly.
                </p>
                <Link href="/briefing" className="inline-block px-6 py-3 border border-g2-gold text-g2-gold hover:bg-g2-gold hover:text-g2-darker rounded-lg transition-colors font-semibold">
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
