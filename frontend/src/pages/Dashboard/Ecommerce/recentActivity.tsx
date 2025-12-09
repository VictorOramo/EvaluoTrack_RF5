import React from 'react'
import { Card, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

// Import Images
import avatar2 from 'assets/images/users/avatar-2.jpg'
import { Link } from 'react-router-dom';

const RecentActivity = () => {
    return (
        <React.Fragment>
            <Col xl={4} lg={6}>
                <Card className="card-height-100">
                    <Card.Header className="d-flex">
                        <Card.Title as="h5" className="flex-grow-1 mb-0">Recent Activity</Card.Title>
                        <div className="flex-shrink-0">
                            <Link to="#" className="btn btn-subtle-info btn-sm">View More <i className="ph-caret-right align-middle"></i></Link>
                        </div>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar className="px-3" style={{ height: "258px" }}>
                            <div className="acitivity-timeline acitivity-main">
                                <div className="acitivity-item d-flex">
                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                        <div className="avatar-title bg-success-subtle text-success rounded-circle">
                                            <i className="ph-shopping-cart"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-1 lh-base">Purchased by James Price</h6>
                                        <p className="text-muted mb-2">Product noise evolve smartwatch </p>
                                        <small className="mb-0 text-muted">05:57 AM Today</small>
                                    </div>
                                </div>
                                <div className="acitivity-item py-3 d-flex">
                                    <div className="flex-shrink-0">
                                        <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-1 lh-base">Natasha Carey have liked the products</h6>
                                        <p className="text-muted mb-2">Allow users to like products in your WooCommerce store.</p>
                                        <small className="mb-0 text-muted">25 Dec, 2022</small>
                                    </div>
                                </div>
                                <div className="acitivity-item py-3 d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-xs acitivity-avatar">
                                            <div className="avatar-title rounded-circle bg-secondary-subtle text-secondary">
                                                <i className="mdi mdi-sale fs-md"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-1 lh-base">Today offers by <Link to={"/apps-ecommerce-seller-details"} className="link-secondary">Digitech Galaxy</Link></h6>
                                        <p className="text-muted mb-2">Offer is valid on orders of $230 Or above for selected products only.</p>
                                        <small className="mb-0 text-muted">12 Dec, 2022</small>
                                    </div>
                                </div>
                                <div className="acitivity-item py-3 d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-xs acitivity-avatar">
                                            <div className="avatar-title rounded-circle bg-warning-subtle text-warning">
                                                <i className="ri-bookmark-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-1 lh-base">Favoried Product</h6>
                                        <p className="text-muted mb-2">Esther James have favorited product.</p>
                                        <small className="mb-0 text-muted">25 Nov, 2022</small>
                                    </div>
                                </div>
                                <div className="acitivity-item py-3 d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-xs acitivity-avatar">
                                            <div className="avatar-title rounded-circle bg-secondary-subtle text-secondary">
                                                <i className="mdi mdi-sale fs-md"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-1 lh-base">Flash sale starting <span className="text-primary">Tomorrow.</span></h6>
                                        <p className="text-muted mb-2">Flash sale by <Link to="#" className="link-secondary fw-medium">Zoetic Fashion</Link></p>
                                        <small className="mb-0 text-muted">22 Oct, 2022</small>
                                    </div>
                                </div>
                                <div className="acitivity-item d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-xs acitivity-avatar">
                                            <div className="avatar-title rounded-circle bg-info-subtle text-info">
                                                <i className="ri-line-chart-line"></i>
                                            </div>
                                        </div>
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
