import BreadCrumb from "Common/BreadCrumb";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Col, Container, Form, Row, Badge, Button, Modal } from "react-bootstrap";
import { InstuctorActivity, TotalCourses, TotalInstructors } from "./Instructormap";
import TableContainer from "Common/TableContainer";
import { Link } from "react-router-dom";
import { DeleteModal } from "Common/DeleteModal";
import {
    getInstructorList as onGetInstructorList,
    addInstructorList as onAddInstructorList,
    updateInstructorList as onUpdateInstructorList,
    deleteInstructorList as onDeleteInstructorList
} from "slices/learning/thunk"
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createSelector } from "reselect";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PatternFormat } from "react-number-format";

const ListViewInstructor = () => {

    document.title = "List View | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectInstructorList = createSelector(
        (state: any) => state.Learning,
        (learning) => ({
            instructorList: learning.instructorList
        })
    );

    const { instructorList } = useSelector(selectInstructorList);


    useEffect(() => {
        dispatch(onGetInstructorList());
    }, [dispatch]);

    const [instructor, setInstructor] = useState<any>();
    const [show, setShow] = useState(false);
    const [instructorlist, setInstructorlist] = useState<any>(null);
    const [selectfeils, setSelectfeils] = useState<any>([]);

    const [addInstructors, setAddInstructors] = useState<boolean>(false);
    const [editInstructors, setEditInstructors] = useState<boolean>(false);

    //add instructor modal
    const handleAddShow = () => setAddInstructors(true);
    const handleAddClose = () => {
        setAddInstructors(false);
        setEditInstructors(false);
        setInstructorlist(null);
        setSelectfeils(null);
    };

    //edit instructor modal
    const handleEditeShow = useCallback((item: any) => {
        setEditInstructors(true);
        handleAddShow();
        setInstructorlist({
            id: item?.id,
            img: item?.img,
            name: item?.name,
            email: item?.email,
            totalcourse: item?.totalcourse,
            experience: item?.experience,
            students: item?.students,
            contact: item?.contact,
            rating: item?.rating,
            status: item?.status
        })
        setSelectfeils([item?.img])
    }, []);

    //search
    const handleSearch = (event: any) => {
        let search = event.target.value;
        if (search) {
            // search = search?.toLowerCase();
            setInstructor(instructorList.filter((data: any) => data.name?.toLowerCase().includes(search)));
        } else {
            setInstructor(instructorList);
        }
    }

    const handleDeleteShow = (ele: any) => { setShow(true); setInstructorlist(ele) };
    const handleDeleteClose = () => setShow(false);

    //delete modal
    const deleteModalFunction = () => {
        if (instructorlist.id) {
            dispatch(onDeleteInstructorList(instructorlist.id));
        }
        setShow(false);
        setInstructorlist(null)
    }

    useEffect(() => {
        setInstructor(instructorList)
    }, [instructorList])

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
                        <Form.Check
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
                Header: "ID",
                accessor: "id",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <Link to="#" className="fw-medium link-primary">#TBSI1590{cell.row.original.id}</Link>
                    )
                }
            },
            {
                Header: "instructor",
                accessor: "instructor",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <div className="d-flex gap-2 align-items-center">
                            <div className="flex-shrink-0">
                                <img src={cell.row.original.img.priview} alt="" className="avatar-xxs rounded-circle" />
                            </div>
                            <div className="flex-grow-1">
                                <Link to="/apps-instructors-overview" className="text-reset">{cell.row.original.name}</Link>
                            </div>
                        </div>
                    )
                }
            },
            {
                Header: "Total Courses",
                accessor: "totalcourse",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.totalcourse}</span>
                    )
                }
            },
            {
                Header: "Email",
                accessor: "email",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.email}</span>
                    )
                }
            },
            {
                Header: "Experience",
                accessor: "Experience",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.experience}</span>
                    )
                }
            },
            {
                Header: "Students",
                accessor: "Students",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.students}</span>
                    )
                }
            },
            {
                Header: "contact",
                accessor: "contact",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.contact}</span>
                    )
                }
            },
            {
                Header: "Rating",
                accessor: "Rating",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>
                            <i className="bi bi-star-fill text-warning align-baseline me-1"></i> <span className="rating-value"> {cell.row.original.rating}</span>
                        </span>)

                }
            },
            {
                Header: "Status",
                Filter: false,
                isSortable: true,
                accessor: (cell: any) => {
                    switch (cell.status) {
                        case "Active":
                            return <Badge text="success" bg="success-subtle">{cell.status}</Badge>
                        default:
                            return <Badge text="danger" bg="danger-subtle">{cell.status}</Badge>
                    }

                }
            },
            {
                Header: "Action",
                Filter: false,
                isSortable: false,
                accessor: (cell: any) => {
                    return (
                        <ul className="d-flex gap-2 list-unstyled mb-0">
                            <li>
                                <Link to="/apps-instructors-overview" className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" onClick={() => handleEditeShow(cell)}><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" onClick={() => handleDeleteShow(cell)}><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
                    )
                }
            },
        ], [handleEditeShow]
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
            id: (instructorlist && instructorlist?.id) || '',
            img: (instructorlist && instructorlist.img) || '',
            name: (instructorlist && instructorlist.name) || '',
            email: (instructorlist && instructorlist.email) || '',
            totalcourse: (instructorlist && instructorlist.totalcourse) || '',
            experience: (instructorlist && instructorlist.experience) || '',
            students: (instructorlist && instructorlist.students) || '',
            contact: (instructorlist && instructorlist.contact) || '',
            rating: (instructorlist && instructorlist.rating) || '',
            status: (instructorlist && instructorlist.status) || ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Name"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            totalcourse: Yup.number().required("Please Enter Your Courses"),
            experience: Yup.string().required("Please Enter experience"),
            students: Yup.number().required("Please Enter Students  No"),
            contact: Yup.string().required("Please Enter Your Contact No "),
            rating: Yup.string().required("Please Enter Your Rating No "),
            status: Yup.string().required("Please Enter Your status No "),
            img: Yup.mixed().required("Please Select Your Image"),
        }),
        onSubmit: (values: any) => {
            if (editInstructors) {
                const update = {
                    id: values.id,
                    img: values.img,
                    name: values.name,
                    email: values.email,
                    totalcourse: values.totalcourse,
                    experience: values.experience,
                    students: values.students,
                    contact: values.contact,
                    rating: values.rating,
                    status: values.status
                }
                dispatch(onUpdateInstructorList(update));
                formik.resetForm();
            } else {
                const newData = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    img: values['img'],
                    name: values['name'],
                    email: values['email'],
                    totalcourse: values['totalcourse'],
                    experience: values['experience'],
                    students: values['students'],
                    contact: values['contact'],
                    rating: values['rating'],
                    status: values['status']
                }
                dispatch(onAddInstructorList(newData));
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
                    <BreadCrumb title="List View" pageTitle="Instructors" />
                    <div id="instructorList">
                        <Row>
                            <Col xxl={2} sm={6}>
                                <Card className="card-height-100">
                                    <Card.Body className="text-center">
                                        <div id="total_instructors" className="radialbar-chart-effect-primary" dir="ltr">
                                            <TotalInstructors dataColors='["--tb-primary"]' />
                                        </div>
                                        <Card.Title as="h5" className="mt-3">Total Instructors</Card.Title>
                                        <p className="text-muted mb-0"><span className="text-success"><i className="ph ph-trend-up align-middle me-1"></i> 07.78%</span> than last week</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={2} sm={6}>
                                <Card className="card-height-100">
                                    <Card.Body className="text-center">
                                        <div id="total_courses" className="radialbar-chart-effect-secondary" dir="ltr">
                                            <TotalCourses dataColors='["--tb-secondary"]' />
                                        </div>
                                        <Card.Title as="h5" className="mt-3">Total Courses</Card.Title>
                                        <p className="text-muted mb-0"><span className="text-danger"><i className="ph ph-trend-down align-middle me-1"></i>01.39%</span> than last week</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={8}>
                                <Card>
                                    <Card.Header className="d-flex align-items-center">
                                        <Card.Title as="h6" className="flex-grow-1 mb-0">Instructor Activity</Card.Title>
                                        <div className="flex-shrink-0 d-flex gap-1">
                                            <button type="button" className="btn btn-subtle-secondary btn-sm">
                                                ALL
                                            </button>
                                            <button type="button" className="btn btn-secondary btn-sm">
                                                1M
                                            </button>
                                            <button type="button" className="btn btn-subtle-secondary btn-sm">
                                                6M
                                            </button>
                                            <button type="button" className="btn btn-subtle-secondary btn-sm">
                                                1Y
                                            </button>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className=" ps-2">
                                        <div id="instuctor_activity" dir="ltr">
                                            <InstuctorActivity dataColors='["--tb-primary", "--tb-light", "--tb-secondary"]' />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <Card.Header>
                                        <Row className="align-items-center g-2">
                                            <Col lg={3} className="me-auto">
                                                <Card.Title as="h6" className="mb-0">Instructors List <Badge bg="primary" className="ms-1 align-baseline">235</Badge></Card.Title>
                                            </Col>
                                            <Col xl={2} lg={3} sm={5}>
                                                <div className="search-box">
                                                    <Form.Control type="text" className="search" placeholder="Search for instructors, email, contact number or something..." onChange={handleSearch} />
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </Col>
                                            <Col className="col-sm-auto">
                                                <div className="hstack gap-2">
                                                    <Button className="btn btn-subtle-danger d-none" id="remove-actions"><i className="ri-delete-bin-2-line"></i></Button>
                                                    <Link to="#" className="btn btn-secondary" onClick={handleAddShow}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Instructor</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Header>
                                    <Card.Body className="mt-3">
                                        {
                                            instructor && instructor.length > 0 ?
                                                <TableContainer
                                                    isPagination={true}
                                                    columns={columns}
                                                    data={instructor || []}
                                                    customPageSize={10}
                                                    divClassName="table-responsive table-card"
                                                    tableClass="table-centered align-middle table-custom-effect table-nowrap mb-0"
                                                    theadClass="table-light"
                                                    PaginationClassName="align-items-center mt-4 pt-3"
                                                    isBordered={false}
                                                    SearchPlaceholder="" />
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
                    </div >
                </Container >
            </div >

            <Modal show={addInstructors} onHide={handleAddClose}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5" id="addInstructorModalLabel">{editInstructors ? "Edit Instructor" : "Add Instructor"}</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label>Instructor Image<span className="text-danger">*</span></Form.Label>
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
                                    <div className="dropzone instrucor-dropzone border border-1 border-dashed text-center" style={{ minHeight: "80px" }}>
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
                            {formik.errors.img && formik.touched.img ? (
                                <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.img}</Form.Control.Feedback>
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
                                                                <img data-dz-thumbnail="" className="img-fluid rounded d-block" src={file?.priview} alt={file.name} />
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
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="name-input">Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="name-input"
                                        placeholder="Enter instructor name"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.name}
                                    />
                                    {formik.errors.name && formik.touched.name ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>

                            <Col lg={12} >
                                <div className="mb-3">
                                    <Form.Label htmlFor="email-input" >Email<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        name="email"
                                        value={formik.values.email}
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
                                    <Form.Label htmlFor="total-courses-input">Total Courses<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="totalcourses"
                                        placeholder="Total courses"
                                        name="totalcourse"
                                        value={formik.values.totalcourse}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.totalcourse}
                                    />
                                    {formik.errors.totalcourse && formik.touched.totalcourse ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.totalcourse}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="experience-input">Experience<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="experience"
                                        placeholder="experience"
                                        name="experience"
                                        value={formik.values.experience}
                                        onChange={formik.handleChange}
                                        // onChange={(experience) => formik.setFieldValue("experience", experience)}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.experience} />
                                    {formik.errors.experience && formik.touched.experience ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.experience}</Form.Control.Feedback>
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
                                        value={formik.values.students}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.students} />
                                    {formik.errors.students && formik.touched.students ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.students}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="contact-input">Contact<span className="text-danger">*</span></Form.Label>
                                    <PatternFormat
                                        className="form-control"
                                        displayType="input"
                                        id="contact-input"
                                        placeholder="Enter contact no"
                                        name="contact"
                                        format="+(###) ##### #####"
                                        value={formik.values.contact}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.contact && formik.touched.contact ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.contact}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="rating-input">Rating<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="rating"
                                        placeholder="Rating"
                                        name="rating"
                                        value={formik.values.rating}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.rating} />
                                    {formik.errors.rating && formik.touched.rating ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.rating}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="status-input">Status<span className="text-danger">*</span></Form.Label>
                                    <Form.Select id="status-input"
                                        name="status"
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.status}>
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
                            <Button className="btn btn-ghost-danger" onClick={handleAddClose}>
                                <i className="bi bi-x-lg align-baseline me-1"></i>  Close</Button>
                            <Button type="submit" className="add-btn" variant="primary"> {editInstructors ? "Edit Course" : "Add Course"}  </Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />

            <ToastContainer />
        </React.Fragment >
    );
}

export default ListViewInstructor;