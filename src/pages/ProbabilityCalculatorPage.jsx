import React, { useState } from 'react'

function ProbabilityCalculatorPage() {
  const [calculatorType, setCalculatorType] = useState('basic')
  const [result, setResult] = useState(null)

  const calculateBasicProbability = (successes, total) => {
    if (total <= 0) return { error: 'Total must be greater than zero.' }
    if (successes < 0 || successes > total) return { error: 'Favorable outcomes must be between 0 and total.' }

    const decimal = successes / total
    return {
      decimal: decimal.toFixed(4),
      percent: (decimal * 100).toFixed(2),
      fraction: `${successes}/${total}`,
    }
  }

  const handleBasicCalculation = () => {
    const favorable = Number(document.getElementById('favorable')?.value || 0)
    const total = Number(document.getElementById('total')?.value || 0)
    setResult(calculateBasicProbability(favorable, total))
  }

  const calculators = ['basic', 'binomial', 'normal', 'poisson']

  return (
    <div className="card p-6">
      <h2 className="mb-2 text-3xl font-bold text-gray-900">Probability Calculator</h2>
      <p className="mb-6 text-gray-600">Solve probability problems and explore basic statistical models.</p>

      <div className="mb-6 flex flex-wrap gap-3">
        {calculators.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setCalculatorType(type)}
            className={`rounded-xl px-4 py-2 font-semibold capitalize transition ${
              calculatorType === type ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {calculatorType === 'basic' && (
        <div className="space-y-4">
          <div>
            <label className="mb-2 block font-semibold text-gray-700">Favorable outcomes</label>
            <input id="favorable" type="number" placeholder="Example: 5" />
          </div>
          <div>
            <label className="mb-2 block font-semibold text-gray-700">Total outcomes</label>
            <input id="total" type="number" placeholder="Example: 20" />
          </div>

          <button type="button" className="btn btn-primary" onClick={handleBasicCalculation}>
            Calculate probability
          </button>

          {result && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-green-900">
              {result.error ? (
                <p className="font-semibold">{result.error}</p>
              ) : (
                <div className="space-y-2">
                  <p><strong>Fraction:</strong> {result.fraction}</p>
                  <p><strong>Decimal:</strong> {result.decimal}</p>
                  <p><strong>Percentage:</strong> {result.percent}%</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {calculatorType !== 'basic' && (
        <div className="rounded-2xl bg-slate-50 p-5 text-slate-700">
          <p className="font-semibold">{calculatorType.toUpperCase()} calculator</p>
          <p className="mt-2 text-sm">
            This advanced probability model is planned for the next stage of the platform. The core calculator is ready,
            and future updates will add binomial, normal and Poisson computations.
          </p>
        </div>
      )}
    </div>
  )
}

export default ProbabilityCalculatorPage
