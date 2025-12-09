import React from 'react'
import { Card, Col, Table } from 'react-bootstrap';

import { AgentListData } from 'Common/data'
import { Link } from 'react-router-dom';

const AgentList = () => {
    return (
        <React.Fragment>
            <Col lg={6}>
                <Card>
                    <Card.Header className="d-flex align-items-center">
                        <Card.Title as="h4" className="mb-0 flex-grow-1">Agent List</Card.Title>
                        <div className="flex-shrink-0">
                            <Link to={"/apps-real-estate-agent-list"} className="text-muted">View All <i className="bi bi-chevron-right align-baseline"></i></Link>
                        </div>
                    </Card.Header>
                    <Card.Body className="pt-4">
                        <div className="table-responsive table-card">
                            <Table className="table-borderless table-centered align-middle table-nowrap mb-0">
                                <tbody>
                                    {(AgentListData || []).map((item: any, key: number) => (
                                        <tr key={key}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2">
                                                        <img src={item.image} alt="" className="avatar-xxs rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">{item.name}</div>
                                                </div>
                                            </td>
                                            <td>{item.country}</td>
                                            <td>
                                                {item.contact}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default AgentList;
