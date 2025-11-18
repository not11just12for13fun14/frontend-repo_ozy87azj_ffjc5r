import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App(){
  const [loading, setLoading] = useState(false)

  const handleSelect = async (planId) => {
    setLoading(true)
    try {
      const res = await fetch(`${BACKEND_URL}/api/stripe/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: planId,
          success_url: window.location.origin + '/?status=success',
          cancel_url: window.location.origin + '/?status=cancelled',
        })
      })
      const data = await res.json()
      if (res.ok && data.url) {
        window.location.href = data.url
      } else {
        alert(data.detail || 'Failed to start checkout')
      }
    } catch (e) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 relative">
      <Navbar />
      <Hero />
      <Pricing onSelect={handleSelect} />
      <Footer />
      {loading && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="px-4 py-2 rounded-xl bg-white/10 text-white">Redirecting to checkout…</div>
        </div>
      )}
    </div>
  )
}
