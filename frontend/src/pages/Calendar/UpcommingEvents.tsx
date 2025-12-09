import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import SimpleBar from "simplebar-react";

// Import Images
import avatar1 from 'assets/images/users/avatar-1.jpg';
import avatar2 from 'assets/images/users/avatar-2.jpg';
import avatar3 from 'assets/images/users/avatar-3.jpg';
import avatar5 from 'assets/images/users/avatar-5.jpg';
import calendar from 'assets/images/calendar.png';

function UpcommingEvents({ categories, onDrag }: any) {

    return (
        <React.Fragment>
            <div className="mb-4">
                <div id="external-events">
                    <p className="text-muted">Drag and drop your event or click in the calendar</p>
                    {(categories || []).map((item: any, key: number) => (
                        <div
                            className="external-event fc-event"
                            key={"cat-" + item.id}
                            data-color={item.type}
                            draggable
                            onDrag={(event: any) => {
                                onDrag(event, item);
                            }
                            }
                        >
                            <i className={"mdi mdi-checkbox-blank-circle font-size-11 text-" + item.type + " me-2"}></i>{item.title}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h5 className="mb-3">Recent Activity</h5>
                <SimpleBar className="px-3 mx-n3 mb-3" style={{ height: "400px" }}>
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
                                <h6 className="mb-1 lh-base">Today offers by <a href={"apps-ecommerce-seller-overview"} className="link-secondary">Digitate Galaxy</a></h6>
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
                                <p className="text-muted mb-2">Esther James have Favorites product.</p>
                                <small className="mb-0 text-muted">25 Nov, 2022</small>
                            </div>
                        </div>
                        <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                                <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1 lh-base">Flash sale starting <span className="text-primary">Tomorrow.</span></h6>
                                <p className="text-muted mb-2">Flash sale by <Link to="#" className="link-secondary fw-medium">Zoetis Fashion</Link></p>
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
            </div>

            <Card className="bg-primary">
                <Card.Body>
                    <div className="d-flex gap-2 align-items-center">
                        <div className="flex-grow-1">
                            <h5 className="text-white">Upgrade to Pro</h5>
                            <p className="text-white-50 mb-0">Event that applications book will appear here.</p>
                        </div>

                        <div className="flex-shrink-0">
                            <img src={calendar} alt="" className="avatar-lg" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default UpcommingEvents;
