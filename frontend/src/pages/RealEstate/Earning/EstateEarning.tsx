import React, { useEffect, useMemo, useState } from "react";
import Flatpickr from "react-flatpickr";
import { Card, Col, Container, Row, Badge, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import BreadCrumb from "Common/BreadCrumb";
import { earningcard } from "Common/data/earning";
import {
    getEarningList as onGetEarningList,
} from "slices/thunk";
import EarningChart from "./EarningChart";
import TableContainer from "Common/TableContainer";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
const Earning = () => {

    document.title = "Earnings | Steex - Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectEarningList = createSelector(
        (state: any) => state.RealEstate.earninglist,
        (earningList) => earningList
      );
      
    const { earningList } = useSelector((state: any) => ({
        earningList: selectEarningList(state)
    }));
    
    useEffect(() => {
        dispatch(onGetEarningList());
    }, [dispatch]);

    const [earning, setEarning] = useState<any>();
    const [selectDate, setSelectDate] = useState(0);

    //search
    const handleSearch = (event: any) => {
        let search = event.target.value;
        if (search) {
            // search = search?.toLowerCase();
            setEarning(earningList.filter((data: any) => data.details?.toLowerCase().includes(search)));
        } else {
            setEarning(earningList);
        }
    }

    useEffect(() => {
        setEarning(earningList)
    }, [earningList])

    const column = useMemo(
        () => [
            {
                Header: (
                    <Form.Check type="checkbox" id="checkbox-all" />
                ),
                accessor: (cell: any) => {
                    return (
                        <Form.Check>
                            <Form.Check.Input type="checkbox" id="checkbox-1" />
                            <Form.Check.Label htmlFor="checkbox-1"></Form.Check.Label>
                        </Form.Check>
                    )
                },
                id: "#",
                Filter: false,
                isSortable: false,
            },
            {
                Header: "#",
                accessor: "icon",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span className={`in_out text-${cell.row.original.color} fs-md`}><i className={cell.row.original.icon}></i></span>
                    )
                }
            },
            {
                Header: "Transaction ID",
                accessor: "transactionID",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <Link to="/apps-real-estate-agencies-overview" className="fw-medium link-primary">#{cell.row.original.transactionID}</Link>
                    )
                }
            },
            {
                Header: "Timestamp",
                accessor: "timestamp",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.date} <small className="text-muted">{cell.row.original.timestamp}</small></span>
                    )
                }
            },
            {
                Header: "Details",
                accessor: "details",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.details} </span>
                    )
                }
            },
            {
                Header: "Type",
                accessor: "type",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.type} </span>
                    )
                }
            },
            {
                Header: "Amount",
                accessor: "amount",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => {
                    return (
                        <span >{cell.row.original.amount} </span>
                    )
                }
            },
            {
                Header: "Status",
                Filter: false,
                isSortable: true,
                accessor: (cell: any) => {
                    switch (cell.status) {
                        case "Pending":
                            return (<Badge bg="warning-subtle" text="warning">{cell.status} </Badge>)
                        case "Cancelled":
                            return (<Badge bg="danger-subtle" text="danger">{cell.status} </Badge>)
                        default:
                            return (<Badge bg="success-subtle" text="success">{cell.status} </Badge>)
                    }
                }
            },
        ], []
    )
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <BreadCrumb title="Earnings" pageTitle="Real Estate" />
                    <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
                        {
                            (earningcard || [])?.map((item: any) => {
                                return (
                                    <Col key={item.id}>
                                        <Card className={`border-bottom border-2 card-animate border-${item.border}`}>
                                            <Card.Body>
                                                <Badge className={`bg-${item.iconColor}-subtle text-${item.iconColor} float-end`}><i className={`${item.icon} align-middle me-1`}></i> {item.ratting}%</Badge>
                                                <h4 className="mb-4">$<span className="counter-value">{item.target}</span></h4>
                                                <p className="text-muted fw-medium text-uppercase mb-0">{item.title}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body className="pb-0 mb-n4">
                                    <div className="d-flex z-1 position-relative">
                                        <div className="flex-shrink-0">
                                            <Flatpickr
                                                className="form-control form-control-sm"
                                                data-range-date={true}
                                                data-default-date="01 March 2023 to 31 March 2023"
                                                value={selectDate}
                                                options={{
                                                    mode: "range",
                                                    dateFormat: "d M, Y",
                                                }}
                                                onChange={(date: any) => {
                                                    setSelectDate(date)
                                                }} />
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="pt-0 mt-4 mt-md-0">
                                    <div id="line_chart_basic" dir="ltr">
                                        <EarningChart dataColors='["--tb-primary", "--tb-danger"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card id="agenciesList">
                                <Card.Header>
                                    <Row className="align-items-center gy-3">
                                        <Col xl={3} lg={4} md={6} className="order-last order-md-first me-auto">
                                            <div className="search-box">
                                                <Form.Control type="text" className="search" placeholder="Search for transaction, date or something..." onChange={handleSearch} />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={5} className="col-xl-auto">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="text-muted flex-shrink-0">Sort by: </span>
                                                <div className="flex-grow-1">
                                                    <Form.Select className="form-control" id="select-category" >
                                                        <option value="All Select">All Select</option>
                                                        <option value="Email">Email</option>
                                                        <option value="Agencies Name">Agencies</option>
                                                        <option value="Address">Address</option>
                                                        <option value="Total Property">Total Property</option>
                                                        <option value="Employee">Employee</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    {earning && earning.length > 0 ?
                                        <TableContainer
                                            isPagination={true}
                                            columns={column}
                                            data={earning || []}
                                            customPageSize={10}
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
        </React.Fragment>
    );
}

export default Earning;