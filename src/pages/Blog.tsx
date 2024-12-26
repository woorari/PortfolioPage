import PageTitle from '../components/PageTitle'

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageTitle title="Blog" />
      <h1 className="heading-1">Blog</h1>
      <section className="card">
        <h2 className="heading-2">Latest Posts</h2>
        <p className="text-muted">Stay tuned for upcoming articles.</p>
      </section>
    </div>
  );
}
