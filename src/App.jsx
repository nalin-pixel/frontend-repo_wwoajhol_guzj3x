import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
                <h2 className="text-2xl font-bold">Tentang MILDSHIFT PRoject</h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Kami adalah tim yang berfokus pada pengembangan solusi digital profesional untuk membangun citra perusahaan dan mengoptimalkan alur bisnis.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                  <li>• Desain modern, responsif, dan berorientasi konversi</li>
                  <li>• Integrasi sistem dan otomasi proses</li>
                  <li>• Tim berpengalaman dan kolaboratif</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
                <img src="/about-illustration.png" alt="About" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Process />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} MILDSHIFT PRoject. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
