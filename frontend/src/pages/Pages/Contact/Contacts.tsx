import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap'

import { Link } from 'react-router-dom';
import { agentlistdata } from 'Common/data/agent';

const Contacts = () => {

    document.title = "Contacts | Steex - Admin & Dashboard Template"

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Contacts" pageTitle="Pages" />
                    <Row className=" align-items-center g-3 mb-4">
                        <div className="col-sm-3 me-auto">
                            <h5 className="card-title mb-0">Contact List <span className="badge bg-success ms-1 align-baseline">834</span></h5>
                        </div>
                        <Col lg={3} sm={5}>
                            <div className="search-box">
                                <input type="text" className="form-control search" placeholder="Search for name, number, location or something..." />
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </Col>
                        <div className="col-sm-auto col-auto">
                            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2">
                                <div>
                                    <a href="/#" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-primary"><i className="bx bx-plus me-1"></i> Add New</a>
                                </div>
                            </div>
                        </div>
                    </Row>

                    <Row className="mt-0">
                        {(agentlistdata || []).map((item:any,key:any)=> (
                        <Col xxl={3} sm={6} key={key}>
                            <Card>
                                <Card.Body>
                                    <div className="dropdown float-end">
                                        <Dropdown align='end'>
                                            <Dropdown.Toggle type="button" className="btn bg-transparent border-0 arrow-none">
                                                <Link className="text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-horizontal-rounded"></i></Link>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>Edit</Dropdown.Item>
                                                <Dropdown.Item>Action</Dropdown.Item>
                                                <Dropdown.Item>Remove</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center" >
                                        <div className="flex-shrink-0 position-relative">
                                            <img src={item.img.priview} alt="" className="avatar-sm rounded" />
                                            <span className="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span className="visually-hidden">unread messages</span></span>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h5 className="fs-md"><Link to="/pages-profile" className="text-dark">{item.name}</Link></h5>
                                            <p className="text-muted mb-0"> {item.course} </p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-muted mb-2"><i className="bi bi-telephone align-baseline me-1"></i> {item.contact} </p>
                                        <p className="text-muted mb-2"><i className="bi bi-envelope align-baseline me-1"></i> {item.email} </p>
                                        <p className="text-muted mb-0"><i className="bi bi-geo-alt align-baseline me-1"></i> {item.location} </p>
                                    </div>
                                    <div className="d-flex gap-2 pt-4">
                                        <Link to="/pages-profile" className="btn btn-subtle-secondary w-50"><i className="bi bi-person align-baseline me-1"></i> Profile</Link>
                                        <button type="button" className="btn btn-primary text-truncate w-50"><i className="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>

                    <Row className=" align-items-center justify-content-between text-center text-sm-start mb-3">
                        <div className="col-sm">
                            <div className="text-muted">
                                Showing <span className="fw-semibold">12</span> of <span className="fw-semibold">20</span> Results
                            </div>
                        </div>
                        <div className="col-sm-auto mt-3 mt-sm-0">
                            <div className="pagination-wrap hstack gap-2">
                                <Link className="page-item pagination-prev disabled" to="#">
                                    Previous
                                </Link>
                                <ul className="pagination listjs-pagination mb-0">
                                    <li className="active"><Link className="page" to="#">1</Link></li>
                                    <li><Link className="page" to="#">2</Link></li>
                                </ul>
                                <Link className="page-item pagination-next" to="#">
                                    Next
                                </Link>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Contacts