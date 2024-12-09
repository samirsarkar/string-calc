import React, { useState } from "react"
import { stringCalculatorAdd } from "../utils/calculator"

const Calculator: React.FC = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = () => {
    try {
      const sum = stringCalculatorAdd(input)
      setResult(sum)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      setResult(null)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">String Calculator</h1>
      <div className="mb-4">
        <label
          htmlFor="numbers"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter numbers (comma or newline separated)
        </label>
        <input
          id="numbers"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="e.g. 1,2,3 or 1\n2,3 or //;\n1;2;3"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Calculate
      </button>
      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      {result !== null && !error && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Result: {result}
        </div>
      )}
    </div>
  )
}

export default Calculator
