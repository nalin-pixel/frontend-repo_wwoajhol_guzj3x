const steps = [
  { order: 1, title: 'Discovery', desc: 'Memahami tujuan bisnis, target audiens, dan kebutuhan fitur.' },
  { order: 2, title: 'Perancangan', desc: 'Membuat arsitektur informasi, wireframe, dan desain UI modern.' },
  { order: 3, title: 'Pengembangan', desc: 'Implementasi frontend dan backend dengan standar industri.' },
  { order: 4, title: 'Peluncuran', desc: 'Uji kualitas, optimasi kinerja, dan deploy yang aman.' },
  { order: 5, title: 'Pertumbuhan', desc: 'Analitik, iterasi, dan peningkatan berkelanjutan.' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Alur Bisnis</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Pendekatan sistematis untuk memastikan proyek berjalan efektif dan menghasilkan dampak.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s) => (
            <div key={s.order} className="relative rounded-2xl border bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center shadow">{s.order}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
