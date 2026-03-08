import { useEffect } from 'react';
import { Shield, Lock, UserCheck, FileText } from 'lucide-react';

export function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-bit-lavender/30 mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-bit-lavender" />
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">
                Your Privacy Matters
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 max-w-3xl mx-auto leading-relaxed">
              Bit by Bit Coding is committed to respecting your privacy and protecting the personal information entrusted to us by our community.
            </p>
          </div>

          {/* Key Points Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 border border-white/60 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bit-lavender to-bit-red flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-bit-dark">What We Collect</h3>
              <p className="text-sm text-bit-dark/60">
                Information you provide (registration, donations), limited automatic data (analytics), and info from service providers.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/60 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bit-turquoise to-bit-green flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-bit-dark">How We Use It</h3>
              <p className="text-sm text-bit-dark/60">
                To operate programs, communicate updates, fundraise, comply with law, and keep our community safe.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/60 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bit-red to-bit-lavender flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-bit-dark">Your Control</h3>
              <p className="text-sm text-bit-dark/60">
                Opt out of marketing emails and texts anytime. Reply STOP to cancel texts. Contact us for access or deletion requests.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/60 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bit-green to-bit-turquoise flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-bit-dark">We Don't Sell Data</h3>
              <p className="text-sm text-bit-dark/60">
                We never sell personal information. We share only with trusted service providers and as required by law.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-white/60 shadow-xl shadow-bit-lavender/10 bg-white/40">
            <div className="prose prose-lg max-w-none">
              <p className="text-bit-dark/80 leading-relaxed mb-6">
                <strong>Owner:</strong> Hongpeng Wei
              </p>

              <p className="text-bit-dark/80 leading-relaxed mb-8">
                Bit by Bit Coding ("Bit by Bit Coding," "BbB," "we," "our," "the organisation," or "us") is committed to respecting your privacy and protecting the personal information entrusted to us by students, parents/guardians, educators, volunteers, donors, alumni, and community members. This Privacy Policy explains what personal information we collect, how we use and share it, the choices you have, and how to contact us with questions. It also includes an important <strong>Telephone Consumer Protection Act (TCPA) & Mobile Messaging Notice</strong> that governs any SMS/text communications you elect to receive from BbB.
              </p>

              <div className="bg-bit-lavender/5 border-l-4 border-bit-lavender rounded-r-xl p-6 mb-8">
                <p className="text-bit-dark/80 leading-relaxed mb-4">
                  💡 <strong>Quick Summary:</strong>
                </p>
                <ul className="space-y-2 text-bit-dark/70 text-sm">
                  <li>We collect information you provide (for example when you register for a workshop, donate, volunteer, or join our Community Portal), limited information collected automatically (such as device data and analytics), and information we receive from service providers that help us run our programs.</li>
                  <li>We use the data to operate and improve our educational programs and community services, communicate with you, fundraise, comply with law, and keep our community safe.</li>
                  <li>You control many of the ways we communicate with you, including opting in or out of marketing emails and text messages at any time (reply STOP to cancel texts).</li>
                </ul>
              </div>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Scope of the Policy</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                This Privacy Policy applies to the following BbB-operated websites and online services (collectively, the "Sites"):
              </p>
              <ul className="space-y-2 text-bit-dark/70 mb-6">
                <li><strong>Main website:</strong> https://bitbybitcoding.github.io</li>
                <li><strong>BbB Code Along</strong></li>
                <li><strong>BbB Community Portal</strong></li>
              </ul>
              <p className="text-bit-dark/80 leading-relaxed mb-8">
                Unless we say otherwise, this Privacy Policy does <strong>not</strong> cover offline data practices (for example, paper sign‑in sheets at in‑person events) except where those data are later entered into our digital systems and thereby become subject to this Policy.
              </p>
              <p className="text-bit-dark/80 leading-relaxed mb-8">
                By accessing or using any Site that links to this Privacy Policy, you acknowledge that you have read and understand its terms. This Privacy Policy is <strong>not a contract</strong> and does not create legal rights beyond those required by applicable law; however, it describes our good‑faith practices and your available choices.
              </p>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 1: Personal Information We Collect</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-6">
                We use the term <strong>"Personal Information"</strong> (sometimes "PI") to mean information that identifies, relates to, describes, or is reasonably capable of being associated with an identifiable individual. The categories we collect depend on how you interact with us (student, parent/guardian, educator, volunteer, donor, etc.).
              </p>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">1.1 Information You Provide Directly</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                We (or our service providers acting on our behalf) may collect:
              </p>
              <ul className="space-y-2 text-bit-dark/70 mb-6 list-disc pl-6">
                <li>Name (first, last, preferred name)</li>
                <li>Date of birth / age range / school grade level</li>
                <li>Parent or legal guardian name(s) (for minors)</li>
                <li>Email address(es)</li>
                <li>Telephone and/or mobile phone number (including SMS opt-in status)</li>
                <li>Mailing address / shipping address / region</li>
                <li>Program registration details (event selections, waitlists, dietary or accessibility notes you choose to provide)</li>
                <li>Demographic information you choose to share to help us measure equity (e.g., race/ethnicity, gender identity, pronouns) — always optional</li>
                <li>Donation and fundraising-related information that you provide (pledge amounts, dedication info; payment card data is processed directly by our payment processor and not stored by BbB)</li>
                <li>Account credentials for certain portals (username, hashed password or SSO token — we do not see your raw password if SSO is used)</li>
                <li>Photos, videos, written submissions, code projects, survey responses, and other content you upload or submit through our programs</li>
                <li>Communication preferences (email, SMS/text, phone, postal mail)</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">1.2 Information Collected Automatically</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                When you interact with our Sites, we (and third‑party analytics providers acting for us) may automatically collect limited <strong>Usage Information</strong>, such as:
              </p>
              <ul className="space-y-2 text-bit-dark/70 mb-6 list-disc pl-6">
                <li>Browser type and settings</li>
                <li>Device type, operating system, and Device Identifier (e.g., IP address; in some cases, mobile advertising ID)</li>
                <li>Referring/exit pages and Site navigation paths</li>
                <li>Date/time stamps and pages viewed</li>
                <li>General location derived from IP address (city/region level; not precise GPS)</li>
              </ul>
              <p className="text-bit-dark/80 leading-relaxed mb-8">
                We currently use <strong>Google Analytics</strong> (standard implementation) to help us understand aggregate Site usage and improve content. Google Analytics uses cookies and similar technologies.
              </p>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">1.3 Information From Other Sources</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                We may receive Personal Information about you from:
              </p>
              <ul className="space-y-2 text-bit-dark/70 mb-6 list-disc pl-6">
                <li>Event registration partners or learning management tools you use to sign up for BbB programs</li>
                <li>Payment / donation processors (transaction confirmation, donation amount, limited billing details)</li>
                <li>Email / SMS communications platforms that capture your communication preferences or engagement data (opens, clicks, delivery status)</li>
                <li>Social media platforms when you interact with our official accounts or use social log‑in (subject to your platform settings)</li>
                <li>Publicly available sources (e.g., school or district websites listing educators who coordinate BbB programming)</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">1.4 Cookies, Pixels and Similar Technologies</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                We and our service providers use a mix of first‑party and third‑party technologies to run the Sites, keep you logged in, remember preferences, measure traffic, and (where enabled) help us understand which content is most useful. These may include:
              </p>
              <ul className="space-y-3 text-bit-dark/70 mb-8 list-disc pl-6">
                <li><strong>Cookies:</strong> Small text files stored on your browser that enable core functionality (e.g., session management) and analytics. You can usually refuse or remove cookies through your browser settings; some Site features may not work as intended without them.</li>
                <li><strong>Tracking pixels / web beacons:</strong> Small code snippets that load when a page or email opens; used to measure engagement or campaign effectiveness.</li>
                <li><strong>Local storage & similar:</strong> Other local browser storage mechanisms used to remember settings.</li>
                <li><strong>Mobile identifiers / SDKs:</strong> Limited at this time; if we add mobile apps, we will update this section.</li>
                <li><strong>Do Not Track:</strong> Our Sites currently do not respond to browser "Do Not Track" signals. You can use the controls described above to manage cookies and communications.</li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 2: How we Use Personal Information</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                We use Personal Information for the following purposes (depending on your relationship with us):
              </p>
              <ul className="space-y-3 text-bit-dark/70 mb-8 list-disc pl-6">
                <li><strong>Program delivery:</strong> Register you or your child for BbB workshops, camps, events, and online programs; manage waitlists; verify eligibility; and communicate logistical details.</li>
                <li><strong>Education content & community engagement:</strong> Enable access to learning modules, project submissions, collaborative forums, alumni networks, and mentorship features.</li>
                <li><strong>Parent/guardian communications:</strong> Provide required notices, consent requests, program updates, and safety information for minors enrolled in BbB activities.</li>
                <li><strong>Donor & supporter relations:</strong> Process and acknowledge donations; send stewardship updates; invite participation in fundraising campaigns (email, SMS, or other channels).</li>
                <li><strong>Marketing & outreach (opt-in):</strong> Send newsletters, program announcements, event invitations, or fundraising appeals you elect to receive.</li>
                <li><strong>Surveys & impact measurement:</strong> Solicit feedback to evaluate and improve our educational and community impact; compile anonymized or aggregated statistics for grant reporting and mission advancement.</li>
                <li><strong>Site operations & security:</strong> Diagnose technical issues, detect fraud or abuse, maintain platform integrity, and secure accounts.</li>
                <li><strong>Legal & compliance:</strong> Meet obligations under applicable laws (e.g., tax, child privacy, data protection), respond to lawful requests, enforce our Terms, and protect the rights, safety, and property of BbB, our participants, and the public.</li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 3: How We Share Personal Information</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-6">
                We do <strong>not</strong> sell Personal Information. We share Personal Information only as described below:
              </p>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">3.1 Service providers (processors)</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-6">
                We work with trusted vendors who perform services on our behalf — for example: website hosting, registration and ticketing, learning management systems, payment processing, email & SMS delivery, analytics, customer relationship management, cloud storage, and IT/security support. These service providers are contractually required to safeguard Personal Information and use it only to provide the contracted services.
              </p>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">3.2 Program and community partners</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-6">
                From time to time we collaborate with schools, community organizations, sponsors, or corporate partners to deliver BbB programming. Where appropriate and permitted, we may share limited participant information (e.g., roster name, attendance status, demographic totals in aggregated form) needed to run a joint event, confirm attendance, or comply with grant reporting obligations. We do not share your personal contact information with partners for their independent marketing unless you explicitly agree.
              </p>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">3.3 Legal, safety & organizational transfers</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-8">
                We may disclose Personal Information when we believe in good faith that doing so is necessary to: (i) comply with applicable law or legal process; (ii) respond to lawful requests from public authorities; (iii) enforce our Terms, policies, or agreements; (iv) protect the rights, privacy, safety, or property of BbB, our participants, or others; or (v) in connection with an organizational transaction (e.g., merger, consolidation, dissolution, restructuring, or transfer of assets) consistent with our nonprofit mission.
              </p>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 4: Your Privacy Choices and Access Requests</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-6">
                You control many of the ways we use your Personal Information.
              </p>
              <ul className="space-y-4 text-bit-dark/70 mb-8">
                <li>
                  <strong className="text-bit-dark">Marketing email opt‑out:</strong> Click the unsubscribe link in any BbB marketing email or email us at info.bbbcoding@gmail.com with the subject line "Unsubscribe." We will process opt‑out requests as quickly as reasonably possible.
                </li>
                <li>
                  <strong className="text-bit-dark">SMS/text opt‑out:</strong> Reply STOP to any BbB text message. We honor SMS opt‑out requests promptly.
                </li>
                <li>
                  <strong className="text-bit-dark">Program communications:</strong> Certain operational or safety notices are required to participate (for example, last‑minute venue changes). If you opt out of a channel we may still send you essential program updates through another channel you've enabled.
                </li>
                <li>
                  <strong className="text-bit-dark">Access, correction & deletion requests:</strong> To request access to, correct, or delete Personal Information that we maintain about you or your child, please email info.bbbcoding@gmail.com. For security, we may need to verify your identity before fulfilling the request.
                </li>
                <li>
                  <strong className="text-bit-dark">Cookies & analytics controls:</strong> Most browsers allow you to refuse or delete cookies. Google also offers an opt‑out browser add‑on for Google Analytics. If you disable cookies, some Site features may not function.
                </li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 5: Links to Other Websites and Services</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-8">
                Our Sites may link to third‑party websites, apps, social platforms, or services that we do not control. A link does not imply endorsement. Those third parties' privacy practices (not ours) govern any data you provide to them. We encourage you to review the privacy notices of any site or service you visit.
              </p>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 6: Children's Privacy (COPPA & similar laws)</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-8">
                As stated in the Child Protection Policy.
              </p>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 7: Global Access and International Data Transfers</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-8">
                The Sites are operated in the Republic of Singapore and governed by Singaporean law. If you are located outside Singapore, please be aware that your information may be transferred to, processed, and stored in Singapore (or other locations where our service providers operate) where data protection laws may differ from those in your home jurisdiction.
              </p>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 8: TCPA & Mobile Messaging Terms (SMS/text programs)</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-6">
                This section applies when you provide a mobile telephone number and expressly opt in to receive SMS/text messages from BbB.
              </p>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">8.1 How to opt in</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                You may opt in to BbB text programs by:
              </p>
              <ul className="space-y-2 text-bit-dark/70 mb-6 list-disc pl-6">
                <li>Checking an SMS/text consent box (not pre‑checked) on a BbB registration, donation, or sign‑up form and submitting your mobile number</li>
                <li>Texting a published BbB keyword to a BbB short code or 10‑digit number</li>
                <li>Providing written or digital consent in another clearly disclosed manner</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">8.2 Program description & message types</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                By opting in, you agree to receive recurring SMS/text messages from BbB that may include:
              </p>
              <ul className="space-y-2 text-bit-dark/70 mb-6 list-disc pl-6">
                <li>Program registrations & reminders (workshops, camps, community events)</li>
                <li>Waitlist notices & schedule changes</li>
                <li>Learning prompts or links to educational content</li>
                <li>Volunteer & mentor opportunities</li>
                <li>Fundraising and donation appeals</li>
                <li>Impact updates and community news</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-bit-dark mt-8 mb-3">8.6 Opt‑out instructions (stop texts anytime)</h3>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                You can cancel SMS/text messages from BbB at any time:
              </p>
              <ul className="space-y-2 text-bit-dark/70 mb-8 list-disc pl-6">
                <li>Reply <strong>STOP</strong> to any BbB text</li>
                <li>Reply with any of the following recognized keywords: QUIT, END, CANCEL, UNSUBSCRIBE</li>
                <li>Email info.bbbcoding@gmail.com with your mobile number and request to opt out</li>
                <li>Update your communication preferences in your BbB account (where available)</li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 9: Data Security and Retention</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-8">
                We use administrative, technical, and physical safeguards designed to protect Personal Information against loss, misuse, unauthorized access, disclosure, alteration, and destruction. No data transmission or storage system can be guaranteed 100% secure. Please use strong passwords and safeguard account credentials.
              </p>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 10: Changes to This Policy</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-8">
                We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. We will post the updated version on the Sites and revise the "Last updated" date. In some cases, we may provide additional notice or request renewed consent, as required by law.
              </p>

              <h2 className="text-2xl font-display font-bold text-bit-dark mt-12 mb-4">Section 11: Contact Us</h2>
              <p className="text-bit-dark/80 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <p className="text-bit-dark/80 leading-relaxed">
                <strong>Email (all matters):</strong> <a href="mailto:info.bbbcoding@gmail.com" className="text-bit-lavender hover:text-bit-red transition-colors">info.bbbcoding@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-bit-dark/50 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Bit by Bit Coding.</p>
        <p>Democratising coding education, bit by bit.</p>
      </footer>
    </div>
  );
}
