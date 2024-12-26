import { useState } from 'react'
import PageTitle from '../components/PageTitle'

function Home() {
  return (
    <div className="App">
      <PageTitle />
      <header className="text-center mb-12">
        <h1 className="heading-1">René Rieck</h1>
        <p className="text-xl text-muted">Product Lead & Game Industry Veteran</p>
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
              <h3 className="font-semibold text-davys_gray-500 dark:text-snow-400 mb-2">
                Professional Highlights
              </h3>
              <ul className="list-disc list-inside text-muted">
                <li>Successfully launched 43 games</li>
                <li>Managed teams of 10–70 people</li>
                <li>Technical expertise in UE5</li>
                <li>Global market experience</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-davys_gray-500 dark:text-snow-400 mb-2">
                Core Values
              </h3>
              <ul className="list-disc list-inside text-muted">
                <li>Loves games & agile processes</li>
                <li>Focus on team efficiency</li>
                <li>Passionate about innovation</li>
                <li>Empowering diverse teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="heading-2">Fun Facts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-white">
              <p className="text-muted">Met my wife in Ragnarok Online; we both worked on games like Hello Kitty Online</p>
            </div>
            <div className="card-white">
              <p className="text-muted">My alias, Takuto, is used as an AI guardian name in Ragnarok Online worldwide</p>
            </div>
            <div className="card-white">
              <p className="text-muted">Launched games on every major platform: PC, mobile, consoles, and web</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
