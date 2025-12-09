import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DeleteModal } from "Common/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteCheckout as onDeleteCheckout, addNewCheckout as onAddNewCheckout, updateCheckout as onUpdateCheckout, getCheckout as onGetCheckout } from "slices/thunk";
import { createSelector } from "reselect";
import { PatternFormat } from 'react-number-format';
import { useFormik } from "formik";
import * as Yup from "yup";

export const ShoppingCheckout = () => {
    const dispatch = useDispatch<any>();
    const selectCheckoutList = createSelector(
        (state: any) => state.Ecommerce,
        (checkoutList) => ({
            checkoutList: checkoutList.checkout,
        })
    );

    const { checkoutList } = useSelector(selectCheckoutList);

    const [add, setAdd] = useState<any>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [editdata, setEditdata] = useState<any>();
    const [delet, setDelet] = useState<boolean>(false);
    const [deletid, setDeletid] = useState<number>();
    //add address modal
    const handleAddShow = () => setAdd(true);
    const handleAddClose = () => { setAdd(false); setEditdata(null); setEdit(false) };

    //edit address modal
    const handlesetEditShow = (value: any) => {
        setEdit(true);
        handleAddShow();
        setEditdata({
            id: value?.id,
            selectadd: value?.selectadd,
            name: value?.name,
            address: value?.address,
            contact: value?.contact,
        });
    };

    //delete modal state
    const handleClose = () => setDelet(false);
    const handleDeleteShow = (id: any) => {
        setDelet(true);
        setDeletid(id);
    };

    const deleteModalFunction = () => {
        handleClose();
        dispatch(onDeleteCheckout(deletid))
    }

    useEffect(() => {
        dispatch(onGetCheckout())
    }, [dispatch])

    const formik: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
        initialValues: {
            id: (editdata && editdata?.id) || '',
            name: (editdata && editdata?.name) || '',
            address: (editdata && editdata?.address) || '',
            contact: (editdata && editdata?.contact) || '',
            selectadd: (editdata && editdata?.selectadd) || ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Name"),
            address: Yup.string().required("Please Enter Your Address"),
            contact: Yup.string().required("Please Enter Your Phone No"),
            selectadd: Yup.string().required("Please Enter Your Phone No"),
        }),
        onSubmit: (values: any) => {
            if (edit) {
                const updateAddress = {
                    id: values?.id,
                    name: values?.name,
                    address: values?.address,
                    contact: values?.contact,
                    selectadd: values?.selectadd,
                }
                dispatch(onUpdateCheckout(updateAddress));
                formik.resetForm();
            } else {
                const newAddres = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    name: values['name'],
                    address: values['address'],
                    contact: values['contact'],
                    selectadd: values['selectadd'],
                }
                dispatch(onAddNewCheckout(newAddres));

                formik.resetForm();
            }
            if (values === null) {
                handleAddShow();
            } else {
                handleAddClose();
            }
        }
    });

    return (
        <React.Fragment>
            <Col lg={12}>
                <Card>
                    <Card.Header className="d-flex align-items-center">
                        <Card.Title as="h6" className="flex-grow-1 mb-0">Shipping Information</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-grow-1">
                                <h5 className="fs-md mb-0">Choose Address</h5>
                            </div>
                        </div>
                        <Row className="gy-3">
                            {
                                (checkoutList || [])?.map((item: any) => {
                                    return (
                                        <Col lg={4} sm={6} key={item?.id}>
                                            <Form.Check className="card-radio rounded-bottom-0">
                                                <Form.Check.Input id={`shippingAddress0${item.id}`} name="shippingAddress" type="radio" />
                                                <Form.Check.Label htmlFor={`shippingAddress0${item.id}`}>
                                                    <span className="mb-3 fw-semibold d-block text-muted text-uppercase">{item.selectadd} Address</span>
                                                    <span className="fs-md mb-2 d-block fw-medium">{item.name}</span>
                                                    <span className="text-muted fw-normal text-wrap mb-1 d-block">{item.address}</span>
                                                    <span className="text-muted fw-normal d-block">Mo. {item.contact}</span>
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <div className="d-flex flex-wrap p-2 py-1 rounded-bottom border mt-n1">
                                                <div>
                                                    <Link to="#" className="d-block text-body p-1 px-2" onClick={() => handlesetEditShow(item)}><i className="ri-pencil-fill text-muted align-bottom me-1"></i> Edit</Link>
                                                </div>
                                                <div>
                                                    <Link to="#" className="d-block text-body p-1 px-2" onClick={() => handleDeleteShow(item.id)}><i className="ri-delete-bin-fill text-muted align-bottom me-1"></i> Remove</Link>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }

                            <Col lg={4} sm={6}>
                                <Link to="#" className="card bg-light bg-opacity-25 border border-light-subtle shadow-none h-100 text-center">
                                    <Card.Body className="d-flex justify-content-center align-items-center">
                                        <div>
                                            <div className="fs-4xl mb-2"><i className="bi bi-plus-circle-dotted"></i></div>
                                            <div className="fw-medium fs-md text-primary-emphasis stretched-link" onClick={handleAddShow}>ADD Address</div>
                                        </div>
                                    </Card.Body>
                                </Link>
                            </Col>
                        </Row>
                        <div className="mt-4">
                            <h5 className="fs-md mb-3">Shipping Method</h5>
                            <Row className="g-4">
                                <Col lg={6}>
                                    <Form.Check className="card-radio">
                                        <Form.Check.Input id="shippingMethod01" name="shippingMethod" type="radio" defaultChecked />
                                        <Form.Check.Label className="d-flex gap-2 align-items-center" htmlFor="shippingMethod01">
                                            <span className="avatar-sm">
                                                <span className="avatar-title bg-light rounded text-body fs-4">
                                                    <i className="bi bi-truck"></i>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="fs-md fw-medium mb-1 text-wrap d-block">Free Delivery</span>
                                                <span className="text-muted fw-normal text-wrap d-block">Expected Delivery 3 to 5 Days</span>
                                            </span>
                                            <span className="fs-3xl float-end mt-2 text-wrap d-block fw-semibold">Free</span>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </Col>
                                <Col lg={6}>
                                    <Form.Check className="card-radio">
                                        <Form.Check.Input id="shippingMethod02" name="shippingMethod" type="radio" />
                                        <Form.Check.Label className="d-flex gap-2 align-items-center" htmlFor="shippingMethod02">
                                            <span className="avatar-sm">
                                                <span className="avatar-title bg-light rounded text-body fs-4">
                                                    <i className="bi bi-airplane"></i>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="fs-md fw-medium mb-1 text-wrap d-block">Express Delivery</span>
                                                <span className="text-muted fw-normal text-wrap d-block">Delivery within 24hrs.</span>
                                            </span>
                                            <span className="fs-3xl float-end mt-2 text-wrap d-block fw-semibold">$24.99</span>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Modal show={add} onHide={handleAddClose} animation centered className="zoomIn" >
                <Modal.Header closeButton>
                    <Modal.Title id="addAddressModalLabel">{edit ? "Edit Address" : "Add Address"}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div>
                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.name}
                                />
                                {formik.errors.name && formik.touched.name ? (
                                    <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-textarea">Address</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id="address"
                                    name="address"
                                    placeholder="Enter address"
                                    rows={2}
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.address}
                                />
                                {formik.errors.address && formik.touched.address ? (
                                    <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="contact">Phone</Form.Label>
                                <PatternFormat
                                    className="form-control"
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    format="(###) ###-####"
                                    placeholder="Enter phone no."
                                    value={formik.values.contact}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.contact && formik.touched.contact ? (
                                    <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.contact}</Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="state">Address Type</Form.Label>
                                <Form.Select
                                    className="form-control"
                                    id="selectadd"
                                    name="selectadd"
                                    value={formik.values.selectadd}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.selectadd}
                                >
                                    <option value="Home">Home (7am to 10pm)</option>
                                    <option value="Office">Office (11am to 7pm)</option>
                                </Form.Select>
                                {formik.errors.selectadd && formik.touched.selectadd ? (
                                    <Form.Control.Feedback type="invalid">{formik.errors.selectadd}</Form.Control.Feedback>
                                ) : null}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-ghost-danger" onClick={handleAddClose}>
                            <i className="bi bi-x-lg align-baseline me-1"></i> Close
                        </Button>
                        <Button variant="primary" type="submit"> {edit ? "Edit Address" : "Add Address"} </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={delet} handleClose={handleClose} deleteModalFunction={deleteModalFunction} />
        </React.Fragment >
    )
}