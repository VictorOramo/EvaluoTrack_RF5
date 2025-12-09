import React, { useState, useMemo, useEffect } from "react";
import { Badge, Card, Col, Row, Dropdown, Button, Modal, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteModal } from "Common/DeleteModal";
import PaginationFile from "Common/PaginationFile";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { deleteRealEstateGridList as onDeleteRealEstateGridList, updateRealEstateGridList as onUpdateRealEstateGridList } from "slices/realestate/thunk";

const GridProperty = ({ data }: any) => {
    const dispatch = useDispatch<any>();

    const [show, setShow] = useState(false);
    const [realestategrid, setRealestategrid] = useState<any>(null);
    const [selectfeils, setSelectfeils] = useState<any>([]);
    const [editProperty, setEditProperty] = useState(false);

    // Pagination
    const pagination: boolean = true;
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>([]);
    const perPageData = 8;
    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };
    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;
    const currentdata = useMemo(() => data.slice(indexOfFirst, indexOfLast), [data, indexOfFirst, indexOfLast])
    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, data, currentdata])

    const pageNumbers: any = [];
    for (let i = 1; i <= Math.ceil(data.length / perPageData); i++) {
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

    //Edit Property modal
    const handleEditClose = () => { setEditProperty(false); setSelectfeils(null) };
    const handleShowEditProperty = (item: any) => {
        setEditProperty(true);
        setRealestategrid({
            id: item?.id,
            img: item?.img,
            rating: item?.rating,
            type: item?.type,
            title: item?.title,
            location: item?.location,
            bedroom: item?.bedroom,
            bathroom: item?.bathroom,
            area: item?.area,
            price: item?.price
        });
        setSelectfeils([item?.img])
    };

    //start toogle 
    const handleStarToogle = (ele: any) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };

    const handleDeleteShow = (ele: any) => { setShow(true); setRealestategrid(ele) };
    const handleDeleteClose = () => setShow(false);

    //delete modal
    const deleteModalFunction = () => {
        if (realestategrid.id) {
            dispatch(onDeleteRealEstateGridList(realestategrid.id));
        }
        setShow(false)
    }

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
            id: (realestategrid && realestategrid.id) || '',
            title: (realestategrid && realestategrid.title) || '',
            type: (realestategrid && realestategrid.type) || '',
            bedroom: (realestategrid && realestategrid.bedroom) || '',
            bathroom: (realestategrid && realestategrid.bathroom) || '',
            area: (realestategrid && realestategrid.area) || '',
            price: (realestategrid && realestategrid.price) || '',
            location: (realestategrid && realestategrid.location) || '',
            rating: (realestategrid && realestategrid.rating) || ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your  Title"),
            type: Yup.string().required("Please Enter Your  Type"),
            bedroom: Yup.string().required("Please Enter Your bedroom List"),
            bathroom: Yup.string().required("Please Enter Your bathroom List"),
            area: Yup.string().required("Please Enter Your area List"),
            price: Yup.number().required("Please Enter Your Price"),
            location: Yup.string().required("Please Enter Your location"),
            // addressline: Yup.string().required("Please Enter Your Address"),
            rating: Yup.string().required("Please Enter Your rat"),
        }),
        onSubmit: (values: any) => {
            const updateDate = {
                id: values.id,
                title: values.title,
                type: values.type,
                bedroom: values.bedroom,
                bathroom: values.bathroom,
                area: values.area,
                price: values.price,
                location: values.location,
                rating: values.rating,
            }
            dispatch(onUpdateRealEstateGridList(updateDate));
            formik.resetForm();
            if (updateDate === null) {
                setEditProperty(true);
            } else {
                handleEditClose();
            }
        }
    })

    return (
        <React.Fragment>
            <div className="col-lg">
                <Row id='property-list'>
                    {
                        (currentdata || [])?.map((item: any) => {
                            return (
                                <Col xxl={3} lg={4} md={6} key={item.id}>
                                    <Card className="real-estate-grid-widgets card-animate">
                                        <Card.Body className="p-2">
                                            <img src={item.img?.priview} alt="img-01.jpg" className="rounded w-100 object-fit-cover" style={{ height: "180px" }} />
                                            <Button type="button" variant="subtle-warning" size="sm" className="custom-toggle btn-icon active" onClick={(e: any) => handleStarToogle(e.target)}>
                                                <span className="icon-on"><i className="bi bi-star"></i></span>
                                                <span className="icon-off"><i className="bi bi-star-fill"></i></span>
                                            </Button>
                                            <Dropdown className="dropdown-real-estate" drop="start">
                                                <Dropdown.Toggle bsPrefix="btn-light btn-icon btn-sm" >
                                                    <i className="bi bi-three-dots-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#" className="edit-list" onClick={() => handleShowEditProperty(item)}> <i className="bi bi-pencil-square me-1 align-baseline"></i> Edit</Dropdown.Item>
                                                    <Dropdown.Item href="#" className="remove-list" onClick={() => handleDeleteShow(item)}> <i className="bi bi-trash3 me-1 align-baseline"></i> Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Card.Body>
                                        <Card.Body className="p-3">
                                            <p className="text-muted float-end mb-0">
                                                <i className="bi bi-star text-warning align-baseline me-1"></i> {item.rating}
                                            </p>
                                            {
                                                item.type === 'Residency' ?
                                                    <Badge bg="success-subtle" text="success" className="fs-xxs mb-3"> <i className="bi bi-house-door align-baseline me-1"></i>{item.type}</Badge>
                                                    :
                                                    item.type === 'Apartment' ?
                                                        <Badge bg="info-subtle" text="info" className="fs-xxs mb-3"> <i className="bi bi-building align-baseline me-1"></i>{item.type}</Badge>
                                                        :
                                                        <Badge bg="danger-subtle" text="danger" className="fs-xxs mb-3"> <i className="bi bi-house-door align-baseline me-1"></i>{item.type}</Badge>

                                            }
                                            <Link to="/apps-real-estate-property-overview">
                                                <h6 className="fs-lg text-capitalize text-truncate">{item.title}</h6>
                                            </Link>
                                            <p className="text-muted">
                                                <i className="bi bi-geo-alt align-baseline me-1"></i>{item.location}
                                            </p>
                                            <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                <li>
                                                    <p className="text-muted mb-0">
                                                        <i className="bi bi-house align-baseline text-primary me-1"></i>{item.bedroom} Bedroom
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="text-muted mb-0">
                                                        <i className="ph ph-bathtub align-middle text-primary me-1"></i>{item.bathroom} Bathroom</p>
                                                </li>
                                                <li>
                                                    <p className="text-muted mb-0">
                                                        <i className="bi bi-columns align-baseline text-primary me-1"></i> {item.area} sqft</p>
                                                </li>
                                            </ul>
                                            <div className="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                                <h5 className="mb-0">${item.price}</h5>
                                                <Link to="/apps-real-estate-property-overview" className="link-effect">Read More
                                                    <i className="bi bi-chevron-right align-baseline ms-1"></i>
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <PaginationFile
                    className="mb-4"
                    currentpages={currentpages}
                    pagination={pagination}
                    perPageData={perPageData}
                    currentPage={currentPage}
                    pageNumbers={pageNumbers}
                    handlenextPage={handlenextPage}
                    handleClick={handleClick}
                    handleprevPage={handleprevPage}
                    estateList={data} />
            </div>
            <Modal show={editProperty} onHide={handleEditClose}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5" id='addPropertyModalLabel'>Edit Property details</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label>Property Images<span className="text-danger">*</span></Form.Label>
                            <Dropzone
                                onDrop={(acceptfiles: any) => {
                                    handleAcceptfiles(acceptfiles);
                                    formik.setFieldValue("img", acceptfiles[0])
                                }}
                                name="img"
                                value={formik.values.img}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.img}
                            >
                                {({ getRootProps }: any) => (
                                    <div className="property-dropzone border border-1 border-dashed text-center dz-clickable" style={{ minHeight: "100px" }}>
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
                                                                <img data-dz-thumbnail="" className="img-fluid rounded d-block" src={file?.priview} alt={file?.name || ''} />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="pt-1">
                                                                <h5 className="fs-md mb-1" data-dz-name>{file?.path || ''}</h5>
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
                            <Form.Label htmlFor="property-title-input">Property title<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="property-title-input"
                                name="title"
                                placeholder="Enter Property title"
                                value={formik.values.title || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.title}
                            />
                            {formik.errors.title && formik.touched.title ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="property-type-input">Property Type<span className="text-danger">*</span></Form.Label>
                            <Form.Select
                                className="form-select"
                                id="type"
                                name="type"
                                value={formik.values.type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.type}
                            >
                                <option value="">Select Property Type</option>
                                <option value="Villa">Villa</option>
                                <option value="Residency">Residency</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Others">Other</option>
                            </Form.Select>
                            {formik.errors.type && formik.touched.type ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.type}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <Row >
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="bedroom-input">Bedroom<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="bedroom"
                                        name="bedroom"
                                        placeholder="Enter Bedroom"
                                        value={formik.values.bedroom}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.bedroom}
                                    />
                                    {formik.errors.bedroom && formik.touched.bedroom ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.bedroom}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="bathroom-input">Bathroom<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="bathroom"
                                        name="bathroom"
                                        placeholder="Enter Bathroom"
                                        value={formik.values.bathroom}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.bathroom}
                                    />
                                    {formik.errors.bathroom && formik.touched.bathroom ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.bathroom}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="sqft-input">SQFT<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="sqft"
                                        name="area"
                                        placeholder="Enter area"
                                        value={formik.values.area}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.area}
                                    />
                                    {formik.errors.area && formik.touched.area ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.area}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="property-price-input">Price<span className="text-danger">*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="input-group-text">$</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            id="price"
                                            name="price"
                                            placeholder="Enter price"
                                            value={formik.values.price}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.price}
                                        />
                                        {formik.errors.price && formik.touched.price ? (
                                            <Form.Control.Feedback type="invalid">{formik.errors.price}</Form.Control.Feedback>
                                        ) : null}
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="property-location-input">location<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="property-location-input"
                                        name="location"
                                        placeholder="Enter location "
                                        value={formik.values.location || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.location}
                                    />
                                    {formik.errors.location && formik.touched.location ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.location}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="property-rating-input">Rating<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="property-rating-input"
                                        name="rating"
                                        placeholder="Enter Rating"
                                        value={formik.values.rating || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.rating}
                                    />
                                    {formik.errors.rating && formik.touched.rating ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.rating}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            {/* <Col lg={12}>
                            <div className="mb-3">
                                <Form.Label htmlFor="addressLine-input">Sort Address<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id="addressline"
                                    name="addressline"
                                    rows={3}
                                    placeholder="Enter sort address"
                                    value={formik.values.addressline}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.addressline}
                                />
                                {formik.errors.addressline && formik.touched.addressline ? (
                                    <Form.Control.Feedback type="invalid">{formik.errors.addressline}</Form.Control.Feedback>
                                ) : null}
                            </div>
                        </Col> */}
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="hstack gap-2 justify-content-end">
                            <Button className="btn btn-ghost-danger" onClick={handleEditClose}> <i className="bi bi-x-lg align-baseline me-1"></i> Close </Button>
                            <Button variant="primary" type="submit" id="add-btn"> Update </Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>
            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />
        </React.Fragment>
    );
}

export default GridProperty;