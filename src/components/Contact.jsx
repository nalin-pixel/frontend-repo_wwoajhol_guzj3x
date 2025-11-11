import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ type: 'success', text: data.message })
        e.currentTarget.reset()
      } else {
        setStatus({ type: 'error', text: data.detail || 'Gagal mengirim pesan' })
      }
    } catch (err) {
      setStatus({ type: 'error', text: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Hubungi Kami</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Sampaikan kebutuhan Anda. Kami akan kembali dengan solusi terbaik.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Formulir Kontak</h3>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input name="name" placeholder="Nama" required className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="email" name="email" placeholder="Email" required className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input name="subject" placeholder="Subjek" required className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea name="message" placeholder="Pesan" rows="5" required className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-5 py-3 hover:bg-indigo-700 transition-colors">Kirim</button>
            </form>
            {status === 'loading' && <p className="mt-4 text-sm text-gray-600">Mengirim...</p>}
            {status?.type === 'success' && <p className="mt-4 text-sm text-green-600">{status.text}</p>}
            {status?.type === 'error' && <p className="mt-4 text-sm text-red-600">{status.text}</p>}
          </div>

          <div className="rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Informasi</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><strong>Alamat:</strong> Jakarta, Indonesia</li>
              <li><strong>Email:</strong> hello@mildshift.co</li>
              <li><strong>Telepon:</strong> +62 812-3456-7890</li>
            </ul>
            <div className="mt-6 rounded-xl border p-4 bg-white text-sm text-gray-600">
              Tim kami siap membantu merancang dan membangun solusi digital untuk bisnis Anda.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
