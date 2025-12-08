import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { FunnelChartCode, PyramidChartCode } from './FunnelCharts';

const FunnelCharts = () => {
    document.title = "Apex Funnel Charts | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <Breadcrumb title="Funnel Charts" pageTitle="Apexcharts" />
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Funnel Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <FunnelChartCode dataColors='["--tb-primary"]' />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Pyramid</h4>
                                </Card.Header>
                                <Card.Body>
                                    <PyramidChartCode dataColors='["--tb-primary", "--tb-secondary", "--tb-success", "--tb-warning", "--tb-info", "--tb-danger"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default FunnelCharts