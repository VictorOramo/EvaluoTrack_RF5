import React, { useEffect } from "react"
import ReactApexChart from "react-apexcharts"
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const PageviewChart = ({ periodData, dataColors }: any) => {
  // chart re-render
  const selectLayoutThemeType = createSelector(
    (state: any) => state.Layout.layoutThemeType,
      (layoutThemeType) => layoutThemeType
    );
  const layoutThemeType = useSelector(selectLayoutThemeType);

  useEffect(() => {
    document.getElementsByClassName('apex-charts');
  }, [layoutThemeType]);

  const PageviewChartColors = getChartColorsArray(dataColors);
  const options: any = {
    chart: {
      type: 'bar',
      height: 373,
      stacked: true,
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: 5,
      colors: "#000",
      lineCap: 'round',
    },
    plotOptions: {
      bar: {
        columnWidth: '25%',
        borderRadius: 5,
        lineCap: 'round',
        borderRadiusOnAllStackedSeries: true
      },
    },
    dataLabels: {
      enabled: false,
      textAnchor: 'top',
    },
    xaxis: {
      show: true,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      labels: {
        show: true
      }
    },
    colors: PageviewChartColors,
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
    },
    fill: {
      opacity: 1
    }
  }
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="bar"
        height="373"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

const WidgetsCharts = ({ periodData, dataColors }: any) => {

  const sessionChartColors = getChartColorsArray(dataColors);

   // chart re-render
   const selectLayoutThemeType = createSelector(
    (state: any) => state.Layout.layoutThemeType,
      (layoutThemeType) => layoutThemeType
    );
  const layoutThemeType = useSelector(selectLayoutThemeType);

  useEffect(() => {
    document.getElementsByClassName('apex-charts');
  }, [layoutThemeType]);


  const options = {
    chart: {
      height: 124,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false,
      yaxis: {
        lines: {
          show: false
        }
      },
    },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    colors: sessionChartColors,
    xaxis: {
      categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      labels: {
        style: {
          fontSize: '10px',
        },
      }
    },
    yaxis: {
      show: false,
    },
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="line"
        height="124"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

const SaleWidgetsCharts = ({ periodData, dataColors }: any) => {

  const saleWidgetsColors = getChartColorsArray(dataColors);

   // chart re-render
   const selectLayoutThemeType = createSelector(
    (state: any) => state.Layout.layoutThemeType,
      (layoutThemeType) => layoutThemeType
    );
  const layoutThemeType = useSelector(selectLayoutThemeType);

  useEffect(() => {
    document.getElementsByClassName('apex-charts');
  }, [layoutThemeType]);

  const options = {
    chart: {
      width: 50,
      height: 100,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '45%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true, fontSize: '10px', offsetY: 5,
          },
        }
      },
    },
    colors: saleWidgetsColors
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="radialBar"
        height="100"
        width="50"
      />
    </React.Fragment>
  );
};

const SalesReportCharts = ({ periodData, dataColors }: any) => {

  const salesReportColors = getChartColorsArray(dataColors);

   // chart re-render
   const selectLayoutThemeType = createSelector(
    (state: any) => state.Layout.layoutThemeType,
      (layoutThemeType) => layoutThemeType
    );
  const layoutThemeType = useSelector(selectLayoutThemeType);

  useEffect(() => {
    document.getElementsByClassName('apex-charts');
  }, [layoutThemeType]);

  var options = {
    chart: {
      height: 333,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    grid: {
      padding: {
        top: 0,
        right: 2,
        bottom: 0,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      offsetY: "-50px",
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.4,
        opacityTo: 0,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'stepline',
    },
    colors: salesReportColors,
    xaxis: {
      type: 'datetime',
      categories: ["02/01/2023 GMT", "02/02/2023 GMT", "02/03/2023 GMT", "02/04/2023 GMT", "02/05/2023 GMT", "02/06/2023 GMT", "02/07/2023 GMT"]
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (y: any) {
          return y.toFixed(0) + "k";
        }
      },
    },
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="area"
        height="333"
        className="apex-charts"
      />
    </React.Fragment>
  );
}

const ClicksChart = ({ periodData, dataColors }: any) => {

  const clicksChartColors = getChartColorsArray(dataColors);

   // chart re-render
   const selectLayoutThemeType = createSelector(
    (state: any) => state.Layout.layoutThemeType,
      (layoutThemeType) => layoutThemeType
    );
  const layoutThemeType = useSelector(selectLayoutThemeType);

  useEffect(() => {
    document.getElementsByClassName('apex-charts');
  }, [layoutThemeType]);

  const options = {
    chart: {
      type: 'line',
      height: 373,
      zoom: {
        enabled: true
      },
      toolbar: {
        show: false,
      }
    },
    stroke: {
      width: 3,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2023 GMT', '01/02/2023 GMT', '01/03/2023 GMT', '01/04/2023 GMT',
        '01/05/2023 GMT', '01/06/2023 GMT', '01/07/2023 GMT', '01/08/2023 GMT', '01/09/2023 GMT', '01/10/2023 GMT', '01/11/2023 GMT', '01/12/2023 GMT'
      ],
    },
    legend: {
      position: 'top',
    },
    fill: {
      opacity: 1
    },
    colors: clicksChartColors,
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="line"
        height="373"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

const ConversationsChart = ({ periodData, dataColors }: any) => {

  const ConversationsChartColors = getChartColorsArray(dataColors);
   // chart re-render
   const selectLayoutThemeType = createSelector(
    (state: any) => state.Layout.layoutThemeType,
      (layoutThemeType) => layoutThemeType
    );
  const layoutThemeType = useSelector(selectLayoutThemeType);

  useEffect(() => {
    document.getElementsByClassName('apex-charts');
  }, [layoutThemeType]);


  var options = {
    chart: {
      height: 373,
      type: 'bar',
      toolbar: {
        show: false,
      }
    },
    colors: ConversationsChartColors,
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2023 GMT', '01/02/2023 GMT', '01/03/2023 GMT', '01/04/2023 GMT',
        '01/05/2023 GMT', '01/06/2023 GMT', '01/07/2023 GMT', '01/08/2023 GMT', '01/09/2023 GMT', '01/10/2023 GMT', '01/11/2023 GMT', '01/12/2023 GMT', '01/13/2023 GMT',
        '01/14/2023 GMT', '01/15/2023 GMT', '01/16/2023 GMT', '01/17/2023 GMT', '01/18/2023 GMT', '01/19/2023 GMT', '01/20/2023 GMT', '01/21/2023 GMT', '01/22/2023 GMT',
        '01/23/2023 GMT', '01/24/2023 GMT', '01/25/2023 GMT', '01/26/2023 GMT', '01/27/2023 GMT', '01/28/2023 GMT'
      ],
    },
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="bar"
        height="373"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export { ConversationsChart, PageviewChart, WidgetsCharts, SaleWidgetsCharts, SalesReportCharts, ClicksChart };
