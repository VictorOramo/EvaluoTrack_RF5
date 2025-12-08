import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';

import { radialSeries } from 'Common/data'
import { RealizedRateCaharts } from './charts'

const RealizedRate = () => {

    const periodData = radialSeries

  return (
    <React.Fragment>

        <Col xl={3}>
            <Card className="card-height-100">
                <Card.Header className="align-items-center d-flex">
                    <h6 className="card-title mb-0 flex-grow-1">Realized Rate</h6>
                    <Dropdown className="card-header-dropdown flex-shrink-0 cursor-pointer">
                        <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                            <i className="bi bi-three-dots-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                            <li><Dropdown.Item href="#">Current Years</Dropdown.Item></li>
                            <li><Dropdown.Item href="#">Last Years</Dropdown.Item></li>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <Card.Body>
                    <RealizedRateCaharts periodData={periodData} dataColors='["--tb-primary", "--tb-secondary", "--tb-danger"]' />
                </Card.Body>
            </Card>
        </Col>

    </React.Fragment>
  );
};

export default RealizedRate;
