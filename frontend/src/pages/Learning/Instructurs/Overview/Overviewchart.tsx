import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const OverviewChart = ({ dataColors }: any) => {
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

    const series: any = [{
        name: "Active Students",
        data: [3, 6, 2, 4, 7, 9, 15, 10, 19, 22, 27, 21, 34, 23, 29, 32, 41, 34, 29, 37, 64, 55, 49, 69, 78, 73, 69, 83]
    }, {
        name: "New Enrollment",
        data: [10, 16, 25, 14, 29, 33, 47, 53, 41, 55, 63, 53, 66, 71, 79, 70, 73, 84, 92, 83, 96, 93, 101, 109, 99, 87, 93, 107]
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
        colors: sessionChartColors,
        xaxis: {
            type: 'datetime',
            categories: ['02/01/2023 GMT', '02/02/2023 GMT', '02/03/2023 GMT', '02/04/2023 GMT',
                '02/05/2023 GMT', '02/06/2023 GMT', '02/07/2023 GMT', '02/08/2023 GMT', '02/09/2023 GMT', '02/10/2023 GMT', '02/11/2023 GMT', '02/12/2023 GMT', '02/13/2023 GMT',
                '02/14/2023 GMT', '02/15/2023 GMT', '02/16/2023 GMT', '02/17/2023 GMT', '02/18/2023 GMT', '02/19/2023 GMT', '02/20/2023 GMT', '02/21/2023 GMT', '02/22/2023 GMT',
                '02/23/2023 GMT', '02/24/2023 GMT', '02/25/2023 GMT', '02/26/2023 GMT', '02/27/2023 GMT', '02/28/2023 GMT'
            ]
        }
    };
    return (
        <ReactApexChart
            type="line"
            options={options}
            series={series}
            height={350}
            className="apex-charts"
        />
    );
}

export default OverviewChart;