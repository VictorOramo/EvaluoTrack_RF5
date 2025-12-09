import React, { useEffect, useState } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Button, Card, Col, Container, Form, Row, Offcanvas, Modal, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListViewTable from './ListviewTable';
import Nouislider from 'nouislider-react';
import * as Yup from "yup";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from 'react-redux';
import {
    getCourseList as onGetCourseList,
    addCourseList as onAddCourseList,
} from 'slices/thunk';
import { ToastContainer } from 'react-toastify';
import { createSelector } from 'reselect';
import { useFormik } from 'formik';

const CourseListview = () => {

    document.title = "List View | Steex - Admin & Dashboard Template";

    const selectCourseList = createSelector(
        (state: any) => state.Learning,
        (learning) => ({
            courseList: learning.courseList
        })
    );

    const { courseList } = useSelector(selectCourseList);

    const dispatch = useDispatch<any>();
    const [course, setCourse] = useState<any>();
    const [addCourse, setAddCourse] = useState<boolean>(false);
    const [courseFilters, setCourseFilters] = useState<boolean>(false);
    const [mincost, setMincost] = useState<number>(0);
    const [maxcost, setMaxcost] = useState<number>(2000);

    //add course modal
    const handleCourseShow = () => setAddCourse(true);
    const handleCourseClose = () => setAddCourse(false);

    //open offcanvas filter
    const handleFilterShow = () => setCourseFilters(!courseFilters);

    //search
    const handlesearch = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search?.toLowerCase();
            setCourse(courseList.filter((data: any) => data.coursename?.toLowerCase().includes(search)));
        } else {
            setCourse(courseList);
        }
    };

    //slider 
    const onUpDate = (value: any) => {
        setMincost(value[0]);
        setMaxcost(value[1]);
    };

    useEffect(() => {
        onUpDate([mincost, maxcost]);
    }, [mincost, maxcost]);

    //set slider color
    useEffect(() => {
        let slider = document.getElementById("product-price-range");
        slider?.setAttribute("data-slider-color", "secondary");
    }, []);


    useEffect(() => {
        setCourse(courseList);
    }, [courseList]);

    useEffect(() => {
        dispatch(onGetCourseList());
    }, [dispatch]);

    const [selectfeils, setSelectfeils] = useState<any>([]);

    const handleAcceptfiles = (files: any) => {
        const newImages = files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
            })
        });
        setSelectfeils([...selectfeils, ...newImages]);
    }

    const formik: any = useFormik({
        initialValues: {
            category: '',
            logoImg: '',
            coursename: '',
            instructor: '',
            lessons: '',
            students: '',
            rating: '',
            fees: '',
            status: ''
        },
        validationSchema: Yup.object({
            coursename: Yup.string().required("Please Enter Your Course Name"),
            category: Yup.string().required("Please Select Your Category"),
            instructor: Yup.string().required("Please Enter Your instructor Name"),
            lessons: Yup.number().required("Please Enter Your Lessons"),
            students: Yup.number().required("Please Enter students Number"),
            fees: Yup.number().required("Please Enter Your Fees "),
            rating: Yup.string().required("Please Enter Your Timeing "),
            status: Yup.string().required("Please Select Your Course Status "),
            logoImg: Yup.mixed().required("Please Select Your Image"),
        }),
        onSubmit: (values: any) => {
            const newCourse = {
                id: (Math.floor(Math.random() * (30 - 20)) + 20),
                category: values['category'],
                logoImg: values['logoImg'],
                coursename: values['coursename'],
                instructor: values['instructor'],
                lessons: values['lessons'],
                students: values['students'],
                fees: values['fees'],
                rating: values['rating'],
                status: values['status']
            }

            dispatch(onAddCourseList(newCourse));
            formik.resetForm();
            if (values === null) {
                handleCourseShow();
            } else {
                handleCourseClose();
            }
        }
    });


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumb title="List view" pageTitle="Courses" />
                    <Row>
                        <Col lg={12}>
                            <Card id="coursesList">
                                <Card.Body>
                                    <Row className="align-items-center g-2">
                                        <Col lg={3} className="me-auto">
                                            <h6 className="card-title mb-0">Instructors List <span className="badge bg-primary ms-1 align-baseline">1452</span></h6>
                                        </Col>
                                        <Col lg={2}>
                                            <div className="search-box">
                                                <Form.Control type="text" className="search" placeholder="Search for courses ..." onChange={handlesearch} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-lg-auto">
                                            <div className="hstack flex-wrap gap-2">
                                                <Button variant="subtle-danger" className="d-none" id="remove-actions"><i className="ri-delete-bin-2-line"></i></Button>
                                                <Link to="#" className="btn btn-secondary" onClick={handleCourseShow}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Course</Link>
                                                <div className="d-flex gap-1">
                                                    <Button variant="info" onClick={handleFilterShow}><i className="bi bi-funnel align-baseline me-1"></i> Filter</Button>
                                                    <Link to="/apps-learning-grid" className="btn btn-subtle-primary btn-icon"><i className="bi bi-grid"></i></Link>
                                                    <Link to="/apps-learning-list" className="btn btn-subtle-primary active btn-icon"><i className="bi bi-list-task"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                                <Card.Body className='pt-0'>
                                    <ListViewTable course={course} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Offcanvas show={courseFilters} placement="end" onHide={handleFilterShow}>
                <Offcanvas.Header id="courseFilters" className='border-bottom"' closeButton>
                    <Offcanvas.Title id="courseFiltersLabel">Course Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Form.Label className="select-category-filter fs-md mb-3 text-decoration-underline">Price</Form.Label>
                                    <Nouislider
                                        range={{ min: 0, max: 2000 }}
                                        start={[mincost, maxcost]}
                                        connect
                                        onSlide={onUpDate}
                                        id="product-price-range"
                                    />
                                    <div className="formCost d-flex gap-2 align-items-center mt-4">
                                        <Form.Control type="text" id="minCost" value={mincost} onChange={(e: any) => setMincost(e.target.value)} />
                                        <span className="fw-semibold text-muted">to</span>
                                        <Form.Control type="text" id="maxCost" value={maxcost} onChange={(e: any) => setMaxcost(e.target.value)} />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Form.Label className="select-category-filter fs-md mb-3 text-decoration-underline">Courses category</Form.Label>
                                    <div className="vstack gap-2">
                                        <Form.Check >
                                            <Form.Check.Input type="checkbox" value="" id="courses-category-all" />
                                            <Form.Check.Label htmlFor="courses-category-all">
                                                Select All</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check >
                                            <Form.Check.Input type="checkbox" value="" id="courses-category-filter2" />
                                            <Form.Check.Label htmlFor="courses-category-filter2">
                                                Data Science</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check >
                                            <Form.Check.Input type="checkbox" value="" id="courses-category-filter3" />
                                            <Form.Check.Label htmlFor="courses-category-filter3">
                                                IT & Software</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check >
                                            <Form.Check.Input type="checkbox" value="" id="courses-category-filter4" />
                                            <Form.Check.Label htmlFor="courses-category-filter4">
                                                Engineering</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check >
                                            <Form.Check.Input type="checkbox" value="" id="courses-category-filter5" />
                                            <Form.Check.Label htmlFor="courses-category-filter5">
                                                Web Development</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check >
                                            <Form.Check.Input type="checkbox" value="" id="courses-category-filter6" />
                                            <Form.Check.Label htmlFor="courses-category-filter6">
                                                Finance & Banking</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check >
                                            <Form.Check.Input type="checkbox" value="" id="courses-category-filter7" />
                                            <Form.Check.Label htmlFor="courses-category-filter7">
                                                Management</Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Form.Label className="select-category-filter fs-md mb-3 text-decoration-underline">Ratings</Form.Label>
                                    <div className="vstack gap-2">
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="rating-all" />
                                            <Form.Check.Label className="form-check-label" htmlFor="rating-all">
                                                Select All
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="rating-filter1" />
                                            <Form.Check.Label className="text-warning" htmlFor="rating-filter1">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="rating-filter2" />
                                            <Form.Check.Label className="text-warning" htmlFor="rating-filter2">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <span className="ms-1 text-muted">4 & Up</span>
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="rating-filter3" />
                                            <Form.Check.Label className="text-warning" htmlFor="rating-filter3">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <span className="ms-1 text-muted">3 & Up</span>
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="rating-filter4" />
                                            <Form.Check.Label className="text-warning" htmlFor="rating-filter4">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <span className="ms-1 text-muted">2 & Up</span>
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="" id="rating-filter5" />
                                            <Form.Check.Label className="text-warning" htmlFor="rating-filter5">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <i className="bi bi-star-fill text-muted"></i>
                                                <span className="ms-1 text-muted">1 & Up</span>
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Offcanvas.Body>
                <Offcanvas.Header className=" htsack gap-2 border-top">
                    <Button className="btn btn-subtle-danger w-100"><i className="bi bi-x-lg align-baseline me-1"></i> Reset</Button>
                    <Button variant='secondary' className="w-100"><i className="bi bi-funnel align-baseline me-1"></i> Filters</Button>
                </Offcanvas.Header>
            </Offcanvas>

            <Modal show={addCourse} onHide={handleCourseClose} contentClassName="border-0">
                <Modal.Header className="bg-danger p-3" closeButton closeVariant="white">
                    <Modal.Title as="h5" className="text-white" id="addCourseModalLabel">Add Course</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label>Course Image<span className="text-danger">*</span></Form.Label>
                            <Dropzone
                                onDrop={(acceptfiles: any) => {
                                    handleAcceptfiles(acceptfiles);
                                    formik.setFieldValue("logoImg", acceptfiles[0]);
                                }}
                                name="logoImg"
                                value={formik.values.logoImg || ''}
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
                            <Form.Label htmlFor="course-title-input">Course title<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter course title"
                                id="course-title-input"
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
                                id="category"
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
                                        className="form-control"
                                        id="status-input"
                                        name="status"
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.status}>
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
                            <Button className="btn btn-ghost-danger" onClick={handleCourseClose}>
                                <i className="bi bi-x-lg align-baseline me-1"></i>  Close</Button>
                            <Button type="submit" className="add-btn" variant="primary"> Add Course  </Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>
            <ToastContainer />
        </React.Fragment>
    )
}

export default CourseListview;
