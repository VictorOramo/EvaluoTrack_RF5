import React, { useState } from "react";
import { Col, Row, Alert, Button, Card, Form, Modal } from "react-bootstrap";
import { CountryData } from "../Countrydata";
/*import Cards from 'react-credit-cards';
//css
import "react-credit-cards/lib/styles.scss";
import 'react-credit-cards/es/styles-compiled.css'*/
//img
import mastercardImg from 'assets/images/mastercard.png';
import visaImg from 'assets/images/visa.png';
import { ShoppingCheckout } from "./ShoppingCheckout";

const PersonalInfo = () => {

    const cardNumber: number = 0;
    const cardHolder: string = 'Full Name';
    const expiry: number = 0;
    const cvc: any = '';
    const focus: any = '';

    const [show, setShow] = useState(true);
    const [selectedCard, setSelectedCard] = useState('debitCart01');
    //add card
    const [card, setCard] = useState(false);

    const handleAddShow = () => setCard(!card);

    const handleCardChange = (event: any) => {
        setSelectedCard(event.target.id);
    };
    return (
        <React.Fragment>
            <Col xxl={8}>
                <Row>
                    <Col lg={12}>
                        <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                            <i className="bi bi-cart3 align-baseline me-1"></i> Minimum order must be <b>$1800</b>. You need to add more products with total cost of <b>$300</b>
                            <Button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShow(false)}></Button>
                        </Alert>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h6" className="mb-0">Personal Information</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row className=" g-3">
                                        <Col lg={6}>
                                            <Form.Label htmlFor="name" >Name</Form.Label>
                                            <Form.Control type="text" id="name" placeholder="Name" />
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Label htmlFor="phoneNumber" >Phone Number</Form.Label>
                                            <Form.Control type="text" id="phoneNumber" placeholder="Phone number" />
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Label htmlFor="email" >Email Address</Form.Label>
                                            <Form.Control type="text" id="email" placeholder="Email address" />
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Label htmlFor="cityInput" >City</Form.Label>
                                            <Form.Control type="text" id="cityInput" placeholder="City" />
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Label htmlFor="stateInput" >State</Form.Label>
                                            <Form.Control type="text" id="stateInput" placeholder="State" />
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Label htmlFor="countryInput" >Country</Form.Label>
                                            <CountryData />
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Label htmlFor="zipCodeInput" >Zip Code</Form.Label>
                                            <Form.Control type="text" id="zipCodeInput" placeholder="Zip code" />
                                        </Col>
                                        <Col lg={12}>
                                            <div>
                                                <Form.Label htmlFor="addressInput" >Address</Form.Label>
                                                <Form.Control as="textarea" id="addressInput" rows={3} placeholder="Enter address"></Form.Control>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <ShoppingCheckout />
                    <Col lg={12}>
                        <Card>
                            <Card.Header className="d-flex align-items-center">
                                <Card.Title as="h6" className="flex-grow-1 mb-0">Payment Information</Card.Title>
                                <Button className="btn btn-subtle-info flex-shrink-0" onClick={handleAddShow}>
                                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                                    Add Card
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col lg={4}>
                                        <Form.Check className="card-radio" name="debitCart" id="debitCart01" checked={selectedCard === 'debitCart01'} onChange={handleCardChange}>
                                            <Form.Check.Label className="bg-primary p-4" htmlFor="debitCart01">
                                                <i className="bi bi-cash-coin position-absolute top-0 end-0 display-1 text-white" style={{ opacity: 0.06 }}></i>
                                                <span className="d-flex align-items-center mb-4 pb-4">
                                                    <img src={mastercardImg} alt="" height="20" />
                                                    <i className="ph-wifi-high ms-auto fs-4 text-white-75" />
                                                </span>
                                                <span className="fs-3xl text-white fw-medium mb-2 d-block">9873 6548 9871 0123</span>
                                                <span className="d-flex align-items-center">
                                                    <span className="fs-xs text-white-75 d-block">Ophelia Steuber</span>
                                                    <span className="fs-xxs text-white-75 d-block ms-auto">Valid <b>32</b></span>
                                                </span>
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                    <Col lg={4}>
                                        <Form.Check className="card-radio" name="debitCart" id="debitCart02" checked={selectedCard === 'debitCart02'} onChange={handleCardChange}>
                                            <Form.Check.Label className="bg-secondary p-4" htmlFor="debitCart02">
                                                <i className="bi bi-coin position-absolute top-0 end-0 display-1 text-white" style={{ opacity: 0.06 }}></i>
                                                <span className="d-flex align-items-center mb-4 pb-4">
                                                    <img src={visaImg} alt="" height="20" />
                                                    <i className="ph-wifi-high ms-auto fs-4 text-white-75" />
                                                </span>
                                                <span className="fs-3xl text-white fw-medium mb-2 d-block">9873 6548 9871 0123</span>
                                                <span className="d-flex align-items-center">
                                                    <span className="fs-xs text-white-75 d-block">Bethany Nienow</span>
                                                    <span className="fs-xxs text-white-75 d-block ms-auto">Valid <b>28</b></span>
                                                </span>
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Modal show={card} onHide={handleAddShow}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-5" id="addCardLabel">Add Card</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <div className="card-wrapper mb-3">
                    </div>
                    <div className="form-container active">
                        <Form id="card-form-elem" autoComplete="off" onSubmit={(event: any) => event.preventDefault()}>
                            <div className="mb-3 mt-4">
                                <Form.Label htmlFor="card-number-input">Card Number</Form.Label>
                                <Form.Control className="jp-card-invalid unknown" placeholder="Card number" type="tel" id="card-number-input" />
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="card-name-input">Card Holder</Form.Label>
                                <Form.Control className="jp-card-invalid" placeholder="Full name" type="text" id="card-name-input" />
                            </div>
                            <Row>
                                <Col sm={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="card-expiry-input">Expiry</Form.Label>
                                        <Form.Control className="jp-card-invalid" placeholder="MM/YY" type="tel" id="card-expiry-input" />
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="card-cvc-input">CVC</Form.Label>
                                        <Form.Control className="jp-card-invalid" placeholder="CVC" type="number" id="card-cvc-input" />
                                    </div>
                                </Col>
                            </Row>
                            <Button variant="secondary" className="w-100" type="submit" onClick={handleAddShow}>Add Card</Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default PersonalInfo;