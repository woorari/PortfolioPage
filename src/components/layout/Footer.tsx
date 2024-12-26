import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-snow-500 border-t border-battleship_gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-davys_gray-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-davys_gray-400 hover:text-rojo">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-davys_gray-400 hover:text-rojo">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/cv" className="text-davys_gray-400 hover:text-rojo">
                  CV
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-davys_gray-400 hover:text-rojo">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-davys_gray-500 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-davys_gray-400 hover:text-rojo"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-davys_gray-400 hover:text-rojo"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-davys_gray-400">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 