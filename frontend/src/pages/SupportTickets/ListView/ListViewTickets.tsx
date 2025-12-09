import BreadCrumb from "Common/BreadCrumb";
import { DeleteModal } from "Common/DeleteModal";
import TableContainer from "Common/TableContainer";
import { supporttickets } from "Common/data/supporttickets";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Col, Container, Form, Row, Badge, OverlayTrigger, Tooltip, Modal, Button } from "react-bootstrap";
import CountUp from 'react-countup'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createSelector } from "reselect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { assignesTickets } from "./../../../Common/data/supporttickets";
import Flatpickr from 'react-flatpickr';
import {
    getSupportTicketList as onGetSupportTicketList,
    addSupportTicketList as onAddSupportTicketList,
    updateSupportTicketList as onUpdateSupportTicketList,
    deleteSupportTicketList as onDeleteSupportTicketList
} from "slices/supporttickets/thunk";
import SimpleBar from "simplebar-react";
import moment from "moment";

const ListViewTickets = () => {
    document.title = "Tickets | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();
    const [img, setImg] = useState<any[]>([]);

    const selectSupportTicketList = createSelector(
        (state: any) => state.SupportTicket,
        (supportTicket) => ({
            supportticketList: supportTicket.supportticketList
        })
    );

    const { supportticketList } = useSelector(selectSupportTicketList);

    useEffect(() => {
        dispatch(onGetSupportTicketList());
    }, [dispatch]);

    const [listView, setListView] = useState<any>();
    const [show, setShow] = useState<boolean>(false);
    const [ticketslist, setTicketslist] = useState<any>(null);
    const [addTickets, setAddTickets] = useState<boolean>(false);
    const [editTickets, setEditTickets] = useState<boolean>(false);

    //add ticket modal
    const handleShowTickets = () => setAddTickets(true);
    const handleCloseTickets = () => {
        setAddTickets(false);
        setEditTickets(false);
        setImg([]);
        setTicketslist(null)
    };

    //edit ticket modal
    const handleEditTickets = useCallback((item: any) => {

        setEditTickets(true);
        handleShowTickets();
        setTicketslist({
            id: item.id,
            clientName: item.clientName,
            ticketTitle: item.ticketTitle,
            createDate: item.createDate,
            dueDate: item.dueDate,
            priority: item.priority,
            status: item.status,
            assignedto: item.assignedto
        });
        setImg(item?.assignedto);
    }, []);

    //search
    const handleSearch = (event: any) => {
        let search = event.target.value;
        if (search) {
            search = search?.toLowerCase()
            setListView(supportticketList.filter((data: any) => data.ticketTitle?.toLowerCase().includes(search)));
        } else {
            setListView(supportticketList);
        }
    }

    const handleDeleteShow = (ele: any) => { setShow(true); setTicketslist(ele) };
    const handleDeleteClose = () => setShow(false);

    //delete modal
    const deleteModalFunction = () => {
        if (ticketslist.id) {
            dispatch(onDeleteSupportTicketList(ticketslist.id));
        }
        setShow(false)
    }

    useEffect(() => {
        setListView(supportticketList)
    }, [supportticketList])

    //columns
    const columns = useMemo(
        () => [
            {
                Header: (
                    <Form.Check >
                        <Form.Check.Input type="checkbox" value="option" id="checkAll" />
                        <Form.Check.Label htmlFor="checkAll"></Form.Check.Label>
                    </Form.Check>
                ),
                Cell: (cell: any) => {
                    return (
                        <Form.Check
                            type="checkbox"
                            className="orderCheckBox"
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
                        <Link to="/apps-tickets-overview" className="fw-medium link-primary">#TBS25000{cell.row.original.id}</Link>
                    )
                }
            },
            {
                Header: "Assigned To",
                accessor: "Assigned To",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    const assign = cell.row.original.assignedto?.map((item: any) => item);
                    return (
                        <div className="avatar-group flex-nowrap">
                            {
                                assign?.map((data: any, index: number) => (
                                    <Link to="#" className="avatar-group-item" key={index}>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltiptop">{data.assigneeName}</Tooltip>
                                            }
                                        >
                                            <img src={data.assigneeImg} alt="" className="rounded-circle avatar-xxs" />
                                        </OverlayTrigger>
                                    </Link>
                                ))
                            }
                        </div>
                    )
                }
            },
            {
                Header: "Ticket Title",
                accessor: "ticketTitle",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Client Name",
                accessor: "clientName",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Create Date",
                accessor: "createDate",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Due Date",
                accessor: "dueDate",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Priority",
                Filter: false,
                isSortable: true,
                accessor: (cell: any) => {
                    switch (cell.priority) {
                        case "Low":
                            return <Badge bg="danger">{cell.priority}</Badge>
                        case "Medium":
                            return <Badge bg="info">{cell.priority}</Badge>
                        default:
                            return <Badge bg="success">{cell.priority}</Badge>
                    }
                },
            },
            {
                Header: "Status",
                Filter: false,
                isSortable: true,
                accessor: (cell: any) => {
                    switch (cell.status) {
                        case "New":
                            return <Badge text="info" bg="info-subtle">{cell.status}</Badge>
                        case "Pending":
                            return <Badge text="warning" bg="warning-subtle">{cell.status}</Badge>
                        case "Open":
                            return <Badge text="primary" bg="primary-subtle">{cell.status}</Badge>
                        default:
                            return <Badge text="danger" bg="danger-subtle">{cell.status}</Badge>
                    }
                },
            },
            {
                Header: "Action",
                Filter: false,
                isSortable: false,
                accessor: (cell: any) => {
                    return (
                        <ul className="d-flex gap-2 list-unstyled mb-0">
                            <li>
                                <Link to="/apps-tickets-overview" className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" onClick={() => handleEditTickets(cell)}><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" onClick={() => handleDeleteShow(cell)}><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
                    )
                }
            },
        ], [handleEditTickets]
    );

    // validation
    const formik: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            id: (ticketslist && ticketslist.id) || '',
            clientName: (ticketslist && ticketslist.clientName) || '',
            ticketTitle: (ticketslist && ticketslist.ticketTitle) || '',
            createDate: (ticketslist && ticketslist.createDate) || '',
            dueDate: (ticketslist && ticketslist.dueDate) || '',
            priority: (ticketslist && ticketslist.priority) || '',
            status: (ticketslist && ticketslist.status) || '',
            assignedto: (ticketslist && ticketslist.assignedto) || []
        },
        validationSchema: Yup.object({
            clientName: Yup.string().required("Please Enter Your Client Name"),
            ticketTitle: Yup.string().required("Please Enter Your Ticket Title"),
            createDate: Yup.string().required("Please Enter Your Ticket Title"),
            dueDate: Yup.string().required("Please Enter Your Ticket Title"),
            priority: Yup.string().required("Please Enter Your Ticket Title"),
            status: Yup.string().required("Please Enter Your Ticket Title"),
            assignedto: Yup.array().required('Please Enter Member')
        }),
        onSubmit: (values: any) => {
            if (editTickets) {
                const updateTicket = {
                    id: values.id,
                    clientName: values.clientName,
                    ticketTitle: values.ticketTitle,
                    createDate: values.createDate,
                    dueDate: values.dueDate,
                    priority: values.priority,
                    status: values.status,
                    assignedto: values.assignedto,
                }
                dispatch(onUpdateSupportTicketList(updateTicket));
                formik.resetForm()
            } else {
                const newTicket = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    clientName: values['clientName'],
                    ticketTitle: values['ticketTitle'],
                    dueDate: values['dueDate'],
                    createDate: values['createDate'],
                    priority: values['priority'],
                    status: values['status'],
                    assignedto: values['assignedto']
                }
                dispatch(onAddSupportTicketList(newTicket))
                formik.resetForm();
            }
            if (values === null) {
                handleShowTickets();
            } else {
                handleCloseTickets();
            }
        }
    });

    const handleClick = (item: any) => {
        const newData = [...img, item];
        setImg(newData);
        formik.setFieldValue('assignedto', newData)
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="List View" pageTitle="Support Tickets" />
                    <Row>
                        {
                            (supporttickets || [])?.map((item: any, index: number) => {
                                return (
                                    <Col lg={3} key={index}>
                                        <Card className="file-manager-widgets" style={{ backgroundSize: "95px", backgroundPosition: "right bottom" }}>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-4">
                                                    <div className="flex-grow-1">
                                                        <div className="avatar-sm">
                                                            <div className={`avatar-title bg-${item.imgBg}-subtle text-${item.imgBg} rounded fs-xl`}>
                                                                <i className={item.img}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <p><span className={`text-${item.iconColor} me-1`}><i className={`${item.icon} fs-sm align-middle`}></i> +{item.num} %</span> than last week</p>
                                                    </div>
                                                </div>
                                                <h4 className="fw-semibold mb-3">
                                                    <CountUp start={0} end={item.count} />
                                                </h4>
                                                <p className="fw-medium text-muted mb-0">{item.title}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row id="ticketsList">
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <Row className="align-items-center g-2">
                                        <Col lg={3} className="me-auto">
                                            <h6 className="card-title mb-0">Tickets List</h6>
                                        </Col>
                                        <Col lg={2} sm={4}>
                                            <div className="search-box">
                                                <Form.Control type="text" className="search" placeholder="Search for tickets, date, client or something..." onChange={handleSearch} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col className="col-sm-auto">
                                            <div className="hstack gap-2">
                                                <button className="btn btn-subtle-danger d-none" id="remove-actions" ><i className="ri-delete-bin-2-line"></i></button>
                                                <Link to="#addTickets" className="btn btn-secondary" onClick={handleShowTickets}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Ticket</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body className="mt-3">
                                    {listView && listView.length > 0 ?
                                        <TableContainer
                                            isPagination={true}
                                            columns={columns}
                                            data={listView || []}
                                            customPageSize={10}
                                            divClassName="table-responsive"
                                            tableClass="table table-centered align-middle table-custom-effect table-nowrap mb-0"
                                            theadClass="table-light"
                                            PaginationClassName="align-items-center mt-4 pt-3"
                                            isBordered={false}
                                            SearchPlaceholder="" />
                                        :
                                        <div id="noresult">
                                            <div className="text-center py-4">
                                                <div className="avatar-md mx-auto mb-4">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-5xl">
                                                        <i className="bi bi-search"></i>
                                                    </div>
                                                </div>
                                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                            </div>
                                        </div>
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />

            <Modal show={addTickets} onHide={handleCloseTickets} contentClassName="border-0">
                <Modal.Header closeButton>
                    <Modal.Title as="h5" id="addTicketModalLabel">{editTickets ? "Edit Ticket" : "Add Ticket"}</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <Row>
                            <Col lg={12}  >
                                <div className="mb-3">
                                    <Form.Label htmlFor="client-name-input">Client Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="clientname"
                                        placeholder="Enter client name"
                                        name="clientName"
                                        value={formik.values.clientName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.clientName}
                                    />
                                    {formik.errors.clientName && formik.touched.clientName ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.clientName}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-4 d-flex align-items-center">
                                    <div className="me-2">
                                        <h6 className="mb-0">Assigned To :</h6>
                                    </div>

                                    <div className="avatar-group justify-content-center" id="assignee-member">
                                        {
                                            Array.isArray(img) && (img || []).map((item: any, index: number) => {
                                                return (
                                                    <Link to="#" className="avatar-group-item mb-2" key={index}>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={<Tooltip id="tooltiptop"> {item?.assigneeName}</Tooltip>}
                                                        >
                                                            <img src={item?.assigneeImg} alt="" className="rounded-circle avatar-xs" />
                                                        </OverlayTrigger>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <SimpleBar style={{ maxHeight: "180px" }}>
                                    <div className="mx-n4 px-4 mb-3">
                                        <div className="vstack gap-3 select-element">
                                            {
                                                (assignesTickets || [])?.map((item: any) => {
                                                    return (
                                                        <div className="d-flex align-items-center option-list" key={item?.id}>
                                                            <div className="avatar-xs flex-shrink-0 me-3">
                                                                <img src={item?.assigneeImg} alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-0"><Link to="#" className="text-body d-block">{item?.assigneeName}</Link></h6>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <Button variant="light" size="sm" className="btn-action" onClick={() => handleClick(item)}>Add</Button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {/* {formik.errors.assignedto && formik.touched.assignedto ? (
                                            <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.assignedto}</Form.Control.Feedback>
                                        ) : null} */}
                                    </div>
                                </SimpleBar>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="ticket-title-input" >Ticket title<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="ticket-title-input"
                                        placeholder="Ticket title"
                                        name="ticketTitle"
                                        value={formik.values.ticketTitle}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.ticketTitle}
                                    />
                                    {formik.errors.ticketTitle && formik.touched.ticketTitle ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.ticketTitle}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="create-date-input" >Create Date<span className="text-danger">*</span></Form.Label>
                                    <Flatpickr
                                        className="form-control"
                                        id="create-date-input"
                                        name="createDate"
                                        placeholder="Select date"
                                        options={{
                                            mode: "single",
                                            dateFormat: 'd M, Y',
                                        }}
                                        onChange={(createDate: any) => formik.setFieldValue("createDate", moment(createDate[0]).format("DD MMMM ,YYYY"))}
                                        value={formik.values.createDate || ''}
                                    />
                                    {formik.errors.createDate && formik.touched.createDate ? (
                                        <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.createDate}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="due-date-input">Due Date<span className="text-danger">*</span></Form.Label>
                                    <Flatpickr
                                        className="form-control"
                                        id="due-date-input"
                                        name="dueDate"
                                        placeholder="Due date"
                                        options={{
                                            mode: "single",
                                            dateFormat: 'd M, Y',
                                        }}
                                        value={formik.values.dueDate}
                                        onChange={(dueDate: any) => formik.setFieldValue("dueDate", moment(dueDate[0]).format("DD MMMM ,YYYY"))}
                                    />
                                    {formik.errors.dueDate && formik.touched.dueDate ? (
                                        <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.dueDate}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={12} >
                                <div className="mb-3">
                                    <Form.Label htmlFor="priority-input">Priority<span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        id="priority-input"
                                        name="priority"
                                        value={formik.values.priority}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.priority}>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </Form.Select>
                                    {formik.errors.priority && formik.touched.priority ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.priority}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="status-input">Status<span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        id="status-input"
                                        name="status"
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.status}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Open">Open</option>
                                        <option value="New">New</option>
                                        <option value="Pending">Pending</option>
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
                            <Button className="btn btn-ghost-danger" onClick={handleCloseTickets}>
                                <i className="bi bi-x-lg align-baseline me-1"></i> Close
                            </Button>
                            <Button variant="primary" id="add-btn" type="submit">{editTickets ? "Edit Ticket" : "Add Ticket"}</Button>
                        </div>
                    </Modal.Footer>
                </Form>

            </Modal>

            <ToastContainer />
        </React.Fragment >
    );
};

export default ListViewTickets;