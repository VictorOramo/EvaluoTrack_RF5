import React, { useState, useMemo, useEffect } from "react";
import { Col, Row, Badge, Form, Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteModal } from "Common/DeleteModal";

import {
    deleteProductsGrid as onDeleteProductsGrid
} from "slices/thunk";
import PaginationFile from "Common/PaginationFile";

const ProductCard = ({ filterGrid }: any) => {

    const dispatch = useDispatch<any>();
    const [show, setShow] = useState(false);
    const [deletId, setDeletId] = useState();
    const [currentpages, setCurrentpages] = useState<any>();
    const [currentPage, setCurrentPage] = useState<any>(1);
    const perPageData = 12;
    const pagination: boolean = true;

    //pagination
    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };
    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;
    const currentdata = useMemo(() => filterGrid?.slice(indexOfFirst, indexOfLast), [filterGrid, indexOfFirst, indexOfLast])
    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, currentdata]);

    const pageNumbers: any = [];
    for (let i = 1; i <= Math.ceil(filterGrid?.length / perPageData); i++) {
        pageNumbers.push(i);
    }
    const handleprevPage = () => {
        let prevPage = currentPage - 1;
        setCurrentPage(prevPage);
    };
    const handlenextPage = () => {
        let nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };
    useEffect(() => {
        if (pageNumbers.length && pageNumbers.length < currentPage) {
            setCurrentPage(pageNumbers.length)
        }
    }, [currentPage, pageNumbers.length]);

    const handleDeleteShow = () => setShow(true);
    const handleDeleteClose = () => setShow(false);
    const handeleDelete = (id: any) => {
        handleDeleteShow();
        setDeletId(id);
    }
    //delete modal
    const deleteModalFunction = () => {
        dispatch(onDeleteProductsGrid(deletId));
        handleDeleteClose();
    }

    return (
        <React.Fragment>
            <Col xxl={9}>
                <Row className="align-items-center mb-4 g-3">
                    <Col xxl={2} lg={4} sm={6} className="me-auto">
                        <h5 className="mb-0">Products <Badge className="bg-secondary-subtle text-secondary align-middle ms-1">254</Badge></h5>
                    </Col>
                    <Col xxl={2} lg={4} sm={6}>
                        <Form.Select >
                            <option value="All Select">All Select</option>
                            <option value="Best Rated">Best Rated</option>
                            <option value="Best Selling">Best Selling</option>
                            <option value="Newest">Newest</option>
                            <option value="Trending">Trending</option>
                        </Form.Select>
                    </Col>
                    <Col className="col-lg-auto">
                        <Link to={"/apps-ecommerce-add-product"} className="btn btn-primary">
                            <i className="bi bi-plus-circle align-baseline me-1"></i> Add Product</Link>
                    </Col>
                </Row>

                <Row id="product-grid">
                    {
                        (currentpages || [])?.map((item: any) => {
                            return (
                                <Col xxl={3} lg={4} md={6} key={item.id}>
                                    <Card className="ribbon-box ribbon-fill">
                                        {
                                            item.sale &&
                                            <div className="ribbon ribbon-danger">Sale</div>
                                        }
                                        <Card.Body className="p-4 m-4">
                                            <Button size="sm" type="button" className=" btn-icon btn-subtle-danger position-absolute top-0 end-0 m-3" onClick={() => handeleDelete(item.id)}>
                                                <i className="ph-trash"></i>
                                            </Button>
                                            <img src={item.img?.priview} alt="" className="img-fluid" />
                                        </Card.Body>
                                        <Card.Body className="pt-0">
                                            <Badge text="warning" className="bg-warning-subtle float-end">
                                                <i className="bi bi-star-fill align-baseline me-1"></i>
                                                <span className="rate">{item.ratings}</span>
                                            </Badge>
                                            <h5 className="fs-lg mb-3">${item.price}
                                                {
                                                    item.delete && <small className="fs-sm fw-normal text-decoration-line-through text-muted">${item.delete}</small>
                                                }
                                            </h5>
                                            <Link to={"/apps-ecommerce-product-details"}>
                                                <h6 className="fs-md text-truncate">{item.title}</h6>
                                            </Link>
                                            <Link to="#" className="text-decoration-underline text-muted mb-0">{item.category}</Link>
                                            <div className="mt-3 hstack gap-2">
                                                <Link to={"/apps-ecommerce-add-product"} className="btn btn-primary w-100">
                                                    <i className="ph-pencil me-1 align-middle"></i>
                                                    Edit</Link>
                                                <Link to={"/apps-ecommerce-product-details"} className="btn btn-secondary w-100">
                                                    <i className="ph-eye me-1 align-middle"></i>
                                                    Overview</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                    <PaginationFile
                        className="mb-4"
                        currentpages={currentpages}
                        pagination={pagination}
                        perPageData={perPageData}
                        currentPage={currentPage}
                        pageNumbers={pageNumbers}
                        handlenextPage={handlenextPage}
                        handleClick={handleClick}
                        handleprevPage={handleprevPage}
                        estateList={filterGrid}
                    />
                </Row>
            </Col>
            <DeleteModal show={show} handleClose={handleDeleteClose} deleteModalFunction={deleteModalFunction} />
        </React.Fragment>
    )
};
export default ProductCard;