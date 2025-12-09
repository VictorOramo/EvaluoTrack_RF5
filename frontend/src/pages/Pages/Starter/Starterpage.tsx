import BreadCrumb from 'Common/BreadCrumb';
import React from 'react'
import { Container } from 'react-bootstrap';

const Starterpages = () => {

    document.title=" Starter | Steex - Admin & Dashboard Template"

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                <BreadCrumb title="Starter" pageTitle="Pages" />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Starterpages;