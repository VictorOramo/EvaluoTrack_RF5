import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Import Images
import reactLogo from "../../../../assets/images/learning/react.png";
import laravelLogo from "../../../../assets/images/learning/laravel.png";
import coreLogo from "../../../../assets/images/learning/core.png"
import shopfyLogo from "../../../../assets/images/learning/shopify.png"

import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import avatar6 from "../../../../assets/images/users/avatar-6.jpg";
import avatar10 from "../../../../assets/images/users/avatar-10.jpg";

const Coursedetails = () => {
    return (
        <React.Fragment>
            <Col xl={9} lg={8}>
                <Card>
                    <Card.Body className="d-flex gap-3 align-items-center">
                        <h6 className="card-title flex-grow-1 mb-0">My Courses <span className="badge bg-dark-subtle text-body align-baseline ms-1">23</span></h6>
                        <div className="flex-shrink-0">
                            <Link to="/apps-student-subscriptions" type="button" className="btn btn-primary"><i className="bi bi-bag align-baseline me-1"></i> Upgrade Courses</Link>
                        </div>
                    </Card.Body>
                </Card>
                <Row>
                    <Col lg={12}>
                        <Card className="overflow-hidden">
                            <Row className="g-0">
                                <Col xl={3} md={4}>
                                    <Card.Body className="bg-info-subtle text-center learning-widgets d-flex align-items-center justify-content-center h-100">
                                        <img src={reactLogo} alt="" className="avatar-lg" />
                                        <img src={reactLogo} alt="" className="effect" />
                                    </Card.Body>
                                </Col>
                                <Col xl={9} md={8}>
                                    <Card.Body>
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="flex-grow-1">
                                                <span className="badge bg-success-subtle text-success">Beginner</span>
                                            </div>
                                            <div className="flex-shrink-0 fs-lg fw-medium">
                                                $425.36
                                            </div>
                                        </div>
                                        <h5 className="text-truncate text-capitalize"><Link to="/apps-learning-overview" className="text-reset">Advanced React and Redux</Link></h5>
                                        <p className="text-muted">React Development</p>
                                        <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p className="text-muted mb-0"><i className="bi bi-clock align-baseline text-primary me-1"></i> 6 Months</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-student align-middle text-primary me-1"></i> 256</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-graduation-cap align-middle text-primary me-1"></i> 15 Lessons</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-globe-stand align-middle text-primary me-1"></i> English, France</p>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body className="border-top border-dashed hstack align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                                            <div className="flex-shrink-0">
                                                <img src={avatar2} alt="" className="avatar-xxs rounded-circle" />
                                            </div>
                                            <h6 className="flex-grow-1 mb-0"><Link to="/pages-profile" className="text-reset stretched-link">Ayaan Bowen</Link></h6>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill align-baseline me-1"></i> 4.5</span>
                                        </div>
                                    </Card.Body>
                                    <div >
                                        <ProgressBar now={74} variant="primary" className="progress-sm rounded-0" />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={12}  >
                        <Card className="overflow-hidden">
                            <Row className="row g-0">
                                <Col xl={3} md={4}>
                                    <Card.Body className="card-body bg-danger-subtle text-center learning-widgets d-flex align-items-center justify-content-center h-100">
                                        <img src={laravelLogo} alt="" className="avatar-lg" />
                                        <img src={laravelLogo} alt="" className="effect" />
                                    </Card.Body>
                                </Col>
                                <Col xl={9} md={8}>
                                    <Card.Body>
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="flex-grow-1">
                                                <span className="badge bg-info-subtle text-info">Advance</span>
                                            </div>
                                            <div className="flex-shrink-0 fs-lg fw-medium">
                                                $264.71
                                            </div>
                                        </div>
                                        <h5 className="text-truncate text-capitalize"><Link to="/apps-learning-overview" className="text-reset">Master Laravel for Beginners & Intermediate</Link></h5>
                                        <p className="text-muted">Laravel Development</p>
                                        <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p className="text-muted mb-0"><i className="bi bi-clock align-baseline text-primary me-1"></i> 1 Years</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-student align-middle text-primary me-1"></i> 84</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-graduation-cap align-middle text-primary me-1"></i> 57 Lessons</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-globe-stand align-middle text-primary me-1"></i> English</p>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body className="border-top border-dashed hstack align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                                            <div className="flex-shrink-0">
                                                <img src={avatar6} alt="" className="avatar-xxs rounded-circle" />
                                            </div>
                                            <h6 className="flex-grow-1 mb-0"><Link to="/pages-profile" className="text-reset stretched-link">Ophelia Steuber</Link></h6>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill align-baseline me-1"></i> 4.8</span>
                                        </div>
                                    </Card.Body>
                                    <div>
                                        <ProgressBar now={53} variant="warning" className="progress-sm rounded-0" />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={12}>
                        <Card className="overflow-hidden">
                            <Row className="g-0">
                                <Col xl={3} md={4}>
                                    <Card.Body className="bg-primary-subtle text-center learning-widgets d-flex align-items-center justify-content-center h-100">
                                        <img src={coreLogo} alt="" className="avatar-lg" />
                                        <img src={coreLogo} alt="" className="effect" />
                                    </Card.Body>
                                </Col>
                                <Col xl={9} md={8}>
                                    <Card.Body>
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="flex-grow-1">
                                                <span className="badge bg-danger-subtle text-danger">Intermediate</span>
                                            </div>
                                            <div className="flex-shrink-0 fs-lg fw-medium">
                                                $249.99
                                            </div>
                                        </div>
                                        <h5 className="text-truncate text-capitalize"><Link to="/apps-learning-overview" className="text-reset">Asp.Net Core 7 True Ultimate Guide</Link></h5>
                                        <p className="text-muted">Asp.Net Development</p>
                                        <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p className="text-muted mb-0"><i className="bi bi-clock align-baseline text-primary me-1"></i> 8 Years</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-student align-middle text-primary me-1"></i> 321</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-graduation-cap align-middle text-primary me-1"></i> 95 Lessons</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-globe-stand align-middle text-primary me-1"></i> English, France</p>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body className="border-top border-dashed hstack align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                                            <div className="flex-shrink-0">
                                                <img src={avatar10} alt="" className="avatar-xxs rounded-circle" />
                                            </div>
                                            <h6 className="flex-grow-1 mb-0"><Link to="/pages-profile" className="text-reset stretched-link">Deondre Huel</Link></h6>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill align-baseline me-1"></i> 4.7</span>
                                        </div>
                                    </Card.Body>
                                    <div>
                                        <ProgressBar now={87} variant="success" className="progress-sm rounded-0" />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={12}>
                        <Card className="overflow-hidden">
                            <Row className="g-0">
                                <Col xl={3} md={4}>
                                    <Card.Body className="bg-success-subtle text-center learning-widgets d-flex align-items-center justify-content-center h-100">
                                        <img src={shopfyLogo} alt="" className="avatar-lg" />
                                        <img src={shopfyLogo} alt="" className="effect" />
                                    </Card.Body>
                                </Col>
                                <Col xl={9} md={8}>
                                    <Card.Body >
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="flex-grow-1">
                                                <span className="badge bg-success-subtle text-success">Beginner</span>
                                            </div>
                                            <div className="flex-shrink-0 fs-lg fw-medium">
                                                $134.69
                                            </div>
                                        </div>
                                        <h5 className="text-truncate text-capitalize"><Link to="/apps-learning-overview" className="text-reset">The Complete Shopify Dropship course</Link></h5>
                                        <p className="text-muted">Shopify Development</p>
                                        <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p className="text-muted mb-0"><i className="bi bi-clock align-baseline text-primary me-1"></i> 9 Months</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-student align-middle text-primary me-1"></i> 134</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-graduation-cap align-middle text-primary me-1"></i> 36 Lessons</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-globe-stand align-middle text-primary me-1"></i> English, France</p>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body className="border-top border-dashed hstack align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                                            <div className="flex-shrink-0">
                                                <img src={avatar3} alt="" className="avatar-xxs rounded-circle" />
                                            </div>
                                            <h6 className="flex-grow-1 mb-0"><Link to="/pages-profile" className="text-reset stretched-link">Nelson Schaden</Link></h6>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill align-baseline me-1"></i> 4.9</span>
                                        </div>
                                    </Card.Body>
                                    <div>
                                        <ProgressBar now={30} variant="secondary" className="progress-sm rounded-0" />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    )
}

export default Coursedetails
