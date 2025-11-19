import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - G2 Middle East & Africa',
  description: 'Terms of Service for G2 Middle East & Africa. Review our terms and conditions for using our website and services.',
  openGraph: {
    title: 'Terms of Service - G2 Middle East & Africa',
    description: 'Terms and conditions governing the use of our services.',
    url: 'https://g2middleeast.com/terms-of-service',
    type: 'website',
  },
}


export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-g2-darker">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-g2-dark/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-g2-gold transition-colors">
              G2 MIDDLE EAST
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <i className="fas fa-arrow-left"></i> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <span className="text-g2-gold text-xs font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-5xl font-serif font-bold text-white mb-6 tracking-wide">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: January 15, 2025
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-g2-dark/60 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-serif font-bold text-white mb-6">Table of Contents</h2>
          <nav className="space-y-3">
            <a href="#acceptance" className="block text-g2-gold hover:text-white transition-colors">1. Acceptance of Terms</a>
            <a href="#eligibility" className="block text-g2-gold hover:text-white transition-colors">2. Eligibility and Account Registration</a>
            <a href="#use-license" className="block text-g2-gold hover:text-white transition-colors">3. Use License and Restrictions</a>
            <a href="#confidentiality" className="block text-g2-gold hover:text-white transition-colors">4. Confidentiality and Non-Disclosure</a>
            <a href="#intellectual-property" className="block text-g2-gold hover:text-white transition-colors">5. Intellectual Property Rights</a>
            <a href="#prohibited-conduct" className="block text-g2-gold hover:text-white transition-colors">6. Prohibited Conduct</a>
            <a href="#data-protection" className="block text-g2-gold hover:text-white transition-colors">7. Data Protection and Privacy</a>
            <a href="#termination" className="block text-g2-gold hover:text-white transition-colors">8. Termination</a>
            <a href="#disclaimers" className="block text-g2-gold hover:text-white transition-colors">9. Disclaimers and Limitations</a>
            <a href="#indemnification" className="block text-g2-gold hover:text-white transition-colors">10. Indemnification</a>
            <a href="#governing-law" className="block text-g2-gold hover:text-white transition-colors">11. Governing Law and Dispute Resolution</a>
            <a href="#amendments" className="block text-g2-gold hover:text-white transition-colors">12. Amendments</a>
            <a href="#contact" className="block text-g2-gold hover:text-white transition-colors">13. Contact Information</a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          
          {/* Section 1 */}
          <section id="acceptance">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">1.</span> Acceptance of Terms
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                By accessing or using the G2 Middle East Projects Portal (&quot;Portal&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service (&quot;Terms&quot;) and all applicable laws and regulations.
              </p>
              <p>
                If you do not agree with any part of these Terms, you must not access or use the Portal. Your continued use of the Portal constitutes acceptance of these Terms and any future modifications.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and G2 Middle East (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="eligibility">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">2.</span> Eligibility and Account Registration
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Eligibility Requirements</h3>
              <p>You must meet the following criteria to access the Portal:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Represent a legitimate business entity or governmental organization</li>
                <li>Have a legitimate business purpose for accessing confidential project information</li>
                <li>Be legally authorized to enter into binding contracts</li>
                <li>Not be located in a jurisdiction where access would be illegal</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Account Registration</h3>
              <p>
                Access to the Portal requires registration and approval. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your registration information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Account Approval</h3>
              <p>
                Account registration is subject to approval by G2 Middle East. We reserve the right to reject any registration request or revoke access at our sole discretion without providing a reason.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="use-license">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">3.</span> Use License and Restrictions
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Limited License</h3>
              <p>
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and view the Portal content solely for your internal business evaluation purposes.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Restrictions</h3>
              <p>You may NOT:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copy, reproduce, download, or distribute Portal content</li>
                <li>Share your account credentials with any third party</li>
                <li>Use automated systems (bots, scrapers, etc.) to access the Portal</li>
                <li>Reverse engineer, decompile, or disassemble any Portal technology</li>
                <li>Remove or modify any copyright, trademark, or proprietary notices</li>
                <li>Create derivative works based on Portal content</li>
                <li>Use the Portal for any commercial purpose without written permission</li>
                <li>Frame or mirror any Portal content on other websites</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="confidentiality">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">4.</span> Confidentiality and Non-Disclosure
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Confidential Information</h3>
              <p>
                All content, materials, case studies, project information, client names, methodologies, strategies, and any other information accessed through the Portal (&quot;Confidential Information&quot;) is proprietary and confidential.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Non-Disclosure Obligations</h3>
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintain the confidentiality of all Confidential Information</li>
                <li>Not disclose Confidential Information to any third party</li>
                <li>Use Confidential Information solely for evaluation purposes</li>
                <li>Implement reasonable security measures to protect Confidential Information</li>
                <li>Limit access to Confidential Information to authorized personnel only</li>
                <li>Return or destroy all Confidential Information upon request or account termination</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Breach Consequences</h3>
              <p>
                Any unauthorized disclosure or use of Confidential Information may result in immediate account termination and legal action, including claims for damages and injunctive relief.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="intellectual-property">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">5.</span> Intellectual Property Rights
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 Ownership</h3>
              <p>
                All intellectual property rights in the Portal and its content, including but not limited to copyrights, trademarks, trade secrets, patents, and proprietary methodologies, are owned by G2 Middle East or our licensors.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Trademarks</h3>
              <p>
                &quot;G2 Middle East,&quot; our logo, and other marks are trademarks of G2 Middle East. You may not use these marks without our prior written consent.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.3 No Transfer of Rights</h3>
              <p>
                These Terms do not grant you any ownership rights or license to our intellectual property except as explicitly stated in the Use License section.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="prohibited-conduct">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">6.</span> Prohibited Conduct
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>When using the Portal, you must NOT:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable local, national, or international law</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to Portal systems</li>
                <li>Interfere with the proper functioning of the Portal</li>
                <li>Impersonate any person or entity</li>
                <li>Collect personal information about other users</li>
                <li>Use the Portal for any fraudulent or illegal purpose</li>
                <li>Engage in any activity that could damage our reputation</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section id="data-protection">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">7.</span> Data Protection and Privacy
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.1 Privacy Policy</h3>
              <p>
                Our collection, use, and protection of your personal data is governed by our <a href="/privacy-policy" className="text-g2-gold hover:text-white underline">Privacy Policy</a>, which is incorporated into these Terms by reference.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.2 GCC Compliance</h3>
              <p>
                We comply with applicable data protection laws in the GCC region, including UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.3 Data Security</h3>
              <p>
                While we implement reasonable security measures, you acknowledge that no system is completely secure. You are responsible for maintaining the security of your account credentials.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="termination">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">8.</span> Termination
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.1 Termination by You</h3>
              <p>
                You may terminate your account at any time by contacting us at <a href="mailto:contact@g2middleeast.com" className="text-g2-gold hover:text-white underline">contact@g2middleeast.com</a>.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.2 Termination by Us</h3>
              <p>
                We reserve the right to suspend or terminate your account immediately, without prior notice, for any reason, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violation of these Terms</li>
                <li>Breach of confidentiality obligations</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees (if applicable)</li>
                <li>Prolonged inactivity</li>
                <li>At our sole discretion</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.3 Effect of Termination</h3>
              <p>
                Upon termination, your access rights will immediately cease, and you must destroy all copies of Confidential Information in your possession. Sections regarding confidentiality, intellectual property, limitations of liability, and dispute resolution will survive termination.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="disclaimers">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">9.</span> Disclaimers and Limitations of Liability
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.1 &quot;AS IS&quot; Basis</h3>
              <p>
                THE PORTAL AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.2 No Guarantee</h3>
              <p>
                We do not warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The Portal will be uninterrupted, secure, or error-free</li>
                <li>The content will be accurate, complete, or current</li>
                <li>Defects will be corrected</li>
                <li>The Portal is free from viruses or harmful components</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.3 Limitation of Liability</h3>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, G2 MIDDLE EAST SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your access to or use of (or inability to use) the Portal</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of the Portal</li>
                <li>Any bugs, viruses, or harmful code transmitted through the Portal</li>
                <li>Any errors or omissions in content</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.4 Cap on Liability</h3>
              <p>
                Our total liability to you for any claims arising from your use of the Portal shall not exceed the amount you paid us (if any) in the twelve (12) months preceding the claim, or AED 1,000, whichever is greater.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="indemnification">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">10.</span> Indemnification
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                You agree to indemnify, defend, and hold harmless G2 Middle East, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including attorney&apos;s fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use of or access to the Portal</li>
                <li>Your violation of these Terms</li>
                <li>Your breach of confidentiality obligations</li>
                <li>Your violation of any third-party rights</li>
                <li>Your violation of any applicable laws or regulations</li>
              </ul>
            </div>
          </section>

          {/* Section 11 */}
          <section id="governing-law">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">11.</span> Governing Law and Dispute Resolution
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.1 Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.2 Dispute Resolution</h3>
              <p>
                Any dispute arising out of or relating to these Terms shall be resolved through:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Negotiation:</strong> Good faith negotiations between the parties for 30 days</li>
                <li><strong>Mediation:</strong> If negotiation fails, mediation in Abu Dhabi, UAE</li>
                <li><strong>Arbitration:</strong> If mediation fails, binding arbitration under the rules of the Abu Dhabi Commercial Conciliation and Arbitration Centre (ADCCAC), conducted in English in Abu Dhabi, UAE</li>
              </ol>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.3 Jurisdiction</h3>
              <p>
                For matters not subject to arbitration, you consent to the exclusive jurisdiction of the courts located in Abu Dhabi, United Arab Emirates.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="amendments">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">12.</span> Amendments and Modifications
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Portal. Your continued use of the Portal after any modifications constitutes acceptance of the updated Terms.
              </p>
              <p>
                Material changes will be communicated via email to your registered email address. You are responsible for reviewing these Terms periodically.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section id="contact">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">13.</span> Contact Information
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-g2-dark/60 border border-white/10 rounded-xl p-6 space-y-3">
                <p><strong className="text-white">G2 Middle East</strong></p>
                <p>Email: <a href="mailto:legal@g2middleeast.com" className="text-g2-gold hover:text-white underline">legal@g2middleeast.com</a></p>
                <p>General Inquiries: <a href="mailto:contact@g2middleeast.com" className="text-g2-gold hover:text-white underline">contact@g2middleeast.com</a></p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 bg-g2-dark/60 border border-white/10 rounded-2xl text-center">
          <p className="text-gray-300 mb-6">
            By registering for the Projects Portal, you acknowledge that you have read and agree to these Terms of Service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/projects/register" className="px-8 py-3 bg-g2-gold text-g2-darker font-semibold rounded-lg hover:bg-opacity-90 transition-all">
              Register Now
            </a>
            <a href="/privacy-policy" className="px-8 py-3 bg-g2-darker border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all">
              View Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
