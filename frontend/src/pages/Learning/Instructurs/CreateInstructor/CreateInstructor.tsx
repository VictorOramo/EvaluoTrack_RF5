import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Container, Form } from 'react-bootstrap';
import PersonalInformation from './PersonalInformation';
import SocialmediaProfile from './SocialmediaProfile';
import EducationDetails from './EducationDetails';

const CreateInstructor = () => {
  document.title = "Create Instrucor | Steex - Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid >
          <Breadcrumb title="Create Instructor" pageTitle="Instructors" />
          <Form action="#!">
            <PersonalInformation />
            <SocialmediaProfile />
            <EducationDetails />
          </Form>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default CreateInstructor
