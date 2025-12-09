import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';
import { SyncStatusBreakdownChart } from './charts';

import { SyncStatusBreakdownSeries } from 'Common/data';

const SyncStatus = () => {
    const periodData = SyncStatusBreakdownSeries

    return (
        <React.Fragment>
            <Col xxl={4}>
                <Card>
                    <Card.Header className="align-items-center d-flex">
                        <h6 className="card-title mb-0 flex-grow-1">Sync Status Breakdown</h6>
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
                        <SyncStatusBreakdownChart periodData={periodData} dataColors='["--tb-primary", "--tb-primary-rgb, 0.85", "--tb-primary-rgb, 0.60", "--tb-primary-rgb, 0.50", "--tb-info"]' />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default SyncStatus;
