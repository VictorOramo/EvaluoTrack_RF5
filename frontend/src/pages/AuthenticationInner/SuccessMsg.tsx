import React from 'react';
import ParticlesAuth from './ParticlesAuth';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const SuccessMsg = () => {
    document.title=" Success Message | Steex Admin & Dashboard Template";
    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="avatar-lg mx-auto mt-2">
                                <div className="avatar-title bg-body-secondary text-primary display-5 rounded-circle">
                                    <i className="bi bi-emoji-smile"></i>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <h4>Well done !</h4>
                                <p className="text-muted mx-4">Aww yeah, you successfully read this important message.</p>
                                <div className="mt-4">
                                    <Link to={process.env.PUBLIC_URL + "/auth-signin"} className="btn btn-primary w-100">Back to Dashboard</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default SuccessMsg;