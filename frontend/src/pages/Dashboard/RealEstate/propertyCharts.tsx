import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { ProjectOnHoldChart, OngoingPropertiesChart, PendingPropertiesChart, CompletedProjectChart } from "./charts"

const PropertyCharts = () => {
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Row className="g-4">
                            <Col xxl={3} md={6} className="border-end-md border-dashed">
                                <div className="text-center">
                                    <p className="text-muted">Project On Hold</p>
                                    <div className="mx-3 mb-3 pb-1">
                                        <ProjectOnHoldChart dataColors='["--tb-secondary"]' />
                                    </div>
                                    <h5 className="mb-0">2451 <small className="badge fs-2xs bg-danger-subtle text-danger ms-1"><i className="ph-arrow-down align-baseline"></i> 1.02%</small></h5>
                                </div>
                            </Col>
                            <Col xxl={3} md={6} className="border-end-xxl border-dashed">
                                <div className="text-center">
                                    <p className="text-muted">Ongoing Properties</p>
                                    <div className="mx-3 mb-3 pb-1">
                                        <OngoingPropertiesChart dataColors='["--tb-primary"]' />
                                    </div>
                                    <h5 className="mb-0">$750.36M <small className="badge fs-2xs bg-success-subtle text-success ms-1"><i className="ph-arrow-up align-baseline"></i> 2.17%</small></h5>
                                </div>
                            </Col>
                            <Col xxl={3} md={6} className="border-end-md border-dashed">
                                <div className="text-center">
                                    <p className="text-muted">Pending Properties</p>
                                    <div className="mx-3 mb-3 pb-1">
                                        <PendingPropertiesChart dataColors='["--tb-warning"]' />
                                    </div>
                                    <h5 className="mb-0">$750.36M <small className="badge fs-2xs bg-success-subtle text-success ms-1"><i className="ph-arrow-up align-baseline"></i> 07.26%</small></h5>
                                </div>
                            </Col>
                            <Col xxl={3} md={6}>
                                <div className="text-center">
                                    <p className="text-muted">Completed Project</p>
                                    <div className="mx-3 mb-3 pb-1">
                                        <CompletedProjectChart dataColors='["--tb-success"]' />
                                    </div>
                                    <h5 className="mb-0">4689 <small className="badge fs-2xs bg-success-subtle text-success ms-1"><i className="ph-arrow-up align-baseline"></i> 3.62%</small></h5>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default PropertyCharts;
