import React, { useState } from 'react';
import userImg2 from "../../../../assets/images/users/48/avatar-2.jpg"
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChatModal from 'Common/ChatModal';


const InstructorDetails = () => {

  const [chat, setChat] = useState<any>(false);
  const handleShowChat = () => setChat(true);
  const handleCloseChat = () => setChat(false);

  return (
    <React.Fragment>
      <Card >
        <Card.Header>
          <Link to="/apps-instructors-overview" className="float-end link-effect">View More <i className="bi bi-arrow-right align-baseline ms-1"></i></Link>
          <h6 className="card-title mb-0">Instructor Details</h6>
        </Card.Header>
        <Card.Body>
          <div className="d-flex gap-2 align-items-center mb-3">
            <div className="flex-shrink-0">
              <img src={userImg2} alt="" className="avatar-sm rounded" />
            </div>
            <div className="flex-grow-1">
              <h6 className="fs-md">Morton Satterfield</h6>
              <p className="text-muted mb-0">Software Engineering</p>
            </div>
          </div>
          <Button variant="subtle-info" className="w-100" id="agent-chat" onClick={handleShowChat}><i className="bi bi-chat-text align-baseline me-1"></i> Get In Touch</Button>
        </Card.Body>
      </Card>
      <ChatModal show={chat} handleClose={handleCloseChat} />
    </React.Fragment>
  )
}

export default InstructorDetails
