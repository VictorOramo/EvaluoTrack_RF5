import { DeleteModal } from "Common/DeleteModal";
import TableContainer from "Common/TableContainer";
import ProductRatting from "pages/Ecommerce/ProductDetails/ProductRatting";
import React, { useEffect, useMemo, useState } from "react";
import { Card, Tab, Nav, Badge, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createSelector } from "reselect";
import {
    getInstructorCourseList as onGetInstructorCourseList,
    deleteInstructorCourseList as onDeleteInstructorCourseList,
    getInstructorStudentList as onGetInstructorStudentList,
    deleteInstructorStudentList as onDeleteInstructorStudentList
} from "slices/learning/thunk";

const PortfolioInstructor = () => {
    const dispatch = useDispatch<any>();

    const selectInstructorCourseList = createSelector(
        (state: any) => state.Learning.instructorcourseList,
        (instructorCourseList) => instructorCourseList
    );

    const selectInstructorStudentList = createSelector(
        (state: any) => state.Learning.instructorstudentList,
        (instructorStudentList) => instructorStudentList
    );

    const { instructorCourseList, instructorStudentList } = useSelector((state: any) => ({
        instructorCourseList: selectInstructorCourseList(state),
        instructorStudentList: selectInstructorStudentList(state),
    }));

    useEffect(() => {
        dispatch(onGetInstructorCourseList());
        dispatch(onGetInstructorStudentList());
    }, [dispatch]);

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const [instructorcourselist, setInstructorcourselist] = useState<any>(null);
    const [instructorstudentlist, setInstructorstudentlist] = useState<any>(null);
    const [StudentSearch, setStudentSearch] = useState<any>();
    // coursesList search
    const handleSearchCourses = (event: any) => {
        let search = event.target.value;
        if (search) {
            search = search?.toLowerCase()
            setInstructorcourselist(instructorCourseList.filter((data: any) => data.coursename?.toLowerCase().includes(search)));
        } else {
            setInstructorcourselist(instructorCourseList);
        }
    }

    // StudentList search
    const handleSearchStudent = (event: any) => {
        let search = event.target.value;
        if (search) {
            search = search?.toLowerCase()
            setStudentSearch(instructorStudentList.filter((data: any) => data.title?.toLowerCase().includes(search)));
        } else {
            setStudentSearch(instructorStudentList);
        }
    }

    useEffect(() => {
        setStudentSearch(instructorStudentList)
    }, [instructorStudentList]);

    const handleDeleteShow = (ele: any) => { setShow(true); setInstructorcourselist(ele) };
    const handleDeleteShow1 = (ele: any) => { setShow1(true); setInstructorstudentlist(ele) };
    const handleDeleteClose = () => setShow(false);
    const handleDeleteClose1 = () => setShow1(false);

    //delete modal
    const deleteModalFunction = () => {
        if (instructorcourselist.id) {
            dispatch(onDeleteInstructorCourseList(instructorcourselist.id));
        }
        setShow(false)
    }

    const deleteModalFunction1 = () => {
        if (instructorstudentlist?.id) {
            dispatch(onDeleteInstructorStudentList(instructorstudentlist.id));
        }
        setShow1(false)
    }

    // courses ListTable coumns
    const coursesList = useMemo(
        () => [
            {
                Header: "Courses Title",
                accessor: "Courses Title",
                Filter: false,
                isSortable: true,
                istext: true,
                Cell: (cell: any) => {
                    return (
                        <div className="d-flex align-items-center gap-2 text-start">
                            <div className="flex-shrink-0">
                                <div className="avatar-sm">
                                    <div className={`avatar-title bg-${cell.row.original.bgcolor}-subtle rounded`}>
                                        <img src={cell.row.original.logoImg} alt="" className="avatar-xxs" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <Link to="/apps-learning-overview"><h6 className="fs-md mb-2 course_title">{cell.row.original.coursename}</h6></Link>
                                <p className="text-muted mb-0">{cell.row.original.category}</p>
                            </div>
                        </div>
                    )
                }
            },
            {
                Header: "Price",
                accessor: "Price",
                Filter: false,
                isSortable: true,
                istext: false,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.price}</span>
                    )
                }
            },
            {
                Header: "Duration",
                accessor: "Duration",
                Filter: false,
                isSortable: true,
                istext: false,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.duration}</span>
                    )
                }
            },
            {
                Header: "Students",
                accessor: "Students",
                Filter: false,
                isSortable: true,
                istext: false,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.students}</span>
                    )
                }
            },
            {
                Header: "Ratings",
                accessor: "Ratings",
                Filter: false,
                isSortable: true,
                istext: false,
                Cell: (cell: any) => {
                    return (
                        <Badge text="warning" className="bg-warning-subtle ratings"><i className="bi bi-star-fill align-baseline me-1"></i> {cell.row.original.ratting}</Badge>
                    )
                }
            },
            {
                Header: "Status",
                Filter: false,
                isSortable: true,
                istext: false,
                accessor: (cell: any) => {
                    switch (cell.statustype) {
                        case "Live":
                            return <Badge text="success" bg="success-subtle" className="status">{cell.statustype}</Badge>
                        case "Pending":
                            return <Badge text="warning" bg="warning-subtle" className="status">{cell.statustype}</Badge>
                        default:
                            return <Badge text="danger" bg="danger-subtle" className="status">{cell.statustype}</Badge>
                    }
                }
            },
            {
                Header: "Action",
                Filter: false,
                isSortable: false,
                istext: false,
                accessor: (cell: any) => {
                    return (
                        <ul className="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                            <li>
                                <Link to="/apps-learning-overview" className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
                            </li>
                            <li>
                                <Link to="/apps-learning-create" className="btn btn-subtle-secondary btn-icon btn-sm"><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" onClick={() => handleDeleteShow(cell)}><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
                    )
                }
            },
        ], []
    )

    // students ListTable coumns
    const studentsList = useMemo(
        () => [
            {
                Header: "Students Name",
                accessor: "Students Name",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <div className="d-flex align-items-center gap-2 text-start">
                            <div className="flex-shrink-0">
                                <img src={cell.row.original.img} alt="" className="avatar-sm rounded" />
                            </div>
                            <div className="flex-grow-1">
                                <Link to="#"><h6 className="fs-md mb-2 students_name">{cell.row.original.title}</h6></Link>
                                <p className="text-muted mb-0">Students</p>
                            </div>
                        </div>
                    )
                }
            },
            {
                Header: "Email Address",
                accessor: "Email Address",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.email}</span>
                    )
                }
            },
            {
                Header: "Contact Number",
                accessor: "Contact Number",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.contact}</span>
                    )
                }
            },
            {
                Header: "Courses",
                accessor: "Courses",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.courses}</span>
                    )
                }
            },
            {
                Header: "Joined Date",
                accessor: "Joined Date",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.date}</span>
                    )
                }
            },
            {
                Header: "Status",
                Filter: false,
                isSortable: true,
                accessor: (cell: any) => {
                    switch (cell.status) {
                        case "Active":
                            return <Badge text="success" bg="success-subtle" className="status">{cell.status}</Badge>
                        case "New":
                            return <Badge text="info" bg="info-subtle" className="status">{cell.status}</Badge>
                        default:
                            return <Badge text="danger" bg="danger-subtle" className="status">{cell.status}</Badge>
                    }
                }
            },
            {
                Header: "Action",
                Filter: false,
                isSortable: false,
                accessor: (cell: any) => {
                    return (
                        <ul className="d-flex gap-2 list-unstyled mb-0 justify-content-end">
                            <li>
                                <Link to="#" className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
                            </li>
                            <li>
                                <Link to="/apps-learning-create" className="btn btn-subtle-secondary btn-icon btn-sm"><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" onClick={() => handleDeleteShow1(cell)}><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
                    )
                }
            },
        ], []
    )

    return (
        <React.Fragment>
            <Tab.Container defaultActiveKey="coursesList">
                <Card>
                    <Card.Body className="d-flex align-items-center flex-wrap gap-2">
                        <Card.Title as="h5" className="flex-grow-1 mb-0">Portfolio Overview</Card.Title>
                        <Nav variant="pills" role="tablist">
                            <Nav.Item>
                                <Nav.Link eventKey="coursesList"> Courses List</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="studentsList">Students</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="reviews"> Reviews</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Body>
                </Card>
                <Tab.Content>
                    <Tab.Pane eventKey="coursesList">
                        <div id="coursesListTable">
                            <Row className="align-items-center gy-3 mb-2">
                                <Col lg={3} md={6} className="order-last order-md-first me-auto">
                                    <div className="search-box">
                                        <Form.Control type="text" className="search" placeholder="Search for courses, price or something..." onChange={handleSearchCourses} />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col xs={6} className="col-md-auto">
                                    <Link to="/apps-learning-create" className="btn btn-secondary"><i className="bi bi-plus-circle align-baseline me-1"></i> Add Course</Link>
                                </Col>
                            </Row>
                            <TableContainer
                                isPagination={true}
                                columns={coursesList}
                                data={instructorCourseList || []}
                                customPageSize={5}
                                PaginationClassName="align-items-center mb-3"
                                tableClass="table table-custom align-middle table-borderless text-center table-nowrap"
                                SearchPlaceholder=""
                            />
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="studentsList">
                        <Row className="align-items-center gy-3 mb-2">
                            <Col lg={3} md={6} className="order-last order-md-first me-auto">
                                <div className="search-box">
                                    <Form.Control type="text" className="search" placeholder="Search for courses, price or something..." onChange={handleSearchStudent} />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </Col>
                            <Col xs={6} className="col-md-auto">
                                <Link to="#" className="btn btn-secondary"><i className="bi bi-plus-circle align-baseline me-1"></i> Add Student</Link>
                            </Col>
                        </Row>
                        <TableContainer
                            isPagination={true}
                            columns={studentsList}
                            data={StudentSearch || []}
                            customPageSize={5}
                            PaginationClassName="align-items-center mb-3"
                            tableClass="table table-custom align-middle table-borderless table-nowrap"
                            SearchPlaceholder=""
                        />
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                        <ProductRatting classname="d-none" />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />
            <DeleteModal show={show1} handleClose={handleDeleteClose1} deleteModalFunction={deleteModalFunction1} />
        </React.Fragment>
    );
}

export default PortfolioInstructor;