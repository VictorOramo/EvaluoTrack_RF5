import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';
import { LatestOrdersTable } from './latestOrdersTable';

const LatestOrders = () => {
    return (
        <React.Fragment>
            <Col lg={8}>
                <Card id="contactList">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Latest Orders</h4>
                        <div className="flex-shrink-0">
                            <Dropdown className="card-header-dropdown sortble-dropdown cursor-pointer">
                                <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                    <span className="fw-semibold text-uppercase fs-12">Sort by: </span>
                                    <span className="text-muted dropdown-title">Order Date</span> <i className="mdi mdi-chevron-down ms-1"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item as='button' className="sort" data-sort="order_date">Order Date</Dropdown.Item>
                                    <Dropdown.Item as='button' className="sort" data-sort="order_id">Order ID</Dropdown.Item>
                                    <Dropdown.Item as='button' className="sort" data-sort="amount">Amount</Dropdown.Item>
                                    <Dropdown.Item as='button' className="sort" data-sort="status">Status</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="table-responsive">
                            
                            {/* LatestOrdersTable */}
                            <LatestOrdersTable />

                            <div className="noresult" style={{ display: "none" }}>
                                <div className="text-center">
                                    {/* <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style="width:75px;height:75px"></lord-icon> */}
                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                    <p className="text-muted mb-0">We've searched more than 150+ transactions We did not find any transactions for you search.</p>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default LatestOrders;
