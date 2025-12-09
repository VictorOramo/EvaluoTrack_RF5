import React from 'react'
import { Card } from 'react-bootstrap'

const CourseIncludes = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h6 className="card-title mb-0">This course includes</h6>
                </Card.Header>
                <Card.Body>
                    <ul className="list-unstyled vstack gap-2 mb-0">
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="ph ph-book-open align-middle me-1 text-primary-emphasis"></i> Lessons
                                </div>
                                <div className="flex-shrink-0 text-muted">
                                    35
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="ph ph-timer align-middle me-1 text-primary-emphasis"></i> Duration
                                </div>
                                <div className="flex-shrink-0 text-muted">
                                    6 Months
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="ph ph-chart-bar align-middle me-1 text-primary-emphasis"></i> Skills
                                </div>
                                <div className="flex-shrink-0 text-muted">
                                    Beginner
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="ph ph-book-open align-middle me-1 text-primary-emphasis"></i> Language
                                </div>
                                <div className="flex-shrink-0 text-muted">
                                    English
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <i className="bi bi-card-heading align-baseline me-1 text-primary-emphasis"></i> Certificate
                                </div>
                                <div className="flex-shrink-0 text-muted">
                                    Yes
                                </div>
                            </div>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default CourseIncludes
