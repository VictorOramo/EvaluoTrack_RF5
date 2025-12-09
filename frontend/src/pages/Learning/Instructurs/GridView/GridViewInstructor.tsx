import React, { useEffect, useMemo, useState } from 'react';
import { Badge, Button, Card, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CustomDropdownToggle from 'Common/CustomDropdownToggle';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import {
    getInstructorGridList as onGetInstructorGridList,
    deleteInstructorGridList as onDeleteInstructorGridList,
    addInstructorGridList as onAddInstructorGridList,
    updateInstructorGridList as onUpdateInstructorGridList,
} from "slices/thunk";
import { DeleteModal } from "Common/DeleteModal";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import * as Yup from "yup";
import PaginationFile from 'Common/PaginationFile';
import { ToastContainer } from 'react-toastify';
import { createSelector } from 'reselect';

const GridViewInstructor = () => {

    document.title = "Grid View | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectInstructorgridList = createSelector(
        (state: any) => state.Learning,
        (learning) => ({
            instructorgridList: learning.instructorgridList
        })
    );

    const { instructorgridList }: any = useSelector(selectInstructorgridList);

    useEffect(() => {
        dispatch(onGetInstructorGridList());
    }, [dispatch])

    const [show, setShow] = useState(false);
    const [instructorgrid, setInstructorgrid] = useState<any>(null);

    const [add_modal, setAdd_modal] = useState<boolean>(false);

    function tog_modal() {
        setAdd_modal(!add_modal);
    }
    const handleClose = () => {
        setAdd_modal(false);
        setSelectfeils(null);
        setInstructorgrid(null);
    };
    const [selectfeils, setSelectfeils] = useState<any>([]);

    const handleAcceptfiles = (files: any) => {
        const newImages = files?.map((file: any) => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        })
        setSelectfeils([...selectfeils, ...newImages]);
    }

    // Pagination

    const [pagination, setPagination] = useState<boolean>(true);

    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>([]);
    const perPageData = 10;

    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };

    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;

    const currentdata = useMemo(() => instructorgridList.slice(indexOfFirst, indexOfLast), [instructorgridList, indexOfFirst, indexOfLast])

    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, currentdata]);

    //search
    const searchTeamMember = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase()
            setCurrentpages(instructorgridList.filter((data: any) => (data.username?.toLowerCase().includes(search))));
            setPagination(false)
        } else {
            setCurrentpages(currentdata);
            setPagination(true)
        }
    };

    const pageNumbers: any = [];
    for (let i = 1; i <= Math.ceil(instructorgridList.length / perPageData); i++) {
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
    }, [currentPage, pageNumbers.length])

    const handleDeleteShow = (ele: any) => { setShow(true); setInstructorgrid(ele) };
    const handleDeleteClose = () => setShow(false);

    //delete modal
    const deleteModalFunction = () => {
        if (instructorgrid.id) {
            dispatch(onDeleteInstructorGridList(instructorgrid.id));
        }
        setShow(false);
        setInstructorgrid(null);
    }

    const id: number = (Math.floor(Math.random() * (30 - 20)) + 20);
    const jobPosition: any = id % 2 === 0 ? "Marketing & Management" : "React Development";
    const phone: any = id % 2 === 0 ? " 040 67 58 18" : "+(222) 0397 3076";

    const handleEditData = (item: any) => {
        setAdd_modal(true)
        setInstructorgrid({
            id: item?.id,
            userImg: item?.userImg,
            username: item?.username,
            course: item?.course,
            email: item?.email,
            rating: item?.rating,
            students: 2,
            status: item?.status,
        });
        setSelectfeils([item?.userImg]);
    }

    const formik: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
        initialValues: {
            id: (instructorgrid && instructorgrid?.id) || '',
            userImg: (instructorgrid && instructorgrid?.userImg) || '',
            username: (instructorgrid && instructorgrid?.username) || '',
            course: (instructorgrid && instructorgrid?.course) || '',
            email: (instructorgrid && instructorgrid?.email) || '',
            rating: (instructorgrid && instructorgrid?.rating) || '',
            students: (instructorgrid && instructorgrid?.students) || '',
            status: (instructorgrid && instructorgrid?.status) || '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your Name"),
            course: Yup.string().required("Please Enter Your Course"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            students: Yup.string().required("Please Enter Your students"),
            status: Yup.string().required("Please Enter Your Status"),
            rating: Yup.string().required("Please Enter Your rating"),
            userImg: Yup.mixed().required("Please Select Your Image"),
        }),
        onSubmit: (values: any) => {
            if (instructorgrid) {
                const updateGrid = {
                    id: instructorgrid && instructorgrid.id,
                    userImg: values?.userImg,
                    username: values?.username,
                    course: values?.course,
                    email: values?.email,
                    students: values?.students,
                    status: values?.status,
                    rating: values?.rating,
                    jobPosition: jobPosition,
                    phone: phone
                }
                dispatch(onUpdateInstructorGridList(updateGrid));
                formik.resetForm();
            } else {
                const newGrid = {
                    id: id,
                    userImg: values["userImg"],
                    username: values["username"],
                    course: values["course"],
                    email: values["email"],
                    rating: values['rating'],
                    students: values["students"],
                    status: values["status"],
                    jobPosition: jobPosition,
                    phone: phone
                }
                dispatch(onAddInstructorGridList(newGrid));
                formik.resetForm();
            }

            if (values === null) {
                tog_modal()
            } else {
                handleClose()
            }
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumb title="Grid View" pageTitle="Grid View" />

                    <Card>
                        <Card.Body>
                            <Row className="align-items-center g-2">
                                <Col lg={3} className="me-auto">
                                    <h6 className="card-title mb-0">Instructors List <Badge bg='primary' className="ms-1 align-baseline">1452</Badge></h6>
                                </Col>
                                <Col lg={2}>
                                    <div className="search-box">
                                        <Form.Control type="text" className="search" placeholder="Search for instructors ..." onChange={searchTeamMember} />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col className="col-lg-auto">
                                    <div className="hstack gap-2">
                                        <Button variant="secondary" onClick={() => tog_modal()}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Instructor</Button>
                                        <Link to="/apps-instructors-grid" className="btn btn-subtle-primary active btn-icon ms-auto"><i className="bi bi-grid"></i></Link>
                                        <Link to="/apps-instructors-list" className="btn btn-subtle-primary btn-icon"><i className="bi bi-list-task"></i></Link>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Row className="row-cols-xxl-5">
                        {(currentpages || []).map((gridviewInstructorData: any, key: any) => (
                            <Col key={key}>
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="form-check flex-grow-1">
                                                {gridviewInstructorData.checked ? <input className="form-check-input" type="checkbox" value="1" id="checkbox-1" defaultChecked /> : <input className="form-check-input" type="checkbox" value="1" id="checkbox-1" />}
                                                <label className="form-check-label" htmlFor="checkbox-1"></label>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <Dropdown className="curser-pointer">
                                                    <Dropdown.Toggle isButton={true} as={CustomDropdownToggle} className="btn btn-light btn-icon btn-sm arrow-none">
                                                        <i className="bi bi-three-dots-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end ">
                                                        <Dropdown.Item className="edit-list" onClick={() => handleEditData(gridviewInstructorData)}><i className="bi bi-pencil-square me-1 align-baseline"></i> Edit</Dropdown.Item>
                                                        <Dropdown.Item className="remove-list" onClick={() => handleDeleteShow(gridviewInstructorData)}><i className="bi bi-trash3 me-1 align-baseline"></i> Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4 mb-3">
                                            <div className="position-relative d-inline-block">
                                                <img src={gridviewInstructorData.userImg?.preview} alt="" className="avatar-md rounded" />

                                                <span className="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span className="visually-hidden">unread messages</span></span>
                                            </div>
                                            <Link to="/apps-instructors-overview">
                                                <h6 className="fs-md mt-4 mb-1">{gridviewInstructorData.username}</h6>
                                            </Link>
                                            <p className="text-muted fs-sm mb-0">{gridviewInstructorData.jobPosition}</p>
                                        </div>

                                        <ul className="list-unstyled text-muted vstack gap-2 mb-0 overflow-hidden">
                                            <li>
                                                <Link to="mailto:ayaan@steex.com" className="text-reset d-block text-truncate"><i className="bi bi-envelope align-baseline me-1"></i> {gridviewInstructorData.email}</Link>
                                            </li>
                                            <li>
                                                <Link to="tel:+(152) 15963 24785" className="text-reset"><i className="bi bi-telephone align-baseline me-1"></i> {gridviewInstructorData.phone}</Link>
                                            </li>
                                            <li>
                                                <i className="ph ph-graduation-cap align-baseline me-1"></i> {gridviewInstructorData.course} Courses
                                            </li>
                                        </ul>

                                    </Card.Body>
                                    <Card.Body className="border-top border-1 border-dashed d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <span className="badge bg-warning-subtle text-warning"><i className="bi bi-star-fill align-baseline me-1"></i> {gridviewInstructorData.rating} </span>
                                        </div>
                                        <div className="flex-shrink-0"></div>
                                        <Link to="/apps-instructors-overview" className="link-effect">Overview <i className="bi bi-arrow-right align-baseline ms-1"></i></Link>
                                    </Card.Body>
                                </Card>


                            </Col>
                        ))}
                    </Row>

                    <Modal className="fade" show={add_modal} onHide={handleClose} tabIndex={-1} contentClassName="border-0">
                        <Modal.Header closeButton>
                            <Modal.Title as="h5" id="exampleModalLabel">{instructorgrid ? "Edit Instructor" : "Add Instructor"}</Modal.Title>
                            {/* <button type="button" className="btn-close" onClick={() => tog_modal()} data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button> */}
                        </Modal.Header>
                        <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                            <Modal.Body>
                                <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>

                                <div className="mb-3">
                                    <Form.Label>Instructor Image<span className="text-danger">*</span></Form.Label>
                                    <Dropzone
                                        onDrop={(acceptedFiles: any) => {
                                            handleAcceptfiles(acceptedFiles);
                                            formik.setFieldValue("userImg", acceptedFiles[0])
                                        }}
                                        name="userImg"
                                        value={formik.values.userImg || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.userImg}
                                    >
                                        {({ getRootProps }: any) => (
                                            <div className="dropzone course-dropzone border border-1 border-dashed text-center" style={{ "minHeight": "80px" }}>
                                                <div className="dz-message needsclick"
                                                    {...getRootProps()}
                                                >
                                                    <div className="mb-3">
                                                        <i className="bi bi-cloud-download fs-1" />
                                                    </div>
                                                    <h5 className='fs-md mb-0'>Drop image here or click to upload.</h5>
                                                </div>
                                            </div>
                                        )}
                                    </Dropzone>
                                    {formik.errors.userImg && formik.touched.userImg ? (
                                        <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.userImg}</Form.Control.Feedback>
                                    ) : null}
                                    <ul className="list-unstyled mb-0" id="course-preview">
                                        {(selectfeils || [])?.map((f: any, i: number) => {
                                            console.log("instructorgrid", f);

                                            return (
                                                <li
                                                    className="mt-2 " id="course-preview-list"
                                                    key={i + "-file"}
                                                >
                                                    <div className="border rounded">
                                                        <div className="d-flex flex-wrap gap-2 p-2">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className='avatar-sm bg-light rounded p-2'>
                                                                    <img data-dz-thumbnail="" height="80" className="img-fluid rounded d-block" alt={f?.name || ''} src={f?.preview} />
                                                                </div>
                                                            </div>
                                                            <div className='flex-grow-1'>
                                                                <div className="pt-1">
                                                                    <h5 className='fs-md mb-1' data-dz-name>{f?.name || 'image-1'}</h5>
                                                                    {f?.size && <p className="fs-sm text-muted mb-0" data-dz-size=""><strong>{f?.size?.toString()?.charAt(0)}</strong> KB</p>}
                                                                </div>
                                                            </div>
                                                            <div className='flex-shrink-0 ms-3'>
                                                                <Button variant="danger" size="sm" onClick={() => {
                                                                    const newImages = [...selectfeils];
                                                                    newImages.splice(i, 1);
                                                                    setSelectfeils(newImages);
                                                                }}>Delete</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <Row>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="instuctor-id-input">Instructor ID</Form.Label>
                                            <Form.Control type="text" id="instuctor-id-input" value="#TBSI159011" disabled />
                                        </div>
                                    </Col>

                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="instructor-name-input">Instructor Name<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="instructor-name-input"
                                                placeholder="Enter instructor name"
                                                name="username"
                                                value={formik.values.username || ''}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.username}
                                            />
                                            {formik.errors.username && formik.touched.username ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="email-input">Email<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="email"
                                                id="email-input"
                                                placeholder="Email"
                                                name="email"
                                                value={formik.values.email || ''}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.email}
                                            />
                                            {formik.errors.email && formik.touched.email ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="rating">Rate<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="number"
                                                id="rating"
                                                placeholder="rating"
                                                name="rating"
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
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="students-input">Students</Form.Label>
                                            <Form.Control
                                                type="number"
                                                id="students-input"
                                                placeholder="Students"
                                                name="students"
                                                value={formik.values.students || ''}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.students}
                                            />
                                            {formik.errors.students && formik.touched.students ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.students}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="total-courses-input">Total Courses<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="number"
                                                id="total-courses-input"
                                                placeholder="Total courses"
                                                name="course"
                                                value={formik.values.course || ''}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.course}
                                            />
                                            {formik.errors.course && formik.touched.course ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.course}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="status-input">Status<span className="text-danger">*</span></Form.Label>
                                            <Form.Select
                                                id="status-input"
                                                name="status"
                                                value={formik.values.status || ''}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.status}
                                            >

                                                <option value="">Select Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Unactive">Unactive</option>
                                            </Form.Select>
                                            {formik.errors.status && formik.touched.status ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.status}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="hstack gap-2 justify-content-end">
                                    <Button variant="ghost-danger" onClick={() => tog_modal()}><i className="bi bi-x-lg align-baseline me-1"></i> Close</Button>
                                    <Button type="submit" variant="primary" id="add-btn">{instructorgrid ? "Edit Instructor" : "Add Instructor"}</Button>
                                </div>
                            </Modal.Footer>
                        </Form>
                    </Modal>

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
                        estateList={instructorgridList}
                    />

                </Container>
            </div>
            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />
            <ToastContainer />
        </React.Fragment>
    )
}

export default GridViewInstructor