import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pathways', path: '/pathways' },
    { name: 'Mentors', path: '/#mentors' },
    { name: 'About', path: '/#about' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.slice(1);
    }
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-white/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20C20 14.4772 24.4772 10 30 10H30C35.5228 10 40 14.4772 40 20V40L80 20H80C85.5228 20 90 24.4772 90 30V80C90 85.5228 85.5228 90 80 90H80C74.4772 90 70 85.5228 70 80V60L30 80H30C24.4772 80 20 75.5228 20 70V20Z" fill="#8C52FF"/>
            <path d="M40 40L80 20V60L40 40Z" fill="white"/>
            <path d="M30 80L70 60V80H30Z" fill="#8C52FF"/>
          </svg>
          <span className="text-bit-red text-xl font-display font-bold tracking-tight hidden sm:block">
            Bit by Bit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-bit-lavender font-bold'
                  : 'text-bit-dark/80 hover:text-bit-lavender'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/apply">
            <Button className="bg-bit-lavender hover:bg-bit-lavender/90 text-white font-bold shadow-lavender transition-all transform hover:scale-105">
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-bit-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/40">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-bit-lavender font-bold'
                    : 'text-bit-dark/80 hover:text-bit-lavender'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-bit-lavender hover:bg-bit-lavender/90 text-white font-bold shadow-lavender">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
