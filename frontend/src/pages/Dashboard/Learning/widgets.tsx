import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

// Import Images
import shopify from 'assets/images/learning/shopify.png'
import webpack from 'assets/images/learning/webpack.png'
import laravel from 'assets/images/learning/laravel.png'
import react from 'assets/images/learning/react.png'

import { SetudentsChart, CoursesChart, ProgressChart } from './charts';
import { StudentSeries, CourseSeries, ProgressSeries } from 'Common/data';

const Widgets = () => {
    const periodData = StudentSeries
    const periodData1 = CourseSeries
    const periodData2 = ProgressSeries

    return (
        <React.Fragment>
            <Row>
                <Col xxl={9}>
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Body>
                                    <span className="badge bg-success-subtle text-success float-end"><i className="bi bi-arrow-up"></i> 4.65%</span>
                                    <p className="fs-md text-muted mb-4">Total Students</p>
                                    <h3 className="mb-n3"><span><CountUp start={0} end={4879} separator="," /></span>k </h3>
                                    <SetudentsChart periodData={periodData} dataColors='["--tb-light", "--tb-secondary", "--tb-light", "--tb-light", "--tb-light", "--tb-light","--tb-light"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <Card.Body>
                                    <span className="badge bg-danger-subtle text-danger float-end"><i className="bi bi-arrow-down"></i> 1.27%</span>
                                    <p className="fs-md text-muted mb-4">Total Courses</p>
                                    <h3 className="mb-n3"><span><CountUp start={0} end={754} separator="," /></span> </h3>
                                    <CoursesChart periodData={periodData1} dataColors='["--tb-info", "--tb-secondary", "--tb-primary", "--tb-primary", "--tb-primary", "--tb-primary","--tb-primary"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12}>
                            <Card>
                                <Card.Header className="d-flex align-items-center">
                                    <h6 className="card-title mb-0 flex-grow-1">Features Course Categories</h6>
                                    <div className="flex-shrink-0">
                                        <Link to={"/apps-learning-category"} className="icon-link icon-link-hover">View All <i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="g-4">
                                        <Col lg={3} sm={6}>
                                            <div className="text-center">
                                                <div className="avatar-sm mx-auto">
                                                    <div className="avatar-title bg-success-subtle rounded">
                                                        <img src={shopify} alt="" className="avatar-xs" />
                                                    </div>
                                                </div>
                                                <h6 className="text-trucate mb-0 mt-3"><Link to={"/apps-learning-grid"} className="text-reset">Shopify Development</Link></h6>
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div className="text-center">
                                                <div className="avatar-sm mx-auto">
                                                    <div className="avatar-title bg-info-subtle rounded">
                                                        <img src={webpack} alt="" className="avatar-xs" />
                                                    </div>
                                                </div>
                                                <h6 className="text-trucate mb-0 mt-3"><Link to={"/apps-learning-grid"} className="text-reset">Marketing & Management</Link></h6>
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div className="text-center">
                                                <div className="avatar-sm mx-auto">
                                                    <div className="avatar-title bg-danger-subtle rounded">
                                                        <img src={laravel} alt="" className="avatar-xs" />
                                                    </div>
                                                </div>
                                                <h6 className="text-trucate mb-0 mt-3"><Link to={"/apps-learning-grid"} className="text-reset">Laravel Development</Link></h6>
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div className="text-center">
                                                <div className="avatar-sm mx-auto">
                                                    <div className="avatar-title bg-info-subtle rounded">
                                                        <img src={react} alt="" className="avatar-xs" />
                                                    </div>
                                                </div>
                                                <h6 className="text-trucate mb-0 mt-3"><Link to={"/apps-learning-grid"} className="text-reset">React Development</Link></h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col xxl={3}>
                    <Card className="card-height-100">
                        <Card.Header className="d-flex">
                            <h5 className="card-title mb-0 flex-grow-1">Daily Progress</h5>
                            <div className="flex-shrink-0">
                                <Dropdown className="card-header-dropdown sortble-dropdown cursor-pointer">
                                    <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                        <span className="text-muted dropdown-title">Today</span> <i className="mdi mdi-chevron-down ms-1"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <button className="dropdown-item">Today</button>
                                        <button className="dropdown-item">This Week</button>
                                        <button className="dropdown-item">This Month</button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <div className="card-body text-center">
                            <ProgressChart periodData={periodData2} dataColors='["--tb-primary"]' />
                            <p className="text-muted mb-0">Very good, keep improving the quality of your learning</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Widgets;
