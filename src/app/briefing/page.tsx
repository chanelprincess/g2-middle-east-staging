import UnderConstruction from '@/components/UnderConstruction';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Briefing',
  robots: {
    index: false,
    follow: true,
  },
};

export default function BriefingPage() {
  // Return 503 Service Unavailable status
  return (
    <>
      <meta httpEquiv="status" content="503" />
      <UnderConstruction pageName="Briefing" />
    </>
  );
}

// Force 503 status code
export const dynamic = 'force-dynamic';
export const revalidate = 0;
