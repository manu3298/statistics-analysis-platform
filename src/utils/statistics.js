export function calculateDescriptiveStats(data) {
  if (!data || data.length === 0) {
    throw new Error('Data is empty')
  }

  const sorted = [...data].sort((a, b) => a - b)
  const count = data.length
  const mean = data.reduce((sum, value) => sum + value, 0) / count

  const median = count % 2 === 0
    ? (sorted[count / 2 - 1] + sorted[count / 2]) / 2
    : sorted[Math.floor(count / 2)]

  const frequencyMap = {}
  data.forEach((value) => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1
  })

  let mode = data[0]
  let maxFrequency = 0
  Object.entries(frequencyMap).forEach(([key, value]) => {
    if (value > maxFrequency) {
      maxFrequency = value
      mode = Number(key)
    }
  })

  const variance = data.reduce((sum, value) => sum + (value - mean) ** 2, 0) / count
  const stdDev = Math.sqrt(variance)
  const min = sorted[0]
  const max = sorted[count - 1]
  const range = max - min

  const q1 = percentile(sorted, 0.25)
  const q2 = median
  const q3 = percentile(sorted, 0.75)
  const iqr = q3 - q1

  return {
    count,
    mean,
    median,
    mode,
    stdDev,
    variance,
    min,
    max,
    range,
    q1,
    q2,
    q3,
    iqr,
  }
}

function percentile(sortedData, fraction) {
  const index = (sortedData.length - 1) * fraction
  const lower = Math.floor(index)
  const upper = Math.ceil(index)

  if (lower === upper) {
    return sortedData[lower]
  }

  const weight = index - lower
  return sortedData[lower] * (1 - weight) + sortedData[upper] * weight
}

export function calculateProbability(favorable, total) {
  if (total <= 0) {
    throw new Error('Total must be greater than zero.')
  }
  if (favorable < 0 || favorable > total) {
    throw new Error('Favorable outcomes must be between 0 and total.')
  }

  return favorable / total
}
