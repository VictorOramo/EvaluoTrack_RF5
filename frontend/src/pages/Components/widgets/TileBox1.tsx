import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { Card, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import { Areachartmini6Colors, Areachartmini7Colors, Areachartmini8Colors, Areachartmini9Colors, ImpressionsColors, SessionChartColors, ViewsChartColors, VisitDurationColors } from './widgetAllCharts';

const TileBox1 = () => {

    document.title = "Widgets | Steex - Admin & Dashboard Template"

    return (
        <React.Fragment>
            <div className="page">
                <BreadCrumb title="Widgets" pageTitle="Steex" />
                <Row>
                    <div className="col-12">
                        <h5 className="text-decoration-underline mb-3 pb-1">Tile Boxs</h5>
                    </div>
                </Row>

                <Row>
                    <Col xl={3} sm={6}>
                        <Card>
                            <Card.Body>
                                <Dropdown className="float-end">
                                    <Dropdown.Toggle className='text-reset btn btn-light'>
                                        <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item href="#">Today</Dropdown.Item>
                                        <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                        <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                        <Dropdown.Item href="#">Current Year</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <p className="fs-md text-muted mb-0">Total Sessions</p>

                                <div className="row mt-4 align-items-end">
                                    <Col lg={6}>
                                        <h3 className="mb-4"><span className="counter-value" data-target="40"><CountUp end={368.24} separator=',' /></span>k</h3>
                                        <p className="text-success mb-0"><i className="bi bi-arrow-up me-1"></i> 06.41% Last Month</p>
                                    </Col>
                                    <Col lg={6}>
                                        <div id="session_chart" className="apex-charts m-n3 mt-n4" dir="ltr">
                                            <SessionChartColors dataColors='["--tb-primary"]' />
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6}>
                        <Card>
                            <Card.Body>
                                <Dropdown className="float-end">
                                    <Dropdown.Toggle className="text-reset btn btn-light" >
                                        <span className="text-muted fs-lg"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item href="#">Today</Dropdown.Item>
                                        <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                        <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                        <Dropdown.Item href="#">Current Year</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <p className="fs-md text-muted mb-0">Avg. Visit Duration</p>

                                <div className="row mt-4 align-items-end">
                                    <Col lg={6}>
                                        <h3 className="mb-4"><span className="counter-value" data-target="40"><CountUp end={1.47} separator=',' /></span>sec </h3>
                                        <p className="text-success mb-0"><i className="bi bi-arrow-up me-1"></i> 13% Last Month</p>
                                    </Col>
                                    <Col lg={6}>
                                        <div id="visti_duration_chart" className="apex-charts m-n3 mt-n4" dir="ltr">
                                            <VisitDurationColors dataColors='["--tb-primary", "--tb-secondary"]' />
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6}>
                        <Card>
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
                                <p className="fs-md text-muted mb-0">Impressions</p>

                                <div className="row mt-4 align-items-end">
                                    <Col lg={6}>
                                        <h3 className="mb-4"><span className="counter-value" data-target="40"><CountUp end={1647} separator=',' /></span></h3>
                                        <p className="text-danger mb-0"><i className="bi bi-arrow-down me-1"></i> 07.26% Last Week</p>
                                    </Col>
                                    <Col lg={6}>
                                        <div id="impressions_chart" className="apex-charts m-n3 mt-n4" dir="ltr">
                                            <ImpressionsColors dataColors='["--tb-secondary"]' />
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6}>
                        <Card>
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
                                <p className="fs-md text-muted mb-0">Total Views</p>

                                <div className="row mt-4 align-items-end">
                                    <Col lg={6}>
                                        <h3 className="mb-4"><span className="counter-value" data-target="40"><CountUp end={291.32} separator=',' /></span>k</h3>
                                        <p className="text-success mb-0"><i className="bi bi-arrow-up me-1"></i> 13% Last Month</p>
                                    </Col>
                                    <Col lg={6}>
                                        <div id="views_chart" className="apex-charts m-n3 mt-n4" dir="ltr">
                                            <ViewsChartColors dataColors='["--tb-primary"]' />
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={3} sm={6}>
                        <Card className="file-manager-widgets" style={{ backgroundSize: "95px", backgroundPosition: "right bottom" }}>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="flex-grow-1">
                                        <div className="avatar-sm">
                                            <div className="avatar-title bg-success-subtle text-success rounded fs-xl">
                                                <i className="bi bi-ticket"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p><span className="text-success me-1"><i className="ri-arrow-right-up-line fs-sm align-middle"></i> +3.47 %</span> than last week</p>
                                    </div>
                                </div>
                                <h4 className="fw-semibold mb-3"><span className="counter-value" data-target="40"><CountUp end={249} separator=',' /></span>k</h4>
                                <p className="fw-medium text-muted mb-0">Total Tickets</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3} sm={6}>
                        <Card className="file-manager-widgets" style={{ backgroundSize: "95px", backgroundPosition: "right bottom" }}>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="flex-grow-1">
                                        <div className="avatar-sm">
                                            <div className="avatar-title bg-warning-subtle text-warning rounded fs-xl">
                                                <i className="bi bi-hourglass-split"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p><span className="text-danger me-1"><i className="ri-arrow-right-down-line fs-sm align-middle"></i> +6.33 %</span> than last week</p>
                                    </div>
                                </div>
                                <h4 className="fw-semibold mb-3"><span className="counter-value" data-target="40"><CountUp end={3174} separator=',' /></span></h4>
                                <p className="fw-medium text-muted mb-0">Pending Tickets</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6}>
                        <Card className="file-manager-widgets" style={{ backgroundSize: "95px", backgroundPosition: "right bottom" }}>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="flex-grow-1">
                                        <div className="avatar-sm">
                                            <div className="avatar-title bg-danger-subtle text-danger rounded fs-xl">
                                                <i className="bi bi-lock"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p><span className="text-success me-1"><i className="ri-arrow-right-up-line fs-sm align-middle"></i> +7.34 %</span> than last week</p>
                                    </div>
                                </div>
                                <h4 className="fw-semibold mb-3"><span className="counter-value" data-target="40"><CountUp end={1596} separator=',' /></span></h4>
                                <p className="fw-medium text-muted mb-0">Closed Tickets</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6}>
                        <Card className="card-primary file-manager-widgets" style={{ backgroundSize: "95px", backgroundPosition: "right bottom" }}>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="flex-grow-1">
                                        <div className="avatar-sm">
                                            <div className="avatar-title bg-primary-subtle text-primary rounded fs-xl">
                                                <i className="bi bi-ticket-perforated"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <p><span className="text-danger me-1"><i className="ri-arrow-right-down-line fs-sm align-middle"></i> +1.29 %</span> than last week</p>
                                    </div>
                                </div>
                                <h4 className="fw-semibold text-reset mb-3"><span className="counter-value" data-target="40"><CountUp end={365} separator=',' /></span>k</h4>
                                <p className="fw-medium text-white text-opacity-50 mb-0">New Tickets</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xxl sm={6}>
                        <Card className=" overflow-hidden">
                            <Card.Body>
                                <div className="avatar-sm float-end">
                                    <div className="avatar-title bg-primary-subtle text-primary fs-3xl rounded">
                                        <i className="ph ph-briefcase"></i>
                                    </div>
                                </div>
                                <h4>$<span className="counter-value" data-target="40"><CountUp end={368.24} separator=',' />0</span>M </h4>
                                <p className="text-muted mb-4">Annual Profit</p>
                                <p className="text-muted mb-0"><span className="badge bg-success-subtle text-success"><i className="bi bi-arrow-up"></i> 4.65%</span> vs last month</p>
                            </Card.Body>
                            <ProgressBar variant="primary" now={76} className="progress-sm rounded-0" style={{ width: "76%", height: "5px" }} />
                        </Card>

                    </Col>

                    <div className="col-xxl col-sm-6">
                        <Card className=" overflow-hidden">
                            <Card.Body>
                                <div className="avatar-sm float-end">
                                    <div className="avatar-title bg-secondary-subtle text-secondary fs-3xl rounded">
                                        <i className="ph ph-wallet"></i>
                                    </div>
                                </div>
                                <h4>$<span className="counter-value" data-target="40"><CountUp end={1454.71} separator=',' /></span>k </h4>
                                <p className="text-muted mb-4">Daily average income</p>
                                <p className="text-muted mb-0"><span className="badge bg-success-subtle text-success"><i className="bi bi-arrow-up"></i> 1.33%</span> vs last month</p>
                            </Card.Body>
                            <ProgressBar variant="secondary" now={88} className="progress-sm rounded-0" style={{ width: "88%", height: "5px" }} />

                        </Card>
                    </div>
                    <div className="col-xxl col-sm-6">
                        <Card className="overflow-hidden">
                            <Card.Body>
                                <div className="avatar-sm float-end">
                                    <div className="avatar-title bg-danger-subtle text-danger fs-3xl rounded">
                                        <i className="bi bi-broadcast"></i>
                                    </div>
                                </div>
                                <h4><span className="counter-value" data-target="40"><CountUp end={33.37} separator=',' /></span>%</h4>
                                <p className="text-muted mb-4">Lead Conversations</p>
                                <p className="text-muted mb-0"><span className="badge bg-success-subtle text-success"><i className="bi bi-arrow-up"></i> 2.69%</span> vs last month</p>
                            </Card.Body>
                            <ProgressBar variant="danger" now={18} className="progress-sm rounded-0" style={{ width: "18%", height: "5px" }} />

                        </Card>
                    </div>
                    <div className="col-xxl col-sm-6">
                        <Card className="overflow-hidden">
                            <Card.Body>
                                <div className="avatar-sm float-end">
                                    <div className="avatar-title bg-success-subtle text-success fs-3xl rounded">
                                        <i className="ph ph-rocket-launch"></i>
                                    </div>
                                </div>
                                <h4><span className="counter-value" data-target="40"><CountUp end={648} separator=',' /></span></h4>
                                <p className="text-muted mb-4">Campaign Sent</p>
                                <p className="text-muted mb-0"><span className="badge bg-danger-subtle text-danger"><i className="bi bi-arrow-down"></i> 0.78%</span> vs last month</p>
                            </Card.Body>
                            <ProgressBar variant="success" now={49} className="progress-sm rounded-0" style={{ width: "49%", height: "5px" }} />

                        </Card>
                    </div>
                    <div className="col-xxl">
                        <Card className="overflow-hidden">
                            <Card.Body>
                                <div className="avatar-sm float-end">
                                    <div className="avatar-title bg-warning-subtle text-warning fs-3xl rounded">
                                        <i className="ph ph-heartbeat"></i>
                                    </div>
                                </div>
                                <h4><span className="counter-value" data-target="40"><CountUp end={1742} separator=',' /></span></h4>
                                <p className="text-muted mb-4">Annual Deals</p>
                                <p className="text-muted mb-0"><span className="badge bg-success-subtle text-success"><i className="bi bi-arrow-up"></i> 7.93%</span> vs last month</p>
                            </Card.Body>
                            <ProgressBar variant="warning" now={83} className="progress-sm rounded-0" style={{ width: "83%", height: "5px" }} />

                        </Card>
                    </div>
                </Row>


                <Row>
                    <Card>
                        <Card.Body>
                            <Row className=" g-4">
                                <div className="col-xxl-3 col-md-6 border-end-md border-dashed">
                                    <div className="text-center">
                                        <p className="text-muted">Project On Hold</p>
                                        <div className="mx-3 mb-3 pb-1">
                                            <div id="mini_chart_6" data-colors='["--tb-secondary"]' className="apex-charts" dir="ltr">
                                                <Areachartmini6Colors dataColors='["--tb-secondary"]' />
                                            </div>
                                        </div>
                                        <h5 className="mb-0">2451 <small className="badge fs-2xs bg-danger-subtle text-danger ms-1"><i className="ph-arrow-down align-baseline"></i> 1.02%</small></h5>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6 border-end-xxl border-dashed">
                                    <div className="text-center">
                                        <p className="text-muted">Ongoing Properties</p>
                                        <div className="mx-3 mb-3 pb-1">
                                            <div id="mini_chart_7" className="apex-charts" dir="ltr">
                                                <Areachartmini7Colors dataColors='["--tb-primary"]' />
                                            </div>
                                        </div>
                                        <h5 className="mb-0">$750.36M <small className="badge fs-2xs bg-success-subtle text-success ms-1"><i className="ph-arrow-up align-baseline"></i> 2.17%</small></h5>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6 border-end-md border-dashed">
                                    <div className="text-center">
                                        <p className="text-muted">Pending Properties</p>
                                        <div className="mx-3 mb-3 pb-1">
                                            <div id="mini_chart_8" className="apex-charts" dir="ltr">
                                                <Areachartmini8Colors dataColors='["--tb-warning"]' />
                                            </div>
                                        </div>
                                        <h5 className="mb-0">$750.36M <small className="badge fs-2xs bg-success-subtle text-success ms-1"><i className="ph-arrow-up align-baseline"></i> 07.26%</small></h5>
                                    </div>
                                </div>
                                <Col xxl={3} md={6}>
                                    <div className="text-center">
                                        <p className="text-muted">Completed Project</p>
                                        <div className="mx-3 mb-3 pb-1">
                                            <div id="mini_chart_9" className="apex-charts" dir="ltr">
                                                <Areachartmini9Colors dataColors='["--tb-success"]' />
                                            </div>
                                        </div>
                                        <h5 className="mb-0">4689 <small className="badge fs-2xs bg-success-subtle text-success ms-1"><i className="ph-arrow-up align-baseline"></i> 3.62%</small></h5>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Row className=" row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
                        <Col>
                            <Card className="border-bottom border-3 card-animate border-primary">
                                <Card.Body>
                                    <span className="badge bg-success-subtle text-success float-end"><i className="ph-trend-up align-middle me-1"></i> 3.8%</span>
                                    <h4 className="mb-4"><span className="counter-value" data-target="40"><CountUp end={21438} separator=',' />0</span></h4>

                                    <p className="text-muted fw-medium text-uppercase mb-0">Total Orders</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-bottom border-3 card-animate card-secondary border-secondary">
                                <Card.Body>
                                    <span className="badge bg-success-subtle text-success float-end"><i className="ph-trend-up align-middle me-1"></i> 20.8%</span>
                                    <h4 className="mb-4 text-reset"><span className="counter-value" data-target="40"><CountUp end={5963} separator=',' />0</span></h4>

                                    <p className="text-white text-opacity-50 fw-medium text-uppercase mb-0">New Orders</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-bottom border-3 card-animate border-warning">
                                <Card.Body>
                                    <span className="badge bg-success-subtle text-success float-end"><i className="ph-trend-up align-middle me-1"></i> 12.6%</span>
                                    <h4 className="mb-4"><span className="counter-value" data-target="40"><CountUp end={4620} separator=',' />0</span></h4>

                                    <p className="text-muted fw-medium text-uppercase mb-0">Pending Orders</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-bottom border-3 card-animate border-success">
                                <Card.Body>
                                    <span className="badge bg-success-subtle text-success float-end"><i className="ph-trend-up align-middle me-1"></i> 18.7%</span>
                                    <h4 className="mb-4"><span className="counter-value" data-target="40"><CountUp end={8541} separator=',' />0</span></h4>

                                    <p className="text-muted fw-medium text-uppercase mb-0">Delivered Orders</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-bottom border-3 card-animate border-danger">
                                <Card.Body>
                                    <span className="badge bg-danger-subtle text-danger float-end"><i className="ph-trend-down align-middle me-1"></i> 7.1%</span>
                                    <h4 className="mb-4"><span className="counter-value" data-target="40"><CountUp end={2314} separator=',' />0</span></h4>

                                    <p className="text-muted fw-medium text-uppercase mb-0">Cancelled Orders</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Row>

            </div>
        </React.Fragment >
    )
}

export default TileBox1;