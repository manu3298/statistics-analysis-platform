import React from 'react'
import { Home, BarChart3, Calculator, BookOpen, AlertTriangle } from 'lucide-react'

function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'analyzer', label: 'Data Analyzer', icon: BarChart3 },
    { id: 'descriptive', label: 'Descriptive Stats', icon: BarChart3 },
    { id: 'probability', label: 'Probability', icon: Calculator },
    { id: 'tutorial', label: 'Tutorial', icon: BookOpen },
    { id: 'errors', label: 'Help & Errors', icon: AlertTriangle },
  ]

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="container">
        <div className="flex gap-2 overflow-x-auto py-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = currentPage === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={16} />
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
