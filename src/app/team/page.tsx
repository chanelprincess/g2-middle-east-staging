import type { Metadata } from 'next';
import Link from 'next/link';
import { teamMembers } from '@/data/team';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Leadership team at G2 Middle East - Strategic advisory experts with deep Middle East expertise.',
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-g2-darker">
      {/* Header */}
      <div className="border-b border-white/10 bg-g2-dark">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-g2-gold mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Leadership team with deep expertise in Middle East strategic advisory,
            government relations, and cultural intelligence.
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="block bg-g2-dark border border-white/10 hover:border-g2-gold/30 rounded-2xl p-8 transition-colors group"
            >
              <h2 className="text-2xl font-bold text-g2-gold group-hover:text-g2-gold-light mb-2 transition-colors">
                {member.name}
              </h2>
              <p className="text-gray-400 mb-4">{member.jobTitle}</p>
              <p className="text-sm text-gray-500 line-clamp-3">
                {member.bio.split('\n\n')[0]}
              </p>
              <span className="inline-block mt-4 text-g2-gold group-hover:text-g2-gold-light transition-colors">
                View Profile →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
