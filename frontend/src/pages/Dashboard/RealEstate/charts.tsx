import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";

const PropertiesSaleChart = ({ periodData, dataColors }: any) => {
    const propertySaleColors = getChartColorsArray(dataColors);

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
            width: 110,
            height: 110,
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '50%',
                },
                track: {
                    margin: 0,
                    background: propertySaleColors,
                    opacity: 0.2,
                },
                dataLabels: {
                    show: false
                }
            }
        },
        grid: {
            padding: {
                top: -15,
                bottom: -15
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Cricket'],
        colors: propertySaleColors
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={[...periodData]}
                height="110"
                type="radialBar"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const PropertiesTypeChart = ({ dataColors }: any) => {

    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [
        { value: 1048, name: 'Residency' },
        { value: 735, name: 'Commercial' },
        { value: 580, name: 'Villa' },
        { value: 484, name: 'Apartment' },
    ]

    const options = {
        chart: {
            type: 'pie',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                height="290"
                type="pie"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const RevenueChart = ({ dataColors }: any) => {
    const totalRevenueColors = getChartColorsArray(dataColors);

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
        name: 'Income',
        data: [26, 24.65, 18.24, 29.02, 23.65, 27, 21.18, 24.65, 27.32, 25, 24.65, 29.32]
    }]

    const options = {
        chart: {
            type: 'bar',
            height: 328,
            stacked: true,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
                lineCap: 'round',
                borderRadiusOnAllStackedSeries: true

            },
        },
        grid: {
            padding: {
                left: 0,
                right: 0,
                top: -15,
                bottom: -15
            }
        },
        colors: totalRevenueColors,
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
    };;

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                height="328"
                type="bar"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const IncomeChart = ({ dataColors }: any) => {
    const totalIncomeColors = getChartColorsArray(dataColors);

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
        name: "Income",
        data: [32, 18, 13, 17, 26, 34, 47, 51, 59, 63, 44, 38, 53, 69, 72, 83, 90, 110, 130, 117, 103, 92, 95, 119, 80, 96, 116, 125]
    }]

    const options = {
        chart: {
            height: 328,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 4
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        colors: totalIncomeColors,
        xaxis: {
            type: 'datetime',
            categories: ['02/01/2023 GMT', '02/02/2023 GMT', '02/03/2023 GMT', '02/04/2023 GMT',
                '02/05/2023 GMT', '02/06/2023 GMT', '02/07/2023 GMT', '02/08/2023 GMT', '02/09/2023 GMT', '02/10/2023 GMT', '02/11/2023 GMT', '02/12/2023 GMT', '02/13/2023 GMT',
                '02/14/2023 GMT', '02/15/2023 GMT', '02/16/2023 GMT', '02/17/2023 GMT', '02/18/2023 GMT', '02/19/2023 GMT', '02/20/2023 GMT', '02/21/2023 GMT', '02/22/2023 GMT',
                '02/23/2023 GMT', '02/24/2023 GMT', '02/25/2023 GMT', '02/26/2023 GMT', '02/27/2023 GMT', '02/28/2023 GMT'
            ]
        },
        yaxis: {
            labels: {
                show: true,
                formatter: function (y: any) {
                    return "$" + y.toFixed(0);
                }
            },
        },
    };;

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                height="328"
                type="line"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const PropertySaleChart = ({ dataColors }: any) => {
    const propertySaleChartColors = getChartColorsArray(dataColors);

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
        name: "Property Rent",
        data: [30, 57, 25, 33, 20, 27, 38, 49, 42, 58, 33, 46, 40, 34, 41, 53, 19, 23, 36, 52, 58, 43]
    }]

    const options = {
        series: [{
            name: "Property Rent",
            data: [30, 57, 25, 33, 20, 27, 38, 49, 42, 58, 33, 46, 40, 34, 41, 53, 19, 23, 36, 52, 58, 43]
        }],
        chart: {
            height: 328,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        colors: propertySaleChartColors,
        plotOptions: {
            bar: {
                columnWidth: '30%',
                distributed: true,
                borderRadius: 5,
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
                '01/14/2023 GMT', '01/15/2023 GMT', '01/16/2023 GMT', '01/17/2023 GMT', '01/18/2023 GMT', '01/19/2023 GMT', '01/20/2023 GMT', '01/21/2023 GMT', '01/22/2023 GMT'
            ],
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                height="328"
                type="bar"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const PropertyRentChart = ({ dataColors }: any) => {
    const propetryRentColors = getChartColorsArray(dataColors);

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
        name: 'Property Rent',
        data: [31, 40, 28, 43, 59, 87, 75, 60, 51, 66, 109, 100]
    }]

    const options = {
        chart: {
            height: 328,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        fill: {
            opacity: "0.01",
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        colors: propetryRentColors,
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
                series={series}
                height="328"
                type="area"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const ProjectOnHoldChart = ({ dataColors }: any) => {
    const areachartmini6Colors = getChartColorsArray(dataColors);
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
    }]

    const options = {
        chart: {
            type: 'line',
            height: 50,
            sparkline: {
                enabled: true
            }

        },
        colors: areachartmini6Colors,
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
                series={series}
                height="50"
                type="line"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const OngoingPropertiesChart = ({ dataColors }: any) => {
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
    }]

    const options = {
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
                series={series}
                height="50"
                type="line"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const PendingPropertiesChart = ({ dataColors }: any) => {
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
    }]

    const options = {
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
                series={series}
                height="50"
                type="line"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const CompletedProjectChart = ({ dataColors }: any) => {
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

    const series = [{
        data: [36, 25, 18, 34, 39, 30, 34, 42]
    }]

    const options = {
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
                series={series}
                height="50"
                type="line"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const WidgetsChart = ({ periodData, dataColors }: any) => {
    const propertySaleColors = getChartColorsArray(dataColors);

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
            width: 110,
            height: 110,
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '50%',
                },
                track: {
                    margin: 0,
                    background: propertySaleColors,
                    opacity: 0.2,
                },
                dataLabels: {
                    show: false
                }
            }
        },
        grid: {
            padding: {
                top: -15,
                bottom: -15
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Cricket'],
        colors: propertySaleColors
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={[...periodData]}
                height="110"
                width="110"
                type="radialBar"
            />
        </React.Fragment>
    );
};

export { PropertiesSaleChart, PropertiesTypeChart, RevenueChart, IncomeChart, PropertySaleChart, PropertyRentChart, ProjectOnHoldChart, OngoingPropertiesChart, PendingPropertiesChart, CompletedProjectChart, WidgetsChart }