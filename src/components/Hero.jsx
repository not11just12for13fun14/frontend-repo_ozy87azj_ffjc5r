import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* gradient glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/60 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 w-full">
        <div className="py-24">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-sky-300 text-xs">
            New • Fintech-ready subscription
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Elegant payments for modern products
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-sky-200/80 text-lg">
            Seamless checkout with Stripe. Crystal-clear pricing. Glassmorphic aesthetics.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
