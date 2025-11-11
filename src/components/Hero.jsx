export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-indigo-200 blur-3xl opacity-50" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-purple-200 blur-3xl opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-600 mb-4 bg-white/70">
              Web Company Profile Profesional
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              MILDSHIFT <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">PRoject</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Kami membangun pengalaman digital yang modern, interaktif, dan responsif untuk menampilkan identitas bisnis Anda dan mengomunikasikan alur bisnis secara jelas.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-indigo-600 text-white px-5 py-3 shadow hover:bg-indigo-700 transition-colors">
                Mulai Konsultasi
              </a>
              <a href="#services" className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-3 border hover:bg-gray-50 transition-colors">
                Lihat Layanan
              </a>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-xl">
              <img src="/hero-illustration.png" alt="Hero" className="w-full h-auto" />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-indigo-400 blur-2xl opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
