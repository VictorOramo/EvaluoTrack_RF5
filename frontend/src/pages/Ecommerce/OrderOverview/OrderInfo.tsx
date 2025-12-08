import React from "react";
import { Row, Col, Card, Button, Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

//img
import avatar from 'assets/images/users/48/avatar-1.jpg';
import barcode from "assets/images/barcode.svg";
import { orderdateails, orderproductitem } from "Common/data/OrderProductItem";

const OrderInfo = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={3} md={6}>
                    <Card border="secondary" className="border-bottom border-2">
                        <Card.Body className="d-flex gap-3">
                            <div className="flex-grow-1">
                                <Card.Title className="mb-3">Customer Info</Card.Title>
                                <p className="fw-medium fs-md mb-1">Bryana Watsica</p>
                                <p className="text-muted mb-1">watsica@steex.com</p>
                                <p className="text-muted mb-0">+(253) 01234 56789</p>
                            </div>
                            <div className="flex-shrink-0">
                                <img src={avatar} alt="" className="avatar-sm rounded img-thumbnail" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={6}>
                    <Card border="primary" className="border-bottom border-2">
                        <Card.Body className="d-flex gap-3">
                            <div className="flex-grow-1">
                                <Card.Title className="mb-3">Shipping Info</Card.Title>
                                <p className="fw-medium fs-md mb-1">Jennifer Mayert</p>
                                <p className="text-muted mb-1">730 Madison Ave, Covington</p>
                                <p className="text-muted mb-0">Kentucky, United States</p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="avatar-sm">
                                    <div className="avatar-title bg-primary-subtle text-primary fs-3 rounded">
                                        <i className="ph-truck"></i>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={6}>
                    <Card border="info" className="border-bottom border-2">
                        <Card.Body className="d-flex gap-3">
                            <div className="flex-grow-1">
                                <Card.Title className="mb-3">Billing Info</Card.Title>
                                <p className="fw-medium fs-md mb-1">Bryana Watsica</p>
                                <p className="text-muted mb-1">730 Madison Ave, Covington</p>
                                <p className="text-muted mb-0">Kentucky, United States</p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="avatar-sm">
                                    <div className="avatar-title bg-info-subtle text-info fs-3 rounded">
                                        <i className="ph-file-text"></i>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={6}>
                    <Card border="light" className="border-bottom border-2">
                        <Card.Body className="d-flex gap-3">
                            <div className="flex-grow-1">
                                <Card.Title className="mb-3">Payment Info</Card.Title>
                                <p className="fw-medium fs-md mb-1">ID: #TBS3650259845</p>
                                <p className="text-muted mb-1">Payment Method: <b>Debit Card</b></p>
                                <p className="text-muted mb-0">Card Number: <b>xxxx xxxx xxxx 2456</b></p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="avatar-sm">
                                    <div className="avatar-title bg-light text-body fs-3 rounded">
                                        <i className="ph-currency-circle-dollar"></i>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={9}>
                    <Card>
                        <Card.Header className="d-flex align-items-center gap-3">
                            <Card.Title className="mb-0 flex-grow-1">Product Items</Card.Title>
                            <div className="flex-shrink-0">
                                <Button type="button" variant="danger" size="sm"><i className="ph-x align-middle"></i> Cancel Order</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="align-middle table-nowrap table-borderless">
                                    <thead className="table-active">
                                        <tr>
                                            <th>Product Items</th>
                                            <th>Item Price</th>
                                            <th>Quantity</th>
                                            <th className="text-end">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (orderproductitem || [])?.map((item: any) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <div className="product-item d-flex align-items-center gap-2">
                                                                <div className="avatar-sm flex-shrink-0">
                                                                    <div className="avatar-title bg-light rounded">
                                                                        <img src={item.img} alt="" className="avatar-xs" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h6 className="fs-md"><Link to={'/apps-ecommerce-product-details'} className="text-reset">{item.title}</Link></h6>
                                                                    <p className="text-muted mb-0"><Link to="#" className="text-reset">{item.category}</Link></p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>${item.price}</td>
                                                        <td>{item.quantity}</td>
                                                        <td className="fw-medium text-end">{item.amount}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            <Row className="gy-3">
                                {
                                    (orderdateails || [])?.map((item: any) => {
                                        return (
                                            <Col sm={6} lg={6} xl={3} key={item.id}>
                                                <div className="text-center border border-dashed p-3 rounded">
                                                    <p className="text-muted mb-2">{item.title}</p>
                                                    <h6 className="fs-md mb-0">{item.date}</h6>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                                <Col sm={6} lg={6} xl={3} >
                                    <div className="text-center border border-dashed p-3 rounded">
                                        <p className="text-muted mb-2">Order Status</p>
                                        <Badge text="danger" className="bg-danger-subtle mb-0">Out of Delivery</Badge>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Row>
                        <Col xxl={12} lg={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title className="mb-0" as="h6">Total order amount</Card.Title>
                                </Card.Header>
                                <Card.Body className="pt-4">
                                    <div className="table-responsive table-card">
                                        <Table className="table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>Sub Total :</td>
                                                    <td className="text-end">$2,272.95</td>
                                                </tr>
                                                <tr>
                                                    <td>Discount <span className="text-muted">(STEEX30)</span> : :</td>
                                                    <td className="text-end">-$681.89</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Charge :</td>
                                                    <td className="text-end">$49.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax :</td>
                                                    <td className="text-end">$409.13</td>
                                                </tr>
                                                <tr className="border-top border-top-dashed">
                                                    <th scope="row">Total (USD) :</th>
                                                    <th className="text-end">$2,050.18</th>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} lg={6}>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <h5 className="flex-grow-1 mb-0">Logistics Details</h5>
                                        <div className="flex-shrink-0">
                                            <Link to="#" className="badge bg-secondary-subtle text-secondary">Track Order</Link>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="border-top border-dashed">
                                    <div>
                                        <h6 className="text-muted float-end mb-0">ID: MFDS1400457854</h6>
                                        <h5 className="clearfix"><Link to="#" className="text-reset">Themesbrand</Link></h5>
                                        <p className="text-muted mb-2 mb-md-0">Scan barcode to track </p>
                                        <div className="text-center p-3 pb-0">
                                            <img alt="Scan Me!" src={barcode} className="img-fluid" />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </React.Fragment>
    );
};

export default OrderInfo;