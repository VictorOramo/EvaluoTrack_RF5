import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { IconLinkExample } from './Linkscode'
import { Link } from 'react-router-dom'

const IconLink = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Icon link</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Take a regular <code>&lt;a&gt;</code> element, add <code>.icon-link</code>, and insert an icon on either the left or right of your link text. The icon is automatically sized, placed, and colored.</p>
                            <div className="hstack gap-4">
                                <Link className="icon-link" to="#">
                                    <i className="bi bi-box-seam align-baseline"></i> Icon link
                                </Link>

                                <Link className="icon-link" to="#">
                                    Icon link <i className="bi bi-arrow-right"></i>
                                </Link>

                                <Link className="icon-link icon-link-hover" to="#">
                                    Icon link <i className="bi bi-arrow-right"></i>
                                </Link>
                                <Link className="icon-link icon-link-hover" style={{ transform: "translate3d(0, -.125rem, 0)" }} to="#">
                                    
                                    <i className="bi bi-clipboard"></i> Icon link
                                </Link>
                                <Link className="icon-link icon-link-hover" style={{
                                    color: isHovered ? '#2dcb73' : '#3762ea',
                                    transition: 'color 0.5s ease-in-out'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="#">
                                    
                                    Icon link <i className="bi bi-arrow-right"></i>
                                </Link>
                                <Link className="icon-link icon-link-hover link-success text-decoration-underline link-underline-success link-underline-opacity-25" to="#">
                                    Icon link <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <IconLinkExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default IconLink