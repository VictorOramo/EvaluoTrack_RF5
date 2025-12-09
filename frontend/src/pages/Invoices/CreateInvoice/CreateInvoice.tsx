import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import invoiceSignatureImg from "../../../assets/images/invoice-signature.svg"
import logoLight from "../../../assets/images/logo-light.png";

import { Link } from "react-router-dom";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateInvoice = () => {
    document.title = "Create Invoice List | Steex - Admin & Dashboard Template";

    const [ispaymentDetails, setispaymentDetails] = useState<any>(null);
    const [isCurrency, setisCurrency] = useState("$");

    function handleispaymentDetails(ispaymentDetails: any) {
        setispaymentDetails(ispaymentDetails);
    }

    function handleisCurrency(isCurrency: any) {
        setisCurrency(isCurrency);
    }

    const paymentdetails = [
        {
            options: [
                { label: "Payment Method", value: "Payment Method" },
                { label: "Mastercard", value: "Mastercard" },
                { label: "Credit Card", value: "Credit Card" },
                { label: "Visa", value: "Visa" },
                { label: "Paypal", value: "Paypal" },
            ],
        },
    ];

    const allstatus = [
        {
            options: [
                { label: "Select Payment Status", value: "Select Payment Status" },
                { label: "Paid", value: "Paid" },
                { label: "Unpaid", value: "Unpaid" },
                { label: "Refund", value: "Refund" },
            ],
        },
    ];

    const allcurrency = [
        {
            options: [
                { label: "$", value: "($)" },
                { label: "£", value: "(£)" },
                { label: "₹", value: "(₹)" },
                { label: "€", value: "(€)" },
            ],
        },
    ];

    const [count, setCount] = useState<number>(0);
    const [rate, setRate] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);
    const [dis, setDis] = useState<number>(0);
    const [charge, setCharge] = useState<number>(0);

    useEffect(() => {
        let tax = (0.125 * rate * count);
        let dis = (0.15 * rate * count);

        if ((rate && count)) {
            setCharge(65);
        } else {
            setCharge(0);

        }
        setTax(tax);
        setDis(dis);
    }, [rate, count]);

    // const dateFormat = () => {
    //     let d = new Date(),
    //         months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //     return ((d.getDate() + ' ' + months[d.getMonth()] + ', ' + d.getFullYear()).toString());
    // };

    // const [date, setDate] = useState(dateFormat());

    // const dateformate = (e: any) => {
    //     // const date = e.toString().split(" ");
    //     // const joinDate = (date[2] + " " + date[1] + ", " + date[3]).toString();
    //     // setDate(joinDate);
    // };

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            postalcode: "",
            registration: "",
            email: "",
            website: "",
            contact: "",
            invoiceId: "",
            date: "",
            name: "",
            status: "",
            country: "",
            amount: "",
            billing_address: "",
            billing_phone: "",
            billing_taxno: "",
            shipping_name: "",
            shipping_address: "",
            shipping_phone: "",
            shipping_taxno: "",
            product_name: "",
        },
        validationSchema: Yup.object({
            postalcode: Yup.string().required("This field is required"),
            registration: Yup.string().required("Please Enter a registration no"),
            email: Yup.string().required("Please Enter a Email"),
            website: Yup.string().required("Please Enter a website"),
            contact: Yup.string().required("Please Enter a contact number"),
            invoiceId: Yup.string().required("This field is required"),
            name: Yup.string().required("Please Enter a Full name"),
            // country: Yup.string().required("Please Enter a Country"),
            billing_address: Yup.string().required("Please Enter a Address"),
            billing_phone: Yup.string().required("Please Enter a Phone Number"),
            billing_taxno: Yup.string().required("Please Enter a tax Number"),
            shipping_name: Yup.string().required("Please Enter a Full name"),
            shipping_address: Yup.string().required("Please Enter a Address"),
            shipping_phone: Yup.string().required("Please Enter a Phone Number"),
            shipping_taxno: Yup.string().required("Please enter a tax Number"),
            product_name: Yup.string().required("Please Enter a product Name"),
        }),
        onSubmit: (values) => {
            validation.resetForm();
        },
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumb title="Create Invoice" pageTitle="Invoices" />
                    <Row className="justify-content-center">
                        <Col xxl={9}>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}
                                className="needs-validation"
                                id="invoice_form"
                            >
                                <Card className="overflow-hidden">
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
                                        <Row>
                                            <Col lg={4}>
                                                <div className="mx-auto mb-3">
                                                    <input id="logo-img-file-input" type="file" className="logo-img-file-input d-none" />
                                                    <label htmlFor="logo-img-file-input" className="d-block" tabIndex={0}>
                                                        <span className="overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded" style={{ "height": "40px", "width": "150px" }}>
                                                            <img src={logoLight} className="card-logo card-logo-image img-fluid" alt="logo light" />
                                                        </span>
                                                    </label>
                                                </div>
                                            </Col>

                                            <Col lg={4} className="ms-auto">
                                                <div className="mb-2">
                                                    <Form.Control
                                                        type="text"
                                                        id="registrationNumber"
                                                        name="registration"
                                                        value={validation.values.registration || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        maxLength={12}
                                                        placeholder="Legal Registration No"
                                                        isInvalid={validation.errors.registration && validation.touched.registration ? true : false}
                                                    />
                                                    {validation.errors.registration && validation.touched.registration ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.registration}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control
                                                        type="email"
                                                        id="companyEmail"
                                                        name="email"
                                                        value={validation.values.email || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        placeholder="Email Address"
                                                        isInvalid={validation.errors.email && validation.touched.email ? true : false}
                                                    />
                                                    {validation.errors.email && validation.touched.email ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.email}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control
                                                        type="text"
                                                        id="companyWebsite"
                                                        name="website"
                                                        value={validation.values.website || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        placeholder="Website"
                                                        isInvalid={validation.errors.website && validation.touched.website ? true : false}
                                                    />
                                                    {validation.errors.website && validation.touched.website ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.website}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control
                                                        type="text"
                                                        data-plugin="cleave-phone"
                                                        id="compnayContactno"
                                                        name="contact"
                                                        value={validation.values.contact || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        placeholder="Contact No"
                                                        isInvalid={validation.errors.contact && validation.touched.contact ? true : false}
                                                    />
                                                    {validation.errors.contact && validation.touched.contact ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.contact}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <Flatpickr
                                                        name="date"
                                                        id="date-field"
                                                        className="form-control"
                                                        placeholder="Select a date"
                                                        options={{
                                                            altInput: true,
                                                            altFormat: "d M, Y",
                                                            dateFormat: "d M, Y",
                                                        }}
                                                        // onChange={(e: any) =>
                                                        //     // dateformate(e)
                                                        // }
                                                        value={validation.values.date || ""}
                                                    />
                                                    {validation.touched.date && validation.errors.date ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.date}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="mt-4">
                                            <Row className="g-3">
                                                <Col lg={3} sm={6}>
                                                    <Form.Label htmlFor="invoicenoInput">Invoice No</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="invoicenoInput"
                                                        name="invoiceId"
                                                        value={validation.values.invoiceId || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        placeholder="Invoice No"
                                                        isInvalid={validation.errors.invoiceId && validation.touched.invoiceId ? true : false}
                                                    />
                                                    {validation.errors.invoiceId && validation.touched.invoiceId ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.invoiceId}</Form.Control.Feedback>
                                                    ) : null}
                                                </Col>

                                                <Col lg={3} sm={6}>
                                                    <div>
                                                        <Form.Label htmlFor="due-date-field">Date</Form.Label>
                                                        <Flatpickr
                                                            name="date"
                                                            id="date-field"
                                                            className="form-control"
                                                            placeholder="Select a date"
                                                            options={{
                                                                altInput: true,
                                                                altFormat: "d M, Y",
                                                                dateFormat: "d M, Y",
                                                            }}
                                                            // onChange={(e: any) =>
                                                            //     dateformate(e)
                                                            // }
                                                            value={validation.values.date || ""}
                                                        />
                                                        {validation.touched.date && validation.errors.date ? (
                                                            <Form.Control.Feedback type="invalid">{validation.errors.date}</Form.Control.Feedback>
                                                        ) : null}
                                                    </div>
                                                </Col>

                                                <Col lg={3} sm={6}>
                                                    <Form.Label htmlFor="choices-payment-status">Payment Status</Form.Label>
                                                    <Form.Select
                                                        name="status"
                                                        id="choices-payment-status"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={
                                                            validation.values.status || ""
                                                        }
                                                    >
                                                        {allstatus.map((item, key) => (
                                                            <React.Fragment key={key}>
                                                                {item.options.map((item, key) => (<option value={item.value} key={key}>{item.label}</option>))}
                                                            </React.Fragment>
                                                        ))}
                                                    </Form.Select>
                                                    {validation.touched.status &&
                                                        validation.errors.status ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.status}</Form.Control.Feedback>
                                                    ) : null}
                                                </Col>

                                                <Col lg={3} sm={6}>
                                                    <div>
                                                        <Form.Label htmlFor="totalamountInput">Total Amount</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            id="totalamountInput"
                                                            placeholder="$0.00"
                                                            readOnly
                                                            value={"$" + Math.round(rate * count + tax + charge - dis)}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>

                                        </div>
                                        <div className="mt-4 pt-2">
                                            <Row>
                                                <Col lg={4} sm={6}>
                                                    <div>
                                                        <Form.Label htmlFor="billingName" className="text-muted text-uppercase fw-semibold">Billing Address</Form.Label>
                                                    </div>
                                                    <div className="mb-2">
                                                        <Form.Control
                                                            type="text"
                                                            id="billingName"
                                                            name="name"
                                                            value={validation.values.name || ""}
                                                            onBlur={validation.handleBlur}
                                                            onChange={validation.handleChange}
                                                            placeholder="Full Name"
                                                            isInvalid={validation.errors.name && validation.touched.name ? true : false}
                                                        />
                                                        {validation.errors.name && validation.touched.name ? (
                                                            <Form.Control.Feedback type="invalid">{validation.errors.name}</Form.Control.Feedback>
                                                        ) : null}
                                                    </div>
                                                    <div className="mb-2">
                                                        <Form.Control
                                                            type="textarea"
                                                            id="billingAddress"
                                                            name="billing_address"
                                                            value={validation.values.billing_address || ""}
                                                            onBlur={validation.handleBlur}
                                                            onChange={validation.handleChange}
                                                            placeholder="Address"
                                                            isInvalid={validation.errors.billing_address && validation.touched.billing_address ? true : false}
                                                        />
                                                        {validation.errors.billing_address && validation.touched.billing_address ? (
                                                            <Form.Control.Feedback type="invalid">{validation.errors.billing_address}</Form.Control.Feedback>
                                                        ) : null}
                                                    </div>
                                                    <div className="mb-2">
                                                        <Form.Control
                                                            type="text"
                                                            data-plugin="cleave-phone"
                                                            id="billingPhoneno"
                                                            name="billing_phone"
                                                            value={validation.values.billing_phone || ""}
                                                            onBlur={validation.handleBlur}
                                                            onChange={validation.handleChange}
                                                            placeholder="(123)456-7890"
                                                            isInvalid={validation.errors.billing_phone && validation.touched.billing_phone ? true : false}
                                                        />
                                                        {validation.errors.billing_phone && validation.touched.billing_phone ? (
                                                            <Form.Control.Feedback type="invalid">{validation.errors.billing_phone}</Form.Control.Feedback>
                                                        ) : null}
                                                    </div>
                                                    <div className="mb-3">
                                                        <Form.Control
                                                            type="text"
                                                            id="billingTaxno"
                                                            name="billing_taxno"
                                                            value={validation.values.billing_taxno || ""}
                                                            onBlur={validation.handleBlur}
                                                            onChange={validation.handleChange}
                                                            placeholder="Tax Number"
                                                            isInvalid={validation.errors.billing_taxno && validation.touched.billing_taxno ? true : false}
                                                        />
                                                        {validation.errors.billing_taxno && validation.touched.billing_taxno ? (
                                                            <Form.Control.Feedback type="invalid">{validation.errors.billing_taxno}</Form.Control.Feedback>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="same" name="same" />
                                                        <label className="form-check-label" htmlFor="same">
                                                            Will your Billing and Shipping address same?
                                                        </label>
                                                    </div>
                                                </Col>

                                                <Col sm={6} className="ms-auto">
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div>
                                                                <label htmlFor="shippingName" className="form-label text-muted text-uppercase fw-semibold">Shipping Address</label>
                                                            </div>
                                                            <div className="mb-2">
                                                                <Form.Control
                                                                    type="text"
                                                                    id="shippingName"
                                                                    name="shipping_name"
                                                                    value={validation.values.shipping_name || ""}
                                                                    onBlur={validation.handleBlur}
                                                                    onChange={validation.handleChange}
                                                                    placeholder="Full Name"
                                                                    isInvalid={validation.errors.shipping_name && validation.touched.shipping_name ? true : false}
                                                                />
                                                                {validation.errors.shipping_name && validation.touched.shipping_name ? (
                                                                    <Form.Control.Feedback type="invalid">{validation.errors.shipping_name}</Form.Control.Feedback>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-2">
                                                                <Form.Control
                                                                    type="textarea"
                                                                    id="shippingAddress"
                                                                    name="shipping_address"
                                                                    value={validation.values.shipping_address || ""}
                                                                    onBlur={validation.handleBlur}
                                                                    onChange={validation.handleChange}
                                                                    placeholder="Address"
                                                                    isInvalid={validation.errors.shipping_address && validation.touched.shipping_address ? true : false}
                                                                />
                                                                {validation.errors.shipping_address && validation.touched.shipping_address ? (
                                                                    <Form.Control.Feedback type="invalid">{validation.errors.shipping_address}</Form.Control.Feedback>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-2">
                                                                <Form.Control
                                                                    type="text"
                                                                    data-plugin="cleave-phone"
                                                                    id="shippingPhoneno"
                                                                    name="shipping_phone"
                                                                    value={validation.values.shipping_phone || ""}
                                                                    onBlur={validation.handleBlur}
                                                                    onChange={validation.handleChange}
                                                                    placeholder="(123)456-7890"
                                                                    isInvalid={validation.errors.shipping_phone && validation.touched.shipping_phone ? true : false}
                                                                />
                                                                {validation.errors.shipping_phone && validation.touched.shipping_phone ? (
                                                                    <Form.Control.Feedback type="invalid">{validation.errors.shipping_phone}</Form.Control.Feedback>
                                                                ) : null}
                                                            </div>
                                                            <div>
                                                                <Form.Control
                                                                    type="text"
                                                                    id="shippingTaxno"
                                                                    placeholder="Tax Number"
                                                                    name="shipping_taxno"
                                                                    value={validation.values.shipping_taxno || ""}
                                                                    onBlur={validation.handleBlur}
                                                                    onChange={validation.handleChange}
                                                                    isInvalid={validation.errors.shipping_taxno && validation.touched.shipping_taxno ? true : false}
                                                                />
                                                                {validation.errors.shipping_taxno && validation.touched.shipping_taxno ? (
                                                                    <Form.Control.Feedback type="invalid">{validation.errors.shipping_taxno}</Form.Control.Feedback>
                                                                ) : null}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="table-responsive mt-4">
                                            <Table className="invoice-table table-borderless table-nowrap mb-0">
                                                <thead className="align-middle">
                                                    <tr className="table-light">
                                                        <th scope="col" style={{ "width": "50px" }}>#</th>
                                                        <th scope="col">
                                                            Product Details
                                                        </th>
                                                        <th scope="col" style={{ "width": "120px" }}>
                                                            <div className="d-flex currency-select input-light align-items-center">
                                                                Rate
                                                                <Select
                                                                    defaultValue={isCurrency}
                                                                    onChange={() => {
                                                                        handleisCurrency(isCurrency);
                                                                    }}
                                                                    options={allcurrency}
                                                                    id="choices-payment-currency"
                                                                    className="form-selectborder-0 bg-light"
                                                                />
                                                            </div>
                                                        </th>
                                                        <th scope="col" style={{ "width": "120px" }}>Quantity</th>
                                                        <th scope="col" className="text-end" style={{ "width": "150px" }}>Amount</th>
                                                        <th scope="col" className="text-end" style={{ "width": "105px" }}></th>
                                                    </tr>
                                                </thead>
                                                <tbody id="newlink">
                                                    <tr id="1" className="product-elem">
                                                        <th scope="row" className="product-id">1</th>
                                                        <td className="text-start">
                                                            <div className="mb-2">
                                                                <Form.Control
                                                                    type="text"
                                                                    id="productName-1"
                                                                    placeholder="Product Name"
                                                                    name="product_name"
                                                                    value={validation.values.product_name || ""}
                                                                    onBlur={validation.handleBlur}
                                                                    onChange={validation.handleChange}
                                                                    isInvalid={validation.errors.product_name && validation.touched.product_name ? true : false}
                                                                />
                                                                {validation.errors.product_name && validation.touched.product_name ? (
                                                                    <Form.Control.Feedback type="invalid">{validation.errors.product_name}</Form.Control.Feedback>
                                                                ) : null}
                                                            </div>
                                                            <Form.Control as="textarea" defaultValue="" id="productDetails-1" rows={2} placeholder="Product Details"></Form.Control>
                                                        </td>
                                                        <td>
                                                            <Form.Control
                                                                type="number"
                                                                placeholder="0.00"
                                                                id="productRate-1" step="0.01"
                                                                onChange={(e: any) => {
                                                                    setRate(e.target.value);
                                                                }}
                                                            />
                                                            <div className="invalid-feedback">
                                                                Please enter a rate
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="input-step">
                                                                <Button type="button" className='minus-btn' onClick={() => setCount(count > 0 ? (count - 1) : count)}>–</Button>
                                                                <Form.Control
                                                                    type="number"
                                                                    className="product-quantity"
                                                                    id="product-qty-1"
                                                                    value={count}
                                                                    readOnly
                                                                />
                                                                <Button type="button" className='plus-btn' onClick={() => setCount(count + 1)}>+</Button>
                                                            </div>
                                                        </td>
                                                        <td className="text-end">
                                                            <div>
                                                                <Form.Control
                                                                    type="text"
                                                                    id="productPrice-1"
                                                                    placeholder="$0.00"
                                                                    value={"$" + rate * count}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="product-removal">
                                                            <Link to="#" className="btn btn-danger">Delete</Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr id="newForm" style={{ "display": "none" }}>
                                                        <td className="d-none" colSpan={5}>
                                                            <p>Add New Form</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={5}>
                                                            <Link to="#" id="add-item" className="btn btn-subtle-secondary fw-medium"><i className="ri-add-fill me-1 align-bottom"></i> Add Item</Link>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-top border-top-dashed mt-2">
                                                        <td colSpan={3}></td>
                                                        <td colSpan={2} className="p-0">
                                                            <Table className="table-borderless table-sm table-nowrap align-middle mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">Sub Total</th>
                                                                        <td style={{ "width": "150px" }}>
                                                                            <Form.Control
                                                                                type="text"
                                                                                id="cart-subtotal"
                                                                                placeholder="$0.00"
                                                                                readOnly
                                                                                value={"$" + rate * count}
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Estimated Tax (18%)</th>
                                                                        <td>
                                                                            <Form.Control
                                                                                type="text"
                                                                                id="cart-tax"
                                                                                placeholder="$0.00"
                                                                                readOnly
                                                                                value={"$" + tax}
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Discount <small className="text-muted">(STEEX30)</small></th>
                                                                        <td>
                                                                            <Form.Control
                                                                                type="text"
                                                                                id="cart-discount"
                                                                                placeholder="$0.00"
                                                                                readOnly
                                                                                value={"$" + dis}
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Shipping Charge</th>
                                                                        <td>
                                                                            <Form.Control
                                                                                type="text"
                                                                                id="cart-shipping"
                                                                                placeholder="$0.00"
                                                                                readOnly
                                                                                value={"$" + charge}
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-top border-top-dashed">
                                                                        <th scope="row">Total Amount</th>
                                                                        <td>
                                                                            <Form.Control
                                                                                type="text"
                                                                                id="cart-total"
                                                                                placeholder="$0.00"
                                                                                readOnly
                                                                                value={"$" + Math.round(rate * count + tax + charge - dis)}
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        </div>
                                        <Row className="mt-3">
                                            <Col lg={4}>
                                                <div className="mb-2">
                                                    <label htmlFor="choices-payment-type" className="form-label text-muted text-uppercase fw-semibold">Payment Details</label>
                                                    <Select
                                                        value={ispaymentDetails}
                                                        onChange={() => {
                                                            handleispaymentDetails(ispaymentDetails);
                                                        }}
                                                        options={paymentdetails}
                                                        name="choices-single-default"
                                                        id="idStatus"
                                                    ></Select>
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control type="text" id="cardholderName" placeholder="Card Holder Name" />
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control type="text" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
                                                </div>
                                                <div>
                                                    <Form.Control type="text" id="amountTotalPay" placeholder="$0.00" readOnly />
                                                </div>
                                            </Col>

                                        </Row>

                                        <div className="mt-4 mb-4">
                                            <Form.Label htmlFor="exampleFormControlTextarea1" className="text-muted text-uppercase fw-semibold">NOTES</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                className="form-control alert alert-danger"
                                                id="exampleFormControlTextarea1"
                                                placeholder="Notes"
                                                rows={2}
                                                defaultValue="All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above."
                                                required>
                                            </Form.Control>
                                        </div>
                                        <div>
                                            <div className="pt-2">
                                                <Form.Control type="text" id="successMsg" placeholder="Enter Postal Code" defaultValue="Congratulations on your recent purchase! It has been our pleasure to serve you, and we hope we see you again soon." required />
                                            </div>
                                            <div className="invoice-signature text-center">
                                                <div className="mb-3 mt-4">
                                                    <input id="sign-img-file-input" type="file" className="sign-img-file-input d-none" />
                                                    <label htmlFor="sign-img-file-input" className="d-block" tabIndex={0}>
                                                        <span className="overflow-hidden mx-auto border border-dashed d-flex align-items-center justify-content-center rounded" style={{ "height": "40px", "width": "150px" }}>
                                                            <img src={invoiceSignatureImg} className="card-logo card-sign-image img-fluid" alt="logo light" />
                                                        </span>
                                                    </label>
                                                </div>
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
                                                <g id="&lt;Group&gt;" style={{ "opacity": ".5" }}>
                                                    <path id="&lt;Path&gt;" style={{ "fill": "var(--tb-primary)" }} d="m-6.6 87.2c73.2 7.4 149.3 10.6 227.3 8.8 206.2-4.7 393.8-42.8 543.5-103.6h-770.8z" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </Card>
                                <div className="hstack gap-2 flex-wrap justify-content-end d-print-none my-4">
                                    <button type="submit" className="btn btn-success"><i className="ri-printer-line align-bottom me-1"></i> Save</button>
                                    <Link to="#" className="btn btn-primary"><i className="ri-download-2-line align-bottom me-1"></i> Download Invoice</Link>
                                    <Link to="#" className="btn btn-danger"><i className="ri-send-plane-fill align-bottom me-1"></i> Send Invoice</Link>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default CreateInvoice
