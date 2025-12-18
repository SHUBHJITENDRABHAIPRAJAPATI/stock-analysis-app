import './AnalysisResults.css';

function AnalysisResults({ analysis }) {
  if (!analysis) return null;

  const { companyName, metrics, insights } = analysis;

  const getStatusClass = (status) => {
    switch (status) {
      case 'excellent':
      case 'positive':
        return 'status-positive';
      case 'warning':
      case 'moderate':
        return 'status-warning';
      case 'negative':
      case 'concerning':
        return 'status-negative';
      default:
        return '';
    }
  };

  return (
    <div className="results-container">
      <h2>Analysis Results for {companyName}</h2>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Revenue Growth</h3>
          <div className="metric-value">{metrics.revenueGrowth.toFixed(2)}%</div>
          <p className={`metric-status ${getStatusClass(insights.revenueGrowth.status)}`}>
            {insights.revenueGrowth.message}
          </p>
        </div>

        <div className="metric-card">
          <h3>Earnings Per Share (EPS)</h3>
          <div className="metric-value">${metrics.eps.toFixed(2)}</div>
          <p className={`metric-status ${getStatusClass(insights.eps.status)}`}>
            {insights.eps.message}
          </p>
        </div>

        <div className="metric-card">
          <h3>Price-to-Earnings (P/E) Ratio</h3>
          <div className="metric-value">{metrics.peRatio.toFixed(2)}</div>
          <p className={`metric-status ${getStatusClass(insights.peRatio.status)}`}>
            {insights.peRatio.message}
          </p>
        </div>

        <div className="metric-card">
          <h3>Debt-to-Equity Ratio</h3>
          <div className="metric-value">{metrics.debtToEquity.toFixed(2)}</div>
          <p className={`metric-status ${getStatusClass(insights.debtToEquity.status)}`}>
            {insights.debtToEquity.message}
          </p>
        </div>
      </div>

      <div className="summary-section">
        <h3>Overall Summary</h3>
        <p className="summary-text">{insights.summary}</p>
      </div>
    </div>
  );
}

export default AnalysisResults;
