import BreadCrumb from "Common/BreadCrumb";
import React from "react";
import { Container } from "react-bootstrap";
import FilterIndex from "./FilterIndex";

const ProductGrid = () => {
    document.title = "Products Grid | Steex - Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <BreadCrumb title="Products Grid" pageTitle="Ecommerce" />
                    <FilterIndex />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ProductGrid;