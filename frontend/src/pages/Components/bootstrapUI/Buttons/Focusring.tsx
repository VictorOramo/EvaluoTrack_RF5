import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { FocusRingButtonsExample } from './UiButtonCode'

const Focusring = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Focus Ring</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Click directly on the link below to see the focus ring in action, or into the example below and then press <kbd>Tab</kbd>.</p>
                            <div className="d-flex gap-3">
                                <Button className="d-inline-flex py-1 px-2 border rounded-2">
                                    Focus ring
                                </Button>
                                <Button
                                    className="d-inline-flex py-1 px-2 border rounded-2"
                                    style={{ boxShadow: '0 0 0 .25rem rgba(118, 93, 255, .25)' }}
                                >
                                    Custom focus ring
                                </Button>
                                <Button
                                    className="d-inline-flex py-1 px-2 border rounded-2"
                                    style={{ boxShadow: '10px 10px 4px 0 rgba(0, 0, 0, 0.25)' }}
                                >
                                    Blurry offset focus ring
                                </Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <FocusRingButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Focusring;