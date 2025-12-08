import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CourseSchedules = () => {
  return (
    <React.Fragment>
                        <div className="mb-3">
                                <h6 className="card-title">Courses Schedule</h6>
                            </div>
                            <Card>
                                <Card.Body className="d-flex gap-3">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-sm border-end border-dashed">
                                            <div className="avatar-title bg-body-secondary text-body-secondary p-2 text-center">
                                                16 Feb
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="/apps-learning-overview" className="stretched-link">
                                            <h6 className="fs-md">React Development</h6>
                                        </Link>
                                        <p className="text-muted mb-0"><b>9</b> of 15 Lessons</p>
                                    </div>
                                    <div className="flex-shrink-0 text-muted">
                                        08:54 AM
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body className="d-flex gap-3">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-sm border-end border-dashed">
                                            <div className="avatar-title bg-body-secondary text-body-secondary p-2 text-center">
                                                28 Jan
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="/apps-learning-overview" className="stretched-link">
                                            <h6 className="fs-md">Shopify Development</h6>
                                        </Link>
                                        <p className="text-muted mb-0"><b>18</b> of 43 Lessons</p>
                                    </div>
                                    <div className="flex-shrink-0 text-muted">
                                        10:49 PM
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body className="d-flex gap-3">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-sm border-end border-dashed">
                                            <div className="avatar-title bg-body-secondary text-body-secondary p-2 text-center">
                                                19 Jan
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="/apps-learning-overviews" className="stretched-link">
                                            <h6 className="fs-md">Laravel Development</h6>
                                        </Link>
                                        <p className="text-muted mb-0"><b>3</b> of 68 Lessons</p>
                                    </div>
                                    <div className="flex-shrink-0 text-muted">
                                        03:24 PM
                                    </div>
                                </Card.Body>
                            </Card>
    </React.Fragment>
  )
}

export default CourseSchedules
