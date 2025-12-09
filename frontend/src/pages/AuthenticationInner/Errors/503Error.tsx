import React from 'react';
import ParticlesAuth from '../ParticlesAuth';
import { Card, Image } from 'react-bootstrap';

import er503 from "assets/images/auth/503.png"

const Fivezerothree = () => {

    document.title=" 503 Error | Steex Admin & Dashboard Template";

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="error-img text-center px-5">
                                <Image src={er503} className="img-fluid" alt="" />
                            </div>
                            <div className="mt-4 text-center pt-4">
                                <div className="position-relative">
                                    <h4 className="fs-2xl error-subtitle text-uppercase mb-0">Service Unavailable</h4>
                                    <p className="fs-lg text-muted mt-3">The service is temporarily unavailable, try again later!</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    );
}

export default Fivezerothree;