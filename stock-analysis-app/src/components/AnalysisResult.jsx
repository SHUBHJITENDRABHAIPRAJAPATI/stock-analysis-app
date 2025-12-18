import { analyzeStock } from "../utils/analysisLogic";


export default function AnalysisResult({ company, metrics }) {
if (!metrics) return null;


return (
<div>
<h2>Analysis for {company.companyName}</h2>
<p><strong>Industry:</strong> {company.industry}</p>


<ul>
<li>Revenue Growth: {metrics.revenueGrowth.toFixed(2)}%</li>
<li>EPS: {metrics.eps.toFixed(2)}</li>
<li>P/E Ratio: {metrics.peRatio.toFixed(2)}</li>
<li>Debt-to-Equity: {metrics.debtToEquity.toFixed(2)}</li>
<li>Free Cash Flow: {metrics.freeCashFlow > 0 ? "Positive" : "Negative"}</li>
</ul>


<p><strong>Final Review:</strong></p>
<p>{analyzeStock(metrics)}</p>
</div>
);
}