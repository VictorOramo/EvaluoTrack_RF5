import React from 'react'
import ParticlesAuth from '../ParticlesAuth';
import { Card, Image } from 'react-bootstrap';

import er500 from "assets/images/auth/500.png"
import { Link } from 'react-router-dom';

const Fivezerozero = () => {

    document.title=" 500 Error | Steex Admin & Dashboard Template";

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="error-img text-center px-5">
                                <Image src={er500} className="img-fluid" alt="" />
                            </div>
                            <div className="mt-4 text-center pt-4">
                                <div className="position-relative">
                                    <h4 className="fs-2xl error-subtitle text-uppercase mb-0">Internal Server Error</h4>
                                    <p className="fs-lg text-muted mt-3">It will be as simple as Occidental in fact,
                                        it will Occidental to an English person</p>
                                    <div className="mt-4">
                                        <Link to={process.env.PUBLIC_URL + "/dashboard"} className="btn btn-primary"><i className="mdi mdi-home me-1"></i>Back to home</Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default Fivezerozero;