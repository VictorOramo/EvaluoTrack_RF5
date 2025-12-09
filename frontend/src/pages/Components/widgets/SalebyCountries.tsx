import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { EmailSentColors, RealizedRateColors } from './widgetAllCharts';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from './world.svg.json';

const SalebyCountries = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Sales by Countries</h4>
                            <div className="flex-shrink-0">
                                <button type="button" className="btn btn-subtle-primary btn-sm">
                                    Export Report
                                </button>
                            </div>
                        </Card.Header>
                        <Card.Body>

                            <Row>
                                <Col lg={8}>
                                    <div id="world_map_line_markers" className="custom-vector-map">
                                        <VectorMap {...world} style={{height: "340px",width: "475" }}/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-4">
                                        <h6 className="text-muted mb-3 fw-medium fs-xs text-uppercase">Compared to last month</h6>
                                        <h3><span className="counter-value" data-target="40"><CountUp end={53736} separator=',' /></span> <small className="text-muted fw-normal fs-sm">Sales</small></h3>
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
                <div className="col-xl-3 col-lg-6">
                    <Card>
                        <Card.Header className="align-items-center d-flex">
                            <h6 className="card-title mb-0 flex-grow-1">Realized Rate</h6>

                            <Dropdown className="flex-shrink-0">
                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='arrow-none'>
                                    <i className="bi bi-three-dots-vertical text-dark"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Current Years</Dropdown.Item>
                                    <Dropdown.Item href="#">Last Years</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div id="realized_rate" className="apex-charts" dir="ltr">
                                <RealizedRateColors dataColors='["--tb-primary", "--tb-secondary", "--tb-danger"]' />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Col xl={3} lg={6}>
                    <Card>
                        <Card.Header className="align-items-center d-flex">
                            <h6 className="card-title mb-0 flex-grow-1">Email Sent</h6>

                            <Dropdown className="flex-shrink-0">
                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='dark'>
                                    <i className="bi bi-three-dots-vertical text-dark" ></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Current Years</Dropdown.Item>
                                    <Dropdown.Item href="#">Last Years</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div id="emailSent" dir="ltr">
                                <EmailSentColors dataColors='["--tb-primary", "--tb-success", "--tb-secondary"]' />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SalebyCountries