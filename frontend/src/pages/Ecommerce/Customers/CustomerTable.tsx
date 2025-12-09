import React, { useState, useMemo, useEffect } from 'react';
import { Form, Button, Row, Col, Card, Table, Dropdown, Badge, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { DeleteModal } from 'Common/DeleteModal';
import PaginationFile from 'Common/PaginationFile';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer as onGetCustomer, updateCustomer as onUpdateCustomer, deleteCustomer as onDeleteCustomer } from "slices/thunk";
import { createSelector } from 'reselect';
import * as Yup from "yup";
import { useFormik } from "formik";
import Flatpickr from 'react-flatpickr';
import moment from "moment";
import { PatternFormat } from "react-number-format";

const CustomerTable = () => {
    const dispatch = useDispatch<any>();

    const selectProductGrid = createSelector(
        (state: any) => state.Ecommerce,
        (ecommerce) => ({
            customerlist: ecommerce.customer
        })
    );

    const { customerlist } = useSelector(selectProductGrid);
    const [imgSrc, setImgSrc] = useState<any>('');
    const [deletecustomer, setDeletecustomer] = useState(false);
    const [editcustomer, setEditcustomer] = useState(false);
    const [edit, setEdit] = useState<any>();
    const [delet, setDelet] = useState<any>();
    const [dateRange, setDateRange] = useState()
    const [pagination, setPagination] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>();
    const perPageData = 10;

    //delete customer modal
    const handledeleteClose = () => setDeletecustomer(false);
    const handleDeleteShow = (item: any) => {
        setDeletecustomer(true);
        setDelet(item);
    };
    const deleteModalFunction = () => {
        handledeleteClose();
        dispatch(onDeleteCustomer(delet))
    };

    const handleEditClose = () => setEditcustomer(false);

    //edit customer modal
    const handleEditShow = (item: any) => {
        let customers = item;
        setEditcustomer(true);
        setEdit({
            id: customers?.id,
            name: customers?.name,
            email: customers?.email,
            phone: customers?.phone,
            date: customers?.date,
            status: customers?.status,
            img: customers?.img,
        });
    };

    //search
    const handleSearchChange = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase()
            setCurrentpages(customerlist.filter((data: any) => (data.name.toLowerCase().includes(search))));
            setPagination(false)
        } else {
            setCurrentpages(currentdata);
            setPagination(true)
        }
    };

    //select
    const handleSelect = (ele: any) => {
        let event = ele?.target.value;
        if (event) {
            setCurrentpages(customerlist?.filter((select: any) => select?.status === event || event === 'all'));
            setPagination(false);
        } else {
            setCurrentpages(currentdata);
            setPagination(true)
        }
    }

    //Flatpickr 
    const handleDateChange = (selectedDates: any, dateStr: any) => {
        setDateRange(dateStr);
    };

    //pagination
    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };
    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;
    const currentdata = useMemo(() => customerlist.slice(indexOfFirst, indexOfLast), [customerlist, indexOfFirst, indexOfLast])
    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, currentdata]);

    const pageNumbers: any = [];
    for (let i = 1; i <= Math.ceil(customerlist?.length / perPageData); i++) {
        pageNumbers.push(i);
    }
    const handleprevPage = () => {
        let prevPage = currentPage - 1;
        setCurrentPage(prevPage);
    };
    const handlenextPage = () => {
        let nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };
    useEffect(() => {
        if (pageNumbers.length && pageNumbers.length < currentPage) {
            setCurrentPage(pageNumbers.length)
        }
    }, [currentPage, pageNumbers.length]);

    //get customer data
    useEffect(() => {
        dispatch(onGetCustomer());
    }, [dispatch]);

    useEffect(() => {
        setCurrentpages(customerlist)
    }, [customerlist])

    const formik: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
        initialValues: {
            id: (edit && edit?.id),
            name: (edit && edit?.name) || '',
            email: (edit && edit?.email) || '',
            phone: (edit && edit?.phone) || '',
            date: (edit && edit?.date) || '',
            status: (edit && edit?.status) || '',
            img: (edit && edit?.img) || '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Name"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            phone: Yup.string().matches(/^\+\(\d{3}\)\s\d{5}\s\d{5}$/).required("Please Enter Your Contact No"),
            status: Yup.string().required("Please Enter Your Status"),
            date: Yup.string().required("Please Enter Your Date"),
        }),
        onSubmit: (values: any) => {
            const UpdateCustomer = {
                id: values?.id,
                name: values?.name,
                email: values?.email,
                phone: values?.phone,
                date: values?.date,
                status: values?.status,
                img: values?.img
            }
            dispatch(onUpdateCustomer(UpdateCustomer))
            formik.resetForm();
            if (UpdateCustomer === null) {
                setEditcustomer(true);
            } else {
                handleEditClose();
            }
        }
    });

    const handleImageChange = (event: any) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            formik.setFieldValue('img', reader.result);
            setImgSrc(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <React.Fragment>
            <Col xxl={8}>
                <Card>
                    <Card.Body>
                        <Row className="gy-3">
                            <Col xl={4}>
                                <div className="search-box">
                                    <Form.Control
                                        type="text"
                                        className=" search"
                                        placeholder="Search customer, email etc..."
                                        onChange={(e: any) => handleSearchChange(e)}
                                    />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </Col>
                            <Col xl={3} md={4}>
                                <div>
                                    <Form.Select
                                        className="form-control"
                                        onChange={handleSelect}>
                                        <option value="all">All Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Block">Block</option>
                                        <option value="Unactive">Unactive</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col xl={3} md={4}>
                                <Flatpickr
                                    className="form-control"
                                    id="datepicker-range"
                                    placeholder="Select date"
                                    options={{
                                        // mode: "range",
                                        mode: 'single',
                                        dateFormat: 'd M, Y',
                                    }}
                                    value={dateRange}
                                    onChange={handleDateChange}
                                />
                            </Col>
                            <Col xl={2} md={4}>
                                <Button variant='subtle-primary' className="w-100" >
                                    <i className="bi bi-funnel align-baseline me-1"></i> Filter
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <div className="table-responsive table-card">
                            <Table className="align-middle table-nowrap">
                                <tbody className="list">
                                    {
                                        (currentpages || [])?.map((item: any) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td className="id d-none"><Link to="#" className="fw-medium link-primary">13</Link></td>
                                                    <td className="customer"><div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <div>
                                                                <img className="avatar-xs rounded-circle customer-image-elem" alt="" src={item.img} />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-base mb-0">
                                                                <Link to="#" className="text-reset customer-name-elem">{item.name}</Link>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    </td>
                                                    <td className="email">{item.email}</td>
                                                    <td className="contact">{item.phone}</td>
                                                    <td className="date">{item.date}</td>
                                                    <td className="status">
                                                        {
                                                            item.status === "Active" ?
                                                                <Badge className="bg-success-subtle text-success">{item.status}</Badge>
                                                                :
                                                                item.status === "Unactive" ?
                                                                    <Badge className="bg-secondary-subtle text-secondary">{item.status}</Badge>
                                                                    :
                                                                    <Badge className="bg-danger-subtle text-danger">{item.status}</Badge>
                                                        }
                                                    </td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-subtle-secondary btn-sm dropdown arrow-none">
                                                                <i className="ri-more-fill align-middle"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu as="ul">
                                                                <Dropdown.Item href="#" className="view-item-btn"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</Dropdown.Item>
                                                                <Dropdown.Item href="#" className="edit-item-btn" onClick={() => handleEditShow(item)}><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#" className="remove-item-btn" onClick={() => handleDeleteShow(item.id)} ><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                        <PaginationFile
                            className="mt-4"
                            currentpages={currentpages}
                            pagination={pagination}
                            perPageData={perPageData}
                            currentPage={currentPage}
                            pageNumbers={pageNumbers}
                            handlenextPage={handlenextPage}
                            handleClick={handleClick}
                            handleprevPage={handleprevPage}
                            estateList={customerlist}
                        />
                    </Card.Body>
                </Card>
            </Col>

            <Modal show={editcustomer} onHide={handleEditClose} centered>
                <Modal.Header className="bg-light p-3" closeButton>
                    <Modal.Title id="exampleModalLabel">Edit Customer</Modal.Title>
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
                                            <Tooltip id={`tooltip-$"right"`}>Select customer photo</Tooltip>
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
                                        name="img"
                                        onChange={handleImageChange} />
                                    {formik.errors.img && formik.touched.img ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.img} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                                <div className="avatar-lg">
                                    <div className="avatar-title bg-light rounded-3">
                                        <img src={imgSrc || formik.values.img} alt="" id="customer-img" className="avatar-md h-auto rounded-3 object-fit-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="customername-field">Customer Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter customer name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.name} />
                            {formik.errors.name && formik.touched.name ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="email-field">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.email} />
                            {formik.errors.email && formik.touched.email ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="contact-field">Contact no.</Form.Label>
                            <PatternFormat
                                className="form-control"
                                displayType="input"
                                id="phone"
                                placeholder="Enter contact no"
                                name="phone"
                                format="+(###) ##### #####"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.phone && formik.touched.phone ? (
                                <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.phone}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="date-field">Joining Date</Form.Label>
                            <Flatpickr
                                className="form-control"
                                id="date"
                                name="date"
                                placeholder="Select date"
                                options={{
                                    mode: "single",
                                    dateFormat: 'd M, Y',
                                }}
                                value={formik.values.date || ''}
                                onChange={(date: any) => formik.setFieldValue("date", moment(date[0]).format("DD MMMM ,YYYY"))}
                            />
                            {formik.errors.date && formik.touched.date ? (
                                <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.date}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div>
                            <Form.Label htmlFor="status-field" >Status</Form.Label>
                            <Form.Select
                                className="form-control"
                                id="status-field"
                                name="status"
                                value={formik.values.status}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.status}
                            >
                                <option value="Active">Active</option>
                                <option value="Block">Block</option>
                                <option value="Unactive">Unactive</option>
                            </Form.Select>
                            {formik.errors.status && formik.touched.status ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.status}</Form.Control.Feedback>
                            ) : null}
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{ display: "block" }}>
                        <div className="hstack gap-2 justify-content-end">
                            <Button variant="light" type="button" onClick={handleEditClose}>Close</Button>
                            <Button variant="success" type="submit" id="add-btn">Edit Customer</Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={deletecustomer} handleClose={handledeleteClose} deleteModalFunction={deleteModalFunction} />
        </React.Fragment >
    );
}

export default CustomerTable;