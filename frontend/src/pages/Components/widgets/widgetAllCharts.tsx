import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getChartColorsArray from "Common/ChartsDynamicColor";

var SessionChartColors = ({ dataColors }: any) => {
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

    const series = [{
        name: 'Total Sessions',
        data: [31, 40, 28, 51, 42, 109, 103]
    }];
    var session_chart = {
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
    }

    return (
        <React.Fragment>
            <ReactApexChart
                options={session_chart}
                series={series}
                type="line"
                height="124"

                className="apex-charts"
            />
        </React.Fragment>
    );
}

// }

//  Avg. Visit Duration Charts
var VisitDurationColors = ({ dataColors }: any) => {
    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    var visitDurationColors = getChartColorsArray(dataColors);
    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [{
        name: 'Avg. Visit Duration',
        data: [29, 43, 71, 58, 99, 93, 130]
    }];
    var visti_duration_chart = {
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
        colors: visitDurationColors,
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
    }

    return (
        <React.Fragment>
            <ReactApexChart
                options={visti_duration_chart}
                series={series}
                type="line"
                height="124"

                className="apex-charts"
            />
        </React.Fragment>
    );
}



//  Impressions Charts
var ImpressionsColors = ({ dataColors }: any) => {
    const impressionsColorsColors = getChartColorsArray(dataColors);
    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [{
        name: 'Impressions',
        data: [50, 18, 47, 32, 84, 110, 93]
    }];
    var impressions_chart = {
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
        colors: impressionsColorsColors,
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
                options={impressions_chart}
                series={series}
                type="line"
                height="124"

                className="apex-charts"
            />
        </React.Fragment>
    );
}

//  Total Views Charts
var ViewsChartColors = ({ dataColors }: any) => {
    const viewsChartColors = getChartColorsArray(dataColors);
    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);


    const series = [{
        name: 'Total Views',
        data: [72, 58, 30, 51, 42, 95, 119]
    }];
    var views_chart = {
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
        colors: viewsChartColors,
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
    }


    return (
        <React.Fragment>
            <ReactApexChart
                options={views_chart}
                series={series}
                type="line"
                height="124"

                className="apex-charts"
            />
        </React.Fragment>
    );

}

// Chart-6
var Areachartmini6Colors = ({ dataColors }: any) => {
    const Areachartmini6Colors = getChartColorsArray(dataColors);
    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);
    const series = [{
        data: [50, 15, 35, 62, 23, 56, 44, 12]
    }];
    var mini_chart_6 = {
        chart: {
            type: 'line',
            height: 50,
            sparkline: {
                enabled: true
            }

        },
        colors: Areachartmini6Colors,
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
                    formatter: function (_seriesName: any) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }

    return (
        <React.Fragment>
            <ReactApexChart
                options={mini_chart_6}
                series={series}
                type="line"
                height="50"

                className="apex-charts"
            />
        </React.Fragment>
    );

}


// Chart-7
var Areachartmini7Colors = ({ dataColors }: any) => {
    const areachartmini7Colors = getChartColorsArray(dataColors);

    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [{
        data: [50, 15, 20, 34, 23, 56, 65, 75]
    }];
    var mini_chart_7 = {
        chart: {
            type: 'line',
            height: 50,
            sparkline: {
                enabled: true
            }

        },
        colors: areachartmini7Colors,
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
                    formatter: function (_seriesName: any) {
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
                options={mini_chart_7}
                series={series}
                type="line"
                height="50"

                className="apex-charts"
            />
        </React.Fragment>
    );

}

// Chart-8
var Areachartmini8Colors = ({ dataColors }: any) => {
    const areachartmini8Colors = getChartColorsArray(dataColors);

    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [{
        data: [32, 18, 29, 31, 46, 33, 39, 46]
    }];
    var mini_chart_8 = {
        chart: {
            type: 'line',
            height: 50,
            sparkline: {
                enabled: true
            }

        },
        colors: areachartmini8Colors,
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
                    formatter: function (_seriesName: any) {
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
                options={mini_chart_8}
                series={series}
                type="line"
                height="50"

                className="apex-charts"
            />
        </React.Fragment>
    );

}


// Chart-9
var Areachartmini9Colors = ({ dataColors }: any) => {
    const areachartmini9Colors = getChartColorsArray(dataColors);

    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    var series = [{
        data: [36, 25, 18, 34, 39, 30, 34, 42]
    }];
    var mini_chart_9 = {
        chart: {
            type: 'line',
            height: 50,
            sparkline: {
                enabled: true
            }

        },
        colors: areachartmini9Colors,
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
                    formatter: function (_seriesName: any) {
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
                options={mini_chart_9}
                series={series}
                type="line"
                height="50"

                className="apex-charts"
            />
        </React.Fragment>
    );
}

//  sales_Report Charts
var SalesReportColors = ({ dataColors }: any) => {
    const SalesReportColors = getChartColorsArray(dataColors);
    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [{
        name: 'This Month',
        data: [45, 74, 36, 69, 84, 110, 92]
    }, {
        name: 'Last Month',
        data: [11, 18, 20, 32, 46, 65, 73]
    }];
    var sales_Report = {
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
        colors: SalesReportColors,
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
                options={sales_Report}
                series={series}
                type="area"
                height="333"
                className="apex-charts"
            />
        </React.Fragment>
    );
}

// syncStatusBreakdown Charts
var SyncStatusBreakdownColors = ({ dataColors }: any) => {
    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    var syncStatusBreakdown = getChartColorsArray(dataColors);

    const series = [{
        name: 'Synced',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Sync Needed',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Never Synced',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Review Needed',
        data: [9, 7, 5, 8, 6, 9, 4]
    }];
    var sync_StatusBreakdown = {
        chart: {
            type: 'bar',
            height: 365,
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
        colors: syncStatusBreakdown,
        // colors: ["#3762ea", "rgba(55, 98, 234, 0.85)", "rgba(55, 98, 234, 0.6)", "rgba(55, 98, 234, 0.5)"],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={sync_StatusBreakdown}
                series={series}
                type="bar"
                height="333"
                className="apex-charts"
            />
        </React.Fragment>
    );

}


// realized_rate charts
var RealizedRateColors = ({ dataColors }: any) => {
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

    const series = [{
        name: 'Read',
        data: [80, 50, 30, 40, 100, 20],
    },
    {
        name: 'Delivery',
        data: [20, 30, 40, 80, 20, 80],
    },
    {
        name: 'Failed',
        data: [44, 76, 78, 13, 43, 10],
    }
    ];
    var realized_rate = {
        chart: {
            height: 360,
            type: 'radar',
            toolbar: {
                show: false
            },
        },
        stroke: {
            width: 1
        },
        fill: {
            opacity: 0.2
        },
        markers: {
            size: 3,
            hover: {
                size: 4,
            }
        },
        tooltip: {
            y: {
                formatter: function (val: any) {
                    return val
                }
            }
        },
        colors: realizedRateColors,
        xaxis: {
            categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={realized_rate}
                series={series}
                type="radar"
                height="360"

                className="apex-charts"
            />
        </React.Fragment>
    );
};

// emailSent Bar
var EmailSentColors = ({ dataColors }: any) => {
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

    const series = [63, 87, 33];
    var emailSent = {
        chart: {
            height: 390,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                track: {
                    background: ["#3762ea", "#2dcb73", "#1e1a22"],
                    opacity: 0.15,
                },
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
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
                options={emailSent}
                series={series}
                type="radialBar"
                height="346.7"
            />
        </React.Fragment>
    );
};



export { SessionChartColors, VisitDurationColors, ImpressionsColors, ViewsChartColors, Areachartmini6Colors, Areachartmini7Colors, Areachartmini8Colors, Areachartmini9Colors, SalesReportColors, SyncStatusBreakdownColors, RealizedRateColors, EmailSentColors }

