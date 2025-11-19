import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login - White Papers | G2 Middle East & Africa',
  description: 'Access exclusive strategic insights and research',
  openGraph: {
    title: 'Login - White Papers | G2 Middle East & Africa',
    description: 'Access exclusive strategic insights and research',
    url: 'https://g2middleeast.com/whitepapers/login',
    type: 'website',
  },
}

export default function WhitepapersLoginPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                White Papers
              </h1>
              <p className="text-gray-400">
                Access exclusive strategic insights and research
              </p>
            </div>

            {/* Login Form Card */}
            <div className="border border-white/10 rounded-2xl p-8 bg-g2-darker/30">
              <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
              
              <form action="/api/auth/login" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                    Username or Email
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                    placeholder="Enter your username or email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-g2-gold text-g2-darker px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                >
                  Login
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400 mb-4">Don&apos;t have access yet?</p>
                <Link
                  href="/whitepapers/register"
                  className="inline-block border border-g2-gold text-g2-gold px-6 py-3 rounded-lg hover:bg-g2-gold hover:text-g2-darker transition-all font-semibold"
                >
                  Register for Access
                </Link>
              </div>
            </div>

            {/* Info Message */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Access is subject to approval. You will be notified via email once your account is activated.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
