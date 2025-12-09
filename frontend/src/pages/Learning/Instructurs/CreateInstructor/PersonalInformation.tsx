import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';

const PersonalInformation = () => {
    const options = [
        { value: "Marketing", label: "Marketing" },
        { value: "Management", label: "Management" },
        { value: "Shopify Development", label: "Shopify Development" },
        { value: "Content SEO", label: "Content SEO" }
    ]

    const options1 = [
        { value: "English", label: "English" },
        { value: "French", label: "French" }
    ]
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xl={4}>
                            <h5 className="card-title mb-3">Personal Information</h5>
                            <p className="text-muted">Personal identification numbers: social security number (SSN), passport number, driver's license number, taxpayer identification number, patient identification number.</p>
                        </Col>
                        <Col xl={8}>
                            <Row className="g-3">
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="firstName">First Name <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="firstName" placeholder="First name" required />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="lastName">Last Name <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="lastName" placeholder="Last name" required />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="username">Username <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="username" placeholder="Username" required />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="JoiningdatInput">Joining Date</Form.Label>
                                        <Flatpickr
                                            className="form-control"
                                            id="JoiningdatInput"
                                            name="JoiningdatInput"
                                            placeholder="Select date"
                                            options={{
                                                mode: "single",
                                                dateFormat: 'd M, Y',
                                            }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div>
                                        <Form.Label htmlFor="designation">Designation <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="designation" placeholder="Designation" required />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="emailAddress">Email <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="email" id="emailAddress" placeholder="Email" required />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
                                        <Form.Control type="number" id="phoneNumber" placeholder="256 35659 47856" required />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="city">City</Form.Label>
                                        <Form.Control type="text" id="city" placeholder="Enter your city" required />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="country">Country</Form.Label>
                                        <Form.Control type="text" id="country" placeholder="Enter your country" required />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
                                        <Form.Control type="number" id="zipCode" placeholder="Zip code" required />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div>
                                        <Form.Label htmlFor="productTags">Featured Skills</Form.Label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            defaultValue={[options[1]]}
                                            isMulti
                                            options={options}
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="languageKnows">Language Knows</Form.Label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            defaultValue={[options1[1]]}
                                            isMulti
                                            options={options1}
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <Form.Label htmlFor="websiteUrl">Website URL</Form.Label>
                                        <Form.Control type="url" id="websiteUrl" placeholder="Enter website url" required />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div>
                                        <Form.Label htmlFor="shortDecs">Short Description</Form.Label>
                                        <Form.Control as="textarea" id="shortDecs" placeholder="Must enter minimum of a 150 characters" rows={3} />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <Form.Check className="form-switch">
                                        <Form.Check.Input type="checkbox" role="switch" id="exchangeableInput" />
                                        <Form.Check.Label htmlFor="exchangeableInput">I agree with <Link to="#" className="text-decoration-underline">Term & Conditions</Link></Form.Check.Label>
                                    </Form.Check>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default PersonalInformation
