import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { createSelector } from "reselect";
import getChartColorsArray from "Common/ChartsDynamicColor";
import { useSelector } from "react-redux";

const SellerChat = ({ data, dataColor }: any) => {
    let dealTypeChartsColors = getChartColorsArray(dataColor);

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
        data: data,
    },];

    const options: any = {
        chart: {
            type: "area",
            height: 43,
            sparkline: {
                enabled: true,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100],
            },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        colors: dealTypeChartsColors,
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (seriesName: any) {
                        return "";
                    },
                },
            },
            marker: {
                show: false,
            },
        },
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                height={43}
                type="area"
                className="apex-charts"
            />
        </React.Fragment>
    );
}

export default SellerChat;