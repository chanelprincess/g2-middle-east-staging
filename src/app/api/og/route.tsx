import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

/**
 * Dynamic Open Graph Image Generator
 * 
 * Generates professional social media cards on-the-fly.
 * 
 * Query Parameters:
 * - title: Article/page title
 * - subtitle: Optional subtitle or description
 * 
 * @example
 * /api/og?title=Digital+Sovereignty+in+the+GCC
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get title and subtitle from query params
    const title = searchParams.get('title') || 'G2 Middle East';
    const subtitle =
      searchParams.get('subtitle') || 'Strategic Advisory & Government Relations';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#0A0A0A',
            backgroundImage: 'linear-gradient(135deg, #0A0A0A 0%, #111111 100%)',
            padding: '80px',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          {/* G2 Logo/Brand Mark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#D4AF37',
                letterSpacing: '-0.02em',
              }}
            >
              G2 MIDDLE EAST
            </div>
          </div>

          {/* Main Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <h1
              style={{
                fontSize: title.length > 50 ? '64px' : '80px',
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.1,
                margin: 0,
                marginBottom: '20px',
                maxWidth: '90%',
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  fontSize: '32px',
                  color: '#9CA3AF',
                  lineHeight: 1.4,
                  margin: 0,
                  maxWidth: '85%',
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Bottom Bar with URL */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '2px solid #D4AF37',
              paddingTop: '30px',
            }}
          >
            <div
              style={{
                fontSize: '28px',
                color: '#6B7280',
                fontWeight: '500',
              }}
            >
              www.g2middleeast.com
            </div>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                fontSize: '24px',
                color: '#9CA3AF',
              }}
            >
              <span>Strategic Advisory</span>
              <span style={{ color: '#D4AF37' }}>•</span>
              <span>Government Relations</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('OG Image generation error:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
