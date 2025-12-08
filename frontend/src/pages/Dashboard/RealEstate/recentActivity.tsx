import React from 'react'
import { Card, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

// Import Images
import avatar1 from 'assets/images/users/32/avatar-1.jpg'
import avatar2 from 'assets/images/users/32/avatar-2.jpg'
import avatar3 from 'assets/images/users/32/avatar-3.jpg'
import avatar5 from 'assets/images/users/32/avatar-5.jpg'
import { Link } from 'react-router-dom';

const RecentActivity = () => {
    return (
        <React.Fragment>
            <Col lg={6}>
                <Card>
                    <Card.Header className="d-flex align-items-center">
                        <Card.Title as="h4" className="mb-0 flex-grow-1">Recent Activity</Card.Title>
                        <div className="flex-shrink-0">
                            <Link to="#" className="text-muted">View All <i className="bi bi-chevron-right align-baseline"></i></Link>
                        </div>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar className="px-3" style={{ height: "255px" }}>
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
                                        <h6 className="mb-1 lh-base">Today offers by <Link to={"/apps-ecommerce-seller-details"} className="link-secondary">Digitech Galaxy</Link></h6>
                                        <p className="text-muted mb-2">Offer is valid on orders of $230 Or above for selected products only.</p>
                                        <small className="mb-0 text-muted">12 Dec, 2022</small>
                                    </div>
                                </div>
                                <div className="acitivity-item py-3 d-flex">
                                    <div className="flex-shrink-0">
                                        <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-1 lh-base">Favorites Product</h6>
                                        <p className="text-muted mb-2">Esther James have favorites product.</p>
                                        <small className="mb-0 text-muted">25 Nov, 2022</small>
                                    </div>
                                </div>
                                <div className="acitivity-item py-3 d-flex">
                                    <div className="flex-shrink-0">
                                        <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-1 lh-base">Flash sale starting <span className="text-primary">Tomorrow.</span></h6>
                                        <p className="text-muted mb-2">Flash sale by <Link to="#" className="link-secondary fw-medium">Zoetic Fashion</Link></p>
                                        <small className="mb-0 text-muted">22 Oct, 2022</small>
                                    </div>
                                </div>
                                <div className="acitivity-item d-flex">
                                    <div className="flex-shrink-0">
                                        <img src={avatar5} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-1 lh-base">Monthly sales report</h6>
                                        <p className="text-muted mb-2"><span className="text-danger">2 days left</span> notification to submit the monthly sales report. <Link to="#" className="link-warning text-decoration-underline">Reports Builder</Link></p>
                                        <small className="mb-0 text-muted">15 Oct, 2022</small>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RecentActivity;
