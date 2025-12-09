import React from 'react';
import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

const PropertyOwner = () => {
  return (
    <React.Fragment>
     <Col lg={12}>
            <Card >
                <Card.Body>
                    <div className="text-center">
                        <img src={avatar1} alt="" className="avatar-md rounded mx-auto d-block" />
                        <h5 className="mt-3">Jerry Emard</h5>
                        <p className="text-muted">OWNER</p>
                        <p className="text-muted mb-4">73 Alum Rock Rd, Birmingham, West Midland, United Kingdom - s B8 1LY</p>
                    </div>
                    <ul className="list-unstyled hstack justify-content-center gap-2 mb-0">
                        <li>
                            <Link to="#!" className="avatar-xs d-inline-block">
                                <div className="avatar-title rounded bg-primary-subtle text-primary">
                                    <i className="bi bi-facebook"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#!" className="avatar-xs d-inline-block">
                                <div className="avatar-title bg-success-subtle text-success rounded">
                                    <i className="bi bi-whatsapp"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#!" className="avatar-xs d-inline-block">
                                <div className="avatar-title bg-info-subtle text-info rounded">
                                    <i className="bi bi-twitter"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#!" className="avatar-xs d-inline-block">
                                <div className="avatar-title bg-danger-subtle text-danger rounded">
                                    <i className="bi bi-instagram"></i>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    </React.Fragment>
  )
}

export default PropertyOwner
