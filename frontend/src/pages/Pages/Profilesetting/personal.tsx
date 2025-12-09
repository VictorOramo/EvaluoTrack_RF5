
import React, { useState } from 'react';
import { Button, Card, Col, Form, Nav, Row, Tab, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr"

const Personal = () => {

    const [text, setText] = useState('');

    return (
        <React.Fragment>
            <Col xl={9}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="d-flex align-items-center flex-wrap gap-2 mb-4">
                        <div className="col-md order-1">
                            <Nav variant='pills' className="arrow-navtabs nav-secondary gap-2 flex-grow-1">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" href="#personalDetails">Personal Details</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" href="#changePassword">Changes Password</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" href="#education">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" href="#securityPrivacy">Security & Privacy</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="col-md-auto order-lg-2">
                            <Link to="/pages-profile-settings" className="btn btn-secondary"><i className="bi bi-pencil-square align-baseline me-1"></i> Edit Profile</Link>
                        </div>
                    </Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" id="personalDetails">
                            <Card>
                                <Card.Header>
                                    <h6 className="card-title mb-0">Personal Details</h6>
                                </Card.Header>
                                <Card.Body>
                                    <Form action="#">
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="firstnameInput">First Name</Form.Label>
                                                    <Form.Control type="text" id="firstnameInput" placeholder="Enter your firstname" defaultValue="Richard" />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="lastnameInput">Last Name</Form.Label>
                                                    <Form.Control type="text" id="lastnameInput" placeholder="Enter your last name" defaultValue="Marshall" />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="phonenumberInput">Phone Number</Form.Label>
                                                    <Form.Control type="text" id="phonenumberInput" placeholder="Enter your phone number" defaultValue="617 219 6245" />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="emailInput">Email Address</Form.Label>
                                                    <Form.Control type="email" id="emailInput" placeholder="Enter your email" defaultValue="richardmarshall@steex.com" />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="JoiningdatInput">Birth of Date</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            dateFormat: "d M, Y"
                                                        }}
                                                        placeholder="Select date"
                                                        defaultValue="24 June, 2023"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="JoiningdatInput">Joining Date</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            dateFormat: "d M, Y"
                                                        }}
                                                        placeholder="Select date"
                                                        defaultValue="30 Oct, 2023"
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label htmlFor="skillsInput">Skills</Form.Label>
                                                    <Form.Select className='form-select' >
                                                        <option >Javascript</option>
                                                        <option value="illustrator">Illustrator</option>
                                                        <option value="photoshop">Photoshop</option>
                                                        <option value="css">CSS</option>
                                                        <option value="html">HTML</option>
                                                        <option value="python">Python</option>
                                                        <option value="php">PHP</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="designationInput">Designation</Form.Label>
                                                    <Form.Control type="text" id="designationInput" placeholder="Designation" defaultValue="Web Developer" />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="websiteInput1">Website</Form.Label>
                                                    <Form.Control type="text" id="websiteInput1" placeholder="www.example.com" defaultValue="www.themesbrand.com" />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="cityInput">City</Form.Label>
                                                    <Form.Control type="text" id="cityInput" placeholder="City" defaultValue="Phoenix" />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="countryInput">Country</Form.Label>
                                                    <Form.Control type="text" id="countryInput" placeholder="Country" defaultValue="USA" />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="zipcodeInput">Zip Code</Form.Label>
                                                    <Form.Control type="text" minLength={5} maxLength={6} id="zipcodeInput" placeholder="Enter zipcode" defaultValue="00012" />
                                                </div>
                                            </Col>

                                            <Col lg={12}>
                                                <div className="mb-3 pb-2">
                                                    <Form.Label htmlFor="exampleFormControlTextarea">Description</Form.Label>
                                                    <Form.Control as="textarea" className='form-control' id="exampleFormControlTextarea" placeholder='Enter your description' onChange={(e: any) => setText(e.target.value)}
                                                        defaultValue="A Web Developer creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. Professionals in this field may also need to be able to ensure sites are compatible with multiple types of media. Web Developers need to have a firm understanding of programming and graphical design. Having a strong resume that emphasizes these attributes makes it significantly easier to get hired as a Web Developer. As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing & Design with designing team in the company to build perfect web designs." rows={5} ></Form.Control>
                                                </div>
                                            </Col>

                                            <Col lg={12}>
                                                <div className="hstack gap-2 justify-content-end">
                                                    <Button type="submit" variant='primary' >Updates</Button>
                                                    <Button className="btn btn-subtle-danger">Cancel</Button>
                                                </div>
                                            </Col>

                                        </Row>

                                    </Form>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>

                    <Tab.Content>
                        <Tab.Pane eventKey="second" id="changePassword">
                            <Card>
                                <div className="tab-pane" id="changePassword" role="tabpanel">
                                    <Card.Header>
                                        <h6 className="card-title mb-0">Changes Password</h6>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form action="/pages-profile-settings">
                                            <Row className=" g-2 justify-content-lg-between align-items-center">
                                                <Col lg={4}>
                                                    <div>
                                                        <Form.Label htmlFor="oldpasswordInput" className="form-label">Old Password*</Form.Label>
                                                        <div className="position-relative">
                                                            <Form.Control type="password" id="oldpasswordInput" placeholder="Enter current password" autoComplete='off' />
                                                            <Button variant='link' className="position-absolute top-0 end-0 text-decoration-none text-muted password-addon" id="passwordAddon"><i className="ri-eye-fill align-middle"></i></Button>

                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={4}>
                                                    <div className="auth-pass-inputgroup">
                                                        <Form.Label htmlFor="password-input" className="form-label">New Password*</Form.Label>
                                                        <div className="position-relative">
                                                            <Form.Control type="password" className="password-input" id="password-input" onPaste={(e) => e.preventDefault()} placeholder="Enter new password" aria-describedby="passwordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required autoComplete='off' />
                                                            <Button variant='link' className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                        </div>

                                                    </div>
                                                </Col>

                                                <Col lg={4}>
                                                    <div className="auth-pass-inputgroup">
                                                        <Form.Label htmlFor="confirm-password-input">Confirm Password*</Form.Label>
                                                        <div className="position-relative">
                                                            <Form.Control type="password" className="password-input" onPaste={(e) => e.preventDefault()} id="confirmPasswordInput" placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required autoComplete='off' />
                                                            <Button variant='link' className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" id="#confirm-password-input"><i className="ri-eye-fill align-middle"></i></Button>
                                                        </div>

                                                    </div>
                                                </Col>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <Link to="#" className="link-primary text-decoration-underline">Forgot Password ?</Link>
                                                    <div className="">
                                                        <Button type="submit" variant='success'>Change Password</Button>
                                                    </div>
                                                </div>



                                                <Col lg={12}>
                                                    <Card className=" bg-light shadow-none passwd-bg" id="password-contain">
                                                        <Card.Body>
                                                            <div className="mb-4">
                                                                <h5 className="fs-sm">Password must contain:</h5>
                                                            </div>
                                                            <div className="">
                                                                <p id="pass-length" className="invalid fs-xs mb-2">Minimum <b>8 characters</b></p>
                                                                <p id="pass-lower" className="invalid fs-xs mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                                <p id="pass-upper" className="invalid fs-xs mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                                <p id="pass-number" className="invalid fs-xs mb-0">A least <b>number</b> (0-9)</p>

                                                            </div>
                                                        </Card.Body>
                                                    </Card>

                                                </Col>
                                            </Row>

                                        </Form>
                                        <div className="mt-4 mb-4 pb-3 border-bottom d-flex justify-content-between align-items-center">
                                            <h5 className="card-title  mb-0">Login History</h5>
                                            <div className="flex-shrink-0">
                                                <Button variant='secondary'>All Logout</Button>
                                            </div>
                                        </div>

                                        <Row>
                                            <Col lg={12}>
                                                <div className="table-responsive">
                                                    <Table className="table table-borderless align-middle mb-0">
                                                        <thead className="table-light">
                                                            <tr>
                                                                <th scope="col">Mobile</th>
                                                                <th scope="col">IP Address</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Address</th>
                                                                <th scope="col"><i className="ri-logout-box-r-line"></i></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><i className="bi bi-phone align-baseline me-1"></i> iPhone 12 Pro</td>
                                                                <td>192.44.234.160</td>
                                                                <td>18 Dec, 2023</td>
                                                                <td>Los Angeles, United States</td>
                                                                <td><Link to="#" className="icon-link icon-link-hover">Logout <i className="bi bi-box-arrow-right"></i></Link></td>

                                                            </tr>

                                                            <tr>
                                                                <td><i className="bi bi-tablet align-baseline me-1"></i> Apple iPad Pro</td>
                                                                <td>192.44.234.162</td>
                                                                <td>03 Jan, 2023</td>
                                                                <td>Phoenix, United States</td>
                                                                <td><Link to="#" className="icon-link icon-link-hover">Logout <i className="bi bi-box-arrow-right"></i></Link></td>
                                                            </tr>

                                                            <tr>
                                                                <td><i className="bi bi-phone align-baseline me-1"></i> Galaxy S21 Ultra 5G</td>
                                                                <td>192.45.234.54</td>
                                                                <td>25 Feb, 2023</td>
                                                                <td>Washington, United States</td>
                                                                <td><Link to="#" className="icon-link icon-link-hover">Logout <i className="bi bi-box-arrow-right"></i></Link></td>
                                                            </tr>

                                                            <tr>
                                                                <td><i className="bi bi-laptop align-baseline me-1"></i> Dell Inspiron 14</td>
                                                                <td>192.40.234.32</td>
                                                                <td>16 Oct, 2022</td>
                                                                <td>Phoenix, United States</td>
                                                                <td><Link to="#" className="icon-link icon-link-hover">Logout <i className="bi bi-box-arrow-right"></i></Link></td>
                                                            </tr>

                                                            <tr>
                                                                <td><i className="bi bi-phone align-baseline me-1"></i> iPhone 12 Pro</td>
                                                                <td>192.44.326.42</td>
                                                                <td>22 May, 2022</td>
                                                                <td>Conneticut, United States</td>
                                                                <td><Link to="#" className="icon-link icon-link-hover">Logout <i className="bi bi-box-arrow-right"></i></Link></td>

                                                            </tr>

                                                            <tr>
                                                                <td><i className="bi bi-tablet align-baseline me-1"></i> Apple iPad Pro</td>
                                                                <td>190.44.182.33</td>
                                                                <td>19 Nov, 2023</td>
                                                                <td>Los Angeles, United States</td>
                                                                <td><Link to="#" className="icon-link icon-link-hover">Logout <i className="bi bi-box-arrow-right"></i></Link></td>

                                                            </tr>

                                                            <tr>
                                                                <td><i className="bi bi-phone align-baseline me-1"></i> Galaxy S21 Ultra 5G</td>
                                                                <td>194.44.235.87</td>
                                                                <td>30 Aug, 2022</td>
                                                                <td>Conneticut, United States</td>
                                                                <td><Link to="#" className="icon-link icon-link-hover">Logout <i className="bi bi-box-arrow-right"></i></Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>


                    <Tab.Content>
                        <Tab.Pane eventKey="third" id="education">
                            <Card>
                                <Card.Header>
                                    <h6 className="card-title mb-0">Education</h6>
                                </Card.Header>
                                <Card.Body>
                                    <form>
                                        <div id="newlink">
                                            <div id="1">
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="mb-3">
                                                            <Form.Label htmlFor="degreeName">Degree Name</Form.Label>
                                                            <Form.Control type="text" id="degreeName" placeholder="Degree name" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Form.Label htmlFor="universityName">University/school Name</Form.Label>
                                                            <Form.Control type="text" id="universityName" placeholder="University/school name" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Form.Label htmlFor="passedYear">Passed Years</Form.Label>
                                                            <div className="row g-2 justify-content-center">
                                                                <Col lg={5}>
                                                                    <Form.Select data-choices name="passedYear" id="passedyear" defaultValue={'Choice 17'}>
                                                                        <option value="">Select years</option>
                                                                        <option value="Choice 1">2001</option>
                                                                        <option value="Choice 2">2002</option>
                                                                        <option value="Choice 3">2003</option>
                                                                        <option value="Choice 4">2004</option>
                                                                        <option value="Choice 5">2005</option>
                                                                        <option value="Choice 6">2006</option>
                                                                        <option value="Choice 7">2007</option>
                                                                        <option value="Choice 8">2008</option>
                                                                        <option value="Choice 9">2009</option>
                                                                        <option value="Choice 10">2010</option>
                                                                        <option value="Choice 11">2011</option>
                                                                        <option value="Choice 12">2012</option>
                                                                        <option value="Choice 13">2013</option>
                                                                        <option value="Choice 14">2014</option>
                                                                        <option value="Choice 15">2015</option>
                                                                        <option value="Choice 16">2016</option>
                                                                        <option value="Choice 17">2017</option>
                                                                        <option value="Choice 18">2018</option>
                                                                        <option value="Choice 19">2019</option>
                                                                        <option value="Choice 20">2020</option>
                                                                        <option value="Choice 21">2021</option>
                                                                        <option value="Choice 22">2022</option>
                                                                    </Form.Select>
                                                                </Col>

                                                                <div className="col-auto align-self-center">
                                                                    to
                                                                </div>

                                                                <Col lg={5}>
                                                                    <Form.Select data-choices name="passedYear" id="passedYear" defaultValue={'Choice 20'} >
                                                                        <option value="">Select years</option>
                                                                        <option value="Choice 1">2001</option>
                                                                        <option value="Choice 2">2002</option>
                                                                        <option value="Choice 3">2003</option>
                                                                        <option value="Choice 4">2004</option>
                                                                        <option value="Choice 5">2005</option>
                                                                        <option value="Choice 6">2006</option>
                                                                        <option value="Choice 7">2007</option>
                                                                        <option value="Choice 8">2008</option>
                                                                        <option value="Choice 9">2009</option>
                                                                        <option value="Choice 10">2010</option>
                                                                        <option value="Choice 11">2011</option>
                                                                        <option value="Choice 12">2012</option>
                                                                        <option value="Choice 13">2013</option>
                                                                        <option value="Choice 14">2014</option>
                                                                        <option value="Choice 15">2015</option>
                                                                        <option value="Choice 16">2016</option>
                                                                        <option value="Choice 17">2017</option>
                                                                        <option value="Choice 18">2018</option>
                                                                        <option value="Choice 19">2019</option>
                                                                        <option value="Choice 20">2020</option>
                                                                        <option value="Choice 21">2021</option>
                                                                        <option value="Choice 22">2022</option>
                                                                    </Form.Select>
                                                                </Col>

                                                            </div>

                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="mb-3">
                                                            <Form.Label htmlFor="degreeDescription" >Degree Description</Form.Label>
                                                            <Form.Control as="textarea" rows={3} id="degreeDescription" placeholder="Enter description" value={text} onChange={(e) => setText(e.target.value)}></Form.Control>
                                                        </div>
                                                    </Col>

                                                    <div className="hstack gap-2 justify-content-end">
                                                        <Button variant="danger" href="#">Delete</Button>
                                                    </div>
                                                </Row>

                                            </div>
                                        </div>
                                        <div id="newForm" style={{ display: "none" }}>

                                        </div>
                                        <Col lg={12}>
                                            <div className="hstack gap-2">
                                                <Button type="submit" className="btn btn-secondary">Update</Button>
                                                <Link to="#" className="btn btn-primary">Add New</Link>
                                            </div>
                                        </Col>

                                    </form>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>


                    <Tab.Content>
                        <Tab.Pane eventKey="fourth" id="securityPrivacy">
                            <Card>
                                <Card.Header>
                                    <h6 className="card-title mb-0">Security & Privacy</h6>
                                </Card.Header>
                                <Card.Body>
                                    <div className="mb-4 pb-2">
                                        <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                                            <div className="flex-grow-1">
                                                <h6 className="fs-md mb-1">Two-factor Authentication</h6>
                                                <p className="text-muted">Two-factor authentication is an enhanced security. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.</p>
                                            </div>
                                            <div className="flex-shrink-0 ms-sm-3">
                                                <Link to="#" className="btn btn-sm btn-primary">Enable Two-factor Authentication</Link>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                            <div className="flex-grow-1">
                                                <h6 className="fs-md mb-1">Secondary Verification</h6>
                                                <p className="text-muted">The first factor is a password and the second commonly includes a text with a code sent to your smartphone, or biometrics using your fingerprint, face, or retina.</p>
                                            </div>
                                            <div className="flex-shrink-0 ms-sm-3">
                                                <Link to="#" className="btn btn-sm btn-primary">Set up secondary method</Link>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                            <div className="flex-grow-1">
                                                <h6 className="fs-md mb-1">Backup Codes</h6>
                                                <p className="text-muted mb-sm-0">A backup code is automatically generated for you when you turn on two-factor authentication through your iOS or Android Twitter app. You can also generate a backup code on twitter.com.</p>
                                            </div>
                                            <div className="flex-shrink-0 ms-sm-3">
                                                <Link to="#" className="btn btn-sm btn-primary">Generate backup codes</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h5 className="card-title text-decoration-underline mb-3">Application Notifications:</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-flex">
                                                <div className="flex-grow-1">
                                                    <Form.Label htmlFor="directMessage" className="form-check-label fs-md">Direct messages</Form.Label>
                                                    <p className="text-muted">Messages from people you follow</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <Form.Check className="form-switch">
                                                        <Form.Check.Input type="checkbox" role="switch" id="directMessage" defaultChecked />
                                                    </Form.Check>
                                                </div>
                                            </li>
                                            <li className="d-flex mt-2">
                                                <div className="flex-grow-1">
                                                    <Form.Label className="form-check-label fs-md mb-1" htmlFor="desktopNotification">
                                                        Show desktop notifications
                                                    </Form.Label>
                                                    <p className="text-muted">Choose the option you want as your default setting. Block a site: Next to "Not allowed to send notifications," click Add.</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <Form.Check className="form-switch">
                                                        <Form.Check.Input type="checkbox" role="switch" id="desktopNotification" defaultChecked />
                                                    </Form.Check>
                                                </div>
                                            </li>
                                            <li className="d-flex mt-2">
                                                <div className="flex-grow-1">
                                                    <label className="form-check-label fs-md mb-1" htmlFor="emailNotification">
                                                        Show email notifications
                                                    </label>
                                                    <p className="text-muted"> Under Settings, choose Notifications. Under Select an account, choose the account to enable notifications for. </p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <Form.Check className="form-switch">
                                                        <Form.Check.Input type="checkbox" role="switch" id="emailNotification" />
                                                    </Form.Check>
                                                </div>
                                            </li>
                                            <li className="d-flex mt-2">
                                                <div className="flex-grow-1">
                                                    <label className="form-check-label fs-md mb-1" htmlFor="chatNotification">
                                                        Show chat notifications
                                                    </label>
                                                    <p className="text-muted">To prevent duplicate mobile notifications from the Gmail and Chat apps, in settings, turn off Chat notifications.</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <Form.Check className="form-switch">
                                                        <Form.Check.Input type="checkbox" role="switch" id="chatNotification" />
                                                    </Form.Check>
                                                </div>
                                            </li>
                                            <li className="d-flex mt-2">
                                                <div className="flex-grow-1">
                                                    <Form.Label className="form-check-label fs-md mb-1" htmlFor="purchaesNotification">
                                                        Show purchase notifications
                                                    </Form.Label>
                                                    <p className="text-muted">Get real-time purchase alerts to protect yourself from fraudulent charges.</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <Form.Check className="form-switch">
                                                        <Form.Check.Input type="checkbox" role="switch" id="purchaesNotification" />
                                                    </Form.Check>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="card-title text-decoration-underline mb-3">Delete This Account:</h5>
                                        <p className="text-muted">Go to the Data & Privacy section of your profile Account. Scroll to "Your data & privacy options." Delete your Profile Account. Follow the instructions to delete your account :</p>
                                        <div>
                                            <Form.Control type="password" id="passwordInput" placeholder="Enter your password" defaultValue="richard@321654987" style={{ maxWidth: "265px" }} />
                                        </div>
                                        <div className="hstack gap-2 mt-3">
                                            <Link to="#" className="btn btn-subtle-danger">Close & Delete This Account</Link>
                                            <Link to="#" className="btn btn-light">Cancel</Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>

                </Tab.Container>
            </Col>
        </React.Fragment>
    )
}

export default Personal