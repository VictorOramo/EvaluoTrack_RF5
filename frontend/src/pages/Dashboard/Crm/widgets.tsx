import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

import { WidgetsData } from 'Common/data'

const Widgets = () => {

    return (
        <React.Fragment>
            <Row>
                {(WidgetsData || []).map((item: any, key: number) => (
                    <Col xxl sm={6} key={key}>
                        <Card className="overflow-hidden">
                            <Card.Body>
                                <div className="avatar-sm float-end">
                                    <div className={"avatar-title " + item.bgcolor + " " + item.textcolor + " fs-3xl rounded"}>
                                        <i className={item.icon}></i>
                                    </div>
                                </div>
                                <h4><span className="counter-value" data-target="368.24"><CountUp start={0} end={item.amount} prefix={item.prefix} suffix={item.suffix} separator="," decimals={item.decimal && 2} /></span></h4>
                                <p className="text-muted mb-4">{item.name}</p>
                                <p className="text-muted mb-0"><span className={item.isArrow ? "badge bg-success-subtle text-success" : "badge bg-danger-subtle text-danger"}>
                                    <i className={item.isArrow ? "bi bi-arrow-up me-1" : "bi bi-arrow-down me-1"}></i>{item.perstange}</span> vs last month
                                </p>
                            </Card.Body>
                            <div className="progress progress-sm rounded-0" role="progressbar">
                                <div className={item.progressbar} style={{ width: item.width }}></div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
};

export default Widgets;
