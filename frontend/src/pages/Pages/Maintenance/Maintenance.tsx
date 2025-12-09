import ParticlesAuth from 'pages/AuthenticationInner/ParticlesAuth'
import React from 'react'

import maintain from "assets/images/auth/maintenance.png"
import { Link } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap'

const Maintenance = () => {

    document.title=" Maintenance | Steex - Admin & Dashboard Template"

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="text-center">
                                <div className="mb-5">
                                    <h3>Site is Under Maintenance</h3>
                                    <p className="text-muted fs-md">Please check back in sometime</p>
                                </div>  
                                <Row className="justify-content-center">
                                    <div className="col-xl-8 col-sm-5 col-8">
                                        <img src={maintain} alt="" className="img-fluid" />
                                    </div>
                                </Row>
                                <div className="mt-4 pt-3">
                                    <Link to="/dashboard" className="btn btn-primary"><i className="mdi mdi-home me-1"></i>Back to Home</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default Maintenance;