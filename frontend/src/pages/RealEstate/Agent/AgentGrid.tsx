import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row, Button, Modal } from "react-bootstrap";
import BreadCrumb from "Common/BreadCrumb";
import { DeleteModal } from "Common/DeleteModal";
import AgentInfo from "./AgentInfo";
import {
    getAgentGridList as onGetAgentGridList,
    addAgentGridList as addAgentGridListApi,
    deleteAgentGridList as onDeleteAgentGridList
} from "slices/realestate/thunk";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createSelector } from "reselect";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup"

const AgentGrid = () => {

    document.title = "Agent Grid | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectAgentgridList = createSelector(
        (state: any) => state.RealEstate.agentGridList,
        (agentgridList) => agentgridList
    );

    const { agentgridList } = useSelector((state: any) => ({
        agentgridList: selectAgentgridList(state)
    }));

    useEffect(() => {
        dispatch(onGetAgentGridList());
    }, [dispatch])

    const [gridView, setGridView] = useState<any>([]);
    const [show, setShow] = useState<boolean>(false);
    const [agentGrid, setAgentGrid] = useState<any>(null);
    const [addagent, setAddagent] = useState<boolean>(false);
    const [selectfeils, setSelectfeils] = useState<any>([]);

    //add agent modal
    const handleShowAgent = () => setAddagent(true);
    const handleCloseAgent = () => { setAddagent(false); setSelectfeils(null) };

    //search 
    const handlesearch = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            setGridView(agentgridList?.filter((data: any) => data.name.toLowerCase().includes(search.toLowerCase())))
        } else {
            setGridView(agentgridList)
        }
    }

    const handleselect = (ele: any) => {
        setGridView(agentgridList?.filter((select: any) => select.status === ele || ele === "All"))
    }

    const handleDeleteShow = (ele: any) => { setShow(true); setAgentGrid(ele) };
    const handleDeleteClose = () => setShow(false);

    //delete modal
    const deleteModalFunction = () => {
        if (agentGrid.id) {
            dispatch(onDeleteAgentGridList(agentGrid.id));
        }
        setShow(false)
    }

    useEffect(() => {
        setGridView(agentgridList)
    }, [agentgridList])

    const handleAcceptfiles = (files: any) => {
        const newImages = files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
            })
        })
        setSelectfeils([...selectfeils, ...newImages]);
    }

    const formik: any = useFormik({
        initialValues: {
            img: '',
            name: '',
            property: '',
            status: '',
            location: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Agent Name"),
            property: Yup.string().required("Please Enter Your Property Number"),
            status: Yup.string().required("Please Enter Your Status"),
            location: Yup.string().required("Please Enter Your Location"),
            img: Yup.mixed().required("Please Enter Your Location"),
        }),
        onSubmit: (values: any) => {
            const newAgentGrid = {
                id: (Math.floor(Math.random() * (30 - 20)) + 20),
                img: values['img'],
                name: values['name'],
                property: values['property'],
                status: values['status'],
                location: values['location']
            }
            dispatch(addAgentGridListApi(newAgentGrid));
            formik.resetForm();

            if (newAgentGrid === null) {
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
                    <BreadCrumb title="Agent Grid" pageTitle="Agents" />
                    <Row >
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="align-items-center gy-3">
                                        <Col lg={3} md={6} className="order-last order-md-first me-auto">
                                            <div className="search-box">
                                                <Form.Control type="text" autoComplete="off" id="searchResultList" placeholder="Search for agent ..." onChange={(e: any) => handlesearch(e)} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col xl={2} lg={3} sx={12}>
                                            <div>
                                                <Form.Select id="status-input" onClick={(e: any) => handleselect(e.target.value)}>
                                                    <option value="All">Select status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Unactive">Unactive</option>
                                                </Form.Select>
                                            </div>
                                        </Col>
                                        <Col className="col-auto text-end">
                                            <Button variant="secondary" onClick={handleShowAgent}><i className="bi bi-person-plus align-baseline me-1"></i> Add Agent</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <AgentInfo
                        data={gridView}
                        rowclassname="row-cols-xxl-5 row-cols-md-2 row-cols-1"
                        perPageData={10}
                        handleDeleteShow={handleDeleteShow} />
                </Container>
            </div>
            <Modal show={addagent} onHide={handleCloseAgent}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5" id="addAgentModalLabel">Add Agent</Modal.Title>
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
                            <Form.Label htmlFor="property-input" >Property<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="number"
                                id="property-input"
                                name="property"
                                placeholder="Enter property"
                                value={formik.values.property}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.property}
                            />
                            {formik.errors.property && formik.touched.property ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.property}</Form.Control.Feedback>
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
                        <Button type="submit" variant="primary" id="add-btn">Add</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />
            <ToastContainer />
        </React.Fragment>
    );
}

export default AgentGrid;