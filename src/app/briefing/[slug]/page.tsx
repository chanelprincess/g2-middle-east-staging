import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

interface BriefingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Mock briefing data - matches API data structure
const briefings = {
  'digital-sovereignty-gcc': {
    id: 'digital-sovereignty-gcc',
    title: 'Digital Sovereignty Frameworks in the GCC',
    subtitle: 'Data localization and technology governance across Gulf states',
    summary:
      'Comprehensive analysis of data localization requirements, cloud service regulations, and digital sovereignty policies across Gulf Cooperation Council states. Examines UAE, Saudi Arabia, and Qatar frameworks for technology governance.',
    date: 'January 2025',
    content: `
## Executive Summary

Digital sovereignty has emerged as a critical strategic priority for Gulf Cooperation Council (GCC) states. This briefing examines the evolving regulatory frameworks for data localization, cloud services, and technology governance across the region.

## Key Findings

### United Arab Emirates
The UAE has implemented comprehensive data protection frameworks including the Dubai International Financial Centre (DIFC) Data Protection Law and federal data regulations. Organizations operating in the UAE must understand data residency requirements and cross-border transfer restrictions.

### Kingdom of Saudi Arabia
Saudi Arabia's Personal Data Protection Law (PDPL) establishes strict requirements for data localization and processing. Organizations must comply with National Cybersecurity Authority (NCA) regulations and Cloud Computing Regulatory Framework.

### Qatar
Qatar has developed robust data protection frameworks aligned with international standards while maintaining sovereignty over critical data infrastructure. The Qatar Financial Centre (QFC) provides specific guidance for financial services data.

## Strategic Recommendations

Organizations operating in GCC markets should:

1. Conduct comprehensive data mapping across jurisdictions
2. Implement region-specific data residency solutions
3. Engage with regulatory authorities early in planning
4. Build relationships with local cloud service providers
5. Develop cultural intelligence around data sovereignty priorities

## Regulatory Landscape

The GCC digital sovereignty landscape continues to evolve rapidly. Organizations must monitor regulatory developments and adapt compliance strategies accordingly.
    `,
  },
  'cultural-intelligence-market-entry': {
    id: 'cultural-intelligence-market-entry',
    title: 'Cultural Intelligence for Middle East Market Entry',
    subtitle: 'Strategic framework for successful regional operations',
    summary:
      'Strategic framework for understanding cultural dynamics in Middle Eastern business environments. Covers relationship building, decision-making processes, and stakeholder engagement strategies essential for successful market entry.',
    date: 'January 2025',
    content: `
## Overview

Cultural intelligence is the foundation of successful operations in Middle Eastern markets. This briefing provides strategic guidance for organizations entering or expanding in the region.

## Key Principles

### Relationship-First Approach
Middle Eastern business culture prioritizes relationship building over transactional interactions. Organizations must invest time in cultivating trust and understanding with stakeholders.

### Decision-Making Processes
Understanding organizational hierarchies and decision-making authority is essential. Patience and respect for cultural protocols facilitate successful outcomes.

### Stakeholder Mapping
Comprehensive stakeholder analysis identifies key decision-makers, influencers, and relationship networks critical to market entry success.

## Strategic Recommendations

Organizations should:

1. Invest in cultural training for teams
2. Engage local advisors with deep regional expertise
3. Respect cultural protocols and timing
4. Build long-term relationship strategies
5. Understand religious and cultural sensitivities
    `,
  },
  // Add other briefings as needed
};

export async function generateMetadata({
  params,
}: BriefingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const briefing = briefings[slug as keyof typeof briefings];

  if (!briefing) {
    return {
      title: 'Briefing Not Found',
    };
  }

  // Dynamic OG image using our API
  const ogImageUrl = `/api/og?title=${encodeURIComponent(
    briefing.title
  )}&subtitle=${encodeURIComponent(briefing.subtitle)}`;

  return {
    title: briefing.title,
    description: briefing.summary,
    openGraph: {
      title: briefing.title,
      description: briefing.summary,
      type: 'article',
      url: `https://www.g2middleeast.com/briefing/${slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: briefing.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: briefing.title,
      description: briefing.summary,
      images: [ogImageUrl],
    },
  };
}

export default async function BriefingPage({ params }: BriefingPageProps) {
  const { slug } = await params;
  const briefing = briefings[slug as keyof typeof briefings];

  if (!briefing) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-g2-darker">
      {/* Header with back link */}
      <div className="border-b border-white/10 bg-g2-dark">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/briefing"
            className="inline-flex items-center text-g2-gold hover:text-g2-gold-light transition-colors"
          >
            ← Back to Briefings
          </Link>
        </div>
      </div>

      {/* Briefing Content */}
      <article className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <p className="text-g2-gold text-sm font-semibold mb-4 uppercase tracking-wider">
              Strategic Briefing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {briefing.title}
            </h1>
            <p className="text-xl text-gray-400 mb-6">{briefing.subtitle}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <time>{briefing.date}</time>
            </div>
          </header>

          {/* Summary */}
          <div className="bg-g2-dark border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-g2-gold mb-4">Summary</h2>
            <p className="text-gray-300 leading-relaxed">{briefing.summary}</p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div
              className="text-gray-300"
              dangerouslySetInnerHTML={{
                __html: briefing.content
                  .split('\n')
                  .map((line) => {
                    if (line.startsWith('## '))
                      return `<h2 class="text-3xl font-bold text-g2-gold mt-12 mb-6">${line.slice(
                        3
                      )}</h2>`;
                    if (line.startsWith('### '))
                      return `<h3 class="text-2xl font-bold text-white mt-8 mb-4">${line.slice(
                        4
                      )}</h3>`;
                    if (line.trim().match(/^\d+\./))
                      return `<li class="ml-6 mb-2">${line.trim()}</li>`;
                    if (line.trim()) return `<p class="mb-4">${line.trim()}</p>`;
                    return '';
                  })
                  .join(''),
              }}
            />
          </div>
        </div>
      </article>
    </main>
  );
}

// Generate static params for all briefings
export function generateStaticParams() {
  return Object.keys(briefings).map((slug) => ({
    slug,
  }));
}
