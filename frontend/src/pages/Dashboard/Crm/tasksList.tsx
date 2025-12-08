import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

import { TaskslistData } from 'Common/data'

const TasksList = () => {
    return (
        <React.Fragment>
            <Col xxl={4}>
                <Card>
                    <Card.Header className="align-items-center d-flex">
                        <h6 className="card-title mb-0 flex-grow-1">Create Tasks List</h6>
                        <Dropdown className="card-header-dropdown flex-shrink-0 cursor-pointer">
                            <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                <span className="fw-semibold text-uppercase">Sort by: </span>
                                <span className="text-muted">Today<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li><Dropdown.Item href="#">Today</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Yesterday</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last 7 Days</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last 30 Days</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">This Month</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last Month</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar className="py-0" style={{ height: "350px", padding: "0px 19.2px"  }}>
                            <ul className="list-group list-group-flush">
                                {(TaskslistData || []).map((item: any, key: number) => (
                                    <li className="list-group-item ps-0" key={key}>
                                        <div className="d-flex align-items-start">
                                            <div className="form-check ps-0 flex-sharink-0">
                                                <input type="checkbox" className="form-check-input ms-0" id="task_one" />
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <label className="form-check-label mb-0 ps-2">
                                                    <span className="d-block fw-semibold mb-1 text-truncate">{item.Heading}</span>
                                                    <span className="text-muted d-block">{item.Description}</span>
                                                </label>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <p className="text-muted fs-xs fw-medium mb-0">{item.date}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default TasksList;
