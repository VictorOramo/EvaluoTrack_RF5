import React from "react";
import { Card, Col, Row, Nav, Tab } from "react-bootstrap";
import GridProperty from "../ListingGrid/gridProperty";
import { estateList } from "Common/data/Listing";
import { Link } from "react-router-dom";

const OverviewTab = () => {
    return (
        <React.Fragment>
            <Tab.Container defaultActiveKey="pills-home">
                <Row className="justify-content-between align-items-center mb-4">
                    <Col sx={4}>
                        <Card.Title as="h5" className="mb-0">Active Listing</Card.Title>
                    </Col>
                    <Col className="col-auto">
                        <Nav variant="pills" className="d-flex gap-2">
                            <Nav.Item>
                                <Nav.Link as="button" eventKey="pills-home" bsPrefix="btn btn-subtle-secondary btn-icon"><i className="bi bi-grid"></i></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="button" eventKey="pills-profile" bsPrefix="btn btn-subtle-secondary btn-icon"><i className="bi bi-list-task"></i></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Tab.Content>
                    <Tab.Pane eventKey="pills-home">
                        <GridProperty data={estateList} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-profile">
                        <Row>
                            {
                                (estateList || [])?.slice(0, 4)?.map((item: any) => {
                                    return (
                                        <Col lg={12} md={6} key={item.id}>
                                            <Card>
                                                <Card.Body>
                                                    <Row className="gy-3">
                                                        <Col xxl={2} lg={3}>
                                                            <div className="position-relative">
                                                                <img src={item.img?.priview} alt={item.imgalt} className="img-fluid rounded h-100" />
                                                                <div className="position-absolute bottom-0 start-0 m-2">
                                                                    <span className="badge bg-white text-danger fs-xxs"><i className="bi bi-house-door align-baseline me-1"></i> {item.type}</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xxl={7} lg={6}>
                                                            <div className="d-flex flex-column h-100">
                                                                <div>
                                                                    <h6 className="fs-lg text-capitalize text-truncate"><a href="#!" className="text-reset">{item.title}</a></h6>
                                                                    <p className="text-muted"><i className="bi bi-geo-alt align-baseline me-1"></i> {item.location}</p>
                                                                </div>
                                                                <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                                    <li>
                                                                        <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> {item.Bedroom} Bedroom</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> {item.bathtub} Bathroom</p>
                                                                    </li>
                                                                    <li>
                                                                        <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> {item.area} sqft</p>
                                                                    </li>
                                                                </ul>
                                                                <p className="text-muted mb-0">Agent: <b>{item.agent}</b></p>
                                                            </div>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <div className="d-flex flex-lg-column justify-content-between justify-content-lg-start text-lg-end gap-3 h-100">
                                                                <h5 className="mb-0">{item.price}</h5>
                                                                <div className="mt-auto">
                                                                    <a href="#!" className="link-effect">Read More <i className="bi bi-chevron-right align-baseline ms-1"></i></a>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <Row className="align-items-center mb-4 justify-content-between text-center text-sm-start" id="pagination-element">
                            <Col className="col-sm">
                                <div className="text-muted">
                                    Showing <span className="fw-semibold">4</span> of <span className="fw-semibold">6</span> Results
                                </div>
                            </Col>
                            <Col className="col-sm-auto  mt-3 mt-sm-0">
                                <div className="pagination-wrap hstack gap-2">
                                    <Link className="page-item pagination-prev disabled" to="#">
                                        Previous
                                    </Link>
                                    <ul className="pagination listjs-pagination mb-0">
                                        <li className="active"><Link className="page" to="#" data-i="1" data-page="10">1</Link></li>
                                        <li><Link className="page" to="#" data-i="2" data-page="10">2</Link></li>
                                    </ul>
                                    <Link className="page-item pagination-next" to="#">
                                        Next
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Tab.Pane>
                </Tab.Content>


            </Tab.Container>
        </React.Fragment>
    );
}

export default OverviewTab;