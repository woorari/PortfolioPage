import PageTitle from '../components/PageTitle'

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageTitle title="Contact" />
      <h1 className="heading-1">Contact</h1>
      <section className="card">
        <h2 className="heading-2">Get in Touch</h2>
        <p className="text-muted">Feel free to reach out to me.</p>
      </section>
    </div>
  );
}
