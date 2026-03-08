import { Link } from 'react-router-dom';
import { Route, CheckCircle2, GraduationCap, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pythonSubBranches = [
  {
    title: 'Language & Application',
    description: 'Master the syntax, logic, and core concepts of Python. Build your first command-line applications and understand algorithmic thinking. Learn important concepts that will take you everywhere.',
    status: 'active',
    skills: ['Variables', 'Loops', 'Functions', 'Data Structures', 'OOP', 'Simple APIs', 'Algorithms', 'Time Complexity'],
  },
  {
    title: 'Flask & Front-end',
    description: 'Take your Python skills to the web. Learn how to build back-end services with Flask and connect them to HTML/CSS front-ends.',
    status: 'coming-soon',
    skills: ['Flask', 'HTML/CSS', 'APIs', 'Templates'],
  },
  {
    title: 'SQL & Databases',
    description: "Data is the new oil. Learn to design, query, and manage relational databases to power your applications. After SQL, you'll be ready to build your big, powerful apps.",
    status: 'coming-soon',
    skills: ['SQL', 'PostgreSQL', 'Database Design', 'ORM'],
  },
];

const placementSteps = [
  {
    number: 1,
    title: 'Apply',
    description: 'Fill out the quick application form to join the programme.',
  },
  {
    number: 2,
    title: 'Interview',
    description: 'Complete a quick, informal interview to help us get to know you better. No coding experience required.',
  },
  {
    number: 3,
    title: 'Place',
    description: 'Get matched to the perfect module based on your current skill level.',
  },
];

export function PathwaysPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 py-12 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-light border border-bit-lavender/30 text-bit-lavender text-sm font-bold tracking-wide uppercase mb-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-bit-green animate-pulse"></span>
          2026 Intake Open
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight leading-tight max-w-4xl text-bit-dark">
          Structured Pathways for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-bit-lavender to-bit-red">
            Future Coders
          </span>
        </h1>
        <p className="text-bit-dark/60 text-lg md:text-xl max-w-2xl font-body leading-relaxed">
          From your first line of Python to building complex AI models. Our curriculum 
          evolves with you, ensuring you master the fundamentals before tackling the future.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
          {/* Left Column - Python Pathway */}
          <div className="flex flex-col gap-8">
            {/* Section Header */}
            <div className="flex items-center justify-between border-b border-bit-dark/5 pb-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold flex items-center gap-3 text-bit-dark">
                <Route className="text-bit-lavender w-8 h-8" />
                The Python Core
              </h2>
              <span className="text-sm font-bold text-bit-dark/50 uppercase tracking-widest font-body">
                Phase 1
              </span>
            </div>

            {/* Timeline */}
            <div className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-glass">
              <div className="absolute top-0 right-0 w-96 h-96 bg-bit-lavender/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col gap-8">
                {pythonSubBranches.map((branch, index) => (
                  <div key={index} className="relative pl-8 md:pl-12 group">
                    {/* Timeline Line */}
                    {index < pythonSubBranches.length - 1 && (
                      <div 
                        className={`absolute left-[11px] top-8 bottom-[-32px] w-[2px] ${
                          branch.status === 'active' 
                            ? 'bg-gradient-to-b from-bit-lavender to-slate-200' 
                            : 'bg-slate-200'
                        }`}
                      ></div>
                    )}
                    
                    {/* Timeline Dot */}
                    <div 
                      className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white z-10 ${
                        branch.status === 'active'
                          ? 'bg-bit-lavender shadow-lg ring-2 ring-bit-lavender/20'
                          : 'bg-slate-300'
                      }`}
                    ></div>
                    
                    {/* Card */}
                    <div 
                      className={`rounded-2xl p-6 transition-all duration-300 ${
                        branch.status === 'active'
                          ? 'glass-panel-light bg-white/60 border-l-4 border-l-bit-lavender hover:bg-white/80 hover:scale-[1.01] hover:shadow-lg cursor-pointer'
                          : 'glass-panel-light border border-white/40 border-l-4 border-l-slate-300'
                      }`}
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                        <h3 className={`text-xl md:text-2xl font-display font-bold ${
                          branch.status === 'active' ? 'text-bit-dark group-hover:text-bit-lavender transition-colors' : 'text-slate-500'
                        }`}>
                          {branch.title}
                        </h3>
                        <span 
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                            branch.status === 'active'
                              ? 'bg-bit-green/10 text-bit-green border border-bit-green/20'
                              : 'bg-slate-100 text-slate-500 border border-slate-200'
                          }`}
                        >
                          {branch.status === 'active' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-bit-green"></span>
                          )}
                          {branch.status === 'active' ? 'Active Now' : 'Coming Soon'}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className={`text-base font-body leading-relaxed mb-5 ${
                        branch.status === 'active' ? 'text-bit-dark/70' : 'text-slate-500'
                      }`}>
                        {branch.description}
                      </p>
                      
                      {/* Skills */}
                      {branch.status === 'active' && (
                        <div className="flex flex-wrap gap-2">
                          {branch.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-600 shadow-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Horizon */}
              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center gap-6 opacity-80">
                <div className="h-16 w-0.5 border-l-2 border-slate-300 border-dashed md:h-0.5 md:w-16"></div>
                <div className="flex items-center gap-4 text-slate-500">
                  <div className="p-3 rounded-full bg-white shadow-sm border border-slate-200">
                    <Bot className="w-5 h-5 text-bit-turquoise" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-bit-turquoise">Next Horizon</h4>
                    <p className="text-base font-medium text-bit-dark/70">Artificial Intelligence & Machine Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Placement Process */}
          <div className="flex flex-col gap-6 sticky top-24">
            {/* Placement Process Card */}
            <div className="glass-panel rounded-3xl p-8 bg-white/40 shadow-glass border-white/50">
              <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2 text-bit-dark">
                <GraduationCap className="text-bit-red w-5 h-5" />
                Placement Process
              </h3>
              
              <div className="flex flex-col gap-0 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200"></div>
                
                {placementSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-5 pb-8 group">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-white border-2 border-bit-lavender flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold text-bit-lavender">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-bit-dark text-lg mb-1">{step.title}</h4>
                      <p className="text-sm text-bit-dark/60 font-body leading-snug">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/apply">
                <Button className="w-full mt-6 bg-gradient-to-r from-bit-lavender to-violet-600 hover:from-violet-700 hover:to-violet-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-purple-500/20 transition-all active:scale-95 text-base">
                  Start Application
                </Button>
              </Link>
            </div>

            {/* Free Card */}
            <div className="glass-panel-light rounded-3xl p-6 border border-white/60 bg-gradient-to-br from-white/80 to-bit-turquoise/10 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bit-turquoise/10 rounded-xl text-bit-turquoise">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-bit-dark">Free</h4>
                  <p className="text-sm text-bit-dark/60 mt-1 font-body leading-snug">
                    Our curriculum is completely free for all youths aged 10-18 who are passionate about learning to code, and eager to use their coding skills to make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center py-10 border-t border-slate-200/60 mt-auto">
        <p className="text-bit-dark/50 text-sm font-medium">
          &copy; {new Date().getFullYear()} Bit by Bit Coding. Singapore.{' '}
          <br className="sm:hidden" />
        </p>
        <p className="text-bit-dark/50 text-sm font-medium">Democratising coding education, bit by bit.</p>
      </section>
    </div>
  );
}
