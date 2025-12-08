import React from 'react'
import BreadCrumb from 'Common/BreadCrumb';
import { Container, Row } from 'react-bootstrap';

// Import Components
import Widgets from './widgets';
import RealizedRate from './realizedRate';
import BalanceOverview from './balanceOverview';
import ContactLeads from './contactLeads';
import EmailSent from './emailSent';
import UsersActivity from './usersActivity';
import SyncStatus from './syncStatus';
import OpenDeals from './openDeals';
import TasksList from './tasksList';

const Crm = () => {
  document.title="CRM | Steex Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="CRM" pageTitle="Dashboards" />
          <Widgets />
          <Row>
            <RealizedRate />
            <BalanceOverview />
          </Row>

          <Row>
            <ContactLeads />
            <EmailSent />
            <UsersActivity />
          </Row>

          <Row>
            <SyncStatus />
            <OpenDeals />
            <TasksList />
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Crm;
