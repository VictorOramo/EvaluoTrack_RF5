import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap';

const Insight = () => {
  return (
    <React.Fragment>
        <Col xl={4} lg={6}>
            <Card className="card-height-100">
                <Card.Header className="d-flex align-items-center">
                    <h5 className="card-title flex-grow-1 mb-0">Insight</h5>
                    <div className="flex-shrink-0">
                        <Dropdown className="=card-header-dropdown cursor-pointer">
                            <Dropdown.Toggle as='a' className="text-reset arrow-none mb-0">
                                <span className="text-muted">This Month<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li><Dropdown.Item href="#">This Month</Dropdown.Item></li>
                                <li><Dropdown.Item href="#">Last Month</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="vstack gap-2">
                        <div className="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i className="bi bi-check2-square text-primary"></i>
                            <h6 className="mb-0">The recognition that one has a mental illness</h6>
                        </div>
                        <div className="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i className="bi bi-check2-square text-primary"></i>
                            <h6 className="mb-0">Review market characteristics and trends</h6>
                        </div>
                        <div className="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i className="bi bi-check2-square text-primary"></i>
                            <h6 className="mb-0">Digital analytics data including site analytics</h6>
                        </div>
                        <div className="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i className="bi bi-check2-square text-primary"></i>
                            <h6 className="mb-0">Check uikings theme and give customer support</h6>
                        </div>
                        <div className="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i className="bi bi-check2-square text-primary"></i>
                            <h6 className="mb-0">Success stories and case studies</h6>
                        </div>
                        <div className="border py-2 px-3 w-100 rounded d-flex align-items-center gap-2">
                            <i className="bi bi-check2-square text-primary"></i>
                            <h6 className="mb-0">Preferences & purchase activity</h6>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    </React.Fragment>
  )
}

export default Insight;
