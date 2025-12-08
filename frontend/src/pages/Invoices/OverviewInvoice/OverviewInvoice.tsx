import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Import Images
import logoLight from "../../../assets/images/logo-light.png";
import invoiceSignature from "../../../assets/images/invoice-signature.svg"


const OverviewInvoice = () => {
    document.title = "Invoice Overview | Steex - Admin & Dashboard Template";

    const printInvoice = () => {
        window.print();
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumb title="Invoice Overview" pageTitle="Invoice" />
                    <Row className="justify-content-center">
                        <Col xxl={9}>
                            <div className="hstack gap-2 justify-content-end d-print-none mb-4">
                                <Link to="#" className="btn btn-success" onClick={printInvoice}><i className="ri-printer-line align-bottom me-1"></i> Print</Link>
                                <Button variant="primary"><i className="ri-download-2-line align-bottom me-1"></i> Download</Button>
                            </div>
                            <Card className="overflow-hidden" id="invoice">
                                <div className="invoice-effect-top position-absolute start-0">
                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 764 182" width="764" height="182">
                                        <title>&lt;Group&gt;</title>
                                        <g id="&lt;Group&gt;">
                                            <g id="&lt;Group&gt;">
                                                <path id="&lt;Path&gt;" style={{ "fill": "var(--tb-light)" }} d="m-6.6 177.4c17.5 0.1 35.1 0 52.8-0.4 286.8-6.6 537.6-77.8 700.3-184.6h-753.1z" />
                                            </g>
                                            <g id="&lt;Group&gt;">
                                                <path id="&lt;Path&gt;" style={{ "fill": "var(--tb-secondary)" }} d="m-6.6 132.8c43.5 2.1 87.9 2.7 132.9 1.7 246.9-5.6 467.1-59.2 627.4-142.1h-760.3z" />
                                            </g>
                                            <g id="&lt;Group&gt;" style={{ "opacity": ".5" }}>
                                                <path id="&lt;Path&gt;" style={{ "fill": "var(--tb-primary)" }} d="m-6.6 87.2c73.2 7.4 149.3 10.6 227.3 8.8 206.2-4.7 393.8-42.8 543.5-103.6h-770.8z" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <Card.Body className="z-1 position-relative">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <img src={logoLight} className="card-logo" alt="logo light" height="28" />
                                        </div>
                                        <div className="flex-shrink-0 mt-sm-0 mt-3">
                                            <h6><span className="text-muted fw-normal">Legal Registration No:</span> <span id="legal-register-no">32654 9851</span></h6>
                                            <h6><span className="text-muted fw-normal">Email:</span> <span id="email">steex@themesbrand.com</span></h6>
                                            <h6><span className="text-muted fw-normal">Website:</span> <Link to="https://themesbrand.com/" className="link-primary" target="_blank" id="website">www.themesbrand.com</Link></h6>
                                            <h6 className="mb-0"><span className="text-muted fw-normal">Contact No: </span><span id="contact-no"> +(01) 234 6789</span></h6>
                                        </div>
                                    </div>
                                    <div className="mt-5 pt-4">
                                        <Row className="g-3">
                                            <Col lg={true} className="col-6">
                                                <p className="text-muted mb-2 text-uppercase">Invoice No</p>
                                                <h5 className="fs-md mb-0">#TBS<span id="invoice-no">24301901</span></h5>
                                            </Col>

                                            <Col lg={true} className="col-6">
                                                <p className="text-muted mb-2 text-uppercase">Date</p>
                                                <h5 className="fs-md mb-0"><span id="invoice-date">10 April, 2023</span></h5>
                                            </Col>
                                            <Col lg={true} className="col-6">
                                                <p className="text-muted mb-2 text-uppercase">Due Date</p>
                                                <h5 className="fs-md mb-0"><span id="invoice-due-date">10 April, 2023</span></h5>
                                            </Col>

                                            <Col lg={true} className="col-6">
                                                <p className="text-muted mb-2 text-uppercase">Payment Status</p>
                                                <span className="badge bg-success-subtle text-success fs-xxs" id="payment-status">Paid</span>
                                            </Col>

                                            <Col lg={true} className="col-6">
                                                <p className="text-muted mb-2 text-uppercase">Total Amount</p>
                                                <h5 className="fs-md mb-0">$<span id="total-amount">2,050.18</span></h5>
                                            </Col>

                                        </Row>
                                    </div>
                                    <div className="mt-4 pt-2">
                                        <Row className="g-3">
                                            <div className="col-6">
                                                <p className="text-muted text-uppercase">Billing Address</p>
                                                <h6 className="fs-md" id="billing-name">Jennifer Mayert</h6>
                                                <p className="text-muted mb-1" id="billing-address-line-1">6382 Cerromar Cir, Orangevale, California, US.</p>
                                                <p className="text-muted mb-1"><span>Phone: +</span><span id="billing-phone-no">(909) 594 2812</span></p>
                                                <p className="text-muted mb-0"><span>Tax: </span><span id="billing-tax-no">12-3456789</span> </p>
                                            </div>

                                            <div className="col-6">
                                                <p className="text-muted text-uppercase">Shipping Address</p>
                                                <h6 className="fs-md" id="shipping-name">Jennifer Mayert</h6>
                                                <p className="text-muted mb-1" id="shipping-address-line-1">505 W Cordova Rd, Santa Fe, New York, US</p>
                                                <p className="text-muted mb-1"><span>Phone: +</span><span id="shipping-phone-no">(505) 989 1378</span></p>
                                            </div>
                                        </Row>
                                    </div>

                                    <Table className="table-borderless text-center table-nowrap align-middle mb-0 table-responsive mt-4">
                                        <thead>
                                            <tr className="table-light">
                                                <th scope="col" style={{ "width": "50px" }}>#</th>
                                                <th scope="col">Product Details</th>
                                                <th scope="col">Rate</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col" className="text-end">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody id="products-list">
                                            <tr>
                                                <th scope="row">01</th>
                                                <td className="text-start">
                                                    <span className="fw-medium">Branded T-Shirts</span>
                                                    <p className="text-muted mb-0">Fashion</p>
                                                </td>
                                                <td>$161.25</td>
                                                <td>03</td>
                                                <td className="text-end">$483.75</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">02</th>
                                                <td className="text-start">
                                                    <span className="fw-medium">Fossil gen 5E smart watch</span>
                                                    <p className="text-muted mb-0">32.5mm (1.28 Inch) TFT Color Touch Display</p>
                                                </td>
                                                <td>$69.60</td>
                                                <td>02</td>
                                                <td className="text-end">$139.20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">03</th>
                                                <td className="text-start">
                                                    <span className="fw-medium">Blive Printed Men Round Neck</span>
                                                    <p className="text-muted mb-0">Fashion</p>
                                                </td>
                                                <td>$250.00</td>
                                                <td>06</td>
                                                <td className="text-end">$1,500.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">04</th>
                                                <td className="text-start">
                                                    <span className="fw-medium">Flip-Flops and House Slippers</span>
                                                    <p className="text-muted mb-0">Footwear</p>
                                                </td>
                                                <td>$150.00</td>
                                                <td>01</td>
                                                <td className="text-end">$150.00</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <div className="border-top border-top-dashed mt-2" id="products-list-total">
                                        <table className="table table-borderless table-nowrap align-middle mb-0 ms-auto" style={{ "width": "250px" }}>
                                            <tbody>
                                                <tr>
                                                    <td>Sub Total</td>
                                                    <td className="text-end">$2,272.95</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax <small className="text-muted">(18%)</small></td>
                                                    <td className="text-end">$409.13</td>
                                                </tr>
                                                <tr>
                                                    <td>Discount <small className="text-muted">(STEEX30)</small></td>
                                                    <td className="text-end">-$681.88</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Charge</td>
                                                    <td className="text-end">$65.00</td>
                                                </tr>
                                                <tr className="border-top border-top-dashed fs-md">
                                                    <th scope="row">Total Amount</th>
                                                    <th className="text-end">$2,050.20</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-3">
                                        <h6 className="text-muted text-uppercase fw-semibold mb-3">Payment Details:</h6>
                                        <p className="text-muted mb-1">Payment Method: <span className="fw-medium" id="payment-method">Mastercard</span></p>
                                        <p className="text-muted mb-1">Card Holder: <span className="fw-medium" id="card-holder-name">Jennifer Mayert</span></p>
                                        <p className="text-muted mb-1">Card Number: <span className="fw-medium" id="card-number">xxx xxxx xxxx 1234</span></p>
                                        <p className="text-muted mb-0">Total Amount: <span className="fw-medium">$</span><span id="card-total-amount">2,050.18</span></p>
                                    </div>
                                    <div className="mt-4 mb-4">
                                        <div className="alert alert-danger mb-0">
                                            <span className="fw-semibold">NOTES:</span>
                                            <span id="note"> All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or
                                                credit card or direct payment online. If account is not paid within 7
                                                days the credits details supplied as confirmation of work undertaken
                                                will be charged the agreed quoted fee noted above.
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-4 pb-2"><b>Congratulations on your recent purchase!</b> It has been our pleasure to serve you, and we hope we see you again soon.</p>

                                        <div className="invoice-signature text-center">
                                            <img src={invoiceSignature} alt="" id="sign-img" height="30" />
                                            <h6 className="mb-0 mt-3">Authorized Sign</h6>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div className="invoice-effect-top position-absolute end-0" style={{ "transform": "rotate(180deg)", "bottom": "-80px" }}>
                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 764 182" width="764" height="182">
                                        <title>&lt;Group&gt;</title>
                                        <g id="&lt;Group&gt;">
                                            <g id="&lt;Group&gt;">
                                                <path id="&lt;Path&gt;" style={{ "fill": "var(--tb-light)" }} d="m-6.6 177.4c17.5 0.1 35.1 0 52.8-0.4 286.8-6.6 537.6-77.8 700.3-184.6h-753.1z" />
                                            </g>
                                            <g id="&lt;Group&gt;">
                                                <path id="&lt;Path&gt;" style={{ "fill": "var(--tb-secondary)" }} d="m-6.6 132.8c43.5 2.1 87.9 2.7 132.9 1.7 246.9-5.6 467.1-59.2 627.4-142.1h-760.3z" />
                                            </g>
                                            <g id="&lt;Group&gt;" style={{ "opacity": "0.5" }}>
                                                <path id="&lt;Path&gt;" style={{ "fill": "var(--tb-primary)" }} d="m-6.6 87.2c73.2 7.4 149.3 10.6 227.3 8.8 206.2-4.7 393.8-42.8 543.5-103.6h-770.8z" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </Card>

                        </Col>

                    </Row>



                </Container>
            </div>
        </React.Fragment>
    )
}

export default OverviewInvoice
