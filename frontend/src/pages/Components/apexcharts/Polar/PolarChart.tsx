import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

import { Polar, PolarMonochrome } from './Polar'

const PolarChart = () => {
    document.title=" Apex Polararea Charts | Steex Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb pageTitle="Apexcharts" title="Polar Charts" />

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Polararea Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Polar dataColors='["--tb-primary", "--tb-success", "--tb-warning","--tb-danger", "--tb-info", "--tb-success", "--tb-primary", "--tb-dark", "--tb-secondary"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">PolarArea Monochrome</h4>
                            </Card.Header>
                            <Card.Body>
                                <PolarMonochrome />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default PolarChart;