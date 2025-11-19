import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'G2 Middle East | Strategic Advisory & Government Relations',
  description: 'Elite strategic advisory firm specializing in government relations, cultural intelligence, and high-stakes stakeholder engagement across the Middle East.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Semantic H1 for SEO - Hidden but readable by screen readers and crawlers */}
      <h1 className="sr-only">
        G2 Middle East: Elite Strategic Advisory & Government Relations
      </h1>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-g2-dark to-g2-darker">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-g2-gold to-g2-gold-light bg-clip-text text-transparent">
              Strategic Advisory
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Elite government relations and cultural intelligence across the Middle East
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/briefing"
                className="px-8 py-3 bg-g2-gold hover:bg-g2-gold-light text-g2-darker font-semibold rounded-lg transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-g2-gold hover:bg-g2-gold/10 text-g2-gold font-semibold rounded-lg transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-g2-darker">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-g2-gold">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-g2-dark rounded-xl border border-white/10 hover:border-g2-gold/30 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 text-g2-gold">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: 'Government Relations',
    description: 'Strategic engagement with government entities and policymakers across the Middle East.',
  },
  {
    title: 'Cultural Intelligence',
    description: 'Deep cultural insights and stakeholder mapping for successful market entry and operations.',
  },
  {
    title: 'High-Stakes Advisory',
    description: 'Confidential strategic counsel for sensitive negotiations and complex situations.',
  },
];
