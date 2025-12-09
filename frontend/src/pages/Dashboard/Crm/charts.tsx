import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";

export const RealizedRateCaharts = ({ periodData, dataColors }: any) => {
  const realizedRateColors = getChartColorsArray(dataColors);

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
      height: 403,
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 1,
    },
    fill: {
      opacity: 0.2,
    },
    markers: {
      size: 3,
      hover: {
        size: 4,
      },
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val;
        },
      },
    },
    colors: realizedRateColors,
    xaxis: {
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
    },
  };


  return (
    <React.Fragment>
      <ReactApexChart
        id="charts"
        options={options}
        series={[...periodData]}
        height="403"
        type="radar"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export const BalanceOverviewChart = ({ periodData, dataColors }: any) => {
  const balanceOverviewColors = getChartColorsArray(dataColors);

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
      height: 300,
      type: "line",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: balanceOverviewColors,
        opacity: 0.25,
      },
    },
    markers: {
      size: 0,
      strokeColors: balanceOverviewColors,
      strokeWidth: 2,
      strokeOpacity: 0.9,
      fillOpacity: 1,
      radius: 0,
      hover: {
        size: 5,
      },
    },
    grid: {
      show: true,
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
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
        "Dec",
      ],
      labels: {
        rotate: -90,
      },
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        stroke: {
          width: 1,
        },
      },
    },
    stroke: {
      width: [2, 2, 2],
      curve: "smooth",
    },
    colors: balanceOverviewColors,
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        height="300"
        type="line"
        className="apex-charts ms-n3"
      />
    </React.Fragment>
  );
};

export const EmailSendChart = ({ periodData, dataColors }: any) => {
  const emailSentColors = getChartColorsArray(dataColors);

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
      height: 363,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        track: {
          background: emailSentColors,
          opacity: 0.15,
        },
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
            color: "#87888a",
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w: any) {
              return 1793
            }
          }
        },
      }
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    labels: ['Sent', 'Received', 'Failed'],
    colors: emailSentColors
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        height="363"
        type="radialBar"
      />
    </React.Fragment>
  );
};

export const UsersActivityChart = ({ periodData, dataColors }: any) => {
  const usersActivityColors = getChartColorsArray(dataColors);

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
      type: 'bar',
      height: 330,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    },
    grid: {
      show: true,
      padding: {
        top: -18,
        right: 0,
        bottom: 0,
      },
    },
    legend: {
      position: 'bottom',
    },
    fill: {
      opacity: 1
    },
    colors: usersActivityColors,
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        height="330"
        type="bar"
        className="apex-charts ms-n2"
      />
    </React.Fragment>
  );
};

export const SyncStatusBreakdownChart = ({ periodData, dataColors }: any) => {
  const syncStatusBreakdownColors = getChartColorsArray(dataColors);

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
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnHight: '40%',
      },
    },
    grid: {
      show: true,
      padding: {
        top: -20,
        right: 0,
        bottom: -10,
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false,
    },
    colors: syncStatusBreakdownColors
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        height="350"
        type="bar"
        className="apex-charts"
      />
    </React.Fragment>
  );
};
