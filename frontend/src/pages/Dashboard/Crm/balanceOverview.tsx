import React from 'react'
import { Button, Card, Col, Table } from 'react-bootstrap';

import { BalanceOverviewChart } from './charts';
import { BalanceChartsSeries } from 'Common/data';

const BalanceOverview = () => {
    const periodData= BalanceChartsSeries
    return (
        <React.Fragment>

            <Col xl={9}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h6 className="card-title mb-0 flex-grow-1">Balance Overview</h6>
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
                        <BalanceOverviewChart periodData={periodData} dataColors='["--tb-primary", "--tb-light","--tb-secondary"]' />
                        <div className="table-responsive table-card mb-0 mt-2">
                            <Table className="table-sm table-borderless align-middle text-center mb-0 table-nowrap">
                                <tbody>
                                    <tr>
                                        <td className="text-start"><i className="bi bi-diamond-fill align-baseline me-1 text-primary"></i> Total Revenue</td>
                                        <th>$795.69k</th>
                                        <td className="text-muted">
                                            <span className="text-success">
                                                <i className="bi bi-caret-up-fill align-baseline me-1"></i> 6.19%
                                            </span> than last years
                                        </td>
                                        <td className="text-end" style={{ width: "150px" }}>
                                            <a href="#!" className="icon-link icon-link-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover">View All 
                                            <i className="bi bi-arrow-right"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-start"><i className="bi bi-diamond-fill align-baseline me-1 text-light"></i> Total Expenses</td>
                                        <th>$415.37k</th>
                                        <td className="text-muted"><span className="text-success"><i className="bi bi-caret-up-fill align-baseline me-1"></i> 3.62%</span> than last years</td>
                                        <td className="text-end" style={{ width: "150px" }}><a href="#!" className="icon-link icon-link-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover">View All <i className="bi bi-arrow-right"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="text-start"><i className="bi bi-diamond-fill align-baseline me-1 text-secondary"></i> Profit Ratio </td>
                                        <th>3.6%</th>
                                        <td className="text-muted"><span className="text-danger"><i className="bi bi-caret-down-fill align-baseline me-1"></i> 1.47%</span> than last years</td>
                                        <td className="text-end" style={{ width: "150px" }}><a href="#!" className="icon-link icon-link-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover">View All <i className="bi bi-arrow-right"></i></a></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </React.Fragment>
    );
};

export default BalanceOverview;
