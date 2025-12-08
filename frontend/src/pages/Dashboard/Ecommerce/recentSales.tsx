import React from 'react'
import { Card, Col, Table } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

import { RecentsalesData } from 'Common/data';

const RecentSales = () => {
    return (
        <React.Fragment>
            <Col xl={3} lg={6}>
                <Card className="card-height-100">
                    <Card.Header className="d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Recent Sales</h4>
                        <a href="#!" className="text-muted">View All <i className="ph-caret-right align-middle"></i></a>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar className="px-3" style={{ height: "360px" }}>
                            <Table className="mb-0">
                                <tbody>
                                    {(RecentsalesData || []).map((item: any, key: number) => (
                                        <tr key={key}>
                                            <td>
                                                <div className="d-flex align-items-center gap-1">
                                                    <div className="flex-shrink-0">
                                                        <img src={item.image} alt="" className="avatar-sm rounded-circle p-1" />
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h6 className="fs-md mb-1">{item.name}</h6>
                                                        <p className="text-muted text-truncate mb-0">{item.date}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <h6 className="fs-md">{item.price}</h6>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RecentSales;
