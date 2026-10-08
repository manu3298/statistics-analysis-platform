import React, { useState } from 'react'
import DataInput from '../components/DataInput'
import StatisticsOutput from '../components/StatisticsOutput'
import ChartDisplay from '../components/ChartDisplay'
import { calculateDescriptiveStats } from '../utils/statistics'

function DataAnalyzerPage() {
  const [data, setData] = useState([])
  const [stats, setStats] = useState(null)
  const [error, setError] = useState('')

  const handleDataInput = (inputData) => {
    try {
      const numericData = inputData
        .split(/[\n,\s]+/)
        .map((value) => value.trim())
        .filter(Boolean)
        .map((value) => {
          const num = Number(value)
          if (Number.isNaN(num)) {
            throw new Error(`Invalid number entered: ${value}`)
          }
          return num
        })

      if (numericData.length === 0) {
        throw new Error('Please enter at least one number')
      }

      setError('')
      setData(numericData)
      setStats(calculateDescriptiveStats(numericData))
    } catch (err) {
      setStats(null)
      setError(err.message)
    }
  }

  const handleClear = () => {
    setData([])
    setStats(null)
    setError('')
  }

  return (
    <div className="space-y-6">
      <section className="card p-6">
        <h2 className="mb-2 text-3xl font-bold text-gray-900">Data Analyzer</h2>
        <p className="mb-6 text-gray-600">Enter numeric data and generate instant statistics, visual charts, and basic interpretations.</p>
        <DataInput onSubmit={handleDataInput} onClear={handleClear} />
      </section>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}

      {stats && (
        <>
          <StatisticsOutput stats={stats} />
          <ChartDisplay data={data} />
        </>
      )}
    </div>
  )
}

export default DataAnalyzerPage
