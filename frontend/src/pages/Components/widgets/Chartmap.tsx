import React from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import { SalesReportColors, SyncStatusBreakdownColors } from './widgetAllCharts';



const Chartmap = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <h5 className="text-decoration-underline mb-3 mt-2 pb-3">Chart & Map Widgets</h5>
                </div>
            </Row>

            <Row>
                <Col xxl={4} lg={6}>
                    <Card>
                        <Card.Header className="d-flex align-items-center">
                            <h5 className="card-title mb-0 flex-grow-1">Sales Report</h5>
                            <div className="flex-shrink-0">
                                <Button className="btn btn-subtle-info btn-sm"><i className="bi bi-file-earmark-text me-1 align-baseline"></i> Generate Reports</Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <h4>$<span className="counter-value" data-target="40"><CountUp end={452.32} separator=',' /></span>M <span className="text-success fw-normal fs-sm"><i className="bi bi-arrow-up"></i> +23.57%</span></h4>
                            <p className="text-muted mb-0">($215.32 Avg. revenue monthly)</p>
                        </Card.Body>
                        <Card.Body className="pt-0 pb-2 ps-0 mt-2 mt-lg-n3">
                            <div id="sales_Report" className="apex-charts" dir="ltr">
                                <SalesReportColors dataColors='["--tb-primary", "--tb-secondary"]' />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} lg={6}>
                    <Card>
                        <Card.Header className="align-items-center d-flex">
                            <h6 className="card-title mb-0 flex-grow-1">Sync Status Breakdown</h6>
                            <Dropdown className=" card-header-dropdown flex-shrink-0">
                                <Dropdown.Toggle className="text-reset btn btn-light" aria-haspopup="true" aria-expanded="false">
                                    <span className="text-muted">This Month</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item href="#">This Month</Dropdown.Item>
                                    <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div id="syncStatusBreakdown"  className="apex-charts" dir="ltr">
                                <SyncStatusBreakdownColors  dataColors='["--tb-primary", "--tb-primary-rgb, 0.85", "--tb-primary-rgb, 0.60", "--tb-primary-rgb, 0.50", "--tb-info"]' />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4}>
                    <Card>
                        <Card.Body className="p-0">
                            <Row className=" g-0">
                                <Col md={6}>

                                    <Card className="shadow-none border-end-md border-bottom rounded-0 mb-0">
                                        <Card.Body>
                                            <Dropdown className="float-end">
                                                <Dropdown.Toggle className="text-reset btn btn-light" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                                    <Dropdown.Item href="#">Current Year</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <div className="avatar-sm">
                                                <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-3">
                                                    <i className="ph-wallet"></i>
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-uppercase fw-medium text-muted text-truncate fs-sm">Total Revenue</p>
                                                <h4 className="fw-semibold mb-3">$<span className="counter-value" data-target="40"><CountUp end={750.36} separator=',' /></span>M </h4>
                                                <div className="d-flex align-items-center gap-2">
                                                    <h5 className="text-success fs-xs mb-0">
                                                        <i className="ri-arrow-right-up-line fs-sm align-middle"></i> +19.07 %
                                                    </h5>
                                                    <p className="text-muted mb-0">than last week</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>

                                    <Card className="shadow-none border-bottom rounded-0 mb-0">
                                        <Card.Body>
                                            <Dropdown className="float-end">
                                                <Dropdown.Toggle className="text-reset btn btn-light" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                                    <Dropdown.Item href="#">Current Year</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <div className="avatar-sm">
                                                <span className="avatar-title bg-dark-subtle text-dark rounded-circle fs-3">
                                                    <i className="ph-bag"></i>
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-uppercase fw-medium text-muted text-truncate fs-sm">Orders</p>
                                                <h4 className="fw-semibold mb-3"><span className="counter-value" data-target="40"><CountUp end={684} separator=',' /></span></h4>
                                                <div className="d-flex align-items-center gap-2">
                                                    <h5 className="text-success fs-xs mb-0">
                                                        <i className="ri-arrow-right-up-line fs-sm align-middle"></i> +8.13 %
                                                    </h5>
                                                    <p className="text-muted mb-0">than last week</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>

                                    <Card className="shadow-none border-end-md rounded-0 mb-0">
                                        <Card.Body>
                                            <Dropdown className="float-end">
                                                <Dropdown.Toggle className="text-reset btn btn-light" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                                    <Dropdown.Item href="#">Current Year</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <div className="avatar-sm">
                                                <span className="avatar-title bg-light text-light-emphasis rounded-circle fs-3">
                                                    <i className="ph-eye"></i>
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-uppercase fw-medium text-muted text-truncate fs-sm">Product Views</p>
                                                <h4 className="fw-semibold mb-3"><span className="counter-value" data-target="40"><CountUp end={113870} separator=',' /></span>M</h4>
                                                <div className="d-flex align-items-center gap-2">
                                                    <h5 className="text-danger fs-xs mb-0">
                                                        <i className="ri-arrow-right-down-line fs-sm align-middle"></i> +2.01 %
                                                    </h5>
                                                    <p className="text-muted mb-0">than last week</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>

                                    <Card className="shadow-none border-top border-md-0 rounded-0 mb-0">
                                        <Card.Body>
                                            <Dropdown className="float-end">
                                                <Dropdown.Toggle className="text-reset btn btn-light" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                                    <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                                    <Dropdown.Item href="#">Current Year</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <div className="avatar-sm">
                                                <span className="avatar-title bg-info-subtle text-info rounded-circle fs-3">
                                                    <i className="ph-users-three"></i>
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-uppercase fw-medium text-muted text-truncate fs-sm">Customers</p>
                                                <h4 className="fw-semibold mb-3"><span className="counter-value" data-target="40"><CountUp end={2500} separator=',' /></span>k </h4>
                                                <div className="d-flex align-items-center gap-2">
                                                    <h5 className="text-success fs-xs mb-0">
                                                        <i className="ri-arrow-right-up-line fs-sm align-middle"></i> +10.42 %
                                                    </h5>
                                                    <p className="text-muted mb-0">than last week</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </React.Fragment >
    )
}

export default Chartmap