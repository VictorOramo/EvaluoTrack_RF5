import React from "react";
import { Card, Col, Container, Row, Table, ProgressBar, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { GoogleApiWrapper, Map } from "google-maps-react";
import BreadCrumb from "Common/BreadCrumb";
import PortfolioOverview from "./PortfolioOverview";

//img 
import img1 from "assets/images/companies/img-1.png";
import { ToastContainer } from "react-toastify";

const mapStyles = {
    width: '100%',
    height: '100%',
};

const LoadingContainer = () => <div>Loading...</div>

const SellersOverview = (props: any) => {
    document.title = "Sellers Overview | Steex - Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Sellers Overview" pageTitle="Ecommerce" />
                    <Row>
                        <PortfolioOverview />
                        <Col xxl={3}>
                            <Card className="overflow-hidden">
                                <div className="ratio ratio-16x9">
                                </div>
                                <Card.Body className="pt-1">
                                    <div className="avatar-lg mt-n5 position-relative mx-auto">
                                        <div className="avatar-title bg-body-secondary rounded shadow">
                                            <img src={img1} alt="" className="avatar-sm" />
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <h5 className="mb-2">Terry &amp; Jerry</h5>
                                        <p className="text-muted mb-4 pb-2">Manufacture &amp; Retail</p>
                                    </div>
                                    <div className="table-responsive table-card">
                                        <Table className="align-middle table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th>Owner Name</th>
                                                    <td>Lenna Labadie</td>
                                                </tr>
                                                <tr>
                                                    <th>Company Type</th>
                                                    <td>Partnership</td>
                                                </tr>
                                                <tr>
                                                    <th>Location</th>
                                                    <td>United States</td>
                                                </tr>
                                                <tr>
                                                    <th>Website</th>
                                                    <td><Link to="#" className="text-reset">steex@themesbrand.com</Link></td>
                                                </tr>
                                                <tr>
                                                    <th>Phone Number</th>
                                                    <td><Link to="tel:+(542) 95135 74123">+(542) 95135 74123</Link></td>
                                                </tr>
                                                <tr>
                                                    <th>Since</th>
                                                    <td>1995</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <ul className="hstack gap-2 justify-content-center list-unstyled mt-4 pt-2 mb-0">
                                        <li>
                                            <Link to="#" className="btn btn-success btn-sm"><i className="bi bi-whatsapp"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="btn btn-primary btn-sm"><i className="bi bi-facebook"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="btn btn-info btn-sm"><i className="bi bi-twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="btn btn-danger btn-sm"><i className="bi bi-envelope"></i></Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                            <Card >
                                <Card.Body>
                                    <div>
                                        <h6 className="text-muted text-uppercase fw-semibold mb-4">Customer Reviews</h6>
                                        <div>
                                            <div>
                                                <div className="bg-warning-subtle px-3 py-2 rounded-2 mb-2">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <div className="fs-lg align-middle text-warning">
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-half-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <h6 className="mb-0">4.8 out of 5</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-muted">Total <span className="fw-medium">5.50k</span> reviews</div>
                                                </div>
                                            </div>

                                            <div className="mt-3">
                                                <Row className="align-items-center g-3 pt-2">
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0">5 star</h6>
                                                        </div>
                                                    </Col>
                                                    <Col className="col">
                                                        <ProgressBar now={50.16} variant="primary" className="animated-progress progress-sm" />
                                                    </Col>
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">2758</h6>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className="align-items-center g-3 pt-2">
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0">4 star</h6>
                                                        </div>
                                                    </Col>
                                                    <Col className="col">
                                                        <ProgressBar now={29.32} variant="secondary" className="animated-progress progress-sm" />
                                                    </Col>
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">1063</h6>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className="align-items-center g-3 pt-2">
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0">3 star</h6>
                                                        </div>
                                                    </Col>
                                                    <Col className="col">
                                                        <ProgressBar now={18.12} variant="success" className="animated-progress progress-sm" />
                                                    </Col>
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">997</h6>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row className="align-items-center g-3 pt-2">
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0">2 star</h6>
                                                        </div>
                                                    </Col>
                                                    <Col className="col">
                                                        <ProgressBar now={4.98} variant="warning" className="animated-progress progress-sm" />
                                                    </Col>
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">227</h6>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className="align-items-center g-3 pt-2">
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0">1 star</h6>
                                                        </div>
                                                    </Col>
                                                    <Col className="col">
                                                        <ProgressBar now={7.42} variant="danger" className="animated-progress progress-sm" />
                                                    </Col>
                                                    <Col className="col-auto">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">408</h6>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <h6 className="card-title mb-0">Contact Support</h6>
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Control as="textarea" rows={4} placeholder="Enter your messages..." />
                                        </Form.Group>
                                        <div className="text-end">
                                            <Button variant="secondary" type="submit">
                                                <i className="bi bi-envelope align-baseline me-1"></i> Send Messages
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ToastContainer />
        </React.Fragment>
    );
}

/*export default (
    GoogleApiWrapper({
        apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
        LoadingContainer: LoadingContainer,
        // v: "3",
    })(SellersOverview)
)*/