import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SubscriptionTable = ({ subscriptionsList }: any) => {

    const columns = useMemo(
        () => [
            {
                Header: "Plan",
                accessor: (cellProps: any) => {
                    return (<div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                            <div className="avatar-sm">
                                <div className={"avatar-title bg-" + cellProps.bgcolor + "-subtle rounded"}>
                                    <img src={cellProps.logoImg} alt="" className="avatar-xxs" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <h6 className="fs-md mb-2 plan">{cellProps.coursename}</h6>
                            <p className="text-muted mb-0">{cellProps.category}</p>
                        </div>
                    </div>)
                },
                disableFilters: true,
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Price",
                accessor: "price",
                disableFilters: true,
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Duration",
                accessor: "duration",
                disableFilters: true,
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Status",
                disableFilters: true,
                Filter: false,
                isSortable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Active":
                            return (<Badge bg="success-subtle" text="success" className="status"> {cellProps.status}</Badge>)
                        default:
                            return (<Badge bg="danger-subtle" text="danger" className="status"> {cellProps.status}</Badge>)
                    }
                },
            },
            {
                Header: "Payment Due",
                accessor: (cell: any) => {
                    return <span className='text-muted mb-0 payment_due'>{cell.paymentDue}</span>
                },
                disableFilters: true,
                Filter: false,
                isSortable: true,
            },
            {
                Header: "Action",
                disableFilters: true,
                Filter: false,
                isSortable: false,
                accessor: (cellProps: any) => {
                    switch (cellProps.action) {
                        case "Renew Now":
                            return (<Link to="#" className="text-decoration-underline">{cellProps.action}</Link>)
                        case "Pay Now":
                            return (<Link to="#" className="text-decoration-underline mb-0">{cellProps.action}</Link>)
                        default:
                            return (<Link to="#" className="text-decoration-underline">{cellProps.action}</Link>)
                    }
                },
            },
        ],
        []
    );

    return (
        <React.Fragment>
            {
                subscriptionsList && subscriptionsList.length > 0 ?
                     <TableContainer
                        isPagination={false}
                        columns={(columns || [])}
                        data={(subscriptionsList || [])}
                        // isGlobalFilter={false}
                        iscustomPageSize={false}
                        customPageSize={5}
                        tableClass="table table-custom align-middle table-borderless table-nowrap"
                        theadClassName=""
                        SearchPlaceholder='Search Products...'
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

        </React.Fragment>
    );
};

export default SubscriptionTable;