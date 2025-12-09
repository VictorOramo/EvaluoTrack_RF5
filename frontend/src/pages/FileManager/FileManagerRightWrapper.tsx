import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import { StorageChart } from "../Ecommerce/Order/OrderViewChat";
import { Link } from "react-router-dom";

const FileManagerRightWrapper = () => {
    const [showDetail, setShowDetail] = useState(true);
    useEffect(() => {
        if (showDetail) {
            document.body.classList.add('file-detail-show');
        } else {
            document.body.classList.remove('file-detail-show');
        }
    }, [showDetail])
    return (
        <React.Fragment>
            <Card className="file-manager-right-wrapper rounded-start-0 shadow-none">
                <SimpleBar className="h-100">
                    <Card.Header className="d-flex gap-2 align-items-center">
                        <div>
                            <Button size="sm" className="btn-icon btn-subtle-danger" onClick={() => setShowDetail(false)}>
                                <i className="ri-close-fill align-bottom"></i>
                            </Button>
                        </div>
                        <Card.Title as="h6" className="flex-grow-1 mb-0">Storage Details</Card.Title>
                        <div className="flex-shrink-0">
                            <p className="text-danger mb-0">Used 57%</p>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div id="storageChart" className="e-charts shadow-none mt-n4">
                            <StorageChart id="storageChart" dataColors='["--tb-secondary", "--tb-primary", "--tb-light","--tb-danger", "--tb-success"]' />
                        </div>
                        <div className="mt-4 mb-3">
                            <Card.Title as="h6" className="mb-0">Pined Items</Card.Title>
                        </div>
                        <ul className="vstack gap-2 list-unstyled">
                            <li>
                                <Link to="#" className="d-block p-2 bg-light bg-opacity-50 rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0 ronded">
                                            <div className="avatar-title bg-body-secondary text-body">
                                                <i className="bi bi-pin"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Skote Design file.psd</h6>
                                        </div>
                                        <div className="flex-shrink-0 text-muted">
                                            2.5 MB
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-block p-2 bg-light bg-opacity-50 rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0 ronded">
                                            <div className="avatar-title bg-body-secondary text-body">
                                                <i className="bi bi-pin"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Trip Photography</h6>
                                        </div>
                                        <div className="flex-shrink-0 text-muted">
                                            276 MB
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-block p-2 bg-light bg-opacity-50 rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0 ronded">
                                            <div className="avatar-title bg-body-secondary text-body">
                                                <i className="bi bi-pin"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Steex Admin</h6>
                                        </div>
                                        <div className="flex-shrink-0 text-muted">
                                            631 MB
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-block p-2 bg-light bg-opacity-50 rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0 ronded">
                                            <div className="avatar-title bg-body-secondary text-body">
                                                <i className="bi bi-pin"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Velzon Design file</h6>
                                        </div>
                                        <div className="flex-shrink-0 text-muted">
                                            1.3 GB
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-block p-2 bg-light bg-opacity-50 rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0 ronded">
                                            <div className="avatar-title bg-body-secondary text-body">
                                                <i className="bi bi-pin"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Velzon React</h6>
                                        </div>
                                        <div className="flex-shrink-0 text-muted">
                                            698 MB
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-block p-2 bg-light bg-opacity-50 rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0 ronded">
                                            <div className="avatar-title bg-body-secondary text-body">
                                                <i className="bi bi-pin"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Steex Docs</h6>
                                        </div>
                                        <div className="flex-shrink-0 text-muted">
                                            32.19 MB
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-block p-2 bg-light bg-opacity-50 rounded">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-xs flex-shrink-0 ronded">
                                            <div className="avatar-title bg-body-secondary text-body">
                                                <i className="bi bi-pin"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Skote Design file.psd</h6>
                                        </div>
                                        <div className="flex-shrink-0 text-muted">
                                            2.5 MB
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <Card className="card-primary file-manager-widgets mb-0">
                            <Card.Body>
                                <p className="fs-md text-white text-opacity-75">Invite 2 friends and get 5 GB extra space.</p>
                                <Link to="#" className="stretched-link text-decoration-underline text-reset">Invite Friends <i className="bi bi-arrow-right align-baseline ms-1"></i></Link>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </SimpleBar>
            </Card>
        </React.Fragment>
    );
}

export default FileManagerRightWrapper;