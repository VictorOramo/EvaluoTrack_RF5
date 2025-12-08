import React from 'react'
import { Button, Card, Col, Dropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

import { PopularproductsData } from 'Common/data'
import { Link } from 'react-router-dom';

const PopularProducts = () => {
    return (
        <React.Fragment>
            <Col lg={4}>
                <Card>
                    <Card.Header className="d-flex align-items-center">
                        <h4 className="card-title mb-0 flex-grow-1">Popular Products</h4>
                        <div className="flex-shrink-0">
                            <Dropdown className="card-header-dropdown cursor-pointer">
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
                        </div>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar className="px-3" style={{ height: "333px" }}>
                            <div className="vstack gap-2">
                                {(PopularproductsData || []).map((item: any, key: number) => (
                                    <div className="p-2 border border-dashed" key={key}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="avatar-sm flex-shrink-0">
                                                <div className="avatar-title bg-light rounded">
                                                    <img src={item.image} alt="" className="avatar-xs" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <Link to="#!">
                                                    <h6 className="fs-md mb-2">{item.product}</h6>
                                                </Link>
                                                <ul className="hstack list-unstyled gap-2 mb-0 fs-sm fw-medium text-muted">
                                                    <li>
                                                        <i className="ph-star align-baseline"></i> {item.rateing}
                                                    </li>
                                                    <li>
                                                        <i className="ph-shopping-cart align-baseline"></i> {item.cart}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-end">
                                                <h5 className="fs-md text-primary mb-0">{item.price}</h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <Button variant='secondary' className="btn-icon btn-sm" data-bs-toggle="modal" data-bs-target="#productModal"><i className="ph-arrow-right"></i></Button>
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
    )
}

export default PopularProducts;
