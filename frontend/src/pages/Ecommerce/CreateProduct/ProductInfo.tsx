import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

export const ProductInformation = () => {
    const formik = useFormik({
        initialValues: {
            productTitle: '',
            productCategory: '',
            productType: '',
            shortDecs: '',
            productBrand: '',
            productUnit: '',
            productvisibility: ''
        },
        validationSchema: Yup.object({
            productTitle: Yup.string().required("Please Enter Your Product Name"),
            productCategory: Yup.string().required("Please Enter Your Product Category"),
            productType: Yup.string().required("Please Enter Your Product Type"),
            shortDecs: Yup.string().required("Please Enter Your Product Price"),
            productBrand: Yup.string().required("Please Enter Your Product Brand"),
            productUnit: Yup.string().required("Please Enter Your Product Unit"),
            productvisibility: Yup.string().required("Please Enter Your Product Visibility")
        }),
        onSubmit: (values) => {
        }
    });
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card >
                        <Card.Body>
                            <Row >
                                <Col xxl={4}>
                                    <Card.Title as="h5" className="mb-3">Product Information</Card.Title>
                                    <p className="text-muted">Product Information refers to any information held by an organisation about the products it produces, buys, sells or distributes.</p>
                                </Col>
                                <Col xxl={8}>
                                    <Form>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="productTitle" >Product Title <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="productTitle"
                                                name="productTitle"
                                                placeholder="Enter product title"
                                                value={formik.values.productTitle}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.productTitle} />
                                            {formik.errors.productTitle && formik.touched.productTitle ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.productTitle}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="productCategories">Categories <span className="text-danger">*</span></Form.Label>
                                            <Form.Select
                                                className="form-control"
                                                name="productCategory"
                                                id="productCategory"
                                                value={formik.values.productCategory}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.productCategory}
                                            >
                                                <option defaultValue="">Select categories</option>
                                                <option defaultValue="Appliances">Appliances</option>
                                                <option defaultValue="Automotive Accessories">Automotive Accessories</option>
                                                <option defaultValue="Electronics">Electronics</option>
                                                <option defaultValue="Fashion">Fashion</option>
                                                <option defaultValue="Footwear">Footwear</option>
                                                <option defaultValue="Furniture">Furniture</option>
                                                <option defaultValue="Headphones">Headphones</option>
                                                <option defaultValue="Other Accessories">Other Accessories</option>
                                                <option defaultValue="">Select categories</option>
                                                <option defaultValue="Sportswear">Sportswear</option>
                                                <option defaultValue="Watches">Watches</option>
                                            </Form.Select>
                                            {formik.errors.productCategory && formik.touched.productCategory ? (
                                                <Form.Control.Feedback type="invalid"> {formik.errors.productCategory} </Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="productType">Product Type <span className="text-danger">*</span></Form.Label>
                                            <Form.Select className="form-control"
                                                name="productType"
                                                id="productType"
                                                value={formik.values.productType}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.productType}>
                                                {/* <input type="search" name="search_terms" /> */}
                                                <option defaultValue="">Select Type</option>
                                                <option defaultValue="Classified">Classified</option>
                                                <option defaultValue="Simple">Simple</option>
                                            </Form.Select>
                                            {formik.errors.productType && formik.touched.productType ? (
                                                <Form.Control.Feedback type="invalid"> {formik.errors.productType} </Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="shortDecs">Short Description <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                id="shortDecs"
                                                name="shortDecs"
                                                placeholder="Must enter minimum of a 100 characters"
                                                value={formik.values.shortDecs}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.shortDecs} />
                                            {formik.errors.shortDecs && formik.touched.shortDecs ? (
                                                <Form.Control.Feedback type="invalid"> {formik.errors.shortDecs} </Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                        <Row >
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="productBrand">Brand <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="productBrand"
                                                        name="productBrand"
                                                        placeholder="Enter brand"
                                                        value={formik.values.productBrand}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={!!formik.errors.productBrand}
                                                    />
                                                    {formik.errors.productBrand && formik.touched.productBrand ? (
                                                        <Form.Control.Feedback type="invalid"> {formik.errors.productBrand} </Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="productUnit">Unit <span className="text-danger">*</span></Form.Label>
                                                    <Form.Select
                                                        className="form-control"
                                                        id="productUnit"
                                                        name="productUnit"
                                                        value={formik.values.productUnit}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={!!formik.errors.productUnit}
                                                    >
                                                        {/* <Form.Control type="text" name="search_terms" /> */}
                                                        <option defaultValue="">Select Unit</option>
                                                        <option defaultValue="Classified">Kilogram</option>
                                                        <option defaultValue="Simple">Pieces</option>
                                                    </Form.Select>
                                                    {formik.errors.productUnit && formik.touched.productUnit ? (
                                                        <Form.Control.Feedback type="invalid"> {formik.errors.productUnit} </Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="productTags">Tags</Form.Label>
                                            <Form.Select>
                                                <option value="Fashion">Fashion</option>
                                                <option value="Style">Style</option>
                                                <option value="Brands">Brands</option>
                                                <option value="Puma">Puma</option>
                                            </Form.Select>
                                        </div>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Check label="Exchangeable" type="checkbox" className="form-switch mb-3" id="exchangeable"></Form.Check>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Check label="Refundable" type="checkbox" className="form-switch mb-3" id="refundableInput"></Form.Check>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    );
}

