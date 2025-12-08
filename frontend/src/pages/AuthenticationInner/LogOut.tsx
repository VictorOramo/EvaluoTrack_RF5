import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ParticlesAuth from './ParticlesAuth';


const LogOut = () => {

    document.title = " Log Out | Steex Admin & Dashboard Template";

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="display-5 text-center">
                                <i className="bi bi-box-arrow-right"></i>
                            </div>
                            <div className="mt-4 pt-2 text-center">
                                <h5 className="fs-2xl">You are Logged Out</h5>
                                <p className="text-muted">Thank you for using <span className="fw-semibold">steex</span> admin template</p>
                                <div className="mt-4">
                                    <Link to={process.env.PUBLIC_URL + "/auth-signin"} className="btn btn-primary w-100">Sign In</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

            </React.Fragment>
        </ParticlesAuth>
    )
}

export default LogOut;