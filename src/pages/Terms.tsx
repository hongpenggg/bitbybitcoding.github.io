import { useEffect } from 'react';
import { FileText, Users, Shield, Camera, Database, Scale, AlertTriangle, BookOpen } from 'lucide-react';

const sections = [
  { icon: Users, label: 'Eligibility', color: 'from-bit-lavender to-violet-400' },
  { icon: BookOpen, label: 'Programme Conduct', color: 'from-bit-turquoise to-cyan-400' },
  { icon: AlertTriangle, label: 'Attendance', color: 'from-bit-red to-pink-400' },
  { icon: Shield, label: 'Safety', color: 'from-bit-green to-emerald-400' },
  { icon: Camera, label: 'Media', color: 'from-orange-400 to-yellow-400' },
  { icon: Database, label: 'Data Protection', color: 'from-bit-lavender to-bit-red' },
  { icon: Scale, label: 'Liability', color: 'from-bit-turquoise to-bit-lavender' },
  { icon: FileText, label: 'IP & Amendments', color: 'from-bit-red to-bit-lavender' },
];

export function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-6 shadow-sm">
              <FileText className="w-4 h-4 text-bit-lavender" />
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">
                Legal Documents
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These Terms govern participation in all Bit by Bit Coding programmes, workshops, events, and activities.
            </p>
            <p className="text-sm text-bit-dark/50 dark:text-gray-500 mt-4">Effective: March 2026 &nbsp;&bull;&nbsp; Applies to: Students, Parents/Guardians, and Participants</p>
          </div>

          {/* Quick Reference Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="glass rounded-2xl p-4 border border-white/60 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300">
                  <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-bold text-bit-dark dark:text-gray-300">{s.label}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/10 bg-white/40 dark:bg-gray-800/40">
            <div className="prose prose-lg max-w-none">

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-8">
                These Terms and Conditions ("Terms") govern participation in all programmes, workshops, events, and activities (collectively, "Programmes") organised by Bit by Bit Coding ("BbB", "we", "us", "our"). By registering for or participating in any BbB Programme, the participant and their parent or legal guardian (where the participant is under 18 years of age) agree to be bound by these Terms.
              </p>

              <div className="bg-bit-lavender/5 dark:bg-bit-lavender/10 border-l-4 border-bit-lavender rounded-r-xl p-6 mb-10">
                <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed">
                  BbB is a community ground-up recognised under the <strong>BAGUS Together</strong> initiative, supported by <strong>NVPC</strong>, <strong>Temasek Foundation</strong>, and <strong>Tote Board</strong>. These Terms should be read alongside BbB's <a href="/#/privacy" className="text-bit-lavender hover:text-bit-red transition-colors">Privacy Policy</a> and Code of Conduct.
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-lavender to-violet-400 flex items-center justify-center text-white text-sm font-bold shrink-0">1</span>
                Eligibility and Registration
              </h2>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">1.1 Eligibility</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB Programmes are open to youth aged 13 to 18 residing in Singapore, unless otherwise stated for a specific programme. Participation by persons outside this age range may be considered at BbB's discretion.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">1.2 Registration</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Registration must be completed via BbB's official registration form. A place in a Programme is only confirmed upon receipt of a completed registration form and, where applicable, any required consent documents. BbB reserves the right to refuse or cancel registration at its discretion.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">1.3 Parental or Guardian Consent</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">As BbB Programmes are designed for minors, a parent or legal guardian must complete the registration form on behalf of the participant. By submitting the form, the parent or guardian confirms that they have the legal authority to consent on the participant's behalf and that all information provided is accurate and complete.</p>

              {/* Section 2 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-turquoise to-cyan-400 flex items-center justify-center text-white text-sm font-bold shrink-0">2</span>
                Programme Conduct
              </h2>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">2.1 Code of Conduct</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">All participants are required to comply with BbB's Code of Conduct at all times during Programme activities, including online sessions and any associated communications.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">2.2 Disciplinary Action</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB reserves the right to take disciplinary action, including suspension or permanent removal from the Programme, in response to breaches of the Code of Conduct. BbB's decisions on disciplinary matters are final, subject to the appeals process described therein.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">2.3 Removal from Programme</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB reserves the right to remove any participant from a Programme at any time if the participant's continued presence poses a risk to the safety, wellbeing, or learning experience of others, or if the participant repeatedly or seriously violates these Terms or the Code of Conduct.</p>

              {/* Section 3 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-red to-pink-400 flex items-center justify-center text-white text-sm font-bold shrink-0">3</span>
                Attendance and Commitment
              </h2>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">3.1 Expected Attendance</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Participants are expected to attend all scheduled sessions of the Programme they have enrolled in. Consistent or unexplained absence may result in the participant's place being offered to another student on the waitlist.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">3.2 Absence Notification</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">If a participant is unable to attend a session, the parent or guardian should notify BbB as early as possible via our official communication channels. Repeated absences without notice may be treated as a light offence under the Code of Conduct.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">3.3 Punctuality</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Participants are expected to arrive on time for all sessions. Arriving more than 15 minutes late without prior notice may be recorded as a light offence under the Code of Conduct.</p>

              {/* Section 4 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-green to-emerald-400 flex items-center justify-center text-white text-sm font-bold shrink-0">4</span>
                Supervision and Safety
              </h2>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">4.1 Scope of Supervision</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB's duty of care and supervision of participants begins at the scheduled start time of each session and ends at the scheduled end time. BbB is not responsible for the safety or supervision of participants travelling to or from the venue.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">4.2 Arrival and Departure</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Parents and guardians are responsible for ensuring their child arrives at and departs from sessions safely. If a participant requires a specific arrangement for pickup, this must be communicated to BbB in advance.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">4.3 Emergency Situations</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">In the event of a medical emergency, our tutors and administrators will take reasonable steps to ensure the participant's safety, including contacting emergency services if necessary. By registering, parents and guardians authorise BbB to consent to emergency medical treatment on their child's behalf in circumstances where the parent or guardian cannot be reached in time.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">4.4 Medical and Health Disclosure</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Parents and guardians are required to disclose, at the time of registration, any known medical conditions, allergies, or special needs. BbB shall not be liable for any adverse outcomes arising from incomplete or inaccurate medical disclosures.</p>

              {/* Section 5 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-sm font-bold shrink-0">5</span>
                Programme Changes and Cancellations
              </h2>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB reserves the right to amend, reschedule, cancel, or discontinue any Programme or session at any time where reasonably necessary. As BbB Programmes are offered <strong>free of charge</strong>, no monetary refunds apply. In the event of a cancellation, BbB will endeavour to offer participants an alternative session or placement where possible.</p>

              {/* Section 6 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-sm font-bold shrink-0">6</span>
                Photography, Videography, and Media
              </h2>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">6.1 BbB Media</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB may take photographs and videos during Programme sessions for use in our social media, website, publications, and marketing materials. BbB will not publish clearly identifiable photographs of individual minors without the explicit consent of their parent or guardian.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">6.2 Parental Consent for Photography</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Parents and guardians will be asked to provide explicit consent for photography as part of the registration process.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">6.3 Venue and Partner Photography</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">From time to time, the venues or partner organisations hosting BbB sessions may also take photographs for their own marketing purposes. BbB will inform parents and guardians of this possibility where known in advance.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">6.4 Participant and Parent Media</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Participants and parents are welcome to take photographs for personal use during sessions. However, sharing photographs that include other participants — particularly other minors — on any public platform is strictly prohibited without the express consent of those participants' parents or guardians.</p>

              {/* Section 7 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-lavender to-bit-red flex items-center justify-center text-white text-sm font-bold shrink-0">7</span>
                Personal Data Protection
              </h2>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB collects, uses, and stores personal data in accordance with Singapore's <strong>Personal Data Protection Act 2012 (PDPA)</strong> and BbB's <a href="/#/privacy" className="text-bit-lavender hover:text-bit-red transition-colors">Privacy Policy</a>. We will not sell personal data. Parents and guardians may request access to, correction of, or deletion of personal data by contacting <a href="mailto:info.bbbcoding@gmail.com" className="text-bit-lavender hover:text-bit-red transition-colors">info.bbbcoding@gmail.com</a>.</p>

              {/* Section 8 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-turquoise to-bit-lavender flex items-center justify-center text-white text-sm font-bold shrink-0">8</span>
                Intellectual Property
              </h2>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">8.1 BbB Curriculum and Materials</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">All curriculum materials, lesson content, worksheets, and resources produced by BbB remain the intellectual property of Bit by Bit Coding. Reproduction, distribution, or commercial use of BbB materials without prior written consent is prohibited.</p>
              <h3 className="text-lg font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-2">8.2 Student Work</h3>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Participants retain ownership of original code and projects produced during BbB Programmes. By participating, participants and their parents or guardians grant BbB a non-exclusive, royalty-free licence to showcase participant work (in anonymised or credited form, with consent) for educational or promotional purposes.</p>

              {/* Section 9 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-red to-bit-lavender flex items-center justify-center text-white text-sm font-bold shrink-0">9</span>
                Liability
              </h2>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">To the maximum extent permitted by applicable law, BbB, its volunteers, tutors, administrators, and affiliated organisations shall not be liable for any loss, damage, injury, or harm arising from participation in any BbB Programme, except where such loss or damage arises from BbB's gross negligence or wilful misconduct. Participants are responsible for their own personal devices and belongings during sessions.</p>

              {/* Section 10 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-green to-emerald-400 flex items-center justify-center text-white text-sm font-bold shrink-0">10</span>
                Child Protection
              </h2>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB is deeply committed to the safety and wellbeing of all participants. All tutors and administrators are required to comply with BbB's <a href="/#/child-policy" className="text-bit-lavender hover:text-bit-red transition-colors">Child Protection Policy</a>. Any concerns regarding the safety or wellbeing of a participant should be reported immediately to <a href="mailto:info.bbbcoding@gmail.com" className="text-bit-lavender hover:text-bit-red transition-colors">info.bbbcoding@gmail.com</a>.</p>

              {/* Sections 11–13 */}
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-lavender to-violet-400 flex items-center justify-center text-white text-sm font-bold shrink-0">11</span>
                Amendments to These Terms
              </h2>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB reserves the right to amend these Terms at any time. The most current version will be published on our website. Continued participation in BbB Programmes following any amendment constitutes acceptance of the revised Terms.</p>

              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-turquoise to-cyan-400 flex items-center justify-center text-white text-sm font-bold shrink-0">12</span>
                Governing Law
              </h2>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">These Terms are governed by and construed in accordance with the laws of the <strong>Republic of Singapore</strong>. Any disputes arising from or in connection with these Terms shall be subject to the non-exclusive jurisdiction of the courts of Singapore.</p>

              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mt-10 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-bit-red to-pink-400 flex items-center justify-center text-white text-sm font-bold shrink-0">13</span>
                Contact
              </h2>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                <strong>Bit by Bit Coding</strong><br />
                Email: <a href="mailto:info.bbbcoding@gmail.com" className="text-bit-lavender hover:text-bit-red transition-colors">info.bbbcoding@gmail.com</a><br />
                Instagram: <a href="https://instagram.com/bbbcoding" target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red transition-colors">@bbbcoding</a><br />
                Website: <a href="https://bitbybitcoding.github.io" target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red transition-colors">bitbybitcoding.github.io</a>
              </p>

              <div className="mt-10 pt-8 border-t border-bit-dark/10 dark:border-gray-700">
                <p className="text-xs text-bit-dark/50 dark:text-gray-500">Last updated: March 2026. These Terms and Conditions are not a substitute for legal advice.</p>
              </div>

            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 text-center text-bit-dark/50 dark:text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Bit by Bit Coding.</p>
        <p>Democratising coding education, bit by bit.</p>
      </footer>
    </div>
  );
}
