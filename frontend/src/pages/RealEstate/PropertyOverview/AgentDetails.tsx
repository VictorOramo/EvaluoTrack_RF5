import React, { useState } from 'react';

import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChatModal from 'Common/ChatModal';

const AgentDetails = () => {

    const [show, setShow] = useState<any>(false);
    const handleClose = () => setShow(false);
    return (
        <React.Fragment>
            <Col lg={12} >
                <Card>
                    <Card.Header>
                        <Link to="#!" className="float-end link-effect">View More <i className="bi bi-arrow-right align-baseline ms-1"></i></Link>
                        <h6 className="card-title mb-0">Agent Details</h6>
                    </Card.Header>
                    <Card.Body>
                        <div className="d-flex gap-2 align-items-center mb-3">
                            <div className="flex-shrink-0">
                                <img src={avatar2} alt="" className="avatar-sm rounded" />
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="fs-md">Morton Satterfield</h6>
                                <p className="text-muted mb-0">Agent</p>
                            </div>
                        </div>
                        <Button className="btn btn-secondary w-100" id="agent-chat" onClick={() => setShow(true)}><i className="bi bi-chat-text align-baseline me-1"></i> Get In Touch</Button>
                    </Card.Body>
                </Card>
            </Col>
            <ChatModal show={show} handleClose={handleClose} />
        </React.Fragment>
    )
}

export default AgentDetails
