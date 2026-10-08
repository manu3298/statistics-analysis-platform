import React, { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import DataAnalyzerPage from './pages/DataAnalyzerPage'
import DescriptiveStatsPage from './pages/DescriptiveStatsPage'
import ProbabilityCalculatorPage from './pages/ProbabilityCalculatorPage'
import TutorialPage from './pages/TutorialPage'
import ErrorHandlerPage from './pages/ErrorHandlerPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'analyzer':
        return <DataAnalyzerPage />
      case 'descriptive':
        return <DescriptiveStatsPage />
      case 'probability':
        return <ProbabilityCalculatorPage />
      case 'tutorial':
        return <TutorialPage />
      case 'errors':
        return <ErrorHandlerPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container py-8">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
