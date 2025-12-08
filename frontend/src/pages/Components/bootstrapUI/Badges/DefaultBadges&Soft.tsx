import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { DefaultBadgesExample, SoftBadgesExample } from './UiBadgeCode';

const DefaultBadges = () => {

    document.title=" Badges | Steex -Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page">
                    <Breadcrumb title="Badges" pageTitle="Base UI" />
                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>badge</code> class to set a default badge.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Badge bg='primary'>Primary</Badge>
                                        <Badge bg='secondary'>Secondary</Badge>
                                        <Badge bg='success'>Success</Badge>
                                        <Badge bg='info'>Info</Badge>
                                        <Badge bg='warning'>Warning</Badge>
                                        <Badge bg='danger'>Danger</Badge>
                                        <Badge bg='dark'>Dark</Badge>
                                        <Badge bg='light' className='text-body'>Light</Badge>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "175px" }}>
                                        <DefaultBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Subtle Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>badge-subtle-</code> class with the below-mentioned variation to create a softer badge. </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge bg-primary-subtle text-primary">Primary</span>
                                        <span className="badge bg-secondary-subtle text-secondary">Secondary</span>
                                        <span className="badge bg-success-subtle text-success">Success</span>
                                        <span className="badge bg-info-subtle text-info">Info</span>
                                        <span className="badge bg-warning-subtle text-warning">Warning</span>
                                        <span className="badge bg-danger-subtle text-danger">Danger</span>
                                        <span className="badge bg-dark-subtle text-dark">Dark</span>
                                        <span className="badge bg-light-subtle text-dark text-body">Light</span>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "175px" }}>
                                        <SoftBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </div>
        </React.Fragment>
    )
}

export default DefaultBadges;