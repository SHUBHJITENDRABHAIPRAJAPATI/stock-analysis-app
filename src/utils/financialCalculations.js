/**
 * Calculate financial metrics and generate plain-English insights
 */

/**
 * Calculate Revenue Growth Rate
 * Formula: ((Current Revenue - Previous Revenue) / Previous Revenue) * 100
 */
export function calculateRevenueGrowth(currentRevenue, previousRevenue) {
  const current = parseFloat(currentRevenue);
  const previous = parseFloat(previousRevenue);
  
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

/**
 * Calculate Earnings Per Share (EPS)
 * Formula: Net Income / Total Shares Outstanding
 */
export function calculateEPS(netIncome, totalShares) {
  const income = parseFloat(netIncome);
  const shares = parseFloat(totalShares);
  
  if (shares === 0) return 0;
  return income / shares;
}

/**
 * Calculate Price-to-Earnings (P/E) Ratio
 * Formula: Market Price per Share / Earnings Per Share
 */
export function calculatePERatio(marketPrice, eps) {
  const price = parseFloat(marketPrice);
  
  if (eps === 0) return 0;
  return price / eps;
}

/**
 * Calculate Debt-to-Equity Ratio
 * Formula: Total Debt / Total Equity
 */
export function calculateDebtToEquity(totalDebt, totalEquity) {
  const debt = parseFloat(totalDebt);
  const equity = parseFloat(totalEquity);
  
  if (equity === 0) return 0;
  return debt / equity;
}

/**
 * Generate plain-English insight for Revenue Growth
 */
function getRevenueGrowthInsight(growth) {
  if (growth > 20) {
    return {
      status: 'excellent',
      message: 'Excellent revenue growth! The company is expanding rapidly, showing strong market demand and business momentum.'
    };
  } else if (growth > 10) {
    return {
      status: 'positive',
      message: 'Strong revenue growth. The company is growing at a healthy pace, indicating good business performance.'
    };
  } else if (growth > 0) {
    return {
      status: 'moderate',
      message: 'Moderate revenue growth. The company is growing but at a slower pace. This could be normal for mature companies.'
    };
  } else if (growth > -10) {
    return {
      status: 'warning',
      message: 'Revenue is declining slightly. This could be a red flag worth investigating further.'
    };
  } else {
    return {
      status: 'negative',
      message: 'Significant revenue decline. The company is losing sales, which is a serious concern for investors.'
    };
  }
}

/**
 * Generate plain-English insight for EPS
 */
function getEPSInsight(eps) {
  if (eps > 10) {
    return {
      status: 'excellent',
      message: 'Very high earnings per share! The company is highly profitable relative to its share count.'
    };
  } else if (eps > 5) {
    return {
      status: 'positive',
      message: 'Good earnings per share. The company shows solid profitability for shareholders.'
    };
  } else if (eps > 0) {
    return {
      status: 'moderate',
      message: 'Positive but modest earnings per share. The company is profitable but returns are moderate.'
    };
  } else {
    return {
      status: 'negative',
      message: 'Negative earnings per share means the company is losing money. This is a significant risk factor.'
    };
  }
}

/**
 * Generate plain-English insight for P/E Ratio
 */
function getPERatioInsight(peRatio) {
  if (peRatio <= 0) {
    return {
      status: 'negative',
      message: 'Invalid or negative P/E ratio, typically indicating the company is not profitable.'
    };
  } else if (peRatio < 15) {
    return {
      status: 'positive',
      message: 'Low P/E ratio suggests the stock might be undervalued. Investors are paying less for each dollar of earnings.'
    };
  } else if (peRatio < 25) {
    return {
      status: 'moderate',
      message: 'Moderate P/E ratio, which is typical for many established companies. The stock is fairly valued by the market.'
    };
  } else if (peRatio < 40) {
    return {
      status: 'warning',
      message: 'High P/E ratio indicates investors expect strong future growth, but the stock may be overvalued.'
    };
  } else {
    return {
      status: 'concerning',
      message: 'Very high P/E ratio suggests the stock might be significantly overvalued or investors expect exceptional growth.'
    };
  }
}

/**
 * Generate plain-English insight for Debt-to-Equity Ratio
 */
function getDebtToEquityInsight(ratio) {
  if (ratio < 0.3) {
    return {
      status: 'excellent',
      message: 'Low debt-to-equity ratio. The company has minimal debt and strong financial stability.'
    };
  } else if (ratio < 1.0) {
    return {
      status: 'positive',
      message: 'Healthy debt-to-equity ratio. The company has a good balance between debt and equity financing.'
    };
  } else if (ratio < 2.0) {
    return {
      status: 'warning',
      message: 'Moderate debt-to-equity ratio. The company has significant debt, which increases financial risk.'
    };
  } else {
    return {
      status: 'negative',
      message: 'High debt-to-equity ratio. The company is heavily leveraged, posing substantial financial risk.'
    };
  }
}

/**
 * Generate overall summary based on all metrics
 */
function generateSummary(metrics, insights) {
  const positiveCount = Object.values(insights).filter(
    insight => insight.status === 'excellent' || insight.status === 'positive'
  ).length;

  const negativeCount = Object.values(insights).filter(
    insight => insight.status === 'negative' || insight.status === 'concerning'
  ).length;

  if (positiveCount >= 3) {
    return 'Overall, this company shows strong financial health with mostly positive indicators. The fundamentals suggest a potentially good investment opportunity, but always consider other factors like industry trends and competition.';
  } else if (negativeCount >= 3) {
    return 'Overall, this company shows concerning financial signals with multiple red flags. Investors should be cautious and conduct thorough research before investing. Consider why these metrics are weak and if there\'s a turnaround plan.';
  } else {
    return 'This company shows mixed financial signals. Some metrics are strong while others need attention. A balanced approach is recommended - weigh the positives against the negatives and consider your investment goals and risk tolerance.';
  }
}

/**
 * Main function to analyze financial data
 */
export function analyzeFinancialData(formData) {
  const {
    companyName,
    currentRevenue,
    previousRevenue,
    netIncome,
    totalShares,
    marketPrice,
    totalDebt,
    totalEquity
  } = formData;

  // Calculate metrics
  const revenueGrowth = calculateRevenueGrowth(currentRevenue, previousRevenue);
  const eps = calculateEPS(netIncome, totalShares);
  const peRatio = calculatePERatio(marketPrice, eps);
  const debtToEquity = calculateDebtToEquity(totalDebt, totalEquity);

  const metrics = {
    revenueGrowth,
    eps,
    peRatio,
    debtToEquity
  };

  // Generate insights
  const insights = {
    revenueGrowth: getRevenueGrowthInsight(revenueGrowth),
    eps: getEPSInsight(eps),
    peRatio: getPERatioInsight(peRatio),
    debtToEquity: getDebtToEquityInsight(debtToEquity)
  };

  // Generate summary
  const summary = generateSummary(metrics, insights);
  insights.summary = summary;

  return {
    companyName,
    metrics,
    insights
  };
}
