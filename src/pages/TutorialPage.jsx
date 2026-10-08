import React, { useState } from 'react'

function TutorialPage() {
  const [openItem, setOpenItem] = useState(1)

  const tutorials = [
    {
      id: 1,
      title: 'How to enter data',
      content: `1. Go to the Data Analyzer page.\n2. Type values separated by commas or place each value on a new line.\n3. Example: 12, 18, 20, 25, 30\n4. Click "Analyze Data" to generate the results.`,
    },
    {
      id: 2,
      title: 'Understanding mean and median',
      content: `Mean = sum of all values ÷ number of values.\nMedian = middle number after sorting the data.\nExample: data = 4, 7, 9, 12, 15\nMean = 9.4 and Median = 9.`,
    },
    {
      id: 3,
      title: 'Probability basics',
      content: `Probability = favorable outcomes ÷ total outcomes.\nExample: P(rolling a 3 on a die) = 1/6 ≈ 0.1667 = 16.67%.`,
    },
    {
      id: 4,
      title: 'How to read charts',
      content: `A histogram shows frequency distribution.\nA line chart shows trend across ordered data.\nA bar chart compares categories or values.`,
    },
  ]

  return (
    <div className="card p-6">
      <h2 className="mb-2 text-3xl font-bold text-gray-900">Tutorials and examples</h2>
      <p className="mb-6 text-gray-600">Learn how to use the tools correctly and understand common results.</p>

      <div className="space-y-3">
        {tutorials.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
              className="flex w-full items-center justify-between bg-slate-50 px-4 py-3 text-left font-semibold text-gray-900"
            >
              {item.title}
              <span>{openItem === item.id ? '−' : '+'}</span>
            </button>

            {openItem === item.id && (
              <div className="whitespace-pre-line bg-white px-4 py-4 text-sm text-gray-700">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TutorialPage
