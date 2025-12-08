import React, { useState, useEffect, useMemo } from "react";
import { Card, Col, Row, Button, Dropdown, Badge, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaginationFile from "Common/PaginationFile";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateAgentGridList as onUpdateAgentGridList } from "slices/thunk";
import { useDispatch } from "react-redux";

const AgentInfo = ({ handleDeleteShow, rowclassname, perPageData, data }: any) => {
    const dispatch = useDispatch<any>();
    const [editagent, setEditagent] = useState<boolean>(false);
    const [editData, setEditData] = useState<any>();
    //edit agent modal
    const handleShowEditAgent = (item: any) => {
        setEditagent(true);
        setEditData({
            id: item.id,
            img: item.img,
            name: item.name,
            property: item.property,
            contact: item.contact,
            status: item.status,
            location: item.location
        });
        setSelectfeils([item.img])
    };
    const handleCloseEditAgent = () => {
        setEditagent(false);
        setSelectfeils(null);
        setEditData(null);
    };

    // Pagination
    const pagination: boolean = true;
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>([]);
    // const perPageData = 8;
    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };
    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;
    const currentdata = useMemo(() => data.slice(indexOfFirst, indexOfLast), [data, indexOfFirst, indexOfLast])
    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, data, currentdata])

    const pageNumbers: any = [];
    for (let i = 1; i <= Math.ceil(data.length / perPageData); i++) {
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

    const [selectfeils, setSelectfeils] = useState<any>([]);

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
            id: (editData && editData.id) || '',
            img: (editData && editData.img) || '',
            name: (editData && editData.name) || '',
            property: (editData && editData.property) || '',
            status: (editData && editData.status) || '',
            location: (editData && editData.location) || ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Agent Name"),
            property: Yup.string().required("Please Enter Your Property"),
            status: Yup.string().required("Please Enter Your Status"),
            location: Yup.string().required("Please Enter Your Location"),
            img: Yup.mixed().required("Please Enter Your Location"),
        }),
        onSubmit: (values: any) => {
            const updateAgentGrid = {
                id: values.id,
                img: values.img,
                name: values.name,
                property: values.property,
                status: values.status,
                location: values.location
            }
            dispatch(onUpdateAgentGridList(updateAgentGrid));
            formik.resetForm();

            if (values === null) {
                setEditagent(true);
            } else {
                handleCloseEditAgent();
            }
        }
    });
    return (
        <React.Fragment>
            <Row className={rowclassname} id="agent-list">
                {
                    (currentdata || [])?.map((item: any) => {
                        return (
                            <Col key={item.id}>
                                <Card className="ribbon-box ribbon-fill">
                                    <Card.Body>
                                        {item.new && <div className="ribbon ribbon-secondary">New</div>}
                                        <div className="d-flex justify-content-end">
                                            <div className="flex-shrink-0">
                                                <Dropdown>
                                                    <Dropdown.Toggle as="a" bsPrefix="btn btn-ghost-secondary btn-icon btn-sm">
                                                        <i className="bi bi-three-dots"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#">  <i className="bi bi-eye align-baseline me-1"></i> Overview </Dropdown.Item>
                                                        <Dropdown.Item className="edit-list" href="#" onClick={() => handleShowEditAgent(item)}>
                                                            <i className="bi bi-pencil-square align-baseline me-1"></i>
                                                            Edit
                                                        </Dropdown.Item>
                                                        <Dropdown.Item className="remove-list" href="#" onClick={() => handleDeleteShow(item)}>
                                                            <i className="bi bi-trash3 align-baseline me-1"></i>
                                                            Delete
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-center">
                                            <div className="position-relative d-inline-block">
                                                <Card.Img src={item.img?.priview} alt={item.imgalt} className="avatar-md rounded mx-auto d-inline-block" />
                                                <Badge className={`position-absolute top-0 start-100 translate-middle border border-2 border-white rounded-circle ${item.status === 'Active' ? 'bg-success' : 'bg-danger'} p-1`}>
                                                    <span className="visually-hidden">unread messages</span>
                                                </Badge>
                                            </div>
                                            <h5 className="mt-4 mb-1">
                                                <Link to="#" className="text-reset">{item.name}</Link>
                                            </h5>
                                            <p className="text-muted"><b>#TBS{item.id}</b></p>
                                            <p className="text-muted"><i className="bi bi-geo-alt align-baseline me-1 text-body"></i> {item.location}</p>
                                            <h6 className="fs-md text-secondary-emphasis mb-4">{item.property} Property</h6>
                                            <div className="hstack gap-2">
                                                <Button variant="subtle-primary" className="w-100">
                                                    <i className="bi bi-chat-text align-baseline me-1"></i>
                                                    Message
                                                </Button>
                                                <Link to="tel:(11) 3885-1022" className="btn btn-info btn-icon flex-shrink-0">
                                                    <i className="bi bi-telephone"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

            <PaginationFile
                className="mb-3"
                currentpages={currentpages}
                pagination={pagination}
                perPageData={perPageData}
                currentPage={currentPage}
                pageNumbers={pageNumbers}
                handlenextPage={handlenextPage}
                handleClick={handleClick}
                handleprevPage={handleprevPage}
                estateList={data} />
            <Modal show={editagent} onHide={handleCloseEditAgent}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5" id="addAgentModalLabel">Edit Agent</Modal.Title>
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
                        <Button variant="secondary" className="btn btn-ghost-danger" onClick={handleCloseEditAgent}><i className="bi bi-x-lg align-baseline me-1"></i> Close </Button>
                        <Button type="submit" variant="primary" id="add-btn">update</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </React.Fragment>
    );
}

export default AgentInfo;