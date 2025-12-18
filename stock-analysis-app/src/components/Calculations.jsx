import { useEffect } from "react";
import {
calculateRevenueGrowth,
calculateEPS,
calculatePERatio,
calculateDebtToEquity
} from "../utils/calculations";


export default function Calculations({ data, onCalculated }) {
useEffect(() => {
const eps = calculateEPS(data.netIncome, data.sharesOutstanding);


const metrics = {
revenueGrowth: calculateRevenueGrowth(data.currentRevenue, data.previousRevenue),
eps,
peRatio: calculatePERatio(data.stockPrice, eps),
debtToEquity: calculateDebtToEquity(data.totalDebt, data.totalEquity),
freeCashFlow: data.freeCashFlow
};


onCalculated(metrics);
}, [data, onCalculated]);


return null;
}