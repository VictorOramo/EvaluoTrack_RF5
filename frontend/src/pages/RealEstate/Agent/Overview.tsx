import React from "react";
import { Button, Card, Col, Container, Row, Dropdown, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import AgentChart from "./AgentChart";
import OverviewTab from "./OverviewTab";
import BreadCrumb from "Common/BreadCrumb";

//img 
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar2 from "assets/images/users/avatar-2.jpg";
import SimpleBar from "simplebar-react";
import { ToastContainer } from "react-toastify";

const AgentOverview = () => {
    document.title = "Overview | Steex - Admin & Dashboard Template";


    //start toogle 
    const handleStar = (ele: any) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Overview" pageTitle="Agents" />
                    <Row>
                        <Col xxl={9}>
                            <Card>
                                <Card.Header className="d-flex align-items-center gap-2">
                                    <Card.Title as="h5" className="flex-grow-1 mb-0">Property Overview</Card.Title>
                                    <div className="flex-shrink-0 d-flex gap-1">
                                        <Button type="button" size="sm" className="btn btn-subtle-secondary">ALL</Button>
                                        <Button type="button" variant="secondary" size="sm" >1M</Button>
                                        <Button type="button" size="sm" className="btn btn-subtle-secondary">6M </Button>
                                        <Button type="button" size="sm" className="btn btn-subtle-secondary">1Y</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body className="ps-1">
                                    <div id="agent_overview_charts">
                                        <AgentChart dataColors='["--tb-primary", "--tb-light", "--tb-secondary"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                            <OverviewTab />
                        </Col>
                        <Col xxl={3}>
                            <Row>
                                <Col lg={12}>
                                    <Card >
                                        <Card.Body >
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="flex-grow-1">
                                                    <Button type="button" size="sm" className="btn btn-subtle-warning custom-toggle btn-icon" data-bs-toggle="button" onClick={(e: any) => handleStar(e.target)}>
                                                        <span className="icon-on"><i className="bi bi-star"></i></span>
                                                        <span className="icon-off"><i className="bi bi-star-fill"></i></span>
                                                    </Button>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="light" size="sm" bsPrefix="btn-icon" type="button">
                                                            <i className="bi bi-three-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-end">
                                                            <Dropdown.Item href="#addProperty" data-bs-toggle="modal"><i className="bi bi-pencil-square me-1 align-baseline"></i> Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#deleteRecordModal" data-bs-toggle="modal"><i className="bi bi-trash3 me-1 align-baseline"></i> Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <img src={avatar1} alt="" className="avatar-md rounded mx-auto d-block" />
                                                <h5 className="mt-3">Jerry Emard <i className="bi bi-patch-check-fill align-baseline text-info ms-1"></i></h5>
                                                <p className="text-muted">Agent</p>
                                            </div>
                                            <div className="table-responsive">
                                                <Table className="table-sm table-nowrap table-borderless mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <th>Agency</th>
                                                            <td><Link to="#">Themesbrand</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Agent License</th>
                                                            <td>#TBS01</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Agent License</th>
                                                            <td>3214 57896 5412</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Tax Number</th>
                                                            <td>TBS 214513 54414</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Location</th>
                                                            <td>Hamburg, Germany</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Email</th>
                                                            <td>jacinthe@steex.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Contact Number</th>
                                                            <td>+(27) 3041-1766</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Date</th>
                                                            <td>11 March, 2023</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <ul className="list-unstyled hstack justify-content-center gap-2 mb-0 mt-4">
                                                <li>
                                                    <Link to="#" className="avatar-xs d-inline-block">
                                                        <div className="avatar-title rounded bg-primary-subtle text-primary">
                                                            <i className="bi bi-facebook"></i>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="avatar-xs d-inline-block">
                                                        <div className="avatar-title bg-success-subtle text-success rounded">
                                                            <i className="bi bi-whatsapp"></i>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="avatar-xs d-inline-block">
                                                        <div className="avatar-title bg-info-subtle text-info rounded">
                                                            <i className="bi bi-twitter"></i>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="avatar-xs d-inline-block">
                                                        <div className="avatar-title bg-danger-subtle text-danger rounded">
                                                            <i className="bi bi-instagram"></i>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={12}>
                                    <Card className="overflow-hidden">
                                        <Card.Header className="align-items-center d-flex bg-primary-subtle text-primary p-3">
                                            <div className="flex-grow-1">
                                                <Card.Title as="h5" className="text-primary-emphasis profile-username">Jerry Emard</Card.Title>
                                                <p className="mb-0 lh-1">Active</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="mt-n1">
                                                    <Link to="tel:+(27) 3041-1766" className="btn btn-icon btn-info btn-sm"><i className="bi bi-telephone"></i></Link>
                                                </div>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="p-0">
                                            <div>
                                                <SimpleBar className="chat-conversation p-3" style={{ height: " 300px" }}>
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
                                                                            <Dropdown.Toggle as="a">
                                                                                <i className="ri-more-2-fill"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu >
                                                                                <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                                <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                                <Dropdown.Item className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                    <div className="conversation-name"><small className="text-muted time">09:07 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
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
                                                                            <Dropdown.Toggle as="a">
                                                                                <i className="ri-more-2-fill"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu >
                                                                                <Dropdown.Item href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</Dropdown.Item>
                                                                                <Dropdown.Item href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</Dropdown.Item>
                                                                                <Dropdown.Item className=" delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</Dropdown.Item>
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
                                                                            <Dropdown.Toggle as="a">
                                                                                <i className="ri-more-2-fill"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu >
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
                                                                        <Dropdown className="dropdown align-self-start message-box-drop">
                                                                            <Dropdown.Toggle as="a">
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
                                                </SimpleBar>
                                            </div>

                                            <div className="border-top border-top-dashed">
                                                <Row className="g-2 mx-3 mt-2 mb-3">
                                                    <div className="col">
                                                        <div className="position-relative">
                                                            <Form.Control type="text" className="border-light bg-light" placeholder="Enter Message..." />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <Button type="submit" variant="secondary"><i className="mdi mdi-send"></i></Button>
                                                    </div>
                                                </Row>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div >
            <ToastContainer />
        </React.Fragment >
    );
}

export default AgentOverview;