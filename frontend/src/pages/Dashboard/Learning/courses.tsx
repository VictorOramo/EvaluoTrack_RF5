import React from 'react'
import { Card, Dropdown } from 'react-bootstrap';

import { CourseTable } from './courseTable';

const Courses = () => {
    return (
        <React.Fragment>
            <Card id="coursesList">
                <Card.Header className="align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Recent Courses</h4>
                    <div className="flex-shrink-0">
                        <Dropdown className="card-header-dropdown sortble-dropdown cursor-pointer">
                            <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                <span className="fw-semibold text-uppercase fs-12">Sort by: </span>
                                <span className="text-muted dropdown-title">Course Name</span><i className="mdi mdi-chevron-down ms-1"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                <Dropdown.Item as='button' className="sort" data-sort="courses_Name">Course Name</Dropdown.Item>
                                <Dropdown.Item as='button' className="sort" data-sort="instructor">Instructor</Dropdown.Item>
                                <Dropdown.Item as='button' className="sort" data-sort="fees">Amount</Dropdown.Item>
                                <Dropdown.Item as='button' className="sort" data-sort="status">Status</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Card.Header>
                <Card.Body>
                    <CourseTable />
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Courses;
