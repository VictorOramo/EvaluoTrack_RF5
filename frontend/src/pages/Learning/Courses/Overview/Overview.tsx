import React from 'react';
import { Accordion, Badge, Button, Card, Col, Container, Dropdown, Nav, Row, Tab } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CustomDropdownToggle from 'Common/CustomDropdownToggle';

//Images
import productimg1 from "../../../../assets/images/products/32/img-1.png";
import productimg6 from "../../../../assets/images/products/32/img-6.png";
import productimg7 from "../../../../assets/images/products/32/img-7.png";

import DiscountCard from './DiscountCard';
import CourseIncludes from './CourseIncludes';
import InstructorDetails from './InstructorDetails';
import Membership from './Membership';
import { Link } from 'react-router-dom';

//SimpleBar
import SimpleBar from "simplebar-react";


const Overview = () => {
    document.title = "Overview | Steex - Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumb title="Overview" pageTitle="Courses" />
                    <Row >
                        <Col xl={9} lg={8}>
                            <Tab.Container defaultActiveKey="description">

                                <Card >
                                    <Card.Body>
                                        <div className="position-relative rounded overflow-hidden mb-4">
                                            <div className="ratio ratio-21x9">
                                                <iframe src="https://www.youtube.com/embed/Hu4Yvq-g7_Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                            </div>
                                            <div className="position-absolute d-flex gap-2 top-0 end-0 m-3">
                                                <Link to="/apps-learning-create" className="btn bg-white">
                                                    <i className="bi bi-pencil-square me-1 align-baseline"></i> Edit Course
                                                </Link>
                                                <Dropdown>
                                                    <Dropdown.Toggle isButton={true} as={CustomDropdownToggle} className="btn bg-white btn-icon">
                                                        <i className="bi bi-share"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end arrow-none">
                                                        <Dropdown.Item href="#"><i className="bi bi-facebook me-1 align-baseline"></i> Facebook</Dropdown.Item>
                                                        <Dropdown.Item href="#"><i className="bi bi-instagram me-1 align-baseline"></i> Instagram</Dropdown.Item>
                                                        <Dropdown.Item href="#"><i className="bi bi-whatsapp me-1 align-baseline"></i> Whatsapp</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <Button variant="subtle-warning" className="custom-toggle btn-icon btn-sm active float-end" data-bs-toggle="button" aria-pressed="true">
                                            <span className="icon-on"><i className="bi bi-star"></i></span>
                                            <span className="icon-off"><i className="bi bi-star-fill"></i></span>
                                        </Button>
                                        <h4>Getting Started with JavaScript</h4>
                                        <ul className="list-unstyled hstack gap-2 flex-wrap mb-0">
                                            <li><Link to="#!" className="text-reset"><i className="bi bi-box-seam align-baseline me-1"></i> React Development</Link></li>
                                            <li className="text-warning">
                                                <i className="bi bi-star-fill align-baseline"></i>
                                                <i className="bi bi-star-fill align-baseline"></i>
                                                <i className="bi bi-star-fill align-baseline"></i>
                                                <i className="bi bi-star-fill align-baseline"></i>
                                                <i className="bi bi-star-half align-baseline"></i>
                                                <span className="text-body ms-1">4.5</span>
                                            </li>
                                            <li>
                                                <span className="badge bg-success-subtle text-success">Beginner</span>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body >

                                        <Nav as="ul" variant='tabs' className="nav-tabs-custom rounded card-header-tabs border-bottom-0 mx-0">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="description">Description</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="video">Video Tutorials</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="reviews">Reviews</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="faqs">FAQs</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Body>

                                </Card>
                                <Card >
                                    <Card.Body>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="description" id="description">
                                                <h6 className="card-title mb-3">Overview</h6>
                                                <p className="text-muted mb-2">JavaScript is a programming language commonly used for web development, among many other things. It works in conjunction with HTML and CSS to add dynamic functionality to websites. JavaScript is the sauce of the web. It is what makes things dance. JavaScript enables web pages to do things like display updated content, show maps that you can interact with, and many other things.</p>
                                                <p className="text-muted">Today we are going to learn how to learn JavaScript faster so that you can command JavaScript as you please and use it effectively in your projects.</p>
                                                <h6 className="card-title mb-3">What We'll Cover in this Article</h6>
                                                <ul className="list-unstyled vstack gap-2">
                                                    <li><i className="bi bi-caret-right"></i> How to learn JavaScript faster – an overview</li>
                                                    <li><i className="bi bi-caret-right"></i> How to practice coding in JavaScript</li>
                                                    <li><i className="bi bi-caret-right"></i> Why you should read the documentation</li>
                                                    <li><i className="bi bi-caret-right"></i> Some best practices you can adopt from reading documentation</li>
                                                    <li><i className="bi bi-caret-right"></i> How to contribute to open source projects</li>
                                                    <li><i className="bi bi-caret-right"></i> How to find projects to contribute to</li>
                                                    <li><i className="bi bi-caret-right"></i> Why you should build lots of projects</li>
                                                    <li><i className="bi bi-caret-right"></i> Resources that might inspire you to build projects</li>
                                                </ul>
                                                <h6 className="card-title mb-3">How to Practice Coding in JavaScript</h6>
                                                <p className="text-muted mb-2">Practicing is what makes you progress. Whether it's in music, dancing, singing, playing basketball – or coding.</p>
                                                <p className="text-muted">Practicing is really repetitive and can be tiring, but it is what helps us and sets us apart in the long run. It is through the action of practicing and repetition that we are able to be good at all these activities. Coding is not different.</p>
                                                <h6 className="card-title mb-3">Work through Courses and Tutorials</h6>
                                                <p className="text-muted mb-2">Courses and tutorials are a good way to learn. You can find various learning materials from a lot of places on the web. If you would like to take a course on a particular programming language, you can find them on sites like LinkedIn.</p>
                                                <p className="text-muted mb-0">If you like videos, there are many great channels on YouTube that post coding tutorials for free. My favorite one-stop-shop is <a href="http://themesbrand.com/" >Themesbrand</a>.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="video" id="videoTutorials">
                                                <Accordion defaultActiveKey="0" className="accordion-border-box" id="accordionlefticon">
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header id="accordionlefticonExample1">
                                                            Introduction to JavaScript + Setup <small className="ms-1 align-baseline">(4 Lessons)</small>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <ul className="list-group list">
                                                                <li className="list-group-item position-relative">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">What JavaScript framework should I learn?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            03:20 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">What is JavaScript for example?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            07:32 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item active list-group-item-action">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-primary-subtle text-primary">
                                                                                <i className="bi bi-stop-fill"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">Which is a framework of JavaScript?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            08:54 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">What is JavaScript and why it is used?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            06:37 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1" className="mt-2">
                                                        <Accordion.Header id="accordionlefticonExample2">
                                                            Variables in JavaScript <small className="ms-1 align-baseline">(7 Lessons)</small>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <ul className="list-group list">
                                                                <li className="list-group-item position-relative">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">What are the variables in JavaScript?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            08:34 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">What is a variable in JavaScript example?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            10:08 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#!" className="stretched-link text-reset">What are the three variables in JavaScript?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            11:33 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">How to write variables in JavaScript?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            07:31 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">What are 3 types of variables?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            14:46 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#!" className="stretched-link text-reset">What is a variable with example?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            09:33 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2" className="mt-2">
                                                        <Accordion.Header id="accordionlefticonExample3">
                                                            Const, let and var in JavaScript <small className="ms-1 align-baseline">(3 Lessons)</small>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <ul className="list-group list">
                                                                <li className="list-group-item position-relative">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">What JavaScript framework should I learn?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            03:20 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#!" className="stretched-link text-reset">What is JavaScript for example?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            07:32 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-xs">
                                                                            <div className="avatar-title rounded bg-danger-subtle text-danger">
                                                                                <i className="bi bi-play"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-2">
                                                                            <Link to="#" className="stretched-link text-reset">What is JavaScript and why it is used?</Link>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            06:37 min
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="reviews" id="reviews">
                                                <div className="d-flex flex-wrap align-items-center gap-3 mb-2">
                                                    <h6 className="card-title flex-grow-1 mb-0">Ratings & Reviews</h6>
                                                    <div className="flex-shrink-0">
                                                        <Button variant="primary"><i className="ph-plus-circle align-middle me-1"></i> Add Review</Button>
                                                    </div>
                                                </div>
                                                <Row className="gy-3">
                                                    <Col lg={2}>
                                                        <div className="text-center mt-3 mt-lg-5">
                                                            <h1 className="mb-3">4.9 <small className="fs-sm text-muted fw-normal">/ 5.0</small></h1>
                                                            <div className="text-warning hstack gap-2 justify-content-center mb-2">
                                                                <i className="bi bi-star-fill align-baseline"></i>
                                                                <i className="bi bi-star-fill align-baseline"></i>
                                                                <i className="bi bi-star-fill align-baseline"></i>
                                                                <i className="bi bi-star-fill align-baseline"></i>
                                                                <i className="bi bi-star-fill align-baseline"></i>
                                                            </div>
                                                            <p className="mb-0"><b>3.5k</b> Reviews</p>
                                                        </div>
                                                    </Col>
                                                    <Col lg={10}>
                                                        <div>
                                                            <SimpleBar className="me-lg-n3 pe-lg-4" style={{ maxHeight: "500px" }}>
                                                                <ul className="list-unstyled mb-0" id="review-list">
                                                                    <li className="review-list py-2" id="review-1">
                                                                        <div className="border border-dashed rounded p-3">
                                                                            <div className="hstack flex-wrap gap-3 mb-4">
                                                                                <Badge bg="danger-subtle" className="rounded-pill text-danger mb-0">
                                                                                    <i className="mdi mdi-star"></i> <span className="rate-num">4.5</span>
                                                                                </Badge>
                                                                                <div className="vr"></div>
                                                                                <div className="flex-grow-1">
                                                                                    <p className="mb-0"><Link to="#!">Jansh Brown</Link></p>
                                                                                </div>
                                                                                <div className="flex-shrink-0">
                                                                                    <span className="text-muted fs-sm mb-0">08 Mar, 2023</span>
                                                                                </div>
                                                                                <div className="flex-shrink-0 d-flex gap-1">
                                                                                    <Link to="#addReview" className="badge bg-secondary-subtle text-secondary edit-item-list" data-bs-toggle="modal"><i className="ph-pencil align-baseline me-1"></i> Edit</Link>
                                                                                    <Link to="#removeItemModal" className="badge bg-danger-subtle text-danger" data-bs-toggle="modal"><i className="ph-trash align-baseline"></i></Link>
                                                                                </div>
                                                                            </div>

                                                                            <h6 className="review-title fs-md">Product Quality</h6>
                                                                            <p className="review-desc mb-0">&quot; This is an incredible framework worth so much in the right hands! Nowhere else are you going to get so much flexibility and great code for a few dollars. Highly recommend purchasing today! Like right now! &quot;</p>

                                                                            <div className="d-flex flex-grow-1 gap-2 mt-3">
                                                                                <Link to="!#" className="avatar-md">
                                                                                    <div className="avatar-title bg-light rounded">
                                                                                        <img src={productimg1} alt="img-1.png" className="product-img avatar-sm" />
                                                                                    </div>
                                                                                </Link>
                                                                                <Link to="!#" className="avatar-md">
                                                                                    <div className="avatar-title bg-light rounded">
                                                                                        <img src={productimg6} alt="img-6.png" className="product-img avatar-sm" />
                                                                                    </div>
                                                                                </Link>
                                                                                <Link to="!#" className="avatar-md">
                                                                                    <div className="avatar-title bg-light rounded">
                                                                                        <img src={productimg7} alt="img-7.png" className="product-img avatar-sm" />
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="review-list py-2" id="review-2">
                                                                        <div className="border border-dashed rounded p-3">
                                                                            <div className="hstack flex-wrap gap-3 mb-4">
                                                                                <Badge bg="danger-subtle" className="rounded-pill text-danger mb-0">
                                                                                    <i className="mdi mdi-star"></i> <span className="rate-num">4.0</span>
                                                                                </Badge>
                                                                                <div className="vr"></div>
                                                                                <div className="flex-grow-1">
                                                                                    <p className="mb-0"><Link to="#!">Camilla Harber</Link></p>
                                                                                </div>
                                                                                <div className="flex-shrink-0">
                                                                                    <p className="text-muted fs-sm mb-0">03 Mar, 2023</p>
                                                                                </div>
                                                                                <div className="flex-shrink-0 d-flex gap-1">
                                                                                    <Link to="#addReview" className="badge bg-secondary-subtle text-secondary edit-item-list" data-bs-toggle="modal"><i className="ph-pencil align-baseline me-1"></i> Edit</Link>
                                                                                    <Link to="#removeItemModal" className="badge bg-danger-subtle text-danger" data-bs-toggle="modal"><i className="ph-trash align-baseline"></i></Link>
                                                                                </div>
                                                                            </div>

                                                                            <h6 className="review-title fs-md">Product Quality</h6>
                                                                            <p className="review-desc mb-0">" We have used your other templates as well and seems it's amazing with the design and code quality. Wish you best for the future updates. Keep updated you will be #1 in near future. "</p>
                                                                        </div>
                                                                    </li>

                                                                    <li className="review-list py-2" id="review-3">
                                                                        <div className="border border-dashed rounded p-3">
                                                                            <div className="hstack flex-wrap gap-3 mb-4">
                                                                                <Badge bg="danger-subtle" className="rounded-pill text-danger mb-0">
                                                                                    <i className="mdi mdi-star"></i> <span className="rate-num">5.0</span>
                                                                                </Badge>
                                                                                <div className="vr"></div>
                                                                                <div className="flex-grow-1">
                                                                                    <p className="mb-0"><Link to="#!">Kaylin Bechtelar</Link></p>
                                                                                </div>
                                                                                <div className="flex-shrink-0">
                                                                                    <p className="text-muted fs-sm mb-0">28 Feb, 2023</p>
                                                                                </div>
                                                                                <div className="flex-shrink-0 d-flex gap-1">
                                                                                    <Link to="#addReview" className="badge bg-secondary-subtle text-secondary edit-item-list" data-bs-toggle="modal"><i className="ph-pencil align-baseline me-1"></i> Edit</Link>
                                                                                    <Link to="#removeItemModal" className="badge bg-danger-subtle text-danger" data-bs-toggle="modal"><i className="ph-trash align-baseline"></i></Link>
                                                                                </div>
                                                                            </div>

                                                                            <h6 className="review-title fs-md">Design Quality</h6>
                                                                            <p className="review-desc mb-0">"This template is incredibly comprehensive considering how new and modern it is! I bought 8 different admin templates recently and all of them had some good features, but were always missing stuff that you only realise after purchase. I've migrated my site to this template and have yet to find anything missing or lacking! Plus, the online documentation is really easy to use and access and very comprehensive! Well done guys and thank you! "</p>
                                                                        </div>
                                                                    </li>

                                                                    <li className="review-list py-2" id="review-4">
                                                                        <div className="border border-dashed rounded p-3">
                                                                            <div className="hstack flex-wrap gap-3 mb-4">
                                                                                <Badge bg="danger-subtle" className="rounded-pill text-danger mb-0">
                                                                                    <i className="mdi mdi-star"></i> <span className="rate-num">3.5</span>
                                                                                </Badge>
                                                                                <div className="vr"></div>
                                                                                <div className="flex-grow-1">
                                                                                    <p className="mb-0"><Link to="#!">Dedrick Shields</Link></p>
                                                                                </div>
                                                                                <div className="flex-shrink-0">
                                                                                    <p className="text-muted fs-sm mb-0">24 Feb, 2023</p>
                                                                                </div>
                                                                                <div className="flex-shrink-0 d-flex gap-1">
                                                                                    <Link to="#addReview" className="badge bg-secondary-subtle text-secondary edit-item-list" data-bs-toggle="modal"><i className="ph-pencil align-baseline me-1"></i> Edit</Link>
                                                                                    <Link to="#removeItemModal" className="badge bg-danger-subtle text-danger" data-bs-toggle="modal"><i className="ph-trash align-baseline"></i></Link>
                                                                                </div>
                                                                            </div>

                                                                            <h6 className="review-title fs-md">Feature Availability</h6>
                                                                            <p className="review-desc mb-0">" Hello everyone, I would like to suggest here two contents that you could create. Course pages and blog pages. In them you could insert the listing and management of courses and listing and management of blog. The theme is perfect, one of the best purchases I've ever made. "</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </SimpleBar>
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="faqs" id="faqs">
                                                <Row className="g-3">
                                                    <Col lg={6}>
                                                        <div className="d-flex gap-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-question-circle text-primary"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="card-title">What are good questions to ask about course?</h6>
                                                                <p className="text-muted mb-0">What textbooks are required for the course? What days/times do class sessions occur or are they fully online? Are there any online platforms, programs, and/or softwares needed for the course? When are major assignments/ exams due for this course and what are its point values?</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="d-flex gap-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-question-circle text-primary"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="card-title">How does online learning work?</h6>
                                                                <p className="text-muted mb-0">Distance learning is an educational process where students receive instruction through online classes, video recordings, video conferencing, or any other audio/visual technology medium.</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="d-flex gap-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-question-circle text-primary"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="card-title">Why is online learning better?</h6>
                                                                <p className="text-muted mb-0">Because online courses provide students with full control over their studies, they can work at their own pace. Pupils, on average, work faster and absorb more information in online courses than they would otherwise.</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="d-flex gap-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-question-circle text-primary"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="card-title">How successful is online learning?</h6>
                                                                <p className="text-muted mb-0">Some students do as well in online courses as in in-person courses, some may actually do better, but, on average, students do worse in the online setting, and this is particularly true for students with weaker academic backgrounds.</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="d-flex gap-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-question-circle text-primary"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="card-title">How do you ask questions about learning?</h6>
                                                                <p className="text-muted mb-0">Avoid asking leading questions, those that prompt or suggest the answer, and yes/no questions. If a yes/no question is warranted, be ready with a follow-up question to encourage students to critically evaluate the material and engage in discussion.</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="d-flex gap-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-question-circle text-primary"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="card-title">What are course objectives?</h6>
                                                                <p className="text-muted mb-0">A course objective specifies a behavior, skill, or action that a student can demonstrate if they have achieved mastery of the objective.</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="d-flex gap-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-question-circle text-primary"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="card-title">What is the advantage of learning?</h6>
                                                                <p className="text-muted mb-0">By consistently educating yourself and trying new things, you'll learn you're capable of change and growth, which keeps you open to new opportunities in life. “Learning a new skill can get you out of a rut.</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </Card.Body>
                                </Card>
                            </Tab.Container>
                        </Col>
                        <Col xl={3} lg={4}>
                            <DiscountCard />
                            <CourseIncludes />
                            <InstructorDetails />
                            <Membership />
                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>
    )
}

export default Overview;
