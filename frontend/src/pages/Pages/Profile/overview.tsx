import React from 'react'
import { Card, Col, Dropdown, Nav, Pagination, ProgressBar, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom';


import learning from "assets/images/learning/img-01.jpg";
import small2 from "assets/images/small/img-2.jpg";
import small4 from "assets/images/small/img-4.jpg";
import small7 from "assets/images/small/img-7.jpg";
import small10 from "assets/images/small/img-10.jpg";
import realestate1 from "assets/images/real-estate/img-03.jpg";
import realestate2 from "assets/images/real-estate/overview-03.jpg";

import small3 from "assets/images/small/img-3.jpg";
import small5 from "assets/images/small/img-5.jpg";
import small9 from "assets/images/small/img-9.jpg";

import { agentlistdata } from 'Common/data/agent';
import { profileData } from 'Common/data/profiledata';

const Overview = () => {

    return (
        <React.Fragment>
            <Col xl={9}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="align-items-center g-3 mb-1">
                        <div className="col-md order-1">
                            <Nav variant='pills' className="arrow-navtabs nav-secondary gap-2 flex-grow-1">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" href="#overview-tab">Overview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" href="#activities">Activities</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" href="#projects">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" href="#friends">Friends</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="col-md-auto order-lg-2">
                            <Link to="/pages-profile-settings" className="btn btn-primary"><i className="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
                        </div>
                    </Row>

                    <Tab.Content>
                        <Tab.Pane eventKey="first" id="overview-tab" className='mt-3'>
                            <Card>
                                <Card.Body>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-3">Media</h5>
                                        <Row className=" profile-media g-3">
                                            <Col lg={3}>
                                                <img src={small2} alt="" className="img-fluid h-100 rounded object-fit-cover" />
                                            </Col>
                                            <Col lg={4}>
                                                <Row className=" g-3">
                                                    <Col lg={12}>
                                                        <img src={learning} alt="" className="fixed-width w-100 rounded object-fit-cover" />
                                                    </Col>
                                                    <Col lg={6}>
                                                        <img src={small4} alt="" className="fixed-width w-100 rounded object-fit-cover" />
                                                    </Col>
                                                    <Col lg={6}>
                                                        <img src={realestate1} alt="" className="fixed-width w-100 rounded object-fit-cover" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={3}>
                                                <img src={realestate2} alt="" className="img-fluid rounded object-fit-cover h-100 object-fit-cover" />
                                            </Col>
                                            <Col lg={2}>
                                                <Row className=" g-3">
                                                    <Col lg={12}>
                                                        <img src={small10} alt="" className="fixed-width w-100 rounded object-fit-cover" />
                                                    </Col>
                                                    <Col lg={12}>
                                                        <img src={small7} alt="" className="fixed-width w-100 rounded object-fit-cover" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="card-title mb-3">About Us</h5>
                                        <p className="text-muted mb-2">A <b>Web Developer</b> creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. Professionals in this field may also need to be able to ensure sites are compatible with multiple types of media. Web Developers need to have a firm understanding of programming and graphical design. Having a strong resume that emphasizes these attributes makes it significantly easier to get hired as a Web Developer.</p>
                                        <p className="text-muted mb-0">As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing & Design with designing team in the company to build perfect web designs.</p>
                                    </div>
                                    <div className="mb-4">
                                        <Row>
                                            <Col lg={6}>
                                                <h5 className="card-title mb-3">Languages</h5>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <span className="badge bg-primary-subtle text-primary">English</span>
                                                    <span className="badge bg-primary-subtle text-primary">French</span>
                                                    <span className="badge bg-primary-subtle text-primary">German</span>
                                                    <span className="badge bg-primary-subtle text-primary">Arabic</span>
                                                    <span className="badge bg-primary-subtle text-primary">Italiana</span>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <h5 className="card-title mb-3 mt-4 mt-lg-0">Skills & Knowledge</h5>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <span className="badge bg-secondary-subtle text-secondary">Photoshop</span>
                                                    <span className="badge bg-secondary-subtle text-secondary">illustrator</span>
                                                    <span className="badge bg-secondary-subtle text-secondary">HTML</span>
                                                    <span className="badge bg-secondary-subtle text-secondary">CSS</span>
                                                    <span className="badge bg-secondary-subtle text-secondary">Javascript</span>
                                                    <span className="badge bg-secondary-subtle text-secondary">Php</span>
                                                    <span className="badge bg-secondary-subtle text-secondary">Python</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div>
                                        <h5 className="card-title mb-3">Education Qualification</h5>
                                        <ul className="acitivity-timeline-2 list-unstyled mb-0">
                                            <li>
                                                <h6 className="fs-md">Masters in Computer Application (MCA)</h6>
                                                <div className="d-flex align-items-center mb-3 gap-3">
                                                    <p className="mb-0">
                                                        <i className="bi bi-calendar align-baseline me-1"></i> 2023 - Continue
                                                    </p>
                                                    <p className="mb-0">
                                                        <i className="bi bi-buildings align-baseline me-1"></i> California State University
                                                    </p>
                                                </div>
                                                <p className="text-muted mb-0">It is a 3-year post-graduate course. To pursue MCA, you must be a graduate from a well-known university after completing 10+2 with Mathematics as a subject to apply for this course.</p>
                                            </li>
                                            <li>
                                                <h6 className="fs-md">Bachelors's in Computer Application (BCA)</h6>
                                                <div className="d-flex align-items-center mb-3 gap-3">
                                                    <p className="mb-0">
                                                        <i className="bi bi-calendar align-baseline me-1"></i> 2018 - 2023
                                                    </p>
                                                    <p className="mb-0">
                                                        <i className="bi bi-buildings align-baseline me-1"></i> California State University
                                                    </p>
                                                </div>
                                                <p className="text-muted mb-0">BCA is a three-year degree course for people who wish to dive into the world of programming language.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" id="activities" className='mt-3'>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Activity Stream</h5>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="acitivity-timeline-2 list-unstyled mb-0">
                                        <li>
                                            <h6 className="fs-md">Purchase by James Price</h6>
                                            <p>09:24 PM</p>
                                            <p className="mb-0">Product noise evolve smartwatch</p>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">New ticket received <span className="badge text-bg-info align-middle ms-1">New</span></h6>
                                            <p className="mb-3">4 days ago</p>
                                            <p className="text-muted mb-0">User <span className="text-secondary">Erica245</span> submitted a ticket</p>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">Adding a new event with attachments</h6>
                                            <p className="mb-3">30 days ago</p>
                                            <div className="border border-dashed p-2 rounded-3">
                                                <Row className=" g-3">
                                                    <div className="col-auto">
                                                        <div className="d-flex position-relative gap-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-file-earmark-image fs-xl text-danger"></i>
                                                            </div>
                                                            <div className="flex-grow-1 ms-2">
                                                                <Link to="/#" className="stretched-link">
                                                                    <h6>UI/UX design</h6>
                                                                </Link>
                                                                <small>685 KB</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="d-flex position-relative gap-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="bi bi-file-pdf fs-xl text-info"></i>
                                                            </div>
                                                            <div className="flex-grow-1 ms-2">
                                                                <Link to="/#" className="stretched-link">
                                                                    <h6>Steex Invoice</h6>
                                                                </Link>
                                                                <small>342 KB</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">01:30 PM</h6>
                                            <p className="mb-0 text-muted">Lunch time after which sleep just doesn't want to let go of me. 🤝</p>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">03:30 PM</h6>
                                            <p className="mb-0 text-muted">Drink the magical chai, it will ward off sleep they said. 🤷‍</p>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">Templates layout upload</h6>
                                            <p className="mb-3">1 week ago</p>
                                            <p className="text-muted fst-italic">
                                                Powerful, clean & modern responsive bootstrap 5 admin template. The maximum file size for uploads in this demo :
                                            </p>
                                            <div className="row border border-dashed gx-2 p-2">
                                                <img src={small3} alt="" className="avatar-md rounded" />
                                                <img src={small5} alt="" className="avatar-md rounded" />
                                                <img src={small7} alt="" className="avatar-md rounded" />
                                                <img src={small9} alt="" className="avatar-md rounded" />
                                            </div>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">04:24 PM</h6>
                                            <p className="mb-0 text-muted">The only time I don't feel sleepy cause it's work out time. I mean walking time. 😹</p>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">06:43 PM</h6>
                                            <p className="mb-0 text-muted">Food my tummy needs, sleep my body needs.👿</p>
                                        </li>
                                        <li>
                                            <h6 className="fs-md">07:36 PM</h6>
                                            <p className="mb-0 text-muted">My tummy's happy time 🍝</p>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third" id="projects" className='mt-2'>
                            <Row>
                                {(profileData || []).map((item: any, key: any) => (
                                    <Col xxl={4} sm={6} key={key} >
                                        <Card>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="flex-grow-1 me-3">
                                                        <div className={`badge bg-${item.badgeClass}-subtle text-${item.textcolor}`}>{item.course}</div>

                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <Dropdown className='text-end'>
                                                            <Dropdown.Toggle as='a' bsPrefix='btn btn-link' id="dropdown-basic">
                                                                <i className="bi bi-three-dots-vertical"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu align="end">
                                                                <Dropdown.Item href="#!"><i className="bi bi-pencil-square align-baseline me-1"></i>Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#!"><i className="bi bi-trash3 align-baseline me-1"></i>Remove</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <h6 className="fs-md text-truncate mt-0"><Link to="#" className="text-reset">{item.app}</Link></h6>
                                                <p className="text-muted fs-sm text-truncate">Last Update : <span className="fw-semibold text-reset">{item.time}</span></p>
                                                <h5 className="fs-xs">Inprogress <span className={`text-${item.datacolor} float-end`}>{item.data}%</span></h5>
                                                <ProgressBar variant={`${item.variant}`} now={item.value} max={100} style={{ height: "5px", width: "80%", visibility: "visible", animationName: "animationProgress" }} />
                                                <div className="d-flex mt-3 align-items-center">
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="avatar-group">
                                                                {(item.img || []).map((subitem: any, key: any) => (
                                                                    <Link to="#!" className="avatar-group-item" key={key}>
                                                                        <div className="avatar-xxs">
                                                                            <img src={subitem.img} alt="" className="rounded-circle img-fluid" />
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                                {(item.memberName || []).map((element: any, key: any) => (
                                                                    <Link to="#!" className="avatar-group-item" key={key}>
                                                                        <div className="avatar-xxs">
                                                                            <div className="avatar-title rounded-circle bg-light text-primary">
                                                                                {element.memberText}
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-shrink-0 ms-2 hstack gap-3">
                                                        <span className="text-muted"><i className="bi bi-paperclip align-baseline me-1"></i>4</span>
                                                        <span className="text-muted"><i className="bi bi-chat-right-dots align-baseline me-1"></i> 3</span>
                                                    </div>
                                                </div>
                                            </Card.Body>

                                        </Card>

                                    </Col>
                                ))}
                            </Row>

                            <Row className=" align-items-center justify-content-between text-center text-sm-start mb-3">
                                <div className="col-sm">
                                    <div className="text-muted">
                                        Showing <span className="fw-semibold">9</span> of <span className="fw-semibold">11</span> Results
                                    </div>
                                </div>
                                <div className="col-sm-auto mt-3 mt-sm-0">
                                    <div className="pagination-wrap hstack gap-2">
                                        <Link className="page-item pagination-prev disabled" to="#">
                                            Previous
                                        </Link>
                                        <Pagination className=" listjs-pagination mb-0">
                                            <li className="active"><Link className="page" to="#" data-i="1" data-page="10">1</Link></li>
                                            <li><Link className="page" to="#" data-i="2" data-page="10">2</Link></li>
                                        </Pagination>
                                        <Link className="page-item pagination-next" to="#">
                                            Next
                                        </Link>
                                    </div>
                                </div>
                            </Row>
                            {/* </div> */}
                        </Tab.Pane>

                        <Tab.Pane eventKey="fourth" id="friends" className='mt-3'>
                            <div className="d-flex align-items-center mb-4">
                                <h5 className="card-title flex-grow-1 mb-0">Friends</h5>
                                <div>
                                    <Link to="pages-contacts.html" className="icon-link">View All <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                            <Row>
                                {(agentlistdata || []).map((item: any, key: any) => (

                                    <Col xxl={4} sm={6} key={key}>
                                        <Card>
                                            <Card.Body>
                                                <Dropdown className='float-end'>
                                                    <Dropdown.Toggle as='a' bsPrefix='btn btn-link' id="dropdown-basic">
                                                        <i className="bx bx-dots-horizontal-rounded text-muted"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu align="end">
                                                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#">Remove</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 position-relative">
                                                        <img src={item.img.priview} alt="" className="avatar-sm rounded" />
                                                        <span className="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span className="visually-hidden">unread messages</span></span>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        <h5 className="fs-md"><Link to="/pages-profile" className="text-dark">{item.name}</Link></h5>
                                                        <p className="text-muted mb-0">{item.course}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <p className="text-muted mb-2"><i className="bi bi-telephone align-baseline me-1"></i> {item.contact} </p>
                                                    <p className="text-muted mb-2"><i className="bi bi-envelope align-baseline me-1"></i> {item.email} </p>
                                                    <p className="text-muted mb-0"><i className="bi bi-geo-alt align-baseline me-1"></i> {item.location} </p>
                                                </div>
                                                <div className="d-flex gap-2 pt-4">
                                                    <Link to="/pages-profile" className="btn btn-subtle-secondary w-50"><i className="bi bi-person align-baseline me-1"></i> Profile</Link>
                                                    <button type="button" className="btn btn-primary text-truncate w-50"><i className="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                            <Row className=" align-items-center mb-3">
                                <div className="col-sm">
                                    <div className="text-muted text-center text-sm-start">
                                        Showing <span className="fw-semibold">9</span> of <span className="fw-semibold">13</span> Results
                                    </div>
                                </div>
                                <Col sm="auto" className="mt-3 mt-sm-0">
                                    <Pagination className="justify-content-center gap-2">
                                        <Pagination.Prev disabled href="#" > Previous</Pagination.Prev>
                                        <Pagination.Item active data-i="1" data-page="10">
                                            1
                                        </Pagination.Item>
                                        <Pagination.Item href="#" data-i="2" data-page="10">
                                            2
                                        </Pagination.Item>
                                        <Pagination.Next href="#" > Next </Pagination.Next>
                                    </Pagination>
                                </Col>
                            </Row>

                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>

            </Col>
        </React.Fragment >
    )
}

export default Overview