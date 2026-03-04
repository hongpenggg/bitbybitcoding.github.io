import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-10 md:p-16 border border-white/60 relative overflow-hidden shadow-2xl shadow-bit-lavender/10">
          {/* Background Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-bit-lavender rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-bit-red rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
          
          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10 text-bit-dark">
            Stay Updated
          </h2>
          <p className="text-bit-dark/70 mb-8 max-w-lg mx-auto relative z-10 text-lg">
            Join our mailing list to get notified when new cohorts open and receive updates about our mission.
          </p>
          
          {submitted ? (
            <div className="relative z-10 p-6 bg-bit-green/20 rounded-xl border border-bit-green/30">
              <p className="text-bit-dark font-bold text-lg">Thank you for subscribing!</p>
              <p className="text-bit-dark/70">We'll keep you updated on our latest news.</p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow bg-white/80 border border-bit-dark/10 rounded-xl px-4 py-4 text-bit-dark placeholder:text-bit-dark/40 focus:outline-none focus:border-bit-lavender focus:ring-2 focus:ring-bit-lavender/20 transition-all shadow-inner h-12"
              />
              <Button 
                type="submit"
                className="bg-bit-dark text-white font-bold px-8 py-4 rounded-xl hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 h-12"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
