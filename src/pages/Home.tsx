import PageTitle from '../components/PageTitle'
import { FaGamepad, FaUsers, FaUncharted } from 'react-icons/fa'
import { GiProcessor, GiTeamUpgrade, GiTechnoHeart } from 'react-icons/gi'
import { SiUnrealengine } from 'react-icons/si'
import { MdOutlineGames } from 'react-icons/md'
import { profileImagePlaceholder } from '../assets/images'

function Home() {
  return (
    <div className="App">
      <PageTitle />
      <header className="text-center mb-12">
        <div className="relative w-48 h-48 mx-auto mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-tertiary to-secondary rounded-full animate-pulse-slow opacity-75 blur-md group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-tertiary to-primary rounded-full animate-pulse-slow opacity-75 blur-md group-hover:opacity-100 transition-opacity animation-delay-500" />
          <img
            src="/images/profile.png"
            alt="René Rieck"
            className="relative w-full h-full object-cover rounded-full border-2 border-secondary/50 
                     group-hover:border-secondary group-hover:scale-105 transition-all duration-300
                     shadow-lg shadow-secondary/20"
          />
          <div className="absolute -bottom-2 -right-2 bg-gradient-card p-2 rounded-full border border-secondary/20
                        shadow-lg backdrop-blur-sm">
            <FaGamepad className="text-2xl text-secondary animate-pulse-slow" />
          </div>
        </div>

        <h1 className="heading-1">René Rieck</h1>
        <div className="flex items-center justify-center gap-2 text-xl text-secondary animate-float">
          <MdOutlineGames className="text-2xl" />
          <p>Product Lead & Game Industry Veteran</p>
        </div>
      </header>

      <main className="grid gap-8">
        <section className="card">
          <h2 className="heading-2">About Me</h2>
          <p className="text-muted mb-6">
            Experienced and creative Product Lead with over 15 years in the gaming and software development industry. 
            I specialize in team leadership, agile processes, and delivering high-quality products across global markets.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-primary/90 flex items-center gap-2 mb-4 
                           drop-shadow-[0_0_8px_rgba(222,31,38,0.2)]">
                <FaUsers className="text-xl" />
                Professional Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted">
                  <FaGamepad className="text-primary/80" />
                  Successfully launched 43 games
                </li>
                <li className="flex items-center gap-2 text-muted">
                  <GiTeamUpgrade className="text-tertiary" />
                  Managed teams of 10–70 people
                </li>
                <li className="flex items-center gap-2 text-muted">
                  <SiUnrealengine className="text-primary/80" />
                  Technical expertise in UE5
                </li>
                <li className="flex items-center gap-2 text-muted">
                  <FaUncharted className="text-accent-purple" />
                  Global market experience
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary flex items-center gap-2 mb-4
                           drop-shadow-[0_0_8px_rgba(159,47,255,0.3)]">
                <GiProcessor className="text-xl" />
                Core Values
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted">
                  <GiTechnoHeart className="text-primary/80" />
                  Loves games & agile processes
                </li>
                <li className="flex items-center gap-2 text-muted">
                  <FaUsers className="text-tertiary/90" />
                  Focus on team efficiency
                </li>
                <li className="flex items-center gap-2 text-muted">
                  <GiTeamUpgrade className="text-primary/80" />
                  Passionate about innovation
                </li>
                <li className="flex items-center gap-2 text-muted">
                  <FaGamepad className="text-tertiary/90" />
                  Empowering diverse teams
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="heading-2">Fun Facts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-white group">
              <p className="text-muted flex items-start gap-2">
                <FaGamepad className="text-xl text-rojo group-hover:animate-float" />
                Met my wife in Ragnarok Online; we both worked on games like Hello Kitty Online
              </p>
            </div>
            <div className="card-white group">
              <p className="text-muted flex items-start gap-2">
                <GiProcessor className="text-xl text-aurora group-hover:animate-float" />
                My alias, Takuto, is used as an AI guardian name in Ragnarok Online worldwide
              </p>
            </div>
            <div className="card-white group">
              <p className="text-muted flex items-start gap-2">
                <SiUnrealengine className="text-xl text-cosmic group-hover:animate-float" />
                Launched games on every major platform: PC, mobile, consoles, and web
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
