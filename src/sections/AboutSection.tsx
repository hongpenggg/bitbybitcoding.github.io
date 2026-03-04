import { Check } from 'lucide-react';

const features = [
  {
    text: 'Peer-led learning environment',
    color: 'bg-bit-green',
    iconColor: 'text-bit-dark',
  },
  {
    text: 'Industry-relevant curriculum (Python, ML, C++)',
    color: 'bg-bit-turquoise',
    iconColor: 'text-bit-dark',
  },
  {
    text: 'Expert approved teaching pedagogy',
    color: 'bg-bit-lavender',
    iconColor: 'text-white',
  },
];

export function AboutSection() {
  return (
    <section className="py-16 px-6 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/60 flex flex-col lg:flex-row gap-12 items-center shadow-xl shadow-bit-lavender/5">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-bit-lavender to-bit-turquoise rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full aspect-video rounded-xl bg-white overflow-hidden border border-white/50 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" 
                alt="Student coding on laptop"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-bit-dark leading-tight">
              More than a workshop.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bit-lavender to-bit-red">
                A structured journey.
              </span>
            </h2>
            <p className="text-bit-dark/70 mb-8 leading-relaxed text-lg">
              Unlike one-off coding camps, Bit by Bit Coding offers a continuous, 
              multi-year curriculum designed to take students from absolute beginners 
              to capable developers.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/40 transition-colors"
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${feature.color} flex items-center justify-center`}>
                    <Check className={`w-4 h-4 ${feature.iconColor}`} />
                  </div>
                  <span className="text-bit-dark font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
