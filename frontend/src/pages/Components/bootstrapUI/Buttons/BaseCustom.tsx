import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { BaseclassButtonsExample, CustomSizingButtonsExample } from './UiButtonCode'

const BaseCustom = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Base class</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Bootstrap has a base <code>.btn</code> class that sets up basic styles such as padding and content alignment. By default, <code>.btn</code> controls have a transparent border and background color, and lack any explicit focus and hover styles.</p>
                            <button type="button" className="btn">Base class</button>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <BaseclassButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom sizing with CSS variables</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">You can even roll your own custom sizing with CSS variables:</p>
                            <Button variant="primary" style={{ paddingTop: '.25rem', paddingBottom: '.25rem', paddingLeft: '.5rem', paddingRight: '.5rem', fontSize: '.75rem' }}>
                                Custom button
                            </Button>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <CustomSizingButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BaseCustom