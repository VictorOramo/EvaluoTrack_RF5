import React, { useEffect, useState } from "react";
import FilteredProduct from "./FilrteredProduct";
import { Row } from "react-bootstrap";
import ProductCard from "./EcommerceCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductsGrid as onGetProductsGrid } from "slices/thunk";
import { ToastContainer } from "react-toastify";
import { createSelector } from "reselect";

const FilterIndex = () => {
    const dispatch = useDispatch<any>();

    const selectProductGrid = createSelector(
    (state: any) => state.Ecommerce,
        (ecommerce) => ({
            grid: ecommerce.productGrid
        })
    );
    
    const { grid } = useSelector(selectProductGrid);

    const [filterGrid, setFilterGrid] = useState<any>();

    useEffect(() => {
        dispatch(onGetProductsGrid())
    }, [dispatch])

    useEffect(() => {
        setFilterGrid(grid)
    }, [grid])
    return (
        <React.Fragment>
            <Row>
                <FilteredProduct setFilterGrid={setFilterGrid} grid={grid} />
                <ProductCard filterGrid={filterGrid} />
                <ToastContainer />
            </Row>
        </React.Fragment>
    );
}

export default FilterIndex;