import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.g2middleeast.com'),
  title: {
    default: 'G2 Middle East | Strategic Advisory & Government Relations',
    template: '%s | G2 Middle East',
  },
  description: 'Elite strategic advisory firm specializing in government relations, cultural intelligence, and high-stakes stakeholder engagement across the Middle East.',
  keywords: ['strategic advisory', 'government relations', 'Middle East', 'cultural intelligence', 'stakeholder engagement'],
  authors: [{ name: 'G2 Middle East' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.g2middleeast.com',
    siteName: 'G2 Middle East',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'G2 Middle East - Strategic Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G2 Middle East | Strategic Advisory',
    description: 'Elite strategic advisory and government relations across the Middle East.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
