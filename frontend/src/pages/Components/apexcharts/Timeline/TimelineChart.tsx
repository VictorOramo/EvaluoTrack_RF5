import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import {
    Timeline,
    DifferentColor,
    MultiSeries,
    Advanced,
    MultipleSeries,
    DumbbellChart
} from "./Timeline";

const TimelineChart = () => {
    document.title=" Apex Timeline Charts | Steex Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb pageTitle="Apexcharts" title="Timeline Charts" />
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic TimeLine Charts</h4>
                            </Card.Header>
                            <Card.Body>
                                <Timeline dataColors='["--tb-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Different Color For Each Bar</h4>
                            </Card.Header>
                            <Card.Body>
                                <DifferentColor dataColors='["--tb-primary", "--tb-danger", "--tb-success", "--tb-warning", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Multi Series Timeline</h4>
                            </Card.Header>
                            <Card.Body>
                                <MultiSeries dataColors='["--tb-primary","--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Advanced Timeline (Multiple Range)</h4>
                            </Card.Header>
                            <Card.Body>
                                <Advanced dataColors='["--tb-primary", "--tb-success", "--tb-warning"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Multiple series � Group rows</h4>
                            </Card.Header>

                            <Card.Body>
                                <MultipleSeries dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info","--tb-gray","--tb-pink","--tb-purple","--tb-secondary", "--tb-dark"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Dumbbell Chart (Horizontal)</h4>
                            </Card.Header>

                            <Card.Body>
                                <DumbbellChart dataColors='["--tb-primary", "--tb-secondary"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default TimelineChart;