import React from 'react'
import Breadcrumb from 'Common/BreadCrumb';
import { Container, Row } from 'react-bootstrap';
import InformationProperties from './InformationProperties';
import PropertyWidgets from './PropertyWidgets';

const AddEarning = () => {

  document.title = "Add Properties | Steex - Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid >
          <Breadcrumb title="Add Properties" pageTitle="Real Estate" />
          <Row>
            <InformationProperties />
            <PropertyWidgets />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default AddEarning;
