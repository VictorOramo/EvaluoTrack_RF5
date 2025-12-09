import React from "react";
import { Card, Col, OverlayTrigger, Row, Tooltip, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShopingInformation = () => {
    return (
        <React.Fragment>
            <Col xxl={8}>
                <Row className="g-0">
                    <Col xxl={8}>
                        <Card className="rounded-end-0">
                            <Card.Body className="p-4">
                                <p className="text-muted float-md-end mb-md-0">
                                    <Link to="#"><i className="ph-storefront align-middle me-1"></i> Visit Store</Link></p>
                                <h4 className="text-capitalize mb-3">Unite wear solid men hooded neck blue T-shirt</h4>
                                <div className="hstack gap-3 flex-wrap mb-4">
                                    <div className="text-muted"><b className="text-body fw-medium">3.7k</b> Sold</div>
                                    <div className="vr"></div>
                                    <div className="text-muted"><b className="text-body fw-medium">3.5k</b> Reviews</div>
                                    <div className="vr"></div>
                                    <div className="text-muted">Published : <span className="text-body fw-medium">26 Mar, 2021</span></div>
                                </div>

                                <h6 className="fs-md mb-3">Choose Size:</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-top">  Out of Stock  </Tooltip>
                                        }
                                    >
                                        <div>
                                            <input type="radio" className="btn-check" name="productsize-radio" id="productsize-radio1" disabled />
                                            <label className="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" htmlFor="productsize-radio1">S</label>
                                        </div>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-top">04 Items Available </Tooltip>
                                        }
                                    >
                                        <div>
                                            <input type="radio" className="btn-check" name="productsize-radio" id="productsize-radio2" />
                                            <label className="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" htmlFor="productsize-radio2">M</label>
                                        </div>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-top">06 Items Available </Tooltip>
                                        }
                                    >
                                        <div>
                                            <input type="radio" className="btn-check" name="productsize-radio" id="productsize-radio3" />
                                            <label className="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" htmlFor="productsize-radio3">L</label>
                                        </div>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-top">Out of Stock </Tooltip>
                                        }
                                    >
                                        <div>
                                            <input type="radio" className="btn-check" name="productsize-radio" id="productsize-radio4" disabled />
                                            <label className="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" htmlFor="productsize-radio4">XL</label>
                                        </div>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-top"> 08 Items Available</Tooltip>
                                        }>
                                        <div>
                                            <input type="radio" className="btn-check" name="productsize-radio" id="productsize-radio5" />
                                            <label className="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center" htmlFor="productsize-radio5">2xl</label>
                                        </div>
                                    </OverlayTrigger>
                                </div>

                                <div className="mt-4">
                                    <h5 className="fs-md mb-3">Colors :</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top"> Out of Stock</Tooltip>
                                            }>
                                            <div>
                                                <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-primary" disabled>
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </button>
                                            </div>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top"> 03 Items Available</Tooltip>
                                            }>
                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-secondary">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top"> 03 Items Available</Tooltip>
                                            }>
                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-success">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top"> 02 Items Available</Tooltip>
                                            }>
                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-info">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top"> 01 Items Available</Tooltip>
                                            }>
                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-warning">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top"> 04 Items Available</Tooltip>
                                            }>
                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-danger">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top"> 03 Items Available</Tooltip>
                                            }>
                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-light">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top"> 04 Items Available</Tooltip>
                                            }>
                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-dark">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </OverlayTrigger>

                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h5 className="fs-md mb-3">Shipping Information:</h5>
                                    <p className="text-muted mb-2"><b>Delivery Location</b> </p>
                                    <p className="text-muted mb-0">A thicker knit T-Shirt with a rag cut edge and sleeves and a printed muscle man on the back, you will feel #ULTRA in one of these.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4}>
                        <Card className="card-height-100 border-start rounded-start-0">
                            <Card.Body className="p-4">
                                <Row>
                                    <Col lg={12}>
                                        <Card bg="primary">
                                            <Card.Body className="d-flex align-items-center flex-wrap gap-2">
                                                <div className="flex-grow-1">
                                                    <Card.Title className="text-white fs-xl">25% Off</Card.Title>
                                                    <p className="mb-0 text-white-50">If order over $120</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <Button type="button" variant="secondary">Util 10 Feb, 2024</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={12}>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <Card className="border shadow-none mb-0">
                                                    <Card.Body className="p-2">
                                                        <div className="text-center">
                                                            <p className="text-muted text-truncate mb-2">PRICE</p>
                                                            <h6 className="fs-lg">$245.99</h6>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card className="border shadow-none mb-0">
                                                    <Card.Body className="p-2">
                                                        <div className="text-center">
                                                            <p className="text-muted text-truncate mb-2">No. of Orders</p>
                                                            <h6 className="fs-lg">3.7k</h6>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card className="border shadow-none mb-0">
                                                    <Card.Body className="p-2">
                                                        <div className="text-center">
                                                            <p className="text-muted text-truncate mb-2">Available Stocks</p>
                                                            <h6 className="fs-lg">764</h6>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card className="border shadow-none mb-0">
                                                    <Card.Body className="p-2">
                                                        <div className="text-center">
                                                            <p className="text-muted text-truncate mb-2">Total Revenue</p>
                                                            <h6 className="fs-lg">$59,239</h6>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div className="mt-4 d-flex gap-2">
                                    <Button type="button" variant="primary" className="w-100">Edit</Button>
                                    <Button type="button" variant="danger" className="w-100"><i className="ph-trash align-middle me-1"></i> Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Card>
                    <Card.Body className="p-4">
                        <div>
                            <h5 className="fs-md mb-3">Description:</h5>
                            <p className="text-muted mb-2">A <b>hoodie</b> is a sweatshirt with a hood attached that may also have a kangaroo pocket or full zipper. A sweatshirt is a long-sleeved pullover shirt fashioned out of thick, usually cotton cloth material. Sweatshirts are almost exclusively casual attire and hence not as dressy as some sweaters.</p>
                            <p className="text-muted">A thicker knit T-Shirt with a rag cut edge and sleeves and a printed muscle man on the back, you will feel #ULTRA in one of these.</p>
                        </div>

                        <div className="mt-4">
                            <h5 className="fs-md mb-3">Product Details:</h5>
                            <div className="table-responsive">
                                <Table className="table-sm table-borderless align-middle description-table mb-0">
                                    <tbody>
                                        <tr>
                                            <th>Type</th>
                                            <td>Stripped shirts</td>
                                        </tr>
                                        <tr>
                                            <th>Sleeve</th>
                                            <td>Full Sleeve</td>
                                        </tr>
                                        <tr>
                                            <th>Country of Origin</th>
                                            <td>California</td>
                                        </tr>
                                        <tr>
                                            <th>Pack of</th>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <th>Style</th>
                                            <td>Modern</td>
                                        </tr>
                                        <tr>
                                            <th>Style Code</th>
                                            <td>TBS037</td>
                                        </tr>
                                        <tr>
                                            <th>Generic Name</th>
                                            <td>Formal Shirt</td>
                                        </tr>
                                        <tr>
                                            <th>Ideal For</th>
                                            <td>Men</td>
                                        </tr>
                                        <tr>
                                            <th>Size</th>
                                            <td>All Available</td>
                                        </tr>
                                        <tr>
                                            <th>Suitable For</th>
                                            <td>Formal Wear,Party Wear</td>
                                        </tr>
                                        <tr>
                                            <th>Seller</th>
                                            <td>Zibra Fashion</td>
                                        </tr>
                                        <tr>
                                            <th>Fabric</th>
                                            <td>Cotton</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default ShopingInformation;