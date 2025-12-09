import React, { useState } from 'react'
import { Button, Card, Col, Dropdown } from 'react-bootstrap';

import avatar1 from "assets/images/users/avatar-1.jpg"
import avatar2 from "assets/images/users/avatar-2.jpg"
import avatar3 from "assets/images/users/avatar-3.jpg"
import avatar6 from "assets/images/users/avatar-6.jpg"
import { Link } from 'react-router-dom';

const SideProfile = () => {

    const [isToggled, setIsToggled] = useState(false);

    const handleButtonClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <React.Fragment>

            <Col xl={3}>
                <Card>
                    <Card.Body>
                        <div className="d-flex mb-3">
                            <Dropdown className="flex-shrink-0 ms-auto" align='end'>
                                <Dropdown.Toggle variant="light" className='btn btn-light btn-icon btn-sm arrow-none' aria-expanded="false">
                                    <i className="bi bi-share"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end">
                                    <Dropdown.Item href="#" as="li"><i className="bi bi-facebook me-1 align-baseline"></i> Facebook</Dropdown.Item>
                                    <Dropdown.Item href="#" as="li"><i className="bi bi-whatsapp me-1 align-baseline"></i> Whatsapp</Dropdown.Item>
                                    <Dropdown.Item href="#" as="li"><i className="bi bi-instagram me-1 align-baseline"></i> Instagram</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="text-center border-bottom border-dashed pb-4">
                            <img src={avatar1} alt="" className="avatar-lg rounded-circle p-1 img-thumbnail" />
                            <div className="mt-3">
                                <h5>Richard Marshall <i className="bi bi-patch-check-fill align-baseline text-info ms-1"></i></h5>
                                <p className="text-muted">Web Developer</p>
                            </div>

                            <div className="d-flex gap-2 mt-4">
                                <Button
                                    className='w-50'
                                    variant={isToggled ? 'dark' : 'light'}
                                    aria-pressed="true"
                                    onClick={handleButtonClick}
                                >
                                    {isToggled
                                        ?
                                        <span className="icon-off btn-dark text-light custom-toggle w-50"><i className="bi bi-person-x align-baseline me-1"></i> Unfollow</span>
                                        :
                                        <span className="icon-on btn-subtle-secondary custom-toggle w-50"><i className="bi bi-person-plus align-baseline me-1"></i> Follow</span>
                                    }
                                </Button>
                                <Button className="btn btn-primary text-truncate w-50"><i className="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</Button>
                            </div>
                        </div>

                        <div className="border-bottom border-dashed py-4">
                            <h5 className="card-title mb-3">Information</h5>
                            <div className="table-responsive">
                                <table className="table table-borderless table-sm align-middle mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="ps-0" scope="row">Designation</th>
                                            <td className="text-muted text-end">Web Developer</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Phone No</th>
                                            <td className="text-muted text-end">617 219 6245</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Birth of Date</th>
                                            <td className="text-muted text-end">24 June, 1998</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Website</th>
                                            <td className="text-muted text-end"><Link to="http://themesbrand.com/" target="_blank" rel='noreferrer'>www.themesbrand.com</Link></td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Email</th>
                                            <td className="text-muted text-end">richardmarshall@steex.com</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Location</th>
                                            <td className="text-muted text-end">Los Angeles, California</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Joining Date</th>
                                            <td className="text-muted text-end">30 Oct 2023</td>
                                        </tr>
                                        <tr>
                                            <th>Social Media</th>
                                            <td>
                                                <div className="d-flex flex-wrap justify-content-end gap-2">
                                                    <a href="/#" className="avatar-xs d-block">
                                                        <span className="avatar-title rounded-circle bg-secondary-subtle text-dark">
                                                            <i className="bi bi-github"></i>
                                                        </span>
                                                    </a>
                                                    <a href="/#" className="avatar-xs d-block">
                                                        <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                            <i className="bi bi-facebook"></i>
                                                        </span>
                                                    </a>
                                                    <a href="/#" className="avatar-xs d-block">
                                                        <span className="avatar-title rounded-circle bg-success-subtle text-success">
                                                            <i className="bi bi-dribbble"></i>
                                                        </span>
                                                    </a>
                                                    <a href="/#" className="avatar-xs d-block">
                                                        <span className="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                            <i className="bi bi-instagram"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="border-bottom border-dashed py-4">
                            <h5 className="card-title mb-3">Documents</h5>
                            <div className="vstack gap-3">
                                <div className="d-flex gap-2 align-items-center position-relative">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-sm border border rounded">
                                            <div className="avatar-title bg-body-secondary text-secondary rounded fs-lg">
                                                <i className="bi bi-file-zip"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6>Artboard.zip</h6>
                                        <p className="text-muted mb-0">2.02MB</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="#!" className="icon-link icon-link-hover text-reset stretched-link fs-xl" style={{ transform: "translate3d(0, -.125rem, 0)" }}><i className="bi bi-download"></i></a>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 align-items-center position-relative">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-sm border border rounded">
                                            <div className="avatar-title bg-body-secondary text-secondary rounded fs-lg">
                                                <i className="bi bi-filetype-txt"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6>Steex.txt</h6>
                                        <p className="text-muted mb-0">1.49 MB</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="#!" className="icon-link icon-link-hover text-reset stretched-link fs-xl" style={{ transform: "translate3d(0, -.125rem, 0)" }}><i className="bi bi-download"></i></a>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 align-items-center position-relative">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-sm border border rounded">
                                            <div className="avatar-title bg-body-secondary text-secondary rounded fs-lg">
                                                <i className="bi bi-image"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6>Profile bg.png</h6>
                                        <p className="text-muted mb-0">325 KB</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="#!" className="icon-link icon-link-hover text-reset stretched-link fs-xl" style={{ transform: "translate3d(0, -.125rem, 0)" }}><i className="bi bi-download"></i></a>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 align-items-center position-relative">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-sm border border rounded">
                                            <div className="avatar-title bg-body-secondary text-secondary rounded fs-lg">
                                                <i className="bi bi-file-pdf"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6>Steex Docs.pdf</h6>
                                        <p className="text-muted mb-0">2.06 MB</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="#!" className="icon-link icon-link-hover text-reset stretched-link fs-xl" style={{ transform: "translate3d(0, -.125rem, 0)" }}><i className="bi bi-download"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="d-flex align-items-center mb-3 gap-2">
                                <div className="flex-grow-1">
                                    <h5 className="card-title mb-0">Recent Followers</h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <a href="#!" className="icon-link">View all <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="d-flex align-items-center gap-2 pb-2">
                                        <div className="avatar-sm flex-shrink-0">
                                            <img src={avatar3} alt="" className="img-fluid img-thumbnail" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="fs-md">Esther James</h6>
                                            <p className="text-muted fs-sm mb-0">Web Designer</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Button
                                                className="btn-sm active"
                                                variant={isToggled ? 'outline-info' : 'info'}
                                                aria-pressed="true"
                                                onClick={handleButtonClick}
                                            >
                                                {isToggled
                                                    ?
                                                    <span className="icon-on"><i className="bx bx-user-check align-bottom fs-md"></i></span>
                                                    :
                                                    <span className="icon-off"><i className="bx bx-user-x align-bottom fs-md"></i></span>
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 pb-2">
                                        <div className="avatar-sm flex-shrink-0">
                                            <img src={avatar6} alt="" className="img-fluid img-thumbnail" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="fs-md">Jacqueline Steve</h6>
                                            <p className="fs-sm text-muted mb-0">UI/UX Designer</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {/* <Button className="btn btn-sm btn-outline-info custom-toggle" data-bs-toggle="button" aria-pressed="true">
                                                <span className="icon-on"><i className=" bx bx-user-check align-bottom fs-md"></i></span>
                                                <span className="icon-off"><i className=" bx bx-user-x align-bottom fs-md"></i></span>
                                            </Button> */}
                                            <Button 
                                            className="btn btn-sm btn-outline-info btn-sm active" 
                                            variant={isToggled ? 'info' : 'outline-info'}
                                            aria-pressed="true"
                                            onClick={handleButtonClick}
                                            >
                                                {isToggled
                                                ? 
                                                <span className="icon-off"><i className="bx bx-user-x align-bottom fs-md"></i></span>
                                                :
                                                <span className="icon-on"><i className="bx bx-user-check align-bottom fs-md"></i></span>
                                                }
                                            </Button>

                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar-sm flex-shrink-0">
                                            <img src={avatar2} alt="" className="img-fluid img-thumbnail" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="fs-md">George Whalen</h6>
                                            <p className="fs-sm text-muted mb-0">Backend Developer</p>
                                        </div>
                                        <div className="flex-shrink-0">                                            
                                            <Button
                                                className="btn btn-sm btn-outline-info btn-sm active"
                                                variant={isToggled ? 'info' : 'outline-info'}
                                                aria-pressed="true"
                                                onClick={handleButtonClick}
                                            >
                                                {isToggled
                                                    ?
                                                    <span className="icon-off"><i className="bx bx-user-x align-bottom fs-md"></i></span>
                                                    :
                                                    <span className="icon-on"><i className="bx bx-user-check align-bottom fs-md"></i></span>
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment >
    )
}

export default SideProfile;