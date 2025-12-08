import React from 'react'
import BreadCrumb from 'Common/BreadCrumb';
import { Col, Container, Row } from 'react-bootstrap';

// Import Components
import Overview from './overview';
import Widgets from './widgets';
import ActiveUsers from './activeUsers';
import Sale from './sale';
import BrowserUsage from './browserUsage';
import TopPages from './topPages';
import SalesReport from './salesReport';
import Earning from './Earning';

const Analytics = () => {
  document.title="Analytics | Steex Admin & Dashboard Template";
  return (
    <React.Fragment>
      
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Analytics" pageTitle="Dashboards" />
          <Row>
            <Widgets />
          </Row>
          <Row>
            <Col xl={8}>
              <Overview />
            </Col>
            <Col xl={4}>
              <BrowserUsage />
            </Col>
          </Row>
          <Row>
            <Col xl={9}>
              <ActiveUsers />
            </Col>
            <Col xl={3}>
              <TopPages />
            </Col>
          </Row>

          <Row>
            <Col xl={4}>
              <Sale />
            </Col>
            <Col xl={4}>
              <SalesReport />
            </Col>
            <Col xl={4}>
              <Earning />
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Analytics;
