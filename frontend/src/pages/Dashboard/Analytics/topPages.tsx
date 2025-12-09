import React from 'react'
import { Card, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopPages = () => {
    return (
        <React.Fragment>

            <Card className="card-height-100" id="top-Pages">
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title mb-0 flex-grow-1">Top Pages</h5>
                    <div className="flex-shrink-0">
                        <Dropdown className="card-header-dropdown cursor-pointer">
                            <Dropdown.Toggle as="ul" className="text-reset arrow-none mb-0">
                                <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li><Dropdown.Item href="#">Active Page</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Users</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="table-responsive">
                        <Table className="align-middle table-borderless table-centered table-nowrap mb-0">
                            <thead className="text-muted table-light">
                                <tr>
                                    <th scope="col" className="sort cursor-pointer" data-sort="activePage" style={{ width: "62" }}>Active Page</th>
                                    <th scope="col" className="sort cursor-pointer" data-sort="activePageNo">Active</th>
                                    <th scope="col" className="sort cursor-pointer" data-sort="pageUsers">Users</th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                <tr>
                                    <td>
                                        <Link to="#" className="activePage text-reset">/themesbrand/velzon</Link>
                                    </td>
                                    <td className="activePageNo">299</td>
                                    <td className="pageUsers">25.3%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="activePage text-reset">/skote/index.html</Link>
                                    </td>
                                    <td className="activePageNo">240</td>
                                    <td className="pageUsers">22.7%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="activePage text-reset">/hybrix/timeline</Link>
                                    </td>
                                    <td className="activePageNo">190</td>
                                    <td className="pageUsers">18.7%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="activePage text-reset">/themesbrand/minia</Link>
                                    </td>
                                    <td className="activePageNo">135</td>
                                    <td className="pageUsers">14.2%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="activePage text-reset">/dashon/dashboard</Link>
                                    </td>
                                    <td className="activePageNo">118</td>
                                    <td className="pageUsers">12.6%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="activePage text-reset">/doot/chats</Link>
                                    </td>
                                    <td className="activePageNo">90</td>
                                    <td className="pageUsers">10.9%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#" className="activePage text-reset">/steex/learning</Link>
                                    </td>
                                    <td className="activePageNo">75</td>
                                    <td className="pageUsers">07.3%</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>


        </React.Fragment>
    );
};

export default TopPages;
