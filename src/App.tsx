import React from "react"
import Calculator from "./components/StringCalculator"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Calculator />
    </div>
  )
}

export default App
