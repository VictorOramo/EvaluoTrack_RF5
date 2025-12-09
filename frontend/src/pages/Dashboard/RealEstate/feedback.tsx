import React from 'react'
import SimpleBar from 'simplebar-react';

// Import Images
import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar4 from 'assets/images/users/avatar-4.jpg'
import avatar5 from 'assets/images/users/avatar-5.jpg'
import avatar6 from 'assets/images/users/avatar-6.jpg'
import { Card, Col } from 'react-bootstrap';

const Feedback = () => {
  return (
    <React.Fragment>
        <Col xxl={3} lg={6}>
            <Card>
                <Card.Header className="d-flex align-items-center">
                    <h4 className="card-title mb-0 flex-grow-1">Customer Feedback</h4>
                    <div className="flex-shrink-0">
                        <a href="#!" className="text-muted">View All <i className="bi bi-chevron-right align-baseline"></i></a>
                    </div>
                </Card.Header>
                <div className="card-body px-0">
                    <SimpleBar style={{height: "400px"}}>
                        <Card className="border-bottom rounded-0 border-0 shadow-none mb-0">
                            <Card.Body className="pt-0">
                                <div className="d-flex gap-2">
                                    <div className="flex-shrink-0">
                                        <img src={avatar2} alt="" className="avatar-sm rounded"/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <span className="text-muted clearfix float-end">04:47 PM</span>
                                        <h6 className="fs-md mb-1"><a href="#!" className="text-reset">Josefa Weissnat</a></h6>
                                        <div className="text-warning mb-2 fs-xs d-flex gap-1">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="text-muted mb-0">" Themebrand used AnyDesk to fix the bug in Flask and django version. I highly recommend this product! "</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="border-bottom rounded-0 border-0 shadow-none mb-0">
                            <Card.Body>
                                <div className="d-flex gap-2">
                                    <div className="flex-shrink-0">
                                        <img src={avatar3} alt="" className="avatar-sm rounded"/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <span className="text-muted clearfix float-end">11:24 AM</span>
                                        <h6 className="fs-md mb-1"><a href="#!" className="text-reset">Ophelia Steuber</a></h6>
                                        <div className="text-warning mb-2 fs-xs d-flex gap-1">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="text-muted mb-0">" Thank you for this awesome admin panel. I'm very happy with it, it's a pleasure to work with it! "</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="border-bottom rounded-0 border-0 shadow-none mb-0">
                            <Card.Body>
                                <div className="d-flex gap-2">
                                    <div className="flex-shrink-0">
                                        <img src={avatar4} alt="" className="avatar-sm rounded"/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <span className="text-muted clearfix float-end">03:19 PM</span>
                                        <h6 className="fs-md mb-1"><a href="#!" className="text-reset">Dianna Bogan</a></h6>
                                        <div className="text-warning mb-2 fs-xs d-flex gap-1">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="text-muted mb-0">" High theme quality. Very good support, they spent almost an hour remotely to fix a problem. I hope this theme will have a long term support. "</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="border-bottom rounded-0 border-0 shadow-none mb-0">
                            <Card.Body>
                                <div className="d-flex gap-2">
                                    <div className="flex-shrink-0">
                                        <img src={avatar5} alt="" className="avatar-sm rounded"/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <span className="text-muted clearfix float-end">06:39 AM</span>
                                        <h6 className="fs-md mb-1"><a href="#!" className="text-reset">Jerry Emard</a></h6>
                                        <div className="text-warning mb-2 fs-xs d-flex gap-1">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="text-muted mb-0">" There is as lot packed in this template. The savings in time and energy is so worth it. "</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="border-bottom rounded-0 border-0 shadow-none mb-0">
                            <Card.Body>
                                <div className="d-flex gap-2">
                                    <div className="flex-shrink-0">
                                        <img src={avatar6} alt="" className="avatar-sm rounded"/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <span className="text-muted clearfix float-end">09:18 AM</span>
                                        <h6 className="fs-md mb-1"><a href="#!" className="text-reset">Axel Kozey</a></h6>
                                        <div className="text-warning mb-2 fs-xs d-flex gap-1">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="text-muted mb-0">" Works like a component library, a crazy amount of design elements already built and given. "</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SimpleBar>
                </div>
            </Card>
        </Col>
    </React.Fragment>
  );
};

export default Feedback;
