// utils/analysisLogic.js


export function analyzeStock(metrics) {
const { revenueGrowth, eps, peRatio, debtToEquity, freeCashFlow } = metrics;


const growthAssessment = revenueGrowth > 5
? "Revenue is growing at a healthy rate."
: "Revenue growth is weak or flat.";


const profitabilityAssessment = eps > 0
? "The company is profitable."
: "The company is not profitable.";


const debtAssessment = debtToEquity < 1
? "Debt levels appear reasonable."
: "Debt levels are relatively high.";


let valuationAssessment = "Valuation appears fair.";
if (peRatio > 25) valuationAssessment = "The stock looks expensive based on P/E.";
if (peRatio > 0 && peRatio < 15) valuationAssessment = "The stock looks attractively priced.";


const cashFlowAssessment = freeCashFlow > 0
? "The company generates positive free cash flow."
: "The company is burning cash.";


return `${growthAssessment} ${profitabilityAssessment} ${cashFlowAssessment} ${debtAssessment} ${valuationAssessment}`;
}