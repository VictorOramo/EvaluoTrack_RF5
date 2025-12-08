import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

// Import Components
import Widgets from './widgets';
import LearningOverview from './learningOverview';
import Instructors from './instructors';
import Courses from './courses';
import Overview from './overview';

const Learning = () => {
  document.title="Learning | Steex Admin & Dashboard Template";

  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <Row className="learning-dash-row">
                    <Col className="col-xxl">
                        <Widgets />
                        <Row>
                            <LearningOverview />
                            <Instructors />
                        </Row>
                        <Courses />
                    </Col>
                    <Overview />
                </Row>
            </Container>
        </div>
    </React.Fragment>
  );
};

export default Learning;
