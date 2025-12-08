import React from 'react'
import { Badge, Card, Col, Nav, Tab } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { saleProperty, rentProperty } from "Common/data"

const PopularProperty = () => {
    return (
        <React.Fragment>
            <Col xxl={4} lg={6}>
                <Card>
                    <Tab.Container defaultActiveKey='sale'>
                        <Card.Header className="d-flex align-items-center">
                            <h4 className="card-title mb-0 flex-grow-1">Popular Property</h4>
                            <div className="flex-shrink-0">
                                <Nav className="nav-pills gap-1" id="popularProperty">
                                    <Nav.Link eventKey='sale' className="btn btn-ghost-danger btn-sm" id="saleProperty">Sale</Nav.Link>
                                    <Nav.Link eventKey='rent' className="btn btn-ghost-info btn-sm" id="rentProperty">Rent</Nav.Link>
                                </Nav>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Content className="mb-2" id="popularPropertyContent">
                                <Tab.Pane eventKey='sale' id="salePropertyTabs">
                                    {(saleProperty || []).map((item: any, key: number) => (
                                        <div className="d-flex gap-2 align-items-center position-relative mb-3" key={key}>
                                            <div className="flex-shrink-0">
                                                <img src={item.img} alt="" height="44" className="object-fit-cover rounded" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                    <h6>{item.name}</h6>
                                                </Link>
                                                <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                    <li>
                                                        <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i>{item.bedroom}</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i>{item.bathroom}</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i>{item.sqft}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill text-warning"></i>{item.rating}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Tab.Pane>

                                <Tab.Pane eventKey='rent' id="rentPropertyTabs">
                                    {(rentProperty || []).map((item: any, key: number) => (
                                        <div className="d-flex gap-2 align-items-center position-relative mb-3" key={key}>
                                            <div className="flex-shrink-0">
                                                <img src={item.img} alt="" height="44" className="object-fit-cover rounded" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <Link to={"/apps-real-estate-property-overview"} className="stretched-link">
                                                    <h6>{item.name}</h6>
                                                </Link>
                                                <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                                    <li>
                                                        <p className="text-muted mb-0"><i className="bi bi-house align-baseline text-primary me-1"></i>{item.bedroom}</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-muted mb-0"><i className="ph ph-bathtub align-middle text-primary me-1"></i>{item.bathroom}</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-muted mb-0"><i className="bi bi-columns align-baseline text-primary me-1"></i>{item.sqft}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <Badge bg="warning-subtle" text='warning'><i className="bi bi-star-fill text-warning"></i>{item.rating}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                                </Tab.Pane>
                            </Tab.Content>
                            <div className="text-center">
                                <Link to="#" className="icon-link">View All <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </Card.Body>
                    </Tab.Container>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default PopularProperty;
