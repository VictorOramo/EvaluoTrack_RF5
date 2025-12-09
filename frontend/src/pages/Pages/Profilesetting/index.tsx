import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Right from './right'
import BreadCrumb from 'Common/BreadCrumb'
import Personal from './personal'

const ProfileSetting = () => {

  document.title = " Profile Settings | Steex - Admin & Dashboard Template"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title='Profile Settings' pageTitle='Pages' />
          <Row>
            <Right />
            <Personal />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ProfileSetting