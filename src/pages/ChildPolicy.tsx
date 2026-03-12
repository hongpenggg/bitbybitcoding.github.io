import { useEffect } from 'react';
import { ShieldCheck, Heart, BookOpen, Users, AlertTriangle, Lock } from 'lucide-react';

const principles = [
  'The \'best interests of the child\' are most important.',
  'All children have equal rights to safety in all settings regardless of sex, age, race, religion, or disability.',
  'Violence and abuse against children are never acceptable, in any form, location, or setting.',
  'The situation of all children must be improved through the promotion of their rights as set out in the UN Convention on the Rights of the Child.',
  'By enabling people to learn, BbB promotes awareness and encourages self-reliance including the realisation of the Rights of Children.',
];

const doList = [
  'Treat all children equally and with respect, irrespective of any characteristic.',
  'Ensure children are supported to realise their rights, including the right to express views on matters affecting them.',
  'Ensure all staff are aware of risks to children including child abuse.',
  'Promote positive strategies to manage children and prohibit corporal punishment or offensive language.',
  'Work in partnership with governments, communities, and children to protect them from harm.',
  'Model child-friendly behaviours and through awareness minimise risks to children.',
];

const dontList = [
  'Hit or otherwise physically assault or physically abuse children.',
  'Develop relationships with children which could be deemed exploitative or abusive.',
  'Use language, make suggestions, or offer advice which is inappropriate, offensive, or abusive.',
  'Behave physically in a manner which is inappropriate or sexually provocative.',
  'Have a child with whom they are working stay overnight or sleep in the same room.',
  'Do things for children of a personal nature that they can do for themselves.',
  'Condone or participate in behaviour of children which is illegal, unsafe, or abusive.',
  'Act in ways intended to shame, humiliate, belittle, or degrade children.',
  'Discriminate against or favour particular children to the exclusion of others.',
];

export function ChildPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-green/30 dark:border-bit-green/50 mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-bit-green" />
              <span className="text-xs font-bold text-bit-green uppercase tracking-wider">
                Legal Documents
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Child Protection Policy
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              BbB is committed to the welfare of children and opposes all forms of abuse, discrimination, and exploitation of children.
            </p>
            <p className="text-sm text-bit-dark/50 dark:text-gray-500 mt-4">Last updated: January 10, 2026</p>
          </div>

          {/* Key Pillars Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 border border-white/60 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bit-green to-emerald-400 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-bit-dark dark:text-white">Our Commitment</h3>
              <p className="text-sm text-bit-dark/60 dark:text-gray-400">Every child deserves a safe, supportive environment. BbB places child safety above all else.</p>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/60 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bit-lavender to-violet-400 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-bit-dark dark:text-white">UN Convention</h3>
              <p className="text-sm text-bit-dark/60 dark:text-gray-400">Guided by the UN Convention on the Rights of the Child (1989, Article 19) and UNICEF's Child Protection Toolkit.</p>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/60 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bit-red to-pink-400 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-bit-dark dark:text-white">Mandatory Reporting</h3>
              <p className="text-sm text-bit-dark/60 dark:text-gray-400">All staff and volunteers must report any suspected violation of this policy to BbB management immediately.</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-8">

            {/* Intro */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40">
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-bit-green" />
                Scope of this Policy
              </h2>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">This Child Protection Policy applies to the following BbB-operated websites and online services:</p>
              <ul className="space-y-2 text-bit-dark/70 dark:text-gray-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-bit-green"></span><strong>Main website:</strong> https://bitbybitcoding.github.io</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-bit-green"></span><strong>BbB Code Along</strong></li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-bit-green"></span><strong>BbB Community Portal</strong></li>
              </ul>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">This policy also covers offline practices for in-person lessons involving minors. BbB is a Singaporean organisation uniquely focused on advancing literacy and education in STEM subjects, particularly coding and computing. We are committed to the welfare of children and oppose all forms of abuse, discrimination, exploitation, and manipulation of children.</p>
            </div>

            {/* Vision / Goal / Mandate */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40">
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-bit-red" />
                Introduction
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-bit-lavender/5 dark:bg-bit-lavender/10 border border-bit-lavender/20 dark:border-bit-lavender/30">
                  <h3 className="font-bold text-bit-lavender mb-2">Vision</h3>
                  <p className="text-sm text-bit-dark/70 dark:text-gray-400">BbB will be recognised as a leader in Singapore for protecting the rights of children while promoting literacy and education in STEM and coding.</p>
                </div>
                <div className="p-5 rounded-2xl bg-bit-green/5 dark:bg-bit-green/10 border border-bit-green/20 dark:border-bit-green/30">
                  <h3 className="font-bold text-bit-green mb-2">Goal</h3>
                  <p className="text-sm text-bit-dark/70 dark:text-gray-400">Ensure the rights of all children to protection are supported in all BbB programming, regardless of background.</p>
                </div>
                <div className="p-5 rounded-2xl bg-bit-turquoise/5 dark:bg-bit-turquoise/10 border border-bit-turquoise/20 dark:border-bit-turquoise/30">
                  <h3 className="font-bold text-bit-turquoise mb-2">Mandate</h3>
                  <p className="text-sm text-bit-dark/70 dark:text-gray-400">BbB embraces international principles of equality, child protection, and human rights to ensure everyone has equal opportunity.</p>
                </div>
              </div>
            </div>

            {/* Principles */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40">
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-bit-lavender" />
                Guiding Principles
              </h2>
              <div className="flex flex-col gap-3">
                {principles.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-bit-lavender to-bit-red flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code of Conduct */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40">
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-bit-turquoise" />
                Tutor's Code of Conduct Towards Minors
              </h2>
              <p className="text-bit-dark/70 dark:text-gray-400 mb-6 text-sm leading-relaxed">All BbB staff must sign and abide by this Code of Conduct. Staff, partners, volunteers, and consultants are expected to be aware of situations which may present risks, plan and organise work to minimise risks, be visible in working with children, and empower children by discussing their rights and what is acceptable.</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Do */}
                <div>
                  <h3 className="font-bold text-bit-green dark:text-green-400 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-bit-green/10 dark:bg-green-900/30 flex items-center justify-center text-xs">✓</span>
                    Staff and Volunteers Must
                  </h3>
                  <div className="flex flex-col gap-2">
                    {doList.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-bit-green/5 dark:bg-green-900/20 border border-bit-green/10 dark:border-green-900/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-bit-green mt-2 shrink-0"></span>
                        <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Don't */}
                <div>
                  <h3 className="font-bold text-bit-red dark:text-red-400 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-bit-red/10 dark:bg-red-900/30 flex items-center justify-center text-xs">✗</span>
                    Staff and Volunteers Must Never
                  </h3>
                  <div className="flex flex-col gap-2">
                    {dontList.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-bit-red/5 dark:bg-red-900/20 border border-bit-red/10 dark:border-red-900/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-bit-red mt-2 shrink-0"></span>
                        <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-xs text-bit-dark/50 dark:text-gray-500 leading-relaxed">This is not an exhaustive or exclusive list. The principle is that staff, volunteers, and partners should avoid actions or behaviour which may constitute poor practice or potentially abusive behaviour.</p>
            </div>

            {/* Child Privacy */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40">
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-bit-lavender" />
                Child Privacy Policy
              </h2>
              <div className="flex flex-col gap-4">
                <div className="p-5 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                  <h3 className="font-bold text-bit-dark dark:text-white text-sm mb-2">Children under 13</h3>
                  <p className="text-sm text-bit-dark/70 dark:text-gray-400 leading-relaxed">We do not knowingly permit children under 13 to create independent BbB accounts. A parent or legal guardian must complete registration. If we learn we collected Personal Information directly from a child under 13 without the required authorisation, we will delete it as soon as practicable.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                  <h3 className="font-bold text-bit-dark dark:text-white text-sm mb-2">Parental Rights</h3>
                  <p className="text-sm text-bit-dark/70 dark:text-gray-400 leading-relaxed">Parents/guardians may review, correct, or request deletion of their child's Personal Information and may refuse to allow further collection or use. To exercise these rights, email <a href="mailto:info.bbbcoding@gmail.com" className="text-bit-lavender hover:text-bit-red transition-colors">info.bbbcoding@gmail.com</a>.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                  <h3 className="font-bold text-bit-dark dark:text-white text-sm mb-2">Minimum Necessary</h3>
                  <p className="text-sm text-bit-dark/70 dark:text-gray-400 leading-relaxed">We collect only the Personal Information reasonably necessary for a child to participate in a given activity.</p>
                </div>
              </div>
            </div>

            {/* Agreement */}
            <div className="glass rounded-3xl p-8 md:p-10 border border-bit-red/20 dark:border-red-900/40 shadow-xl bg-bit-red/5 dark:bg-red-900/10">
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-bit-red" />
                Mandatory Reporting Agreement
              </h2>
              <div className="flex flex-col gap-3">
                <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed">It is <strong>mandatory</strong> for employees, contractors, interns, and volunteers to report any witnessed, suspected, or alleged violation of the child protection policy to BbB's management team.</p>
                <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed">It is <strong>mandatory</strong> for employees, contractors, interns, and volunteers to report any witnessed, suspected, or alleged incident of child abuse during the implementation of a BbB program to BbB's Implementing Partner.</p>
                <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed">It is <strong>mandatory</strong> for BbB's Implementing Partners to report any witnessed, suspected, or alleged incident of child abuse to the appropriate local authorities.</p>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/60 dark:border-gray-700">
                <p className="text-sm text-bit-dark/70 dark:text-gray-400">
                  Report concerns immediately: <a href="mailto:info.bbbcoding@gmail.com" className="text-bit-lavender hover:text-bit-red transition-colors font-bold">info.bbbcoding@gmail.com</a>
                </p>
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
