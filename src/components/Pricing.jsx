import { Check, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  {
    id: 'monthly',
    title: 'Monthly Plan',
    price: '$1',
    period: '/ month',
    badge: 'popular',
    bullets: ['Billed every month', 'Cancel anytime'],
  },
  {
    id: 'six_month',
    title: '6-Month Plan',
    price: '$6',
    period: '/ 6 months',
    bullets: ['Save more with long-term access', 'Billed every 6 months', 'Cancel anytime'],
  },
  {
    id: 'lifetime',
    title: 'Lifetime Access',
    price: '$39.99',
    period: ' one-time',
    bullets: ['Pay once, access forever', 'No recurring charges'],
    highlight: true,
  },
]

export default function Pricing({ onSelect }) {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-sky-300 text-xs">Pricing</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">Simple, transparent plans</h2>
          <p className="mt-3 text-sky-200/80">Choose a plan that fits your needs. Upgrade or cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx }}
              className={`relative rounded-2xl p-6 border backdrop-blur-xl bg-white/5 ${p.highlight ? 'border-sky-400/40 shadow-[0_0_0_1px_rgba(56,189,248,0.2)]' : 'border-white/10'}`}>
              {p.badge && (
                <span className="absolute -top-3 right-4 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-sky-500 text-white text-[10px] uppercase tracking-wide">
                  <Star className="w-3 h-3" /> {p.badge}
                </span>
              )}
              <div className="text-white">
                <h3 className="text-lg font-medium opacity-90">{p.title}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-semibold">{p.price}</span>
                  <span className="text-sky-200/80 mb-1">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sky-200/80">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sky-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => onSelect(p.id)} className={`mt-8 w-full inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-colors ${p.highlight ? 'bg-sky-500 text-white hover:bg-sky-400' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  Get started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
