import { useState } from "react";
import StockForm from "./components/StockForm";
import Calculations from "./components/Calculations";
import AnalysisResult from "./components/AnalysisResult";


export default function App() {
const [formData, setFormData] = useState(null);
const [metrics, setMetrics] = useState(null);


return (
<div>
<h1>Stock Analysis Tool</h1>
<StockForm onSubmit={setFormData} />
{formData && <Calculations data={formData} onCalculated={setMetrics} />}
{metrics && <AnalysisResult company={formData} metrics={metrics} />}
</div>
);
}