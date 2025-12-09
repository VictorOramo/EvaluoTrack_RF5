import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { UnderlineColorExample, UnderlineOffsetExample, UnderlineOpacityExample } from './Linkscode'
import { Link } from 'react-router-dom'

const ColorOpacityOffset = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={4}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Underline color</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Change the underline’s color independent of the link text color.</p>
                            <div>
                                <p><Link to="#" className="text-decoration-underline link-underline-primary">Primary underline</Link></p>
                                <p><Link to="#" className="text-decoration-underline link-underline-secondary">Secondary underline</Link></p>
                                <p><Link to="#" className="text-decoration-underline link-underline-success">Success underline</Link></p>
                                <p><Link to="#" className="text-decoration-underline link-underline-danger">Danger underline</Link></p>
                                <p><Link to="#" className="text-decoration-underline link-underline-warning">Warning underline</Link></p>
                                <p><Link to="#" className="text-decoration-underline link-underline-info">Info underline</Link></p>
                                <p><Link to="#" className="text-decoration-underline link-underline-light">Light underline</Link></p>
                                <p className="mb-0"><Link to="#" className="text-decoration-underline link-underline-dark">Dark underline</Link></p>
                            </div>
                        </Card.Body>
                        <Card.Body className=" bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{height: "195px"}}>
                                <UnderlineColorExample/>
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Underline opacity</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Change the underline’s opacity. Requires adding <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>
                            <div>
                                <p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-0" to="#">Underline opacity 0</Link></p>
                                <p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-10" to="#">Underline opacity 10</Link></p>
                                <p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-25" to="#">Underline opacity 25</Link></p>
                                <p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-50" to="#">Underline opacity 50</Link></p>
                                <p><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-75" to="#">Underline opacity 75</Link></p>
                                <p className="mb-0"><Link className="link-offset-2 text-decoration-underline link-underline link-underline-opacity-100" to="#">Underline opacity 100</Link></p>
                            </div>
                        </Card.Body>
                        <Card.Body className=" bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <UnderlineOpacityExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Underline offset</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Change the underline’s distance from your text. Offset is set in <code>em</code> units to automatically scale with the element’s current <code>font-size</code>.</p>
                            <div>
                                <p><Link to="#">Default link</Link></p>
                                <p><Link className="text-decoration-underline link-offset-1" to="#">Offset 1 link</Link></p>
                                <p><Link className="text-decoration-underline link-offset-2" to="#">Offset 2 link</Link></p>
                                <p className="mb-0"><Link className="text-decoration-underline link-offset-3" to="#">Offset 3 link</Link></p>
                            </div>
                        </Card.Body>
                        <Card.Body className=" bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <UnderlineOffsetExample/>
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ColorOpacityOffset