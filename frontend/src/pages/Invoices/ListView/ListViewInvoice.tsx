import React, { useEffect, useMemo, useState } from "react";
import { Card, Col, Container, Row, ProgressBar, Tooltip, OverlayTrigger, Form, Button, Badge, Modal } from "react-bootstrap";
import CountUp from 'react-countup'
import BreadCrumb from "Common/BreadCrumb";
import { invoice } from "Common/data/invoiceListView";
import { Link } from "react-router-dom";
import TableContainer from "Common/TableContainer";
import { DeleteModal } from "Common/DeleteModal";
import {
    getInvoiceList as onGetInvoiceList,
    addInvoiceList as onAddInvoiceList,
    updateInvoiceList as onUpdateInvoiceList,
    deleteInvoiceList as onDeleteInvoiceList
} from "slices/invoices/thunk"
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createSelector } from "reselect";
import { useFormik } from "formik";
import * as Yup from "yup";
import Flatpicker from "react-flatpickr";
import moment from "moment";

const ListViewInvoice = () => {

    document.title = "Invoice List | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectInvoicesList = createSelector(
        (state: any) => state.Invoice,
        (invoice) => ({
            invoicesList: invoice.invoiceList
        })
    );

    const { invoicesList } = useSelector(selectInvoicesList);

    useEffect(() => {
        dispatch(onGetInvoiceList());
    }, [dispatch]);

    const [listView, setListView] = useState<any>();
    const [invoiceslists, setInvoiceslists] = useState<any>(null);
    const [addInvoice, setAddInvoice] = useState<boolean>(false);
    const [editInvoice, setEditInvoice] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [edit, setEdit] = useState<any>();
    //add
    const handleCloseInvoice = () => setAddInvoice(false);
    const handleShowInvoice = () => setAddInvoice(true);
    //edit
    const handleEdit = (item: any) => {
        setAddInvoice(true);
        setEditInvoice(true);
        setEdit({
            id: item.id,
            customer: item.customer,
            email: item.email,
            createDate: item.createDate,
            dueDate: item.dueDate,
            invoice_amount: item.invoice_amount,
            status: item.status
        })
    }

    //search
    const handleChange = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            setListView(invoicesList?.filter((item: any) => item.customer.toLowerCase().includes(search)))
        } else {
            setListView(invoicesList)
        }
    }
    // delete 
    const handleDeleteShow = (ele: any) => { setShow(true); setInvoiceslists(ele) };
    const handleDeleteClose = () => setShow(false);

    //delete modal
    const deleteModalFunction = () => {
        if (invoiceslists.id) {
            dispatch(onDeleteInvoiceList(invoiceslists.id));
        }
        setShow(false)
    }

    useEffect(() => {
        setListView(invoicesList)
    }, [invoicesList])

    //columns
    const columns = useMemo(
        () => [
            {
                Header: (
                    <Form.Check >
                        <Form.Check.Input type="checkbox" value="option" id="checkAll" />
                        <Form.Check.Label htmlFor="checkAll"></Form.Check.Label>
                    </Form.Check>
                ),
                Cell: (cell: any) => {
                    return (
                        <Form.Check className="checkbox-product-list">
                            <Form.Check.Input type="checkbox" value="2" id="checkbox-2" />
                            <Form.Check.Label htmlFor="checkbox-2"></Form.Check.Label>
                        </Form.Check>
                    )
                },
                id: "#",
                Filter: false,
                isSortable: false,
            },
            {
                Header: "id",
                accessor: "invoice_no",
                Cell: (cell: any) => {
                    return (
                        <Link to="#" >#TBS{cell.row.original.invoice_no}</Link>
                    )
                },
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Customer Name",
                accessor: "customer",
                Filter: false,
                isSortable: true,
                disableFilters: true,
            },
            {
                Header: "Email",
                accessor: "email",
                Filter: false,
                isSortable: true,
                disableFilters: true,
            },
            {
                Header: "Create Date",
                accessor: "createDate",
                Filter: false,
                isSortable: true,
                disableFilters: true,
            },
            {
                Header: "Due Date",
                accessor: "dueDate",
                Filter: false,
                isSortable: true,
                disableFilters: true,
            },
            {
                Header: "Amount",
                Cell: (cell: any) => {
                    return (
                        <span>${cell.row.original.invoice_amount}</span>
                    )
                },
                Filter: false,
                isSortable: true,
                disableFilters: true,
            },
            {
                Header: "Status",
                disableFilters: true,
                Filter: false,
                isSortable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Paid":
                            return (<Badge text="success" bg="success-subtle" className="status"> {cellProps.status}</Badge>)
                        case "Unpaid":
                            return (<Badge text="danger" bg="danger-subtle" className="status"> {cellProps.status}</Badge>)
                        default:
                            return (<Badge text="warning" bg="warning-subtle" className="status"> {cellProps.status}</Badge>)
                    }
                },
            },
            {
                Header: "Action",
                Filter: false,
                isSortable: false,
                accessor: (cell: any) => {
                    return (
                        <ul className="d-flex gap-2 list-unstyled mb-0">
                            <li>
                                <Link to="/apps-invoices-overview" className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" onClick={() => handleEdit(cell)}><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" onClick={() => handleDeleteShow(cell)}><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
                    )
                }
            },
        ], []
    )

    // validation
    const formik: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
        initialValues: {
            id: (edit && edit.id) || '',
            customer: (edit && edit.customer) || '',
            email: (edit && edit.email) || '',
            createDate: (edit && edit.createDate) || '',
            dueDate: (edit && edit.dueDate) || '',
            invoice_amount: (edit && edit.invoice_amount) || '',
            status: (edit && edit.status) || ''
        },
        validationSchema: Yup.object({
            customer: Yup.string().required("Please Enter Your Name"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            createDate: Yup.string().required("Please Enter Your Create Date"),
            dueDate: Yup.string().required("Please Enter Your Due Date"),
            status: Yup.string().required("Please Enter Your status"),
            invoice_amount: Yup.string().required("Please Enter Your Location"),

        }),
        onSubmit: (values: any) => {
            let newid = (Math.floor(Math.random() * (30 - 20)) + 20);
            if (editInvoice) {
                const updateInvoice = {
                    id: values.id,
                    invoice_no: `243019${newid}`,
                    customer: values.customer,
                    email: values.email,
                    createDate: values.createDate,
                    dueDate: values.dueDate,
                    status: values.status,
                    invoice_amount: values.invoice_amount
                }
                dispatch(onUpdateInvoiceList(updateInvoice));
                formik.resetForm();
            } else {
                const newInvoice = {
                    id: newid,
                    invoice_no: `243019${newid}`,
                    customer: values['customer'],
                    email: values['email'],
                    createDate: values['createDate'],
                    dueDate: values['dueDate'],
                    status: values['status'],
                    invoice_amount: values['invoice_amount']
                }
                dispatch(onAddInvoiceList(newInvoice));
                formik.resetForm();
            }
            if (values === null) {
                handleShowInvoice();
            } else {
                setEdit(null)
                setEditInvoice(false)
                handleCloseInvoice();
            }
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Invoice List" pageTitle="Invoice" />
                    <Row>
                        <Col xl={7}>
                            <Card>
                                <Card.Body>
                                    <Row className="g-4">
                                        {
                                            (invoice || [])?.map((item: any) => {
                                                return (
                                                    <Col lg={3} sm={6} key={item.id} className="border-end-sm">
                                                        <div className="d-flex align-items-center gap-2 mb-4">
                                                            <div className="avatar-xs flex-shrink-0">
                                                                <div className={`avatar-title bg-body-secondary text-${item.color} border border-${item.color}-subtle rounded-circle`}>
                                                                    <i className={item.icon}></i>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <p className="text-muted mb-0">{item.title}</p>
                                                            </div>
                                                        </div>
                                                        <h3 className="mb-0">
                                                            <CountUp start={0} end={item.count} separator="," className="counter-value" />
                                                            <small className={`text-${item.iconColor} fs-xs fw-normal ms-1`}>
                                                                <i className={`${item.statusIcon} align-baseline`}></i> {item.amout}%</small>
                                                        </h3>
                                                    </Col>
                                                )
                                            })
                                        }
                                        <Col lg={3} sm={6}>
                                            <div>
                                                <div className="d-flex align-items-center gap-2 mb-4">
                                                    <div className="avatar-xs flex-shrink-0">
                                                        <div className="avatar-title bg-body-secondary text-danger border border-danger-subtle rounded-circle">
                                                            <i className="bi bi-file-earmark-text"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="text-muted mb-0">Overdue Invoices</p>
                                                    </div>
                                                </div>
                                                <h3 className="mb-0">
                                                    <CountUp start={0} end={871} separator="," />
                                                    <small className="text-danger fs-xs fw-normal ms-1">
                                                        <i className="bi bi-arrow-down align-baseline"></i> 3.49%</small>
                                                </h3>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={5}>
                            <Card >
                                <Card.Body>
                                    <div className="d-flex mb-4 pb-1">
                                        <div className="flex-grow-1">
                                            <Card.Title as="h6">Total Receivables <i className="bi bi-exclamation-circle align-baseline ms-1 fs-sm" data-bs-toggle="tooltip" data-bs-title="Once you send an invoice (or bill), it becomes part of your accounts receivable – until it's paid."></i></Card.Title>
                                            <p className="text-muted mb-0"><b>$985.32k</b> Total unpaid invoices</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link to="/apps-ecommerce-seller-overview" className="link-effect">View Profile <i className="bi bi-arrow-right align-baseline ms-1"></i></Link>
                                        </div>
                                    </div>
                                    <OverlayTrigger
                                        key="top"
                                        placement="top"
                                        overlay={<Tooltip id="tooltip-top"> $234.95 Paid Amount  </Tooltip>}
                                    >
                                        <ProgressBar animated now={75} />
                                    </OverlayTrigger>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row id="invoiceList">
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <Row className="align-items-center g-2">
                                        <Col lg={3} className="me-auto">
                                            <h6 className="card-title mb-0">Invoices List</h6>
                                        </Col>
                                        <Col xl={2} md={3}>
                                            <div className="search-box">
                                                <Form.Control type="text" className="search" placeholder="Search for invoice, date, client or something..." onChange={(e: any) => handleChange(e)} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col className="col-md-auto">
                                            <div className="hstack gap-2">
                                                <Button className="btn btn-subtle-danger d-none" id="remove-actions"><i className="ri-delete-bin-2-line"></i></Button>
                                                <Button variant="secondary" onClick={handleShowInvoice}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Invoice</Button>
                                                {/* <Link to="/apps-invoices-create" className="btn btn-secondary"><i className="bi bi-plus-circle align-baseline me-1"></i> Add Invoice</Link> */}
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body className="mt-3">
                                    {
                                        listView && listView.length > 0 ?
                                            <TableContainer
                                                isPagination={true}
                                                columns={columns}
                                                data={listView || []}
                                                customPageSize={10}
                                                divClassName="table-responsive table-card"
                                                tableClass="table table-centered align-middle table-custom-effect table-nowrap mb-0"
                                                theadClass="table-light"
                                                PaginationClassName="align-items-center mt-4 pt-3"
                                                isBordered={false}
                                                SearchPlaceholder=""
                                            />
                                            :
                                            <div id="noresult">
                                                <div className="text-center py-4">
                                                    <div className="avatar-md mx-auto mb-4">
                                                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-5xl">
                                                            <i className="bi bi-search"></i>
                                                        </div>
                                                    </div>
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                </div>
                                            </div>
                                    }
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>
            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />

            <Modal show={addInvoice} onHide={handleCloseInvoice}>
                <Modal.Header closeButton>
                    <Modal.Title>{editInvoice ? "update Invoice List" : "Add Invoice List"}</Modal.Title>
                </Modal.Header>
                <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label htmlFor="Customer-Name-input">Customer Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="Customer-Name-input"
                                name="customer"
                                placeholder="Enter customer Name"
                                value={formik.values.customer}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.customer}
                            />
                            {formik.errors.customer && formik.touched.customer ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.customer}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="Email-input">Email<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="Email-input"
                                name="email"
                                placeholder="Enter Your email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.email}
                            />
                            {formik.errors.email && formik.touched.email ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="create-date-input" >Create Date<span className="text-danger">*</span></Form.Label>
                                    <Flatpicker
                                        className="form-control"
                                        id="create-date-input"
                                        name="createDate"
                                        placeholder="Select date"
                                        options={{
                                            mode: "single",
                                            dateFormat: 'd M, Y',
                                        }}
                                        onChange={(createDate: any) => formik.setFieldValue("createDate", moment(createDate[0]).format("DD MMMM ,YYYY"))}
                                        value={formik.values.createDate || ''}
                                    />
                                    {formik.errors.createDate && formik.touched.createDate ? (
                                        <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.createDate}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="due-date-input" >Due Date<span className="text-danger">*</span></Form.Label>
                                    <Flatpicker
                                        className="form-control"
                                        id="create-date-input"
                                        name="dueDate"
                                        placeholder="Select date"
                                        options={{
                                            mode: "single",
                                            dateFormat: 'd M, Y',
                                        }}
                                        onChange={(dueDate: any) => formik.setFieldValue("dueDate", moment(dueDate[0]).format("DD MMMM ,YYYY"))}
                                        value={formik.values.dueDate || ''}
                                    />
                                    {formik.errors.dueDate && formik.touched.dueDate ? (
                                        <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.dueDate}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="Amount-input" >Amount<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="Amount-input"
                                        name="invoice_amount"
                                        placeholder="Enter Your Amount"
                                        value={formik.values.invoice_amount}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.invoice_amount}
                                    />
                                    {formik.errors.invoice_amount && formik.touched.invoice_amount ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.invoice_amount}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="Status-input" >Status<span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        id="Amount-input"
                                        name="status"
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.status}
                                    >
                                        <option>select Status</option>
                                        <option value="Paid">Paid</option>
                                        <option value="Unpaid">Unpaid</option>
                                    </Form.Select>
                                    {formik.errors.status && formik.touched.status ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.status}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="btn btn-ghost-danger" onClick={handleCloseInvoice}><i className="bi bi-x-lg align-baseline me-1"></i> Close </Button>
                        <Button type="submit" variant="primary" id="add-btn">{editInvoice ? "update" : "Add"}</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <ToastContainer />
        </React.Fragment >
    );
}

export default ListViewInvoice;