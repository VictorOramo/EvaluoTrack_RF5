import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import BreadCrumb from "Common/BreadCrumb";
import OrderInfo from "./OrderInfo";
import { EcommerceMap } from "../EcommerceMap";

const OrderOverview = () => {
    document.title = "Orders  Overview | Steex - Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Order Overview" pageTitle="Ecommerce" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body className="d-flex align-items-center flex-wrap gap-3">
                                    <div className="flex-grow-1">
                                        <p className="text-muted mb-2">Order Number</p>
                                        <h6 className="fs-md mb-0">#TBS250001</h6>
                                    </div>
                                    <div className="flex-shrink-0 text-end">
                                        <h6 className="fs-md mb-2">15 Feb, 2023 <i className="bi bi-calendar4-event align-baseline ms-1"></i></h6>
                                        <p className="text-muted mb-0">08:54 AM <i className="bi bi-clock align-baseline ms-1"></i></p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Button href={"/apps-invoices-overview"} variant="primary"><i className="ph-download-simple align-middle me-1"></i> Invoice</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <OrderInfo />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header className="d-flex align-items-center flex-wrap gap-2">
                                    <Card.Title className="flex-grow-1 mb-0" as="h6">Order Status</Card.Title>
                                    <div className="flex-shrink-0 d-flex gap-1">
                                        <Button variant="danger" size="sm">
                                            <i className="ph-x align-middle"></i> Cancel Order
                                        </Button>
                                        <Button href={"/apps-invoices-overview"} variant="primary" size="sm">
                                            <i className="ph-download-simple align-middle me-1"></i> Invoice
                                        </Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="progress progress-step-arrow progress-info mb-4">
                                        <a href="#progressbar" className="progress-bar active" role="progressbar" style={{ width: "100%" }}><i className="ph-bag align-baseline me-1 d-none d-lg-inline-block"></i> Order Placed</a>
                                        <a href="#progressbar" className="progress-bar active d-none d-xxl-inline-block" role="progressbar" style={{ width: "100%" }}><i className="ph-package align-middle me-1"></i> Packed</a>
                                        <a href="#progressbar" className="progress-bar pending d-none d-md-inline-block" role="progressbar" style={{ width: "100%" }}><i className="ph-truck align-baseline me-1 d-none d-lg-inline-block"></i> Shipping</a>
                                        <a href="#progressbar" className="progress-bar d-none d-md-inline-block" role="progressbar" style={{ width: "100%" }} ><i className="ph-bicycle align-baseline me-1 d-none d-lg-inline-block"></i> Out For Delivery</a>
                                        <a href="#progressbar" className="progress-bar" role="progressbar" style={{ width: "100%" }}><i className="ph-house-line align-baseline me-1 d-none d-lg-inline-block"></i> Delivered</a>
                                    </div>
                                    <div id="map" className="leaflet-map leaflet-gray" style={{ height: 300 }}>
                                        <EcommerceMap style={{ height: 300 }} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default OrderOverview;