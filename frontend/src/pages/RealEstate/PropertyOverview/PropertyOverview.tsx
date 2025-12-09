import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Col, Container, Row } from 'react-bootstrap';
import Overview from './Overview';
import Saleprice from './Saleprice';
import PropertyOwner from './PropertyOwner';
import AgentDetails from './AgentDetails';
import OwnerDetails from './OwnerDetails';

const PropertyOverview = () => {

  document.title = "Property OverView | Steex - Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid >
          <Breadcrumb title="Property Overview" pageTitle="Real Estate" />
          <Row>
            <Col xl={9} lg={8}>
              <Overview />
            </Col>
            <Col xl={3} lg={4}>
              <Row>
                <Saleprice />
                <PropertyOwner />
                <AgentDetails />
                <OwnerDetails />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default PropertyOverview
