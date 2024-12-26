import PageTitle from '../components/PageTitle'

export default function CV() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageTitle title="CV" />
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-davys_gray-500 mb-4">Curriculum Vitae</h1>
        <p className="text-xl text-davys_gray-400">
          Senior Producer, Product Lead, and Technical Manager with 15+ years of experience
        </p>
      </header>

      <main className="grid gap-8">
        <section className="bg-snow-400 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-davys_gray-500 mb-6">Professional Experience</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-rojo pl-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-davys_gray-500">Blankhans</h3>
                <span className="text-sm text-davys_gray-400">Sep 2021 – Jun 2024</span>
              </div>
              <p className="font-medium text-davys_gray-500 mb-2">Chief Operations Officer & Co-Founder</p>
              <ul className="list-disc list-inside text-davys_gray-400">
                <li>Built a team of 40 employees for Coreborn: Nations of the Ultracore</li>
                <li>Oversaw business strategy, publishing plans, and team operations</li>
              </ul>
            </div>

            {/* More experience entries... */}
          </div>
        </section>

        <section className="bg-snow-400 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-davys_gray-500 mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-davys_gray-500 mb-2">Leadership</h3>
              <p className="text-davys_gray-400">Managed teams ranging from 10 to 70 across disciplines</p>
            </div>
            {/* More skill sections... */}
          </div>
        </section>
      </main>
    </div>
  )
}
