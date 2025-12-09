import React from 'react'
import { Card, Dropdown, ProgressBar } from 'react-bootstrap';
import CountUp from 'react-countup'

const Earning = () => {

    return (
        <React.Fragment>

            <Card className="card-height-100">
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title mb-0 flex-grow-1">Earning</h5>
                    <Dropdown className="card-header-dropdown cursor-pointer">
                        <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                            <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                            <li><Dropdown.Item href="#">Current Years</Dropdown.Item></li>
                            <li><Dropdown.Item href="#">Last Years</Dropdown.Item></li>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <Card.Body>
                    <div className="p-3 text-center bg-light-subtle mb-4 rounded">
                        <h4 className="mb-0">
                            <CountUp start={0} end={314.57} decimals={2} prefix="$" suffix="M" />
                            <span className="text-muted fw-normal fs-sm">
                                <span className="text-success fw-medium"> <i className="bi bi-arrow-up"></i> +23.57%</span> Last Month
                            </span>
                        </h4>
                    </div>

                    <ProgressBar>
                        <ProgressBar variant="primary" now={28} key={1} />
                        <ProgressBar variant="secondary" now={15} key={2} />
                        <ProgressBar variant="info" now={20} key={3} />
                        <ProgressBar variant="light" now={18} key={4} />
                        <ProgressBar variant="success" now={13} key={5} />
                        <ProgressBar variant="warning" now={8} key={6} />
                    </ProgressBar>
                    <ul className="list-unstyled mt-4 pt-2 vstack gap-3">
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="bi bi-circle-square text-primary me-2"></i> Product Development
                                </div>
                                <div className="flex-shrink-0">
                                    28%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="bi bi-circle-square text-secondary me-2"></i> Startup Business
                                </div>
                                <div className="flex-shrink-0">
                                    15%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="bi bi-circle-square text-info me-2"></i> Corporate Design
                                </div>
                                <div className="flex-shrink-0">
                                    20%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="bi bi-circle-square text-light me-2"></i> Develop Project
                                </div>
                                <div className="flex-shrink-0">
                                    18%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="bi bi-circle-square text-success me-2"></i> Prototype
                                </div>
                                <div className="flex-shrink-0">
                                    13%
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="bi bi-circle-square text-warning me-2"></i> Design
                                </div>
                                <div className="flex-shrink-0">
                                    8%
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="text-center">
                        <a href="#!" className="link-secondary fw-medium link-effect">View All Earning <i className="bi bi-arrow-right align-baseline ms-1"></i></a>
                    </div>
                </Card.Body>
            </Card>

        </React.Fragment>
    );
};

export default Earning;
