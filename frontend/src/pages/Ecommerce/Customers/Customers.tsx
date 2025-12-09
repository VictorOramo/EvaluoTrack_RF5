import React, { useState } from "react";
import { Row, Col, Card, Button, Container, Modal, OverlayTrigger, Tooltip, Form } from 'react-bootstrap';
import BreadCrumb from "Common/BreadCrumb";
import CustomerTable from "./CustomerTable";
import CustomerDatails from "./CustomerDatails";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { PatternFormat } from "react-number-format";
import { addNewCustomer as onAddNewCustomer } from "slices/thunk";
import { useDispatch } from "react-redux";
import Flatpickr from 'react-flatpickr';

//img
import userdummy from 'assets/images/users/user-dummy-img.jpg';

const Customers = () => {
    document.title = "Customers | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();
    const [imgSrc, setImgSrc] = useState<any>('');
    const [addCustomer, setAddCustomer] = useState<boolean>(false);
    const handleShow = () => setAddCustomer(true);
    const handleClose = () => setAddCustomer(false);

    const formik: any = useFormik({
        initialValues: {
            customername: '',
            customeremail: '',
            customercontact: '',
            customerdate: '',
            customerstatus: '',
            customerimg: ''
        },
        validationSchema: Yup.object({
            customername: Yup.string().required("Please Enter Your Name"),
            customeremail: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            customercontact: Yup.string().matches(/^\+\(\d{3}\)\s\d{5}\s\d{5}$/).required("Please Enter Your Contact No"),
            customerstatus: Yup.string().required("Please Enter Your Status"),
            customerdate: Yup.string().required("Please Enter Your Date"),
            customerimg: Yup.string().required("Please Enter Image"),
        }),
        onSubmit: (values: any) => {
            const newCustomer = {
                id: (Math.floor(Math.random() * (30 - 20)) + 20),
                name: values['customername'],
                email: values['customeremail'],
                phone: values['customercontact'],
                date: values['customerdate'],
                status: values['customerstatus'],
                img: values['customerimg']
            }
            dispatch(onAddNewCustomer(newCustomer))
            formik.resetForm();
            if (newCustomer === null) {
                handleShow();
            } else {
                handleClose();
            }
        }
    });

    const handleImageChange = (event: any) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            formik.setFieldValue('customerimg', reader.result);
            setImgSrc(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Customers" pageTitle="Ecommerce" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex align-items-center flex-wrap gap-3">
                                        <div className="flex-grow-1">
                                            <h3 className="card-title mb-0">Customers List</h3>
                                        </div>
                                        <div>
                                            <div className="d-flex flex-wrap gap-2">
                                                <Button variant="primary" className="add-btn" onClick={handleShow}>
                                                    <i className="bi bi-plus-circle align-baseline me-1"></i> Add Customer
                                                </Button>
                                                <Button variant="secondary"><i className="ph-cloud-arrow-down align-middle me-1"></i> Import</Button>
                                                <Button variant="subtle-info"><i className="ph-cloud-arrow-up align-middle me-1"></i>  Export</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Row id="customer-list">
                            <CustomerTable />
                            <CustomerDatails />
                        </Row>
                    </Row>
                </Container>
            </div>

            <Modal show={addCustomer} onHide={handleClose} centered>
                <Modal.Header className="bg-light p-3" closeButton>
                    <Modal.Title id="exampleModalLabel">Add Customer</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <div className="position-relative d-inline-block">
                                <div className="position-absolute top-100 start-100 translate-middle">
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id="tooltip-right"> Select customer photo  </Tooltip>
                                        }
                                    >
                                        <label htmlFor="customer-image-input" className="mb-0">
                                            <span className="avatar-xs d-inline-block">
                                                <span className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                    <i className="ri-image-fill"></i>
                                                </span>
                                            </span>
                                        </label>
                                    </OverlayTrigger>
                                    <Form.Control
                                        className="d-none"
                                        id="customer-image-input"
                                        type="file"
                                        accept="image/png, image/gif, image/jpeg"
                                        name="customerimg"
                                        onChange={handleImageChange} />
                                    {formik.errors.customerimg && formik.touched.customerimg ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.customerimg} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                                <div className="avatar-lg">
                                    <div className="avatar-title bg-light rounded-3">
                                        <img src={imgSrc || userdummy} alt="" id="customer-img" className="avatar-md h-auto rounded-3 object-fit-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="customername-field">Customer Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="customername"
                                name="customername"
                                placeholder="Enter customer name"
                                value={formik.values.customername}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.customername} />
                            {formik.errors.customername && formik.touched.customername ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.customername}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="email-field">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="customeremail"
                                name="customeremail"
                                placeholder="Enter email"
                                value={formik.values.customeremail}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.customeremail} />
                            {formik.errors.customeremail && formik.touched.customeremail ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.customeremail}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="contact-field">Contact no.</Form.Label>
                            <PatternFormat
                                className="form-control"
                                displayType="input"
                                id="customercontact"
                                placeholder="Enter contact no"
                                name="customercontact"
                                format="+(###) ##### #####"
                                value={formik.values.customercontact}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.customercontact && formik.touched.customercontact ? (
                                <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.customercontact}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="date-field">Joining Date</Form.Label>
                            <Flatpickr
                                className="form-control"
                                id="customerdate"
                                name="customerdate"
                                placeholder="Select date"
                                options={{
                                    mode: "single",
                                    dateFormat: 'd M, Y',
                                }}
                                onChange={(customerdate: any) => formik.setFieldValue("customerdate", moment(customerdate[0]).format("DD MMMM ,YYYY"))}
                                value={formik.values.customerdate || ''}
                            />
                            {formik.errors.customerdate && formik.touched.customerdate ? (
                                <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.customerdate}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div>
                            <Form.Label htmlFor="status-field" >Status</Form.Label>
                            <Form.Select
                                className="form-control"
                                id="customerstatus"
                                name="customerstatus"
                                value={formik.values.customerstatus}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.customerstatus}
                            >
                                <option value="Active">Active</option>
                                <option value="Block">Block</option>
                                <option value="Unactive">Unactive</option>
                            </Form.Select>
                            {formik.errors.customerstatus && formik.touched.customerstatus ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.customerstatus}</Form.Control.Feedback>
                            ) : null}
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{ display: "block" }}>
                        <div className="hstack gap-2 justify-content-end">
                            <Button variant="light" type="button" onClick={handleClose}>Close</Button>
                            <Button variant="success" type="submit" id="add-btn">Add Customer</Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal >
            <ToastContainer />
        </React.Fragment >
    );
}

export default Customers;