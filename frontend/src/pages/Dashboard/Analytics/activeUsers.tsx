import React, { useRef, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import getChartColorsArray from "Common/ChartsDynamicColor";
import CountUp from 'react-countup';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from './world.svg.json';
import * as echarts from 'echarts';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const ActiveUsers = () => {
    const chartRef = useRef(null);
    const dataColors = '["--tb-primary-bg-subtle", "--tb-light", "--tb-primary"]'
    
    // chart re-render
const selectLayoutThemeType = createSelector(
  (state: any) => state.Layout.layoutThemeType,
  (layoutThemeType) => layoutThemeType
);

const layoutThemeType = useSelector(selectLayoutThemeType);
    
    useEffect(() => {
        const conversationsChartColors = getChartColorsArray(dataColors);
        const chart = echarts.init(chartRef.current);
        const data: any = [];
        for (let i = 0; i < 5; ++i) {
            data.push(Math.round(Math.random() * 200));
        }
        let time = 0;

        const option = {
            grid: {
                left: '0%',
                right: '6%',
                bottom: '0%',
                top: '4%',
                containLabel: true
            },
            xAxis: {
                max: 'dataMax',

                splitLine: {
                    lineStyle: {
                        color: "rgba(135,136, 138,.1)"
                    }
                },
            },

            yAxis: {
                type: 'category',
                data: ['Canada', 'US', 'Serbia', 'Russia', 'Brazil'],
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
            },
            series: [
                {
                    realtimeSort: true,
                    type: 'bar',
                    data: data,
                    label: {
                        color: "#87888a",
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    }
                }
            ],
            legend: {
                show: false
            },
            color: conversationsChartColors,
            animationDuration: 0,
            animationDurationUpdate: 3000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
        };

        chart.setOption(option);

        const interval = setInterval(() => {
            time += 1;
            for (var i = 0; i < data.length; ++i) {
                if (Math.random() > 0.9) {
                    data[i] += Math.round(Math.random() * 1500);
                } else {
                    data[i] += Math.round(Math.random() * 200);
                }
            }
            chart.setOption({
                series: [
                    {
                        data: data,
                    },
                ],
                graphic: {
                    elements: [
                        {
                            type: 'text',
                            right: 20,
                            bottom: 20,
                            style: {
                                text: `Time: ${time}s`,
                                font: '14px sans-serif',
                                fill: '#666',
                            },
                        },
                    ],
                },
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [layoutThemeType]);

    return (
        <React.Fragment>
            <Card className="card-height-100">
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title mb-0 flex-grow-1">Active Users Right Now</h5>
                    <div className="flex-shrink-0">
                        <button type="button" className="btn btn-subtle-primary btn-sm"><i className="bi bi-file-earmark-text me-1 align-baseline"></i> Reports</button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={6}>
                            <div id="world-map-line-markers" className="custom-vector-map" data-colors='["--tb-light"]' style={{ height: "350px" }}>
                                <VectorMap {...world} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mb-4">
                                <h6 className="text-muted mb-3 fw-medium fs-xs text-uppercase">Compared to last month</h6>
                                <h3>
                                    <CountUp className="counter-value" start={0} end={53736} separator="," />
                                    <small className="text-muted fw-normal fs-sm ms-1">Users</small>
                                </h3>
                            </div>
                            <div>
                                <div ref={chartRef} id="echart" style={{ width: '546px', height: '256px' }}></div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default ActiveUsers;
