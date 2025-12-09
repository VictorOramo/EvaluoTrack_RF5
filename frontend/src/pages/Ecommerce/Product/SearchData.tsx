import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const SearchData = ({ handlecategory, handledicount, filter, handlesearchdata, handleBrand }: any) => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <Row className="g-3">
                                <Col className="col-xxl">
                                    <div className="search-box">
                                        <Form.Control type="text" className="search" placeholder="Search products..." value={filter} onChange={(e) => handlesearchdata(e.target.value)} />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col sm={6} className="col-xxl">
                                    <div>
                                        <Form.Select className="form-control" onChange={(e) => handleBrand(e.target.value)}>
                                            <option value="Boat">Boat</option>
                                            <option value="Puma">Puma</option>
                                            <option value="Adidas" >Adidas</option>
                                            <option value="Realme">Realme</option>
                                        </Form.Select>
                                    </div>
                                </Col>
                                <Col sm={6} className="col-xxl">
                                    <div>
                                        <Form.Select id="idCategory" className="form-control" onChange={(e) => handlecategory(e.target.value)}>
                                            <option value="all">Select Category</option>
                                            <option value="Appliances">Appliances</option>
                                            <option value="Automotive Accessories" >Automotive Accessories</option>
                                            <option value="Electronics" >Electronics</option>
                                            <option value="Fashion" >Fashion</option>
                                            <option value="Furniture" >Furniture</option>
                                            <option value="Grocery" >Grocery</option>
                                            <option value="Headphones" >Headphones</option>
                                            <option value="Kids" >Kids</option>
                                            <option value="Luggage" >Luggage</option>
                                            <option value="Sports" >Sports</option>
                                            <option value="Watches" >Watches</option>
                                        </Form.Select>
                                    </div>
                                </Col>
                                <Col xxl={2} sm={6}>
                                    <div>
                                        <Form.Select id="idDiscount" className="form-control" onChange={(e) => handledicount(e.target.value)} >
                                            <option value="all">Select All Discount</option>
                                            <option value="1">10% or more</option>
                                            <option value="2">20% or more</option>
                                            <option value="3">30% or more</option>
                                            <option value="4">40% or more</option>
                                            <option value="5">50% or more</option>
                                            <option value="0">Less than 10%</option>
                                        </Form.Select>
                                    </div>

                                </Col>
                                <Col sm={6} className="col-xxl-auto">
                                    <Button type="button" variant="secondary" className="w-md"><i className="bi bi-funnel align-baseline me-1"></i> Filters</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </React.Fragment >
    );
}

export default SearchData;