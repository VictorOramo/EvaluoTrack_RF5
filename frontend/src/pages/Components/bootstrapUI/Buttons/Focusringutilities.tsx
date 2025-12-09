import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FocusRingUitilitiesExample } from './UiButtonCode'
import { Link } from 'react-router-dom'

const Focusringutilities = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Focus Ring Utilities</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">In addition to <code>.focus-ring</code>, we have several <code>.focus-ring-*</code> utilities to modify the helper class defaults. Modify the color with any of our <a href={"ui-colors"}>theme colors</a>. Note that the light and dark variants may not be visible on all background colors given current color mode support.</p>
                            <Row>
                                <Col lg={6}>
                                    <p><Link to="#!" className="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Primary focus</Link></p>
                                    <p><Link to="#!" className="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Secondary focus</Link></p>
                                    <p><Link to="#!" className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Success focus</Link></p>
                                    <p className="mb-lg-0"><Link to="#!" className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Danger focus</Link></p>
                                </Col>
                                <Col lg={6}>
                                    <p><Link to="#!" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Warning focus</Link></p>
                                    <p><Link to="#!" className="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Info focus</Link></p>
                                    <p><Link to="#!" className="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Light focus</Link></p>
                                    <p className="mb-0"><Link to="#!" className="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Dark focus</Link></p>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <FocusRingUitilitiesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default Focusringutilities