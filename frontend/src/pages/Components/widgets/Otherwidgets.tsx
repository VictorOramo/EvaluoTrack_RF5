import React from 'react'
import { Card, Col, Dropdown, Nav, Row, Tab, Table } from 'react-bootstrap';

// import images

import chrome from "assets/images/brands/chrome.png";
import fire from "assets/images/brands/firefox.png";
import safari from "assets/images/brands/safari.png";
import opera from "assets/images/brands/opera.png";
import micro from "assets/images/brands/microsoft.png";
import micro2 from "assets/images/brands/microsoft2.png";
import chro from "assets/images/brands/chromium.png";
import realestate8 from "assets/images/real-estate/img-08.jpg";
import realestate7 from "assets/images/real-estate/img-07.jpg";
import realestate1 from "assets/images/real-estate/img-01.jpg"
import realestate2 from "assets/images/real-estate/img-02.jpg";
import realestate3 from "assets/images/real-estate/img-03.jpg";
import realestate4 from "assets/images/real-estate/img-04.jpg"
import realestate5 from "assets/images/real-estate/img-05.jpg";

import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar4 from "assets/images/users/avatar-4.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";
import avatar6 from "assets/images/users/avatar-6.jpg";
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';



const Otherwidgets = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <h5 className="text-decoration-underline mb-3 pb-1">Other Widgets</h5>
                </div>
            </Row>

            <Row>
                <Col xxl={4} lg={6}>
                    <Card id="networks">
                        <Card.Header className=" d-flex">
                            <h5 className="card-title mb-0 flex-grow-1">Browsers</h5>
                            <Dropdown className="card-header-dropdown sortble-dropdown">
                                {/* <Dropdown.Toggle variant="light" id="dropdown-basic" >
                                    <span className="text-muted dropdown-title">Browsers</span> 
                                </Dropdown.Toggle> */}
                                <Dropdown.Menu className="dropdown-menu-end" title="Browsers" variant="secondary" id="dropdown-basic-button" >
                                    <Dropdown.Item className="sort" data-sort="browsers">Browsers</Dropdown.Item>
                                    <Dropdown.Item className="sort" data-sort="click">Click</Dropdown.Item>
                                    <Dropdown.Item className="sort" data-sort="pageviews">Bounce Rate</Dropdown.Item>
                                </Dropdown.Menu >
                            </Dropdown>
                        </Card.Header>
                    <Card.Body>
                        <div className="table-responsive">
                            <Table className="align-middle mb-0">
                                <thead className="table-active">
                                    <tr>
                                        <th className="sort cursor-pointer" data-sort="browsers">
                                            Browsers
                                        </th>
                                        <th className="sort cursor-pointer text-center" data-sort="click">
                                            Click
                                        </th>
                                        <th className="sort cursor-pointer text-center" data-sort="pageviews">
                                            Bounce Rate
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="list">
                                    <tr>
                                        <td>
                                            <img src={chrome} alt="" className="avatar-xxs" />
                                            <span className="ms-1 browsers">Google Chrome</span>
                                        </td>
                                        <td className="click text-center">
                                            640
                                        </td>
                                        <td className="pageviews text-center">
                                            86.01%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={fire} alt="" className="avatar-xxs" />
                                            <span className="ms-1 browsers">Firefox</span>
                                        </td>
                                        <td className="click text-center">
                                            274
                                        </td>
                                        <td className="pageviews text-center">
                                            59.22%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={safari} alt="" className="avatar-xxs" />
                                            <span className="ms-1 browsers">Safari</span>
                                        </td>
                                        <td className="click text-center">
                                            591
                                        </td>
                                        <td className="pageviews text-center">
                                            71.36%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={opera} alt="" className="avatar-xxs" />
                                            <span className="ms-1 browsers">Opera</span>
                                        </td>
                                        <td className="click text-center">
                                            456
                                        </td>
                                        <td className="pageviews text-center">
                                            63.82%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={micro} alt="" className="avatar-xxs" />
                                            <span className="ms-1 browsers">Microsoft Edge</span>
                                        </td>
                                        <td className="click text-center">
                                            312
                                        </td>
                                        <td className="pageviews text-center">
                                            57.48%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={micro2} alt="" className="avatar-xxs" />
                                            <span className="ms-1 browsers">Internet Explorer</span>
                                        </td>
                                        <td className="click text-center">
                                            164
                                        </td>
                                        <td className="pageviews text-center">
                                            77.21%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={chro} alt="" className="avatar-xxs" />
                                            <span className="ms-1 browsers">Chromium</span>
                                        </td>
                                        <td className="click text-center">
                                            36
                                        </td>
                                        <td className="pageviews text-center">
                                            18.90%
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4} lg={6}>
                <Card>

                    <Tab.Container id="right-tabs-example" defaultActiveKey="first">
                        <Card.Header className="d-flex align-items-center">
                            <h4 className="card-title mb-0 flex-grow-1">Popular Property</h4>
                            <div className="flex-shrink-0">
                                <Nav variant="pills" className="gap-1" id="popularProperty" aria-orientation="vertical">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className="btn btn-ghost-danger btn-sm" id="saleProperty" data-bs-target="#salePropertyTabs" role="tab" aria-controls="salePropertyTabs" aria-selected="true">Sale</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className="btn btn-ghost-info btn-sm" >Rent</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Card.Header>

                        <Card.Body>
                            <div className="tab-content" id="popularPropertyContent">
                                <Card.Body>
                                    <div className="tab-content" id="popularPropertyContent">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">

                                                <div className="tab-pane show " id="salePropertyTabs" role="tabpanel" aria-labelledby="saleProperty" tabIndex={0}>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate8} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Crystal House</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 1039 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.5</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate7} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Whitepace Vintage Villa</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 1145 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.9</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate5} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Northlight Residency</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 1859 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.7</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate8} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Park Side Colonial</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 5 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 5643 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.7</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate4} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Marina Hill Vintage</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 1963 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.8</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate7} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Grand Cub Hotel</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 1543 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.4</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">

                                                <div className="tab-pane" id="rentPropertyTabs" role="tabpanel" aria-labelledby="rentProperty" tabIndex={0}>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate1} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Liberty Property</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 1 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 958 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.3</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate2} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Duplex Square Valley</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 2659 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 3.8</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate3} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Small house on an autumn’s</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 2230 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.3</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate7} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>New Grand Hotel Room</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 2785 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.9</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate8} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Park Side Colonial</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 5 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 3 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 5643 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.7</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center position-relative mb-3">
                                                        <div className="flex-shrink-0">
                                                            <img src={realestate7} alt="" className="avatar-sm object-fit-cover rounded" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                                <h6>Whitepace Vintage Villa</h6>
                                                            </Link>
                                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom</p>
                                                                </li>
                                                                <li>
                                                                    <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i> 1145 sqft</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i> 4.9</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Card.Body>

                            </div>
                        </Card.Body>

                    </Tab.Container>



                </Card>
            </Col>


            <Col xxl={4}>
                <Card>
                    <Card.Header className="d-flex align-items-center">
                        <h4 className="card-title mb-0 flex-grow-1">Customer Feedback</h4>
                        <div className="flex-shrink-0">
                            <Link to="#!" className="text-muted">View All <i className="bi bi-chevron-right align-baseline"></i></Link>
                        </div>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar style={{ maxHeight: "390px" }}>
                            <Card className="border-bottom rounded-0 shadow-none mb-0">
                                <Card.Body className="pt-0">
                                    <div className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img src={avatar2} alt="" className="avatar-sm rounded" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="text-muted clearfix float-end">04:47 PM</span>
                                            <h6 className="fs-md mb-1"><Link to="#!" className="text-reset">Josefa Weissnat</Link></h6>
                                            <div className="text-warning mb-2 fs-xs">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p className="text-muted mb-0">" Themebrand used Anydesk to fix the bug in Flask and django version. I highly recommend this product! "</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="border-bottom rounded-0 shadow-none mb-0">
                                <Card.Body>
                                    <div className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img src={avatar3} alt="" className="avatar-sm rounded" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="text-muted clearfix float-end">11:24 AM</span>
                                            <h6 className="fs-md mb-1"><Link to="#!" className="text-reset">Ophelia Steuber</Link></h6>
                                            <div className="text-warning mb-2 fs-xs">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p className="text-muted mb-0">" Thank you for this awesome admin panel. I'm very happy with it, it's a pleasure to work with it! "</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="border-bottom rounded-0 shadow-none mb-0">
                                <Card.Body>
                                    <div className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img src={avatar4} alt="" className="avatar-sm rounded" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="text-muted clearfix float-end">03:19 PM</span>
                                            <h6 className="fs-md mb-1"><Link to="#!" className="text-reset">Dianna Bogan</Link></h6>
                                            <div className="text-warning mb-2 fs-xs">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p className="text-muted mb-0">" High theme quality. Very good support, they spent almost an hour remotely to fix a problem. I hope this theme will have a long term support. "</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="border-bottom rounded-0 shadow-none mb-0">
                                <Card.Body>
                                    <div className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img src={avatar5} alt="" className="avatar-sm rounded" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="text-muted clearfix float-end">06:39 AM</span>
                                            <h6 className="fs-md mb-1"><Link to="#!" className="text-reset">Jerry Emard</Link></h6>
                                            <div className="text-warning mb-2 fs-xs">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p className="text-muted mb-0">" There is as lot packed in this template. The savings in time and energy is so worth it. "</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="border-bottom rounded-0 shadow-none mb-0">
                                <Card.Body>
                                    <div className="d-flex gap-2">
                                        <div className="flex-shrink-0">
                                            <img src={avatar6} alt="" className="avatar-sm rounded" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="text-muted clearfix float-end">09:18 AM</span>
                                            <h6 className="fs-md mb-1"><Link to="#!" className="text-reset">Axel Kozey</Link></h6>
                                            <div className="text-warning mb-2 fs-xs">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p className="text-muted mb-0">" Works like a component library, a crazy amount of design elements already built and given. "</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </React.Fragment >
    )
}

export default Otherwidgets