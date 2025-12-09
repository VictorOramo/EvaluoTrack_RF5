import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";

const EarningChart = ({ dataColors }: any) => {
    var linechartBasicColors = getChartColorsArray(dataColors);

    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);


    var series: any = [{
        name: "Daily Earning",
        data: [32, 43, 48, 35, 26, 34, 47, 51, 59, 63, 44, 38, 53, 69, 72, 83, 90, 110, 130, 117, 111, 97, 89, 119, 80, 96, 116, 124]
    }, {
        name: "Expenses",
        data: [15, 35, 18, 4, 7, 9, 15, 10, 19, 22, 27, 21, 34, 23, 29, 32, 41, 34, 29, 37, 70, 55, 49, 37, 21, 54, 36, 45]
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
        colors: linechartBasicColors,
        xaxis: {
            type: 'datetime',
            categories: ['03/01/2023 GMT', '03/02/2023 GMT', '03/03/2023 GMT', '03/04/2023 GMT',
                '03/05/2023 GMT', '03/06/2023 GMT', '03/07/2023 GMT', '03/08/2023 GMT', '03/09/2023 GMT', '03/10/2023 GMT', '03/11/2023 GMT', '03/12/2023 GMT', '03/13/2023 GMT',
                '03/14/2023 GMT', '03/15/2023 GMT', '03/16/2023 GMT', '03/17/2023 GMT', '03/18/2023 GMT', '03/19/2023 GMT', '03/20/2023 GMT', '03/21/2023 GMT', '03/22/2023 GMT',
                '03/23/2023 GMT', '03/24/2023 GMT', '03/25/2023 GMT', '03/26/2023 GMT', '03/27/2023 GMT', '03/28/2023 GMT'
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
                type="line"
                height={350}
            />
        </React.Fragment>
    );
};

export default EarningChart;