import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Col, Container, Form, Row, Button, Badge, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import BreadCrumb from "Common/BreadCrumb";
import TableContainer from "Common/TableContainer";
import { DeleteModal } from "Common/DeleteModal";
import {
    getAgentList as onGetAgentList,
    addAgentList as onAddAgentList,
    updateAgentList as onUpdateAgentList,
    deleteAgentList as onDeleteAgentList
} from "slices/realestate/thunk";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import { PatternFormat } from "react-number-format";
import { createSelector } from "reselect";

const AgentList = () => {

    document.title = "Agent List | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectAgentListView = createSelector(
        (state: any) => state.RealEstate.agentlist,
        (agentListView) => agentListView
    );

    const { agentListView } = useSelector((state: any) => ({
        agentListView: selectAgentListView(state)
    }));

    useEffect(() => {
        dispatch(onGetAgentList());
    }, [dispatch])

    const [selectfeils, setSelectfeils] = useState<any>([]);
    const [listView, setListView] = useState<any>([]);
    const [show, setShow] = useState<boolean>(false);
    const [agentlist, setAgentlist] = useState<any>(null);
    const [addagent, setAddagent] = useState<boolean>(false);
    const [editagent, setEditagent] = useState<boolean>(false);

    //add agent modal
    const handleShowAgent = () => setAddagent(true);
    const handleCloseAgent = () => {
        setAddagent(false);
        setEditagent(false);
        setAgentlist(null);
        setSelectfeils(null);
    };

    //edit agent modal
    const handleShowEditAgent = useCallback((item: any) => {
        setEditagent(true);
        handleShowAgent();
        setAgentlist({
            id: item?.id,
            img: item?.img,
            name: item?.name,
            email: item?.email,
            contact: item?.contact,
            status: item?.status,
            location: item?.location,
        });
        setSelectfeils([item?.img])
    }, []);

    //search 
    const handlesearch = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            setListView(agentListView?.filter((data: any) => data.name.toLowerCase().includes(search)))
        } else {
            setListView(agentListView)
        }
    }

    const handleDeleteShow = (ele: any) => { setShow(true); setAgentlist(ele) };
    const handleDeleteClose = () => setShow(false);

    //delete modal
    const deleteModalFunction = () => {
        if (agentlist.id) {
            dispatch(onDeleteAgentList(agentlist.id));
        }
        setShow(false);
        setAgentlist(null);
    }

    useEffect(() => {
        setListView(agentListView)
    }, [agentListView])

    const column = useMemo(
        () => [
            {
                Header: (
                    <Form.Check >
                        <Form.Check.Input type="checkbox" value="option" id="checkAll" />
                        <Form.Check.Label htmlFor="checkAll"></Form.Check.Label>
                    </Form.Check>
                ),
                Filter: false,
                isSortable: false,
                Cell: (cell: any) => {
                    return (
                        <Form.Check>
                            <Form.Check.Input type="checkbox" name="chk_child" />
                            <Form.Check.Label ></Form.Check.Label>
                        </Form.Check>
                    )
                },
                id: "#",
            },
            {
                Header: "#",
                accessor: "id",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <Link to="/apps-real-estate-agent-overview" className="fw-medium link-primary">#TBS0{cell.row.original.id}</Link>
                    )
                }
            },
            {
                Header: "Date",
                accessor: "joiningdate",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    let date = new Date();
                    return (
                        <span>{cell.row.original.joiningdate ? cell.row.original.joiningdate : moment(date).format('DD MMMM ,YYYY')}</span>
                    )
                }
            },
            {
                Header: "Agent Name",
                accessor: "Name",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <div className="d-flex align-items-center gap-2">
                            <img src={cell.row.original.img?.priview} alt={cell.row.original.imgalt} className="avatar-xs rounded" />
                            <Link to="#" className="text-reset text-capitalize">{cell.row.original.name}</Link>
                        </div>
                    )
                }
            },
            {
                Header: "Address",
                accessor: "location",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (<span>{cell.row.original.location}</span>)
                }
            },
            {
                Header: "Email",
                accessor: "Email",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (<span>{cell.row.original.email}</span>)
                }
            },
            {
                Header: "Contacts",
                accessor: "Contacts",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (<span>{cell.row.original.contact}</span>)
                }
            },
            {
                Header: "Status",
                Filter: false,
                isSortable: true,
                accessor: (cell: any) => {
                    switch (cell?.status) {
                        case "Active":
                            return (<Badge bg="success-subtle" text="success">{cell.status}</Badge>)
                        default:
                            return (<Badge bg="danger-subtle" text="danger">{cell.status}</Badge>)
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
                                <Link to="/apps-real-estate-agent-overview" className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" onClick={() => handleShowEditAgent(cell)}><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" onClick={() => handleDeleteShow(cell)}><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
                    )
                }
            },
        ], [handleShowEditAgent]
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
            id: (agentlist && agentlist.id) || '',
            img: (agentlist && agentlist.img) || '',
            name: (agentlist && agentlist.name) || '',
            email: (agentlist && agentlist.email) || '',
            contact: (agentlist && agentlist.contact) || '',
            status: (agentlist && agentlist.status) || '',
            location: (agentlist && agentlist.location) || ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Agent Name"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Agent Email"),
            contact: Yup.string().required("Please Enter Your Agent contact"),
            status: Yup.string().required("Please Enter Your Status"),
            location: Yup.string().required("Please Enter Your Location"),
            img: Yup.mixed().required("Please Enter Your Image")
        }),
        onSubmit: (values: any) => {
            if (editagent) {
                const updateDate = {
                    id: values.id,
                    img: values.img,
                    name: values.name,
                    email: values.email,
                    contact: values.contact,
                    status: values.status,
                    location: values.location
                }
                dispatch(onUpdateAgentList(updateDate));
                formik.resetForm();
            } else {
                const newData = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    img: values['img'],
                    name: values['name'],
                    email: values['email'],
                    contact: values['contact'],
                    status: values['status'],
                    location: values['location']
                }
                dispatch(onAddAgentList(newData));
                formik.resetForm()
            }

            if (values === null) {
                handleShowAgent();
            } else {
                handleCloseAgent();
            }
        }
    });
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Agent List" pageTitle="Agents" />
                    <Row>
                        <Col lg={12}>
                            <Card id="agentList">
                                <Card.Header >
                                    <Row className="align-items-center gy-3">
                                        <Col lg={3} md={6} className="order-last order-md-first me-auto">
                                            <div className="search-box">
                                                <Form.Control type="text" className="search" placeholder="Search for agent..." onChange={(e: any) => handlesearch(e)} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col xs={6} className="col-md-auto text-end">
                                            <div className="d-flex flex-wrap align-items-start gap-2">
                                                <Button className="btn btn-subtle-danger d-none" id="remove-actions"><i className="ri-delete-bin-2-line"></i></Button>
                                                <Button variant="secondary" onClick={handleShowAgent}><i className="bi bi-person-plus align-baseline me-1"></i> Add Agent</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    {
                                        listView && listView.length > 0 ?
                                            <TableContainer
                                                isPagination={true}
                                                columns={column}
                                                data={listView || []}
                                                tableClass="table-borderless table-centered align-middle table-nowrap mb-0"
                                                theadClass="text-muted table-light"
                                                SearchPlaceholder=""
                                                PaginationClassName="mt-3 align-items-center"
                                                customPageSize={10}
                                                isBordered={false}
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

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal show={addagent} onHide={handleCloseAgent}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5" id="addAgentModalLabel">{editagent ? "Edit Agent" : "Add Agent"}</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label>Agent Images<span className="text-danger">*</span></Form.Label>
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
                                    <div className="sellers-dropzone text-center dz-clickable" style={{ minHeight: "180px" }}>
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
                            {formik.errors.img && formik.touched.img ? (
                                <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.img}</Form.Control.Feedback>
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
                            <Form.Label htmlFor="agent-name-input">Agent Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter agent name"
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
                            <Form.Label htmlFor="email-input" >Email<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.email}
                            />
                            {formik.errors.email && formik.touched.email ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="contact-input" >Contact Number<span className="text-danger">*</span></Form.Label>
                            <PatternFormat
                                className="form-control"
                                displayType="input"
                                id="contact"
                                placeholder="Enter contact no"
                                name="contact"
                                format="(##) #####-#####"
                                value={formik.values.contact}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.contact && formik.touched.contact ? (
                                <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.contact}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="status-type-input">Status<span className="text-danger">*</span></Form.Label>
                            <Form.Select
                                className="form-control"
                                id="status-type-input"
                                name="status"
                                value={formik.values.status}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.status}
                            >
                                <option value="">select Status</option>
                                <option value="Active">Active</option>
                                <option value="Unactive">Unactive</option>
                            </Form.Select>
                            {formik.errors.status && formik.touched.status ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.status}</Form.Control.Feedback>
                            ) : null}
                        </div>

                        <div className="mb-3">
                            <Form.Label htmlFor="address-input">Address<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                className="form-control"
                                id="addressinput"
                                name="location"
                                placeholder=" Enter address"
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.location}
                            />
                            {formik.errors.location && formik.touched.location ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.location}</Form.Control.Feedback>
                            ) : null}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="btn btn-ghost-danger" onClick={handleCloseAgent}><i className="bi bi-x-lg align-baseline me-1"></i> Close </Button>
                        <Button type="submit" variant="primary" id="add-btn">{editagent ? "Edit" : "Add"}</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />
            <ToastContainer />
        </React.Fragment>
    );
}

export default AgentList;