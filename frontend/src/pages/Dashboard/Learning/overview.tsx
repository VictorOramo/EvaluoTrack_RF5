import React from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap';

// Import Images
import avatar3 from 'assets/images/users/avatar-3.jpg'
import pattern2 from 'assets/images/effect-pattern/pattern-2.svg'
import logoLight from 'assets/images/logo-light.png'
import { Link } from 'react-router-dom';

const Overview = () => {
    return (
        <React.Fragment>
            <Col xxl={3}>
                <Card className="card-height-100">
                    <Card.Body>
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <h6 className="card-title mb-0">Overview</h6>
                            </div>
                            <Dropdown className="flex-shrink-0 cursor-pointer">
                                <Dropdown.Toggle className="btn avatar-xs btn-subtle-secondary p-0 arrow-none">
                                    <i className="bi bi-share"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <li><Dropdown.Item href="#"><i className="bi bi-facebook me-1 align-baseline"></i> Facebook</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#"><i className="bi bi-whatsapp me-1 align-baseline"></i> Whatsapp</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#"><i className="bi bi-instagram me-1 align-baseline"></i> Instagram</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="text-center mb-4 pb-2">
                            <img src={avatar3} alt="" className="avatar-md rounded-circle" />
                            <h6 className="fs-md mt-3 mb-1"><Link to={"/pages-profile"} className="text-reset">Richard Marshall <i className="bi bi-patch-check-fill text-info"></i></Link></h6>
                            <p className="text-muted mb-4">Create Designer</p>
                            <Row className="g-3">
                                <Col className="col-6 border-end border-dashed">
                                    <div>
                                        <h5>1549</h5>
                                        <p className="text-muted mb-0">Students</p>
                                    </div>
                                </Col>
                                <Col className="col-6">
                                    <div>
                                        <h5>137</h5>
                                        <p className="text-muted mb-0">Courses</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="p-3 bg-light rounded courses-calendar-dashboard">
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <div className="flex-shrink-0">
                                    <Button variant='secondary' className="btn-sm"><i className="bi bi-chevron-left"></i></Button>
                                </div>
                                <h6 className="flex-grow-1 mb-0 text-center fs-md">
                                    December - 2023
                                </h6>
                                <div className="flex-shrink-0">
                                    <Button variant='secondary' className="btn-sm"><i className="bi bi-chevron-right"></i></Button>
                                </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-around date-calendar flex-wrap">
                                <Link to="#" className="week flex-shrink-0 active">
                                    <h6 className="mb-3">S</h6>
                                    <div className="avatar-xs">
                                        <div className="avatar-title rounded-circle">21</div>
                                    </div>
                                </Link>
                                <Link to="#" className="week flex-shrink-0">
                                    <h6 className="mb-3">M</h6>
                                    <div className="avatar-xs">
                                        <div className="avatar-title rounded-circle">22</div>
                                    </div>
                                </Link>
                                <Link to="#" className="week flex-shrink-0">
                                    <h6 className="mb-3">T</h6>
                                    <div className="avatar-xs">
                                        <div className="avatar-title rounded-circle">23</div>
                                    </div>
                                </Link>
                                <Link to="#" className="week flex-shrink-0">
                                    <h6 className="mb-3">W</h6>
                                    <div className="avatar-xs">
                                        <div className="avatar-title rounded-circle">24</div>
                                    </div>
                                </Link>
                                <Link to="#" className="week flex-shrink-0">
                                    <h6 className="mb-3">T</h6>
                                    <div className="avatar-xs">
                                        <div className="avatar-title rounded-circle">25</div>
                                    </div>
                                </Link>
                                <Link to="#" className="week flex-shrink-0">
                                    <h6 className="mb-3">F</h6>
                                    <div className="avatar-xs">
                                        <div className="avatar-title rounded-circle">26</div>
                                    </div>
                                </Link>
                                <Link to="#" className="week flex-shrink-0">
                                    <h6 className="mb-3">S</h6>
                                    <div className="avatar-xs">
                                        <div className="avatar-title rounded-circle">27</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h6 className="card-title mb-3">Upcoming Schedule</h6>

                            <Card border='primary' className="border-start border-3">
                                <Card.Body>
                                    <Link to={"/apps-learning-overview"} className="btn btn-primary btn-icon btn-sm float-end"><i className="bi bi-arrow-right"></i></Link>
                                    <h6 className="text-truncate"><Link to="#" className="text-reset">UI/UX style guide with sketch</Link></h6>
                                    <p className="text-muted mb-0"><i className="bi bi-calendar2 align-baseline me-1"></i> Today <i className="bi bi-clock align-baseline mx-1"></i> 02:18 PM</p>
                                </Card.Body>
                            </Card>
                            <Card border='primary' className="border-start border-3">
                                <Card.Body>
                                    <Link to={"/apps-learning-overview"} className="btn btn-primary btn-icon btn-sm float-end"><i className="bi bi-arrow-right"></i></Link>
                                    <h6 className="text-truncate"><Link to="#" className="text-reset">Advanced React And Redux</Link></h6>
                                    <p className="text-muted mb-0"><i className="bi bi-calendar2 align-baseline me-1"></i> 04 April, 2023 <i className="bi bi-clock align-baseline mx-1"></i> 03:00 to 04:00 PM</p>
                                </Card.Body>
                            </Card>
                            <Card border='primary' className="border-start border-3">
                                <Card.Body>
                                    <Link to={"/apps-learning-overview"} className="btn btn-primary btn-icon btn-sm float-end"><i className="bi bi-arrow-right"></i></Link>
                                    <h6 className="text-truncate"><Link to="#" className="text-reset">Tailwind CSS From Scratch</Link></h6>
                                    <p className="text-muted mb-0"><i className="bi bi-calendar2 align-baseline me-1"></i> 08 April, 2023 <i className="bi bi-clock align-baseline mx-1"></i> 07:36 AM</p>
                                </Card.Body>
                            </Card>
                            <Card border='primary' className="border-start border-3">
                                <Card.Body>
                                    <Link to={"/apps-learning-overview"} className="btn btn-primary btn-icon btn-sm float-end"><i className="bi bi-arrow-right"></i></Link>
                                    <h6 className="text-truncate"><Link to="#" className="text-reset">REST APIs With Flask</Link></h6>
                                    <p className="text-muted mb-0"><i className="bi bi-calendar2 align-baseline me-1"></i> 15 April, 2023 <i className="bi bi-clock align-baseline mx-1"></i> 10:11 PM</p>
                                </Card.Body>
                            </Card>
                            <Card border='primary' className="border-start border-3">
                                <Card.Body>
                                    <Link to={"/apps-learning-overview"} className="btn btn-primary btn-icon btn-sm float-end"><i className="bi bi-arrow-right"></i></Link>
                                    <h6 className="text-truncate"><Link to="#" className="text-reset">Asp.Net Core 7 True Ultimate Guide</Link></h6>
                                    <p className="text-muted mb-0"><i className="bi bi-calendar2 align-baseline me-1"></i> 24 May, 2023 <i className="bi bi-clock align-baseline mx-1"></i> 07:00 to 10:00 AM</p>
                                </Card.Body>
                            </Card>
                        </div>

                        <Card className="bg-primary overflow-hidden mb-0">
                            <div className="position-absolute bottom-0" style={{ opacity: "0.15" }}>
                                <img src={pattern2} alt="" className="img-fluid" />
                            </div>
                            <Card.Body className="position-relative">
                                <img src={logoLight} alt="" height="22" />
                                <h6 className="text-white fs-md fw-medium mt-4">Go Premium</h6>
                                <p className="text-white-75">Explore 500+ courses with lifetime membership by themesbrand</p>
                                <Link to="#" className="icon-link icon-link-hover stretched-link text-white-75">Premium Now <i className="bi bi-arrow-right"></i></Link>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Overview;
