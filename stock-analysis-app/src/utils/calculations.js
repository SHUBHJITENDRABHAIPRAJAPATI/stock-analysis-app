// utils/calculations.js


export function calculateRevenueGrowth(current, previous) {
if (previous === 0) return 0;
return ((current - previous) / previous) * 100;
}


export function calculateEPS(netIncome, sharesOutstanding) {
if (sharesOutstanding === 0) return 0;
return netIncome / sharesOutstanding;
}


export function calculatePERatio(price, eps) {
if (eps === 0) return 0;
return price / eps;
}


export function calculateDebtToEquity(totalDebt, totalEquity) {
if (totalEquity === 0) return 0;
return totalDebt / totalEquity;
}