import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from "../../../assets/images/users/avatar-1.jpg";

const SupportTeam = () => {
  return (
    <React.Fragment>
       <Card.Body className="border-top mt-2">
            <Link to="#!" className="float-end link-effect">View More <i className="bi bi-arrow-right align-baseline ms-1"></i></Link>
            <h6 className="card-title mb-0">Support Team</h6>
        </Card.Body>
        <Card.Body>
            <div className="d-flex gap-2 align-items-center mb-3">
                <div className="flex-shrink-0">
                    <img src={avatar1} alt="" className="avatar-sm rounded" />
                </div>
                <div className="flex-grow-1">
                    <h6 className="fs-md">Morton Satterfield</h6>
                    <p className="text-muted mb-0">Admin & Founder</p>
                </div>
            </div>
            <Button className="btn btn-secondary w-100" id="agent-chat"><i className="bi bi-chat-text align-baseline me-1"></i> Get In Touch</Button>
        </Card.Body>
    </React.Fragment>
  )
}

export default SupportTeam
