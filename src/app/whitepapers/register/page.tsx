import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Register for Access - White Papers | G2 Middle East & Africa',
  description: 'Complete the form below to request access to our exclusive white papers',
  openGraph: {
    title: 'Register for Access - White Papers | G2 Middle East & Africa',
    description: 'Complete the form below to request access to our exclusive white papers',
    url: 'https://g2middleeast.com/whitepapers/register',
    type: 'website',
  },
}

export default function WhitepapersRegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Register for Access
              </h1>
              <p className="text-gray-400">
                Complete the form below to request access to our exclusive white papers
              </p>
            </div>

            {/* Registration Form Card */}
            <div className="border border-white/10 rounded-2xl p-8 bg-g2-darker/30">
              <form action="/api/auth/register" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-g2-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-g2-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company / Organisation <span className="text-g2-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="job_title" className="block text-sm font-medium text-gray-300 mb-2">
                      Job Title <span className="text-g2-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="job_title"
                      name="job_title"
                      required
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                      placeholder="Chief Marketing Officer"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                      Username <span className="text-g2-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      minLength={3}
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                      placeholder="johnsmith"
                    />
                    <p className="text-xs text-gray-500 mt-1">Minimum 3 characters</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      Password <span className="text-g2-gold">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      minLength={8}
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                      placeholder="••••••••"
                    />
                    <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                  </div>

                  <div>
                    <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password <span className="text-g2-gold">*</span>
                    </label>
                    <input
                      type="password"
                      id="confirm_password"
                      name="confirm_password"
                      required
                      minLength={8}
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-g2-gold text-g2-darker px-6 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg"
                  >
                    Submit Registration
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <Link href="/whitepapers/login" className="text-g2-gold hover:text-white transition-colors">
                    Login here
                  </Link>
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-8 border border-g2-gold/30 rounded-lg p-6 bg-g2-gold/5">
              <div className="flex items-start gap-4">
                <i className="fas fa-info-circle text-g2-gold text-xl mt-1"></i>
                <div>
                  <h3 className="font-semibold text-white mb-2">What happens next?</h3>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Your registration will be submitted for approval</li>
                    <li>• Our team will review your application within 24-48 hours</li>
                    <li>• You&apos;ll receive an email notification once approved</li>
                    <li>• After approval, you can login and access all white papers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
