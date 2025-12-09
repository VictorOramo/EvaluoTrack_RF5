import React from "react";
import { Container, Row } from "react-bootstrap";
import BreadCrumb from "Common/BreadCrumb";
import AgenciesContent from "./AgenciesContent";
import AgenciesRightBar from "./AgenciesRightBar";
import { ToastContainer } from "react-toastify";

const AgenciesOverview = () => {
    document.title = "Overview | Steex - Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Overview" pageTitle="Agencies" />
                    <Row>
                        <AgenciesContent />
                        <AgenciesRightBar />
                    </Row>
                </Container>
            </div>
            <ToastContainer />
        </React.Fragment>
    );
}

export default AgenciesOverview;