import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiUnrealengine } from 'react-icons/si'

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: SiUnrealengine, href: 'https://dev.epicgames.com/community/profile/yourusername', label: 'Unreal Engine' },
  ]

  return (
    <footer className="mt-16 border-t border-primary/10 bg-gradient-card backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              René Rieck
            </span>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="text-2xl" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-main/90">
              Game Industry Veteran & Product Lead
            </p>
            <p className="text-main/60 text-sm mt-2">
              © {new Date().getFullYear()} René Rieck. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 