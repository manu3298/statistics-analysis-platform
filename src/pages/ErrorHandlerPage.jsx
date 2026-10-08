import React from 'react'

function ErrorHandlerPage() {
  const errorSolutions = [
    {
      error: 'Invalid number entered',
      solution: 'Enter only numeric values. Remove commas if necessary or separate values with commas or line breaks only.',
    },
    {
      error: 'No data entered',
      solution: 'Provide at least one numeric value before running the analysis.',
    },
    {
      error: 'Probability is not valid',
      solution: 'Favorable outcomes cannot exceed total outcomes. Check the numbers entered.',
    },
    {
      error: 'Chart not displayed',
      solution: 'Add more data points or ensure the values are valid numbers.',
    },
  ]

  const quickTips = [
    'Use commas or new lines to separate numbers.',
    'Clean out non-numeric symbols before analyzing data.',
    'Use median when outliers heavily affect the mean.',
    'Check if your probability value is between 0 and 1 or 0% and 100%.',
  ]

  return (
    <div className="card p-6">
      <h2 className="mb-2 text-3xl font-bold text-gray-900">Help and error guide</h2>
      <p className="mb-6 text-gray-600">Learn how to troubleshoot common issues when using the platform.</p>

      <div className="space-y-4">
        {errorSolutions.map((item) => (
          <div key={item.error} className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-4">
            <h3 className="mb-1 font-bold text-red-800">{item.error}</h3>
            <p className="text-sm text-red-700">{item.solution}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-emerald-50 p-5">
        <h3 className="mb-3 text-xl font-bold text-gray-900">Quick tips</h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          {quickTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ErrorHandlerPage
