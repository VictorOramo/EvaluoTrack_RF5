
import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";

const PortfolioChart = ({ dataColors }: any) => {
    var chartLineAreaMultiColors = getChartColorsArray(dataColors);

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
        name: 'Earnings',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 21, 37, 23, 11, 22]
    }, {
        name: 'Orders',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 45, 64, 44, 55, 41]
    }, {
        name: 'Refunds',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 25, 21, 30, 25, 36]
    }];
    var options: any = {
        chart: {
            height: 400,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            }
        },
        stroke: {
            width: [0, 2, 3],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '25%'
            }
        },
        fill: {
            opacity: [1, 0.08, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
        },
        labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022',
            '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022', '12/01/2022', '01/01/2023', '02/01/2023', '03/01/2023', '04/01/2023'
        ],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y: any) {
                    if (typeof y !== "undefined") {
                        return "$" + y.toFixed(0);
                    }
                    return y;

                }
            }
        },
        colors: chartLineAreaMultiColors
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                className="apex-charts"
                type="line"
                height={400}
            />
        </React.Fragment>
    );
}

export default PortfolioChart;