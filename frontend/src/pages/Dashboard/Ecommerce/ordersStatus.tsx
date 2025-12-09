import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap';

const OrdersStatus = () => {
  return (
    <React.Fragment>
        <Col xl={4}>
            <Card>
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title mb-0 flex-grow-1">Orders Status</h5>
                    <Dropdown className="card-header-dropdown cursor-pointer">
                        <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                            <i className="ph-dots-three-outline-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                            <li><Dropdown.Item href="#">Current Years</Dropdown.Item></li>
                            <li><Dropdown.Item href="#">Last Years</Dropdown.Item></li>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <Card.Body>
                    <div className="mb-3 pb-1 text-center">
                        <h6 className="mb-0">01 Jan, 2022 - 01 Jan, 2023</h6>
                    </div>

                    <Row className="align-items-center mb-3">
                        <Col lg={4}>
                            <div className="hstack gap-2">
                                <p className="mb-0 flex-grow-1">New</p>
                                <h6 className="mb-0">307</h6>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="progress animated-progress" role="progressbar" aria-label="Basic example">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width: "50%"}}></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-3">
                        <Col lg={4}>
                            <div className="hstack gap-2">
                                <p className="mb-0 flex-grow-1">Pending</p>
                                <h6 className="mb-0">177</h6>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="progress animated-progress" role="progressbar" aria-label="Basic example">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width: "37%"}}></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-3">
                        <Col lg={4}>
                            <div className="hstack gap-2">
                                <p className="mb-0 flex-grow-1">Rejected</p>
                                <h6 className="mb-0">39</h6>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="progress animated-progress" role="progressbar" aria-label="Basic example">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width: "12%"}}></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-3">
                        <Col lg={4}>
                            <div className="hstack gap-2">
                                <p className="mb-0 flex-grow-1">Returns</p>
                                <h6 className="mb-0">17</h6>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="progress animated-progress" role="progressbar" aria-label="Basic example">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger bg-opacity-75" style={{width: "3%"}}></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-3">
                        <Col lg={4}>
                            <div className="hstack gap-2">
                                <p className="mb-0 flex-grow-1">Dispatched</p>
                                <h6 className="mb-0">661</h6>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="progress animated-progress" role="progressbar" aria-label="Basic example">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "57%"}}></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-3">
                        <Col lg={4}>
                            <div className="hstack gap-2">
                                <p className="mb-0 flex-grow-1">Delivered</p>
                                <h6 className="mb-0">1320</h6>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="progress animated-progress" role="progressbar" aria-label="Basic example">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width: "86%"}}></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col lg={4}>
                            <div className="hstack gap-2">
                                <p className="mb-0 flex-grow-1">Cancelled</p>
                                <h6 className="mb-0">74</h6>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="progress animated-progress" role="progressbar" aria-label="Basic example">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{width: "13%"}}></div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </React.Fragment>
  );
};

export default OrdersStatus;
