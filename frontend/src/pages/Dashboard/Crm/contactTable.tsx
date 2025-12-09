import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { ContactData } from 'Common/data'
import { Link } from 'react-router-dom';

const ContactTable = () => {

  const columns = useMemo(() => [
    {
      Header: "Contact Name",
      accessor: "name",
      disableFilters: true,
      Filter: false,
      isSortable: true,
      Cell: (contact: any) => (
        <>
          <div className="d-flex align-items-center gap-2">
            <img src={contact.row.original.image} alt="react.png" className="avatar-xxs rounded" />
            <Link to={ "/pages-profile"} className="text-reset contact_name">{contact.row.original.name}</Link>
          </div>
        </>
      ),
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
      disableFilters: true,
      Filter: false,
      isSortable: true,
    },
    {
      Header: "Leeds Score",
      accessor: "score",
      disableFilters: true,
      Filter: false,
      isSortable: true,
    },
    {
      Header: "Location",
      accessor: "location",
      disableFilters: true,
      Filter: false,
      isSortable: true,
    },
    {
      Header: "Create Date",
      accessor: "date",
      disableFilters: true,
      Filter: false,
      isSortable: true,
    },
  ], []
  );

  return (
    <React.Fragment>
      <TableContainer
        isPagination={true}
        columns={(columns || [])}
        data={(ContactData || [])}
        iscustomPageSize={false}
        isBordered={false}
        customPageSize={5}
        PaginationClassName='align-items-center mt-4 pt-2'
        divClassName="table-responsive table-card mt-0"
        tableClass="table table-borderless table-centered align-middle table-nowrap mb-0"
        theadClass="text-muted table-light"
        SearchPlaceholder='Search Products...'
      />
    </React.Fragment>
  );
};

export { ContactTable }