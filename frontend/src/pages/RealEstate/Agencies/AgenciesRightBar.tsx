import React from "react";
import { Button, Card, Col, Form, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import AgenciesMap from "./AgenciesMap";

const AgenciesRightBar = () => {
    return (
        <React.Fragment>
            <Col xxl={3}>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4" className="mb-0">Request Exploration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Control type="text" className="mb-3" placeholder="Enter name" id="firstNameinput" />
                                <Form.Control type="email" className="form-control mb-3" placeholder="Enter email" id="firstNameinput" />
                                <Form.Control type="tel" className="form-control mb-3" placeholder="+(245) 451 45123" id="phonenumberInput" />
                                < Form.Control as="textarea" className="form-control mb-3" placeholder="Message" id="exampleFormControlTextarea1" rows={3} />
                                <Button variant="primary" size="sm" className="float-end">Submit</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="d-flex align-items-center">
                                <Card.Title as="h4" className="card-title flex-grow-1 mb-0">Fliters</Card.Title>
                                <div className="flex-shrink-0">
                                    <Button size="sm" className="btn btn-subtle-secondary btn-icon"><i className="bi bi-funnel fs-md"></i></Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="mb-3">
                                    <p className="text-muted fw-medium text-uppercase mb-3">Location</p>
                                    <Form.Select id="select-location">
                                        <option value="">Select Location</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="China">China</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3">
                                    <p className="text-muted fw-medium text-uppercase mb-3">Property Type</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top">  Villa </Tooltip>
                                            }
                                        >
                                            <div>
                                                <input type="radio" className="btn-check" name="propertyType" id="propertyType1" defaultChecked />
                                                <label className="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" htmlFor="propertyType1">
                                                    <i className="bi bi-house"></i>
                                                </label>
                                            </div>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top">  Apartment </Tooltip>
                                            }
                                        >
                                            <div>
                                                <input type="radio" className="btn-check" name="propertyType" id="propertyType3" />
                                                <label className="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" htmlFor="propertyType3">
                                                    <i className="bi bi-building"></i>
                                                </label>
                                            </div>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top">  Residency </Tooltip>
                                            }>
                                            <div>
                                                <input type="radio" className="btn-check" name="propertyType" id="propertyType4" />
                                                <label className="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" htmlFor="propertyType4" >
                                                    <i className="bi bi-buildings"></i>
                                                </label>
                                            </div>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top">  all </Tooltip>
                                            }>
                                            <div>
                                                <input type="radio" className="btn-check" name="propertyType" id="propertyType5" />
                                                <label className="btn btn-ghost-primary fs-lg avatar-xs p-0 d-flex justify-content-center align-items-center" htmlFor="propertyType5"><i className="bi bi-hospital"></i></label>
                                            </div>
                                        </OverlayTrigger>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-muted fw-medium text-uppercase mb-3">Bedroom</p>
                                    <Row className="gy-3" id="bedroom-filter">
                                        <Col lg={6}>
                                            <Form.Check>
                                                <Form.Check.Input type="checkbox" id="allselectBedroom" />
                                                <Form.Check.Label htmlFor="allselectBedroom">
                                                    Select All
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Check>
                                                <Form.Check.Input type="checkbox" id="twoBedroom" defaultChecked />
                                                <Form.Check.Label htmlFor="twoBedroom">
                                                    2 Bedroom
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Check>
                                                <Form.Check.Input type="checkbox" id="threeBedroom" />
                                                <Form.Check.Label htmlFor="threeBedroom">
                                                    3 Bedroom
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Check>
                                                <Form.Check.Input type="checkbox" id="fourBedroom" />
                                                <Form.Check.Label htmlFor="fourBedroom">
                                                    4 Bedroom
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Check>
                                                <Form.Check.Input type="checkbox" id="fiveBedroom" defaultChecked />
                                                <Form.Check.Label htmlFor="fiveBedroom">
                                                    5 Bedroom
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="mb-4">
                                    <p className="text-muted fw-medium text-uppercase mb-3">Price Range</p>
                                    <div>
                                        <div id="product-price-range" data-slider-color="secondary"></div>
                                        <div className="formCost d-flex gap-2 align-items-center mt-4">
                                            <Form.Control type="text" id="minCost" />
                                            <span className="fw-semibold text-muted">to</span>
                                            <Form.Control type="text" id="maxCost" />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Header>
                                <Card.Title as="h4" className="mb-0"> </Card.Title>
                            </Card.Header>
                            <Card.Body >
                                <div id="leaflet-map-marker" className="leaflet-map">
                                    <AgenciesMap />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </React.Fragment >
    );
}

export default AgenciesRightBar;