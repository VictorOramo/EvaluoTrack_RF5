import React from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import images
import img2 from "assets/images/brands/github.png";
import img3 from "assets/images/brands/bitbucket.png";
import img13 from "assets/images/brands/dribbble.png";
import img5 from "assets/images/brands/dropbox.png";
import img4 from "assets/images/brands/slack.png";
import img6 from "assets/images/brands/mail_chimp.png";

const BrowseAppsDropdown = () => {
    return (
        <React.Fragment>
            <Dropdown className="dropdown topbar-head-dropdown ms-1 header-item" align="start">
                <Dropdown.Toggle as='button' bsPrefix="btn btn-icon btn-topbar btn-ghost-dark rounded-circle">
                    <i className='bi bi-grid fs-2xl'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-lg p-0 dropdown-menu-end">
                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                        <Row className="align-items-center">
                            <Col>
                                <h6 className="m-0 fw-semibold fs-lg">Top Brands</h6>
                            </Col>
                            <Col className="col-auto">
                                <Link to="#" className="btn btn-sm btn-subtle-info"> View All Brands
                                    <i className="ri-arrow-right-s-line align-middle"></i></Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="p-2">
                        <Row className="g-0">
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img2} alt="Github" />
                                    <span>GitHub</span>
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img3} alt="Github" />
                                    <span>Bitbucket</span>
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img13} alt="Github" />
                                    <span>Dribbble</span>
                                </Link>
                            </Col>
                        </Row>

                        <Row className="g-0">
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img5} alt="Github" />
                                    <span>Dropbox</span>
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img6} alt="Github" />
                                    <span>Mail Chimp</span>
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img4} alt="Github" />
                                    <span>Slack</span>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    );
}

export default BrowseAppsDropdown;