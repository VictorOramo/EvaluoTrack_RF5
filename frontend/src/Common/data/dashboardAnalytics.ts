// Import Images
import chrome from 'assets/images/brands/chrome.png'
import firefox from 'assets/images/brands/firefox.png'
import safari from 'assets/images/brands/safari.png'
import opera from 'assets/images/brands/opera.png'
import microsoft from 'assets/images/brands/microsoft.png'
import microsoft2 from 'assets/images/brands/microsoft2.png'
import chromium from 'assets/images/brands/chromium.png'

const BrowserData = [
  {
    image: chrome,
    Browsers: ' Google Chrome',
    Click: '640',
    Rate: '86.01%'
  },
  {
    image: firefox,
    Browsers: ' Firefox',
    Click: '274',
    Rate: '59.22%'
  },
  {
    image: safari,
    Browsers: ' Safari',
    Click: '591',
    Rate: '71.36%'
  },
  {
    image: opera,
    Browsers: ' Opera',
    Click: '456',
    Rate: '63.82%'
  },
  {
    image: microsoft,
    Browsers: ' Microsoft Edge',
    Click: '312',
    Rate: '57.48%'
  },
  {
    image: microsoft2,
    Browsers: ' Internet Explorer',
    Click: '164',
    Rate: '77.21%'
  },
  {
    image: chromium,
    Browsers: ' Chromium',
    Click: '36',
    Rate: '18.90%'
  },
]

// Sale data
const saleData = [
  {
    id: 1,
    name: "TIME ON SALE",
    amount: 32,
    amount2: 12,
    suffix: 'M',
    suffix2: 's',
    perstange: "+21.36 %",
    discription: "Analytics for last week",
    className:"shadow-none border-end-md border-bottom rounded-0 mb-0",
    series: [70],
    dataColors: '["--tb-primary"]',
    isArrow: true
  },
  {
    id: 2,
    name: "GOAL COMPLETIONS",
    amount: 254157,
    perstange: "+6.30 %",
    discription: "Analytics for last week",
    className:"shadow-none border-bottom rounded-0 mb-0",
    series: [74.52],
    dataColors: '["--tb-dark"]',
    isArrow: true
  },
  {
    id: 3,
    name: "BOUNCE RATE",
    amount: 68,
    perstange: "+2.01 %",
    suffix: "%",
    discription: "Analytics for last week",
    className:"shadow-none border-end-md rounded-0 mb-0",
    series: [81.32],
    dataColors: '["--tb-danger"]',
    isArrow: false
  },
  {
    id: 4,
    name: "NEW SESSIONS",
    amount: 32548,
    perstange: "+10.42 %",
    discription: "than last week",
    className:"shadow-none border-end-md rounded-0 mb-0",
    series: [94.03],
    dataColors: '["--tb-info"]',
    isArrow: true
  },
];

// Widgets
const analyticsData = [
  {
    id: 1,
    name: "Total Sessions",
    amount: 368.24,
    decimal: 2,
    suffix: 'k',
    percentage: " 06.41% Last Month",
    isArrow: true,
    widgetsSeries: [{
      name: 'Total Sessions',
      data: [31, 40, 28, 51, 42, 109, 103]
    }],
    dataColors: '["--tb-primary"]'
  },
  {
    id: 2,
    name: "Avg. Visit Duration",
    amount: 1.47,
    decimal: 2,
    suffix: 'sec',
    percentage: " 13% Last Month",
    isArrow: true,
    widgetsSeries: [{
      name: 'Avg. Visit Duration',
      data: [29, 43, 71, 58, 99, 93, 130]
    }],
    dataColors: '["--tb-primary"]'
  },
  {
    id: 3,
    name: "Impressions",
    amount: 1647,
    percentage: " 07.26% Last Week",
    isArrow: false,
    widgetsSeries: [{
      name: 'Impressions',
      data: [50, 18, 47, 32, 84, 110, 93]
    }],
    dataColors: '["--tb-secondary"]'
  },
  {
    id: 4,
    name: "Total Views",
    amount: 291.32,
    decimal: 2,
    suffix: 'k',
    percentage: " 13% Last Month",
    isArrow: true,
    widgetsSeries: [{
      name: 'Total Views',
      data: [72, 58, 30, 51, 42, 95, 119]
    }],
    dataColors: '["--tb-primary"]'
  },
];

// Chart Series

const pageViewChartSeries = [{
  name: 'Website',
  data: [12, 14.65, 28.24, 25.02, 19.65, 23, 21.18, 23.65, 20.32, 18, 12.65, 28.32]
},
{
  name: 'Social Media',
  data: [26, 24.65, 18.24, 29.02, 23.65, 27, 21.18, 24.65, 27.32, 25, 24.65, 29.32]
},
{
  name: 'Others',
  data: [-10, -17.32, -15.45, -12.30, -19.15, -15.45, -11, -14.32, -15.67, -10, -17.32, -19.2]
}]

const ClicksSeries = [{
  name: 'Website',
  data: [21, 10, 12, 8, 18, 29, 16, 20, 36, 22, 29, 16]
}, {
  name: 'Ads Clicks',
  data: [10, 29, 16, 13, 33, 24, 39, 46, 40, 35, 49, 41]
}, {
  name: 'Social Media',
  data: [26, 17, 34, 15, 21, 14, 8, 33, 26, 45, 32, 57]
}]

const Conversationsseries = [{
  data: [30, 57, 25, 33, 20, 39, 47, 36, 22, 51, 38, 27, 38, 49, 42, 58, 33, 46, 40, 34, 41, 53, 19, 23, 36, 52, 58, 43]
}]

// Sales Chart
const SalesReportSeries = [{
  name: 'This Month',
  data: [45, 74, 36, 69, 84, 110, 92]
}, {
  name: 'Last Month',
  data: [11, 18, 20, 32, 46, 65, 73]
}]

// Widgets Chart
const widgetsSeries = [{
  name: 'Total Sessions',
  data: [31, 40, 28, 51, 42, 109, 103]
}]

export { BrowserData, pageViewChartSeries, ClicksSeries, Conversationsseries, saleData, SalesReportSeries, analyticsData, widgetsSeries }