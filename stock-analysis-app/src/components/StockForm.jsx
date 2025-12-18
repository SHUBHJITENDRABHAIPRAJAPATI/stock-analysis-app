import { useState } from "react";


export default function StockForm({ onSubmit }) {
const [formData, setFormData] = useState({});


function handleChange(e) {
const { name, value } = e.target;
setFormData({
...formData,
[name]: isNaN(value) ? value : Number(value)
});
}


function handleSubmit(e) {
e.preventDefault();
onSubmit(formData);
}


return (
<form onSubmit={handleSubmit}>
<h2>Company Information</h2>
<input name="companyName" placeholder="Company Name" onChange={handleChange} required />
<input name="industry" placeholder="Industry" onChange={handleChange} required />


<h2>Financial Data</h2>
<input type="number" name="currentRevenue" placeholder="Revenue (Current Year)" onChange={handleChange} required />
<input type="number" name="previousRevenue" placeholder="Revenue (Previous Year)" onChange={handleChange} required />
<input type="number" name="netIncome" placeholder="Net Income" onChange={handleChange} required />
<input type="number" name="freeCashFlow" placeholder="Free Cash Flow" onChange={handleChange} required />
<input type="number" name="totalDebt" placeholder="Total Debt" onChange={handleChange} required />
<input type="number" name="totalEquity" placeholder="Total Equity" onChange={handleChange} required />
<input type="number" name="sharesOutstanding" placeholder="Shares Outstanding" onChange={handleChange} required />
<input type="number" step="0.01" name="stockPrice" placeholder="Current Stock Price" onChange={handleChange} required />


<button type="submit">Analyze Stock</button>
</form>
);
}