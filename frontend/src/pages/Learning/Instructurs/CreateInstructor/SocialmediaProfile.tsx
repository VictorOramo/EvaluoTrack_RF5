import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'

const SocialmediaProfile = () => {
  return (
    <React.Fragment>
      <Card>
            <Card.Body>
                <Row>
                    <Col xl={4}>
                        <h5 className="card-title mb-3">Social Media Profile</h5>
                        <p className="text-muted">Personal identification numbers: social security number (SSN), passport number, driver's license number, taxpayer identification number, patient identification number.</p>
                    </Col>
                    <Col xl={8}>
                        <Row className="g-3">
                            <Col lg={6}>
                                <div>
                                    <Form.Label htmlFor="githubUsername">Github</Form.Label>
                                    <Form.Control type="text" id="githubUsername" placeholder="Username" required />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <Form.Label htmlFor="website-input" className="form-label">Website</Form.Label>
                                    <Form.Control type="url" id="website-input" placeholder="www.example.com" required />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <Form.Label htmlFor="dribble-username" className="form-label">Dribble</Form.Label>
                                    <Form.Control type="text" id="dribble-username" placeholder="Username" required />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <Form.Label htmlFor="pinterest-username" className="form-label">Pinterest</Form.Label>
                                    <Form.Control type="text" id="pinterest-username" placeholder="Username" required />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <Form.Label htmlFor="whatsapp-username" className="form-label">Whatsapp</Form.Label>
                                    <Form.Control type="text" id="whatsapp-username" placeholder="258 0123 6789" required />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </React.Fragment>
  )
}

export default SocialmediaProfile;
