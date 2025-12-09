import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import BreadCrumb from 'Common/BreadCrumb';
import { RangeAreaBasicChartCode, RangeAreaChartCode } from './RangeAreaCharts';


const RangeArea = () => {
  document.title = "Apex Range Area Charts | Velzon - React Admin & Dashboard Template";
  return (
      <React.Fragment>
          <div className="page-content">

              <Container fluid>
                  <BreadCrumb title="Range Area Charts" pageTitle="Apexcharts" />
                  <Row>
                      <Col lg={6}>
                          <Card>
                              <Card.Header>
                                  <h4 className="card-title mb-0">Basic Range Area Chart</h4>
                              </Card.Header>
                              <Card.Body>
                                  <RangeAreaChartCode dataColors='["--tb-primary"]' />
                              </Card.Body>
                          </Card>
                      </Col>

                      <Col lg={6}>
                          <Card>
                              <Card.Header>
                                  <h4 className="card-title mb-0">Scatter - Datetime Chart</h4>
                              </Card.Header>
                              <Card.Body>
                                  <RangeAreaBasicChartCode dataColors='["--tb-primary", "--tb-secondary"]' />
                              </Card.Body>
                          </Card>
                      </Col>
                  </Row>
              </Container>
          </div>
      </React.Fragment>
  )
}

export default RangeArea