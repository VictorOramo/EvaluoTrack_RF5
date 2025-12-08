import React, { useEffect, useMemo, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import Breadcrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import * as Yup from "yup";
import {
    addCategoryList as onAddCategoryList,
    getCategoryList as onGetCourseList
} from "slices/thunk"
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PaginationFile from 'Common/PaginationFile';
import { ToastContainer } from 'react-toastify';
import { createSelector } from 'reselect';


const Category = () => {
    document.title = "Category | Steex - Admin & Dashboard Template";

    const [filterGrid, setFilterGrid] = useState([]);
    const dispatch = useDispatch<any>();
    const [pagination, setPagination] = useState<Boolean>(true);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const perPageData = 15;

    const selectCategoryList = createSelector(
        (state: any) => state.Learning,
        (learning) => ({
            categoryList: learning.categoryList
        })
    );

    const { categoryList } = useSelector(selectCategoryList);


    useEffect(() => {
        dispatch(onGetCourseList());
    }, [dispatch])

    const [add_modal, setAdd_modal] = useState<boolean>(false);
    function tog_modal() {
        setAdd_modal(!add_modal);
    }

    useEffect(() => {
        setFilterGrid(categoryList);
    }, [categoryList])

    const [selectedFiles, setselectedFiles] = useState<any>([]);

    function handleAcceptedFiles(files: any) {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        );
        setselectedFiles(files);
    }

    function formatBytes(bytes: any, decimals = 2) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }
    //search
    const handlesearchdata = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search?.toLowerCase();
            setFilterGrid(categoryList.filter((data: any) => data.title?.toLowerCase().includes(search)));
            setPagination(false)
        } else {
            setFilterGrid(categoryList);
            setPagination(true)
        }
    };
    //pagination
    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };
    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;
    const currentdata = useMemo(() => categoryList.slice(indexOfFirst, indexOfLast), [categoryList, indexOfFirst, indexOfLast])

    useEffect(() => {
        setFilterGrid(currentdata)
    }, [currentdata, setFilterGrid]);

    const pageNumbers: any = [];

    for (let i = 1; i <= Math.ceil(categoryList.length / perPageData); i++) {
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
    const id: any = (Math.floor(Math.random() * (30 - 20)) + 20);
    const cardColor: any = id % 2 === 0 ? "success" : "primary";

    const formik: any = useFormik({
        initialValues: {
            logoImg: '',
            title: '',
            courseCount: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Course Name"),
            courseCount: Yup.string().required("Please Enter Your Course Count"),
            logoImg: Yup.mixed().required("Please Select Your Image"),
        }),
        onSubmit: (values: any) => {
            const newCourse = {
                id: id,
                logoImg: values['logoImg'],
                title: values['title'],
                courseCount: values['courseCount'],
                cardColor: cardColor
            }
            dispatch(onAddCategoryList(newCourse));
            formik.resetForm();
            tog_modal();
        }
    });
    const handleDeleteImg = (id: any) => {
        setselectedFiles(selectedFiles?.filter((item: any) => item.size !== id))
    }

    useEffect(() => {
        setselectedFiles([]);
    }, [add_modal])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumb title="Category" pageTitle="Courses" />

                    <Row className="align-items-center mb-4 g-2">
                        <Col lg={3} md={4} className="me-auto">
                            <div className="search-box">
                                <Form.Control type="text" className="search" placeholder="Search for category or something..." onChange={handlesearchdata} />
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </Col>
                        <div className="col-md-auto">
                            <Button variant="secondary" onClick={() => tog_modal()}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Category</Button>
                        </div>
                    </Row>
                    <Row className="row-cols-xl-5 row-cols-sm-2 row-cols-1">
                        {
                            (filterGrid || [])?.map((categoryData: any) => {
                                return (
                                    <Col key={categoryData.id}>
                                        <Card className={"card-animate text-center bg-" + categoryData.cardColor + "-subtle border border-" + categoryData.cardColor + "-subtle"}>
                                            <Card.Body className="p-4">
                                                <div className="avatar-md mx-auto mb-4">
                                                    <div className="avatar-title bg-white rounded">
                                                        <img src={categoryData.logoImg?.preview} alt="" className="avatar-sm" />
                                                    </div>
                                                </div>
                                                <Link to="/apps-learning-grid" className="stretched-link"><h5 className="text-truncate">{categoryData.title}</h5></Link>
                                                <p className="text-muted mb-0">{categoryData.courseCount}+ Courses Available</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>

                    <PaginationFile
                        className="mb-4"
                        currentpages={filterGrid}
                        pagination={pagination}
                        perPageData={perPageData}
                        currentPage={currentPage}
                        pageNumbers={pageNumbers}
                        handlenextPage={handlenextPage}
                        handleClick={handleClick}
                        handleprevPage={handleprevPage}
                        estateList={categoryList}
                    />

                    <Modal className="fade" show={add_modal} onHide={() => { tog_modal(); }} tabIndex={-1} contentClassName="border-0">
                        <Modal.Header className="bg-secondary p-3" closeButton closeVariant="white">
                            <Modal.Title as="h5" className="text-white" id="exampleModalLabel">Add Category</Modal.Title>
                        </Modal.Header>

                        <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                            <Modal.Body>
                                <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>
                                <div className="mb-3">
                                    <Form.Label>Category Image<span className="text-danger">*</span></Form.Label>

                                    <Dropzone
                                        onDrop={(acceptedFiles: any) => {
                                            handleAcceptedFiles(acceptedFiles);
                                            formik.setFieldValue("logoImg", acceptedFiles[0]);
                                        }}
                                    >
                                        {({ getRootProps }: any) => (
                                            <div className="dropzone course-dropzone border border-1 border-dashed text-center" style={{ "minHeight": "80px" }}>
                                                <div className="dz-message needsclick"
                                                    {...getRootProps()}
                                                >
                                                    <div className="mb-3">
                                                        <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                                    </div>
                                                    <h4>Drop files here or click to upload.</h4>
                                                </div>
                                            </div>
                                        )}
                                    </Dropzone>
                                    {formik.errors.logoImg && formik.touched.logoImg ? (
                                        <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.logoImg}</Form.Control.Feedback>
                                    ) : null}
                                    <ul className="list-unstyled mb-0" id="dropzone-preview">
                                        {
                                            (selectedFiles || [])?.map((file: any) => {
                                                return (
                                                    <li className="mt-2" id="dz-image-preview" key="">
                                                        <div className="border rounded">
                                                            <div className="d-flex flex-wrap gap-2 p-2">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div className="avatar-sm bg-light rounded p-2">
                                                                        <img data-dz-thumbnail="" className="img-fluid rounded d-block" src={file?.preview} alt={file?.name || ''} />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="pt-1">
                                                                        <h5 className="fs-md mb-1" data-dz-name>{file?.path || ''}</h5>
                                                                        <p className="fs-sm text-muted mb-0" data-dz-size><strong>{file?.formattedSize || ''}</strong></p>
                                                                        <strong className="error text-danger" data-dz-errormessage></strong>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-3">
                                                                    <Button variant="danger" data-dz-remove size="sm" onClick={() => handleDeleteImg(file?.size)}>Delete</Button>
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
                                    <Form.Label htmlFor="category-title-input">Category title<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="category-title-input"
                                        placeholder="Enter category title"
                                        name="title"
                                        value={formik.values.title || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.title}
                                    />
                                    {formik.errors.title && formik.touched.title ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.title} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="Courses-input">Courses<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="Courses-input"
                                        placeholder="Enter Courses"
                                        name="courseCount"
                                        value={formik.values.courseCount || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.courseCount}
                                    />
                                    {formik.errors.courseCount && formik.touched.courseCount ? (
                                        <Form.Control.Feedback type="invalid"> {formik.errors.courseCount} </Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="hstack gap-2 justify-content-end">
                                    <Button variant="ghost-danger" onClick={() => tog_modal()}><i className="bi bi-x-lg align-baseline me-1"></i> Close</Button>
                                    <Button type="submit" variant='primary' id="add-btn">Add Category</Button>
                                </div>
                            </Modal.Footer>
                        </Form>
                    </Modal>

                </Container>
            </div>
            <ToastContainer />
        </React.Fragment>
    )
}

export default Category
