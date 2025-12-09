import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';

import { LearningOverviewChart } from './charts';
import { LearningOverviewseries } from 'Common/data';

const LearningOverview = () => {

    const periodData= LearningOverviewseries;

    return (
        <React.Fragment>
            <Col lg={8}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Learning Overview</h4>
                        <div className='d-flex gap-1'>
                            <Button className="btn-subtle-secondary btn-sm">
                                ALL
                            </Button>
                            <Button className="btn-subtle-secondary btn-sm">
                                1M
                            </Button>
                            <Button className="btn-subtle-secondary btn-sm">
                                6M
                            </Button>
                            <Button className="btn-subtle-primary btn-sm">
                                1Y
                            </Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <LearningOverviewChart periodData={periodData} dataColors='["--tb-primary", "--tb-secondary"]' />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default LearningOverview;
