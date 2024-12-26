import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-main relative">
      <Navigation />
      <main className="pt-24 pb-8">
        {children}
      </main>
      <Footer />
    </div>
  )
} 