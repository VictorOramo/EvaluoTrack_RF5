import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaginationFile = (props: any) => {
    const { currentpages, pagination, perPageData, currentPage, pageNumbers, handlenextPage, handleClick, handleprevPage, estateList, className } = props;

    return (
        <React.Fragment>
            {!currentpages?.length && <div id="noresult">
                <div className="text-center py-4">
                    <div className="avatar-md mx-auto mb-4">
                        <div className="avatar-title bg-light text-primary rounded-circle fs-4xl">
                            <i className="bi bi-search"></i>
                        </div>
                    </div>
                    <h5 className="mt-2">Sorry! No Result Found</h5>
                </div>
            </div>}
            {pagination && <Row className={`align-items-center ${className} justify-content-between text-center text-sm-start`} id="pagination-element" style={{ display: "flex" }}>
                <div className="col-sm">
                    <div className="text-muted">
                        Showing <span className="fw-semibold">{perPageData}</span> of <span className="fw-semibold">{estateList?.length}</span> Results
                    </div>
                </div>
                <div className="col-sm-auto  mt-3 mt-sm-0">
                    <div className="pagination-wrap hstack gap-2">

                        {currentPage <= 1 ? (<Link to="#" className="page-item disabled pagination-prev">Previous</Link>) :
                            (<Link to="#" className={currentPage <= 1 ? "page-item disabled pagination-prev" : "page-item pagination-prev"} onClick={() => handleprevPage()}>Previous</Link>)}

                        <ul className="pagination listjs-pagination mb-0">
                            {(pageNumbers || []).map((item: any, key: any) => (
                                <React.Fragment key={key}>
                                    <li className={currentPage === item ? "active " : ""}>
                                        <Link className="page" to="#" key={key} id={item} onClick={(e) => handleClick(e)}>
                                            {item}
                                        </Link>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                        <Link to="#" className={currentPage >= pageNumbers.length ? "page-item disabled pagination-next" : "page-item pagination-next"} onClick={() => handlenextPage()}>Next</Link>
                    </div>
                </div>
            </Row>}
        </React.Fragment>
    );
}

export default PaginationFile;