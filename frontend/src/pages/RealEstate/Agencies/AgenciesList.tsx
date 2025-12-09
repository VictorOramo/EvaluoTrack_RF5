import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Col, Container, Form, Row, Dropdown, Button, Modal } from "react-bootstrap";
import BreadCrumb from "Common/BreadCrumb";
import TableContainer from "Common/TableContainer";
import { Link } from "react-router-dom";
import { DeleteModal } from "Common/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import {
    getAgenciesList as onGetAgenciesList,
    addAgenciesList as onAddAgenciesList,
    updateAgenciesList as onUpdateAgenciesList,
    deleteAgenciesList as onDeleteAgenciesList
} from "slices/realestate/thunk";
import { ToastContainer } from "react-toastify";
import { createSelector } from "reselect";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PatternFormat } from "react-number-format";

const AgenciesList = () => {
    document.title = "List View | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectAgenciesList = createSelector(
        (state: any) => state.RealEstate,
        (realEstate) => ({
            agenciesList: realEstate.agencieslist
        })
    );

    const { agenciesList } = useSelector(selectAgenciesList);

    useEffect(() => {
        dispatch(onGetAgenciesList());
    }, [dispatch]);

    const [listView, setListView] = useState<any>([]);
    const [show, setShow] = useState<boolean>(false);
    const [agencieslist, setAgencieslist] = useState<any>(null);
    const [selectfeils, setSelectfeils] = useState<any>([]);
    const [sortdrop, setSortDrop] = useState<any>(' Since');

    const [addagencies, setAddagencies] = useState(false);
    const [editagencies, setEditagencies] = useState(false);

    // add agencie modal
    const handleShowAgencies = () => setAddagencies(true);
    const handleCloseAgencies = () => {
        setAddagencies(false);
        setEditagencies(false);
        setAgencieslist(null);
        setSelectfeils(null);
    };

    // edit agencie modal
    const handleShowEditAgencies = useCallback((item: any) => {
        setEditagencies(true);
        handleShowAgencies();
        setAgencieslist({
            id: item.id,
            img: item.img,
            name: item.name,
            since: item.since,
            email: item.email,
            contact: item.contact,
            property: item.property,
            employee: item.employee,
            location: item.location,
        });
        setSelectfeils([item.img])
    }, []);
    // search 
    const handlesearch = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            setListView(agenciesList?.filter((data: any) => data.name.toLowerCase().includes(search)))
        } else {
            setListView(agenciesList)
        }
    }

    const handleDeleteShow = (ele: any) => { setShow(true); setAgencieslist(ele) };
    const handleDeleteClose = () => setShow(false);

    // delete modal
    const deleteModalFunction = () => {
        if (agencieslist.id) {
            dispatch(onDeleteAgenciesList(agencieslist.id));
        }
        setShow(false);
        setAgencieslist(null)
    }

    useEffect(() => {
        setListView(agenciesList)
    }, [agenciesList]);

    const column = useMemo(
        () => [
            {
                Header: (
                    <Form.Check>
                        <Form.Check.Input type="checkbox" value="option" id="checkAll" />
                        <Form.Check.Label htmlFor="checkAll"></Form.Check.Label>
                    </Form.Check>
                ),
                Filter: false,
                isSortable: false,
                id: '#',
                accessor: (cell: any) => {
                    return (
                        <Form.Check
                            type="checkbox"
                            className="orderCheckBox"
                        />
                    )
                },
            },
            {
                Header: '#',
                accessor: 'id',
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <Link to="#" className="fw-medium link-primary">#TBA0{cell.row.original.id}</Link>
                    )
                },
            },
            {
                Header: "Since",
                accessor: "Since",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>#TBS25000{cell.row.original.since}</span>
                    )
                }
            },
            {
                Header: "Agencies Name",
                accessor: "Agencies Name",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <div className="d-flex align-items-center gap-2">
                            <img src={cell.row.original.img?.priview} alt="" className="avatar-xxs rounded" />
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
                    return (
                        <span>{cell.row.original.location}</span>
                    )
                }
            },
            {
                Header: "Total Property",
                accessor: "Total Property",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.property}</span>
                    )
                }
            },
            {
                Header: "Employee",
                accessor: "Employee",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.employee}</span>
                    )
                }
            },
            {
                Header: "Email",
                accessor: "Email",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.email}</span>
                    )
                }
            },
            {
                Header: "Contacts",
                accessor: "Contacts",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.contact}</span>
                    )
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
                                <Link to="/apps-ecommerce-order-overview" className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" onClick={() => handleShowEditAgencies(cell)}><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" onClick={() => handleDeleteShow(cell)}><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
                    )
                }
            },
        ], [handleShowEditAgencies]
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
            id: (agencieslist && agencieslist?.id) || '',
            img: (agencieslist && agencieslist.img) || '',
            name: (agencieslist && agencieslist.name) || '',
            since: (agencieslist && agencieslist.since) || '',
            email: (agencieslist && agencieslist.email) || '',
            contact: (agencieslist && agencieslist.contact) || '',
            property: (agencieslist && agencieslist.property) || '',
            employee: (agencieslist && agencieslist.employee) || '',
            location: (agencieslist && agencieslist.location) || ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Agent Name"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Agent Email"),
            since: Yup.number().required("Please Enter Your Status Number"),
            contact: Yup.string().required("Please Enter Your Agent contact"),
            property: Yup.number().required("Please Enter Your Property Number"),
            employee: Yup.number().required("Please Enter Your Employee Number"),
            location: Yup.string().required("Please Enter Your Location"),
            img: Yup.mixed().required("Please Enter Your Location"),
        }),
        onSubmit: (values: any) => {
            if (editagencies) {
                const updateAgencis = {
                    id: values.id,
                    img: values.img,
                    name: values.name,
                    email: values.email,
                    since: values.since,
                    contact: values.contact,
                    property: values.property,
                    employee: values.employee,
                    location: values.location
                }
                dispatch(onUpdateAgenciesList(updateAgencis));
                formik.resetForm();
            } else {
                const newAgencis = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    img: values['img'],
                    name: values['name'],
                    email: values['email'],
                    since: values['since'],
                    contact: values['contact'],
                    property: values['property'],
                    employee: values['employee'],
                    location: values['location']
                }
                dispatch(onAddAgenciesList(newAgencis));
                formik.resetForm();
            }

            if (values === null) {
                handleShowAgencies();
            } else {
                handleCloseAgencies();
            }
        }
    });
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="List View" pageTitle="Agencies" />
                    <Row>
                        <Col lg={12}>
                            <Card id="agenciesList">
                                <Card.Header>
                                    <Row className="align-items-center gy-3">
                                        <Col lg={3} md={6} className="order-last order-md-first me-auto">
                                            <div className="search-box">
                                                <Form.Control type="text" className="search" placeholder="Search for agencies, email, address or something..." onChange={(e: any) => handlesearch(e)} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col className="col-md-auto text-end">
                                            <Row className="align-items-center g-2">
                                                <Col className="col-sm-auto">
                                                    <Dropdown className="dropdown card-header-dropdown sortble-dropdown cursor-pointer">
                                                        <Dropdown.Toggle as="a" className="text-reset dropdown-btn">
                                                            <span className="fw-semibold text-uppercase fs-12">Sort by:
                                                            </span><span className="text-muted dropdown-title">{sortdrop}</span> <i className="mdi mdi-chevron-down ms-1"></i>

                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-end">
                                                            <Dropdown.Item className="sort" onClick={() => setSortDrop('Since')}>Since</Dropdown.Item>
                                                            <Dropdown.Item className="sort" onClick={() => setSortDrop('Agencies name')}>Agencies name</Dropdown.Item>
                                                            <Dropdown.Item className="sort" onClick={() => setSortDrop('Address')}>Address</Dropdown.Item>
                                                            <Dropdown.Item className="sort" onClick={() => setSortDrop('Total Property')}>Total Property</Dropdown.Item>
                                                            <Dropdown.Item className="sort" onClick={() => setSortDrop('Employee')}>Employee</Dropdown.Item>
                                                            <Dropdown.Item className="sort" onClick={() => setSortDrop('Email')}>Email</Dropdown.Item>
                                                            <Dropdown.Item className="sort" onClick={() => setSortDrop('Contacts')}>Contacts</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Col>
                                                <Col className="col-sm-auto ms-auto">
                                                    <div className="d-flex gap-2">
                                                        <Button className="btn btn-subtle-danger d-none order-2 order-sm-1" id="remove-actions"><i className="ri-delete-bin-2-line"></i></Button>
                                                        <Button variant="secondary" className="order-1 order-sm-2" onClick={handleShowAgencies}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Agencies</Button>
                                                    </div>
                                                </Col>
                                            </Row>
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
                                                customPageSize={10}
                                                PaginationClassName="mt-3 align-items-center"
                                                tableClass="table-borderless table-centered align-middle table-nowrap mb-0"
                                                theadClass="text-muted table-light"
                                                isBordered={false}
                                                SearchPlaceholder=""
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

            <Modal show={addagencies} onHide={handleCloseAgencies}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5" id="addAgencyModalLabel">{editagencies ? "Edit Agencies" : "Add Agencies"}</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label>Agencies Images<span className="text-danger">*</span></Form.Label>
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
                                    <div className="border border-1 border-dashed text-center dz-clickable" style={{ minHeight: "100px" }}>
                                        <div
                                            className="dz-message needsclick"
                                            {...getRootProps()}
                                        >
                                            <div className="mb-3">
                                                <i className="bi bi-cloud-download fs-1"></i>
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
                            <Form.Label htmlFor="agencies-name-input">Agencies Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="agencies-name-input"
                                name="name"
                                placeholder="Enter agencies name"
                                value={formik.values.name || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.name}
                            />
                            {formik.errors.name && formik.touched.name ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="since-input">Since<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="number"
                                id="since"
                                name="since"
                                placeholder="Enter since from"
                                value={formik.values.since}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.since} />
                            {formik.errors.since && formik.touched.since ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.since}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <Row >
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="property-input" >Total Property<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="property"
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
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="employee-input" >Employee<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="employee"
                                        name="employee"
                                        placeholder="Enter employee"
                                        value={formik.values.employee}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.employee} />
                                    {formik.errors.employee && formik.touched.employee ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.employee}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col lg={6}>
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
                                        isInvalid={!!formik.errors.email} />
                                    {formik.errors.email && formik.touched.email ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="contact-input">Contact No<span className="text-danger">*</span></Form.Label>
                                    <PatternFormat
                                        className="form-control"
                                        id="contact-input"
                                        displayType="input"
                                        name="contact"
                                        value={formik.values.contact}
                                        onChange={formik.handleChange}
                                        format="(##) ####-####" />
                                    {formik.errors.contact && formik.touched.contact ? (
                                        <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.contact}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <Form.Label htmlFor="address-input" className="form-label">Address<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                as="textarea"
                                id="address-input"
                                name="location"
                                rows={3}
                                placeholder="Enter address"
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.location} />
                            {formik.errors.location && formik.touched.location ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.location}</Form.Control.Feedback>
                            ) : null}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="hstack gap-2 justify-content-end">
                            <Button className="btn btn-ghost-danger" onClick={handleCloseAgencies}>
                                <i className="bi bi-x-lg align-baseline me-1"></i> Close
                            </Button>
                            <Button variant="primary" id="add-btn" type="submit">
                                {editagencies ? "Edit" : "Add"}
                            </Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />
            <ToastContainer />
        </React.Fragment>
    );
}

export default AgenciesList;