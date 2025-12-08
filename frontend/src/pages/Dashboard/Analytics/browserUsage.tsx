import React from 'react'
import { Card, Dropdown } from 'react-bootstrap';

import { BrowserData } from 'Common/data'

const BrowserUsage = () => {
    return (
        <React.Fragment>
            <Card className="card-height-100" id="networks">
                <Card.Header className="d-flex">
                    <Card.Title as="h5" className="card-title mb-0 flex-grow-1">Browser Usage</Card.Title>
                    <div className="flex-shrink-0">
                        <Dropdown className="card-header-dropdown sortble-dropdown cursor-pointer">
                            <Dropdown.Toggle as='a' bsPrefix="text-reset dropdown-btn">
                                <span className="text-muted dropdown-title me-2">Order Date</span>
                                <i className="mdi mdi-chevron-down"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li><Dropdown.Item href="#">Browsers</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Click</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Bounce Rate</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="table-responsive">
                        <table className="table align-middle table-nowrap mb-0">
                            <thead className="table-active">
                                <tr>
                                    <th className="sort cursor-pointer" data-sort="browsers">
                                        Browsers
                                    </th>
                                    <th className="sort cursor-pointer text-center" data-sort="click">
                                        Click
                                    </th>
                                    <th className="sort cursor-pointer text-center" data-sort="pageviews">
                                        Bounce Rate
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                {(BrowserData || []).map((item: any, key: number) => (
                                    <tr key={key}>
                                        <td>
                                            <img src={item.image} alt="" className="avatar-xxs" />
                                            <span className="ms-1 browsers">{item.Browsers}</span>
                                        </td>
                                        <td className="click text-center">
                                            {item.Click}
                                        </td>
                                        <td className="pageviews text-center">
                                            {item.Rate}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default BrowserUsage;
