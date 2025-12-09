import React, { useMemo, useEffect, useState, useCallback } from 'react';
import TableContainer from "Common/TableContainer";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    deleteCourseList as onDeleteCourseList,
    getCourseList as onGetCourseList,
    updateCourseList as onupdateCourseList
} from 'slices/thunk';
import { DeleteModal } from "../../../../Common/DeleteModal";
import { Form, Badge, Modal, Row, Col, InputGroup, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from 'formik';
import Dropzone from 'react-dropzone';

const ListViewTable = (course: any) => {
    const dispatch = useDispatch<any>();
    const [editCourse, setEditCourse] = useState<boolean>(false);
    const [editData, setEditData] = useState<any>();
    const [selectfeils, setSelectfeils] = useState<any>([]);

    //edit course modal
    const handleEditClose = () => {
        setEditCourse(false);
        setSelectfeils(null);
        setEditData(null);
    };
    const handleEditShow = useCallback((item: any) => {
        setEditCourse(true);
        setEditData({
            id: item?.id,
            category: item?.category,
            logoImg: item?.logoImg,
            coursename: item?.coursename,
            instructor: item?.instructor,
            lessons: item?.lessons,
            rating: item?.rating,
            students: item?.students,
            fees: item?.fees,
            status: item?.status,
        })
        setSelectfeils([item?.logoImg])
    }, []);


    useEffect(() => {
        dispatch(onGetCourseList());
    }, [dispatch]);

    // Delete customer
    const [deleteModal, setDeleteModal] = useState(false);

    const columns = useMemo(
        () => [
            {
                Header: (<Form.Check> <Form.Check.Input type="checkbox" id="checkAll" value="option" /> </Form.Check>),
                Cell: (cellProps: any) => {
                    return (<Form.Check> <Form.Check.Input type="checkbox" name="chk_child" defaultValue="option1" /> </Form.Check>);
                },
                id: '#',
                Filter: false,
                isSortable: false,
            },
            {
                Header: "Category",
                accessor: "category",
                disableFilters: true,
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Course Name",
                accessor: (cellProps: any) => {
                    return (<div className="d-flex align-items-center gap-2">
                        <img src={cellProps.logoImg?.priview} alt="shopify.png" className="avatar-xxs rounded" />
                        <Link to="/apps-learning-overview" className="text-reset">{cellProps.coursename}</Link>
                    </div>)
                },
                disableFilters: true,
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Instructor",
                accessor: "instructor",
                disableFilters: true,
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Lessons",
                accessor: "lessons",
                disableFilters: true,
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Students",
                Cell: (cell: any) => {
                    return <span>{cell.row.original.students}</span>
                },
                disableFilters: true,
                Filter: false,
                isSortable: true
            },
            {
                Header: "Fees",
                accessor: (cell: any) => {
                    return (<span>${cell.fees}</span>)
                },
                disableFilters: true,
                Filter: false,
                isSortable: true,

            },
            {
                Header: "Rating",
                disableFilters: true,
                Filter: false,
                isSortable: true,
                accessor: (cell: any) => {
                    return <span><i className='bi bi-star-fill text-warning align-baseline me-1'></i>{cell.rating}</span>
                }
            },
            {
                Header: "Status",
                disableFilters: true,
                Filter: false,
                isSortable: true,

                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Open":
                            return (<Badge text='info' bg="info-subtle"> {cellProps.status}</Badge>)
                        default:
                            return (<Badge text='danger' bg="danger-subtle"> {cellProps.status}</Badge>)
                    }
                },
            },
            {
                Header: "Action",
                disableFilters: true,
                Filter: false,
                isSortable: false,
                accessor: (cellProps: any) => {
                    return (
                        <div className="d-flex gap-2 list-unstyled mb-0">
                            <div>
                                <Link to="/apps-learning-overview" className="btn btn-subtle-primary btn-icon btn-sm"><i className="ph-eye"></i></Link>
                            </div>
                            <div className="edit">
                                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" onClick={() => handleEditShow(cellProps)}><i className="ph-pencil"></i></Link>
                            </div>
                            <li>
                                <Link to="#"
                                    className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" onClick={() => { setCustomer(cellProps); setDeleteModal(true) }}>
                                    <i className="ph-trash"></i>
                                </Link>
                            </li>
                        </div>
                    )
                },
            },
        ],
        [handleEditShow]
    );

    const [customer, setCustomer] = useState<any>('');
    // Delete Data
    const handleDeleteCustomer = () => {
        if (customer) {
            dispatch(onDeleteCourseList(customer?.id));
            setDeleteModal(false);
        }
    };

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
            id: (editData && editData?.id) || '',
            logoImg: (editData && editData?.logoImg) || '',
            category: (editData && editData?.category) || '',
            coursename: (editData && editData?.coursename) || '',
            instructor: (editData && editData?.instructor) || '',
            lessons: (editData && editData?.lessons) || '',
            students: (editData && editData?.students) || '',
            rating: (editData && editData?.rating) || '',
            fees: (editData && editData?.fees) || '',
            status: (editData && editData?.status) || ''
        },
        validationSchema: Yup.object({
            coursename: Yup.string().required("Please Enter Your Course Name"),
            category: Yup.string().required("Please Select Your Category"),
            instructor: Yup.string().required("Please Enter Your instructor Name"),
            lessons: Yup.number().required("Please Enter Your Lessons"),
            students: Yup.number().required("Please Enter students Number"),
            rating: Yup.string().required("Please Enter Your Timeing "),
            fees: Yup.number().required("Please Enter Your Fees "),
            status: Yup.string().required("Please Select Your Course status "),
            logoImg: Yup.mixed().required("Please Select Your Image"),
        }),
        onSubmit: (values: any) => {
            const updateList = {
                id: values?.id,
                category: values?.category,
                logoImg: values?.logoImg,
                coursename: values?.coursename,
                instructor: values?.instructor,
                lessons: values?.lessons,
                rating: values?.rating,
                students: values?.students,
                fees: values?.fees,
                status: values?.status
            }
            dispatch(onupdateCourseList(updateList));
            formik.resetForm();
            if (values === null) {
                setEditCourse(true);
            } else {
                handleEditClose();
            }
        }
    });

    return (
        <React.Fragment>
            <DeleteModal
                show={deleteModal}
                deleteModalFunction={handleDeleteCustomer}
                handleClose={() => setDeleteModal(false)}
            />
            {course?.course && course?.course.length > 0 ?
                <TableContainer
                    isPagination={true}
                    columns={(columns || [])}
                    data={(course?.course || [])}
                    // isGlobalFilter={false}
                    iscustomPageSize={false}
                    isBordered={false}
                    customPageSize={10}
                    PaginationClassName="align-items-center mt-4 pt-2"
                    tableClass="table-centered align-middle table-custom-effect table-nowrap mb-0"
                    theadClass="text-muted"
                    SearchPlaceholder='Search Products...'
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

            <Modal show={editCourse} onHide={handleEditClose}>
                <Modal.Header className="bg-danger p-3" closeButton closeVariant="white">
                    <Modal.Title as="h5" className="text-white" id="addCourseModalLabel">Edit Course Details</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label>Course Image<span className="text-danger">*</span></Form.Label>
                            <Dropzone
                                onDrop={(acceptfiles: any) => {
                                    handleAcceptfiles(acceptfiles)
                                    formik.setFieldValue("logoImg", acceptfiles[0])
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
                            <Form.Label htmlFor="course-title-input">Course title<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="course-title-input"
                                placeholder="Enter course title"
                                name="coursename"
                                value={formik.values.coursename}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.coursename}
                            />
                            {formik.errors.coursename && formik.touched.coursename ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.coursename}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="course-category-input">Course Category<span className="text-danger">*</span></Form.Label>
                            <Form.Select
                                id="course-category-input"
                                name="category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.category}
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
                                <option value="PHP Development">PHP Development</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Data Science">Data Science</option>
                            </Form.Select>
                            {formik.errors.category && formik.touched.category ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.category}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="instructor-input" >Instructor<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="instructor"
                                        placeholder="Enter instructor name"
                                        name="instructor"
                                        value={formik.values.instructor}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.instructor}
                                    />
                                    {formik.errors.instructor && formik.touched.instructor ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.instructor}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="lessons-input" >Lessons<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="lessons"
                                        placeholder="Lessons"
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
                                    <Form.Label htmlFor="students-input" >Students</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="students"
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
                                    <Form.Label htmlFor="rating-input" >Rating<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="rating"
                                        placeholder="Select rating"
                                        name="rating"
                                        value={formik.values.rating}
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
                                    <Form.Label htmlFor="fees-input" >Fees<span className="text-danger">*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            id="fees"
                                            placeholder="0.00"
                                            name="fees"
                                            value={formik.values.fees}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.fees}
                                        />
                                        {formik.errors.fees && formik.touched.fees ? (
                                            <Form.Control.Feedback type="invalid">{formik.errors.fees}</Form.Control.Feedback>
                                        ) : null}
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="status-input" >Status<span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        className="form-select"
                                        id="status-input"
                                        name="status"
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.status}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Open">Open</option>
                                        <option value="Close">Close</option>
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
                            <Button className="btn btn-ghost-danger" onClick={handleEditClose}>
                                <i className="bi bi-x-lg align-baseline me-1"></i>  Close</Button>
                            <Button type="submit" className="add-btn" variant="primary"> update  </Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>

        </React.Fragment>
    );
};

export default ListViewTable;