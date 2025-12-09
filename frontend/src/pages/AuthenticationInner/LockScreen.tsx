import React from 'react'
import { Card, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Images

import avatar1 from "assets/images/users/avatar-1.jpg"
import ParticlesAuth from './ParticlesAuth';

const LockScreen = () => {

    document.title = " Lock Screen | Steex Admin & Dashboard Template";

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="card mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="text-center">
                                <h5 className="fs-3xl">Lock Screen</h5>
                                <p className="text-muted mb-4">Enter your password to unlock the screen!</p>
                            </div>
                            <div className="user-thumb text-center">
                                <Image src={avatar1} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                <h5 className="font-size-15 mt-3">Hi ! Richard Marshall</h5>
                            </div>
                            <div className="p-2 mt-4">
                                <Form>
                                    <div className="mb-3">
                                        <Form.Label className="form-label" htmlFor="userpassword">Password or Pin</Form.Label>
                                        <Form.Control type="password" className="password-input" id="userpassword" placeholder="Enter password or pin" required />
                                    </div>
                                    <div className="mb-2 mt-4">
                                        <Button className="btn btn-primary w-100" type="submit">Unlock</Button>
                                    </div>
                                </Form>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="mb-0">Not you ? return <Link to={process.env.PUBLIC_URL + "/auth-signin"} className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default LockScreen;