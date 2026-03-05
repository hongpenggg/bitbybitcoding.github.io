import { Link, useNavigate } from 'react-router-dom';
import { Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="border-t border-bit-dark/5 bg-white/40 backdrop-blur-xl pt-16 pb-8 px-6 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20C20 14.4772 24.4772 10 30 10H30C35.5228 10 40 14.4772 40 20V40L80 20H80C85.5228 20 90 24.4772 90 30V80C90 85.5228 85.5228 90 80 90H80C74.4772 90 70 85.5228 70 80V60L30 80H30C24.4772 80 20 75.5228 20 70V20Z" fill="#8C52FF"/>
                <path d="M40 40L80 20V60L40 40Z" fill="white"/>
                <path d="M30 80L70 60V80H30Z" fill="#8C52FF"/>
              </svg>
              <span className="text-bit-red text-lg font-display font-bold">Bit by Bit</span>
            </div>
            <p className="text-bit-dark/60 text-sm leading-relaxed">
              A non-profit initiative dedicated to making coding education accessible to every Singaporean youth.
            </p>
          </div>

          {/* Programmes */}
          <div>
            <h5 className="text-bit-dark font-display font-bold text-lg mb-4">Programmes</h5>
            <ul className="flex flex-col gap-3 text-sm text-bit-dark/60">
              <li><Link to="/pathways" className="hover:text-bit-lavender transition-colors">Python</Link></li>
              <li><Link to="/pathways" className="hover:text-bit-lavender transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/pathways" className="hover:text-bit-lavender transition-colors">C++ & Algorithms</Link></li>
              <li><Link to="/pathways" className="hover:text-bit-lavender transition-colors">#GirlsWhoCode</Link></li>
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h5 className="text-bit-dark font-display font-bold text-lg mb-4">Organisation</h5>
            <ul className="flex flex-col gap-3 text-sm text-bit-dark/60">
              <li>
                <a 
                  href="/#about" 
                  onClick={handleAboutClick}
                  className="hover:text-bit-lavender transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li><Link to="/tutor" className="hover:text-bit-lavender transition-colors">Volunteer</Link></li>
              <li><Link to="/partners" className="hover:text-bit-lavender transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-bit-lavender transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="text-bit-dark font-display font-bold text-lg mb-4">Connect</h5>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-bit-dark/5 flex items-center justify-center text-bit-dark/60 hover:bg-bit-lavender hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-bit-dark/5 flex items-center justify-center text-bit-dark/60 hover:bg-bit-lavender hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-bit-dark/5 flex items-center justify-center text-bit-dark/60 hover:bg-bit-lavender hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bit-dark/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-bit-dark/50">
            &copy; {new Date().getFullYear()} Bit by Bit Coding. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-bit-dark/50">
            <a href="#" className="hover:text-bit-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bit-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
