import { motion } from 'framer-motion'
import { FaGamepad, FaUsers, FaGlobe, FaRocket, FaChevronDown, FaBuilding, FaCode, FaChartLine, FaBullhorn, FaHandshake, FaTasks, FaComments, FaCloud, FaSearchDollar, FaSearch, FaIndustry } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface Highlight {
  icon: IconType
  value: string
  label: string
}

const highlights: Highlight[] = [
  { icon: FaGamepad, value: '40+', label: 'Games Launched' },
  { icon: FaGlobe, value: '20+', label: 'Years Experience' },
  { icon: FaUsers, value: '100+', label: 'Team Members Led' },
  { icon: FaRocket, value: '3', label: 'Companies Founded' }
]

interface TimelineEntry {
  company: string
  role: string
  period: string
  highlights: string[]
  skills?: string[]
  icon: IconType
  logo?: string
}

// Skill-Icon-Mapping
const skillIcons: Record<string, IconType> = {
  "Product Strategy": FaChartLine,
  "Positioning (Marketing)": FaBullhorn,
  "Business Development": FaHandshake,
  "Product Management": FaTasks,
  "Communication": FaComments,
  "Software as a Service (SaaS)": FaCloud,
  "Market Analysis": FaSearchDollar,
  "Market Research": FaSearch,
  "Business-to-Business (B2B)": FaIndustry
}

const timeline: TimelineEntry[] = [
  {
    company: "Companion Group Ltd.",
    role: "Chief Operations Officer",
    period: "2025 - Present",
    highlights: [
      "Leading game studios in realizing their visions and achieving sustainable growth",
      "Providing strategic guidance and operational excellence for multiple development teams"
    ],
    skills: [
      "Product Strategy",
      "Business Development",
      "Team Leadership",
      "Operational Excellence",
      "Strategic Planning",
      "Game Development",
      "Studio Management",
      "Business Growth",
      "Stakeholder Management"
    ],
    icon: FaBuilding,
    logo: "/images/companies/companion.png"
  },
  {
    company: "Blankhans",
    role: "Chief Operations Officer & Co-Founder",
    period: "2021 - 2024",
    highlights: [
      "Built a team of 40 employees for Coreborn: Nations of the Ultracore",
      "Oversaw business strategy, publishing plans, and team operations"
    ],
    skills: [
      "Product Strategy",
      "Positioning (Marketing)",
      "Business Development",
      "Product Management",
      "Communication",
      "Software as a Service (SaaS)",
      "Market Analysis",
      "Market Research",
      "Business-to-Business (B2B)"
    ],
    icon: FaBuilding,
    logo: "/images/companies/blankhans.png"
  },
  {
    company: "Improbable",
    role: "VP of Product",
    period: "2020 - 2022",
    highlights: [
      "Led the transformation of Improbable Multiplayer Services (IMS)",
      "Oversaw the development of SaaS-based multiplayer backend solutions"
    ],
    icon: FaBuilding,
    logo: "/images/companies/improbable.png"
  },
  {
    company: "ProSiebenSat.1 Media SE",
    role: "Senior Product Manager",
    period: "2017 - 2020",
    highlights: [
      "Launched centralized payment systems and GDPR-compliant billing solutions",
      "Delivered UCP Content Catalogue, a media asset management platform"
    ],
    icon: FaBuilding
  },
  {
    company: "GamesInFlames",
    role: "Head of Operations",
    period: "2015 - 2017",
    highlights: [
      "Managed the launch of 8 games with a team of 106 freelancers",
      "Delivered Aloha Paradise Hotel for mobile and PC platforms"
    ],
    icon: FaGamepad
  },
  {
    company: "Wolfp4ck Consulting",
    role: "Founder & Consultant",
    period: "2014 - 2017",
    highlights: [
      "Provided consulting for companies like Playata, Nexon, and AHA Entertainment",
      "Specialized in finance, product management, and agile coaching"
    ],
    icon: FaRocket
  },
  {
    company: "ProSiebenSat.1 Games",
    role: "Technical Project Manager",
    period: "2012 - 2014",
    highlights: [
      "Managed technical operations for PlanetSide 2 and DC Universe Online in Europe",
      "Led due diligence and migration projects during AeriaGames acquisition"
    ],
    icon: FaGamepad
  },
  {
    company: "Burda:ic",
    role: "Product Manager",
    period: "2005 - 2011",
    highlights: [
      "Product Manager for Ragnarok Online, Florensia, and Hello Kitty Online",
      "Led anti-cheat and QA teams, managed IDC migration with 600+ servers"
    ],
    icon: FaGamepad
  }
]

export default function CV() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background-700/50 via-transparent to-background-700/50" />
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-primary via-tertiary to-secondary 
                            bg-clip-text text-transparent">
                Game Industry Veteran
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-4xl mx-auto p-8 rounded-xl
                       bg-gradient-to-br from-background-300/30 to-background-700/50
                       border border-primary/10 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
              <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-8 relative">
                As a seasoned game industry veteran, I've successfully launched over 40 online games 
                across various platforms, specializing in team leadership, product strategy, and 
                technical project management. My expertise spans from MMORPGs and multiplayer systems 
                to comprehensive game operations.
              </p>
              <p className="text-lg text-main/70 leading-relaxed relative">
                As Technical Producer, Product Manager, and Game Designer, I excel in leading development teams, 
                implementing agile methodologies, and delivering high-quality products across global markets. 
                My focus lies in creating efficient workflows and fostering innovation in game development.
              </p>
            </motion.div>
          </motion.div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-background-300/50 to-background-700/90 
                         backdrop-blur-md border border-primary/10 
                         rounded-lg p-6 text-center
                         hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5
                         transition-all duration-300"
              >
                <item.icon className="text-3xl text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-main mb-2">{item.value}</div>
                <div className="text-secondary text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-24">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative"
            >
              <div className="text-secondary font-medium text-sm mb-1">Scroll to explore</div>
              <FaChevronDown className="text-secondary mx-auto text-2xl animate-bounce" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary via-tertiary to-secondary 
                        bg-clip-text text-transparent">
            Career Timeline
          </span>
        </h2>
        
        <div className="relative">
          {/* Vertikale Linie */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-tertiary to-secondary" />
          
          {/* Obere Timeline Endkappe */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
            <div className="relative">
              <div className="absolute bottom-full w-px h-8
                            bg-gradient-to-b from-transparent to-primary/50
                            [mask-image:repeating-linear-gradient(transparent,transparent_2px,white_2px,white_4px)]" />
              <div className="w-6 h-6 rounded-full 
                            bg-gradient-to-br from-primary to-secondary 
                            border-4 border-background-700
                            shadow-lg shadow-primary/20" />
            </div>
          </div>
          
          {timeline.map((entry, index) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 relative flex ${index % 2 === 0 ? 'justify-end' : ''} items-center`}
            >
              {/* Timeline Punkt */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full 
                            bg-gradient-to-r from-primary to-secondary border-2 border-background-700" />
              
              {/* Content Box */}
              <div className={`w-[45%] ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="relative p-6 rounded-xl
                             bg-gradient-to-br from-background-300/30 to-background-700/50
                             border border-primary/20 backdrop-blur-md
                             shadow-[0_0_15px_rgba(222,31,38,0.1)]
                             hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10
                             transition-all duration-300">
                  <div className="absolute inset-0 bg-mesh-pattern opacity-5 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl" />
                  
                  <div className="relative">
                    {/* Row 1: Logo, Company & Period */}
                    <div className="flex items-center gap-4 mb-4">
                      {/* Logo */}
                      {entry.logo && (
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 p-2
                                       bg-background-700/80 rounded-lg border border-primary/20
                                       backdrop-blur-sm shadow-lg">
                            <img 
                              src={entry.logo} 
                              alt={`${entry.company} logo`}
                              className="w-full h-full object-contain opacity-90
                                       hover:opacity-100 transition-opacity duration-300"
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* Company & Period */}
                      <div className="flex-grow">
                        <span className="text-secondary font-medium text-lg">{entry.company}</span>
                        <div className="flex items-center gap-2">
                          <entry.icon className="text-primary" />
                          <span className="text-main/60 text-sm">{entry.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Role */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-main border-b border-primary/20 pb-2">
                        {entry.role}
                      </h3>
                    </div>

                    {/* Row 3: Highlights */}
                    <ul className="space-y-2">
                      {entry.highlights.map((highlight, i) => (
                        <li key={i} className="text-main/70 text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {entry.skills && (
                      <>
                        <div className="mt-6 pt-4 border-t border-primary/10">
                          <div className="flex flex-wrap gap-2">
                            {entry.skills.map((skill, i) => {
                              const SkillIcon = skillIcons[skill] || FaCode
                              return (
                                <div
                                  key={i}
                                  className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-full
                                           bg-background-700/50 border border-primary/10
                                           text-main/70 hover:text-secondary
                                           hover:border-secondary/30 transition-colors duration-300"
                                >
                                  <SkillIcon className="text-primary/70" />
                                  {skill}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Untere Timeline Endkappe */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
            <div className="relative">
              <div className="w-6 h-6 rounded-full 
                            bg-gradient-to-br from-primary to-secondary 
                            border-4 border-background-700
                            shadow-lg shadow-primary/20" />
              <div className="absolute top-full w-px h-8
                            bg-gradient-to-t from-transparent to-primary/50
                            [mask-image:repeating-linear-gradient(transparent,transparent_2px,white_2px,white_4px)]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
