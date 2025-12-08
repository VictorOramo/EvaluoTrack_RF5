import BreadCrumb from 'Common/BreadCrumb';
import React from 'react'
import { LinkColorsExample, LinkUtilitiesExample } from './Linkscode';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ColorsUtilities = () => {

    document.title = " Colored links | Steex - Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page">
                <BreadCrumb pageTitle="Base Ui" title="Colored links" />
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Link colors</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">You can use the <code>.link-*</code> classes to colorize links. Unlike the <Link to="/ui-colors"><code>.text-*</code> classes</Link>, these classes have a <code>:hover</code> and <code>:focus</code> state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.</p>
                                <div>
                                    <p><Link to="#" className="link-primary">Primary link</Link></p>
                                    <p><Link to="#" className="link-secondary">Secondary link</Link></p>
                                    <p><Link to="#" className="link-success">Success link</Link></p>
                                    <p><Link to="#" className="link-danger">Danger link</Link></p>
                                    <p><Link to="#" className="link-warning">Warning link</Link></p>
                                    <p><Link to="#" className="link-info">Info link</Link></p>
                                    <p><Link to="#" className="link-light">Light link</Link></p>
                                    <p><Link to="#" className="link-dark">Dark link</Link></p>
                                    <p><Link to="#" className="link-body-emphasis mb-0">Emphasis link</Link></p>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "240px" }}>
                                    <LinkColorsExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Link utilities</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Colored links can also be modified by our link utilities.</p>
                                <div>
                                    <p><Link to="#" className="link-primary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</Link></p>
                                    <p><Link to="#" className="link-secondary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Secondary link</Link></p>
                                    <p><Link to="#" className="link-success link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Success link</Link></p>
                                    <p><Link to="#" className="link-danger link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Danger link</Link></p>
                                    <p><Link to="#" className="link-warning link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Warning link</Link></p>
                                    <p><Link to="#" className="link-info link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Info link</Link></p>
                                    <p><Link to="#" className="link-light link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Light link</Link></p>
                                    <p><Link to="#" className="link-dark link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</Link></p>
                                    <p><Link to="#" className="link-body-emphasis link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-75-hover mb-0">Emphasis link</Link></p>
                                </div>
                            </Card.Body>
                            <Card.Body className=" bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-xs text-muted mb-0">React Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "280px" }}>
                                    <LinkUtilitiesExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default ColorsUtilities;