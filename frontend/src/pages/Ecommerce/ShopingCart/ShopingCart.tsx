import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Badge, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { shopingdata } from "Common/data/Shopingdata";
import BreadCrumb from "Common/BreadCrumb";

const ShopingCart = () => {
    document.title = "Shop Cart | Steex - Admin & Dashboard Template";
    
    const [shoppingCount, setShoppingCount] = useState(shopingdata);

    const [charge, setCharge] = useState(0);
    const [tax, setTax] = useState(0);
    const [dis, setDis] = useState(0);

    const assigned = shoppingCount.map((item) => item.Total);
    let subTotal = 0;
    for (let i = 0; i < assigned.length; i++) {
        subTotal += Math.round(assigned[i]);
    }

    useEffect(() => {
        let dis = (0.15 * subTotal);
        let tax = (0.125 * subTotal);

        if (subTotal !== 0) {
            setCharge(65);
        } else {
            setCharge(0);
        }
        setTax(dis);
        setDis(tax);
    }, [subTotal]);

    const countUP = (item: any) => {
        setShoppingCount((shoppingCount || [])?.map(count => count.id === item.id ? { ...count, num: item.num + 1, Total: (item.num + 1) * item.price } : count));
    }

    const countDown = (item: any) => {
        setShoppingCount((shoppingCount || []).map((count: any) => (count.id === item.id && count.num > 0) ? { ...count, num: item.num > 0 ? item.num - 1 : 0, Total: (item.num > 0 ? item.num - 1 : 0) * item.price } : count));
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Shop Cart" pageTitle="Ecommerce" />
                    <Row className="justify-content-center">
                        <Col xxl={10}>
                            <Card>
                                <Row className="g-0 product-list">
                                    <Col xxl={9}>
                                        <Card.Header className="d-flex align-items-center justify-content-between">
                                            <Card.Title className="flex-grow-1 mb-0">Shopping Cart</Card.Title>
                                            <Badge bg="danger-subtle" text="danger">5 Items</Badge>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="table-responsive">
                                                <Table className="align-middle table-nowrap table-borderless mb-0">
                                                    <thead className="table-active">
                                                        <tr>
                                                            <th>Product Items</th>
                                                            <th>Item Price</th>
                                                            <th>Quantity</th>
                                                            <th className="text-end">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            (shoppingCount || [])?.map((item: any) => {
                                                                return (
                                                                    <tr className="product" key={item.id}>
                                                                        <td>
                                                                            <div className="product-item d-flex align-items-center gap-3">
                                                                                <div className="avatar-md flex-shrink-0">
                                                                                    <div className="avatar-title bg-light rounded">
                                                                                        <img src={item.img} alt="" className="avatar-sm" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex-grow-1">
                                                                                    <h6 className="fs-md mb-1">
                                                                                        <Link to="#" className="text-reset">{item.title}</Link>
                                                                                    </h6>
                                                                                    <p className="text-muted mb-2"><Link to="#" className="text-reset">{item.category}</Link></p>
                                                                                    <p className="mb-0">
                                                                                        <span className={`${item.size ? 'text-muted me-1' : 'd-none'} `}>Size:</span>{item.size || ''} {" "}
                                                                                        <span className="text-muted">Color:</span> {item.color || ''}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>$<span className="product-price">{item.price}</span></td>
                                                                        <td>
                                                                            <div className="input-step">
                                                                                <button type="button" className="minus" onClick={() => countDown(item)}>–</button>
                                                                                <input type="number" className="product-quantity" value={item.num} min="0" max="100" readOnly />
                                                                                <button type="button" className="plus" onClick={() => countUP(item)}>+</button>
                                                                            </div>
                                                                        </td>
                                                                        <td className="fw-medium text-end">$<span className="product-line-price">{(item.Total).toFixed(2)}</span></td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                    <Col xxl={3}>
                                        <div className="border-start-xxl border-top-xxl-0 border-top h-100">
                                            <Card.Header>
                                                <Card.Title className="mb-0">Order Summary</Card.Title>
                                            </Card.Header>
                                            <Card.Body className="mt-2">
                                                <div className="table-responsive table-card">
                                                    <Table className="table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fw-semibold" colSpan={2}>Sub Total :</td>
                                                                <td className="fw-semibold text-end cart-subtotal">${subTotal || ''}</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={2}>Discount <span className="text-muted">(STEEX30)</span> : </td>
                                                                <td className="text-end cart-discount">-${dis || ''}</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={2}>Shipping Charge :</td>
                                                                <td className="text-end cart-shipping">${charge || ''}</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={2}>Estimated Tax (18%): </td>
                                                                <td className="text-end cart-tax">${(tax).toFixed(2) || ''}</td>
                                                            </tr>
                                                            <tr>
                                                                <th colSpan={2}>Total (USD) :</th>
                                                                <td className="text-end">
                                                                    <span className="fw-semibold cart-total">${(subTotal + charge + tax - dis).toFixed(2) || ''}</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>

                                                <div className="text-end mt-4 d-flex flex-wrap gap-1 justify-content-end">
                                                    <Link className="btn btn-secondary" to="/apps-ecommerce-product-grid">Continue Shopping</Link>
                                                    <Link className="btn btn-primary" to="/apps-ecommerce-checkout">Checkout</Link>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ShopingCart;