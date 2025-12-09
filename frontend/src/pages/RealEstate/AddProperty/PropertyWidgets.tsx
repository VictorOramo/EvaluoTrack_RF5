import React from 'react';
import { Button, Card, Col, Dropdown } from 'react-bootstrap';

//import Images
import realEstate1 from "../../../assets/images/real-estate/img-01.jpg";
import { Link } from 'react-router-dom';

const PropertyWidgets = () => {
    return (
        <React.Fragment>
            <Col lg={3}>
                <Card className="real-estate-grid-widgets card-animate">
                    <Card.Body className="p-2">
                        <img src={realEstate1} alt="" className="img-fluid rounded mx-auto d-block" />
                        <Button variant="subtle-warning" className="custom-toggle btn-icon btn-sm active">
                            <span className="icon-on"><i className="bi bi-star"></i></span>
                            <span className="icon-off"><i className="bi bi-star-fill"></i></span>
                        </Button>
                        <Dropdown className="dropdown-real-estate cursor-pointer">
                            <Dropdown.Toggle bsPrefix="btn btn-light btn-icon btn-sm">
                                <i className="bi bi-three-dots-vertical"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#!"><i className="bi bi-pencil-square me-1 align-baseline"></i> Edit</Dropdown.Item>
                                <Dropdown.Item href="#!"><i className="bi bi-trash3 me-1 align-baseline"></i> Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                    <Card.Body className="p-3">
                        <p className="text-muted float-end mb-0"><i className="bi bi-star text-warning align-baseline me-1"></i> 4.5</p>
                        <span className="badge bg-danger-subtle text-danger fs-xxs mb-3"><i className="bi bi-house-door align-baseline me-1"></i> Villa</span>
                        <Link to="#!">
                            <h6 className="fs-lg text-capitalize text-truncate">the Country House</h6>
                        </Link>
                        <p className="text-muted"><i className="bi bi-geo-alt align-baseline me-1"></i> West Midlands, United Kingdom</p>
                        <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                            <li>
                                <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom</p>
                            </li>
                            <li>
                                <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom</p>
                            </li>
                            <li>
                                <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 1458 sqft</p>
                            </li>
                        </ul>
                        <div className="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <h5 className="mb-0">$2451.39</h5>
                            <Link to="/apps-real-estate-property-overview" className="link-effect">Read More <i className="bi bi-chevron-right align-baseline ms-1"></i></Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default PropertyWidgets
