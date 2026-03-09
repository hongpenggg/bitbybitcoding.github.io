const stats = [
  { label: 'Active Students', value: '50+', color: 'from-bit-lavender to-purple-400' },
  { label: 'Expert Tutors', value: '13', color: 'from-bit-turquoise to-cyan-400' },
  { label: 'Learning Hours', value: '1000+', color: 'from-bit-red to-pink-400' },
];

export function StatsSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-panel rounded-2xl p-8 text-center hover:scale-105 transition-transform border border-white/60 dark:border-gray-700 shadow-lg"
            >
              <div className={`text-5xl font-display font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-bit-dark/60 dark:text-gray-400 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
