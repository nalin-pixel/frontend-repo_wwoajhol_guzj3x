import { Code, Layers, Rocket } from 'lucide-react'

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Pengembangan Website',
    desc: 'Website cepat, aman, SEO-friendly dengan teknologi modern.'
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Integrasi Sistem',
    desc: 'Hubungkan proses bisnis Anda dengan integrasi API dan automasi.'
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Skalabilitas & Kinerja',
    desc: 'Arsitektur siap skala dengan performa tinggi dan observabilitas.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Layanan Kami</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Solusi end-to-end untuk kebutuhan digital dan transformasi proses bisnis Anda.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
