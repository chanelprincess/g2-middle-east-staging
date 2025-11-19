import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/structured-data/JsonLd';
import { getTeamMemberBySlug, getAllTeamMemberSlugs } from '@/data/team';
import type { WithContext, ProfilePage, Person } from 'schema-dts';

interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllTeamMemberSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return {
      title: 'Team Member Not Found',
    };
  }

  return {
    title: `${member.name} - ${member.jobTitle}`,
    description: member.bio.substring(0, 160),
    openGraph: {
      title: `${member.name} - ${member.jobTitle}`,
      description: member.bio.substring(0, 160),
      type: 'profile',
      url: `https://www.g2middleeast.com/team/${slug}`,
    },
  };
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  // ProfilePage Schema with Person as mainEntity
  // This creates a knowledge graph link: Person → Organization
  const profilePageSchema: WithContext<ProfilePage> = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `https://www.g2middleeast.com/team/${slug}`,
    name: `${member.name} - G2 Middle East`,
    description: member.bio.substring(0, 200),
    url: `https://www.g2middleeast.com/team/${slug}`,
    mainEntity: {
      '@type': 'Person',
      '@id': `https://www.g2middleeast.com/team/${slug}#person`,
      name: member.name,
      jobTitle: member.jobTitle,
      description: member.bio,
      // CRITICAL: Link back to the organization defined on homepage
      worksFor: {
        '@id': 'https://www.g2middleeast.com/#organization',
      },
      ...(member.email && { email: member.email }),
      ...(member.image && { image: member.image }),
      ...(member.linkedIn && {
        sameAs: [member.linkedIn, ...(member.twitter ? [member.twitter] : [])],
      }),
    } as Person,
  };

  return (
    <main className="min-h-screen bg-g2-darker">
      {/* JSON-LD Structured Data */}
      <JsonLd data={profilePageSchema} />

      {/* Header with back link */}
      <div className="border-b border-white/10 bg-g2-dark">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/team"
            className="inline-flex items-center text-g2-gold hover:text-g2-gold-light transition-colors"
          >
            ← Back to Team
          </Link>
        </div>
      </div>

      {/* Team Member Profile */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-g2-gold mb-4">
              {member.name}
            </h1>
            <p className="text-xl text-gray-300">{member.jobTitle}</p>
          </div>

          {/* Bio */}
          <div className="bg-g2-dark border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-g2-gold mb-6">About</h2>
            <div className="prose prose-invert max-w-none">
              {member.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Contact / Social Links (if available) */}
          {(member.email || member.linkedIn || member.twitter) && (
            <div className="mt-8 bg-g2-dark border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-g2-gold mb-6">Connect</h2>
              <div className="space-y-3">
                {member.email && (
                  <p className="text-gray-400">
                    <span className="text-g2-gold font-semibold">Email:</span>{' '}
                    {member.email}
                  </p>
                )}
                {member.linkedIn && (
                  <p>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-g2-gold hover:text-g2-gold-light transition-colors"
                    >
                      LinkedIn Profile →
                    </a>
                  </p>
                )}
                {member.twitter && (
                  <p>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-g2-gold hover:text-g2-gold-light transition-colors"
                    >
                      Twitter Profile →
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
