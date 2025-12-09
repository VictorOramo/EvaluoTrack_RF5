import React from "react";
import { Container, Row } from "react-bootstrap";
import BreadCrumb from "Common/BreadCrumb";
import PersonalInfo from "./PersonalInfo";
import OrderSummaryCheckout from "./OrderSummary";
import { ToastContainer } from "react-toastify";

const Checkout = () => {
    document.title = "Checkout | Steex - Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <BreadCrumb title="Checkout" pageTitle="Ecommerce" />
                    <Row>
                        <PersonalInfo />
                        <OrderSummaryCheckout />
                    </Row>
                </Container>
            </div>
            <ToastContainer />
        </React.Fragment>
    );
}

export default Checkout;