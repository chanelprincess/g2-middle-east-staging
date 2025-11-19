import Link from 'next/link';

export default function UnderConstruction({ pageName }: { pageName: string }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-g2-darker">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-g2-gold">
            {pageName}
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Coming Soon
          </p>
          <p className="text-lg text-gray-400 mb-12">
            This section is currently under construction. We&apos;re working on something special.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-g2-gold hover:bg-g2-gold-light text-g2-darker font-semibold rounded-lg transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
