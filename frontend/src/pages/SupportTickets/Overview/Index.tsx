import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Col, Container, Row } from 'react-bootstrap';
import Overview from 'pages/SupportTickets/Overview/Overview';
import TicketDetails from './TicketDetails';
import SupportTeam from './SupportTeam';
import { ToastContainer } from 'react-toastify';


const TicketsOverview = () => {

  document.title = "Tickets Overview | Steex - Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid >
          <Breadcrumb title="Overview" pageTitle="Support Tickets" />
          <div className="card">
            <Row className="g-0">
              <Overview />
              <Col xl={3} lg={4}>
                <TicketDetails />
                <SupportTeam />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <ToastContainer />
    </React.Fragment>
  )
}

export default TicketsOverview
