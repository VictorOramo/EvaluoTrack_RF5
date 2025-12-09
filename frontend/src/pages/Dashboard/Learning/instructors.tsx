import React from 'react';
import { Badge, Card, Col, Table } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

import { InstructorsData } from 'Common/data'
import { Link } from 'react-router-dom';

const Instructors = () => {
    return (
        <React.Fragment>
            <Col lg={4}>
                <Card className="card-height-100">
                    <Card.Header className="d-flex align-items-center">
                        <Card.Title as="h6" className="mb-0 flex-grow-1">Best instructors</Card.Title>
                        <div className="flex-shrink-0">
                            <Link to={"/apps-instructors-list"} className="icon-link icon-link-hover">View All <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar className="py-0" style={{ height: "330px" }}>
                            <div className="table-responsive mt-0">
                                <Table className="m-0">
                                    <tbody>
                                        {(InstructorsData || []).map((item: any, key: number) => (
                                            <tr key={key}>
                                                <td>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="flex-shrink-0">
                                                            <img src={item.image} alt="" className="avatar-sm rounded-circle p-1" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-md mb-1"><Link to={"/apps-instructors-overview"} className="text-reset">{item.name}</Link></h6>
                                                            <p className="text-muted mb-0">{item.courses}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <Badge bg="warning-subtle" text="warning"><i className="bi bi-star-fill"></i> {item.rateing}</Badge>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Instructors;
