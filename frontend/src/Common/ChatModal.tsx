import React from "react";
import { Button, Card, Row, Col, Form, Dropdown } from "react-bootstrap";
import SimpleBar from "simplebar-react";

//img
import avatar2 from "assets/images/users/avatar-2.jpg";

const ChatModal = ({ show, handleClose }: any) => {
    return (
        <React.Fragment>
            <div className={`email-chat-detail ${show ? 'd-block' : 'd-none'}`} id="emailchat-detailElem">
                <Card className=" mb-0 overflow-hidden">
                    <Card.Header className="align-items-center d-flex bg-primary-subtle text-primary p-3">
                        <div className="flex-grow-1">
                            <h5 className="fs-md text-primary-emphasis profile-username">Morton Satterfield</h5>
                            <p className="mb-0 fs-sm lh-1">Active</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="mt-n1">
                                <button type="button" className="btn btn-link btn-icon btn-sm text-primary fs-lg text-decoration-none rounded-circle bg-primary-subtle bg-opacity-10" id="emailchat-btn-close" onClick={handleClose}><i className="ri-close-fill"></i></button>
                            </div>
                        </div>
                    </Card.Header>

                    <Card.Body className="p-0">
                        <div id="users-chat">
                            <SimpleBar style={{ height: "250px" }}>
                                <div className="chat-conversation p-3" id="chat-conversation" >
                                    <ul className="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                        <li className="chat-list left">
                                            <div className="conversation-list">
                                                <div className="chat-avatar">
                                                    <img src={avatar2} alt="" />
                                                </div>
                                                <div className="user-chat-content">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <p className="mb-0 ctext-content">Good morning 😊</p>
                                                        </div>
                                                        <Dropdown className="align-self-start message-box-drop">
                                                            <Dropdown.Toggle as="a" href="#" role="button">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                <Dropdown.Item className=" delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="conversation-name">
                                                        <small className="text-muted time">09:07 am</small>
                                                        <span className="text-success check-message-icon">
                                                            <i className="ri-check-double-line align-bottom"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-list right">
                                            <div className="conversation-list">
                                                <div className="user-chat-content">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <p className="mb-0 ctext-content">Good morning, How are you? What about our next meeting?</p>
                                                        </div>
                                                        <Dropdown className="align-self-start message-box-drop">
                                                            <Dropdown.Toggle as="a" href="#" role="button">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                <Dropdown.Item className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="conversation-name"><small className="text-muted time">09:08 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-list left">
                                            <div className="conversation-list">
                                                <div className="chat-avatar">
                                                    <img src={avatar2} alt="" />
                                                </div>
                                                <div className="user-chat-content">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <p className="mb-0 ctext-content">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                                                        </div>
                                                        <Dropdown className="align-self-start message-box-drop">
                                                            <Dropdown.Toggle as="a" href="#" role="button">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                <Dropdown.Item className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="conversation-name"><small className="text-muted time">09:10 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-list right">
                                            <div className="conversation-list">
                                                <div className="user-chat-content">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <p className="mb-0 ctext-content">Wow that's great</p>
                                                        </div>
                                                        <Dropdown className="align-self-start message-box-drop">
                                                            <Dropdown.Toggle as="a" href="#" role="button">
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                <Dropdown.Item className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="conversation-name"><small className="text-muted time">09:12 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </SimpleBar>
                        </div>

                        <div className="border-top border-top-dashed">
                            <Row className="g-2 mx-3 mt-2 mb-3">
                                <Col className="col">
                                    <div className="position-relative">
                                        <Form.Control type="text" className="border-light bg-light" placeholder="Enter Message..." />
                                    </div>
                                </Col>
                                <Col className="col-auto">
                                    <Button variant="secondary" type="submit"><i className="mdi mdi-send"></i></Button>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default ChatModal;