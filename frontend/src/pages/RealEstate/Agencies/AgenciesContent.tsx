import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverviewList from "./OverviewListing";

//img 
import img5 from "assets/images/companies/img-5.png";

const AgenciesContent = () => {

    const handleStarttoogle = (ele: any) => {
        if (ele.closest('button').classList.contains('active')) {
            ele.closest('button').classList.remove('active')
        } else {
            ele.closest('button').classList.add('active')
        }
    }
    return (
        <React.Fragment>
            <Col xxl={9}>
                <Card>
                    <Card.Body>
                        <Row className="align-items-center justify-content-center g-3">
                            <Col xl={4} md={5} >
                                <div className="text-center bg-info-subtle rounded-3 py-3 ribbon-box page-agency-overview overflow-hidden">
                                    <div className="ribbon ribbon-danger ribbon-shape trending-ribbon">
                                        <span className="trending-ribbon-text">600 Properties</span> <i className="mdi mdi-home-city text-white align-bottom float-end ms-2"></i>
                                    </div>
                                    <img src={img5} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xl={8} md={7}>
                                <div>
                                    <div className="mb-3">
                                        <Card.Title as="h6" className="card-title">Real estate agency</Card.Title>
                                        <p className="text-muted mb-0">Dream house</p>
                                    </div>
                                    <div>
                                        <div className="table-responsive">
                                            <Table className=" table-sm table-nowrap table-borderless mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th>Agency:</th>
                                                        <td><Link to="#">Themesbrand</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Email:</th>
                                                        <td>jacinthe@steex.com</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Contact Number:</th>
                                                        <td>+(27) 3041-1766</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Website:</th>
                                                        <td>https://Themesbrand.com/</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <ul className="list-unstyled hstack gap-2 mb-0 mt-4">
                                            <li>
                                                <Link to="#" className="avatar-xs d-inline-block">
                                                    <div className="avatar-title rounded bg-primary-subtle text-primary">
                                                        <i className="bi bi-facebook"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="avatar-xs d-inline-block">
                                                    <div className="avatar-title bg-success-subtle text-success rounded">
                                                        <i className="bi bi-whatsapp"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="avatar-xs d-inline-block">
                                                    <div className="avatar-title bg-info-subtle text-info rounded">
                                                        <i className="bi bi-twitter"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="avatar-xs d-inline-block">
                                                    <div className="avatar-title bg-danger-subtle text-danger rounded">
                                                        <i className="bi bi-instagram"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body >
                        <Button className="btn btn-subtle-warning custom-toggle float-end btn-icon btn-sm" onClick={(e) => handleStarttoogle(e.target)}>
                            <span className="icon-on"><i className="bi bi-star"></i></span>
                            <span className="icon-off"><i className="bi bi-star-fill"></i></span>
                        </Button>
                        <Card.Title as="h6">About</Card.Title>
                        <p className="text-muted mb-2">Property is <b>any item that a person or a business has legal title over</b>. Property can be tangible items, such as houses, cars, or appliances, or it can refer to intangible items that carry the promise of future worth, such as stock and bond certificates. There are two types of property. In legal terms, all property will be classified as either <b>personal property or real property</b>. This distinction between types of property comes from English common law, but our modern laws continue to distinguish between the two.</p>
                        <p className="text-muted mb-0">Basic Property Unit. Definition. The basic unit of ownership that is recorded in the land books, land registers or equivalent. It is defined by unique ownership and homogeneous real property rights, and may consist of one or more adjacent or geographically separate parcels.</p>
                    </Card.Body>
                </Card>
                <OverviewList />
            </Col>
        </React.Fragment>
    );
};

export default AgenciesContent;