import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Col, Container, Row } from 'react-bootstrap';
import Coursedetails from './CourseDetails';
import StudentDetails from './StudentDetails';
import CourseSchedules from './CourseSchedules';


const MyCourses = () => {

  document.title = "My Courses | Steex - Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid >
          <Breadcrumb title="My Courses" pageTitle="Students" />
          <Row>
            <Coursedetails />
            <Col xl={3} lg={4}>
              <StudentDetails />
              <CourseSchedules />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default MyCourses
