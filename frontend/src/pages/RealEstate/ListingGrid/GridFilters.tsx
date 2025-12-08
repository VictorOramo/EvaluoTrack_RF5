import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { estateList } from "Common/data/Listing";

const GridFilters = ({ showfilter, setListGrid, handlefileter }: any) => {
    const [minCost, setMinCost] = useState(0);
    const [maxCost, setMaxCost] = useState(2000);

    const onUpDate = (value: any) => {
        setMinCost(value[0]);
        setMaxCost(value[1]);
    }

    //select location
    const handleSelectData = (event: any) => {
        setListGrid(estateList?.filter((select: any) => select.city === event || event === "all"))
    }

    //
    const handleCheckData = (event: any) => {
        setListGrid(estateList?.filter((property: any) => property.type === event || event === "all"))
    }
    useEffect(() => {
        onUpDate([minCost, maxCost]);
    }, [minCost, maxCost])

    useEffect(() => {
        let slider = document.getElementById("product-price-range");
        slider?.setAttribute("data-slider-color", "secondary");
    }, [])

    return (
        <React.Fragment>
            <Col xxl={3} id="propertyFilters" style={{ display: showfilter ? 'block' : 'none' }}>
                <Card className="mb-0">
                    <div data-simplebar>
                        <Card.Header className="d-flex align-items-center">
                            <Card.Title as="h4" className="flex-grow-1 mb-0">Filters</Card.Title>
                            <div className="flex-shrink-0">
                                <Button className="btn btn-subtle-secondary btn-icon btn-sm myButton" onClick={handlefileter}><i className="bi bi-chevron-left"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-3">
                                <p className="text-muted fw-medium text-uppercase mb-3">Location</p>
                                <Form.Select className="form-select" id="select-location" onChange={(e: any) => handleSelectData(e.target.value)} >
                                    <option value="all">Select Location</option>
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
                                            <input type="radio" className="btn-check" name="propertyType" value="Villa" id="propertyType1" defaultChecked onClick={(e: any) => handleCheckData(e.target.value)} />
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
                                            <input type="radio" className="btn-check" name="propertyType" value="Apartment" id="propertyType3" onClick={(e: any) => handleCheckData(e.target.value)} />
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
                                            <input type="radio" className="btn-check" name="propertyType" value="Residency" id="propertyType4" onClick={(e: any) => handleCheckData(e.target.value)} />
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
                                            <input type="radio" className="btn-check" name="propertyType" value="all" id="propertyType5" onClick={(e: any) => handleCheckData(e.target.value)} />
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
                                            <Form.Check.Input type="checkbox" value="all" id="allselectBedroom" />
                                            <Form.Check.Label htmlFor="allselectBedroom"> Select All</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="2" id="twoBedroom" defaultChecked />
                                            <Form.Check.Label htmlFor="twoBedroom">  2 Bedroom</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="3" id="threeBedroom" />
                                            <Form.Check.Label htmlFor="threeBedroom">  3 Bedroom </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="4" id="fourBedroom" />
                                            <Form.Check.Label htmlFor="fourBedroom"> 4 Bedroom </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="5" id="fiveBedroom" defaultChecked />
                                            <Form.Check.Label htmlFor="fiveBedroom">  5 Bedroom  </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mb-4">
                                <p className="text-muted fw-medium text-uppercase mb-3">Price Range</p>
                                <Nouislider
                                    range={{ min: 0, max: 2000 }}
                                    start={[minCost, maxCost]}
                                    connect
                                    onSlide={onUpDate}
                                    id="product-price-range"
                                />
                                <div>
                                    <div className="formCost d-flex gap-2 align-items-center mt-4" >
                                        <Form.Control type="text" id="minCost" autoComplete="off" value={`${minCost}`} onChange={(e: any) => setMinCost(e.target.value)} />
                                        <span className="fw-semibold text-muted">to</span>
                                        <Form.Control type="text" id="maxCost" autoComplete="off" value={`${maxCost}`} onChange={(e: any) => setMaxCost(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-muted fw-medium text-uppercase mb-3">Bathroom</p>
                                <Row className="gy-3">
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="allselectBathroom" />
                                            <Form.Check.Label htmlFor="allselectBathroom">Select All </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="twoBathroom" defaultChecked />
                                            <Form.Check.Label htmlFor="twoBathroom">2 Bathroom</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="threeBathroom" />
                                            <Form.Check.Label htmlFor="threeBathroom"> 3 Bathroom</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="fourBathroom" />
                                            <Form.Check.Label htmlFor="fourBathroom">  4 Bathroom </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="fiveBathroom" defaultChecked />
                                            <Form.Check.Label htmlFor="fiveBathroom">  5 Bathroom</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <p className="text-muted fw-medium text-uppercase mb-3">Features</p>
                                <Row className="gy-3">
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="allselectFeatures" />
                                            <Form.Check.Label htmlFor="allselectFeatures"> Select All </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="twoFeatures" defaultChecked />
                                            <Form.Check.Label htmlFor="twoFeatures"> Spa</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="threeFeatures" />
                                            <Form.Check.Label htmlFor="threeFeatures">  Swimming Pool</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="fourFeatures" />
                                            <Form.Check.Label htmlFor="fourFeatures"> Balcony  </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="fiveFeatures" defaultChecked />
                                            <Form.Check.Label htmlFor="fiveFeatures">Parking</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="sixFeatures" defaultChecked />
                                            <Form.Check.Label htmlFor="sixFeatures">  Fitness Center</Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </Col >
        </React.Fragment >
    );
}

export default GridFilters;