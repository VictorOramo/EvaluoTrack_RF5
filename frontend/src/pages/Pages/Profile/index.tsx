import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SideProfile from './side'
import BreadCrumb from 'Common/BreadCrumb'
import Overview from './overview'

const Profile = () => {

  document.title=" Profile | Steex - Admin & Dashboard Template"

  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb title='Profile' pageTitle='Pages' />
                <Row>
                    <SideProfile />
                    <Overview />
                </Row>
            </Container>
        </div>
    </React.Fragment>
  );
};

export default Profile