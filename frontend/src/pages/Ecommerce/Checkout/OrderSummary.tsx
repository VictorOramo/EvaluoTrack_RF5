import React, { useState } from "react";
import { Badge, Button, Card, Col, Row, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ConfirmOrder } from "Common/DeleteModal";
import { orderproductitem } from "Common/data/OrderProductItem";

const OrderSummaryCheckout = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Col xxl={4}>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <Card.Title className="mb-0">Order Summary</Card.Title>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Badge text="success" className="bg-success-subtle">Valid Time: 5:00</Badge>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <Table className="table-borderless align-middle mb-0">
                                        <thead className="table-active text-muted">
                                            <tr>
                                                <th style={{ width: "90px" }} scope="col">Product</th>
                                                <th scope="col">Product Info</th>
                                                <th scope="col" className="text-end">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (orderproductitem || [])?.map((item: any) => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <td>
                                                                <div className="avatar-md">
                                                                    <div className="avatar-title bg-light rounded">
                                                                        <img src={item.img} alt="" className="avatar-sm" />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <h5 className="fs-md"><Link to={"/apps-ecommerce-product-details"} className="text-dark">{item.title}</Link></h5>
                                                                <p className="text-muted fw-medium mb-0">${item.price} x {item.quantity}</p>
                                                            </td>
                                                            <td className="text-end fw-semibold">${item.price * item.quantity}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            <tr>
                                                <td className="fw-semibold" colSpan={2}>Sub Total :</td>
                                                <td className="fw-semibold text-end">$2,272.95</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Discount <span className="text-muted">(STEEX30)</span> : </td>
                                                <td className="text-end">- $681.89</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Shipping Charge :</td>
                                                <td className="text-end">$49.99</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Estimated Tax (18%): </td>
                                                <td className="text-end">$409.13</td>
                                            </tr>
                                            <tr className="border-top border-dashed">
                                                <th colSpan={2}>Total (USD) :</th>
                                                <td className="text-end">
                                                    <span className="fw-semibold">
                                                        $2,050.18
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5" className="mb-0">Additional Service</Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex form-check form-switch gap-3">
                                <div className="flex-grow-1">
                                    <Form.Check.Label htmlFor="additionalServices" className="fs-md fw-semibold mb-2">Environment Friendly</Form.Check.Label>
                                    <p className="text-muted mb-0">The primary goal of eco-warriors is creating a better world for future generations.</p>
                                </div>
                                <div className="flex-shrink-0 fw-medium">
                                    $25
                                </div>
                                <div className="flex-shrink-0">
                                    <Form.Check className="form-switch">
                                        <Form.Check.Input type="checkbox" role="switch" id="additionalServices" defaultChecked />
                                    </Form.Check>
                                </div>
                            </Card.Body>
                            <Card.Body className="d-flex form-check form-switch gap-3 border-top">
                                <div className="flex-grow-1">
                                    <Form.Check.Label htmlFor="additionalServices2" className="fs-md fw-semibold mb-2">Care + Package</Form.Check.Label>
                                    <p className="text-muted mb-0">Care packages are sent to acknowledge life transitions, from joyous occasions, such as engagements.</p>
                                </div>
                                <div className="flex-shrink-0 fw-medium">
                                    $10
                                </div>
                                <div className="flex-shrink-0">
                                    <Form.Check className="form-switch">
                                        <Form.Check.Input type="checkbox" role="switch" id="additionalServices2" />
                                    </Form.Check>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="text-end d-flex gap-1 justify-content-end">
                    <Button type="button" variant="primary" onClick={handleShow}>Confirm Order</Button>
                    <Link to={"/apps-ecommerce-product-grid"} className="btn btn-secondary">Continue Shopping</Link>
                </div>
            </Col>
            <ConfirmOrder show={show} handleClose={handleClose} />
        </React.Fragment>
    );
}

export default OrderSummaryCheckout;