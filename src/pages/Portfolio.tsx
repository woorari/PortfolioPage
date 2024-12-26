import { useState } from 'react'
import { FaGamepad, FaFilter } from 'react-icons/fa'
import { GiDungeonGate, GiCastle } from 'react-icons/gi'
import { motion, AnimatePresence } from 'framer-motion'

interface Game {
  title: string
  company: string
  companyIcon: React.ComponentType
  roles: string[]
  description: string
  image: string
  year: string
  genre: string
}

const games: Game[] = [
  {
    title: "Ragnarok Online",
    company: "Gravity Corp",
    companyIcon: GiCastle,
    roles: ["Technical Product Manager", "Game Designer", "System Designer"],
    description: "Managed the technical development of multiple expansions and designed core game systems for this revolutionary MMORPG that shaped the Asian gaming market.",
    image: "/images/games/ro.jpg",
    year: "2002-2004",
    genre: "MMORPG"
  },
  {
    title: "Hello Kitty Online",
    company: "Sanrio Digital",
    companyIcon: GiDungeonGate,
    roles: ["Executive Producer", "Product Manager", "Game Designer"],
    description: "Led the global product strategy and development of this unique social MMORPG, combining Sanrio's IP with innovative gameplay mechanics.",
    image: "/images/games/hko.jpg",
    year: "2006-2009",
    genre: "Social MMORPG"
  },
  // ... weitere Spiele
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

export default function Portfolio() {
  const [selectedRole, setSelectedRole] = useState<string>('')
  const [selectedGenre, setSelectedGenre] = useState<string>('')
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
        <div className="flex items-center justify-center gap-2 text-xl text-aurora animate-float">
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
              className="card-white group py-6"
            >
              <motion.span
                className="block text-3xl font-bold text-aurora mb-2"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                {stat.value}+
              </motion.span>
              <span className="text-aurora/60">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </header>

      {/* Filters Section - mit verbessertem Styling */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.02 }}
        >
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="appearance-none bg-space-300/50 text-aurora border border-aurora/20 rounded-lg 
                     px-6 py-3 pr-12 backdrop-blur-sm focus:border-aurora/50 focus:outline-none
                     transition-all cursor-pointer min-w-[200px]
                     hover:border-aurora/40"
          >
            <option value="">All Roles ({allRoles.length})</option>
            {allRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
          <FaFilter className="absolute right-4 top-1/2 -translate-y-1/2 text-aurora/50 group-hover:text-aurora" />
        </motion.div>

        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.02 }}
        >
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="appearance-none bg-space-300/50 text-aurora border border-aurora/20 rounded-lg 
                     px-6 py-3 pr-12 backdrop-blur-sm focus:border-aurora/50 focus:outline-none
                     transition-all cursor-pointer min-w-[200px]
                     hover:border-aurora/40"
          >
            <option value="">All Genres ({allGenres.length})</option>
            {allGenres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
          <FaFilter className="absolute right-4 top-1/2 -translate-y-1/2 text-aurora/50 group-hover:text-aurora" />
        </motion.div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredGames.map((game) => (
            <motion.div
              key={game.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedGame(game)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rojo via-cosmic to-aurora opacity-0 
                            group-hover:opacity-75 transition-opacity duration-300 rounded-lg z-10" />
              
              <div className="card h-[300px] relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-space-700/90 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <game.companyIcon className="text-xl text-aurora" />
                    <span className="text-aurora/80 text-sm">{game.company}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-aurora mb-2">{game.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {game.roles.map((role) => (
                      <span 
                        key={role}
                        className="px-2 py-1 rounded-full text-xs bg-space-300/50 border border-aurora/20
                                text-aurora backdrop-blur-sm"
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
            className="fixed inset-0 bg-space-700/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedGame(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-card rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedGame.image}
                  alt={selectedGame.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-700/90 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <selectedGame.companyIcon className="text-2xl text-aurora" />
                  <span className="text-aurora font-medium">{selectedGame.company}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-aurora mb-2">{selectedGame.title}</h2>
              <p className="text-aurora/60 mb-4">{selectedGame.year}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedGame.roles.map((role) => (
                  <span 
                    key={role}
                    className="px-3 py-1 rounded-full text-sm bg-space-300/50 border border-aurora/20
                             text-aurora backdrop-blur-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="text-muted">{selectedGame.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
