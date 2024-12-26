import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/woorari', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/renerieck/', label: 'LinkedIn' },
  ]

  return (
    <footer className="mt-12 border-t border-primary/10 bg-gradient-card backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="relative p-6 rounded-xl bg-gradient-to-br from-background-300/30 to-background-700/50 
                      border border-primary/10 backdrop-blur-md">
          <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <img 
                src="/logo.svg" 
                alt="René Rieck Logo" 
                className="w-12 h-12 opacity-90 hover:opacity-100 transition-all duration-300
                         hover:scale-105 hover:rotate-3" 
              />
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary 
                             bg-clip-text text-transparent">
                  René Rieck
                </h2>
                <p className="text-sm text-main/70">Game Industry Veteran</p>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-main/90">Legal</span>
                <div className="flex flex-col gap-1">
                  <Link to="/privacy" className="text-sm text-main/70 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-sm text-main/70 hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-main/90">Mobile Apps</span>
                <div className="flex flex-col gap-1">
                  <Link to="/apps/support" className="text-sm text-main/70 hover:text-primary transition-colors">
                    Support
                  </Link>
                  <Link to="/apps/privacy" className="text-sm text-main/70 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background-700/50 border border-primary/10
                           hover:border-primary/30 transition-all duration-300
                           hover:scale-110 hover:-translate-y-1"
                  aria-label={link.label}
                >
                  <link.icon className="text-lg text-main/70 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-main/60 mt-6 pt-6 border-t border-primary/10">
            © {currentYear} René Rieck. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 