import React, { useState, useEffect } from "react";
import { Card, Col, Form, Badge, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";


const FilteredProduct = ({ setFilterGrid, grid }: any) => {

    const [mincost, setMincost] = useState(0);
    const [maxcost, setMaxcost] = useState(2000);

    //Category
    const handlecategory = (value: any) => {
        setFilterGrid(grid?.filter((category: any) => category.category === value))
    }
    //dicount
    const handlediscount = (value: any) => {
        setFilterGrid(grid?.filter((dic: any) => dic.discount === value))
    }

    //slider function
    const onUpDate = (value: any) => {
        setMincost(value[0]);
        setMaxcost(value[1]);
    };

    const handlesearchdata = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search?.toLowerCase()
            setFilterGrid(grid.filter((data: any) => data.title?.toLowerCase().includes(search)));
            // setPagination(false)
        } else {
            setFilterGrid(grid);
            // setPagination(true)
        }
    };


    useEffect(() => {
        onUpDate([mincost, maxcost]);
    }, [mincost, maxcost]);

    useEffect(() => {
        let slider = document.getElementById("product-price-range");
        slider?.setAttribute("data-slider-color", "secondary");
    }, [])
    return (
        <React.Fragment>
            <Col xxl={3}>
                <Card>
                    <Card.Header className="d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h5 className="card-title mb-0">Filters</h5>
                        </div>
                        <div className="flex-shrink-0">
                            <Link to="#" className="text-reset text-decoration-underline">Clear All</Link>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="search-box mb-3">
                            <Form.Control type="text" id="searchResultList" placeholder="Search products, category etc..." onChange={handlesearchdata} />
                            <i className="ri-search-line search-icon"></i>
                        </div>
                        <Accordion defaultActiveKey="0" className="filter-panel" id="accordionExample" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header id="categoryAccordion">Product Category</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled mb-0 filter-list">
                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Appliances")}>Appliances</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Automotive")}>Automotive Accessories</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Electronics")}>Electronics</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Fashion")}>Fashion</h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <Badge bg="light" text="muted">7</Badge>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Furniture")}>Furniture</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Grocery")}>Grocery</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Headphones")}>Headphones</h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <Badge bg="light" text="muted">2</Badge>
                                                </div>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Luggage")}>Luggage</h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <Badge bg="light" text="muted">1</Badge>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Sports")}>Sports</h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <Badge bg="light" text="muted">1</Badge>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="d-flex py-1 align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-sm mb-0 listname" onClick={() => handlecategory("Watches")}>Watches</h5>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header id="priceAccordion">
                                    Price
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Nouislider
                                        range={{ min: 0, max: 2000 }}
                                        start={[mincost, maxcost]}
                                        connect
                                        onSlide={onUpDate}
                                        id="product-price-range"
                                    />
                                    <div className="formCost d-flex gap-2 align-items-center mt-3">
                                        <Form.Control className="form-control-sm" type="text" id="minCost" value={`$ ${mincost}`} onChange={(e: any) => setMincost(e.target.value)} />
                                        <span className="fw-semibold text-muted">to</span>
                                        <Form.Control className="form-control-sm" type="text" id="maxCost" value={`$ ${maxcost}`} onChange={(e: any) => setMaxcost(e.target.value)} />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header id="ColorsAccordion"> Colors</Accordion.Header>
                                <Accordion.Body>
                                    <div className="hstack gap-2 flex-wrap">
                                        <Link to="#" className="btn btn-sm btn-subtle-primary">Blue</Link>
                                        <Link to="#" className="btn btn-sm btn-subtle-secondary">Dark</Link>
                                        <Link to="#" className="btn btn-sm btn-subtle-success">Green</Link>
                                        <Link to="#" className="btn btn-sm btn-subtle-danger">Red</Link>
                                        <Link to="#" className="btn btn-sm btn-subtle-dark">Black</Link>
                                        <Link to="#" className="btn btn-sm btn-subtle-warning">Yellow</Link>
                                        <Link to="#" className="btn btn-sm btn-subtle-info">Cyan</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header id="brandsAccordion">
                                    Brands <Badge bg="primary" className="ms-2 fs-xxs">3</Badge>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="d-flex flex-column gap-2 filter-check">
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="Boat" id="productBrandAll" />
                                            <Form.Check.Label htmlFor="productBrandAll">All Select</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="Boat" id="productBrandRadio5" defaultChecked />
                                            <Form.Check.Label htmlFor="productBrandRadio5">Boat</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="OnePlus" id="productBrandRadio4" />
                                            <Form.Check.Label htmlFor="productBrandRadio4">OnePlus</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="Realme" id="productBrandRadio3" />
                                            <Form.Check.Label htmlFor="productBrandRadio3">Realme</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="Sony" id="productBrandRadio2" />
                                            <Form.Check.Label htmlFor="productBrandRadio2">Sony</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="JBL" id="productBrandRadio1" defaultChecked />
                                            <Form.Check.Label htmlFor="productBrandRadio1">JBL</Form.Check.Label>
                                        </Form.Check>

                                        <div>
                                            <button type="button" className="btn btn-link text-decoration-none text-uppercase fw-medium p-0">1,235
                                                More</button>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header id="discountAccordion">
                                    Discount
                                </Accordion.Header>
                                <Accordion.Body >
                                    <div className="d-flex flex-column gap-2 filter-check" id="discount-filter">
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="50" id="productdiscountRadio6" onClick={() => handlediscount("50%")} />
                                            <Form.Check.Label htmlFor="productdiscountRadio6">50% or more</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="40" id="productdiscountRadio5" onClick={() => handlediscount("40%")} />
                                            <Form.Check.Label htmlFor="productdiscountRadio5">40% or more</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="30" id="productdiscountRadio4" onClick={() => handlediscount("30%")} />
                                            <Form.Check.Label htmlFor="productdiscountRadio4"> 30% or more </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="20" id="productdiscountRadio3" onClick={() => handlediscount("20%")} />
                                            <Form.Check.Label htmlFor="productdiscountRadio3"> 20% or more </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="10" id="productdiscountRadio2" onClick={() => handlediscount("10%")} />
                                            <Form.Check.Label htmlFor="productdiscountRadio2">  10% or more </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check>
                                            <Form.Check.Input type="checkbox" value="0" id="productdiscountRadio1" onClick={() => handlediscount("0%")} />
                                            <Form.Check.Label htmlFor="productdiscountRadio1">Less than 10%</Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Col >
        </React.Fragment >
    );
}

export default FilteredProduct;