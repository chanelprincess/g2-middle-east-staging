import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - G2 Middle East & Africa',
  description: 'Privacy Policy for G2 Middle East & Africa. Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy - G2 Middle East & Africa',
    description: 'Our commitment to protecting your privacy and personal information.',
    url: 'https://g2middleeast.com/privacy-policy',
    type: 'website',
  },
}


export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: January 15, 2025
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-g2-dark/60 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-serif font-bold text-white mb-6">Table of Contents</h2>
          <nav className="space-y-3">
            <a href="#introduction" className="block text-g2-gold hover:text-white transition-colors">1. Introduction</a>
            <a href="#data-controller" className="block text-g2-gold hover:text-white transition-colors">2. Data Controller Information</a>
            <a href="#data-collection" className="block text-g2-gold hover:text-white transition-colors">3. Information We Collect</a>
            <a href="#how-we-use" className="block text-g2-gold hover:text-white transition-colors">4. How We Use Your Information</a>
            <a href="#legal-basis" className="block text-g2-gold hover:text-white transition-colors">5. Legal Basis for Processing</a>
            <a href="#data-sharing" className="block text-g2-gold hover:text-white transition-colors">6. Data Sharing and Disclosure</a>
            <a href="#data-security" className="block text-g2-gold hover:text-white transition-colors">7. Data Security</a>
            <a href="#data-retention" className="block text-g2-gold hover:text-white transition-colors">8. Data Retention</a>
            <a href="#your-rights" className="block text-g2-gold hover:text-white transition-colors">9. Your Rights</a>
            <a href="#cookies" className="block text-g2-gold hover:text-white transition-colors">10. Cookies and Tracking</a>
            <a href="#international-transfers" className="block text-g2-gold hover:text-white transition-colors">11. International Data Transfers</a>
            <a href="#children" className="block text-g2-gold hover:text-white transition-colors">12. Children&apos;s Privacy</a>
            <a href="#gcc-compliance" className="block text-g2-gold hover:text-white transition-colors">13. GCC-Specific Compliance</a>
            <a href="#changes" className="block text-g2-gold hover:text-white transition-colors">14. Changes to This Policy</a>
            <a href="#contact" className="block text-g2-gold hover:text-white transition-colors">15. Contact Us</a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          
          {/* Section 1 */}
          <section id="introduction">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">1.</span> Introduction
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                G2 Middle East (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access our Projects Portal and related services.
              </p>
              <p>
                By using our services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not access or use our services.
              </p>
              <p>
                This Privacy Policy complies with applicable data protection laws in the GCC region, including the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="data-controller">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">2.</span> Data Controller Information
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                G2 Middle East is the data controller responsible for your personal information.
              </p>
              <div className="bg-g2-dark/60 border border-white/10 rounded-xl p-6 space-y-3">
                <p><strong className="text-white">Contact Information:</strong></p>
                <p>Email: <a href="mailto:privacy@g2middleeast.com" className="text-g2-gold hover:text-white underline">privacy@g2middleeast.com</a></p>
                <p>Data Protection Officer: <a href="mailto:dpo@g2middleeast.com" className="text-g2-gold hover:text-white underline">dpo@g2middleeast.com</a></p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="data-collection">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">3.</span> Information We Collect
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Information You Provide</h3>
              <p>When you register for the Projects Portal, we collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Identity Information:</strong> Full name, email address</li>
                <li><strong>Professional Information:</strong> Company name, industry sector, country, job title</li>
                <li><strong>Contact Information:</strong> Phone number, business address</li>
                <li><strong>Account Information:</strong> Username, password (encrypted), security preferences</li>
                <li><strong>Communication Data:</strong> Your correspondence with us, feedback, survey responses</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Automatically Collected Information</h3>
              <p>When you access our Portal, we automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
                <li><strong>Usage Data:</strong> Pages viewed, time spent, navigation paths, access times</li>
                <li><strong>Authentication Logs:</strong> Login attempts, access history, security events</li>
                <li><strong>Performance Data:</strong> Error reports, system performance metrics</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.3 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies, web beacons, and similar technologies to enhance your experience. See Section 10 for detailed information.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="how-we-use">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">4.</span> How We Use Your Information
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>We use your personal information for the following purposes:</p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Service Provision</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Creating and managing your account</li>
                <li>Authenticating your identity and access</li>
                <li>Providing access to confidential project case studies</li>
                <li>Processing and responding to your inquiries</li>
                <li>Delivering personalized content based on your interests</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Security and Compliance</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Monitoring for security threats and unauthorized access</li>
                <li>Detecting and preventing fraud or illegal activities</li>
                <li>Enforcing our Terms of Service and confidentiality agreements</li>
                <li>Complying with legal obligations and regulatory requirements</li>
                <li>Maintaining audit trails for compliance purposes</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Communication</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sending account-related notifications (approval, updates, security alerts)</li>
                <li>Responding to your requests and support inquiries</li>
                <li>Providing updates about new projects and case studies (with consent)</li>
                <li>Conducting surveys to improve our services (optional)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.4 Analytics and Improvement</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Analyzing Portal usage patterns and user behavior</li>
                <li>Improving Portal functionality and user experience</li>
                <li>Developing new features and services</li>
                <li>Conducting internal research and analytics</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="legal-basis">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">5.</span> Legal Basis for Processing
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>We process your personal information based on the following legal grounds:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contractual Necessity:</strong> Processing necessary to provide services you&apos;ve requested</li>
                <li><strong>Consent:</strong> You have explicitly agreed to the processing (e.g., marketing communications)</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests (e.g., security, analytics)</li>
                <li><strong>Legal Obligation:</strong> Processing required to comply with applicable laws and regulations</li>
              </ul>
              <p>
                You have the right to withdraw consent at any time where we rely on consent as the legal basis.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="data-sharing">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">6.</span> Data Sharing and Disclosure
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 We Do NOT Sell Your Data</h3>
              <p>
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Sharing with Service Providers</h3>
              <p>
                We may share your information with trusted service providers who assist us with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cloud hosting and infrastructure (Cloudflare)</li>
                <li>Database management</li>
                <li>Email delivery services</li>
                <li>Analytics and performance monitoring</li>
                <li>Security and fraud prevention</li>
              </ul>
              <p>
                These service providers are contractually bound to protect your data and use it only for specified purposes.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.3 Legal Disclosures</h3>
              <p>
                We may disclose your information when required by law or to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Comply with legal processes, court orders, or government requests</li>
                <li>Enforce our Terms of Service</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or illegal activities</li>
                <li>Protect the rights and safety of our users and the public</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.4 Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, subject to the same privacy protections.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="data-security">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">7.</span> Data Security
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.1 Security Measures</h3>
              <p>
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit (HTTPS/TLS) and at rest</li>
                <li>Secure password hashing (SHA-256)</li>
                <li>Multi-factor authentication options</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and role-based permissions</li>
                <li>Activity logging and monitoring</li>
                <li>Account lockout after failed login attempts</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.2 Your Responsibility</h3>
              <p>
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>Using a strong, unique password</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Logging out after each session, especially on shared devices</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.3 Data Breach Notification</h3>
              <p>
                In the event of a data breach that may affect your rights, we will notify you and relevant authorities as required by applicable law, typically within 72 hours of discovery.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="data-retention">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">8.</span> Data Retention
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.1 Retention Periods</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Active Accounts:</strong> Retained for the duration of your account plus 2 years</li>
                <li><strong>Inactive Accounts:</strong> Deleted after 3 years of inactivity</li>
                <li><strong>Access Logs:</strong> Retained for 1 year for security and audit purposes</li>
                <li><strong>Communication Records:</strong> Retained for 5 years for legal compliance</li>
                <li><strong>NDA Obligations:</strong> Records maintained for the duration of confidentiality obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.2 Deletion Process</h3>
              <p>
                Upon retention period expiration or account deletion request, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Permanently delete your personal information from active systems</li>
                <li>Anonymize or aggregate data for analytical purposes</li>
                <li>Retain only information required for legal compliance</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section id="your-rights">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">9.</span> Your Rights
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Under applicable data protection laws, you have the following rights:
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.1 Right to Access</h3>
              <p>
                You can request a copy of the personal information we hold about you.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.2 Right to Rectification</h3>
              <p>
                You can request correction of inaccurate or incomplete information.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.3 Right to Erasure (&quot;Right to be Forgotten&quot;)</h3>
              <p>
                You can request deletion of your personal information, subject to legal retention requirements.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.4 Right to Restrict Processing</h3>
              <p>
                You can request limitation of how we process your information in certain circumstances.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.5 Right to Data Portability</h3>
              <p>
                You can request your data in a structured, machine-readable format.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.6 Right to Object</h3>
              <p>
                You can object to processing based on legitimate interests or for marketing purposes.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.7 Right to Withdraw Consent</h3>
              <p>
                Where processing is based on consent, you can withdraw it at any time.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.8 How to Exercise Your Rights</h3>
              <p>
                To exercise any of these rights, contact us at <a href="mailto:privacy@g2middleeast.com" className="text-g2-gold hover:text-white underline">privacy@g2middleeast.com</a>. We will respond within 30 days of receiving your request.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="cookies">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">10.</span> Cookies and Tracking Technologies
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.1 What Are Cookies?</h3>
              <p>
                Cookies are small text files stored on your device that help us provide and improve our services.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.2 Types of Cookies We Use</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for authentication and security (cannot be disabled)</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use the Portal</li>
                <li><strong>Security Cookies:</strong> Detect and prevent security threats</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.3 Cookie Duration</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain for up to 30 days (authentication) or 1 year (preferences)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">10.4 Managing Cookies</h3>
              <p>
                You can control cookies through your browser settings. However, disabling essential cookies may affect Portal functionality.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="international-transfers">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">11.</span> International Data Transfers
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Your information may be transferred to and processed in countries outside the GCC region, including the United States (Cloudflare infrastructure).
              </p>
              <p>
                When we transfer data internationally, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standard Contractual Clauses (SCCs) with service providers</li>
                <li>Data Processing Agreements compliant with GCC regulations</li>
                <li>Encryption and security measures during transit and storage</li>
                <li>Regular audits of data processing activities</li>
              </ul>
            </div>
          </section>

          {/* Section 12 */}
          <section id="children">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">12.</span> Children&apos;s Privacy
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
              <p>
                If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information promptly.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section id="gcc-compliance">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">13.</span> GCC-Specific Compliance
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                We comply with data protection regulations in all GCC countries:
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">13.1 United Arab Emirates</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Federal Law No. 45 of 2021 on Personal Data Protection</li>
                <li>UAE Data Office: <a href="https://u.ae/en/about-the-uae/digital-uae/data/data-protection" className="text-g2-gold hover:text-white underline" target="_blank">u.ae/data-protection</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">13.2 Saudi Arabia</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal Data Protection Law (PDPL)</li>
                <li>Saudi Data & AI Authority (SDAIA)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">13.3 Qatar</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Law No. 13 of 2016 on Personal Data Privacy Protection</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">13.4 Other GCC Countries</h3>
              <p>
                We also comply with data protection regulations in Kuwait, Bahrain, and Oman.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section id="changes">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">14.</span> Changes to This Privacy Policy
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
              </p>
              <p>
                Material changes will be communicated via:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email notification to your registered email address</li>
                <li>Prominent notice on the Portal</li>
                <li>Updated  &quot;Last Updated&quot; date at the top of this policy</li>
              </ul>
              <p>
                Your continued use of the Portal after changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section id="contact">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-g2-gold">15.</span> Contact Us
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                For questions, concerns, or requests regarding this Privacy Policy or your personal data:
              </p>
              <div className="bg-g2-dark/60 border border-white/10 rounded-xl p-6 space-y-3">
                <p><strong className="text-white">Privacy Contact:</strong></p>
                <p>Email: <a href="mailto:privacy@g2middleeast.com" className="text-g2-gold hover:text-white underline">privacy@g2middleeast.com</a></p>
                <p>Data Protection Officer: <a href="mailto:dpo@g2middleeast.com" className="text-g2-gold hover:text-white underline">dpo@g2middleeast.com</a></p>
                <p>General Inquiries: <a href="mailto:contact@g2middleeast.com" className="text-g2-gold hover:text-white underline">contact@g2middleeast.com</a></p>
              </div>
              <p className="mt-6 text-sm">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </div>
          </section>

        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 bg-g2-dark/60 border border-white/10 rounded-2xl text-center">
          <p className="text-gray-300 mb-6">
            By using our services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/projects/register" className="px-8 py-3 bg-g2-gold text-g2-darker font-semibold rounded-lg hover:bg-opacity-90 transition-all">
              Register for Access
            </a>
            <a href="/terms-of-service" className="px-8 py-3 bg-g2-darker border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all">
              View Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
