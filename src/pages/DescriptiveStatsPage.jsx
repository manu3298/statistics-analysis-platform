import React, { useState } from 'react'

function DescriptiveStatsPage() {
  const [activeTab, setActiveTab] = useState('formulas')

  const formulas = [
    { name: 'Mean', formula: 'μ = Σx / n', description: 'Average value of the dataset.' },
    { name: 'Median', formula: 'Middle value when ordered', description: 'Best for data with outliers or skewness.' },
    { name: 'Mode', formula: 'Most common value', description: 'Useful when frequency matters most.' },
    { name: 'Variance', formula: 'σ² = Σ(x - μ)² / n', description: 'Measures spread around the mean.' },
    { name: 'Standard Deviation', formula: 'σ = √(Σ(x - μ)² / n)', description: 'Average distance from the mean.' },
    { name: 'Range', formula: 'Max - Min', description: 'Quick difference between highest and lowest values.' },
    { name: 'Q1', formula: '25th percentile', description: 'Lower quarter of the sorted data.' },
    { name: 'Q3', formula: '75th percentile', description: 'Upper quarter of the sorted data.' },
    { name: 'IQR', formula: 'Q3 - Q1', description: 'Measures spread of the middle 50%.' },
  ]

  return (
    <div className="card p-6">
      <h2 className="mb-2 text-3xl font-bold text-gray-900">Descriptive Statistics</h2>
      <p className="mb-6 text-gray-600">Understand the core values and formulas used in statistics and data analysis.</p>

      <div className="mb-6 flex flex-wrap gap-3">
        {['formulas', 'guide'].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-xl px-4 py-2 font-semibold transition ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            {tab === 'formulas' ? 'Formulas' : 'Interpretation guide'}
          </button>
        ))}
      </div>

      {activeTab === 'formulas' ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {formulas.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="mb-2 text-lg font-bold text-gray-900">{item.name}</h3>
              <div className="mb-2 rounded-lg bg-white p-3 font-mono text-sm text-slate-700">{item.formula}</div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4 text-gray-700">
          <div className="rounded-2xl bg-blue-50 p-5">
            <h3 className="mb-2 text-lg font-bold text-gray-900">How to interpret results</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Mean</strong> tells you the average value.</li>
              <li><strong>Median</strong> is more reliable when there are extreme values.</li>
              <li><strong>Standard deviation</strong> tells how spread out the dataset is.</li>
              <li><strong>Range</strong> shows the difference between the minimum and maximum value.</li>
              <li><strong>Quartiles</strong> divide the data into four equal parts.</li>
              <li><strong>Mode</strong> identifies the most frequent value.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default DescriptiveStatsPage
