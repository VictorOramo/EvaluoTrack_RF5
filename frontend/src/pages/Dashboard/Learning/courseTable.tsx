import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { Badge } from "react-bootstrap";
import { coursesData } from 'Common/data'
import { Link } from 'react-router-dom';

const CourseTable = () => {

  const columns = useMemo(() => [
    {
      Header: "Course Name",
      accessor: "name",
      disableFilters: true,
      Filter: false,
      isSortable: true,
      Cell: (course: any) => (
        <>
          <div className="d-flex align-items-center gap-2">
            <img src={course.row.original.image} alt="react.png" className="avatar-xxs rounded" />
            <Link to={"/pages-profile"} className="text-reset contact_name">{course.row.original.coursesName}</Link>
          </div>
        </>
      ),
    },
    {
      Header: "Category",
      accessor: "category",
      disableFilters: true,
      Filter: false,
      isSortable: true,
    },
    {
      Header: "Instructor",
      accessor: "instructor",
      disableFilters: true,
      Filter: false,
      isSortable: true,
    },
    {
      Header: "Lessons",
      accessor: "lessons",
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
      Header: "Fees",
      accessor: "fees",
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
          case "Open":
            return (<Badge bg="info-subtle" text="info" className="status"> {cellProps.status}</Badge>)
          case "Close":
            return (<Badge bg="danger-subtle" text="danger" className="status"> {cellProps.status}</Badge>)
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
      isSortable: true,
    },
  ], []
  );

  return (
    <React.Fragment>
      <TableContainer
        isPagination={true}
        columns={(columns || [])}
        data={(coursesData || [])}
        iscustomPageSize={false}
        isBordered={false}
        customPageSize={5}
        PaginationClassName="align-items-center mt-4 pt-2 row"
        divClassName="table-responsive table-card mt-0"
        tableClass="table-borderless table-centered align-middle table-nowrap mb-0"
        theadClass="text-muted table-light"
        SearchPlaceholder='Search Products here...'
      />
    </React.Fragment>
  );
};

export { CourseTable }