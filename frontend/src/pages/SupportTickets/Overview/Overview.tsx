import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';

//SimpleBar
import { Link } from 'react-router-dom';
import SimpleBar from "simplebar-react";

//Import Images
import company3 from "../../../assets/images/companies/img-3.png";
import smallImage4 from "../../../assets/images/small/img-4.jpg";
import smallImage5 from "../../../assets/images/small/img-4.jpg";
import avatar6 from "../../../assets/images/users/avatar-6.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";
import avatar10 from "../../../assets/images/users/avatar-10.jpg";



const Overview = () => {
    return (
        <React.Fragment>
            <Col xl={9} lg={8}>
                <Card.Body className="border-end h-100">
                    <Row className="mb-4 pb-2 g-3">
                        <div className="col-auto">
                            <div className="avatar-sm">
                                <div className="avatar-title bg-success-subtle rounded">
                                    <img src={company3} alt="" className="avatar-xs" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md order-3 order-md-2">
                            <div>
                                <h5>#TBS24301901 - Forgetting to start a component name with a capital letter</h5>
                                <div className="hstack gap-2 gap-md-3 flex-wrap">
                                    <div className="text-muted"><i className="ri-building-line align-bottom me-1"></i><span id="ticket-client">Themesbrand</span></div>
                                    <div className="vr"></div>
                                    <div className="text-muted">Create Date : <span className="fw-medium " id="create-date">20 Dec, 2023</span></div>
                                    <div className="vr"></div>
                                    <div className="text-muted">Due Date : <span className="fw-medium" id="due-date">29 Dec, 2023</span></div>
                                    <div className="vr"></div>
                                    <div className="badge rounded-pill bg-info fs-xs" id="ticket-status">New</div>
                                    <div className="badge rounded-pill bg-danger fs-xs" id="ticket-priority">High</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto ms-auto order-2 order-md-3">
                            <Link to="/apps-tickets-list" className="btn btn-primary btn-sm"> Add Ticket</Link>
                        </div>
                    </Row>

                    <h6 className="fw-semibold text-uppercase mb-2">Ticket Descriptions</h6>
                    <p className="text-muted mb-4">It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM. If you need a fast and responsive user interface, ReactJS is the better option. But if you need to handle complex data analysis or number-crunching.</p>
                    <h6 className="fw-semibold text-uppercase mb-3">Create an Excellent UI for a Dashboard</h6>
                    <ul className="text-muted vstack gap-2 mb-4 list-unstyled">
                        <li><i className="bi bi-check-lg text-success"></i> App Registry Error in React</li>
                        <li><i className="bi bi-check-lg text-success"></i> Development Server Error in React</li>
                        <li><i className="bi bi-check-lg text-success"></i> Undefined is not an object error in React</li>
                        <li><i className="bi bi-check-lg text-success"></i> Not following the ReactJS folder structure</li>
                        <li><i className="bi bi-check-lg text-success"></i> Webstorm does not recognize tags</li>
                    </ul>
                    <h6 className="fw-semibold text-uppercase mb-4">Discussion with Themesbrand</h6>
                    <SimpleBar style={{ "height": "300px" }} className="px-3 mx-n3">
                        <div className="d-flex mb-4">
                            <div className="flex-shrink-0">
                                <img src={avatar8} alt="" className="avatar-xs rounded-circle" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6>Joseph Parker <small className="text-muted">20 Dec 2023 - 05:47AM</small></h6>
                                <p className="text-muted">I am getting message from customers that when they place order always get error message .</p>
                                <Link to="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                                <div className="d-flex mt-4">
                                    <div className="flex-shrink-0">
                                        <img src={avatar10} alt="" className="avatar-xs rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6>Alexis Clarke <small className="text-muted">22 Dec 2023 - 02:32PM</small></h6>
                                        <p className="text-muted">Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam.</p>
                                        <Link to="#!" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="flex-shrink-0">
                                <img src={avatar6} alt="" className="avatar-xs rounded-circle" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6>Donald Palmer <small className="text-muted">24 Dec 2023 - 05:20PM</small></h6>
                                <p className="text-muted">If you have further questions, please contact Customer Support from the “Action Menu” on your <Link to="!#" className="text-decoration-underline">Online Order Support</Link>.</p>
                                <Link to="#!" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img src={avatar10} alt="" className="avatar-xs rounded-circle" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6>Alexis Clarke <small className="text-muted">26 min ago</small></h6>
                                <p className="text-muted">Your <Link to="!#" className="text-decoration-underline">Online Order Support</Link> provides you with the most current status of your order. To help manage your order refer to the “Action Menu” to initiate return, contact Customer Support and more.</p>
                                <Row className="g-2 mb-3">
                                    <Col lg={1} sm={2} className="col-6">
                                        <img src={smallImage4} alt="" className="img-fluid rounded" />
                                    </Col>
                                    <div className="col-lg-1 col-sm-2 col-6">
                                        <img src={smallImage5} alt="" className="img-fluid rounded" />
                                    </div>
                                </Row>
                                <Link to="!#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                                <div className="d-flex mt-4">
                                    <div className="flex-shrink-0">
                                        <img src={avatar6} alt="" className="avatar-xs rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6>Donald Palmer <small className="text-muted">8 sec ago</small></h6>
                                        <p className="text-muted">Other shipping methods are available at checkout if you want your purchase delivered faster.</p>
                                        <Link to="!#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SimpleBar>
                    <Form action="#!" className="mt-3">
                        <Row className="g-3">
                            <Col lg={12}>
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Leave a Comments</label>
                                <textarea className="form-control bg-light border-light" id="exampleFormControlTextarea1" rows={3} placeholder="Enter comments"></textarea>
                            </Col>
                            <Col lg={12} className="text-end">
                                <Link to="#!" className="btn btn-success">Post Comments</Link>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Col>
        </React.Fragment>
    )
}

export default Overview
