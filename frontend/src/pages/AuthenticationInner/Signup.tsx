import React from 'react';
import { Form, Button, InputGroup, Col, Card } from 'react-bootstrap';



import { Link } from 'react-router-dom';
import ParticlesAuth from './ParticlesAuth';

const SignUp = () => {

    document.title = " Sign Up | Steex Admin & Dashboard Template";

    return (
        <ParticlesAuth>
            <React.Fragment>
                <Col xxl={6} className="mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="text-center mt-2">
                                <h5 className="fs-3xl">Create your free account</h5>
                                <p className="text-muted">Get your free Steex account now</p>
                            </div>
                            <div className="p-2 mt-5">
                                <Form className="needs-validation" action="/dashboard">

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="useremail">Email <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="email" id="useremail" placeholder="Enter email address" required />
                                        <Form.Control.Feedback type="invalid">Please enter email</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="username">Username <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="username" placeholder="Enter username" required />
                                        <Form.Control.Feedback type="invalid">Please enter username</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="password-input">Password <span className="text-danger">*</span></Form.Label>
                                        <InputGroup className="position-relative auth-pass-inputgroup">
                                            <Form.Control type="password" onPaste={(e) => e.preventDefault()} placeholder="Enter password" id="password-input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                            <Button variant="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                            <Form.Control.Feedback type="invalid">Please enter password</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <p className="mb-0 fs-xs text-muted fst-italic">By registering you agree to the Steex <Link to={process.env.PUBLIC_URL + "/pages-term-conditions"} className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                                    </Form.Group>
                                    {/* <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                        <h5 className="fs-sm">Password must contain:</h5>
                                        <p id="pass-length" className="invalid fs-xs mb-2">Minimum <b>8 characters</b></p>
                                        <p id="pass-lower" className="invalid fs-xs mb-2">At <b>lowercase</b> letter (a-z)</p>
                                        <p id="pass-upper" className="invalid fs-xs mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                        <p id="pass-number" className="invalid fs-xs mb-0">A least <b>number</b> (0-9)</p>
                                    </div> */}

                                    <div className="mt-4">
                                        <Button variant='primary' className="w-100" type="submit">
                                            Sign Up
                                        </Button>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <div className="signin-other-title position-relative">
                                            <h5 className="fs-sm mb-4 title text-muted">
                                                Create account with
                                            </h5>
                                        </div>

                                        <div className="pt-1 hstack gap-1 justify-content-center">
                                            <Button type="button" variant="subtle-primary" className="btn-icon"><i className="ri-facebook-fill fs-lg"></i></Button>
                                            <Button type="button" variant="subtle-danger" className=" btn-icon"><i className="ri-google-fill fs-lg"></i></Button>
                                            <Button type="button" variant="subtle-dark" className="btn-icon"><i className="ri-github-fill fs-lg"></i></Button>
                                            <Button type="button" variant="subtle-info" className="btn-icon"><i className="ri-twitter-fill fs-lg"></i></Button>
                                        </div>
                                    </div>
                                </Form>
                                <div className="mt-4 text-center">
                                    <p className="mb-0">
                                        Already have an account ?
                                        <Link to={process.env.PUBLIC_URL + "/auth-signin"} className="fw-semibold text-primary text-decoration-underline">
                                            Signin
                                        </Link>
                                    </p>
                                </div>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </React.Fragment>
        </ParticlesAuth>
    )
}
export default SignUp;