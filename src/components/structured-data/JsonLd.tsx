import type { Thing, WithContext } from 'schema-dts';

interface JsonLdProps {
  data: WithContext<Thing>;
}

/**
 * JSON-LD Structured Data Component
 * 
 * Renders Schema.org structured data in JSON-LD format.
 * This is the primary way to communicate entity relationships
 * and semantic information to search engines and AI agents.
 * 
 * @param data - Schema.org structured data object with @context
 * 
 * @example
 * ```tsx
 * <JsonLd data={{
 *   "@context": "https://schema.org",
 *   "@type": "Organization",
 *   name: "G2 Middle East",
 *   url: "https://www.g2middleeast.com"
 * }} />
 * ```
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}
