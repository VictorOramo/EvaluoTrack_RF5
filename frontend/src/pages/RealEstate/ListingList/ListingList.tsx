import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Badge, Form, Button, Modal, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BreadCrumb from "Common/BreadCrumb";
import { listinglistcard } from "Common/data/Listing";
import TableContainer from "Common/TableContainer";
import { DeleteModal } from "Common/DeleteModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    getRealEstateListingList as onGetRealEstateListingList,
    addRealEstateListingList as onAddRealEstateListingList,
    updateRealEstateListingList as onUpdateRealEstateListingList,
    deleteRealEstateListingList as onDeleteRealEstateListingList
} from "slices/realestate/thunk";
import { ToastContainer } from "react-toastify";
import { createSelector } from "reselect";

const ListingList = () => {

    document.title = "Listing List | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectListingList = createSelector(
        (state: any) => state.RealEstate,
        (realEstate) => ({
            listingList: realEstate.realEstateListingList
        })
    );

    const { listingList } = useSelector(selectListingList);

    useEffect(() => {
        dispatch(onGetRealEstateListingList());
    }, [dispatch]);

    const [realList, setRealList] = useState<any>();
    const [show, setShow] = useState(false);
    const [listinglist, setListingList] = useState<any>(null);

    const [addRecord, setAddRecord] = useState<boolean>(false);
    const [editRecord, setEditRecord] = useState<boolean>(false);
    //add record modal
    const handleAddRecord = () => setAddRecord(true);
    const handleCloseRecord = () => {
        setAddRecord(false);
        setListingList(null);
        setEditRecord(false)
    };
    //edit record modal
    const handleEditRecord = useCallback(async (item: any) => {
        try {
            await setEditRecord(true);
            handleAddRecord();
            setListingList({
                id: item.id,
                title: item.title,
                type: item.type,
                bedroom: item.bedroom,
                city: item.city,
                area: item.area,
                agent: item.agent,
                requirement: item.requirement,
                price: item.price
            })
        } catch (error) {
            console.log("error");
        }
    }, []);

    const handleDeleteShow = (ele: any) => { setShow(true); setListingList(ele) };
    const handleDeleteClose = () => setShow(false);

    //delete modal
    const deleteModalFunction = () => {
        if (listinglist.id) {
            dispatch(onDeleteRealEstateListingList(listinglist.id));
        }
        setShow(false);
        setListingList(null);
    }

    //search
    const handleSearch = (event: any) => {
        let search = event.target.value;
        if (search) {
            search = search?.toLowerCase()
            setRealList(listingList.filter((data: any) => data.title?.toLowerCase().includes(search)));
        } else {
            setRealList(listingList);
        }
    }

    useEffect(() => {
        setRealList(listingList)
    }, [listingList]);


    const columns = useMemo(
        () => [
            {
                Header: (
                    <Form.Check type="checkbox" id="checkAll" />
                ),
                accessor: (cell: any) => {
                    return (<Form.Check>
                        <Form.Check.Input type="checkbox" id="checkbox-1" />
                        <Form.Check.Label htmlFor="checkbox-1"></Form.Check.Label>
                    </Form.Check>)
                },
                id: "#",
                Filter: false,
                isSortable: false
            },
            {
                Header: "#",
                accessor: "id",
                Cell: (cell: any) => {
                    return (
                        <Link to="/apps-real-estate-property-overview" className="fw-medium link-primary">#TBS0{cell.row.original.id}</Link>
                    )
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Property Name",
                accessor: "title",
                Cell: (cell: any) => {
                    return (
                        <Link to="/apps-real-estate-property-overview" className="text-reset">{cell.row.original.title}</Link>
                    )
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Address",
                accessor: "city",
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.city}</span>
                    )
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Beds",
                accessor: "bedroom",
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.bedroom}</span>
                    )
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Property Type",
                accessor: "type",
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.type}</span>
                    )
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Sqft",
                accessor: "area",
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.area}</span>
                    )
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Agents",
                accessor: "agent",
                Cell: (cell: any) => {
                    return (
                        <span>{cell.row.original.agent}</span>
                    )
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Price",
                accessor: "price",
                Cell: (cell: any) => {
                    return (
                        <span className="fw-medium">${cell.row.original.price}</span>
                    )
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Sale/Rent",
                accessor: (cell: any) => {
                    switch (cell.requirement) {
                        case 'Sale':
                            return (<Badge bg="danger-subtle" text="danger">{cell.requirement}</Badge>)
                        default:
                            return (<Badge bg="info-subtle" text="info">{cell.requirement}</Badge>)
                    }
                },
                Filter: false,
                isSortable: true
            },
            {
                Header: "Action",
                accessor: (cell: any) => {
                    return (
                        <ul className="d-flex gap-2 list-unstyled mb-0">
                            <li>
                                <Link to="/apps-real-estate-property-overview" className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn" onClick={() => handleEditRecord(cell)}><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" onClick={() => handleDeleteShow(cell)}><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
                    )
                },
                Filter: false,
                isSortable: false
            },
        ], [handleEditRecord]
    );

    const formik: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
        initialValues: {
            id: (listinglist && listinglist.id) || '',
            title: (listinglist && listinglist.title) || '',
            type: (listinglist && listinglist.type) || '',
            bedroom: (listinglist && listinglist.bedroom) || '',
            city: (listinglist && listinglist.city) || '',
            area: (listinglist && listinglist.area) || '',
            agent: (listinglist && listinglist.agent) || '',
            requirement: (listinglist && listinglist.requirement) || '',
            price: (listinglist && listinglist.price) || ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Name"),
            type: Yup.string().required("Please Enter Your Location"),
            bedroom: Yup.string().required("Please Enter Your Bedroom"),
            city: Yup.string().required("Please Enter Your Address"),
            area: Yup.string().required("Please Enter Your SQFY"),
            agent: Yup.string().required("Please Enter Your Agent Name"),
            requirement: Yup.string().required("Please Enter Your Requirement"),
            price: Yup.string().required("Please Enter Your Price"),
        }),
        onSubmit: (values: any) => {
            if (editRecord) {
                const upadteList = {
                    id: values.id,
                    title: values.title,
                    type: values.type,
                    bedroom: values.bedroom,
                    city: values.city,
                    area: values.area,
                    agent: values.agent,
                    requirement: values.requirement,
                    price: values.price
                }
                dispatch(onUpdateRealEstateListingList(upadteList));
                formik.resetForm();
            } else {
                const newList = {
                    id: (Math.floor(Math.random() * (30 - 20)) + 20),
                    title: values["title"],
                    type: values["type"],
                    bedroom: values["bedroom"],
                    city: values["city"],
                    area: values["area"],
                    agent: values["agent"],
                    requirement: values["requirement"],
                    price: values['price']
                }
                dispatch(onAddRealEstateListingList(newList));
                formik.resetForm();
            }
            if (values === null) {
                setEditRecord(true);
            } else {
                handleCloseRecord();
            }
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Listing List" pageTitle="Real Estate" />
                    <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
                        {
                            (listinglistcard || [])?.map((item: any) => {
                                return (
                                    <Col className="col" key={item.id}>
                                        <Card className={`border-bottom border-3 card-animate border-${item.border}`}>
                                            <Card.Body>
                                                <Badge className={`bg-${item.iconColor}-subtle text-${item.iconColor} float-end`}><i className={`${item.icon} align-middle me-1`}></i> 3.8%</Badge>
                                                <h4 className="mb-4"><span className="counter-value">{item.target}</span></h4>
                                                <p className="text-muted fw-medium text-uppercase mb-0">{item.title}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Card id="propertyList">
                        <Card.Header>
                            <Row className="align-items-center gy-3">
                                <Col lg={3} md={6} className="order-last order-md-first me-auto">
                                    <div className="search-box">
                                        <Form.Control type="text" className="search" placeholder="Search for property, price or something..." onChange={(e: any) => handleSearch(e)} />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col xs={6} className="col-md-auto text-end">
                                    <div className="d-flex flex-wrap align-items-start gap-2">
                                        <Button className="btn btn-subtle-danger d-none" id="remove-actions"><i className="ri-delete-bin-2-line"></i></Button>
                                        <Button variant="secondary" className="add-btn" onClick={handleAddRecord}><i className="bi bi-house align-baseline me-1"></i> Add Property</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            {
                                realList && realList.length > 0 ?
                                    <TableContainer
                                        isPagination={true}
                                        columns={columns}
                                        data={realList || []}
                                        customPageSize={10}
                                        tableClass="table table-borderless table-centered align-middle table-nowrap mb-0"
                                        theadClass="text-muted table-light"
                                        PaginationClassName="align-items-center mt-3"
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
                </Container>
            </div>

            <Modal show={addRecord} onHide={handleCloseRecord} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title as="h5" id="exampleModalLabel">Add Property List</Modal.Title>
                </Modal.Header>
                <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label htmlFor="Property-title-input">Property title<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="Property-title-input"
                                placeholder="Enter Property title"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.title}
                            />
                            {formik.errors.title && formik.touched.title ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="Property-type-input">Property Type<span className="text-danger">*</span></Form.Label>

                            <Form.Select
                                id="Property-type-input"
                                name="type"
                                value={formik.values.type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.type}>
                                <option value="">Select Property Type</option>
                                <option value="Villa">Villa</option>
                                <option value="Residency">Residency</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Others">Other</option>
                            </Form.Select>
                            {formik.errors.type && formik.touched.type ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.type}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="Property-price-input">Price<span className="text-danger">*</span></Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            id="Property-price-input"
                                            placeholder="Enter price"
                                            name="price"
                                            value={formik.values.price}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.price}
                                        />
                                        {formik.errors.price && formik.touched.price ? (
                                            <Form.Control.Feedback type="invalid">{formik.errors.price}</Form.Control.Feedback>
                                        ) : null}
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="agent-name-input">Agent Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="agent-name-input"
                                        placeholder="Enter Agent Name "
                                        name="agent"
                                        value={formik.values.agent}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.agent}
                                    />
                                    {formik.errors.agent && formik.touched.agent ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.agent}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="bedroom-input">Bedroom<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="bedroom-input"
                                        placeholder="Enter Bedroom"
                                        name="bedroom"
                                        value={formik.values.bedroom}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.bedroom}
                                    />
                                    {formik.errors.bedroom && formik.touched.bedroom ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.bedroom}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="sqft-input">SQFT<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="sqft-input"
                                        placeholder="Enter sqft"
                                        name="area"
                                        value={formik.values.area}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.area}
                                    />
                                    {formik.errors.area && formik.touched.area ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.area}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="requirement-input">Requirement<span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        name="requirement"
                                        value={formik.values.requirement}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.requirement}>
                                        <option value="">Requirement Type</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Sale">Sale</option>
                                    </Form.Select>
                                    {formik.errors.requirement && formik.touched.requirement ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.requirement}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="addressLine">Sort Address<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        id="addressLine"
                                        rows={3}
                                        name="city"
                                        placeholder="Enter sort address"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.city}
                                    />
                                    {formik.errors.city && formik.touched.city ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.city}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-ghost-danger" onClick={handleCloseRecord}>
                            <i className="bi bi-x-lg align-baseline me-1"></i> Close
                        </Button>
                        <Button variant="primary" type="submit"> Add Property</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />
            <ToastContainer />
        </React.Fragment>
    );
}

export default ListingList;