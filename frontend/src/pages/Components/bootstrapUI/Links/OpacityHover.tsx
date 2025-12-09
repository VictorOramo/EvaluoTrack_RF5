import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { LinkOpacityExample, LinkOpacityHoverExample } from './Linkscode'
import { Link } from 'react-router-dom'

const OpacityHover = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Link Opacity</h4>
                        </Card.Header>
                        <Card.Body>
                            <p>Change the alpha opacity of the link <code>rgba()</code> color value with utilities. Please be aware that changes to a color’s opacity can lead to links with <Link to="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast" target="_blank"><em>insufficient</em> contrast</Link>.</p>
                            <div>
                                <p><Link className="link-opacity-10" to="#">Link opacity 10</Link></p>
                                <p><Link className="link-opacity-25" to="#">Link opacity 25</Link></p>
                                <p><Link className="link-opacity-50" to="#">Link opacity 50</Link></p>
                                <p><Link className="link-opacity-75" to="#">Link opacity 75</Link></p>
                                <p className="mb-0"><Link className="link-opacity-100" to="#">Link opacity 100</Link></p>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <LinkOpacityExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Link Opacity Hover</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">You can even change the opacity level on hover.</p>
                            <div>
                                <p><Link className="link-opacity-10-hover" to="#">Link hover opacity 10</Link></p>
                                <p><Link className="link-opacity-25-hover" to="#">Link hover opacity 25</Link></p>
                                <p><Link className="link-opacity-50-hover" to="#">Link hover opacity 50</Link></p>
                                <p><Link className="link-opacity-75-hover" to="#">Link hover opacity 75</Link></p>
                                <p className="mb-0"><Link className="link-opacity-100-hover" to="#">Link hover opacity 100</Link></p>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{height: "195px"}}>
                                <LinkOpacityHoverExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default OpacityHover