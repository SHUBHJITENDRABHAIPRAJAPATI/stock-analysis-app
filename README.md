# Stock Analysis App

A React-based Stock Analysis App that helps users evaluate a company's financial health through manual data entry. This frontend-only tool empowers investors to make rational, numbers-driven decisions without emotional bias.

## Features

- **Manual Data Entry**: Input financial metrics from sources like Google Finance, Yahoo Finance, or company annual reports
- **Key Financial Ratio Calculations**:
  - Revenue Growth Rate
  - Earnings Per Share (EPS)
  - Price-to-Earnings (P/E) Ratio
  - Debt-to-Equity Ratio
- **Plain-English Insights**: Clear, understandable explanations of what each metric means for investors
- **No API Dependencies**: All calculations performed locally in your browser
- **Clean, User-Friendly Interface**: Simple form-based input with visual results display

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SHUBHJITENDRABHAIPRAJAPATI/stock-analysis-app.git
cd stock-analysis-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## How to Use

1. **Enter Company Name**: Start by entering the company you want to analyze
2. **Input Financial Data**: Fill in the following metrics:
   - Current Year Revenue
   - Previous Year Revenue
   - Net Income
   - Total Shares Outstanding
   - Current Stock Price
   - Total Debt
   - Total Equity
3. **Analyze**: Click the "Analyze" button
4. **Review Results**: View calculated ratios and plain-English insights

### Where to Find Financial Data

- **Google Finance**: Search for a stock ticker and find financial data in the "Financials" tab
- **Yahoo Finance**: Look under "Statistics" and "Financials" sections
- **Company Annual Reports (10-K)**: Available on company investor relations websites or SEC EDGAR
- **Company Quarterly Reports (10-Q)**: For more recent data

## Financial Metrics Explained

### Revenue Growth
Measures how quickly a company's sales are increasing year-over-year.
- **Formula**: ((Current Revenue - Previous Revenue) / Previous Revenue) × 100

### Earnings Per Share (EPS)
Shows how much profit the company makes per share of stock.
- **Formula**: Net Income / Total Shares Outstanding

### Price-to-Earnings (P/E) Ratio
Indicates how much investors are willing to pay for each dollar of earnings.
- **Formula**: Market Price per Share / Earnings Per Share

### Debt-to-Equity Ratio
Measures the company's financial leverage and risk level.
- **Formula**: Total Debt / Total Equity

## Technology Stack

- **React 19**: UI library
- **Vite**: Build tool and development server
- **CSS3**: Styling
- **JavaScript**: Logic and calculations

## Project Structure

```
stock-analysis-app/
├── src/
│   ├── components/
│   │   ├── FinancialDataForm.jsx      # Input form component
│   │   ├── FinancialDataForm.css
│   │   ├── AnalysisResults.jsx        # Results display component
│   │   └── AnalysisResults.css
│   ├── utils/
│   │   └── financialCalculations.js   # Financial ratio calculations
│   ├── App.jsx                         # Main app component
│   ├── App.css
│   ├── index.css                       # Global styles
│   └── main.jsx                        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer

This tool is for educational and informational purposes only. It does not constitute financial advice. Always conduct thorough research and consult with financial professionals before making investment decisions.
