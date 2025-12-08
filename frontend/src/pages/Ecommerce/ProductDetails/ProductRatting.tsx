import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Dropdown, Badge, Image, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import { DeleteModal } from "Common/DeleteModal";
import { getProductsDetails } from "slices/thunk";
import { deleteProductsRiview } from "slices/ecommerce/thunk";
import { createSelector } from "reselect";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Rating } from 'react-simple-star-rating';
import moment from "moment";
import { addNewProductRiview, updateProductRiview as onUpdateProductRiview } from "slices/thunk";

const ProductRatting = ({ classname }: any) => {
    const [editdata, setEditdata] = useState<any>([]);
    const [review, setReview] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [editshow, setEditshow] = useState<boolean>(false);
    const [delet, setDelet] = useState<boolean>();
    const [selectfeils, setSelectfeils] = useState<any>([]);

    const dispatch = useDispatch<any>();

    const selectProductDetailList = createSelector(
        (state: any) => state.Ecommerce,
        (list) => ({
            productDetailList: list.productDetailList,
        })
    );

    const { productDetailList } = useSelector(selectProductDetailList);
    //add review
    const handleReview = () => setReview(true);
    const handleCloseReview = () => {
        setReview(false);
        setEditdata(null);
        setSelectfeils(null);
        setEditshow(false);
    }

    //Edit modal state
    const handleEdit = (item: any) => {
        const product = item;
        handleReview();
        setEditdata({
            id: product?.id,
            name: product?.name,
            title: product?.title,
            dic: product?.dic,
            ratting: product?.ratting,
            image: product?.image
        });
        product?.image && setSelectfeils(product?.image)
        setEditshow(true);
    };

    //delete modal state
    const handleCloseDelete = () => setShow(!show);
    const handleDelete = (id: boolean) => {
        setShow(!show);
        setDelet(id)
    };

    //delete modal
    const deleteModalFunction = () => {
        dispatch(deleteProductsRiview(delet));
        handleCloseDelete();
    }

    useEffect(() => {
        dispatch(getProductsDetails());
    }, [dispatch]);


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
            id: (editdata && editdata?.id) || '',
            ratting: (editdata && editdata?.ratting) || '',
            title: (editdata && editdata?.title) || '',
            name: (editdata && editdata?.name) || '',
            dic: (editdata && editdata?.dic) || '',
            image: (editdata && editdata?.image) || '',
        },
        validationSchema: Yup.object({
            ratting: Yup.number().min(1, 'Please select at least one star'),
            title: Yup.string().required("Please Enter Your Title"),
            name: Yup.string().required("Please Enter Your Name"),
            dic: Yup.string().required("Please Enter Your review"),
            image: Yup.mixed().required('Product Image is required'),
        }),
        onSubmit: (values) => {
            if (editshow) {
                const updateRiview = {
                    id: values.id,
                    ratting: values.ratting,
                    title: values.title,
                    name: values?.name,
                    dic: values.dic,
                    image: values.image
                }
                dispatch(onUpdateProductRiview(updateRiview));
                formik.resetForm();
            } else {
                const newRiview = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    ratting: values['ratting'],
                    title: values['title'],
                    name: values['name'],
                    dic: values['dic'],
                    image: values['image'],
                    date: moment(new Date()).format("DD MMMM ,YYYY")
                }
                dispatch(addNewProductRiview(newRiview));
                formik.resetForm();
            }
            if (values === null) {
                handleReview();
            } else {
                handleCloseReview();
            }
        }
    });
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header className="d-flex flex-wrap align-items-center gap-3 mb-2">
                            <Card.Title className="flex-grow-1 mb-0">Ratings &amp; Reviews</Card.Title>
                            <div className={classname}>
                                <Dropdown className="card-header-dropdown">
                                    <Dropdown.Toggle bsPrefix="text-muted" as="a" href="#" id="dropdown-basic">
                                        This Month
                                        <i className="mdi mdi-chevron-down ms-1"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item href="#">Today</Dropdown.Item>
                                        <Dropdown.Item href="#">Yesterday</Dropdown.Item>
                                        <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                                        <Dropdown.Item href="#">Last 30 Days</Dropdown.Item>
                                        <Dropdown.Item href="#">This Month</Dropdown.Item>
                                        <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="flex-shrink-0">
                                <Button type="button" variant="primary" onClick={handleReview}>
                                    <i className="ph-plus-circle align-middle me-1"></i> Add Review</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-3">
                                <Col lg={2}>
                                    <div className="text-center mt-3 mt-lg-5">
                                        <h1 className="mb-3">4.9 <small className="fs-sm text-muted fw-normal">/ 5.0</small></h1>
                                        <div className="text-warning hstack gap-2 justify-content-center mb-2">
                                            <i className="bi bi-star-fill align-baseline"></i>
                                            <i className="bi bi-star-fill align-baseline"></i>
                                            <i className="bi bi-star-fill align-baseline"></i>
                                            <i className="bi bi-star-fill align-baseline"></i>
                                            <i className="bi bi-star-fill align-baseline"></i>
                                        </div>
                                        <p className="mb-0"><b>3.5k</b> Reviews</p>
                                    </div>
                                </Col>
                                <Col lg={10}>
                                    <div>
                                        <SimpleBar style={{ maxHeight: "500px" }} className="me-lg-n3 pe-lg-4 simplebar-scrollable-y simplebar-mouse-entered">
                                            <ul className="list-unstyled mb-0" id="review-list">
                                                {
                                                    (productDetailList || [])?.map((item: any) => {
                                                        return (
                                                            <li className="review-list py-2" id="review-1" key={item.id}>
                                                                <div className="border border-dashed rounded p-3">
                                                                    <div className="hstack flex-wrap gap-3 mb-4">
                                                                        <Badge text="danger" bg="danger-subtle" className="mb-0" pill>
                                                                            <i className="mdi mdi-star"></i> <span className="rate-num">{item.ratting}</span>
                                                                        </Badge>
                                                                        <div className="vr"></div>
                                                                        <div className="flex-grow-1">
                                                                            <p className="mb-0"><Link to="#">{item.name}</Link></p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <span className="text-muted fs-sm mb-0">{item.date}</span>
                                                                        </div>
                                                                        <div className="flex-shrink-0 d-flex gap-1">
                                                                            <Link to="#" className="badge bg-secondary-subtle text-secondary edit-item-list" onClick={() => handleEdit(item)}><i className="ph-pencil align-baseline me-1"></i> Edit</Link>
                                                                            <Link to="#" className="badge bg-danger-subtle text-danger" onClick={() => handleDelete(item.id)}><i className="ph-trash align-baseline"></i></Link>
                                                                        </div>
                                                                    </div>

                                                                    <h6 className="review-title fs-md">{item.title}</h6>
                                                                    <p className="review-desc mb-0">{item.dic}</p>

                                                                    <div className="d-flex flex-grow-1 gap-2 mt-3">
                                                                        {
                                                                            (item.image || [])?.map((imges: any, index: number) => {
                                                                                console.log("imges", imges);

                                                                                return (
                                                                                    <Link to="#" className="avatar-md" key={index}>
                                                                                        <div className="avatar-title bg-light rounded">
                                                                                            <Image src={imges.priview} alt="img-1.png" className="product-img avatar-sm" />
                                                                                        </div>
                                                                                    </Link>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </SimpleBar>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={review} onHide={handleCloseReview} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title as="h1" className="fs-5" id="addReviewLabel">{editshow ? "Edit Review" : "Add Review"}</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label htmlFor="basic-rater" className="d-block">
                                Select Review <span className="text-danger">*</span>
                            </Form.Label>
                            <div id="basic-rater" className="star-rating" dir="ltr" style={{ width: "110px", height: "22px", backgroundSize: "22px" }} title="4/5" data-rating="1.5">
                                <Rating
                                    className="star-value"
                                    initialValue={formik.values.ratting}
                                    size={25}
                                    onClick={(ratting: any) => formik.setFieldValue('ratting', ratting)}
                                />
                                {/* {formik.touched.ratting && formik.errors.ratting ? (
                                    <div>{formik.errors.ratting}</div>
                                ) : null} */}
                            </div>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="Name-input">Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
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
                            <Form.Label htmlFor="reviewTitle-input">Review Title <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Title"
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
                            <Form.Label htmlFor="reviewDesc-input">Review <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                as="textarea"
                                id="dic"
                                name="dic"
                                rows={4}
                                placeholder="Enter review"
                                value={formik.values.dic}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.dic} />
                            {formik.errors.dic && formik.touched.dic ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.dic}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div>
                            <Form.Label>Product Images</Form.Label>
                            <Dropzone
                                onDrop={(acceptfiles: any) => {
                                    const imagesArray: any = [];
                                    for (let i = 0; i < acceptfiles.length; i++) {
                                        imagesArray.push(acceptfiles[i]);
                                    }
                                    handleAcceptfiles(acceptfiles);
                                    formik.setFieldValue("image", imagesArray)
                                }}
                                name="image"
                                value={formik.values.image || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.image}>
                                {({ getRootProps }: any) => (
                                    <div className="text-center dz-clickable dropzone my-dropzone" style={{ minHeight: "180px" }}>
                                        <div
                                            className="dz-message needsclick"
                                            {...getRootProps()}
                                        >
                                            <div className="mb-3">
                                                <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                            </div>
                                            <h5>Drop files here or click to upload.</h5>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>
                            {formik.errors.image && formik.touched.image ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.image}</Form.Control.Feedback>
                            ) : null}

                            <ul className="list-unstyled mb-0" id="dropzone-preview">
                                {
                                    (selectfeils || [])?.map((file: any, index: number) => {
                                        return (
                                            <li className="mt-2 dz-image-preview" key={index}>
                                                <div className="border rounded">
                                                    <div className="d-flex flex-wrap gap-2 p-2">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar-sm bg-light rounded p-2">
                                                                <img data-dz-thumbnail className="img-fluid rounded d-block" src={file?.priview} alt={file?.name} />
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="btn btn-ghost-danger" onClick={handleCloseReview}>
                            <i className="ph-x align-middle me-1"></i> Close
                        </Button>
                        <Button variant="primary" type="submit"> {editshow ? "Edit Review" : "Add Review"}</Button>
                    </Modal.Footer>
                </Form>

            </Modal >

            <DeleteModal show={show} handleClose={handleDelete} deleteModalFunction={deleteModalFunction} />
        </React.Fragment>
    );
}

export default ProductRatting;