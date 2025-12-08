import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';
import { UsersActivityChart } from './charts';
import { UsersActivitySeries } from 'Common/data';

const UsersActivity = () => {
    const periodData= UsersActivitySeries

    return (
        <React.Fragment>
            <Col xl={3} lg={6}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h6 className="card-title mb-0 flex-grow-1">Users Activity</h6>
                        <Dropdown className="card-header-dropdown flex-shrink-0 cursor-pointer">
                            <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                <span className="text-muted">This Month<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li><Dropdown.Item href="#">This Month</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last Month</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Header>
                    <Card.Body>
                        <UsersActivityChart periodData={periodData} dataColors='["--tb-primary", "--tb-light"]' />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default UsersActivity;
