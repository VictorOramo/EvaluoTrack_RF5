import { createSlice } from "@reduxjs/toolkit";

import {
    getProducts, addNewProduct, updateProduct, deleteProducts,
    getProductsGrid, deleteProductsGrid,
    getProductsDetails, addNewProductRiview, updateProductRiview, deleteProductsRiview,
    getOrder, addNewOrder, updateOrder, deleteOrder,
    getCustomer, addNewCustomer, updateCustomer, deleteCustomer,
    getCheckout, addNewCheckout, updateCheckout, deleteCheckout,
    getSellers, addNewSellers, updateSellers, deleteSellers,
} from './thunk';


export const initialState ={
    productgridList :[],
    productList: [],
    productGrid: [],
    productDetailList: [],
    orderList: [],
    customer: [],
    checkout: [],
    sellerList: [],
    errors: {}
};


const EcommerceSlice = createSlice({
    name : "Ecommerce",
    initialState,
    reducers: {},

    extraReducers:(builder)=>{        

        builder.addCase(getProducts.fulfilled, (state:any, action:any) => {
            state.productList = action.payload;
        });
        builder.addCase(getProducts.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addNewProduct.fulfilled, (state: any, action: any) => {
            state.productList.push(action.payload);
        });
        builder.addCase(addNewProduct.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateProduct.fulfilled, (state: any, action: any) => {
            state.productList = state.productList.map((product: any) =>
                product.id === action.payload.id
                    ? { ...product, ...action.payload }
                    : product
            )
        });
        builder.addCase(updateProduct.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteProducts.fulfilled, (state: any, action: any) => {
            state.productList = (state.productList || []).filter((product: any) => product.id !== action.payload.product);
        });
        builder.addCase(deleteProducts.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        //product grid
        builder.addCase(getProductsGrid.fulfilled, (state: any, action: any) => {
            state.productGrid = action.payload;
        });
        builder.addCase(getProductsGrid.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteProductsGrid.fulfilled, (state: any, action: any) => {
            state.productGrid = (state.productGrid || []).filter((product: any) => product.id !== action.payload.productGrid);
        });
        builder.addCase(deleteProductsGrid.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        //product details
        builder.addCase(getProductsDetails.fulfilled, (state: any, action: any) => {
            state.productDetailList = action.payload;
        });
        builder.addCase(getProductsDetails.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addNewProductRiview.fulfilled, (state: any, action: any) => {
            state.productDetailList.unshift(action.payload);
        });
        builder.addCase(addNewProductRiview.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateProductRiview.fulfilled, (state: any, action: any) => {
            state.productDetailList = state.productDetailList.map((product: any) =>
                product.id === action.payload.id
                    ? { ...product, ...action.payload }
                    : product
            )
        });
        builder.addCase(updateProductRiview.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteProductsRiview.fulfilled, (state: any, action: any) => {
            state.productDetailList = (state.productDetailList || []).filter((riview: any) => riview.id !== action.payload.riview);
        });
        builder.addCase(deleteProductsRiview.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        //order
        builder.addCase(getOrder.fulfilled, (state: any, action: any) => {
            state.orderList = action.payload;
        });
        builder.addCase(getOrder.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addNewOrder.fulfilled, (state: any, action: any) => {
            state.orderList.push(action.payload);
        });
        builder.addCase(addNewOrder.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateOrder.fulfilled, (state: any, action: any) => {
            state.orderList = state.orderList.map((order: any) =>
                order.id === action.payload.id
                    ? { ...order, ...action.payload }
                    : order
            )
        });
        builder.addCase(updateOrder.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteOrder.fulfilled, (state: any, action: any) => {
            state.orderList = state.orderList?.filter((order: any) => order.id !== action.payload.order);
        });
        builder.addCase(deleteOrder.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        //customer
        builder.addCase(getCustomer.fulfilled, (state: any, action: any) => {
            state.customer = action.payload;
        });
        builder.addCase(getCustomer.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addNewCustomer.fulfilled, (state: any, action: any) => {
            state.customer.unshift(action.payload);
        });
        builder.addCase(addNewCustomer.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateCustomer.fulfilled, (state: any, action: any) => {
            state.customer = state.customer.map((customer: any) =>
                customer.id === action.payload.id
                    ? { ...customer, ...action.payload }
                    : customer
            )
        });
        builder.addCase(updateCustomer.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteCustomer.fulfilled, (state: any, action: any) => {
            state.customer = (state.customer || []).filter((customer: any) => customer.id !== action.payload.customer);
        });
        builder.addCase(deleteCustomer.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        //checkout
        builder.addCase(getCheckout.fulfilled, (state: any, action: any) => {
            state.checkout = action.payload;
        });
        builder.addCase(getCheckout.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addNewCheckout.fulfilled, (state: any, action: any) => {
            state.checkout.push(action.payload);
        });
        builder.addCase(addNewCheckout.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateCheckout.fulfilled, (state: any, action: any) => {
            state.checkout = state.checkout.map((check: any) =>
                check.id === action.payload.id
                    ? { ...check, ...action.payload }
                    : check
            )
        });
        builder.addCase(updateCheckout.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteCheckout.fulfilled, (state: any, action: any) => {
            state.checkout = (state.checkout || []).filter((check: any) => check.id !== action.payload.checkout);
        });
        builder.addCase(deleteCheckout.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        //sellers
        builder.addCase(getSellers.fulfilled, (state: any, action: any) => {
            state.sellerList = action.payload;
        });
        builder.addCase(getSellers.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addNewSellers.fulfilled, (state: any, action: any) => {
            state.sellerList.unshift(action.payload);
        });
        builder.addCase(addNewSellers.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateSellers.fulfilled, (state: any, action: any) => {
            state.sellerList = state.sellerList.map((seller: any) =>
                seller.id === action.payload.id
                    ? { ...seller, ...action.payload }
                    : seller
            )
        });
        builder.addCase(updateSellers.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteSellers.fulfilled, (state: any, action: any) => {
            state.sellerList = (state.sellerList || []).filter((seller: any) => seller.id !== action.payload.sellers);
        });
        builder.addCase(deleteSellers.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
})

export default EcommerceSlice.reducer;


