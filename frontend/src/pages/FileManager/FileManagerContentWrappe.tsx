import React, { useState, useMemo } from "react";
import { Button, Card, Col, Form, Row, ProgressBar, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { filerecent, fliedata, fliefolder, folder } from "Common/data/filedata";
import TableContainer from "Common/TableContainer";
// import { EditProductModal } from "Common/EditProductModal";

const FileManagerContentWrappe = () => {
    const fileRecentData = filerecent;
    //Dropdown
    const [value, setValue] = useState('Docs Type');

    //create folder modal
    const [createFolder, setCreateFolder] = useState(false);
    const handleShowFolder = () => setCreateFolder(!createFolder);

    const handleDropdown = (value: any) => {
        setValue(value)
    }

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
                        <Form.Check className="checkbox-product-list">
                            <Form.Check.Input type="checkbox" value="2" id="checkbox-2" />
                            <Form.Check.Label htmlFor="checkbox-2"></Form.Check.Label>
                        </Form.Check>
                    )
                },
                id: "#",
                Filter: false,
                isSortable: false,
            },
            {
                Header: "Type",
                accessor: "icon",
                Cell: (cell: any) => {
                    return (
                        <i className={`${cell.row.original.icon} text-${cell.row.original.color}-emphasis fs-4`}></i>
                    )
                },
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Document Name",
                accessor: "title",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "File Item",
                accessor: "item",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Size",
                accessor: "mb",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Last Modified",
                accessor: "date",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Action",
                Cell: (cell: any) => {
                    return (
                        <Dropdown className="position-static curser-pointer">
                            <Dropdown.Toggle bsPrefix="btn btn-subtle-secondary btn-sm btn-icon">
                                <i className="ri-more-fill align-middle"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu as="ul">
                                <Dropdown.Item href="#"><i className="ph-eye align-middle me-1"></i> View</Dropdown.Item>
                                <Dropdown.Item className="edit-item-btn" href="#" ><i className="ph-pencil align-middle me-1"></i> Edit</Dropdown.Item>
                                <Dropdown.Item className="remove-item-btn" href="#" ><i className="ph-trash align-middle me-1"></i> Remove</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                },
                Filter: false,
                isSortable: false,
            },
        ],
        []
    )
    return (
        <React.Fragment>
            <Card className="file-manager-content-wrapper w-100 rounded-0 border border-1 border-top-0 border-bottom-0 shadow-none">
                <Card.Body>
                    <div className="d-flex gap-3 align-items-center mb-3">
                        <div className="flex-shrink-0 d-block d-lg-none">
                            <Button type="button" className="btn btn-icon btn-subtle-success file-menu-btn">
                                <i className="ri-menu-2-fill align-bottom"></i>
                            </Button>
                        </div>
                        <div className="search-box flex-grow-1">
                            <Form.Control placeholder="Search products, price etc..." type="text" className="search" />
                            <i className="ri-search-line search-icon"></i>
                        </div>
                        <div className="flex-shrink-0">
                            <Button variant="primary" onClick={handleShowFolder}>
                                <i className="bi bi-plus-lg align-baseline"></i>
                                <span className="ms-1 d-none d-sm-inline-block">Create Folders</span>
                            </Button>
                        </div>
                    </div>
                    <Row className="row-cols-xxl-5">
                        {
                            (fliedata || [])?.map((item: any) => {
                                return (
                                    <Col key={item.id}>
                                        <Link to="#" className="card">
                                            <Card.Body className="d-flex align-items-center gap-3 p-2">
                                                <div className="avatar-xs flex-shrink-0">
                                                    <div className={`avatar-title bg-${item.color}-subtle text-${item.color}-emphasis fs-md rounded`}>
                                                        <i className={item.icon}></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <div className="d-flex flex-wrap text-muted gap-1">
                                                        <div className="flex-shrink-0">
                                                            <b>{item.num}</b>
                                                        </div>
                                                        <div className="flex-grow-1 text-truncate">
                                                            {item.type}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Link>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        {
                            (fliefolder || [])?.map((item: any) => {
                                return (
                                    <Col lg={4} key={item.id}>
                                        <Card className="border shadow-none">
                                            <Card.Body>
                                                <div className="d-flex gap-3 align-items-center mb-4">
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <div className="avatar-title bg-light rounded">
                                                            <img src={item.img} alt="" className="avatar-xs" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="fs-md">{item.title}</h6>
                                                        <p className="mb-0"><Link to="#">Open Folders</Link></p>
                                                    </div>
                                                </div>
                                                <ProgressBar now={item.valuenow} variant={item.color} style={{ width: item.valuenow }} className="progress-sm" />
                                                <div className="d-flex mt-2">
                                                    <p className="flex-grow-1 mb-0">{item.files} Files</p>
                                                    <div className="fw-semibold flex-shrink-0">{item.gb}GB</div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <Card.Title className="card-title flex-grow-1 mb-0" as="h6">Folders</Card.Title>
                        <Dropdown className="flex-shrink-0 curser-pointer">
                            <Dropdown.Toggle bsPrefix="btn btn-subtle-secondary btn-sm">
                                <i className="bi bi-three-dots-vertical"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-end">
                                <Dropdown.Item href="#"><i className="bi bi-folder-plus me-1 align-baseline"></i> Add Folder</Dropdown.Item>
                                <Dropdown.Item href="#"><i className="bi bi-cloud-arrow-down me-1 align-baseline"></i> Import</Dropdown.Item>
                                <Dropdown.Item href="#"><i className="bi bi-cloud-arrow-up me-1 align-baseline"></i> Export</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Row>
                        {
                            (folder || [])?.map((item: any) => {
                                return (
                                    <Col lg={4} key={item.id}>
                                        <Card className="border shadow-none">
                                            <Card.Body>
                                                <div className="d-flex gap-3 mb-4">
                                                    <div className="flex-grow-1">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title bg-transparent rounded text-primary fs-3">
                                                                <i className="bi bi-folder2-open"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Dropdown className="flex-shrink-0 curser-pointer">
                                                        <Dropdown.Toggle as="a" bsPrefix="text-reset d-inline-block">
                                                            <i className="bi bi-three-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-end">
                                                            <Dropdown.Item href="#"><i className="bi bi-folder2-open me-1 align-baseline"></i> Open Folder</Dropdown.Item>
                                                            <Dropdown.Item href="#"><i className="bi bi-pencil-square me-1 align-baseline"></i> Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#"><i className="bi bi-trash3 me-1 align-baseline"></i> Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>

                                                <Link to="#"><h6 className="fs-md text-truncate">{item.title}</h6></Link>
                                                <ul className="list-unstyled hstack gap-2 text-muted mb-0">
                                                    <li>
                                                        <b>{item.feb}</b> Feb
                                                    </li>
                                                    <li>
                                                        <b>{item.files}</b> Files
                                                    </li>
                                                    <li>
                                                        <b>{item.gb}</b> GB
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div id="contactList" className="mt-2">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <Card.Title as="h6" className="flex-grow-1 mb-0">File Recent</Card.Title>
                            <Dropdown className="card-header-dropdown sortble-dropdown flex-shrink-0 curser-pointer">
                                <Dropdown.Toggle as="a" bsPrefix="text-reset dropdown-btn" href="#">
                                    <span className="fw-semibold text-uppercase fs-12">Sort by:
                                    </span>
                                    <span className="text-muted dropdown-title"> {value}</span>
                                    <i className="mdi mdi-chevron-down ms-1"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className=" dropdown-menu-end" >
                                    <Dropdown.Item className="sort asc" onClick={() => handleDropdown("Docs Type")} >Docs Type</Dropdown.Item>
                                    <Dropdown.Item className="sort" onClick={() => handleDropdown("Size")}>Size</Dropdown.Item>
                                    <Dropdown.Item className="sort" onClick={() => handleDropdown("Date")}>Date</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <TableContainer
                            isPagination={true}
                            columns={columns}
                            data={fileRecentData || []}
                            customPageSize={6}
                            tableClass="table table-centered align-middle table-nowrap mb-0"
                            theadClass="text-muted table-light"
                            PaginationClassName="row align-items-center text-center text-sm-start mt-3"
                            isBordered={false}
                            SearchPlaceholder=""
                        />
                    </div>
                </Card.Body>
            </Card>
            {/* <EditProductModal show={createFolder} handleClose={handleShowFolder} /> */}
        </React.Fragment>
    );
}

export default FileManagerContentWrappe;