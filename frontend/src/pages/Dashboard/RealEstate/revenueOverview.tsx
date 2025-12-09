import React from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import CountUp from 'react-countup';
import Flatpickr from 'react-flatpickr';

import { IncomeChart, PropertyRentChart, PropertySaleChart, RevenueChart } from './charts';

const RevenueOverview = () => {
    return (
        <React.Fragment>
            <Col xxl={8}>
                <Card>
                    <Card.Header className="d-flex align-items-center">
                        <h5 className="card-title flex-grow-1 mb-0">Revenue Overview</h5>
                        <div className="flex-shrink-0">
                            <Flatpickr
                                className="form-control form-control-sm"
                                id="date"
                                name="date"
                                placeholder="Select date"
                                options={{
                                    mode: "range",
                                    dateFormat: 'd M, Y',
                                    defaultDate: "01 Feb, 2023 to 28 Feb, 2023"
                                }}
                            />
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Container defaultActiveKey="1">
                            <Row className="align-items-center">
                                <Col lg={3}>
                                    <Nav className="flex-column nav-light nav-pills gap-3" >
                                        <Nav.Link eventKey='1' className="d-flex p-2 gap-3" id="revenue-tab">
                                            <div className="avatar-sm flex-shrink-0">
                                                <div className="avatar-title rounded bg-warning-subtle text-warning fs-2xl">
                                                    <i className="bi bi-coin"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="text-reset"><CountUp end={2478} prefix='$' suffix='M' separator=',' /></h5>
                                                <p className="mb-0">Total Revenue</p>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey='2' className="d-flex p-2 gap-3" id="income-tab">
                                            <div className="avatar-sm flex-shrink-0">
                                                <div className="avatar-title rounded bg-success-subtle text-success fs-2xl">
                                                    <i className="bi bi-coin"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="text-reset"><CountUp prefix='$' end={14587.37} decimals={2} separator=',' /></h5>
                                                <p className="mb-0">Total Income</p>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey='3' className="d-flex p-2 gap-3" id="property-sale-tab" >
                                            <div className="avatar-sm flex-shrink-0">
                                                <div className="avatar-title rounded bg-danger-subtle text-danger fs-2xl">
                                                    <i className="bi bi-coin"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="text-reset"><CountUp end={2365} separator=',' /></h5>
                                                <p className="mb-0">Property Sell</p>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey='4' className="d-flex p-2 gap-3" id="_-tab" >
                                            <div className="avatar-sm flex-shrink-0">
                                                <div className="avatar-title rounded bg-primary-subtle text-primary fs-2xl">
                                                    <i className="bi bi-coin"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="text-reset"><CountUp end={3456} separator=',' /></h5>
                                                <p className="mb-0">Property Rent</p>
                                            </div>
                                        </Nav.Link>
                                    </Nav>
                                </Col>
                                <Col lg={9}>
                                    <Tab.Content className="text-muted">
                                        <Tab.Pane eventKey='1' id="revenue" role="tabpanel">
                                            <RevenueChart dataColors='["--tb-primary"]' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='2' id="income" role="tabpanel">
                                            <IncomeChart dataColors='["--tb-success"]' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='3' id="property-sale" role="tabpanel">
                                            <PropertySaleChart dataColors='["--tb-danger"]' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='4' id="propetry-rent" role="tabpanel">
                                            <PropertyRentChart dataColors='["--tb-info"]' />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RevenueOverview;
