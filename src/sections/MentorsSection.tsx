import { Button } from '@/components/ui/button';

const mentors = [
  {
    name: 'Sarah Lim',
    role: 'Software Engineer at Google',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    quote: "I love seeing students' eyes light up when their code finally runs. Coding isn't just a skill; it's a superpower.",
    expertise: ['Python', 'AI'],
    borderColor: 'border-t-bit-lavender',
    overlayColor: 'from-bit-lavender/40',
    tagColors: ['bg-bit-lavender/10 text-bit-lavender', 'bg-bit-turquoise/10 text-bit-turquoise'],
  },
  {
    name: 'James Tan',
    role: 'Data Scientist at Grab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: "Data is the new oil, and I'm here to teach students how to refine it. Let's build models that change the world.",
    expertise: ['Data', 'ML'],
    borderColor: 'border-t-bit-turquoise',
    overlayColor: 'from-bit-turquoise/40',
    tagColors: ['bg-bit-lavender/10 text-bit-lavender', 'bg-bit-green/10 text-bit-green'],
  },
  {
    name: 'Priya Kumar',
    role: 'Product Manager at Shopee',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    quote: "Building great tech isn't just about code; it's about solving real user problems. I help students see the big picture.",
    expertise: ['Product', 'UX'],
    borderColor: 'border-t-bit-red',
    overlayColor: 'from-bit-red/40',
    tagColors: ['bg-bit-red/10 text-bit-red', 'bg-bit-lavender/10 text-bit-lavender'],
  },
  {
    name: 'David Chen',
    role: 'Cybersecurity Analyst at GovTech',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    quote: "Security is everyone's responsibility. I'm excited to teach the fundamentals of ethical hacking and defense.",
    expertise: ['Security', 'C++'],
    borderColor: 'border-t-bit-green',
    overlayColor: 'from-bit-green/40',
    tagColors: ['bg-bit-green/10 text-bit-green', 'bg-bit-dark/10 text-bit-dark'],
  },
];

export function MentorsSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" id="mentors">
      {/* Background Orbs */}
      <div className="absolute left-[-20%] top-[20%] w-[600px] h-[600px] bg-bit-lavender/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-[-10%] bottom-[10%] w-[500px] h-[500px] bg-bit-turquoise/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bit-lavender/10 border border-bit-lavender/20 mb-4">
            <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">Guidance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-bit-dark">
            Meet our <span className="text-bit-lavender">Mentors</span>
          </h2>
          <p className="text-bit-dark/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Learn from the best. Our mentors are industry professionals from top tech companies, 
            dedicated to guiding the next generation of Singaporean innovators.
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full border-t-4 ${mentor.borderColor}`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${mentor.overlayColor} to-transparent mix-blend-overlay z-10`}></div>
                <img 
                  src={mentor.image}
                  alt={`Portrait of ${mentor.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/90 to-transparent z-20 pt-12">
                  <h3 className="text-xl font-display font-bold text-bit-dark">{mentor.name}</h3>
                  <p className={`text-sm font-semibold ${mentor.borderColor.replace('border-t-', 'text-')}`}>
                    {mentor.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow bg-white/40">
                <p className="text-bit-dark/70 text-sm leading-relaxed mb-4 flex-grow">
                  "{mentor.quote}"
                </p>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-bit-dark/5">
                  <span className="text-xs font-bold text-bit-dark/40 uppercase tracking-wide">Expertise:</span>
                  <div className="flex gap-1">
                    {mentor.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${mentor.tagColors[skillIndex]}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join as Mentor CTA */}
        <div className="mt-12 text-center">
          <div className="glass inline-flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border border-bit-lavender/30 shadow-lg bg-white/40 backdrop-blur-md">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1494790108377-be9c29b29330' : i === 2 ? '1500648767791-00dcc994a43e' : '1438761681033-6461ffad8d80'}?w=100&q=80`}
                  alt="Mentor Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-bit-lavender flex items-center justify-center text-white text-xs font-bold">
                +12
              </div>
            </div>
            
            <div className="text-left">
              <h4 className="font-display font-bold text-bit-dark text-lg">Are you an industry professional?</h4>
              <p className="text-sm text-bit-dark/70">Join our community and mentor the next generation.</p>
            </div>
            
            <Button className="bg-bit-red hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-1">
              Join as a Mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
