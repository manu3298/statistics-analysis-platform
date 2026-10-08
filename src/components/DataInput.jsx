import React, { useState } from 'react'

function DataInput({ onSubmit, onClear }) {
  const [input, setInput] = useState('')

  const loadExample = () => {
    setInput('12, 18, 20, 24, 28, 30, 15, 22, 26')
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block font-semibold text-gray-700">Enter your data</label>
        <textarea
          rows="6"
          value={input}
          placeholder="Example: 12, 18, 20, 24, 30
Or use one number per line"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary" onClick={() => onSubmit(input)}>
          Analyze data
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClear}>
          Clear
        </button>
        <button type="button" className="btn btn-secondary" onClick={loadExample}>
          Load example
        </button>
      </div>
    </div>
  )
}

export default DataInput
