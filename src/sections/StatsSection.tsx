import { DollarSign, Users, MapPin } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: '$0',
    label: 'Cost to Students',
    color: 'bg-bit-green/20',
    iconColor: 'text-bit-dark',
  },
  {
    icon: Users,
    value: '100%',
    label: 'Volunteer Run',
    color: 'bg-bit-turquoise/20',
    iconColor: 'text-bit-dark',
  },
  {
    icon: MapPin,
    value: 'SG',
    label: 'Singapore Based',
    color: 'bg-bit-red/20',
    iconColor: 'text-bit-dark',
  },
];

export function StatsSection() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="glass-card p-8 rounded-2xl text-center shadow-sm"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.color} mb-4`}>
              <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
            </div>
            <h3 className="text-4xl font-display font-bold text-bit-dark mb-1">
              {stat.value}
            </h3>
            <p className="text-bit-dark/60 text-base font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
