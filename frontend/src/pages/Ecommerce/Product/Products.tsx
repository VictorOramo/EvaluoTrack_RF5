import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Row, Col, Card, Button, Badge, Form, Dropdown, Container, Modal, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
    getProducts as onGetProducts,
    addNewProduct as onAddNewProduct,
    updateProduct as onUpdateProduct,
    deleteProducts as onDeleteProducts
} from "slices/thunk";
import SearchData from "./SearchData";
import BreadCrumb from "Common/BreadCrumb";
import TableContainer from "Common/TableContainer";
import { DeleteModal } from "Common/DeleteModal";
import { createSelector } from "reselect";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dropzone from "react-dropzone";

const Products = () => {
    document.title = "Product | Steex - Admin & Dashboard Template";

    const selectProductList = createSelector(
        (state: any) => state.Ecommerce,
        (ecommerce) => ({
            products: ecommerce.productList
        })
    );

    const { products } = useSelector(selectProductList);

    const [productTable, setProductTable] = useState<any>([]);
    const [edit, setEdit] = useState<any>([]);
    const [filter, setFilter] = useState<any>('');
    const [show, setShow] = useState<boolean>(false);
    const [editshow, setEditshow] = useState<boolean>(false);
    const [addproduct, setAddproduct] = useState<boolean>(false);
    const [delet, setDelet] = useState<any>('');
    const dispatch = useDispatch<any>();

    //Add product modal state
    const handleAddShow = () => setAddproduct(true);
    const handleAddClose = () => {
        setAddproduct(false);
        setEdit(null);
        setEditshow(false);
        setSelectfeils(null)
    };

    //Edit modal state
    const handleEditShow = useCallback((value: any) => {
        const product = value;
        setEdit({
            id: product?.id,
            title: product?.title,
            img: product?.img,
            category: product?.category,
            price: product?.price,
            stock: product?.stock,
            orders: product?.orders,
            ratings: product?.ratings
        });
        setEditshow(true);
        setSelectfeils([product?.img])
        handleAddShow();
    }, []);

    //delete modal state
    const handleCloseDelete = () => setShow(!show);
    const handleDeleteShow = useCallback((product: any) => {
        setDelet(product);
        setShow(!show);
    }, [show]);

    //delete modal
    const deleteModalFunction = () => {
        dispatch(onDeleteProducts(delet.id))
        handleCloseDelete();
    }

    //search
    const handlesearchdata = (event: any) => {
        setFilter(event);
        if (event) {
            setProductTable(products.filter((search: any) => search.title.toLowerCase().includes(event)))
        } else {
            setProductTable(products)
        }
    }

    //search brand
    const handleBrand = (event: any) => {
        setProductTable(products.filter((brand: any) => brand.brand === event || event === "all"))
    }

    //search category
    const handlecategory = (event: any) => {
        setProductTable(products.filter((category: any) => category.category === event || event === "all"))
    }

    //search discount
    const handledicount = (event: any) => {
        let discount = event.toString();
        setProductTable(products.filter((dic: any) => {
            const count = dic.discount ? dic.discount : "";
            return count.toLowerCase().startsWith(discount) || discount === "all"
        }));
    }

    useEffect(() => {
        dispatch(onGetProducts())
    }, [dispatch]);

    useEffect(() => {
        setProductTable(products)
    }, [products])

    //columns
    const columns: any = useMemo(
        () => [
            {
                Header: (
                    <Form.Check>
                        <Form.Check.Input type="checkbox" value="option" id="checkAll" />
                        <Form.Check.Label htmlFor="checkAll"></Form.Check.Label>
                    </Form.Check>
                ),
                Cell: () => {
                    return (
                        <Form.Check>
                            <Form.Check.Input type="checkbox" value="option" id="checkAll" />
                            <Form.Check.Label htmlFor="checkAll"></Form.Check.Label>
                        </Form.Check>
                    )
                },
                id: "#",
                Filter: false,
                isSortable: false
            },
            {
                Header: "Products",
                accessor: "title",
                Cell: (cell: any) => {
                    return (
                        <div className="d-flex align-items-center">
                            <div className="avatar-xs bg-light rounded p-1 me-2">
                                <img src={cell.row.original.img?.priview} alt={cell.row.original.imgalt} className="img-fluid d-block product-img" />
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
                isSortable: true
            },
            {
                Header: "Category",
                accessor: "category",
                Filter: false,
                isSortable: true
            },
            {
                Header: "Stock",
                accessor: "stock",
                Filter: false,
                isSortable: true
            },
            {
                Header: "Price",
                accessor: (cell: any) => {
                    return <span>${cell.price}</span>
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Orders",
                accessor: "orders",
                Filter: false,
                Cell: (cell: any) => {
                    return (<span className="rate">{cell.row.original.orders ? cell.row.original.orders : "--"}</span>)
                },
                isSortable: true
            },
            {
                Header: "Rating",
                Filter: false,
                Cell: (cell: any) => {
                    return (
                        <Badge text="warning" className="bg-warning-subtle">
                            <i className="bi bi-star-fill align-baseline me-1"></i>
                            <span className="rate">{cell.row.original.ratings}</span>
                        </Badge>
                    )
                },
                isSortable: true
            },
            {
                Header: "Published",
                accessor: "publish",
                Filter: false,
                Cell: (cell: any) => {
                    const publishDate = moment(new Date()).format("DD MMM ,YYYY")
                    return (
                        <span className="rate">{cell.row.original.publish ? cell.row.original.publish : publishDate}</span>
                    )
                },
                isSortable: true
            },
            {
                Header: "Action",
                Filter: false,
                isSortable: false,
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
                                    handleEditShow(productData)
                                }}><i className="ph-pencil align-middle me-1"></i> Edit</Dropdown.Item>
                                <Dropdown.Item className="remove-item-btn" href="#" onClick={() => {
                                    const productData: any = cell.row.original;
                                    handleDeleteShow(productData)
                                }} ><i className="ph-trash align-middle me-1"></i> Remove</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                },
            },
        ], [handleEditShow, handleDeleteShow]
    )

    const [selectfeils, setSelectfeils] = useState<any>([]);
    const handleAcceptfiles = (files: any) => {
        const newImages = files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
            })
        })
        setSelectfeils([...selectfeils, ...newImages]);
    }

    // validation
    const formik: any = useFormik({
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
            img: Yup.mixed().required("Please Enter Your Produc Image"),
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
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Products" pageTitle="Ecommerce" />
                    <div id="productList">
                        <SearchData
                            filter={filter}
                            handlecategory={(e: any) => handlecategory(e)}
                            handledicount={(e: any) => handledicount(e)}
                            handleBrand={(e: any) => handleBrand(e)}
                            handlesearchdata={(e: any) => handlesearchdata(e)}
                        />
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <Card.Header className=" d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <Card.Title as="h5" className="mb-0">Products <Badge bg="dark-subtle" text="dark" className="ms-1">254</Badge></Card.Title>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="d-flex flex-wrap align-items-start gap-2">
                                                <button className="btn btn-subtle-danger d-none" id="remove-actions"><i className="ri-delete-bin-2-line"></i></button>
                                                <Button type="button" variant="primary" className="add-btn" onClick={handleAddShow}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Product</Button>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        {
                                            productTable && productTable.length > 0 ?
                                                <TableContainer
                                                    isPagination={true}
                                                    columns={columns}
                                                    data={productTable || []}
                                                    customPageSize={10}
                                                    PaginationClassName="row mt-3 align-items-center"
                                                    tableClass="table-centered align-middle table-nowrap mb-0"
                                                    theadClass="table-active"
                                                    isBordered={false}
                                                    SearchPlaceholder="search..."
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
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <Modal show={addproduct} onHide={handleAddClose}>
                <Modal.Header className="px-4 pt-4" closeButton>
                    <Modal.Title>{editshow ? "Edit product" : "Add product"}</Modal.Title>
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
                                <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.img}</Form.Control.Feedback>
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
                                                                <img data-dz-thumbnail="" className="img-fluid rounded d-block" src={file?.priview} alt={file?.name} />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="pt-1">
                                                                <h5 className="fs-md mb-1" data-dz-name>{file?.path}</h5>
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
                            <Button type="submit" variant="primary" id="add-btn">{editshow ? "Update" : "Add product"}</Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={show} handleClose={handleDeleteShow} deleteModalFunction={deleteModalFunction} />
            <ToastContainer />

        </React.Fragment>
    );
}

export default Products;