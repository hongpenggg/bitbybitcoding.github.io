import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pathways', path: '/#/pathways' },
    { name: 'Blog', path: '/#/blog' },
    { name: 'Tutors', path: '/#mentors', scrollTo: 'mentors' },
    { name: 'About', path: '/#about', scrollTo: 'about' },
  ];

  const handleNavClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    if (link.scrollTo) {
      e.preventDefault();
      
      // If not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(link.scrollTo!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(link.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      setIsOpen(false);
    }
  };

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.slice(1);
    }
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-white/40 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/logo.png"
            alt="Bit by Bit Logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="text-bit-red text-xl font-display font-bold tracking-tight hidden sm:block">
            Bit by Bit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleNavClick(link, e)}
              className={`text-base font-medium transition-colors cursor-pointer ${
                isActive(link.path)
                  ? 'text-bit-lavender font-bold'
                  : 'text-bit-dark/80 dark:text-gray-300 hover:text-bit-lavender'
              }`}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <Link to="/apply">
            <Button className="bg-bit-lavender hover:bg-bit-lavender/90 text-white font-bold shadow-lavender transition-all transform hover:scale-105">
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-bit-dark dark:text-gray-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/40 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(link, e)}
                className={`text-base font-medium py-2 transition-colors cursor-pointer ${
                  isActive(link.path)
                    ? 'text-bit-lavender font-bold'
                    : 'text-bit-dark/80 dark:text-gray-300 hover:text-bit-lavender'
                }`}
              >
                {link.name}
              </a>
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
