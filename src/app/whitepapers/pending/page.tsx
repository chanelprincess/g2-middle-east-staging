import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Registration Received - White Papers | G2 Middle East & Africa',
  description: 'Your request for access is now pending approval',
  openGraph: {
    title: 'Registration Received - White Papers | G2 Middle East & Africa',
    description: 'Your request for access is now pending approval',
    url: 'https://g2middleeast.com/whitepapers/pending',
    type: 'website',
  },
}

export default function WhitepapersPendingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-g2-gold/10 border-2 border-g2-gold">
                <i className="fas fa-check text-g2-gold text-4xl"></i>
              </div>
            </div>

            {/* Message */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Registration Received!
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Thank you for registering. Your request for access is now pending approval.
            </p>

            {/* Info Card */}
            <div className="border border-white/10 rounded-2xl p-8 bg-g2-darker/30 text-left mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <i className="fas fa-clock text-g2-gold"></i>
                What Happens Next?
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <i className="fas fa-envelope text-g2-gold mt-1"></i>
                  <span>You will receive a confirmation email shortly at the address you provided</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-user-check text-g2-gold mt-1"></i>
                  <span>Our team will review your application within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-paper-plane text-g2-gold mt-1"></i>
                  <span>Once approved, you&apos;ll receive an email notification with login instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-download text-g2-gold mt-1"></i>
                  <span>After approval, you can access and download all available white papers</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-g2-gold text-g2-darker px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
              >
                Return to Homepage
              </Link>
              <Link
                href="/perspectives"
                className="inline-block border border-g2-gold text-g2-gold px-8 py-3 rounded-lg hover:bg-g2-gold hover:text-g2-darker transition-all font-semibold"
              >
                Read Our Blog
              </Link>
            </div>

            {/* Contact Note */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                Questions about your registration?{' '}
                <Link href="/contact" className="text-g2-gold hover:text-white transition-colors">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
