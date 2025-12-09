import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from './world.svg.json';

const Sales = () => {
    return (
        <React.Fragment>
            <Col xl={6}>
                <Card>
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Sales by Countries</h4>
                        <div className="flex-shrink-0">
                            <Button className="btn-subtle-primary btn-sm">
                                Export Report
                            </Button>
                        </div>
                    </Card.Header>

                    <Card.Body>
                        <Row>
                            <Col lg={8}>
                                <div id="world-map-line-markers" className='custom-vector-map' style={{ height: "340px" }}>
                                    <VectorMap {...world} />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-4">
                                    <h6 className="text-muted mb-3 fw-medium fs-xs text-uppercase">Compared to last month</h6>
                                    <h3>
                                        <span className="counter-value"><CountUp start={0} end={53736} separator="," /></span>
                                        <small className="text-muted fw-normal fs-sm"> Sales</small>
                                    </h3>
                                </div>
                                <div>
                                    <ul className="list-unstyled vstack gap-2">
                                        <li className="p-2 rounded">
                                            <i className="ri-checkbox-blank-circle-fill text-primary align-bottom me-1"></i> United States <span className="float-end">15,364</span>
                                        </li>
                                        <li className="bg-light-subtle p-2 rounded">
                                            <i className="ri-checkbox-blank-circle-fill text-secondary align-bottom me-1"></i> Greenland <span className="float-end">12,387</span>
                                        </li>
                                        <li className="p-2 rounded">
                                            <i className="ri-checkbox-blank-circle-fill text-info align-bottom me-1"></i> Serbia <span className="float-end">9,123</span>
                                        </li>
                                        <li className="bg-light-subtle p-2 rounded">
                                            <i className="ri-checkbox-blank-circle-fill text-success align-bottom me-1"></i> Russia <span className="float-end">7,108</span>
                                        </li>
                                        <li className="p-2 rounded">
                                            <i className="ri-checkbox-blank-circle-fill text-danger align-bottom me-1"></i> Brazil <span className="float-end">6,731</span>
                                        </li>
                                        <li className="bg-light-subtle p-2 rounded">
                                            <i className="ri-checkbox-blank-circle-fill text-warning align-bottom me-1"></i> Sydney <span className="float-end">3,023</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Sales;
