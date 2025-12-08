import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

import { ordersData } from 'Common/data'

const Orders = () => {

    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card card-height-100 border-0 overflow-hidden">
                    <Card.Body className="p-0">
                        <Row className="g-0">
                            {(ordersData || []).map((item: any, key: number) => (
                                <Col md={6} key={key}>
                                    <Card className={item.className}>
                                        <Card.Body>
                                            <Dropdown className="float-end cursor-pointer">
                                                <Dropdown.Toggle as='a' className="text-reset arrow-none">
                                                    <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <li><Dropdown.Item href="#">Today</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#">Last Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#">Last Month</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#">Current Year</Dropdown.Item></li>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <div className="avatar-sm">
                                                <span className={"avatar-title " + item.bgColor + " " + item.textColor + " rounded-circle fs-3"}>
                                                    <i className={item.icon}></i>
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-uppercase fw-medium text-muted text-truncate fs-sm">{item.name}</p>
                                                <h4 className="fw-semibold mb-3">
                                                        <CountUp className="counter-value" start={0} end={item.amount} separator="," prefix={item.prefix} suffix={item.suffix} decimals={item.decimal && 2} />
                                                </h4>

                                                <div className="d-flex flex-wrap align-items-center gap-2">
                                                    <h5 className={item.isArrow ? "text-success flex-shrink-0 fs-xs mb-0" : "text-danger flex-shrink-0 fs-xs mb-0"}>
                                                        <i className={item.isArrow ? "ri-arrow-right-up-line fs-sm align-middle" : "ri-arrow-right-down-line fs-sm align-middle"}></i> {item.perstange}
                                                    </h5>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-muted text-truncate mb-0">than last week</p>
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
            </Col>
        </React.Fragment>
    );
};

export default Orders;
