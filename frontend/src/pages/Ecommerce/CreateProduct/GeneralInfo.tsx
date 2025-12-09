import React from "react";
import { InputGroup, Card, Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Productgeneralinformation = () => {
    const formik = useFormik({
        initialValues: {
            manufacturerTitle: '',
            manufacturerBrand: '',
            productStocks: '',
            productPrice: '',
            productDiscount: '',
            productStatus: '',
            productvisibility: ''
        },
        validationSchema: Yup.object({
            manufacturerTitle: Yup.string().required("Please Enter Your Product Name"),
            manufacturerBrand: Yup.string().required("Please Enter Your Product Brand"),
            productStocks: Yup.string().required("Please Enter Your Product Stocks"),
            productPrice: Yup.string().required("Please Enter Your Product Price"),
            productDiscount: Yup.string().required("Please Enter Your Product Discount"),
            productStatus: Yup.string().required("Please Enter Your Product Status"),
            productvisibility: Yup.string().required("Please Enter Your Product Visibility")
        }),
        onSubmit: (values) => {
        }
    });
    return (
        <React.Fragment>
            <Row>
                <Col lg={12} >
                    <Card >
                        <Card.Body>
                            <Row>
                                <Col xxl={4}>
                                    <Card.Title className="mb-3">General Info</Card.Title>
                                    <p className="text-muted mb-0">An informational product can be a digital book (or e-book), a digital report, a white paper, a piece of software, audio or video files, a website, an e-zine or a newsletter.</p>
                                </Col>
                                <Col xxl={8}>
                                    <Row className="gy-3">
                                        <Col lg={6}>
                                            <div>
                                                <Form.Label htmlFor="manufacturer-name-input">Manufacturer Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturerTitle"
                                                    name="manufacturerTitle"
                                                    placeholder="Enter manufacturer name"
                                                    value={formik.values.manufacturerTitle}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    isInvalid={!!formik.errors.manufacturerTitle}
                                                />
                                                {formik.errors.manufacturerTitle && formik.touched.manufacturerTitle ? (
                                                    <Form.Control.Feedback type="invalid"> {formik.errors.manufacturerTitle} </Form.Control.Feedback>
                                                ) : null}
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <Form.Label htmlFor="manufacturer-brand-input">Manufacturer Brand</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturerBrand"
                                                    name="manufacturerBrand"
                                                    placeholder="Enter manufacturer brand"
                                                    value={formik.values.manufacturerBrand}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    isInvalid={!!formik.errors.manufacturerBrand} />
                                                {formik.errors.manufacturerBrand && formik.touched.manufacturerBrand ? (
                                                    <Form.Control.Feedback type="invalid"> {formik.errors.manufacturerBrand} </Form.Control.Feedback>
                                                ) : null}
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div>
                                                <Form.Label htmlFor="productStocks" >Stocks <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="productStocks"
                                                    name="productStocks"
                                                    placeholder="Stocks"
                                                    value={formik.values.productStocks}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    isInvalid={!!formik.errors.productStocks}
                                                />
                                                {formik.errors.productStocks && formik.touched.productStocks ? (
                                                    <Form.Control.Feedback type="invalid"> {formik.errors.productStocks} </Form.Control.Feedback>
                                                ) : null}
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div>
                                                <Form.Label htmlFor="product-price-input">Price</Form.Label>
                                                <InputGroup hasValidation>
                                                    <InputGroup.Text id="product-price-addon">$</InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        id="productPrice"
                                                        name="productPrice"
                                                        placeholder="Enter price"
                                                        value={formik.values.productPrice}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={!!formik.errors.productPrice}
                                                    />
                                                    {formik.errors.productPrice && formik.touched.productPrice ? (
                                                        <Form.Control.Feedback type="invalid"> {formik.errors.productPrice} </Form.Control.Feedback>
                                                    ) : null}
                                                </InputGroup>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div>
                                                <Form.Label htmlFor="product-discount-input">Discount</Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text id="product-discount-addon">%</InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        id="productDiscount"
                                                        name="productDiscount"
                                                        placeholder="Enter discount"
                                                        value={formik.values.productDiscount}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={!!formik.errors.productDiscount}
                                                    />
                                                    {formik.errors.productDiscount && formik.touched.productDiscount ? (
                                                        <Form.Control.Feedback type="invalid"> {formik.errors.productDiscount} </Form.Control.Feedback>
                                                    ) : null}
                                                </InputGroup>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <Form.Label htmlFor="choices-publish-status-input" >Status</Form.Label>
                                                <Form.Select
                                                    id="productStatus"
                                                    name="productStatus"
                                                    value={formik.values.productStatus}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    isInvalid={!!formik.errors.productStatus} >
                                                    <option defaultValue="Draft">Draft</option>
                                                    <option defaultValue="Published">Published</option>
                                                    <option defaultValue="Scheduled">Scheduled</option>
                                                </Form.Select>
                                                {formik.errors.productStatus && formik.touched.productStatus ? (
                                                    <Form.Control.Feedback type="invalid"> {formik.errors.productStatus} </Form.Control.Feedback>
                                                ) : null}
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <Form.Label htmlFor="choices-publish-visibility-input" >Visibility</Form.Label>
                                                <Form.Select
                                                    id="productvisibility"
                                                    name="productvisibility"
                                                    value={formik.values.productvisibility}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    isInvalid={!!formik.errors.productvisibility}>
                                                    <option defaultValue="Hidden">Hidden</option>
                                                    <option defaultValue="Public">Public</option>
                                                </Form.Select>
                                                {formik.errors.productvisibility && formik.touched.productvisibility ? (
                                                    <Form.Control.Feedback type="invalid"> {formik.errors.productvisibility} </Form.Control.Feedback>
                                                ) : null}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}