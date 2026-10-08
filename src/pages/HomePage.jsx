import React from 'react'
import { BarChart2, BookOpenText, Calculator, Sparkles, Users, Wand2 } from 'lucide-react'

function HomePage({ setCurrentPage }) {
  const features = [
    {
      icon: BarChart2,
      title: 'Descriptive statistics',
      description: 'Calculate mean, median, mode, variance, standard deviation, quartiles and more.',
    },
    {
      icon: Sparkles,
      title: 'Charts and analysis',
      description: 'Visualize data with histograms, bar charts and trend plots for better understanding.',
    },
    {
      icon: Calculator,
      title: 'Probability tools',
      description: 'Solve basic probability problems and explore common statistical models.',
    },
    {
      icon: Wand2,
      title: 'AI explanations',
      description: 'Get meaningful interpretations and suggestions about your results.',
    },
    {
      icon: Users,
      title: 'Easy data entry',
      description: 'Enter data manually, use examples, and learn how to structure datasets correctly.',
    },
    {
      icon: BookOpenText,
      title: 'Learning support',
      description: 'Use examples, tutorials and common error explanations to improve understanding.',
    },
  ]

  return (
    <div className="space-y-8">
      <section className="card p-8 md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            Statistics • Probability • Data Analysis
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Welcome to StatMutai Analytics
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            A student-friendly platform for analyzing data, calculating statistics, working with probability,
            visualizing trends, and understanding results step by step.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button type="button" className="btn btn-primary" onClick={() => setCurrentPage('analyzer')}>
              Start analyzing data
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => setCurrentPage('tutorial')}>
              View tutorial
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="card p-6">
            <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
              <Icon size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </section>

      <section className="card p-8">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Quick start</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['1. Enter your data', 'Input numbers separated by commas or line breaks.'],
            ['2. Calculate results', 'Get descriptive statistics and visual trends instantly.'],
            ['3. Interpret conclusions', 'Use tutorials and AI-style guidance to understand the data.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {title.split('.')[0]}
              </div>
              <h4 className="mb-1 font-bold text-gray-900">{title}</h4>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
