import React from 'react';
import { Card, Form, Button, Image, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import authemail from "assets/images/auth/email.png";
import ParticlesAuth from './ParticlesAuth';

const PasswordReset = () => {

    document.title = " Reset Password | Steex Admin & Dashboard Template";

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="card mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="text-center mt-2">
                                <h5 className="fs-3xl">Forgot Password?</h5>
                                <p className="text-muted mb-4">Reset password with Steex</p>
                                <div className="pb-4">
                                    <Image src={authemail} alt="" className="avatar-md" />
                                </div>
                            </div>

                            <Alert className="border-0 alert-warning text-center mb-2 mx-2" role="alert">
                                Enter your email and instructions will be sent to you!
                            </Alert>
                            <div className="p-2">
                                <form>
                                    <div className="mb-4">
                                        <Form.Label className="form-label">Email</Form.Label>
                                        <Form.Control type="email" className="form-control password-input" id="email" placeholder="Enter Email" required />
                                    </div>

                                    <div className="text-center mt-4">
                                        <Button className="btn btn-primary w-100" type="submit">Send Reset Link</Button>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="mb-0">Wait, I remember my password...
                                    <Link to={process.env.PUBLIC_URL + "/auth-signin"} className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default PasswordReset;