import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

// Import Images

import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";

import small3 from "assets/images/small/img-3.jpg";
import small5 from "assets/images/small/img-5.jpg";
import small7 from "assets/images/small/img-7.jpg"
import small9 from "assets/images/small/img-9.jpg"
import { Link } from 'react-router-dom';

const TimeLine = () => {

    document.title = "Timeline | Steex - Admin & Dashboard Template"

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Timeline" pageTitle="Pages" />
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h6" className="mb-0">Vertical Timeline 2</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="acitivity-timeline acitivity-main">
                                        <div className="acitivity-item d-flex">
                                            <div className="flex-shrink-0">
                                                <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Purchased by James Price</h6>
                                                <p className="text-muted mb-2">Product noise evolve smartwatch </p>
                                                <small className="mb-0 text-muted">05:57 AM Today</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <img src={avatar1} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Natasha Carey have liked the products</h6>
                                                <p className="text-muted mb-2">Allow users to like products in your WooCommerce store.</p>
                                                <small className="mb-0 text-muted">25 Dec, 2022</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <img src={avatar3} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Today offers by <Link to="/apps-ecommerce-seller-details" className="link-secondary">Digitech Galaxy</Link></h6>
                                                <p className="text-muted mb-2">Offer is valid on orders of $230 Or above for selected products only.</p>
                                                <small className="mb-0 text-muted">12 Dec, 2022</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Favorited Product</h6>
                                                <p className="text-muted mb-2">Esther James have favorited product.</p>
                                                <small className="mb-0 text-muted">25 Nov, 2022</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item py-3 d-flex">
                                            <div className="flex-shrink-0">
                                                <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Flash sale starting <span className="text-primary">Tomorrow.</span></h6>
                                                <p className="text-muted mb-2">Flash sale by
                                                    <a href="/#" className="link-secondary fw-medium">Zoetic Fashion</a></p>
                                                <small className="mb-0 text-muted">22 Oct, 2022</small>
                                            </div>
                                        </div>
                                        <div className="acitivity-item d-flex">
                                            <div className="flex-shrink-0">
                                                <img src={avatar5} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1 lh-base">Monthly sales report</h6>
                                                <p className="text-muted mb-2"><span className="text-danger">2 days left</span> notification to submit the monthly sales report.
                                                    <a href="/#" className="link-warning text-decoration-underline">Reports Builder</a></p>
                                                <small className="mb-0 text-muted">15 Oct, 2022</small>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h6" className="mb-0">Vertical Timeline</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="acitivity-timeline-2 list-unstyled mb-0">
                                        <li>
                                            <h6 className="fs-md">Purchase by James Price</h6>
                                            <p>09:24 PM</p>
                                            <p className="mb-0">Product noise evolve smartwatch</p>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">New ticket received <span className="badge text-bg-info align-middle ms-1">New</span></h6>
                                            <p className="mb-3">4 days ago</p>
                                            <p className="text-muted mb-0">User <span className="text-secondary">Erica245</span> submitted a ticket</p>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">Adding a new event with attachments</h6>
                                            <p className="mb-3">30 days ago</p>
                                            <div className="d-inline-flex gap-2">
                                                <Row className="g-3">
                                                    <div className="col-auto">
                                                        <div className="d-flex position-relative gap-2 border border-dashed p-2 rounded">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-file-earmark-image fs-xl text-danger"></i>
                                                            </div>
                                                            <div className="flex-grow-1 ms-2">
                                                                <a href="/#" className="stretched-link">
                                                                    <h6>UI/UX design</h6>
                                                                </a>
                                                                <small>685 KB</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="d-flex position-relative gap-2 border border-dashed p-2 rounded ">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-file-pdf fs-xl text-info"></i>
                                                            </div>
                                                            <div className="flex-grow-1 ms-2">
                                                                <a href="/#" className="stretched-link">
                                                                    <h6>Steex Invoice</h6>
                                                                </a>
                                                                <small>342 KB</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">Templates layout upload</h6>
                                            <p className="mb-3">1 week ago</p>
                                            <p className="text-muted fst-italic">
                                                Powerful, clean & modern responsive bootstrap 5 admin template. The maximum file size for uploads in this demo :
                                            </p>
                                            <div className="d-flex flex-wrap border border-dashed gap-2 p-2 rounded" >
                                                <img src={small3} alt="" className="avatar-md rounded" />
                                                <img src={small5} alt="" className="avatar-md rounded" />
                                                <img src={small7} alt="" className="avatar-md rounded" />
                                                <img src={small9} alt="" className="avatar-md rounded" />
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>
    )
}

export default TimeLine