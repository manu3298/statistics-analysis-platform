import React from 'react'
import { BarChart3, Sparkles } from 'lucide-react'

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 text-white shadow-lg">
      <div className="container flex items-center justify-between gap-4 py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/15 p-3">
            <BarChart3 size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">StatMutai Analytics</h1>
            <p className="text-sm text-blue-100">AI-powered statistics and probability toolkit</p>
          </div>
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium md:flex">
          <Sparkles size={17} />
          <span>Powered by AI insights</span>
        </div>
      </div>
    </header>
  )
}

export default Header
