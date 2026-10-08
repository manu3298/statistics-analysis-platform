import React from 'react'
import { BarChart, Bar, LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

function ChartDisplay({ data }) {
  if (!data || data.length === 0) {
    return null
  }

  const sortedData = [...data].sort((a, b) => a - b)

  const histogramData = Array.from({ length: Math.min(8, sortedData.length) }, (_, index) => {
    const start = sortedData[Math.floor((index / Math.min(8, sortedData.length)) * sortedData.length)] ?? 0
    const end = sortedData[Math.min(sortedData.length - 1, Math.ceil(((index + 1) / Math.min(8, sortedData.length)) * sortedData.length) - 1)] ?? 0

    return {
      range: `${start.toFixed(1)}-${end.toFixed(1)}`,
      count: sortedData.filter((value) => value >= start && value <= end).length,
    }
  })

  const lineData = sortedData.map((value, index) => ({
    index: index + 1,
    value,
  }))

  return (
    <div className="card p-6">
      <h3 className="mb-6 text-3xl font-bold text-gray-900">Charts and visual analysis</h3>

      <div className="mb-8">
        <h4 className="mb-3 text-xl font-bold text-gray-800">Histogram</h4>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={histogramData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-bold text-gray-800">Ordered data trend</h4>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="index" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default ChartDisplay
