import { NextRequest, NextResponse } from 'next/server';

/**
 * Intelligence API - Briefings Search
 * 
 * Endpoint for AI agents to search G2 Middle East strategic briefings.
 * 
 * Query Parameters:
 * - topic: Filter briefings by topic/keyword (optional)
 * 
 * Returns: JSON array of briefings (token-efficient format)
 * 
 * @example
 * GET /api/briefings?topic=digital+sovereignty
 */

interface Briefing {
  id: string;
  title: string;
  summary: string;
  topic: string[];
  date: string;
  url: string;
}

// Mock data - Will be replaced with Vector DB query in Phase 5
const MOCK_BRIEFINGS: Briefing[] = [
  {
    id: 'digital-sovereignty-gcc',
    title: 'Digital Sovereignty Frameworks in the GCC',
    summary:
      'Comprehensive analysis of data localization requirements, cloud service regulations, and digital sovereignty policies across Gulf Cooperation Council states. Examines UAE, Saudi Arabia, and Qatar frameworks for technology governance.',
    topic: ['digital sovereignty', 'data localization', 'gcc', 'regulation'],
    date: '2025-01',
    url: 'https://www.g2middleeast.com/briefing/digital-sovereignty-gcc',
  },
  {
    id: 'cultural-intelligence-market-entry',
    title: 'Cultural Intelligence for Middle East Market Entry',
    summary:
      'Strategic framework for understanding cultural dynamics in Middle Eastern business environments. Covers relationship building, decision-making processes, and stakeholder engagement strategies essential for successful market entry.',
    topic: ['cultural intelligence', 'market entry', 'stakeholder engagement'],
    date: '2025-01',
    url: 'https://www.g2middleeast.com/briefing/cultural-intelligence-market-entry',
  },
  {
    id: 'government-relations-saudi-vision',
    title: 'Government Relations Strategy: Saudi Vision 2030',
    summary:
      'Analysis of Saudi Vision 2030 policy initiatives and strategic guidance for organizations seeking to engage with Saudi government entities. Examines regulatory environment, priority sectors, and stakeholder mapping.',
    topic: ['government relations', 'saudi arabia', 'vision 2030', 'policy'],
    date: '2024-12',
    url: 'https://www.g2middleeast.com/briefing/government-relations-saudi-vision',
  },
  {
    id: 'high-stakes-negotiation-mena',
    title: 'High-Stakes Negotiation in MENA Markets',
    summary:
      'Strategic counsel for complex negotiations in Middle East and North Africa region. Covers cultural protocols, decision-maker identification, timing strategies, and relationship-building approaches for sensitive engagements.',
    topic: ['negotiation', 'high-stakes', 'mena', 'strategy'],
    date: '2024-11',
    url: 'https://www.g2middleeast.com/briefing/high-stakes-negotiation-mena',
  },
  {
    id: 'uae-regulatory-landscape',
    title: 'UAE Regulatory Landscape 2025',
    summary:
      'Overview of United Arab Emirates regulatory environment including free zone regulations, mainland company structures, licensing requirements, and compliance frameworks. Essential reference for UAE market operations.',
    topic: ['uae', 'regulation', 'compliance', 'licensing'],
    date: '2024-12',
    url: 'https://www.g2middleeast.com/briefing/uae-regulatory-landscape',
  },
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const topicQuery = searchParams.get('topic')?.toLowerCase();

    // Filter briefings by topic if query provided
    let results = MOCK_BRIEFINGS;

    if (topicQuery) {
      results = MOCK_BRIEFINGS.filter((briefing) =>
        briefing.topic.some((t) => t.toLowerCase().includes(topicQuery))
      );
    }

    // Return token-efficient JSON (no HTML, minimal structure)
    return NextResponse.json({
      count: results.length,
      briefings: results.map((b) => ({
        id: b.id,
        title: b.title,
        summary: b.summary,
        date: b.date,
        url: b.url,
        topics: b.topic,
      })),
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Enable CORS for AI agents
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
