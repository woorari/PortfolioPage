import PageTitle from '../components/PageTitle'

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageTitle title="Blog" />
      <h1 className="text-3xl font-bold text-davys_gray-500 mb-6">Blog</h1>
      <section className="bg-snow-400 rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold text-davys_gray-500 mb-4">Latest Posts</h2>
        <p className="text-davys_gray-400">Stay tuned for upcoming articles.</p>
      </section>
    </div>
  );
}
