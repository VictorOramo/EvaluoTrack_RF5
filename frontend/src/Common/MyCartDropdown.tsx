import React, { useEffect, useRef, useState } from 'react';
import { Badge, Col, Dropdown, Image, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//SimpleBar
import SimpleBar from "simplebar-react";

//import images
import image1 from "assets/images/products/img-1.png";
import image5 from "assets/images/products/img-5.png";
import image10 from "assets/images/products/img-10.png";
import image11 from "assets/images/products/img-11.png";
import image8 from "assets/images/products/img-8.png";
import { DeleteModal } from './DeleteModal';

const MyCartDropdown = () => {
    const cartItemTotal: any = useRef();
    const emptyCart: any = useRef();

    const cartData = [
        { id: 1, img: image1, product: "Blive Printed Men Round Neck", type: "Fashion", num: 1, price: 32.00, Total: 32.00 },
        { id: 2, img: image5, product: "Willage Volleyball Ball", type: "Sportwear", num: 1, price: 18.01, Total: 18.01 },
        { id: 3, img: image10, product: "Cotton collar tshirts for men", type: "Fashion", num: 1, price: 250.09, Total: 250.09 },
        { id: 4, img: image11, product: "Jeans blue men boxer", type: "Fashion", num: 1, price: 1250.10, Total: 1250.10 },
        { id: 5, img: image8, product: "Full Sleeve Solid Men Sweatshirt", type: "Fashion", num: 1, price: 495.03, Total: 495.03 },
    ];

    const [cartDrop, setCartDrop] = useState<any>(cartData)
    const [dis, setDis] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);
    const [charge, setCharge] = useState<number>(0);
    const [delet, setDelet] = useState<boolean>(false);
    // const [deleteId, setDeleteId] = useState<any>();

    //delete modal
    const handleDelete = (id: any) => {
        setDelet(true);
        setDelet(id)
        const updatedData = cartDrop.filter((item:any) => item.id !== id);
        setCartDrop(updatedData);
    }

    const handleClose = () => setDelet(false);

    const deleteModalFunction = () => {
        handleClose();
    }

    const assigned = cartDrop.map((item: any) => item.Total);
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

    const CountDown = (item: any) => {
        setCartDrop((cartDrop || []).map((count: any) => (count.id === item.id && count.num > 0) ? { ...count, num: item.num > 0 ? item.num - 1 : 0, Total: (item.num > 0 ? item.num - 1 : 0) * item.price } : count));
    }

    const CountUp = (item: any) => {
        setCartDrop((cartDrop || [])?.map((count: any) => count.id === item.id ? { ...count, num: item.num + 1, Total: (item.num + 1) * item.price } : count));
    }


    return (
        <React.Fragment>
            <Dropdown className="topbar-head-dropdown ms-1 header-item">
                <Dropdown.Toggle id="cart-dropdown" as="button" bsPrefix="btn btn-icon btn-topbar btn-ghost-dark rounded-circle arrow-none">
                    <i className='bi bi-bag fs-2xl'></i>
                    <span
                        className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-info">{cartDrop.length}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-xl dropdown-menu-end p-0 dropdown-menu-cart">
                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                        <Row className="align-items-center">
                            <Col>
                                <h6 className="m-0 fs-16 fw-semibold"> My Cart <Badge bg='secondary' className="fs-sm cartitem-badge ms-1">{cartDrop.length}</Badge></h6>
                            </Col>
                            <div className="col-auto">
                                <Link to="#" >View All</Link>
                            </div>
                        </Row>
                    </div>
                    <SimpleBar style={{ maxHeight: "300px" }}>
                        <div className="p-3">
                            <div className="text-center empty-cart" id="empty-cart" ref={emptyCart} style={{ display: "none" }}>
                                <div className="avatar-md mx-auto my-3">
                                    <div className="avatar-title bg-info-subtle text-info fs-2 rounded-circle">
                                        <i className='bx bx-cart'></i>
                                    </div>
                                </div>
                                <h5 className="mb-3">Your Cart is Empty!</h5>
                                <Link to="/#" className="btn btn-success w-md mb-3">Shop Now</Link>
                            </div>
                            {(cartDrop || []).map((item: any, key: number) => (
                                <div className="d-block dropdown-item product text-wrap p-2" key={key}>
                                    <div className='d-flex'>
                                        <div className='avatar-sm me-3 flex-shrink-0'>
                                            <div className="avatar-title bg-light rounded">
                                                <Image src={item.img} alt="user-pic" className='avatar-xs' />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className='mb-1 fs-sm text-muted'>{item.type}</p>
                                            <h6 className="mt-0 mb-3 fs-md">
                                                <Link to="/#" className="text-reset">{item.product}</Link>
                                            </h6>
                                            <div className="text-muted fw-medium d-none">$<span className="product-price">327.49</span></div>
                                            <div className="input-step">
                                                <button type='button' className="minus" onClick={() => CountDown(item)}>–</button>
                                                <input type="number" className="product-quantity" value={item.num} min="0" max="100" readOnly />
                                                <button type='button' className="plus" onClick={() => CountUp(item)}>+</button>
                                            </div>
                                        </div>
                                        <div className="ps-2 d-flex flex-column justify-content-between align-items-end">
                                            <button className='btn btn-icon btn-sm btn-ghost-primary remove-cart-btn' onClick={() => handleDelete(item.id)} >
                                                <i className='ri-close-fill fs-lg'></i>
                                            </button>
                                            <h5 className="mb-0">$<span className="product-line-price">{(item.Total).toFixed(2)}</span></h5>
                                        </div>
                                    </div>
                                </div>))}

                            <div id="count-table">
                                <Table className="table-borderless mb-0  fw-semibold">
                                    <tbody>
                                        <tr>
                                            <td>Sub Total :</td>
                                            <td className="text-end cart-subtotal">${subTotal || ''}</td>
                                        </tr>
                                        <tr>
                                            <td>Discount <span className="text-muted">(STEEX15)</span>:</td>
                                            <td className="text-end cart-discount">- ${dis || ''}</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Charge :</td>
                                            <td className="text-end cart-shipping">${charge || ''}.00</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Tax (12.5%) : </td>
                                            <td className="text-end cart-tax">${tax || ''}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </SimpleBar>
                    <div className="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border d-grid" id="checkout-elem">
                        <div className="d-flex justify-content-between align-items-center pb-3">
                            <h5 className="m-0 text-muted">Total:</h5>
                            <div className="px-2">
                                <h5 className="m-0">$ <span ref={cartItemTotal} id="cart-item-total">{(subTotal + charge + tax - dis).toFixed(2) || ''}</span></h5>
                            </div>
                        </div>

                        <Link to="/apps-ecommerce-checkout" className="btn btn-info text-center w-100">
                            Checkout
                        </Link>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <DeleteModal show={delet} handleClose={handleClose} deleteModalFunction={deleteModalFunction} />
        </React.Fragment>
    );
};

export default MyCartDropdown;