import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

// Images
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar4 from "assets/images/users/avatar-4.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";
import withRouter from 'Common/withRouter';

const ParticlesAuth = ({children}:any) => {
    return (
        <React.Fragment>
            <div className="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={11}>
                            <Card className="mb-0">
                                <Row className="g-0 align-items-center">
                                    <Col xxl={5}>
                                        <Card className="auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                                            <Card.Body className="py-5 d-flex justify-content-between flex-column">
                                                <div className="text-center">
                                                    <h3 className="text-white">Start your journey with us.</h3>
                                                    <p className="text-white opacity-75 fs-base">
                                                        It brings together your tasks, projects, timelines, files and more
                                                    </p>
                                                </div>

                                                <div className="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto">
                                                    <div className="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                        <div className="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                            <div className="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center">
                                                                Welcome to <span className="text-primary ms-1">Steex</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="auth-user-list list-unstyled">
                                                        <li>
                                                            <div className="avatar-sm d-inline-block">
                                                                <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <Image src={avatar1} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="avatar-sm d-inline-block">
                                                                <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <Image src={avatar2} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="avatar-sm d-inline-block">
                                                                <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <Image src={avatar3} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="avatar-sm d-inline-block">
                                                                <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <Image src={avatar4} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="avatar-sm d-inline-block">
                                                                <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <Image src={avatar5} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-white opacity-75 mb-0 mt-3">
                                                        &copy; {new Date().getFullYear()} Steex. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                                    </p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {/* Pass Children */}
                                    {children}
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default withRouter(ParticlesAuth);