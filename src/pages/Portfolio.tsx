import { useState } from 'react'
import { IconType } from 'react-icons'
import { FaGamepad, FaChevronDown, FaCode, FaUserTie, FaPencilAlt, FaCogs, FaUsers, FaDragon, FaHeart, FaFistRaised, FaTags, FaUsersCog } from 'react-icons/fa'
import { GiDungeonGate, GiCastle } from 'react-icons/gi'
import { motion, AnimatePresence } from 'framer-motion'

interface Game {
  id: string;          // g0001, g0002, etc.
  title: string;       // Destiny 2, etc.
  image: string;       // /images/games/g0001/cover.jpg
  screenshots: string[]; // ['/images/games/g0001/screen1.jpg', ...]
  company: string
  companyIcon: IconType
  roles: string[]
  description: string
  year: string
  genre: string
}

const games: Game[] = [
  {
    id: "g0001",
    title: "Ragnarok Online",
    image: "/images/games/g0001/cover.png",
    screenshots: [
      "/images/games/g0001/screen1.png",
      "/images/games/g0001/screen2.png",
      "/images/games/g0001/screen3.png"
    ],
    company: "Gravity Corp",
    companyIcon: GiCastle,
    roles: ["Technical Product Manager", "Game Designer", "System Designer"],
    description: "Managed the technical development of multiple expansions and designed core game systems for this revolutionary MMORPG that shaped the Asian gaming market.",
    year: "2002-2004",
    genre: "MMORPG"
  },
  {
    id: "g0002",
    title: "Hello Kitty Online",
    image: "/images/games/g0002/cover.png",
    screenshots: [
      "/images/games/g0002/screen1.png",
      "/images/games/g0002/screen2.png",
      "/images/games/g0002/screen3.png"
    ],
    company: "Sanrio Digital",
    companyIcon: GiDungeonGate,
    roles: ["Executive Producer", "Product Manager", "Game Designer"],
    description: "Led the global product strategy and development of this unique social MMORPG, combining Sanrio's IP with innovative gameplay mechanics.",
    year: "2006-2009",
    genre: "Social MMORPG"
  }
]

const allRoles = Array.from(new Set(games.flatMap(game => game.roles)))
const allGenres = Array.from(new Set(games.map(game => game.genre)))

interface GameStats {
  totalGames: number
  totalYears: number
  uniqueRoles: number
  uniqueGenres: number
}

function calculateStats(games: Game[]): GameStats {
  return {
    totalGames: games.length,
    totalYears: new Date().getFullYear() - 2002,
    uniqueRoles: new Set(games.flatMap(g => g.roles)).size,
    uniqueGenres: new Set(games.map(g => g.genre)).size
  }
}

// Role Icons Mapping
const roleIcons: Record<string, IconType> = {
  "Technical Product Manager": FaCogs,
  "Game Designer": FaPencilAlt,
  "System Designer": FaCode,
  "Executive Producer": FaUserTie,
  "Product Manager": FaUsers,
}

// Genre Icons Mapping
const genreIcons: Record<string, IconType> = {
  "MMORPG": FaDragon,
  "Social MMORPG": FaHeart,
  "Action RPG": FaFistRaised,
}

// Filter-Komponente (vereinfacht)
const FilterSection = ({ 
  label, 
  icon: Icon,
  selected,
  onToggle,
  isActive
}: { 
  label: string
  icon: IconType
  selected: string
  onToggle: () => void
  isActive: boolean
}) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`relative px-6 py-3 rounded-lg
                bg-gradient-to-br from-background-300/90 to-background-700
                border transition-all duration-300 min-w-[180px]
                hover:shadow-lg hover:shadow-primary/5
                group
                ${isActive || selected 
                  ? 'border-primary/50 shadow-lg shadow-primary/10' 
                  : 'border-primary/20 hover:border-primary/30'
                }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover Glow Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 to-secondary/20 
                     rounded-lg blur opacity-0 group-hover:opacity-50 
                     transition-all duration-500" />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon aria-hidden="true" className={`text-xl ${isActive || selected ? 'text-primary' : 'text-primary/50'} 
                         transition-colors duration-300 group-hover:text-primary`} />
          <span className="text-main/90 font-medium">{label}</span>
        </div>
        {selected ? (
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary ml-3">
            1 Selected
          </span>
        ) : (
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-primary/50 ml-3 group-hover:text-primary/80 transition-colors duration-300"
          >
            <FaChevronDown className="text-sm" />
          </motion.div>
        )}
      </div>
    </motion.button>
  )
}

export default function Portfolio() {
  const [selectedRole, setSelectedRole] = useState<string>('')
  const [selectedGenre, setSelectedGenre] = useState<string>('')
  const [activeFilter, setActiveFilter] = useState<'roles' | 'genres' | null>(null)
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)

  const filteredGames = games.filter(game => {
    if (selectedRole && !game.roles.includes(selectedRole)) return false
    if (selectedGenre && game.genre !== selectedGenre) return false
    return true
  })

  const stats = calculateStats(games)

  return (
    <div className="App">
      <header className="text-center mb-12">
        <h1 className="heading-1">Game Portfolio</h1>
        <div className="flex items-center justify-center gap-2 text-xl text-secondary animate-float">
          <FaGamepad className="text-2xl" />
          <p>Two Decades of Game Development</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Games', value: stats.totalGames },
            { label: 'Years', value: stats.totalYears },
            { label: 'Roles', value: stats.uniqueRoles },
            { label: 'Genres', value: stats.uniqueGenres }
          ].map(stat => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-background-300/50 to-background-700/90 
                       backdrop-blur-md border border-primary/10 
                       shadow-lg shadow-primary/10 py-6
                       group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 
                       transition-all duration-300 rounded-lg"
            >
              <motion.span
                className="block text-3xl font-bold text-primary mb-2"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                {stat.value}+
              </motion.span>
              <span className="text-main/60">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </header>
      {/* Filters Section */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <FilterSection
            label="Roles"
            icon={FaUsersCog as IconType}
            selected={selectedRole}
            onToggle={() => {
              if (activeFilter === 'roles') {
                setActiveFilter(null)
              } else {
                setActiveFilter('roles')
              }
            }}
            isActive={activeFilter === 'roles'}
          />

          <FilterSection
            label="Genres"
            icon={FaTags}
            selected={selectedGenre}
            onToggle={() => {
              if (activeFilter === 'genres') {
                setActiveFilter(null)
              } else {
                setActiveFilter('genres')
              }
            }}
            isActive={activeFilter === 'genres'}
          />
        </div>

        <AnimatePresence mode="sync">
          {activeFilter && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ 
                height: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
                opacity: { duration: 0.2 }
              }}
              className="overflow-hidden mt-4"
            >
              <div className="max-w-2xl mx-auto p-4 rounded-lg
                           bg-gradient-to-br from-background-300/90 to-background-700
                           border border-primary/20 shadow-xl backdrop-blur-md"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-wrap gap-2"
                >
                  {activeFilter === 'roles' && allRoles.map((role) => {
                    const isSelected = selectedRole === role
                    const Icon = roleIcons[role] || FaGamepad

                    return (
                      <motion.button
                        key={role}
                        onClick={() => {
                          setSelectedRole(isSelected ? '' : role)
                          setActiveFilter(null)
                        }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full
                                  border transition-all duration-300
                                  ${isSelected 
                                    ? 'bg-primary/20 border-primary/50 text-main scale-105' 
                                    : 'bg-background-700/50 border-primary/10 text-main/70 hover:border-primary/30'
                                  }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className={`text-sm ${isSelected ? 'text-primary' : 'text-primary/50'}`} />
                        <span className="text-sm whitespace-nowrap">{role}</span>
                        <span className="text-xs opacity-50">
                          ({games.filter(game => game.roles.includes(role)).length})
                        </span>
                      </motion.button>
                    )
                  })}
                  {activeFilter === 'genres' && allGenres.map((genre) => {
                    const isSelected = selectedGenre === genre
                    const Icon = genreIcons[genre] || FaGamepad

                    return (
                      <motion.button
                        key={genre}
                        onClick={() => {
                          setSelectedGenre(isSelected ? '' : genre)
                          setActiveFilter(null)
                        }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full
                                  border transition-all duration-300
                                  ${isSelected 
                                    ? 'bg-primary/20 border-primary/50 text-main scale-105' 
                                    : 'bg-background-700/50 border-primary/10 text-main/70 hover:border-primary/30'
                                  }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className={`text-sm ${isSelected ? 'text-primary' : 'text-primary/50'}`} />
                        <span className="text-sm whitespace-nowrap">{genre}</span>
                        <span className="text-xs opacity-50">
                          ({games.filter(game => game.genre === genre).length})
                        </span>
                      </motion.button>
                    )
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredGames.map((game) => (
            <motion.div
              key={game.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer
                       bg-gradient-to-br from-background-300/90 to-background-700 
                       before:absolute before:inset-0 
                       before:bg-gradient-to-t before:from-primary/10 before:to-secondary/10 
                       after:absolute after:inset-0 
                       after:bg-mesh-pattern after:opacity-5 after:scale-150
                       backdrop-blur-md border border-primary/20 
                       shadow-lg shadow-background-700/50 
                       hover:border-primary/30 hover:shadow-xl 
                       hover:shadow-primary/5
                       group-hover:scale-[1.01]
                       transition-all duration-500 ease-out"
              onClick={() => setSelectedGame(game)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 
                              group-hover:opacity-100 transition-all duration-500" />
              
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-contain 
                         transition-all duration-700 ease-out 
                         group-hover:scale-[1.03]
                         opacity-95 group-hover:opacity-100
                         bg-background-700/50"
              />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="absolute inset-0 bg-gradient-to-t 
                                from-background-700/95 via-background-700/20 to-transparent" />
                
                <div className="relative transform transition-all duration-500 ease-out
                                group-hover:-translate-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 transition-transform duration-500
                                  transform group-hover:translate-x-1">
                      <game.companyIcon className="text-lg text-primary" />
                      <span className="text-main/80 text-sm">{game.company}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-main transform transition-all duration-500
                                 group-hover:translate-x-1">
                      {game.title}
                    </h3>
                  </div>
                  
                  <div className="hidden group-hover:flex flex-wrap gap-2 mt-4
                                scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100
                                transition-all duration-500 delay-100 origin-left">
                    {game.roles.map((role) => (
                      <span 
                        key={role}
                        className="px-2 py-1 rounded-full text-xs 
                                 bg-background-700/90 border border-primary/20
                                 text-main/90 backdrop-blur-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Game Details Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background-700/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedGame(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-gradient-to-br from-background-300/50 to-background-700/90 
                       rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto
                       backdrop-blur-md border border-primary/10 
                       shadow-lg shadow-primary/10"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedGame.image}
                  alt={selectedGame.title}
                  className="w-full h-full object-contain opacity-95
                           bg-background-700/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t 
                                from-background-300/95 via-background-300/50 to-background-300/10" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <selectedGame.companyIcon className="text-2xl text-primary" />
                  <span className="text-main/90 font-medium">{selectedGame.company}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-main mb-2">{selectedGame.title}</h2>
              <p className="text-main/60 mb-4">{selectedGame.year}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedGame.roles.map((role) => (
                  <span 
                    key={role}
                    className="px-3 py-1 rounded-full text-sm 
                             bg-background-700/90 border border-primary/20
                             text-main/90 backdrop-blur-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="text-main/80">{selectedGame.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
