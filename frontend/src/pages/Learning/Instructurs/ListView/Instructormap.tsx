import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";

const TotalInstructors = ({ dataColors }: any) => {
    const totalInstructorsColors = getChartColorsArray(dataColors);


    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);


    let series: any = [84];
    let options: any = {
        chart: {
            height: 170,
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '75%'
                },
                track: {
                    margin: 0,
                },
                dataLabels: {
                    show: false
                }
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Instructor Total'],
        colors: totalInstructorsColors
    };
    return (
        <ReactApexChart
            type="radialBar"
            options={options}
            series={series}
            height={170}
            className="apex-charts"
        />
    );
}

const TotalCourses = ({ dataColors }: any) => {
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

    const series: any = [33];
    let options: any = {
        chart: {
            height: 170,
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '75%'
                },
                track: {
                    margin: 0,
                },
                dataLabels: {
                    show: false
                }
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Instructor Total'],
        colors: totalCoursesColors
    };
    return (
        <ReactApexChart
            type="radialBar"
            options={options}
            series={series}
            height={170}
            className="apex-charts"
        />
    )
}

const InstuctorActivity = ({ dataColors }: any) => {
    const instructorActivityColors = getChartColorsArray(dataColors);

    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series: any = [{
        name: "New Orders",
        data: [32, 18, 13, 17, 26, 34, 47, 51, 59, 63, 44, 38, 53, 69, 72, 83, 90, 110, 130, 117, 103, 92, 95, 119, 80, 96, 116, 125]
    }, {
        name: "Return Orders",
        data: [3, 6, 2, 4, 7, 9, 15, 10, 19, 22, 27, 21, 34, 23, 29, 32, 41, 34, 29, 37, 70, 55, 49, 36, 30, 52, 38, 33]
    }];
    var options: any = {
        chart: {
            height: 190,
            type: 'line',
            // zoom: {
            //     enabled: false
            // },
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
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
        colors: instructorActivityColors,
        xaxis: {
            type: 'datetime',
            categories: ['02/01/2023 GMT', '02/02/2023 GMT', '02/03/2023 GMT', '02/04/2023 GMT',
                '02/05/2023 GMT', '02/06/2023 GMT', '02/07/2023 GMT', '02/08/2023 GMT', '02/09/2023 GMT', '02/10/2023 GMT', '02/11/2023 GMT', '02/12/2023 GMT', '02/13/2023 GMT',
                '02/14/2023 GMT', '02/15/2023 GMT', '02/16/2023 GMT', '02/17/2023 GMT', '02/18/2023 GMT', '02/19/2023 GMT', '02/20/2023 GMT', '02/21/2023 GMT', '02/22/2023 GMT',
                '02/23/2023 GMT', '02/24/2023 GMT', '02/25/2023 GMT', '02/26/2023 GMT', '02/27/2023 GMT', '02/28/2023 GMT'
            ]
        },
        yaxis: {
            show: false,
        }
    };

    return (
        <ReactApexChart
            type="line"
            options={options}
            series={series}
            height={190}
            className="apex-charts"
        />
    )
}
export { TotalInstructors, TotalCourses, InstuctorActivity };