import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";

const SetudentsChart = ({ periodData, dataColors }: any) => {
    const totalSetudentsColors = getChartColorsArray(dataColors);

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
        series: [{
            name: 'Total Students',
            data: [33, 56, 37, 51, 42, 83, 71]
        }],
        chart: {
            height: 95,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                distributed: true,
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
            padding: {
                top: -15,
                right: 0,
                left: 0,
                bottom: -10
            },
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
        colors: totalSetudentsColors,
        xaxis: {
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            labels: {
                show: false,
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
                height="95"
                type="bar"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const CoursesChart = ({ periodData, dataColors }: any) => {
    const totalCoursesColors = getChartColorsArray(dataColors);

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
            height: 95,
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
            padding: {
                top: -15,
                right: 0,
                left: 0,
                bottom: -10
            },
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
        colors: totalCoursesColors,
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            labels: {
                show: false,
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
                height="95"
                type="line"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const ProgressChart = ({ periodData, dataColors }: any) => {
    const chartStorkeRadialbarColors = getChartColorsArray(dataColors);

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
        series: [67],
        chart: {
            height: 320,
            type: 'radialBar',
            // offsetY: -2  
        },
        plotOptions: {
            radialBar: {
                startAngle: -120,
                endAngle: 120,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 80
                    },
                    value: {
                        offsetY: 30,
                        fontSize: '20px',
                        color: "#87888a",
                        formatter: function (val: any) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        grid: {
            show: false,
            padding: {
                top: -15,
                right: 0,
                left: 0,
                bottom: -10
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Daily Goal'],
        colors: chartStorkeRadialbarColors
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={[...periodData]}
                height="320"
                type="radialBar"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const LearningOverviewChart = ({ periodData, dataColors }: any) => {
    const areachartSplineColors = getChartColorsArray(dataColors);

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
            height: 320,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        fill: {
            type: ['gradient', 'gradient'],
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                inverseColors: false,
                opacityFrom: 0.2,
                opacityTo: 0.0,
                stops: [50, 70, 100, 100]
            },
        },
        markers: {
            size: 4,
            strokeColors: areachartSplineColors,
            strokeWidth: 1,
            strokeOpacity: 0.9,
            fillOpacity: 1,
            hover: {
                size: 6,
            }
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false
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
        },
        stroke: {
            width: [2, 2],
            curve: 'smooth'
        },
        colors: areachartSplineColors,
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={[...periodData]}
                height="320"
                type="area"
                className="apex-charts ms-n3"
            />
        </React.Fragment>
    );
};

export { SetudentsChart, CoursesChart, ProgressChart, LearningOverviewChart }