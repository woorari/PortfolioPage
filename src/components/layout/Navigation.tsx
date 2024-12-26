import { Link } from 'react-router-dom';
import { FaGamepad, FaCode, FaBlog, FaUserAstronaut } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import ThemeToggle from '../ThemeToggle';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-card backdrop-blur-md border-b border-aurora/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="group flex items-center gap-2">
            <FaGamepad className="text-2xl text-rojo group-hover:text-aurora transition-colors" />
            <span className="font-serif text-xl font-bold bg-gradient-to-r from-rojo to-aurora bg-clip-text text-transparent">
              René Rieck
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/portfolio" className="nav-link flex items-center gap-2">
              <FaCode className="text-lg" />
              <span>Portfolio</span>
            </Link>
            <Link to="/blog" className="nav-link flex items-center gap-2">
              <FaBlog className="text-lg" />
              <span>Blog</span>
            </Link>
            <Link to="/cv" className="nav-link flex items-center gap-2">
              <FaUserAstronaut className="text-lg" />
              <span>CV</span>
            </Link>
            <Link to="/contact" className="nav-link flex items-center gap-2">
              <MdContactMail className="text-lg" />
              <span>Contact</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 