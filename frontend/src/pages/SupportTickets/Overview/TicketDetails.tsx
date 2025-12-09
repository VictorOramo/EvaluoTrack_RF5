import React from 'react';
import { Card, Form, OverlayTrigger, Table, Tooltip } from 'react-bootstrap';

//import Images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar10 from "../../../assets/images/users/avatar-10.jpg";
import { Link } from 'react-router-dom';

const TicketDetails = () => {
    return (
        <React.Fragment>
            <Card.Header>
                <h6 className="card-title mb-0">Ticket Details</h6>
            </Card.Header>
            <Card.Body className="mt-2">
                <div className="table-responsive table-card">
                    <Table className="table-borderless align-middle mb-0">
                        <tbody>
                            <tr>
                                <th>Ticket No</th>
                                <td>#TBS<span id="t-no">24301901</span> </td>
                            </tr>
                            <tr>
                                <th>Client</th>
                                <td id="t-client">Themesbrand</td>
                            </tr>
                            <tr>
                                <th>Project</th>
                                <td>Steex - Admin & Dashboard</td>
                            </tr>
                            <tr>
                                <th>Assigned To:</th>
                                <td>
                                    <div className="avatar-group">
                                        <Link to="#" className='avatar-group-item'>
                                            <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top">Erica Kernan</Tooltip>}>
                                                <img src={avatar4} alt="" className="rounded-circle avatar-xs" />
                                            </OverlayTrigger>
                                        </Link>
                                        <Link to="#" className='avatar-group-item'>
                                            <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top">Alexis Clarke</Tooltip>}>
                                                <img src={avatar10} alt="" className="rounded-circle avatar-xs" />
                                            </OverlayTrigger>
                                        </Link>
                                        <Link to="#" className='avatar-group-item'>
                                            <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top">James Price</Tooltip>}>
                                                <img src={avatar3} alt="" className="rounded-circle avatar-xs" />
                                            </OverlayTrigger>
                                        </Link>
                                        <Link to="#" className='avatar-group-item'>
                                            <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top">Add Members</Tooltip>}>
                                                <div className="avatar-xs">
                                                    <div className="avatar-title fs-lg rounded-circle bg-light border-dashed border text-primary">
                                                        +
                                                    </div>
                                                </div>
                                            </OverlayTrigger>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>Status:</th>
                                <td>
                                    <Form.Select id="t-status" aria-label="Default select example">
                                        <option defaultValue="Status">Status</option>
                                        <option value="New">New</option>
                                        <option value="Open">Open</option>
                                        <option value="Inprogress">Inprogress</option>
                                        <option value="Closed">Closed</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <th>Priority</th>
                                <td>
                                    <span className="badge bg-danger" id="t-priority">High</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Create Date</th>
                                <td id="c-date">20 Dec, 2023</td>
                            </tr>
                            <tr>
                                <th>Due Date</th>
                                <td id="d-date">29 Dec, 2023</td>
                            </tr>
                            <tr>
                                <th>Last Activity</th>
                                <td>14 min ago</td>
                            </tr>
                            <tr>
                                <th>Labels</th>
                                <td className="hstack text-wrap gap-1">
                                    <span className="badge bg-primary-subtle text-primary">Admin</span>
                                    <span className="badge bg-primary-subtle text-primary">UI</span>
                                    <span className="badge bg-primary-subtle text-primary">Dashboard</span>
                                    <span className="badge bg-primary-subtle text-primary">Design</span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </React.Fragment>
    )
}

export default TicketDetails;