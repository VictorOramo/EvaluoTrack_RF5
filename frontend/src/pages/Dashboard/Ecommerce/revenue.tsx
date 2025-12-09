
import React from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap';

import { BudgetChart, RevenueChart, PayoutsChart } from './charts';
import { Revenueseries, Budgetseries, PayoutsSeries } from 'Common/data';

const Revenue = () => {

    const periodData: any = Revenueseries;
    const periodData1: any = Budgetseries;
    const periodData2: any = PayoutsSeries;

    return (
        <React.Fragment>
            <Col xl={8}>
                <Card>
                    <Row className="g-0">
                        <Col xl={9}>
                            <Card.Header className="border-0 align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Revenue</h4>
                                <div className='d-flex gap-1'>
                                    <Button className="btn-subtle-secondary btn-sm">
                                        ALL
                                    </Button>
                                    <Button className="btn-subtle-secondary btn-sm">
                                        1M
                                    </Button>
                                    <Button className="btn-subtle-secondary btn-sm">
                                        6M
                                    </Button>
                                    <Button className="btn-subtle-primary btn-sm">
                                        1Y
                                    </Button>
                                </div>
                            </Card.Header>
                            <Card.Body className="ps-0">
                                <div className="w-100">
                                    <RevenueChart periodData={periodData} dataColors='["--tb-primary", "--tb-secondary"]' />
                                </div>
                            </Card.Body>
                        </Col>
                        <Col xl={3}>
                            <Card.Body className="border-start-xl border-top border-top-xl-0 border-2 h-100">
                                <div>
                                    <p className="text-muted mb-2">Budget (USD)</p>
                                    <h4>$750.36M <small className="text-success fs-sm fw-normal"><i className="ph-arrow-up align-baseline"></i> 2.17%</small></h4>
                                    <p className="text-muted text-truncate">Budget in than last years</p>
                                    <div className="mx-3">
                                        <BudgetChart periodData={periodData1} dataColors='["--tb-primary"]' />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="text-muted mb-2">Payouts (USD)</p>
                                    <h4>$7,45,123 <small className="text-danger fs-sm fw-normal"><i className="ph-arrow-down align-baseline"></i> -1.36%</small></h4>
                                    <p className="text-muted text-truncate">Payouts in than last years</p>
                                    <div className="mx-3">
                                        <PayoutsChart periodData={periodData2} dataColors='["--tb-info"]' />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Button variant='primary' className="w-100" data-bs-toggle="modal" data-bs-target="#addAmount">Add Amount</Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Revenue;
