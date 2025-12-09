import React, { useEffect } from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';
import ReactEcharts from "echarts-for-react"

import getChartColorsArray from 'Common/ChartsDynamicColor';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const PropertiesType = () => {
    const dataColors = '["--tb-primary", "--tb-secondary", "--tb-light","--tb-danger", "--tb-success"]'
    
    // chart re-render
    const selectLayoutThemeType = createSelector(
    (state: any) => state.Layout.layoutThemeType,
    (layoutThemeType) => layoutThemeType
    );

const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        document.getElementsByClassName('apex-charts');
      }, [layoutThemeType]);
    
    const propertyTypeColors = getChartColorsArray(dataColors);
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '0%',
            left: 'center',
            // doesn't perfectly work with our tricks, disable it
            selectedMode: false,
            textStyle: {
                color: "#87888a"
            }
        },
        series: [
            {
                type: 'pie',
                radius: ['70%', '100%'],
                center: ['50%', '70%'],
                // adjust the start angle
                startAngle: 180,
                label: {
                    color: "#87888a",
                    formatter(param: any) {
                        // correct the percentage
                        return param.name + ' (' + param.percent * 2 + '%)';
                    }
                },
                itemStyle: {
                    // borderColor: 'transparent',
                    borderWidth: 4
                },
                data: [
                    { value: 1048, name: 'Residency' },
                    { value: 735, name: 'Commercial' },
                    { value: 580, name: 'Villa' },
                    { value: 484, name: 'Apartment' },
                    {
                        // make an record to fill the bottom 50%
                        value: 1048 + 735 + 580 + 484,
                        itemStyle: {
                            // stop the chart from rendering this piece
                            color: 'none',
                            decal: {
                                symbol: 'none'
                            }
                        },
                        label: {
                            show: false
                        }
                    }
                ]
            }
        ],
        color: propertyTypeColors
    };

    // useEffect(() => {
    //     window.dispatchEvent(new Event('resize'));
    //     const propertyTypeColors = getChartColorsArray(dataColors);
    //     const chart = echarts.init(chartRef.current);

     
    //     chart.setOption(option);
    // }, [layoutThemeType]);

    return (
        <React.Fragment>
            <Col xxl={4} className="order-last order-xxl-first">
                <Card>
                    <Card.Header className="d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Properties Type</h4>
                        <Dropdown className="card-header-dropdown float-end cursor-pointer">
                            <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                <i className="bi bi-three-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li><Dropdown.Item href="#">Today</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last Month</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Current Year</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Header>
                    <Card.Body>
                    <ReactEcharts
                            option={option}
                            className="mx-auto"
                            style={{
                                height: "336px"
                            }}
                            />
                        {/* <div ref={chartRef} className="e-charts shadow-none" style={{ width: '80%', height: '336px' }}></div> */}
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default PropertiesType;
