import { useState } from 'react';
import './FinancialDataForm.css';

function FinancialDataForm({ onAnalyze }) {
  const [formData, setFormData] = useState({
    companyName: '',
    currentRevenue: '',
    previousRevenue: '',
    netIncome: '',
    totalShares: '',
    marketPrice: '',
    totalDebt: '',
    totalEquity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(formData);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      currentRevenue: '',
      previousRevenue: '',
      netIncome: '',
      totalShares: '',
      marketPrice: '',
      totalDebt: '',
      totalEquity: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Enter Financial Data</h2>
      <p className="form-description">
        Input financial metrics from Google Finance, company reports, or other sources
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g., Apple Inc."
            required
          />
        </div>

        <div className="form-section">
          <h3>Revenue Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="currentRevenue">Current Year Revenue ($)</label>
              <input
                type="number"
                id="currentRevenue"
                name="currentRevenue"
                value={formData.currentRevenue}
                onChange={handleChange}
                placeholder="e.g., 394328000000"
                step="any"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="previousRevenue">Previous Year Revenue ($)</label>
              <input
                type="number"
                id="previousRevenue"
                name="previousRevenue"
                value={formData.previousRevenue}
                onChange={handleChange}
                placeholder="e.g., 365817000000"
                step="any"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Earnings Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="netIncome">Net Income ($)</label>
              <input
                type="number"
                id="netIncome"
                name="netIncome"
                value={formData.netIncome}
                onChange={handleChange}
                placeholder="e.g., 96995000000"
                step="any"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalShares">Total Shares Outstanding</label>
              <input
                type="number"
                id="totalShares"
                name="totalShares"
                value={formData.totalShares}
                onChange={handleChange}
                placeholder="e.g., 15550061000"
                step="any"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Market & Debt Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="marketPrice">Current Stock Price ($)</label>
              <input
                type="number"
                id="marketPrice"
                name="marketPrice"
                value={formData.marketPrice}
                onChange={handleChange}
                placeholder="e.g., 175.50"
                step="any"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalDebt">Total Debt ($)</label>
              <input
                type="number"
                id="totalDebt"
                name="totalDebt"
                value={formData.totalDebt}
                onChange={handleChange}
                placeholder="e.g., 111088000000"
                step="any"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="totalEquity">Total Equity ($)</label>
            <input
              type="number"
              id="totalEquity"
              name="totalEquity"
              value={formData.totalEquity}
              onChange={handleChange}
              placeholder="e.g., 62146000000"
              step="any"
              required
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">Analyze</button>
          <button type="button" onClick={handleReset} className="btn-secondary">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default FinancialDataForm;
