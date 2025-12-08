import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Card, Col, Button, Row, Form, Badge, Dropdown, Modal, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { portfoliodata } from "Common/data/sellers";
import PortfolioChart from "./PortfolioChart";
import TableContainer from "Common/TableContainer";
import { DeleteModal } from "Common/DeleteModal";
import Dropzone from "react-dropzone";
import {
    getProducts as onGetProducts,
    addNewProduct as onAddNewProduct,
    updateProduct as onUpdateProduct,
    deleteProducts as onDeleteProducts
} from "slices/thunk";
import moment from "moment";
import { createSelector } from "reselect";
import { useFormik } from "formik";
import * as Yup from "yup";

const PortfolioOverview = () => {
    const dispatch = useDispatch<any>();

    const selectSellerOverview = createSelector(
        (state: any) => state.Ecommerce,
        (ecommerce) => ({
            sellerOverview: ecommerce.productList
        })
    );

    const { sellerOverview } = useSelector(selectSellerOverview);

    const [productTable, setProductTable] = useState<any>();
    const [editshow, setEditshow] = useState<boolean>(false);
    const [addshow, setAddshow] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [edit, setEdit] = useState<any>();
    const [id, setId] = useState<any>();
    const [selectfeils, setSelectfeils] = useState<any>([]);

    //add modal 
    const handleAddShow = () => setAddshow(true);
    const handleAddClose = () => {
        setAddshow(false);
        setEditshow(false);
        setEdit(null);
        setSelectfeils(null);
    };

    //Edit modal 
    const handleEditShow = useCallback((value: any) => {
        let overview = value;
        setEditshow(!editshow);
        handleAddShow();
        setEdit({
            id: overview?.id,
            title: overview?.title,
            img: overview?.img,
            category: overview?.category,
            price: overview?.price,
            stock: overview?.stock,
            orders: overview?.orders,
            ratings: overview?.ratings
        })
        setSelectfeils([overview?.img])
    }, [editshow]);

    //delete modal
    const handleClose = () => setShow(false);
    const handleDeleteShow = useCallback((value: any) => {
        setShow(true);
        setId(value.id);
    }, []);

    const deleteModalFunction = () => {
        handleClose();
        dispatch(onDeleteProducts(id));
    }


    const handlesearchdata = (event: any) => {
        let search = event.target.value;
        if (search) {
            search = search?.toLowerCase()
            setProductTable(sellerOverview.filter((data: any) => data.title?.toLowerCase().includes(search)));

        } else {
            setProductTable(sellerOverview);
        }
    }

    useEffect(() => {
        setProductTable(sellerOverview);
    }, [sellerOverview]);

    useEffect(() => {
        dispatch(onGetProducts())
    }, [dispatch])

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
                        <Form.Check.Input
                            type="checkbox"
                            className="orderCheckBox "
                        />
                    )
                },
                id: "#",
                Filter: false,
                isSortable: false,
            },
            {
                Header: "Products",
                accessor: "title",
                Cell: (cell: any) => {
                    return (
                        <div className="d-flex align-items-center">
                            <div className="avatar-xs bg-light rounded p-1 me-2">
                                <img src={cell.row.original.img?.priview} alt={cell.row.original.img_alt} className="img-fluid d-block product-img" />
                            </div>
                            <div>
                                <h6 className="mb-0">
                                    <Link to={"/apps-ecommerce-product-details"} className="text-reset text-capitalize product-title">{cell.row.original.title}</Link>
                                </h6>
                            </div>
                        </div>
                    )
                },
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Category",
                accessor: "category",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Stock",
                accessor: "stock",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Price",
                Cell: (cell: any) => {
                    return (<span>${cell.row.original.price}</span>)
                },
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Orders",
                accessor: "orders",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (<span>{cell.row.original.orders ? cell.row.original.orders : "--"}</span>)
                },
            },
            {
                Header: "Rating",
                Cell: (cell: any) => {
                    return (
                        <Badge bg="warning-subtle" text="warning">
                            <i className="bi bi-star-fill align-baseline me-1"></i>
                            <span className="rate">{cell.row.original.ratings}</span>
                        </Badge>
                    )
                },
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Published",
                accessor: "publish",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    const publishDate = moment(new Date()).format("DD MMMM ,YYYY")
                    return (
                        <span>{cell.row.original.publish ? cell.row.original.publish : publishDate}</span>
                    )
                },
            },
            {
                Header: "Action",
                Cell: (cell: any) => {
                    return (
                        <Dropdown className=" position-static">
                            <Dropdown.Toggle bsPrefix="btn btn-subtle-secondary btn-sm btn-icon" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-three-dots-vertical"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu as="ul">
                                <Dropdown.Item href="#"><i className="ph-eye align-middle me-1"></i> View</Dropdown.Item>
                                <Dropdown.Item className="edit-item-btn" href="#" onClick={() => {
                                    const productData: any = cell.row.original;
                                    handleEditShow(productData);
                                }
                                }><i className="ph-pencil align-middle me-1"></i> Edit</Dropdown.Item>
                                <Dropdown.Item className="remove-item-btn" href="#" onClick={() => {
                                    const productData: any = cell.row.original;
                                    handleDeleteShow(productData);
                                }} ><i className="ph-trash align-middle me-1"></i> Remove</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                },
                Filter: false,
                isSortable: false,
            },
        ],
        [handleEditShow, handleDeleteShow]
    )

    const handleAcceptfiles = (files: any) => {
        const newImages = files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
            })
        })
        setSelectfeils([...selectfeils, ...newImages]);
    }

    const formik: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
        initialValues: {
            id: (edit && edit.id) || '',
            title: (edit && edit.title) || '',
            img: (edit && edit.img) || '',
            category: (edit && edit.category) || '',
            stock: (edit && edit.stock) || '',
            price: (edit && edit.price) || '',
            orders: (edit && edit.orders) || '',
            ratings: (edit && edit.ratings) || ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Product Name"),
            category: Yup.string().required("Please Enter Your Product Category"),
            stock: Yup.string().required("Please Enter Your Product Stocks"),
            price: Yup.string().required("Please Enter Your Product Price"),
            orders: Yup.string().required("Please Enter Your Orders"),
            ratings: Yup.string().max(4).required("Please Enter Your Rating"),
        }),
        onSubmit: (values: any) => {
            if (editshow) {
                const updateProduct = {
                    id: values.id,
                    title: values.title,
                    img: values.img,
                    category: values.category,
                    stock: values.stock,
                    price: values.price,
                    orders: values.orders,
                    ratings: values.ratings
                };
                dispatch(onUpdateProduct(updateProduct));
                formik.resetForm();
            } else {
                const newProduct = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    title: values["title"],
                    img: values["img"],
                    category: values["category"],
                    price: values["price"],
                    stock: values["stock"],
                    orders: values["orders"],
                    ratings: values["ratings"]
                }
                dispatch(onAddNewProduct(newProduct));
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
            <Col xxl={9}>
                <Card>
                    <Card.Body className="d-flex align-items-center gap-2">
                        <Card.Title className="flex-grow-1 mb-0">Portfolio Overview</Card.Title>
                        <div className="flex-shrink-0 d-flex gap-1">
                            <Button variant="subtle-secondary" size="sm">
                                ALL
                            </Button>
                            <Button variant="subtle-secondary" size="sm">
                                1M
                            </Button>
                            <Button variant="subtle-secondary" size="sm">
                                6M
                            </Button>
                            <Button variant="subtle-primary" size="sm">
                                1Y
                            </Button>
                        </div>
                    </Card.Body>
                    <div className="border border-start-0 border-end-0">
                        <Row className="g-0">
                            {
                                (portfoliodata || [])?.map((item: any) => {
                                    return (
                                        <Col lg={3} md={6} key={item.id}>
                                            <Card.Body className="text-center border-end-md border-bottom-lg-0 border-bottom">
                                                <h5 className={`mb-2 ${item.color || ''}`}><span className="counter-value" >{item.num}</span></h5>
                                                <p className="text-muted mb-0">{item.title}</p>
                                            </Card.Body>
                                        </Col>
                                    )
                                })
                            }

                        </Row>
                    </div>
                    <Card.Body className="ps-1">
                        <PortfolioChart dataColors='["--tb-primary", "--tb-light", "--tb-secondary"]' />
                    </Card.Body>
                </Card>
                <div id="productList">
                    <Row className="g-3 justify-content-between mb-3">
                        <Col lg={3}>
                            <div className="search-box">
                                <Form.Control type="text" className="search" placeholder="Search products ..." onChange={(e: any) => handlesearchdata(e)} />
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </Col>
                        <Col className="col-lg-auto">
                            <Button className="btn btn-subtle-danger d-none" id="remove-actions"><i className="ri-delete-bin-2-line"></i></Button>
                            <Button type="button" className="add-btn" onClick={handleAddShow}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Product</Button>
                        </Col>
                    </Row>
                    <Card>
                        <Card.Body>
                            {
                                productTable && productTable.length > 0 ?
                                    <TableContainer
                                        isPagination={true}
                                        columns={columns}
                                        data={productTable || []}
                                        customPageSize={10}
                                        tableClass="table table-centered align-middle table-nowrap mb-0"
                                        theadClass="table-active"
                                        PaginationClassName="row mt-3 align-items-center"
                                        isBordered={false}
                                        SearchPlaceholder=""
                                    />
                                    :
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
                </div>
            </Col>

            <Modal show={addshow} onHide={handleAddClose}>
                <Modal.Header className="px-4 pt-4" closeButton>
                    <Modal.Title>{editshow ? "Edit Product" : "Add Product"}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={formik.handleSubmit}>
                    <Modal.Body className="p-4">
                        <div className="mb-3">
                            <Form.Label htmlFor="product-title-input">Product title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Enter product title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.title}
                            />
                            {formik.errors.title && formik.touched.title ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="product-images-input">Product Images</Form.Label>
                            <Dropzone
                                onDrop={(acceptfiles: any) => {
                                    handleAcceptfiles(acceptfiles);
                                    formik.setFieldValue("img", acceptfiles[0])
                                }}
                                name="img"
                                value={formik.values.img || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.img}
                            >
                                {({ getRootProps }: any) => (
                                    <div className="dropzone my-dropzone border border-1 border-dashed text-center dz-clickable" style={{ minHeight: "100px" }}>
                                        <div
                                            className="dz-message needsclick"
                                            {...getRootProps()}
                                        >
                                            <div className="mb-3">
                                                <i className="bi bi-cloud-download fs-1" />
                                            </div>
                                            <h5>Drop files here or click to upload.</h5>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>
                            {formik.errors.img && formik.touched.img ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.img}</Form.Control.Feedback>
                            ) : null}

                            <ul className="list-unstyled mb-0" id="dropzone-preview">
                                {
                                    (selectfeils || [])?.map((file: any, index: number) => {
                                        return (
                                            <li className="mt-2 dz-image-preview" key="">
                                                <div className="border rounded">
                                                    <div className="d-flex flex-wrap gap-2 p-2">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar-sm bg-light rounded p-2">
                                                                <img data-dz-thumbnail="" className="img-fluid rounded d-block" src={file.priview} alt={file.name} />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="pt-1">
                                                                <h5 className="fs-md mb-1" data-dz-name>{file.path}</h5>
                                                                <p className="fs-sm text-muted mb-0" data-dz-size=""><strong>{file?.size?.toString()?.charAt(0)}</strong> KB</p>
                                                                <strong className="error text-danger" data-dz-errormessage></strong>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-3">
                                                            <Button variant="danger" size="sm" onClick={() => {
                                                                const newImages = [...selectfeils];
                                                                newImages.splice(index, 1);
                                                                setSelectfeils(newImages);
                                                            }}>Delete</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="product-category-input">Product category</Form.Label>
                            <Form.Select
                                name="category"
                                id="category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.category}
                            >
                                <option value="Select product category">Select product category</option>
                                <option value="Appliances">Appliances</option>
                                <option value="Automotive Accessories">Automotive Accessories</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Headphones">Headphones</option>
                                <option value="Kids">Kids</option>
                                <option value="Luggage">Luggage</option>
                                <option value="Sports">Sports</option>
                                <option value="Watches">Watches</option>
                            </Form.Select>
                            {formik.errors.category && formik.touched.category ? (
                                <Form.Control.Feedback type="invalid"> {formik.errors.category} </Form.Control.Feedback>
                            ) : null}
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="product-stock-input">Stocks</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="stock"
                                        id="stock"
                                        placeholder="Enter product stocks"
                                        value={formik.values.stock}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.stock}
                                    />
                                    {formik.errors.stock && formik.touched.stock ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.stock} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="product-price-input">Price</Form.Label>
                                    <InputGroup className="mb-3" hasValidation>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            name="price"
                                            id="price"
                                            placeholder="Enter product price"
                                            value={formik.values.price}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.price}
                                        />
                                        {formik.errors.price && formik.touched.price ? (
                                            <Form.Control.Feedback type="invalid"> {formik.errors.price} </Form.Control.Feedback>
                                        ) : null}
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="product-orders-input">Orders</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="orders"
                                        id="orders"
                                        placeholder="Enter product orderss"
                                        value={formik.values.orders}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.orders}
                                    />
                                    {formik.errors.orders && formik.touched.orders ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.orders} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="product-rating-input">Rating</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="ratings"
                                        id="rating"
                                        min="0"
                                        max="4"
                                        placeholder="Enter product ratings"
                                        value={formik.values.ratings}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.ratings}
                                    />
                                    {formik.errors.ratings && formik.touched.ratings ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.ratings} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="hstack gap-2 justify-content-end">
                            <Button className="btn btn-ghost-danger" onClick={handleAddClose}>
                                <i className="bi bi-x-lg align-baseline me-1"></i> Close</Button>
                            <Button type="submit" variant="primary" id="add-btn">{editshow ? "Edit product" : "Add product"}</Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={show} handleClose={handleDeleteShow} deleteModalFunction={deleteModalFunction} />
        </React.Fragment >
    );
}

export default PortfolioOverview;