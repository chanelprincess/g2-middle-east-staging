/**
 * Team Member Data
 * 
 * This data structure powers both the UI and Schema.org structured data
 * for team member profiles.
 */

export interface TeamMember {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  email?: string;
  image?: string;
  linkedIn?: string;
  twitter?: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'tim-jacobs',
    name: 'Tim Jacobs',
    jobTitle: 'Regional Chief Operating Officer',
    bio: 'Tim Jacobs serves as Regional COO for G2 Middle East, bringing extensive experience in strategic operations and government relations across the Middle East. His expertise spans regulatory affairs, stakeholder engagement, and organizational strategy in complex markets.\n\nTim has led numerous high-stakes engagements for multinational corporations, government entities, and private organizations navigating Middle Eastern markets. His approach emphasizes cultural intelligence, strategic patience, and long-term relationship building.',
    // email: 'Available to authorized stakeholders',
    // image: '/assets/images/team/tim-jacobs.jpg',
    // linkedIn: 'https://www.linkedin.com/in/tim-jacobs',
  },
];

/**
 * Get team member by slug
 */
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}

/**
 * Get all team member slugs (for static generation)
 */
export function getAllTeamMemberSlugs(): string[] {
  return teamMembers.map((member) => member.slug);
}
