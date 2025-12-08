import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { SaleWidgetsCharts } from './charts';

import { saleData } from 'Common/data'

const Sale = () => {

    return (
        <React.Fragment>
            <Card className="card-height-100 border-0 overflow-hidden">
                <Card.Body className="p-0">
                    <Row className="g-0">
                        {(saleData || []).map((item: any, key: number) => (
                            <Col md={6} key={key}>
                                <Card className={item.className}>
                                    <Card.Body>
                                        <Dropdown className="float-end cursor-pointer">
                                            <Dropdown.Toggle as='a' className="text-reset arrow-none">
                                                <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-end">
                                                <Dropdown.Item href="#">Today</Dropdown.Item>
                                                <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                                <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                                <Dropdown.Item href="#">Current Year</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <div id="time_On_Sale" dir="ltr">
                                            <SaleWidgetsCharts periodData={item.series} dataColors={item.dataColors} />
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-uppercase fw-medium text-muted text-truncate fs-sm">{item.name}</p>
                                            <h4 className="fw-semibold mb-3">
                                                <span className="counter-value">
                                                    <CountUp start={0} end={item.amount} suffix={item.suffix} separator="," decimals={item.decimal && 2} />
                                                    {item.amount2 && <CountUp start={0} end={item.amount2} prefix=" " suffix={item.suffix2} />}
                                                </span>
                                            </h4>
                                            <div className="d-flex align-items-center gap-2">
                                                <h5 className={item.isArrow ? "text-success flex-shrink-0 fs-xs mb-0" : "text-danger flex-shrink-0 fs-xs mb-0"}>
                                                    <i className={item.isArrow ? "ri-arrow-right-up-line fs-sm align-middle" : "ri-arrow-right-down-line fs-sm align-middle"}></i> {item.perstange}
                                                </h5>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <p className="text-muted text-truncate mb-0">{item.discription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Sale;
