import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

import { OpendealsData } from "Common/data"

const OpenDeals = () => {
    return (
        <React.Fragment>
            <Col xxl={4}>
                <Card>
                    <Card.Header className="align-items-center d-flex">
                        <h6 className="card-title mb-0 flex-grow-1">Open Deals</h6>
                        <Dropdown className="card-header-dropdown flex-shrink-0 cursor-pointer">
                            <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                <span className="fw-semibold text-uppercase">Sort by: </span>
                                <span className="text-muted">Today<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li><Dropdown.Item href="#">Today</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Yesterday</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last 7 Days</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last 30 Days</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">This Month</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last Month</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar className="py-0" style={{ height: "350px", padding: "0px 19.2px"}}>
                            <div className="vstack gap-2">
                                {(OpendealsData || []).map((item: any, key: number) => (
                                    <div className="py-2 px-3 border border-dashed rounded" key={key}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="flex-shrink-0">
                                                <img src={item.image} alt="" className="avatar-sm rounded" />
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h6 className="fs-md text-truncate"><a href="#!" className="text-reset">{item.name}</a></h6>
                                                <p className="text-muted mb-0">{item.date}</p>
                                            </div>
                                            <div className="text-end">
                                                <h5 className="fs-md text-primary mb-0">{item.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default OpenDeals;
