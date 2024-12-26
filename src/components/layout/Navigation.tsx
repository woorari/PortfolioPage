import { Link } from 'react-router-dom';
import { FaGamepad, FaCode, FaBlog, FaUserAstronaut } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-card backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="group flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="René Rieck Logo" 
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
            />
            <span className="font-serif text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              René Rieck
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/portfolio" className="nav-link flex items-center gap-2">
              <FaCode className="text-lg" />
              <span className="text-main/90">Portfolio</span>
            </Link>
            <Link to="/blog" className="nav-link flex items-center gap-2">
              <FaBlog className="text-lg" />
              <span className="text-main/90">Blog</span>
            </Link>
            <Link to="/cv" className="nav-link flex items-center gap-2">
              <FaUserAstronaut className="text-lg" />
              <span className="text-main/90">CV</span>
            </Link>
            <Link to="/contact" className="nav-link flex items-center gap-2">
              <MdContactMail className="text-lg" />
              <span className="text-main/90">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 