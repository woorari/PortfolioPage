import PageTitle from '../components/PageTitle'

export default function CV() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageTitle title="CV" />
      <header className="mb-12">
        <h1 className="heading-1">Curriculum Vitae</h1>
        <p className="text-xl text-secondary/80">
          Senior Producer, Product Lead, and Technical Manager with 15+ years of experience
        </p>
      </header>

      <main className="grid gap-8">
        <section className="card">
          <h2 className="heading-2">Professional Experience</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-secondary">Blankhans</h3>
                <span className="text-sm text-secondary/60">Sep 2021 – Jun 2024</span>
              </div>
              <p className="font-medium text-secondary mb-2">Chief Operations Officer & Co-Founder</p>
              <ul className="list-disc list-inside text-muted">
                <li>Built a team of 40 employees for Coreborn: Nations of the Ultracore</li>
                <li>Oversaw business strategy, publishing plans, and team operations</li>
              </ul>
            </div>

            {/* More experience entries... */}
          </div>
        </section>

        <section className="card">
          <h2 className="heading-2">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-secondary mb-2">Leadership</h3>
              <p className="text-muted">Managed teams ranging from 10 to 70 across disciplines</p>
            </div>
            {/* More skill sections... */}
          </div>
        </section>
      </main>
    </div>
  )
}
