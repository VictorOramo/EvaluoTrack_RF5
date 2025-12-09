import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";

const RevenueChart = ({ periodData, dataColors }: any) => {
    const RevenueChart = getChartColorsArray(dataColors);

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
            height: 328,
            stacked: true,
            toolbar: {
                show: false
            },
        },
        stroke: {
            width: 5,
            colors: "#000",
            lineCap: 'round',
        },
        grid: {
            show: true,
            borderColor: '#000',

            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
                borderRadius: 5,
                lineCap: 'round',
                borderRadiusOnAllStackedSeries: true

            },
        },
        colors: RevenueChart,
        fill: {
            opacity: 1
        },
        dataLabels: {
            enabled: false,
            textAnchor: 'top',
        },
        yaxis: {
            labels: {
                show: true,
                formatter: function (y: any) {
                    return y.toFixed(0) + "k";
                }
            },
        },
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                rotate: -90
            },
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                stroke: {
                    width: 1
                },
            },
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={[...periodData]}
                height="328"
                type="bar"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const TrafficSourceChart = ({ periodData, dataColors }: any) => {
    const chartColumnColors = getChartColorsArray(dataColors);

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
            height: 360,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
        },
        legend: {
            show: true,
            position: 'top',
        },
        colors: chartColumnColors,
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May'],
        },
        yaxis: {
            show: false,
        },
        grid: {
            borderColor: '#f1f1f1',
        },
    }
    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={[...periodData]}
                height="360"
                type="bar"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const BudgetChart = ({ periodData, dataColors }: any) => {
    const areachartminiColors = getChartColorsArray(dataColors);

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
            height: 45,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartminiColors,
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName: any) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={[...periodData]}
                height="45"
                type="line"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const PayoutsChart = ({ periodData, dataColors }: any) => {
    const areachartminiColors = getChartColorsArray(dataColors);

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
            height: 45,
            sparkline: {
                enabled: true
            }

        },
        colors: areachartminiColors,
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName: any) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={[...periodData]}
                height="45"
                type="line"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export { RevenueChart, TrafficSourceChart, BudgetChart, PayoutsChart }