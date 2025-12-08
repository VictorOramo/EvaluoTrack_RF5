import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EducationDetails = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xl={4}>
                            <h5 className="card-title mb-3">Education Details</h5>
                            <p className="text-muted">Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments</p>
                        </Col>
                        <Col xl={8}>
                            <div id="newlink">
                                <div id="1">
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="degreeTitle">Degree Title</Form.Label>
                                                <Form.Control type="text" id="degreeTitle" placeholder="Degree title" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="companyName">University/School</Form.Label>
                                                <Form.Control type="text" id="companyName" placeholder="University/School" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="passedYear">Passed Years</Form.Label>
                                                <Row>
                                                    <Col lg={5}>
                                                        <Form.Select className="form-control" data-choices data-choices-search-false name="passedYear" id="passedYear">
                                                            <option value="all">Select years</option>
                                                            <option value="Choice 1">2001</option>
                                                            <option value="Choice 2">2002</option>
                                                            <option value="Choice 3">2003</option>
                                                            <option value="Choice 4">2004</option>
                                                            <option value="Choice 5">2005</option>
                                                            <option value="Choice 6">2006</option>
                                                            <option value="Choice 7">2007</option>
                                                            <option value="Choice 8">2008</option>
                                                            <option value="Choice 9">2009</option>
                                                            <option value="Choice 10">2010</option>
                                                            <option value="Choice 11">2011</option>
                                                            <option value="Choice 12">2012</option>
                                                            <option value="Choice 13">2013</option>
                                                            <option value="Choice 14">2014</option>
                                                            <option value="Choice 15">2015</option>
                                                            <option value="Choice 16">2016</option>
                                                            <option defaultValue="Choice 17">2017</option>
                                                            <option value="Choice 18">2018</option>
                                                            <option value="Choice 19">2019</option>
                                                            <option value="Choice 20">2020</option>
                                                            <option value="Choice 21">2021</option>
                                                            <option value="Choice 22">2022</option>
                                                        </Form.Select>
                                                    </Col>
                                                    <div className="col-auto align-self-center">
                                                        to
                                                    </div>
                                                    <Col lg={5}>
                                                        <Form.Select className="form-control" data-choices data-choices-search-false name="choices-single-default2">
                                                            <option value="all">Select years</option>
                                                            <option value="Choice 1">2001</option>
                                                            <option value="Choice 2">2002</option>
                                                            <option value="Choice 3">2003</option>
                                                            <option value="Choice 4">2004</option>
                                                            <option value="Choice 5">2005</option>
                                                            <option value="Choice 6">2006</option>
                                                            <option value="Choice 7">2007</option>
                                                            <option value="Choice 8">2008</option>
                                                            <option value="Choice 9">2009</option>
                                                            <option value="Choice 10">2010</option>
                                                            <option value="Choice 11">2011</option>
                                                            <option value="Choice 12">2012</option>
                                                            <option value="Choice 13">2013</option>
                                                            <option value="Choice 14">2014</option>
                                                            <option value="Choice 15">2015</option>
                                                            <option value="Choice 16">2016</option>
                                                            <option value="Choice 17">2017</option>
                                                            <option value="Choice 18">2018</option>
                                                            <option value="Choice 19">2019</option>
                                                            <option defaultValue="Choice 20">2020</option>
                                                            <option value="Choice 21">2021</option>
                                                            <option value="Choice 22">2022</option>
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="description">Description</Form.Label>
                                                <Form.Control as="textarea" id="description" rows={3} placeholder="Enter description" />
                                            </div>
                                        </Col>

                                        <div className="hstack gap-2 justify-content-end">
                                            <Link className="btn btn-danger" to="#">Delete</Link>
                                        </div>
                                    </Row>

                                </div>
                            </div>
                            <div id="newForm" style={{ "display": "none" }}>
                            </div>
                            <Col lg={12}>
                                <div className="hstack gap-2">
                                    <Link to="#" className="btn btn-primary">Add New</Link>
                                </div>
                            </Col>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <div className="text-end mb-3">
                <button type="submit" className="btn btn-secondary"><i className="bi bi-plus-circle align-baseline me-1"></i> Add Instructor</button>
            </div>
        </React.Fragment>
    )
}

export default EducationDetails
