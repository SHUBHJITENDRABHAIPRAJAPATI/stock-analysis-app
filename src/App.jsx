import { useState } from 'react'
import FinancialDataForm from './components/FinancialDataForm'
import AnalysisResults from './components/AnalysisResults'
import { analyzeFinancialData } from './utils/financialCalculations'
import './App.css'

function App() {
  const [analysisResult, setAnalysisResult] = useState(null)

  const handleAnalyze = (formData) => {
    const result = analyzeFinancialData(formData);
    setAnalysisResult(result);
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Stock Analysis App</h1>
        <p className="app-tagline">
          Make rational, numbers-driven investment decisions without emotional bias
        </p>
      </header>
      
      <main className="app-main">
        <FinancialDataForm onAnalyze={handleAnalyze} />
        {analysisResult && <AnalysisResults analysis={analysisResult} />}
      </main>

      <footer className="app-footer">
        <p>
          Enter financial data manually from sources like Google Finance or company reports. 
          All calculations are performed locally in your browser.
        </p>
      </footer>
    </div>
  )
}

export default App
