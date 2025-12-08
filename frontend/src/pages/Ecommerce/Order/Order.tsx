import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Col, Container, Row, Badge, Form, Dropdown, Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import CountUp from 'react-countup';
import moment from "moment";
import * as Yup from "yup";
import BreadCrumb from "Common/BreadCrumb";
import { OrderViewChart } from "./OrderViewChat";
import { order } from "Common/data/orders";
import TableContainer from "Common/TableContainer";
import { DeleteModal } from "Common/DeleteModal";
import { getOrder as onGetOrder, addNewOrder as onAddNewOrder, updateOrder as onUpdateOrder, deleteOrder as onDeleteOrder } from "slices/thunk";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createSelector } from "reselect";
import { useFormik } from "formik";

//img
import user from 'assets/images/users/multi-user.jpg';

const Order = () => {
    document.title = "Orders | Steex - Admin & Dashboard Template";

    const selectOrderList = createSelector(
        (state: any) => state.Ecommerce,
        (ecommerce) => ({
            orderList: ecommerce.orderList
        })
    );

    const { orderList } = useSelector(selectOrderList);

    const [productOrder, setProductOrder] = useState<any>([])
    const [showValue, setShowValue] = useState<any>('Order Date');
    const [selectDate, setSelectDate] = useState<any>(0);
    const [addorder, setAddorder] = useState<boolean>(false);
    const [delet, setDelet] = useState<any>('');
    const [show, setShow] = useState<boolean>(false);
    const [editOrder, setEditOrder] = useState<any>([]);
    const [editshow, setEditshow] = useState<boolean>(false);
    const [imgSrc, setImgSrc] = useState<any>('');
    const dispatch = useDispatch<any>();

    //add order modal
    const handleAddOrderShow = () => setAddorder(true);
    const handleAddOrderClose = () => {
        setAddorder(false);
        setEditshow(false);
        setEditOrder(null);
        setImgSrc(null);
    };

    //Edit modal
    // const handleEditOrderClose = () => setEditshow(false);
    const handleEditShow = useCallback((arg: any) => {
        const order = arg;
        setEditshow(true);
        handleAddOrderShow();
        setEditOrder({
            id: order?.id,
            customer: order?.customer,
            product: order?.product,
            orderdate: order?.orderdate,
            name: order?.name,
            img: order?.img,
            ratings: order?.ratings,
            price: order?.price,
            paymethod: order?.paymethod,
            deliverystatus: order?.deliverystatus,
        });
        setImgSrc([order?.img])
    }, []);

    //delete modal
    const handleCloseDelete = () => setShow(false);
    const handleDeleteShow = useCallback((order: any) => {
        setShow(true);
        setDelet(order);
    }, []);
    //delete modal
    const deleteModalFunction = () => {
        dispatch(onDeleteOrder(delet.id))
        handleCloseDelete();
    }

    //search
    const handleSearch = (event: any) => {
        let search = event.target.value;
        if (search) {
            // search = search?.toLowerCase();
            setProductOrder(orderList.filter((data: any) => data.product?.toLowerCase().includes(search)));
        } else {
            setProductOrder(orderList);
        }
    }

    //Dropdown     
    const handleData = (event: any) => {
        setShowValue(event);
    }

    useEffect(() => {
        dispatch(onGetOrder())
    }, [dispatch]);

    useEffect(() => {
        setProductOrder(orderList)
    }, [orderList])

    //columns
    const columns = useMemo(
        () => [
            {
                Header: (
                    <Form.Check>
                        <Form.Check.Input type="checkbox" value="option" id="checkAll" />
                        <Form.Check.Label htmlFor="checkAll"></Form.Check.Label>
                    </Form.Check>
                ),
                Cell: (cell: any) => {
                    return (
                        <Form.Check.Input
                            type="checkbox"
                            className="orderCheckBox"
                        />
                    )
                },
                id: "#",
                Filter: false,
                isSortable: false
            },
            {
                Header: "Order ID",
                accessor: "id",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <Link to={"/apps-ecommerce-order-overview"} className="fw-medium link-primary">#TBS25000{cell.row.original.id}</Link>
                    )
                }
            },
            {
                Header: "Order Date",
                accessor: "order_date",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    const date = moment(cell.row.original.orderdate).format("DD MMM ,YYYY");
                    return (
                        <span className="order_date">{date}</span>
                    )
                }
            },
            {
                Header: "Delivery Date",
                accessor: "delivery_date",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    const deliveryDate = moment(new Date()).format("DD MMMM ,YYYY");
                    return (
                        <span className="delivery_date">{cell.row.original.deliverydate ? cell.row.original.deliverydate : deliveryDate}</span>
                    )
                }
            },
            {
                Header: "Products",
                accessor: "product",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span className="products">{cell.row.original.product}</span>
                    )
                }
            },
            {
                Header: "Customers",
                accessor: "customer",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span className="customer">{cell.row.original.customer}</span>
                    )
                }
            },
            {
                Header: "Shop",
                accessor: "name",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <Link to="#" className="text-reset">
                            <img src={cell.row.original.img} alt="" className="avatar-xxs rounded-circle me-1 shop-logo" />
                            <span className="shop-name">{cell.row.original.name}</span></Link>
                    )
                }
            },
            {
                Header: "Payment Method",
                accessor: "paymethod",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span className="payment_method">{cell.row.original.paymethod}</span>
                    )
                }
            },
            {
                Header: "Amount",
                accessor: "price",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (<span className="fw-medium" >${cell.row.original.price}</span >)
                }
            },
            {
                Header: "Rating",
                accessor: "ratings",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <h5 className="fs-md fw-medium mb-0">{cell.row.original.ratings}</h5>
                    )
                }
            },
            {
                Header: "Delivery Status",
                accessor: (cell: any) => {
                    switch (cell?.deliverystatus) {
                        case "New":
                            return <Badge bg="primary-subtle" text="primary">{cell.deliverystatus}</Badge>;
                        case "Shipping":
                            return <Badge bg="info-subtle" text="info">{cell.deliverystatus}</Badge>;
                        case "Delivered":
                            return <Badge bg="success-subtle" text="success">{cell.deliverystatus}</Badge>;
                        case "Pending":
                            return <Badge bg="warning-subtle" text="warning">{cell.deliverystatus}</Badge>;
                        default:
                            return <Badge bg="danger-subtle" text="danger">{cell.deliverystatus}</Badge>;
                    }
                },
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Action",
                Filter: false,
                isSortable: false,
                Cell: (cell: any) => {
                    return (
                        <ul className="d-flex gap-2 list-unstyled mb-0">
                            <li>
                                <Link to={"/apps-ecommerce-order-overview"} className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"
                                    onClick={() => {
                                        const orderDate: any = cell.row.original;
                                        handleEditShow(orderDate)
                                    }}
                                ><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"
                                    onClick={() => {
                                        const orderDate: any = cell.row.original;
                                        handleDeleteShow(orderDate)
                                    }}><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
                    )
                }
            },
        ], [handleEditShow, handleDeleteShow]
    )

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

    // validation
    const formik: any = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: (editOrder && editOrder?.id) || '',
            customer: (editOrder && editOrder?.customer) || '',
            product: (editOrder && editOrder?.product) || '',
            orderdate: (editOrder && editOrder?.orderdate) || '',
            name: (editOrder && editOrder?.name) || '',
            img: (editOrder && editOrder?.img) || '',
            ratings: (editOrder && editOrder?.ratings) || '',
            price: (editOrder && editOrder?.price) || '',
            paymethod: (editOrder && editOrder?.paymethod) || '',
            deliverystatus: (editOrder && editOrder?.deliverystatus) || ''
        },
        validationSchema: Yup.object({
            customer: Yup.string().required("Please Enter Your Customer Name"),
            product: Yup.string().required("Please Enter Your Product Name"),
            orderdate: Yup.string().required("Please Enter Your Order Date"),
            name: Yup.string().required("Please Enter Your Shop Name"),
            img: Yup.mixed().required("Please Enter Your Product Amount"),
            ratings: Yup.mixed().required("Please Enter Your Product Rating"),
            price: Yup.string().required("Please Enter Your Product Amount"),
            paymethod: Yup.string().required("Please Enter Your Pay Method"),
            deliverystatus: Yup.string().required("Please Enter Your Pay Method"),
        }),
        onSubmit: (values: any) => {
            if (editshow) {
                const updateOrder = {
                    id: values?.id,
                    customer: values?.customer,
                    product: values?.product,
                    orderdate: values?.orderdate,
                    name: values?.name,
                    img: values?.img,
                    ratings: values?.ratings,
                    price: values?.price,
                    paymethod: values?.paymethod,
                    deliverystatus: values?.deliverystatus
                }
                dispatch(onUpdateOrder(updateOrder))
                formik.resetForm();
            } else {
                const newOrder = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    customer: values['customer'],
                    product: values['product'],
                    orderdate: values['orderdate'],
                    name: values['name'],
                    img: values['img'],
                    ratings: values['ratings'],
                    price: values['price'],
                    paymethod: values['paymethod'],
                    deliverystatus: values['deliverystatus'],
                }
                dispatch(onAddNewOrder(newOrder));
                formik.resetForm();

            }
            if (values === null) {
                handleAddOrderShow();
            } else {
                setEditshow(false);
                setEditOrder(null);
                handleAddOrderClose();
            }
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <BreadCrumb title="Orders" pageTitle="Ecommerce" />
                    <Row>
                        <Col lg={12}>
                            <Card >
                                <Card.Body className="pb-0 mb-lg-n4">
                                    <div className="d-flex z-1 position-relative">
                                        <div className="flex-shrink-0">
                                            <Flatpickr
                                                className="form-control form-control-sm"
                                                data-range-date={true}
                                                data-default-date="01 Feb 2023 to 28 Feb 2023"
                                                value={selectDate}
                                                options={{
                                                    mode: "range",
                                                    dateFormat: "d M, Y",
                                                }}
                                                onChange={(date: any) => setSelectDate(date)} />
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="pt-0">
                                    <div id="line_chart_basic" dir="ltr">
                                        <OrderViewChart dataColors='["--tb-primary", "--tb-secondary"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
                        {
                            (order || [])?.map((item: any) => {
                                return (
                                    <Col key={item.id}>
                                        <Card className={`border-bottom border-3 card-animate border-${item.border}`}>
                                            <Card.Body>
                                                <Badge className={`bg-${item.color}-subtle text-${item.color} float-end`}><i className={`${item.icone} align-middle me-1`}></i>{item.rat}</Badge>
                                                <h4 className="mb-4">
                                                    <CountUp start={0} end={item.target} separator="," />
                                                </h4>
                                                <p className="text-muted fw-medium text-uppercase mb-0">{item.title}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card id="orderList">
                                <Card.Header>
                                    <Row className="align-items-center gy-3">
                                        <Col lg={3} md={6}>
                                            <div className="search-box">
                                                <Form.Control type="text" className="search" placeholder="Search for Orders ..." onChange={(e: any) => handleSearch(e)} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col className="col-md-auto ms-md-auto">
                                            <div className="d-flex flex-wrap align-items-center gap-2">
                                                <Button className="btn btn-subtle-danger d-none" id="remove-actions">
                                                    <i className="ri-delete-bin-2-line"></i></Button>
                                                <Dropdown style={{ cursor: "pointer" }}>
                                                    <Dropdown.Toggle as="a" bsPrefix="text-reset" id="dropdown-basic">
                                                        <span className="text-muted dropdown-title">{showValue}<i className="mdi mdi-chevron-down ms-1"></i></span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <Dropdown.Item href="#" className="sort" onClick={() => handleData("orderdate")}>Order Date</Dropdown.Item>
                                                        <Dropdown.Item href="#" className="sort" onClick={() => handleData("Order ID")}>Order ID</Dropdown.Item>
                                                        <Dropdown.Item href="#" className="sort" onClick={() => handleData("price")}>Amount</Dropdown.Item>
                                                        <Dropdown.Item href="#" className="sort" onClick={() => handleData("deliverystatus")}>Status</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Button type="button" variant="primary" className="add-btn ms-auto" onClick={handleAddOrderShow} ><i className="bi bi-plus-circle align-baseline me-1"></i> Add Order</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    {
                                        productOrder && productOrder.length > 0 ?
                                            <TableContainer
                                                isPagination={true}
                                                columns={columns}
                                                data={productOrder || []}
                                                customPageSize={10}
                                                tableClass="table-borderless table-centered align-middle table-nowrap mb-0"
                                                theadClass="text-muted table-light"
                                                isBordered={false}
                                                PaginationClassName="d-flex justify-content-center justify-content-sm-end mt-2"
                                                SearchPlaceholder="Search Orders....."
                                            /> :
                                            <div className="noresult">
                                                <div className="text-center py-4">
                                                    <div className="avatar-md mx-auto mb-4">
                                                        <div className="avatar-title bg-light text-primary rounded-circle fs-4xl">
                                                            <i className="bi bi-search"></i>
                                                        </div>
                                                    </div>
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted mb-0">We've searched more than 150+ products We did not find any products for you search.</p>
                                                </div>
                                            </div>
                                    }

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <DeleteModal show={show} handleClose={handleCloseDelete} deleteModalFunction={deleteModalFunction} />

            <Modal show={addorder} onHide={handleAddOrderClose} centered>
                <Modal.Header className="bg-light p-3" closeButton>
                    <Modal.Title id="exampleModalLabel">{editshow ? "Edit Order" : "Add Order"} </Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label htmlFor="customername-field">Customer Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="customer"
                                placeholder="Enter name"
                                name="customer"
                                value={formik.values.customer || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.customer}
                            />
                            {formik.errors.customer && formik.touched.customer ? (
                                <Form.Control.Feedback type="invalid"> {formik.errors.customer} </Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="productname-field" >Product</Form.Label>
                            <Form.Select
                                className="form-control"
                                name="product"
                                id="product"
                                value={formik.values.product || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.product}
                            >
                                <option value="">Product</option>
                                <option value="Cotton collar t-shirts for men">Cotton collar t-shirts for men</option>
                                <option value="Like style travel black handbag">Like style travel black handbag</option>
                                <option value="Fossil gen 5E smart watch">Fossil gen 5E smart watch</option>
                                <option value="Super bass bluetooth wireless headphone">Super bass bluetooth wireless headphone</option>
                                <option value="Willage volleyball ball size 4">Willage volleyball ball size 4</option>
                                <option value="Branded T-Shirts">Branded T-Shirts</option>
                                <option value="Flip-Flops and house slippers">Flip-Flops and house slippers</option>
                                <option value="Jeans blue men boxer">Jeans blue men boxer</option>
                                <option value="MAG back to the future shoes">MAG back to the future shoes</option>
                                <option value="Super bass bluetooth wireless headphone">Super bass bluetooth wireless headphone</option>
                            </Form.Select>
                            {formik.errors.product && formik.touched.product ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.product}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="date-field">Order Date</Form.Label>
                                    <Flatpickr
                                        className="form-control"
                                        id="orderdate"
                                        name="orderdate"
                                        placeholder="Select date"
                                        options={{
                                            mode: "single",
                                            dateFormat: 'd M, Y',
                                        }}
                                        onChange={(orderdate: any) => formik.setFieldValue("orderdate", moment(orderdate[0]).format("DD MMMM ,YYYY"))}
                                        value={formik.values.orderdate || ''}
                                    />
                                    {formik.errors.orderdate && formik.touched.orderdate ? (
                                        <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.orderdate}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="shopName-input">Shop</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="name"
                                        placeholder="Enter shop name"
                                        name="name"
                                        value={formik.values.name || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.name}
                                    />
                                    {formik.errors.name && formik.touched.name ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.name} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Form.Label className="mb-3">Shop logo</Form.Label>
                                <div className="text-center mb-3">
                                    <div className="position-relative d-inline-block">
                                        <div className="position-absolute top-100 start-100 translate-middle">
                                            <OverlayTrigger
                                                placement="right"
                                                overlay={
                                                    <Tooltip id="tooltip-right"> Select company logo</Tooltip>
                                                }>
                                                <label htmlFor="img" className="mb-0">
                                                    <span className="avatar-xs d-inline-block">
                                                        <span className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                            <i className="ri-image-fill"></i>
                                                        </span>
                                                    </span>
                                                </label>
                                            </OverlayTrigger>
                                            <Form.Control
                                                className="d-none"
                                                id="img"
                                                type="file"
                                                accept="image/png, image/gif, image/jpeg"
                                                name="img"
                                                onChange={handleImageChange}
                                            />

                                        </div>
                                        <div className="avatar-lg">
                                            <div className="avatar-title bg-light rounded-3">
                                                <img src={imgSrc || user} alt="" id="companyLogo-img" className="avatar-md h-auto rounded-3 object-fit-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {formik.errors.img && formik.touched.img ? (
                                    <Form.Control.Feedback type="invalid" className="d-block"> {formik.errors.img} </Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>
                        <Row className="gy-4 mb-3">
                            <Col md={4}>
                                <div>
                                    <Form.Label htmlFor="amount-field">Amount</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="price"
                                        placeholder="Total amount"
                                        name="price"
                                        value={formik.values.price || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.price}
                                    />
                                    {formik.errors.price && formik.touched.price ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.price} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <Form.Label htmlFor="amount-field">Rating</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="ratings"
                                        placeholder="Total rating"
                                        name="ratings"
                                        value={formik.values.ratings || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.ratings}
                                    />
                                    {formik.errors.ratings && formik.touched.ratings ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.ratings} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <Form.Label htmlFor="payment-field">Payment Method</Form.Label>
                                    <Form.Select
                                        className="form-control"
                                        id="paymethod"
                                        name="paymethod"
                                        value={formik.values.paymethod || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.paymethod}
                                    >
                                        <option value="">Payment Method</option>
                                        <option value="Mastercard">Mastercard</option>
                                        <option value="Visa">Visa</option>
                                        <option value="COD">COD</option>
                                        <option value="Paypal">Paypal</option>
                                    </Form.Select>
                                    {formik.errors.paymethod && formik.touched.paymethod ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.paymethod} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <Form.Label htmlFor="delivered-status">Delivery Status</Form.Label>
                            <Form.Select
                                className="form-control"
                                id="deliverystatus"
                                name="deliverystatus"
                                value={formik.values.deliverystatus || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.deliverystatus}>
                                <option value="">Delivery Status</option>
                                <option value="New">New</option>
                                <option value="Pending">Pending</option>
                                <option value="Out of Delivered">Out of Delivered</option>
                                <option value="Shipping">Shipping</option>
                                <option value="Delivered">Delivered</option>
                            </Form.Select>
                            {formik.errors.deliverystatus && formik.touched.deliverystatus ? (
                                <Form.Control.Feedback type="invalid"> {formik.errors.deliverystatus} </Form.Control.Feedback>
                            ) : null}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="hstack gap-2 justify-content-end">
                            <Button variant="light" onClick={handleAddOrderClose}> Close </Button>
                            <Button variant="success" type="submit"> {editshow ? "Edit Order" : "Add Order "}</Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>


            <ToastContainer />
        </React.Fragment>
    );
}

export default Order;