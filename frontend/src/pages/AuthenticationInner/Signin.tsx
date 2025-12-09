import React from 'react';
import { Card, Form, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ParticlesAuth from './ParticlesAuth';

const Signin = () => {
    document.title = " Sign In | Steex Admin & Dashboard Template";

    return (
        <ParticlesAuth>
            <React.Fragment>

                <div className="col-xxl-6 mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="text-center mt-5">
                                <h5 className="fs-3xl">Welcome Back</h5>
                                <p className="text-muted">Sign in to continue to Steex.</p>
                            </div>
                            <div className="p-2 mt-5">
                                <Form action="/dashboard">

                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Form.Label>Username <span className="text-danger">*</span></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type="text" className="form-control  password-input" placeholder="Enter username" required />
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <div className="float-end">
                                            <Link to={process.env.PUBLIC_URL + "/auth-pass-reset"} className="text-muted">Forgot password?</Link>
                                        </div>
                                        <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                            <Form.Control type="password" className="form-control pe-5 password-input " placeholder="Enter password" required />
                                            <Button variant="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="formRememberMe">
                                        <Form.Check type="checkbox" label="Remember me" id="auth-remember-check" />
                                    </Form.Group>

                                    <div className="mt-4">
                                        <Button className="btn btn-primary w-100" type="submit">Sign In</Button>
                                    </div>

                                    <div className="mt-4 pt-2 text-center">
                                        <div className="signin-other-title position-relative">
                                            <h5 className="fs-sm mb-4 title">Sign In with</h5>
                                        </div>
                                        <div className="pt-2 hstack gap-2 justify-content-center">
                                            <button type="button" className="btn btn-subtle-primary btn-icon"><i className="ri-facebook-fill fs-lg"></i></button>
                                            <button type="button" className="btn btn-subtle-danger btn-icon"><i className="ri-google-fill fs-lg"></i></button>
                                            <button type="button" className="btn btn-subtle-dark btn-icon"><i className="ri-github-fill fs-lg"></i></button>
                                            <button type="button" className="btn btn-subtle-info btn-icon"><i className="ri-twitter-fill fs-lg"></i></button>
                                        </div>
                                    </div>

                                </Form>

                                <div className="text-center mt-5">
                                    <p className="mb-0">Don't have an account ? <Link to={process.env.PUBLIC_URL + "/auth-signup"} className="fw-semibold text-secondary text-decoration-underline"> SignUp</Link> </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    );
}

export default Signin