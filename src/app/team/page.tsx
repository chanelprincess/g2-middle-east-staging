import { Metadata } from 'next'
import Link from 'next/link'
import type { WithContext, Organization, BreadcrumbList, FAQPage } from 'schema-dts'

export const metadata: Metadata = {
  title: 'Leadership Team - G2 Middle East & Africa',
  description: 'Meet the strategic minds behind G2 Middle East. Tim Jacobs and our leadership team bring unparalleled expertise in sovereign advisory and world-class event delivery.',
  openGraph: {
    title: 'Leadership Team - G2 Middle East & Africa',
    description: 'Strategic advisors with proven expertise in sovereign-level advisory and major event delivery.',
    url: 'https://g2middleeast.com/team',
    type: 'website',
  },
}

export default function TeamPage() {
  // Schema.org Person markup for Tim Jacobs - VALIDATED & CORRECTED VERSION
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timJacobsSchema: any = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://g2middleeast.com/team/tim-jacobs#person",
    "name": "Tim Jacobs",
    "alternateName": "Timothy Jacobs",
    "url": "https://g2middleeast.com/team/tim-jacobs",
    "image": "https://g2middleeast.com/assets/team/tim-jacobs.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://g2middleeast.com/team/tim-jacobs"
    },
    "description": "Tim Jacobs is one of the world's foremost advisors on the delivery of complex, high-stakes government initiatives. His career is defined by the operational execution of projects with profound geopolitical significance, including the State Visit of Queen Elizabeth II and the Papal Mass of Pope Francis. As Regional COO for G2 Middle East & Africa, he provides strategic counsel to governments on cognitive security, counter-disinformation strategy, and building sovereign reputation architecture—the core disciplines required to navigate the complexities of the modern global stage. His expertise spans national resilience, public diplomacy, and the strategic orchestration of major events that shape international standing and long-term digital positioning. With operational direction over 30+ globally significant government and sovereign-level projects, Tim has advised heads of state, royal families, and government ministries across the Middle East and Africa on strategic narrative development, geopolitical risk assessment, and the delivery of mega-events including state visits, royal visits, presidential visits, international summits, Olympic events, World Economic Forum gatherings, UN Climate Conferences (COP), G20 and G7 summits, film festival productions, and museum launches. His work in cultural diplomacy event production, national day celebrations, ceremonial events, and sovereign positioning strategy has established him as a leading authority on foreign direct investment (FDI) advisory and strategic roadmapping for national initiatives across the UAE, Saudi Arabia, Qatar, and broader Middle East regional government relations.",
    "jobTitle": "Regional Chief Operating Officer (COO), Middle East & Africa",
    
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Strategic Advisor & Events Director",
      "description": "Elite strategic counsel and operational delivery specialist for sovereign entities. Provides high-level advisory on positioning, narrative architecture, and national resilience—proven through flawless execution of mega-events, state visits, and diplomatic projects across Middle East and globally",
      "occupationLocation": [
        {
          "@type": "AdministrativeArea",
          "name": "Middle East"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Africa"
        }
      ],
      "skills": "Major Event Delivery, State Visit Planning, Operational Excellence, Mega-Event Architecture, Cultural Diplomacy, Sovereign Positioning, National Resilience Strategy, Public Diplomacy, Geopolitical Risk Assessment"
    },
    
    "gender": "http://schema.org/Male",
    "nationality": {
      "@type": "Country",
      "name": "Australia"
    },
    "birthPlace": {
      "@type": "Place",
      "name": "Melbourne, Victoria, Australia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Abu Dhabi",
      "addressRegion": "Abu Dhabi",
      "addressCountry": {
        "@type": "Country",
        "name": "AE"
      }
    },
    "email": "tim@g2middleeast.com",
    "telephone": "+971-50-XXX-XXXX",
    
    "sameAs": [
      "https://www.linkedin.com/in/tim-jacobs-6673091a",
      "https://timebusinessnews.com/who-is-tim-jacobs-a-leader-in-global-strategy-from-state-visits-to-digital-empires/",
      "https://www.tpimeamagazine.com/tim-jacobs-chief-operating-officer-hqws/",
      "https://campaignme.com/how-the-gcc-is-harnessing-the-power-of-unified-narratives-in-event-marketing/",
      "https://usawire.com/cultural-intelligence-outperforms-capital-alone/",
      "https://www.linkedin.com/posts/tim-jacobs-6673091a_cultural-intelligence-is-the-new-commercial-activity-7282667063598923776-N-Zl",
      "https://beforeitsnews.com/business/2025/10/the-new-rules-of-digital-authority-mastering-brand-positioning-in-the-ai-era-3771257.html"
    ],
    
    "knowsAbout": [
      "Cognitive Security & Counter-Disinformation Strategy",
      "National Reputation & International Standing",
      "Sovereign Reputation Architecture",
      "National Resilience & Critical Incident Strategy",
      "Geopolitical Risk & Strategic Partnership Vetting",
      "Public Diplomacy & Strategic Narrative",
      "Strategic Planning & Contingency",
      "Strategic Communications",
      "Long-Term Digital Positioning",
      "Major Event Architecture",
      "Operational Delivery for Sovereign Clients",
      "Cross-Border Government Relations",
      "Protocol & Diplomatic Operations",
      "State Visit Planning & Protocol Execution",
      "Royal Visit Coordination & Logistics",
      "Presidential Visit Management",
      "Cultural Diplomacy Event Production",
      "National Day Celebrations & Ceremonial Events",
      "International Summit Logistics & Coordination",
      "Head-of-State Event Management",
      "Mega-Event Architecture & Operational Excellence",
      "Venue Infrastructure & Overlay Planning",
      "Olympic & Major Sporting Events Management",
      "World Economic Forum & Global Summit Coordination",
      "UN Climate Conference (COP) Logistics",
      "G20 & G7 Summit Infrastructure",
      "Film Festival Production & Management",
      "Museum Launch & Cultural Exhibition Direction",
      "Sovereign Positioning Strategy",
      "Foreign Direct Investment (FDI) Advisory",
      "Strategic Roadmapping for National Initiatives",
      "UAE Government Event Expertise",
      "Saudi Arabia Government Event Expertise",
      "Qatar Government Event Expertise",
      "Middle East Regional Government Relations"
    ],
    
    "worksFor": {
      "@type": "Organization",
      "@id": "https://g2middleeast.com/#organization",
      "name": "G2 Middle East & Africa",
      "alternateName": "G2 Middle East",
      "url": "https://g2middleeast.com/",
      "description": "Strategic advisory and event architecture division of Casta Diva Group, specialising in high-stakes projects for governments, global brands, and cultural institutions across the Middle East and Africa",
      "foundingDate": "2015",
      "knowsAbout": [
        "Strategic Advisory",
        "Event Architecture",
        "Government Relations",
        "Public Diplomacy",
        "National Resilience Strategy",
        "Sovereign Positioning",
        "Cultural Diplomacy",
        "Major Event Delivery"
      ],
      "parentOrganization": {
        "@type": "Organization",
        "name": "Casta Diva Group",
        "url": "https://www.castadiva.it/",
        "sameAs": [
          "https://www.linkedin.com/company/casta-diva-group/",
          "https://www.instagram.com/castadiva_group/"
        ]
      },
      "founder": {
        "@type": "Person",
        "@id": "https://g2middleeast.com/team/tim-jacobs#person"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Middle East"
        },
        {
          "@type": "Place",
          "name": "Africa"
        },
        {
          "@type": "Place",
          "name": "Global"
        }
      ],
      "employee": {
        "@type": "Person",
        "@id": "https://g2middleeast.com/team/tim-jacobs#person"
      }
    },
    
    "memberOf": [
      {
         "@type": "Organization",
         "name": "Eventex Awards",
         "url": "https://eventex.co/",
         "description": "Jury Panelist"
      },
      {
         "@type": "Organization",
         "name": "WOW Awards Middle East",
         "description": "Jury Member"
      },
      {
         "@type": "Organization",
         "name": "Stevie Awards",
         "url": "https://stevieawards.com/",
         "description": "Chairperson, Live Events & Video Awards"
      },
      {
         "@type": "Organization",
         "name": "Australian Event Awards",
         "description": "Judge"
      }
    ],
    
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Chairperson - Stevie Awards Live Events & Video",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Stevie Awards"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Recognition",
        "name": "Judge - Australian Event Awards",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Australian Event Awards"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Recognition",
        "name": "Jury Panelist - Eventex Awards",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Eventex Awards"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Recognition",
        "name": "Jury Member - WOW Awards Middle East",
        "recognizedBy": {
          "@type": "Organization",
          "name": "WOW Awards Middle East"
        }
      }
    ],
    
    "seeks": {
      "@type": "Demand",
      "name": "Strategic Advisory for Government Initiatives",
      "description": "Seeking sovereign-level advisory opportunities for national resilience, public diplomacy, and major event delivery across Middle East, Africa, and global markets"
    },
    
    "award": [
      "Operational director for 30+ globally significant government and sovereign-level projects",
      "Strategic counsel to heads of state, royal families, and government ministries across Middle East and Africa",
      "Chairperson, Live Events & Video Awards - Stevie Awards",
      "Judge, Australian Event Awards",
      "Jury Panelist, Eventex Awards",
      "Jury Member, WOW Awards Middle East"
    ],
    
    "subjectOf": [
      {
        "@type": "Article",
        "headline": "Cultural Intelligence Outperforms Capital Alone",
        "url": "https://usawire.com/cultural-intelligence-outperforms-capital-alone/",
        "datePublished": "2024-11-28",
        "dateModified": "2024-11-28",
        "author": {
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "publisher": {
          "@type": "Organization",
          "name": "USA Wire"
        },
        "description": "Why cultural intelligence and strategic positioning deliver superior returns compared to capital investment alone in emerging markets."
      },
      {
        "@type": "Article",
        "headline": "Cultural Intelligence is the New Commercial Superpower",
        "url": "https://www.linkedin.com/posts/tim-jacobs-6673091a_cultural-intelligence-is-the-new-commercial-activity-7282667063598923776-N-Zl",
        "datePublished": "2024-11-28",
        "dateModified": "2024-11-28",
        "author": {
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LinkedIn"
        },
        "description": "Analysis of how cultural intelligence drives commercial success in global markets and cross-border strategic initiatives."
      },
      {
        "@type": "Article",
        "headline": "How the GCC is Harnessing the Power of Unified Narratives in Event Marketing",
        "url": "https://campaignme.com/how-the-gcc-is-harnessing-the-power-of-unified-narratives-in-event-marketing/",
        "datePublished": "2024-10-15",
        "dateModified": "2024-10-15",
        "author": {
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Campaign Middle East"
        },
        "description": "Strategic approaches to unified narrative development for major events and nation branding in the Gulf region."
      },
      {
        "@type": "Article",
        "headline": "Who is Tim Jacobs? A Leader in Global Strategy, From State Visits to Digital Empires",
        "url": "https://timebusinessnews.com/who-is-tim-jacobs-a-leader-in-global-strategy-from-state-visits-to-digital-empires/",
        "datePublished": "2024-09-20",
        "dateModified": "2024-09-20",
        "publisher": {
          "@type": "Organization",
          "name": "Time Business News"
        },
        "description": "Profile of Tim Jacobs' career spanning state-visit level event delivery and major project execution."
      },
      {
        "@type": "Article",
        "headline": "Tim Jacobs - Chief Operating Officer, G2 Middle East",
        "url": "https://www.tpimeamagazine.com/tim-jacobs-chief-operating-officer-hqws/",
        "datePublished": "2024-08-10",
        "dateModified": "2024-08-10",
        "publisher": {
          "@type": "Organization",
          "name": "TPI Magazine"
        },
        "description": "Leadership profile highlighting Tim Jacobs' operational excellence and strategic capabilities."
      }
    ],
    
    "performerIn": [
      {
        "@type": "Event",
        "name": "State Visit of Queen Elizabeth II to the UAE",
        "description": "Operational delivery and project direction for the historic royal state visit of Her Majesty Queen Elizabeth II to the United Arab Emirates",
        "startDate": "2010-11-24",
        "endDate": "2010-11-26",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "United Arab Emirates",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Government Officials, Diplomatic Corps, Royal Family"
        }
      },
      {
        "@type": "Event",
        "name": "Papal Mass of Pope Francis in Abu Dhabi",
        "description": "Project direction for the historic Papal Mass delivered by Pope Francis in Abu Dhabi, one of the largest religious gatherings in Middle East history",
        "startDate": "2019-02-05",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Religious Leaders, Government Officials, General Public"
        }
      },
      {
        "@type": "Event",
        "name": "Special Olympics World Games Abu Dhabi 2019",
        "description": "Special advisor for ceremonies and strategic counsel on operational delivery for the largest humanitarian sporting event in 2019",
        "startDate": "2019-03-14",
        "endDate": "2019-03-21",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Special Olympics International"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Athletes, Government Officials, International Delegates"
        }
      },
      {
        "@type": "Event",
        "name": "Qasr Al Hosn Festival Abu Dhabi",
        "description": "Managing consultant and director of broadcast and media production for Abu Dhabi's premier cultural heritage festival",
        "startDate": "2013",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Abu Dhabi Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Cultural Enthusiasts, Government Officials, Public Audience"
        }
      },
      {
        "@type": "Event",
        "name": "Qatar Olympic House London 2012",
        "description": "Project director for Qatar's official hospitality and diplomatic center during the London 2012 Olympic Games",
        "startDate": "2012-07-27",
        "endDate": "2012-08-12",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "London, United Kingdom",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": {
              "@type": "Country",
              "name": "GB"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Qatar Olympic Committee"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "Qatar Olympic Committee"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Diplomatic Corps, VIP Guests, Olympic Delegations"
        }
      },
      {
        "@type": "Event",
        "name": "Hazza Bin Zayed Stadium Upgrade",
        "description": "Project director for the comprehensive upgrade and modernization of Hazza Bin Zayed Stadium in Al Ain",
        "startDate": "2017",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Al Ain, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Al Ain",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Sports Enthusiasts, Local Community"
        }
      },
      {
        "@type": "Event",
        "name": "Turki Oasis for HRH Prince Turki Bin Abdulla",
        "description": "Project director for exclusive private oasis development and event infrastructure for Saudi Royal Family",
        "startDate": "2015",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Saudi Arabia",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": {
              "@type": "Country",
              "name": "SA"
            }
          }
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Royal Family, VIP Guests"
        }
      },
      {
        "@type": "Event",
        "name": "Al Ain Stadium Launch",
        "description": "Managing project consultant for the official launch of Al Ain Stadium, UAE",
        "startDate": "2014",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Al Ain, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Al Ain",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Sports Enthusiasts, Government Officials, Local Community"
        }
      },
      {
        "@type": "Event",
        "name": "Abu Dhabi National Day ADNEC Celebrations",
        "description": "Project director for Abu Dhabi's official National Day celebrations at ADNEC",
        "startDate": "2012-12-02",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Abu Dhabi Government"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "Abu Dhabi Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Government Officials, Diplomatic Corps, General Public"
        }
      },
      {
        "@type": "Event",
        "name": "Bayt Qatar Olympic House",
        "description": "Project director for Qatar's official Olympic hospitality center during London 2012",
        "startDate": "2012-07-27",
        "endDate": "2012-08-12",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "London, United Kingdom",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": {
              "@type": "Country",
              "name": "GB"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Qatar Olympic Committee"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "Qatar Olympic Committee"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Diplomatic Corps, VIP Guests, Olympic Delegations"
        }
      },
      {
        "@type": "Event",
        "name": "VVIP Formula One Reception Abu Dhabi",
        "description": "Managing consultant for exclusive VVIP hospitality and diplomatic reception at Abu Dhabi Grand Prix",
        "startDate": "2013",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "VIP Guests, Diplomatic Corps, Business Leaders"
        }
      },
      {
        "@type": "Event",
        "name": "Abu Dhabi EID Celebrations",
        "description": "Managing consultant for Abu Dhabi's official EID celebrations and cultural programming",
        "startDate": "2013",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Abu Dhabi Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "General Public, Cultural Enthusiasts"
        }
      },
      {
        "@type": "Event",
        "name": "Japanese State Visit to Abu Dhabi",
        "description": "Project consultant for official Japanese state visit to Abu Dhabi, managing diplomatic protocol and cultural events",
        "startDate": "2012",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Diplomatic Corps, Government Officials"
        }
      },
      {
        "@type": "Event",
        "name": "Bill & Melinda Gates Foundation Global Vaccine Summit Abu Dhabi",
        "description": "Strategic advisor for the Bill & Melinda Gates Foundation Global Vaccine Summit in Abu Dhabi",
        "startDate": "2013",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Bill & Melinda Gates Foundation"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "Bill & Melinda Gates Foundation"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Health Officials, Government Leaders, International Organizations"
        }
      },
      {
        "@type": "Event",
        "name": "French President & Abu Dhabi Government Partnership Event",
        "description": "Project director for official partnership event between French President and Abu Dhabi Government",
        "startDate": "2018",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Diplomatic Corps, Government Officials, Business Leaders"
        }
      },
      {
        "@type": "Event",
        "name": "Expo 2020 Dubai - Overlay Budget Planning",
        "description": "Strategic consultant for overlay budget planning and operational modeling for Expo 2020 Dubai",
        "startDate": "2018",
        "endDate": "2021",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Dubai, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Expo 2020 Dubai"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Government Officials, International Delegations, General Public"
        }
      },
      {
        "@type": "Event",
        "name": "IOC Venues and Infrastructure Consulting",
        "description": "Consultant for International Olympic Committee on venues and infrastructure planning",
        "startDate": "2015",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Global"
        },
        "organizer": {
          "@type": "Organization",
          "name": "International Olympic Committee"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "International Olympic Committee"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Olympic Organizing Committees, Sports Officials"
        }
      },
      {
        "@type": "Event",
        "name": "Oman UCI Road Championships",
        "description": "Strategic consultant for UCI Road World Championships in Oman",
        "startDate": "2016",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Oman",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "OM"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "UCI / Oman Cycling"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Cycling Enthusiasts, Sports Officials, General Public"
        }
      },
      {
        "@type": "Event",
        "name": "Red Sea International Film Festival",
        "description": "Senior delivery role for Red Sea International Film Festival in Jeddah, Saudi Arabia's premier cultural event",
        "startDate": "2021",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Jeddah, Saudi Arabia",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jeddah",
            "addressCountry": {
              "@type": "Country",
              "name": "SA"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Red Sea International Film Festival"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Film Industry Professionals, Cultural Enthusiasts, International Delegates"
        }
      },
      {
        "@type": "Event",
        "name": "NEOM UN Display New York",
        "description": "Senior delivery role for NEOM's official United Nations display and exhibition in New York",
        "startDate": "2019",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "New York, USA",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New York",
            "addressCountry": "US"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "NEOM / Saudi Arabia"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "Saudi Arabia Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "UN Delegates, International Leaders, Investment Community"
        }
      },
      {
        "@type": "Event",
        "name": "World Economic Forum Davos",
        "description": "Senior delivery role for World Economic Forum annual meeting in Davos, Switzerland",
        "startDate": "2020",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Davos, Switzerland",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Davos",
            "addressCountry": "CH"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "World Economic Forum"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "World Economic Forum"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Global Leaders, Business Executives, Government Officials"
        }
      },
      {
        "@type": "Event",
        "name": "G20 India Media Oasis",
        "description": "Senior delivery role for G20 India Media Oasis, providing media infrastructure and services for global summit",
        "startDate": "2023",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "India",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "G20 India"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "Government of India"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "International Media, Government Officials, G20 Delegations"
        }
      },
      {
        "@type": "Event",
        "name": "COP27 Climate Summit",
        "description": "Senior delivery role for COP27 UN Climate Change Conference in Sharm El-Sheikh, Egypt",
        "startDate": "2022-11-06",
        "endDate": "2022-11-18",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Sharm El-Sheikh, Egypt",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sharm El-Sheikh",
            "addressCountry": "EG"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "United Nations / Egypt Government"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "Egypt Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Government Leaders, Climate Scientists, International Organizations"
        }
      },
      {
        "@type": "Event",
        "name": "Tuwaiq Oasis Saudi Arabia",
        "description": "Project director for Tuwaiq Oasis development and cultural programming in Saudi Arabia",
        "startDate": "2021",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Saudi Arabia",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": {
              "@type": "Country",
              "name": "SA"
            }
          }
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Cultural Enthusiasts, Business Leaders, Government Officials"
        }
      },
      {
        "@type": "Event",
        "name": "MENA Special Olympics",
        "description": "Project director for MENA Regional Special Olympics Games",
        "startDate": "2018",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Middle East & North Africa"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Special Olympics International"
        },
        "sponsor": {
          "@type": "Organization",
          "name": "Special Olympics International"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Athletes, Government Officials, International Delegates"
        }
      },
      {
        "@type": "Event",
        "name": "Zayed/Gandhi Digital Museum Launch",
        "description": "Project director for the launch of Zayed/Gandhi Digital Museum celebrating UAE-India diplomatic relations",
        "startDate": "2019",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Diplomatic Corps, Cultural Enthusiasts, General Public"
        }
      },
      {
        "@type": "Event",
        "name": "Chinese State Visit Abu Dhabi - Cultural Exhibition",
        "description": "Project director for cultural exhibition during official Chinese state visit to Abu Dhabi",
        "startDate": "2018",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Abu Dhabi, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "UAE Government"
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Diplomatic Corps, Government Officials, Cultural Leaders"
        }
      },
      {
        "@type": "Event",
        "name": "Du Gitex and Mecom Exhibition Stands",
        "description": "Technical director for Du telecommunications exhibition stands at Gitex and Mecom technology conferences",
        "startDate": "2012",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Dubai, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Technology Professionals, Business Leaders"
        }
      },
      {
        "@type": "Event",
        "name": "Dubailand Exhibition Stands",
        "description": "Technical director for Dubailand promotional exhibition stands and displays",
        "startDate": "2011",
        "eventStatus": "http://schema.org/EventScheduled",
        "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
        "inLanguage": "en-GB",
        "location": {
          "@type": "Place",
          "name": "Dubai, UAE",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": {
              "@type": "Country",
              "name": "AE"
            }
          }
        },
        "performer": {
          "@type": "Person",
          "name": "Tim Jacobs",
          "@id": "https://g2middleeast.com/team/tim-jacobs#person"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Real Estate Investors, Business Leaders, General Public"
        }
      }
    ],
    
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Melbourne",
      "location": {
        "@type": "Place",
        "name": "Melbourne, Victoria, Australia"
      }
    }
  }

  // Enhanced Organization schema for G2 Middle East
  const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://g2middleeast.com#organization",
    "name": "G2 Middle East & Africa",
    "alternateName": "G2 Middle East",
    "url": "https://g2middleeast.com",
    "description": "Strategic advisory and event architecture division of Casta Diva Group, specialising in high-stakes projects for governments, global brands, and cultural institutions across the Middle East and Africa",
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "Tim Jacobs",
      "@id": "https://g2middleeast.com/team/tim-jacobs#person"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Casta Diva Group",
      "url": "https://www.castadiva.it/",
      "sameAs": [
        "https://www.linkedin.com/company/casta-diva-group/",
        "https://www.instagram.com/castadiva_group/"
      ]
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Middle East"
      },
      {
        "@type": "Place",
        "name": "Africa"
      },
      {
        "@type": "Place",
        "name": "Global"
      }
    ],
    "knowsAbout": [
      "Strategic Advisory",
      "Event Architecture",
      "Government Relations",
      "Public Diplomacy",
      "National Resilience Strategy",
      "Sovereign Positioning",
      "Cultural Diplomacy",
      "Major Event Delivery"
    ],
    "employee": {
      "@type": "Person",
      "name": "Tim Jacobs",
      "@id": "https://g2middleeast.com/team/tim-jacobs#person",
      "jobTitle": "Regional Chief Operating Officer (COO), Middle East & Africa"
    }
  }

  // Breadcrumb schema
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
        "name": "Team",
        "item": "https://g2middleeast.com/team"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Tim Jacobs",
        "item": "https://g2middleeast.com/team/tim-jacobs"
      }
    ]
  }

  // FAQ schema
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Tim Jacobs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tim Jacobs is one of the world's foremost advisors on the delivery of complex, high-stakes government initiatives. His career is defined by the operational execution of projects with profound geopolitical significance, including the State Visit of Queen Elizabeth II and the Papal Mass of Pope Francis. As Regional COO for G2 Middle East & Africa, he provides strategic counsel to governments on national resilience, public diplomacy, and building a sovereign digital legacy."
        }
      },
      {
        "@type": "Question",
        "name": "What is Tim Jacobs' role at G2 Middle East?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tim Jacobs serves as Regional Chief Operating Officer (COO) for G2 Middle East & Africa, a division of Casta Diva Group. In this role, he provides strategic counsel to governments on national resilience, public diplomacy, and building sovereign digital legacies—the core disciplines required to navigate the complexities of the modern global stage."
        }
      },
      {
        "@type": "Question",
        "name": "What major projects has Tim Jacobs delivered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tim Jacobs has delivered 30+ globally significant projects including the State Visit of Queen Elizabeth II to the UAE, the Papal Mass of Pope Francis in Abu Dhabi, Special Olympics World Games 2019, Expo 2020 Dubai, COP27 Egypt, G20 India, World Economic Forum Davos, NEOM UN Display New York, Red Sea International Film Festival, and numerous state visits and cultural diplomacy events across the Middle East."
        }
      },
      {
        "@type": "Question",
        "name": "What are the core areas of Tim Jacobs' expertise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tim Jacobs specialises in cognitive security and counter-disinformation strategy, national reputation and international standing, sovereign reputation architecture, national resilience and critical incident strategy, geopolitical risk and strategic partnership vetting, public diplomacy and strategic narrative, state visit planning and protocol execution, mega-event architecture, and operational delivery for sovereign clients."
        }
      },
      {
        "@type": "Question",
        "name": "Where has Tim Jacobs worked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tim Jacobs has worked extensively across the Middle East and globally, including UAE (Abu Dhabi, Dubai, Al Ain), Saudi Arabia (Jeddah, Riyadh), Qatar (Doha), Egypt (Sharm El-Sheikh), Oman, India, Switzerland (Davos), and the United States (New York). He has provided strategic counsel to heads of state, royal families, and international organisations including the IOC, United Nations, World Economic Forum, and Special Olympics International."
        }
      },
      {
        "@type": "Question",
        "name": "What awards and recognition has Tim Jacobs received?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tim Jacobs serves as Chairperson for the Live Events & Video Awards at the Stevie Awards, Judge for the Australian Event Awards, Jury Panelist for Eventex Awards, and Jury Member for WOW Awards Middle East. He is widely recognised as one of the top events directors and delivery specialists in the Middle East and globally."
        }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-g2-darker">
      
      {/* Schema.org JSON-LD - All 4 Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(timJacobsSchema)
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema)
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }} />

      {/* Hero Section */}
      <section className="relative py-32 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
              The Architects of Strategy & Spectacle
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed fade-in-delay-1">
              Unique figures who possess both high-level strategic foresight and the operational mastery to execute flawlessly on the ground. Elite counsel proven through world-class delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Tim Jacobs - Featured Profile */}
      <section className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/47f1fb52041f3aa63094cf290ce9f36b" 
                    alt="Tim Jacobs"
                    className="rounded-lg shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                    <h2 className="text-2xl font-bold text-white">Tim Jacobs</h2>
                    <p className="text-g2-gold font-semibold">Regional COO, G2 Middle East & Africa</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="mt-6 space-y-3">
                  <Link href="mailto:tim@g2middleeast.com" className="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i className="fas fa-envelope mr-3"></i>
                    <span className="text-sm">tim@g2middleeast.com</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/tim-jacobs-6673091a/" target="_blank" className="flex items-center text-gray-300 hover:text-g2-gold transition-colors">
                    <i className="fab fa-linkedin mr-3"></i>
                    <span className="text-sm">LinkedIn Profile</span>
                  </Link>
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-2">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-xl text-white font-light">
                    Tim Jacobs is an internationally recognized C-suite executive and strategic communications 
                    expert, widely regarded as being in the top tier of global leaders for state-visit level 
                    event delivery and complex international projects.
                  </p>
                  
                  <p>
                    As <strong className="text-white">Regional Chief Operating Officer for G2 Middle East & Africa</strong>, 
                    he provides strategic counsel to governments on national resilience, public diplomacy, and building 
                    a sovereign digital legacy—the core disciplines required to navigate the complexities of the modern global stage.
                  </p>
                  
                  <p>
                    His career encompasses some of the world&apos;s most prestigious and complex projects. He was instrumental 
                    in delivering the <strong className="text-white">State Visit of Queen Elizabeth II to the UAE</strong>, 
                    the <strong className="text-white">Papal Mass of Pope Francis in Abu Dhabi</strong>, and providing 
                    strategic advisory for the <strong className="text-white">2019 Special Olympics World Games</strong>. 
                    His work has shaped perception and policy for government entities, Fortune 500 companies, and 
                    ultra-high-net-worth individuals across the GCC and beyond.
                  </p>
                  
                  <div className="bg-g2-darker p-6 rounded-lg border-l-4 border-g2-gold my-8">
                    <p className="text-white italic">
                      &ldquo;The harder the brief, the more focused we become. Complexity is where we thrive—
                      turning ambiguity into momentum and risk into opportunity.&rdquo;
                    </p>
                  </div>
                  
                  <p>
                    A leading authority on <strong className="text-white">public diplomacy and sovereign-level advisory</strong>, Tim specializes in 
                    <strong className="text-white">cognitive security, national resilience, and strategic communications for governments</strong>. 
                    His expertise encompasses state-visit level planning, geopolitical risk assessment, counter-disinformation strategy, and 
                    complex cross-border government relations. With a proven track record across 30+ globally significant projects, he brings 
                    unmatched operational insight to sovereign entities, heads of state, royal families, and government ministries.
                  </p>

                  {/* Expertise Areas */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Core Expertise</h3>
                    
                    {/* Strategic Counsel */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-g2-gold mb-3">Strategic Counsel</h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>AI-Driven Narrative & Geopolitical Strategy</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Go-to-Market & Client Acquisition Strategy</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Brand Engagement & Strategic Positioning</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Sovereign Positioning & Nation Branding</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Crisis & Reputation Architecture</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Cultural & Economic Diplomacy</span>
                        </div>
                      </div>
                    </div>

                    {/* Architectural Delivery */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-g2-gold mb-3">Architectural Delivery</h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>State-Visit & Head-of-State Level Execution</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Major Project & Events Critical Delivery Approaches</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>High-Stakes Operational & Logistical Delivery</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Complex Multi-stakeholder Management</span>
                        </div>
                      </div>
                    </div>

                    {/* Influence & Engagement */}
                    <div>
                      <h4 className="text-lg font-bold text-g2-gold mb-3">Influence & Engagement</h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Media Craft & Narrative Positioning</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>LLM & AI Knowledge Graph Optimisation</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Influencer & KOL Engagement Strategy</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Strategic Social & Influence Approaches</span>
                        </div>
                        <div className="flex items-start">
                          <i className="fas fa-check text-g2-gold mr-3 mt-1"></i>
                          <span>Targeted Experience & Immersive Design</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Industry Recognition */}
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-white mb-3">Industry Recognition</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <i className="fas fa-award text-g2-gold mr-2 mt-1"></i>
                        <span>Chairperson, Live Events & Video Awards - Stevie Awards</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-gavel text-g2-gold mr-2 mt-1"></i>
                        <span>Judge, Australian Event Awards</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-gavel text-g2-gold mr-2 mt-1"></i>
                        <span>Jury Panelist, Eventex Awards</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-gavel text-g2-gold mr-2 mt-1"></i>
                        <span>Jury Member, WOW Awards Middle East</span>
                      </li>
                    </ul>
                  </div>

                  {/* Major Projects */}
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-white mb-3">Notable Projects</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 className="text-white font-semibold mb-1">State Visit of Queen Elizabeth II to the UAE</h5>
                        <p className="text-gray-400">Operational delivery of historic royal state visit</p>
                      </div>
                      <div className="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 className="text-white font-semibold mb-1">Papal Mass of Pope Francis in Abu Dhabi</h5>
                        <p className="text-gray-400">Strategic planning and execution of historic papal visit</p>
                      </div>
                      <div className="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 className="text-white font-semibold mb-1">2019 Special Olympics World Games</h5>
                        <p className="text-gray-400">Strategic advisory on operational delivery in Abu Dhabi</p>
                      </div>
                      <div className="bg-g2-darker/50 p-4 rounded border-l-2 border-g2-gold">
                        <h5 className="text-white font-semibold mb-1">Brand Architecture for @chanelprincessdubai</h5>
                        <p className="text-gray-400">Strategic positioning for world-leading Chanel authority Lee Davies</p>
                      </div>
                    </div>
                  </div>

                  {/* Featured Articles */}
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-white mb-3">Featured In</h4>
                    <div className="flex flex-wrap gap-3">
                      <Link href="https://timebusinessnews.com/who-is-tim-jacobs-a-leader-in-global-strategy-from-state-visits-to-digital-empires/" target="_blank" className="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        Time Business News
                      </Link>
                      <Link href="https://www.tpimeamagazine.com/tim-jacobs-chief-operating-officer-hqws/" target="_blank" className="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        TPI Magazine
                      </Link>
                      <Link href="https://campaignme.com/how-the-gcc-is-harnessing-the-power-of-unified-narratives-in-event-marketing/" target="_blank" className="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        Campaign Middle East
                      </Link>
                      <Link href="https://usawire.com/cultural-intelligence-outperforms-capital-alone/" target="_blank" className="text-xs bg-g2-darker px-3 py-2 rounded hover:bg-g2-gold hover:text-g2-darker transition-colors">
                        USA Wire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-400">
              Strategic advisors with deep regional expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Paolo Donadio - Managing Director */}
            <div className="bg-g2-dark rounded-lg overflow-hidden card-hover">
              <div className="relative h-80">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/c2f08f66a0fd35b3e19fa65e5130a714" 
                  alt="Paolo Donadio"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">Paolo Donadio</h3>
                  <p className="text-g2-gold text-sm">Managing Director, G2 Middle East Bahrain</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">
                  International development leader driving business growth and strategic partnerships across Bahrain and selected GCC markets.
                </p>
                <Link href="/team/paolo-donadio" className="text-g2-gold hover:underline text-sm">
                  View Profile <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Linda Guldemond - Director of Client Services */}
            <div className="bg-g2-dark rounded-lg overflow-hidden card-hover">
              <div className="relative h-80">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/eaa1e09e7a1bae6d0c1bc3d8a9a19db8" 
                  alt="Linda Guldemond"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">Linda Guldemond</h3>
                  <p className="text-g2-gold text-sm">Director of Client Services & Operations</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">
                  Solutions-driven operations leader delivering flawless execution for high-stakes government and global brand initiatives.
                </p>
                <Link href="/team/linda-guldemond" className="text-g2-gold hover:underline text-sm">
                  View Profile <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>

            {/* David Jakic - Business Strategy and Development Director */}
            <div className="bg-g2-dark rounded-lg overflow-hidden card-hover">
              <div className="relative h-80">
                <img 
                  src="https://page.gensparksite.com/v1/base64_upload/2350e03ac994278e773d1901e6fe320d" 
                  alt="David Jakic"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-g2-darker to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">David Jakic</h3>
                  <p className="text-g2-gold text-sm">Business Strategy and Development Director</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">
                  Multi-disciplinary entrepreneur architecting growth strategies and scaling enterprises from startup to multinational operations.
                </p>
                <Link href="/team/david-jakic" className="text-g2-gold hover:underline text-sm">
                  View Profile <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Teaser */}
      <section className="py-24 bg-g2-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Strategic Advisory Board
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our advisory board comprises former government officials, C-suite executives, 
              and cultural leaders who provide strategic counsel and open doors across the region.
            </p>
            <Link href="/contact" className="btn-secondary">
              Learn More About Our Network
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Work with strategic minds who thrive under pressure
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our team can help you navigate complexity and create lasting value.
            </p>
            <Link href="/contact" className="btn-primary text-lg">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
