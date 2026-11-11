import { Navbar } from './components/organisms/Navbar'
import { Hero } from './components/organisms/Hero'
import { Features } from './components/organisms/Features'
import { DownloadCenter } from './components/organisms/DownloadCenter'
import { Community } from './components/organisms/Community'
import { Footer } from './components/organisms/Footer'

export const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Features />
      <DownloadCenter />
      <Community />
    </main>
    <Footer />
  </>
)
