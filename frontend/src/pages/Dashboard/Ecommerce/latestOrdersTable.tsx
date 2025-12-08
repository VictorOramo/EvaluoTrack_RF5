import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { latestOrder } from 'Common/data'
import { Link } from 'react-router-dom';
import { Badge } from "react-bootstrap";

const LatestOrdersTable = () => {

  const columns = useMemo(() => [
    {
      Header: "Order Date",
      accessor: "date",
      disableFilters: true,
      Filter: false,
      isSortable: true
    },
    {
      Header: "Order ID",
      accessor: (cellProps: any) => {
        return (
          <Link to={ "/apps-ecommerce-order-overview"} className="fw-medium link-primary">{cellProps.id}</Link>
        )
      },
      disableFilters: true,
      Filter: false,
      isSortable: true
    },
    {
      Header: "Shop",
      accessor: (cellProps: any) => {
        return (
          <img src={cellProps.image} alt="" className="avatar-xxs rounded-circle" />
        )
      },
      disableFilters: true,
      Filter: false,
      isSortable: true
    },
    {
      Header: "Customers",
      accessor: "customerName",
      disableFilters: true,
      Filter: false,
      isSortable: true
    },
    {
      Header: "Products",
      accessor: "products",
      disableFilters: true,
      Filter: false,
      isSortable: true
    },
    {
      Header: "Amount",
      accessor: "price",
      disableFilters: true,
      Filter: false,
      isSortable: true
    },
    {
      Header: "Status",
      disableFilters: true,
      Filter: false,
      isSortable: true,
      accessor: (cellProps: any) => {
        switch (cellProps.status) {
          case "Pending":
            return (<Badge bg="warning-subtle" text="warning"> {cellProps.status}</Badge>)
          case "New":
            return (<Badge bg="secondary-subtle" text="secondary"> {cellProps.status}</Badge>)
          case "Delivered":
            return (<Badge bg="success-subtle" text="success"> {cellProps.status}</Badge>)
          case "Shipping":
            return (<Badge bg="primary-subtle" text="primary"> {cellProps.status}</Badge>)
          case "Out of Delivered":
            return (<Badge bg="danger-subtle" text="danger"> {cellProps.status}</Badge>)
        }
      },
    },
    {
      Header: "Rating",
      accessor: (cell: any) => {
        return (<h5 className='fs-md fw-medium mb-0'>
          <i className='ph-star align-baseline text-warning'></i> {cell.rating}
        </h5>)
      },
      disableFilters: true,
      Filter: false,
      isSortable: true
    },
  ], []
  );

  return (
    <React.Fragment>
      <TableContainer
        isPagination={false}
        columns={(columns || [])}
        data={(latestOrder || [])}
        iscustomPageSize={false}
        isBordered={false}
        customPageSize={6}
        className="table-responsive"
        tableClass="table table-borderless table-centered align-middle table-nowrap mb-0"
        theadClass="text-muted table-light"
        SearchPlaceholder='Search Products...'
      />
    </React.Fragment>
  );
};

export { LatestOrdersTable }