import UnderConstruction from '@/components/UnderConstruction';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tim Jacobs',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TimJacobsPage() {
  // Return 503 Service Unavailable status
  return (
    <>
      <meta httpEquiv="status" content="503" />
      <UnderConstruction pageName="Tim Jacobs" />
    </>
  );
}

// Force 503 status code
export const dynamic = 'force-dynamic';
export const revalidate = 0;
