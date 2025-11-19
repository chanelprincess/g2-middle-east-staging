import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'White Papers - Exclusive Strategic Insights | G2 Middle East & Africa',
  description: 'Access exclusive strategic insights and research for G2 Middle East community',
  openGraph: {
    title: 'White Papers | G2 Middle East & Africa',
    description: 'Access exclusive strategic insights and research for G2 Middle East community',
    url: 'https://g2middleeast.com/whitepapers',
    type: 'website',
  },
}

interface Whitepaper {
  id: number
  title: string
  description: string
  file_size: number
  download_count: number
}

// TODO: Replace with Supabase query or API call
async function getWhitepapers(): Promise<Whitepaper[]> {
  // Placeholder - will be replaced with actual data fetching
  return []
}

// TODO: Replace with actual auth check
async function getUser(): Promise<{ full_name: string; username: string } | null> {
  // Placeholder - will be replaced with actual auth
  return null
}

export default async function WhitepapersPage() {
  const whitepapers = await getWhitepapers()
  const user = await getUser()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                  White Papers
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Exclusive strategic insights and research for G2 Middle East community
                </p>
              </div>
              {user && (
                <div className="hidden md:block">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Logged in as</p>
                    <p className="text-lg font-semibold text-g2-gold">{user.full_name}</p>
                    <a href="/api/auth/logout" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {whitepapers.length === 0 ? (
              <div className="text-center py-16">
                <i className="fas fa-file-pdf text-6xl text-gray-700 mb-6"></i>
                <h3 className="text-2xl font-bold text-white mb-4">No White Papers Available</h3>
                <p className="text-gray-400">New content will be added soon. Check back later.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {whitepapers.map((paper) => (
                  <div key={paper.id} className="border border-white/10 rounded-2xl p-8 bg-g2-darker/30 hover:border-g2-gold/30 transition-all duration-300">
                    <div className="mb-6">
                      <span className="text-g2-gold text-xs font-semibold uppercase tracking-wider">WHITE PAPER</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {paper.description}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <i className="fas fa-file-pdf"></i>
                        <span>PDF</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-download"></i>
                        <span>{paper.download_count} downloads</span>
                      </div>
                    </div>
                    
                    <a
                      href={`/api/whitepapers/download/${paper.id}`}
                      className="inline-flex items-center bg-g2-gold text-g2-darker px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                    >
                      <i className="fas fa-download mr-2"></i>
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-g2-darker border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Need More Insights?
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Explore our latest perspectives on brand strategy and market positioning
            </p>
            <Link href="/perspectives" className="inline-block border border-g2-gold text-g2-gold px-8 py-3 rounded-lg hover:bg-g2-gold hover:text-g2-darker transition-all font-semibold">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
