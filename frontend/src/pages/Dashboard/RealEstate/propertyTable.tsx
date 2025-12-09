import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { PropertyData } from 'Common/data';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const PropertyTable = () => {

  const columns = useMemo(() => [
    {
      Header: "#",
      accessor: (cellProps: any) => {
        return (
          <Link to={"/apps-ecommerce-order-overview"} className="fw-medium link-primary">{cellProps.id}</Link>
        )
      },
      disableFilters: true,
      Filter: false,
    },
    {
      Header: "Property Type",
      accessor: "propertyType",
      disableFilters: true,
      Filter: false,
    },
    {
      Header: "Property Name",
      accessor: "name",
      disableFilters: true,
      Filter: false,
      Cell: (property: any) => (
        <>
          <div className="d-flex align-items-center gap-2">
            <img src={property.row.original.image} alt="react.png" height='35px' className="rounded" />
            <Link to={"/pages-profile"} className="text-reset contact_name">{property.row.original.propertyName}</Link>
          </div>
        </>
      ),
    },
    {
      Header: "Address",
      accessor: "country",
      disableFilters: true,
      Filter: false,
    },
    {
      Header: "Agent Name",
      accessor: "agentName",
      disableFilters: true,
      Filter: false,
    },
    {
      Header: "Price",
      accessor: "price",
      disableFilters: true,
      Filter: false,
    },
    {
      Header: "Status",
      disableFilters: true,
      Filter: false,
      accessor: (cellProps: any) => {
        switch (cellProps.status) {
          case "Rent":
            return (<Badge bg="info-subtle" text='info' className="status"> {cellProps.status}</Badge>)
          case "Sale":
            return (<Badge bg="danger-subtle" text='danger' className="status"> {cellProps.status}</Badge>)
        }
      },
    },
    {
      Header: "Action",
      disableFilters: true,
      Filter: false,
      accessor: () => {
        return (
          <React.Fragment>
            <ul className="d-flex gap-2 list-unstyled mb-0">
              <li>
                <Link to="#" className="btn btn-subtle-primary btn-icon btn-sm "><i className="ph-eye"></i></Link>
              </li>
              <li>
                <Link to="#" className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"><i className="ph-pencil"></i></Link>
              </li>
              <li>
                <Link to="#" className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i className="ph-trash"></i></Link>
              </li>
            </ul>
          </React.Fragment>
        )
      },
    },
  ], []
  );

  return (
    <React.Fragment>
      <TableContainer
        isPagination={false}
        columns={(columns || [])}
        data={(PropertyData || [])}
        // isPagination={true}
        // isGlobalFilter={false}
        iscustomPageSize={false}
        isBordered={false}
        customPageSize={6}
        className="table-responsive table-card mt-0"
        tableClass="table-borderless table-centered align-middle table-nowrap mb-0"
        theadClass="text-muted table-light"
        SearchPlaceholder='Search Products...'
      />
    </React.Fragment>
  );
};

export { PropertyTable }