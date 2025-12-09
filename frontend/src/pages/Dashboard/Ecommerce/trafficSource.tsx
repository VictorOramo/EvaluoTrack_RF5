import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';
import { TrafficSourceChart } from './charts';
import { TrafficSourceSeries } from 'Common/data';

const TrafficSource = () => {
    const periodData:any = TrafficSourceSeries

    return (
        <React.Fragment>
            <Col xl={3} lg={6}>
                <Card className="card-height-100">
                    <Card.Header className="d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Traffic Source</h4>
                        <Dropdown className="card-header-dropdown float-end cursor-pointer">
                            <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                <i className="ph-dots-three-outline-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li><Dropdown.Item href="#">Today</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last Month</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Current Year</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Header>
                    <Card.Body>
                        <TrafficSourceChart periodData={periodData} dataColors='["--tb-primary", "--tb-light"]' />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default TrafficSource;
