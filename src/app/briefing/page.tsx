import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Strategic Briefings',
  description:
    'Strategic insights on government relations, cultural intelligence, digital sovereignty, and regulatory frameworks across the Middle East.',
};

const briefings = [
  {
    id: 'digital-sovereignty-gcc',
    title: 'Digital Sovereignty Frameworks in the GCC',
    summary:
      'Comprehensive analysis of data localization requirements and digital sovereignty policies across Gulf Cooperation Council states.',
    date: 'January 2025',
    topics: ['Digital Sovereignty', 'Data Localization', 'GCC', 'Regulation'],
  },
  {
    id: 'cultural-intelligence-market-entry',
    title: 'Cultural Intelligence for Middle East Market Entry',
    summary:
      'Strategic framework for understanding cultural dynamics in Middle Eastern business environments.',
    date: 'January 2025',
    topics: ['Cultural Intelligence', 'Market Entry', 'Stakeholder Engagement'],
  },
  {
    id: 'government-relations-saudi-vision',
    title: 'Government Relations Strategy: Saudi Vision 2030',
    summary:
      'Analysis of Saudi Vision 2030 policy initiatives and strategic guidance for government engagement.',
    date: 'December 2024',
    topics: ['Government Relations', 'Saudi Arabia', 'Vision 2030', 'Policy'],
  },
  {
    id: 'high-stakes-negotiation-mena',
    title: 'High-Stakes Negotiation in MENA Markets',
    summary:
      'Strategic counsel for complex negotiations in Middle East and North Africa region.',
    date: 'November 2024',
    topics: ['Negotiation', 'High-Stakes', 'MENA', 'Strategy'],
  },
  {
    id: 'uae-regulatory-landscape',
    title: 'UAE Regulatory Landscape 2025',
    summary:
      'Overview of United Arab Emirates regulatory environment and compliance frameworks.',
    date: 'December 2024',
    topics: ['UAE', 'Regulation', 'Compliance', 'Licensing'],
  },
];

export default function BriefingPage() {
  return (
    <main className="min-h-screen bg-g2-darker">
      {/* Header */}
      <div className="border-b border-white/10 bg-g2-dark">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-g2-gold mb-4">
            Strategic Briefings
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Strategic insights on government relations, cultural intelligence, digital
            sovereignty, and regulatory frameworks across the Middle East.
          </p>
        </div>
      </div>

      {/* Briefings Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-8 max-w-5xl mx-auto">
          {briefings.map((briefing) => (
            <Link
              key={briefing.id}
              href={`/briefing/${briefing.id}`}
              className="block bg-g2-dark border border-white/10 hover:border-g2-gold/30 rounded-2xl p-8 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-g2-gold group-hover:text-g2-gold-light mb-2 transition-colors">
                    {briefing.title}
                  </h2>
                  <p className="text-sm text-gray-500">{briefing.date}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{briefing.summary}</p>
              <div className="flex flex-wrap gap-2">
                {briefing.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-g2-darker border border-white/10 rounded-full text-xs text-gray-400"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <span className="inline-block mt-4 text-g2-gold group-hover:text-g2-gold-light transition-colors">
                Read Briefing →
              </span>
            </Link>
          ))}
        </div>

        {/* API Access Note */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-g2-dark border border-g2-gold/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-g2-gold mb-4">
              🤖 AI Agent Access
            </h3>
            <p className="text-gray-300 mb-4">
              These briefings are also available via our Intelligence API for AI agents
              and LLM integrations.
            </p>
            <code className="block bg-g2-darker px-4 py-3 rounded-lg text-sm text-g2-gold">
              GET /api/briefings?topic=digital+sovereignty
            </code>
            <p className="text-sm text-gray-500 mt-4">
              See{' '}
              <a
                href="/ai-plugin.json"
                className="text-g2-gold hover:underline"
                target="_blank"
              >
                ai-plugin.json
              </a>{' '}
              for integration details.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
