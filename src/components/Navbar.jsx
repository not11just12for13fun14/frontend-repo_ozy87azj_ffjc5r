import { Menu } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-sky-400/20 ring-1 ring-sky-400/30" />
          <span className="text-white font-medium">BluePay</span>
        </div>
        <button className="text-white/80 hover:text-white"><Menu className="w-5 h-5"/></button>
      </div>
    </header>
  )
}
