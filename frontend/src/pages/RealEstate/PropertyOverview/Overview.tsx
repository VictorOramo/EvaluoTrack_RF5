import React from 'react';
import { Card, Image, Dropdown, Button, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination } from "swiper";
import CustomDropdownToggle from 'Common/CustomDropdownToggle';

import overview1 from "../../../assets/images/real-estate/overview-01.jpg";
import overview2 from "../../../assets/images/real-estate/overview-02.jpg";
import overview3 from "../../../assets/images/real-estate/overview-03.jpg";
import { EcommerceMap } from 'pages/Ecommerce/EcommerceMap';

const Overview = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Swiper pagination={{ el: '.swiper-pagination', clickable: true }} modules={[Pagination]} loop={true} className="property-slider mb-3">
                        <div className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="position-relative ribbon-box">
                                    <div className="ribbon ribbon-danger fw-medium rounded-end mt-2"> For Sale</div>
                                    <Dropdown className="position-absolute top-0 end-0 m-3" drop='start'>
                                        <Dropdown.Toggle isButton={true} as={CustomDropdownToggle} className="btn bg-white avatar-xs p-0">
                                            <i className="bi bi-share"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end">
                                            <Dropdown.Item href="#addProperty"><i className="bi bi-pencil-square me-1 align-baseline"></i> Edit</Dropdown.Item>
                                            <Dropdown.Item href="#deleteRecordModal"><i className="bi bi-trash3 me-1 align-baseline"></i> Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Image src={overview2} alt="" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="position-relative ribbon-box">
                                    <div className="ribbon ribbon-primary fw-medium rounded-end mt-2"> Front View</div>
                                    <Dropdown className="position-absolute top-0 end-0 m-3">
                                        <Dropdown.Toggle isButton={true} as={CustomDropdownToggle} className="btn bg-white avatar-xs p-0">
                                            <i className="bi bi-share"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end">
                                            <Dropdown.Item href="#addProperty"><i className="bi bi-pencil-square me-1 align-baseline"></i> Edit</Dropdown.Item>
                                            <Dropdown.Item href="#deleteRecordModal"><i className="bi bi-trash3 me-1 align-baseline"></i> Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Image src={overview1} alt="" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="position-relative ribbon-box">
                                    <div className="ribbon ribbon-primary fw-medium rounded-end mt-2"> Front View</div>
                                    <Dropdown className="position-absolute top-0 end-0 m-3">
                                        <Dropdown.Toggle isButton={true} as={CustomDropdownToggle} className="btn bg-white avatar-xs p-0">
                                            <i className="bi bi-share"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end">
                                            <Dropdown.Item href="#addProperty"><i className="bi bi-pencil-square me-1 align-baseline"></i> Edit</Dropdown.Item>
                                            <Dropdown.Item href="#deleteRecordModal"><i className="bi bi-trash3 me-1 align-baseline"></i> Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <img src={overview3} alt="" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="swiper-pagination swiper-pagination-bullets"></div>
                    </Swiper>

                    <div className="pt-1">
                        <Button variant="subtle-warning" className="custom-toggle float-end btn-icon btn-sm">
                            <span className="icon-on"><i className="bi bi-star"></i></span>
                            <span className="icon-off"><i className="bi bi-star-fill"></i></span>
                        </Button>
                        <h6 className="card-title">Swimming Pool Side Of The Residential Ascot Home</h6>
                        <div className="text-muted hstack gap-2 flex-wrap list-unstyled mb-3">
                            <div>
                                <i className="bi bi-geo-alt align-baseline me-1"></i> Birmingham, West Midlands, United Kingdom
                            </div>
                            <div className="vr"></div>
                            <div>
                                <i className="bi bi-calendar-event align-baseline me-1"></i> Update 2 days ago
                            </div>
                        </div>
                        <p className="text-muted mb-2">Property is <b>any item that a person or a business has legal title over</b>. Property can be tangible items, such as houses, cars, or appliances, or it can refer to intangible items that carry the promise of future worth, such as stock and bond certificates. There are two types of property. In legal terms, all property will be classified as either <b>personal property or real property</b>. This distinction between types of property comes from English common law, but our modern laws continue to distinguish between the two.</p>
                        <p className="text-muted">Basic Property Unit. Definition. The basic unit of ownership that is recorded in the land books, land registers or equivalent. It is defined by unique ownership and homogeneous real property rights, and may consist of one or more adjacent or geographically separate parcels.</p>
                    </div>

                    <div className="mb-3">
                        <h6 className="card-title mb-3">Property Overview</h6>
                        <Row className="g-3">
                            <Col xl={3} sm={6}>
                                <div className="p-3 border border-dashed rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0">
                                            <div className="avatar-title bg-dark-subtle text-dark fs-lg rounded">
                                                <i className="bi bi-tag"></i>
                                            </div>
                                        </div>
                                        <p className="fs-md mb-0">$7000 - $8000</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} sm={6}>
                                <div className="p-3 border border-dashed rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0">
                                            <div className="avatar-title bg-warning-subtle text-warning fs-lg rounded">
                                                <i className="bi bi-house"></i>
                                            </div>
                                        </div>
                                        <p className="fs-md mb-0">4 Bedroom</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} sm={6}>
                                <div className="p-3 border border-dashed rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0">
                                            <div className="avatar-title bg-danger-subtle text-danger fs-lg rounded">
                                                <i className="ph ph-bathtub"></i>
                                            </div>
                                        </div>
                                        <p className="fs-md mb-0">3 Bathroom</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} sm={6}>
                                <div className="p-3 border border-dashed rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0">
                                            <div className="avatar-title bg-info-subtle text-info fs-lg rounded">
                                                <i className="bi bi-p-circle"></i>
                                            </div>
                                        </div>
                                        <p className="fs-md mb-0">Parking Available</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} sm={6}>
                                <div className="p-3 border border-dashed rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0">
                                            <div className="avatar-title bg-success-subtle text-success fs-lg rounded">
                                                <i className="bi bi-columns"></i>
                                            </div>
                                        </div>
                                        <p className="fs-md mb-0">1324 SQFT</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} sm={6}>
                                <div className="p-3 border border-dashed rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0">
                                            <div className="avatar-title bg-secondary-subtle text-secondary fs-lg rounded">
                                                <i className="bi bi-map"></i>
                                            </div>
                                        </div>
                                        <p className="fs-md mb-0">United Kingdom</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} sm={6}>
                                <div className="p-3 border border-dashed rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0">
                                            <div className="avatar-title bg-primary-subtle text-primary fs-lg rounded">
                                                <i className="bi bi-buildings"></i>
                                            </div>
                                        </div>
                                        <p className="fs-md mb-0">Residency</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="mb-3">
                        <h6 className="card-title mb-3">Property Features</h6>
                        <ul className="list-unstyled hstack flex-wrap gap-3">
                            <li className="w-lg">
                                Swimming pool
                            </li>
                            <li className="w-lg">
                                Air conditioning
                            </li>
                            <li className="w-lg">
                                Electricity
                            </li>
                            <li className="w-lg">
                                Balcony
                            </li>
                            <li className="w-lg">
                                Near Green Zone
                            </li>
                            <li className="w-lg">
                                Near School
                            </li>
                            <li className="w-lg">
                                Cable TV
                            </li>
                            <li className="w-lg">
                                Near Shop
                            </li>
                            <li className="w-lg">
                                Internet
                            </li>
                            <li className="w-lg">
                                Near Shop
                            </li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <Card.Title as="h6" className="mb-0">Property Location</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div id="leaflet-map-group-control" className='leaflet-map leaflet-gray ' style={{ minHeight: '100%' }}>
                        <EcommerceMap style={{ height: 300 }} />
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Overview
