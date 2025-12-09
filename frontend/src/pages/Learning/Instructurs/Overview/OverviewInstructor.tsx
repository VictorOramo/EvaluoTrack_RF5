import BreadCrumb from "Common/BreadCrumb";
import React from "react";
import { Badge, Card, Col, Container, Row, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import PortfolioInstructor from "./PortfolioInstructor";
import OverviewChart from "./Overviewchart";

//img
import learning01 from "assets/images/learning/img-01.jpg";
import avatar2 from "assets/images/users/avatar-2.jpg";
import { ToastContainer } from "react-toastify";

const OverviewInstructor = () => {

    document.title = "Overview | Steex - Admin & Dashboard Template";

    const handleConnect = (ele: any) => {
        if (ele.closest('button').classList.contains('active')) {
            ele.closest('button').classList.remove('active')
        } else {
            ele.closest('button').classList.add('active')
        }
    }
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Overview" pageTitle="Instructors" />
                    <Row>
                        <Col lg={12}>
                            <Card className="overflow-hidden">
                                <div className="rounded instructor-profile position-relative" style={{ backgroundImage: `url(${learning01})` }}>
                                    <div className="bg-overlay bg-primary"></div>
                                    <Link to="#" className="btn btn-secondary position-absolute end-0 top-0 m-3"><i className="bi bi-pencil-square align-baseline me-1"></i> Edit Profile</Link>
                                </div>
                                <Card.Body>
                                    <div className="position-relative">
                                        <div className="mt-n5">
                                            <img src={avatar2} alt="" className="avatar-lg rounded-circle p-1 mt-n4" />
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <Row className=" justify-content-between gy-4">
                                            <Col xl={4} lg={4}>
                                                <h5 className="fs-xl">Ayaan Bowen <Badge bg="success" className="border border-2 border-white rounded-circle p-1"><span></span></Badge></h5>
                                                <div className="hstack gap-3 mb-3 text-muted">
                                                    <div><i className="bi bi-geo-alt align-middle me-1"></i> Phoenix, USA</div>
                                                    <div><i className="ph ph-chalkboard align-middle me-1"></i> 231 Courses </div>
                                                    <div><i className="ph ph-student align-middle me-1"></i> 874 Students</div>
                                                </div>
                                                <p className="mb-2">Shopify Developer</p>
                                                <p className="text-muted">Shopify developers are experts in building online stores, themes and apps using the shopify platform.</p>
                                                <div className="d-flex align-items-center gap-2 mb-3">
                                                    <div className="flex-shrink-0">
                                                        <i className="ph ph-graduation-cap align-middle"></i>
                                                    </div>
                                                    Master of Engineering in California State University System
                                                </div>
                                                <div className="hstack gap-2">
                                                    <Button type="button" variant="primary" className="custom-toggle" onClick={(e) => handleConnect(e.target)}>
                                                        <span className="icon-on"><i className="bi bi-person me-1"></i> Connect</span>
                                                        <span className="icon-off"><i className="bi bi-check-lg me-1"></i> Unconnect</span>
                                                    </Button>
                                                    <Button type="button" className="btn btn-subtle-secondary btn-icon"><i className="bi bi-chat-left-text"></i></Button>
                                                    <Dropdown className="cursor-pointer">
                                                        <Dropdown.Toggle bsPrefix="btn btn-subtle-info btn-icon" type="button">
                                                            <i className="bi bi-three-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </Col>
                                            <Col xl={3} lg={5}>
                                                <div>
                                                    <p className="text-muted fw-medium mb-2">Language Knows</p>
                                                    <ul className="list-inline mb-4">
                                                        <li className="list-inline-item">
                                                            <Badge text="info" className="bg-info-subtle">English</Badge>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Badge text="info" className=" bg-info-subtle">Russian</Badge>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Badge text="info" className=" bg-info-subtle">Chinese</Badge>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="text-muted fw-medium mb-2">Featured Skills</p>
                                                    <ul className="d-flex gap-2 flex-wrap list-unstyled mb-0">
                                                        <li>
                                                            <Badge text="dark" className="bg-dark-subtle">UI/UX Design</Badge>
                                                        </li>
                                                        <li>
                                                            <Badge text="dark" className="bg-dark-subtle">Shopify Development</Badge>
                                                        </li>
                                                        <li>
                                                            <Badge text="dark" className="bg-dark-subtle">Social Ads Management</Badge>
                                                        </li>
                                                        <li>
                                                            <Badge text="dark" className="bg-dark-subtle">Content SEO</Badge>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body className="pb-1">
                                    <Card.Title as="h5" className="mb-0 flex-shrink-0">Student Activity</Card.Title>
                                </Card.Body>
                                <Card.Body className="pt-0 ps-1 mt-lg-n4">
                                    <div id="session_chart" className="apex-charts" dir="ltr">
                                        <OverviewChart dataColors='["--tb-primary", "--tb-secondary"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <PortfolioInstructor />
                </Container>
            </div>
            <ToastContainer />
        </React.Fragment>
    );
}

export default OverviewInstructor;