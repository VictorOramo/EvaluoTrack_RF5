import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";

const OrderViewChart = ({ dataColors }: any) => {

    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    var dealTypeChartsColors = getChartColorsArray(dataColors);
    const series = [{
        name: "New Orders",
        data: [32, 18, 13, 17, 26, 34, 47, 51, 59, 63, 44, 38, 53, 69, 72, 83, 90, 110, 130, 117, 103, 92, 95, 119, 80, 96, 116, 125]
    }, {
        name: "Return Orders",
        data: [3, 6, 2, 4, 7, 9, 15, 10, 19, 22, 27, 21, 34, 23, 29, 32, 41, 34, 29, 37, 70, 55, 49, 36, 30, 52, 38, 33]
    }];

    var options: any = {
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: true,
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
        colors: dealTypeChartsColors,
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
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                className="apex-charts"
                type='line'
                height={350}
            />
        </React.Fragment>
    );
};

const StorageChart = ({ dataColors }: any) => {
    var storageColors = getChartColorsArray(dataColors);

    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [1048, 735, 580, 484, 300];

    var option: any = {
        chart: {
            height: 350,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        labelLine: {
            show: false
        },
        labels: ["Dcomuents", "Audio", "Orange", "Video", "Others"],
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                    }
                }
            }
        },
        legend: {
            position: 'bottom',
            bottom: '-5px',
            left: 'center',
            textStyle: {
                color: "#87888a"
            }
        },
        colors: storageColors
    };

    return (
        <React.Fragment>
             <ReactApexChart dir="ltr"
                options={option}
                series={series}
                type="donut"
                height="350"
                className="apex-charts mt-4"
            />
        </React.Fragment>
    )
}

export { OrderViewChart, StorageChart };