import React, { useState, useEffect, useMemo } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Badge, Button, Card, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import { useFormik } from "formik";
import * as Yup from "yup";
import Flatpickr from 'react-flatpickr';
import {
    getCourseGridList as onGetCourseGridList,
    addCourseGridList as onAddCourseGridList,
    updateCourseGridList as onUpdateCourseGridList,
    deleteCourseGridList as onDeleteCourseGridList
} from "slices/learning/thunk";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteModal } from "Common/DeleteModal";
import moment from 'moment';

//img 
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar2 from "assets/images/users/avatar-2.jpg";
import PaginationFile from 'Common/PaginationFile';
import { ToastContainer } from 'react-toastify';
import { createSelector } from 'reselect';

const Gridview = () => {
    document.title = "Gridview | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectCoursegridList = createSelector(
        (state: any) => state.Learning,
        (learning) => ({
            coursegridList: learning.coursegridList
        })
    );

    const { coursegridList } = useSelector(selectCoursegridList);

    useEffect(() => {
        dispatch(onGetCourseGridList());
    }, [dispatch]);

    const id: number = (Math.floor(Math.random() * (30 - 20)) + 20);
    const userImg: any = id % 2 === 0 ? avatar1 : avatar2;

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [coursegrid, setCoursegrid] = useState<any>();

    const [add_modal, setAdd_modal] = useState<boolean>(false);
    const handleClose = () => { setAdd_modal(false); setIsEdit(false); setSelectfeils(null); setCoursegrid(null); };
    function tog_modal() {
        setAdd_modal(true);
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

    const currentdata = useMemo(() => coursegridList.slice(indexOfFirst, indexOfLast), [coursegridList, indexOfFirst, indexOfLast])

    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, currentdata])

    const searchTeamMember = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase()
            setCurrentpages(coursegridList.filter((data: any) => (data.cardTitle.toLowerCase().includes(search))));
            setPagination(false)
        } else {
            setCurrentpages(currentdata);
            setPagination(true)
        }
    };

    const handleSelect = (ele: any) => {
        let select = ele.target.value;
        if (select) {
            setCurrentpages(coursegridList.filter((data: any) => data?.status === select || select === "all"));
            setPagination(false)
        } else {
            setCurrentpages(coursegridList);
            setPagination(true)
        }
    }

    const handleToogleIcon = (ele: any) => {
        if (ele?.closest('button').classList.contains('active')) {
            ele?.closest('button').classList.remove('active')
        } else {
            ele?.closest('button').classList.add('active')
        }
    }

    const pageNumbers: any = [];
    for (let i = 1; i <= Math.ceil(coursegridList.length / perPageData); i++) {
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

    const handleDeleteShow = (ele: any) => { setShow(true); setCoursegrid(ele) };
    const handleDeleteClose = () => setShow(false);

    //delete modal
    const deleteModalFunction = () => {
        if (coursegrid.id) {
            dispatch(onDeleteCourseGridList(coursegrid.id));
        }
        setShow(false);
        setCoursegrid(null);
    }

    useEffect(() => {
        setCurrentpages(coursegridList)
    }, [coursegridList]);


    const handleEditData = (item: any) => {
        setIsEdit(true);
        tog_modal();
        setCoursegrid({
            id: item?.id,
            cardTitle: item?.cardTitle,
            logoImg: item?.logoImg,
            course: item?.course,
            lessons: item?.lessons,
            students: item?.students,
            badgeText: item?.badgeText,
            username: item?.username,
            courseDuration: item?.courseDuration
        });

        setSelectfeils([item?.logoImg]);
    }

    const formik: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
        initialValues: {
            id: (coursegrid && coursegrid?.id) || '',
            cardTitle: (coursegrid && coursegrid?.cardTitle) || '',
            logoImg: (coursegrid && coursegrid?.logoImg) || '',
            course: (coursegrid && coursegrid?.course) || '',
            lessons: (coursegrid && coursegrid?.lessons) || '',
            students: (coursegrid && coursegrid?.students) || '',
            courseDuration: (coursegrid && coursegrid?.courseDuration) || '',
            username: (coursegrid && coursegrid?.username) || '',
            badgeText: (coursegrid && coursegrid?.badgeText) || '',
        },
        validationSchema: Yup.object({
            cardTitle: Yup.string().required("Please Enter Your Product Name"),
            course: Yup.string().required("Please Enter Your Course"),
            lessons: Yup.string().required("Please Enter Your Lessons"),
            students: Yup.string().required("Please Enter Your Students"),
            courseDuration: Yup.string().required("Please Enter Your Time"),
            username: Yup.string().required("Please Enter Your Name"),
            badgeText: Yup.string().required("Please Enter Your Status"),
            logoImg: Yup.mixed().required("Please Select Your Image"),
        }),
        onSubmit: (values: any) => {
            if (isEdit) {
                const updateGrid = {
                    id: coursegrid && coursegrid.id,
                    cardTitle: values?.cardTitle,
                    logoImg: values?.logoImg,
                    course: values?.course,
                    lessons: values?.lessons,
                    students: values?.students,
                    courseDuration: values?.courseDuration,
                    badgeText: values?.badgeText,
                    username: values.username,
                    userImg: userImg
                }
                dispatch(onUpdateCourseGridList(updateGrid));
                formik.resetForm();
            } else {
                const newGrid = {
                    id: id,
                    cardTitle: values["cardTitle"],
                    logoImg: values["logoImg"],
                    course: values["course"],
                    lessons: values["lessons"],
                    students: values["students"],
                    courseDuration: values["courseDuration"],
                    badgeText: values["badgeText"],
                    username: values["username"],
                    userImg: userImg
                }
                dispatch(onAddCourseGridList(newGrid));
                formik.resetForm();
            }
            if (values === null) {
                tog_modal();
            } else {
                handleClose();
            }
        }
    });
    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid >
                    <Breadcrumb title="Grid View" pageTitle="Courses" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="align-items-center gy-3">
                                        <Col lg={3} className="order-last order-md-first me-auto">
                                            <div className="search-box">
                                                <Form.Control type="text" className="search" placeholder="Search for agent..." onChange={(e) => searchTeamMember(e)} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                            <div>
                                                <Form.Select
                                                    onChange={handleSelect}>
                                                    <option value="Open">Active</option>
                                                    <option value="Close">Unactive</option>
                                                </Form.Select>
                                            </div>
                                        </Col>
                                        <div className="col-lg-auto text-end">
                                            <div className="d-flex gap-2">
                                                <Button variant="secondary" onClick={() => tog_modal()}><i className="bi bi-person-plus align-baseline me-1"></i> Add Course</Button>
                                                <Link to="/apps-learning-grid" className="active btn btn-subtle-primary btn-icon ms-auto"><i className="bi bi-grid"></i></Link>
                                                <Link to="/apps-learning-list" className="btn btn-subtle-primary btn-icon"><i className="bi bi-list-task"></i></Link>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="row-cols-xl-5 row-cols-sm-2 row-cols-1">

                        {currentpages.map((GridViewdata: any, key: any) => (
                            <Col key={key}>
                                <Card className="overflow-hidden">
                                    <Card.Body className={`bg-${GridViewdata.badgeColor}-subtle text-center learning-widgets d-flex align-items-center justify-content-center`}>
                                        <img src={GridViewdata.logoImg?.preview} alt="" className="avatar-lg" />
                                        <img src={GridViewdata.logoImg?.preview} alt="" className="effect" />
                                    </Card.Body>
                                    <Card.Body>
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="flex-grow-1">
                                                {
                                                    GridViewdata.badgeText === "Intermediate" ?
                                                        <Badge bg="danger-subtle" text='danger'>{GridViewdata.badgeText}</Badge>
                                                        :
                                                        GridViewdata.badgeText === "Beginner" ?
                                                            <Badge bg="success-subtle" text='success'>{GridViewdata.badgeText}</Badge>
                                                            :
                                                            <Badge bg="info-subtle" text='info'>{GridViewdata.badgeText}</Badge>
                                                }
                                            </div>
                                            <div className="flex-shrink-0">
                                                <Button variant='subtle-warning' size='sm' className="btn custom-toggle active btn-icon" onClick={(e) => handleToogleIcon(e.target)}>
                                                    {/* {GridViewdata.icon === "on" ? <span className="icon-on"><i className="bi bi-star"></i></span> : <span className="icon-off"><i className="bi bi-star-fill"></i></span>} */}
                                                    <span className="icon-on"><i className="bi bi-star"></i></span>
                                                    <span className="icon-off"><i className="bi bi-star-fill"></i></span>
                                                </Button>
                                            </div>
                                        </div>
                                        <h6 className="text-truncate fs-md text-capitalize"><Link to="/apps-learning-overview" className="text-reset">{GridViewdata.cardTitle}</Link></h6>
                                        <p className="text-muted">{GridViewdata.course}</p>
                                        <ul className="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                            <li>
                                                <p className="text-muted mb-0"><i className="bi bi-clock align-baseline text-secondary me-1"></i>{GridViewdata.courseDuration}</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-student align-middle text-secondary me-1"></i> {GridViewdata.students}</p>
                                            </li>
                                            <li>
                                                <p className="text-muted mb-0"><i className="ph ph-graduation-cap align-middle text-secondary me-1"></i> {GridViewdata.lessons} Lessons</p>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    <div className="card-body border-top hstack align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                                            <div className="flex-shrink-0">
                                                <img src={GridViewdata.userImg} alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <h6 className="flex-grow-1 mb-0"><Link to="/pages-profile" className="text-reset stretched-link">{GridViewdata.username}</Link></h6>
                                        </div>
                                        <Dropdown className="flex-shrink-0 curser-pointer">
                                            <Dropdown.Toggle type="button" bsPrefix="btn-icon btn-secondary btn-sm">
                                                <i className="bi bi-three-dots"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item href={"/apps-learning-overview"}><i className="bi bi-eye align-baseline me-1"></i> Overview</Dropdown.Item></li>
                                                <li><Dropdown.Item onClick={() => {
                                                    // tog_modal()
                                                    handleEditData(GridViewdata)
                                                }}><i className="bi bi-pencil-square align-baseline me-1"></i> Edit</Dropdown.Item></li>
                                                <li><Dropdown.Item onClick={() => handleDeleteShow(GridViewdata)}><i className="bi bi-trash3 align-baseline me-1"></i> Delete</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card>
                            </Col>
                        ))}
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
                        estateList={coursegridList}
                    />

                    <Modal className="fade" show={add_modal} onHide={handleClose}
                        // tabIndex={-1}
                        contentClassName="border-0">
                        <Modal.Header className="bg-danger p-3" closeVariant="white" closeButton>
                            <Modal.Title as="h5" className="text-white" id="exampleModalLabel">{isEdit ? "Edit Course" : "Add Course"}</Modal.Title>
                            {/* <Button variant="close-white" onClick={() => tog_modal()} className="btn-close"></Button> */}
                        </Modal.Header>

                        <Form className="tablelist-form" onSubmit={formik.handleSubmit} autoComplete='off'>
                            <Modal.Body>
                                <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>
                                <div className="mb-3">
                                    <Form.Label>Course Image<span className="text-danger">*</span></Form.Label>
                                    <Dropzone
                                        onDrop={(acceptfiles: any) => {
                                            handleAcceptfiles(acceptfiles);
                                            formik.setFieldValue("logoImg", acceptfiles[0]);
                                        }}
                                        name="logoImg"
                                        value={formik.values.logoImg}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.logoImg}
                                    >
                                        {({ getRootProps }: any) => (
                                            <div className="dropzone course-dropzone border border-1 border-dashed text-center dz-clickable" style={{ minHeight: "80px" }}>
                                                <div
                                                    className="dz-message needsclick my-3"
                                                    {...getRootProps()}
                                                >
                                                    <div className="mb-3">
                                                        <i className="bi bi-cloud-download fs-1"></i>
                                                    </div>
                                                    <h5 className="fs-md mb-0">Drop image here or click to upload.</h5>
                                                </div>
                                            </div>
                                        )}
                                    </Dropzone>
                                    {formik.errors.logoImg && formik.touched.logoImg ? (
                                        <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.logoImg}</Form.Control.Feedback>
                                    ) : null}

                                    <ul className="list-unstyled mb-0" id="dropzone-preview">
                                        {
                                            (selectfeils || [])?.map((file: any, index: number) => {
                                                return (
                                                    <li className="mt-2" id="dz-image-preview" key="">
                                                        <div className="border rounded">
                                                            <div className="d-flex flex-wrap gap-2 p-2">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div className="avatar-sm bg-light rounded p-2">
                                                                        <img data-dz-thumbnail="" className="img-fluid rounded d-block" src={file.preview} alt={file.name} />
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
                                    <Form.Label htmlFor="course-title-input">Course title<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="cardTitle"
                                        placeholder="Enter course title"
                                        name="cardTitle"
                                        value={formik.values.cardTitle}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.cardTitle}
                                    />
                                    {formik.errors.cardTitle && formik.touched.cardTitle ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.cardTitle}</Form.Control.Feedback>
                                    ) : null}
                                </div>


                                <div className="mb-3">
                                    <Form.Label htmlFor="course" >Course Category<span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        className='form-control'
                                        id="course"
                                        name="course"
                                        value={formik.values.course}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.course}
                                    >
                                        <option value="">Select Course Category</option>
                                        <option value="Marketing & Management">Marketing & Management</option>
                                        <option value="React Development">React Development</option>
                                        <option value="Shopify Development">Shopify Development</option>
                                        <option value="Graphic Design">Graphic Design</option>
                                        <option value="Laravel Development">Laravel Development</option>
                                        <option value="Flask Development">Flask Development</option>
                                        <option value="Web Design">Web Design</option>
                                        <option value="Asp.Net Development">Asp.Net Development</option>
                                        <option value="Marketing & Management">Marketing & Management</option>
                                        <option value="PHP Development">PHP Development</option>
                                        <option value="Graphic Design">Graphic Design</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Data Science">Data Science</option>
                                    </Form.Select>
                                    {formik.errors.course && formik.touched.course ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.course}</Form.Control.Feedback>
                                    ) : null}
                                </div>

                                <Row>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="Property-username-input">User Name<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter User Name"
                                                id="Property-username-input"
                                                name="username"
                                                value={formik.values.username}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.username} />
                                            {formik.errors.username && formik.touched.username ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="lessons-input">Lessons<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Lessons"
                                                id="lessons"
                                                name="lessons"
                                                value={formik.values.lessons}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.lessons}
                                            />
                                            {formik.errors.lessons && formik.touched.lessons ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.lessons}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="students-input">Students</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Students"
                                                id="students"
                                                name="students"
                                                value={formik.values.students}
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
                                            <Form.Label htmlFor="duration-input">Duration Time<span className="text-danger">*</span></Form.Label>
                                            <Flatpickr
                                                className="form-control"
                                                options={{
                                                    mode: "single",
                                                    dateFormat: 'd M, Y',
                                                }}
                                                id="courseDuration"
                                                name="courseDuration"
                                                placeholder="Select duration"
                                                value={formik.values.courseDuration || ''}
                                                onChange={(courseDuration: any) => formik.setFieldValue("courseDuration", moment(courseDuration[0], 'YYYY').fromNow())}
                                            />
                                            {formik.errors.courseDuration && formik.touched.courseDuration ? (
                                                <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.courseDuration}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="status-input">Status<span className="text-danger">*</span></Form.Label>
                                            <Form.Select
                                                className='form-control'
                                                id="status-input"
                                                name="badgeText"
                                                value={formik.values.badgeText}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.badgeText}
                                            >
                                                <option value="">Select your Status</option>
                                                <option value="Intermediate">Intermediate</option>
                                                <option value="Beginner">Beginner</option>
                                                <option value="Advance">Advance</option>
                                            </Form.Select>
                                            {formik.errors.badgeText && formik.touched.badgeText ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.badgeText}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="hstack gap-2 justify-content-end">
                                    <Button variant="ghost-danger" onClick={handleClose}><i className="bi bi-x-lg align-baseline me-1"></i> Close</Button>
                                    <Button type="submit" variant="primary" id="add-btn">{isEdit ? "Edit Course" : "Add Course"}</Button>
                                </div>
                            </Modal.Footer>
                        </Form>
                    </Modal>

                </Container>
            </div>
            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />
            <ToastContainer />
        </React.Fragment >
    )
}

export default Gridview