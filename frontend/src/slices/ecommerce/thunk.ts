import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  getProducts as getProductListApi,
  addNewProduct as addNewProductApi,
  updateProduct as updateProductApi,
  deleteProducts as deleteProductsApi,
  getProductDetails as getProductDetailsApi,
  addNewProductRiview as addNewProductRiviewApi,
  updateProductRiview as updateProductRiviewApi,
  deleteProductsRiview as deleteProductsRiviewApi,
  getOrder as getOrderApi,
  addNeworder as addNeworderApi,
  updateOrder as updateOrderApi,
  deleteOrder as deleteOrderApi,
  getCustomer as getCustomerApi,
  addNewCustomer as addNewCustomerApi,
  updateCustomer as updateCustomerApi,
  deleteCustomer as deleteCustomerApi,
  getCheckout as getCheckoutApi,
  addNewCheckout as addNewCheckoutApi,
  updateCheckout as updateCheckoutApi,
  deleteCheckout as deleteCheckoutApi,
  getSellers as getSellersApi,
  addNewSellers as addNewSellersApi,
  updateSellers as updateSellersApi,
  deleteSellers as deleteSellersApi,
  getProductsGrid as getProductsGridApi,
  deleteProductsGrid as deleteProductsGridApi,
} from "../../helpers/fakebackend_helper";


//product
export const getProducts = createAsyncThunk("ecommerce/getProducts", async () => {
  try {
    const response = getProductListApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addNewProduct = createAsyncThunk("ecommerce/addNewProduct", async (product: any) => {
  try {
    const response = addNewProductApi(product);
    const data = await response;
    toast.success("Product Added Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Product Added Failed", { autoClose: 2000 });
    return error;
  }
});

export const updateProduct = createAsyncThunk("ecommerce/updateProduct", async (product: any) => {
  try {
    const response = updateProductApi(product);
    const data = await response;
    toast.success("Product Updated Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Product Updated Failed", { autoClose: 2000 });
    return error;
  }
});

export const deleteProducts = createAsyncThunk("ecommerce/deleteProducts", async (product: any) => {
  try {
    const response = deleteProductsApi(product);
    toast.success("Product Deleted Successfully", { autoClose: 2000 });
    return { product, ...response };
  } catch (error) {
    toast.error("Product Deleted Failed", { autoClose: 2000 });
    return error;
  }
});

//product grid
export const getProductsGrid = createAsyncThunk("ecommerce/getProductsGrid", async () => {
  try {
    const response = getProductsGridApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const deleteProductsGrid = createAsyncThunk("ecommerce/deleteProductsGrid", async (productGrid: any) => {
  try {
    const response = deleteProductsGridApi(productGrid);
    toast.success("Product Deleted Successfully", { autoClose: 2000 });
    return { productGrid, ...response };
  } catch (error) {
    toast.error("Product Deleted Failed", { autoClose: 2000 });
    return error;
  }
});

//product details
export const getProductsDetails = createAsyncThunk("ecommerce/getProductsDetails", async () => {
  try {
    const response = getProductDetailsApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addNewProductRiview = createAsyncThunk("ecommerce/addNewProductRiview", async (productRiview: any) => {
  try {
    const response = addNewProductRiviewApi(productRiview);
    const data = await response;
    toast.success("Product Riview Added Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Product Riview Added Failed", { autoClose: 2000 });
    return error;
  }
});

export const updateProductRiview = createAsyncThunk("ecommerce/updateProductRiview", async (productRiview: any) => {
  try {
    const response = updateProductRiviewApi(productRiview);
    const data = await response;
    toast.success("Product Riview Updated Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Product Riview Updated Failed", { autoClose: 2000 });
    return error;
  }
});

export const deleteProductsRiview = createAsyncThunk("ecommerce/deleteProductsRiview", async (riview: any) => {
  try {
    const response = deleteProductsRiviewApi(riview);
    toast.success("Product Riview Deleted Successfully", { autoClose: 2000 });
    return { riview, ...response };
  } catch (error) {
    toast.error("Product Riview Deleted Failed", { autoClose: 2000 });
    return error;
  }
});

//order
export const getOrder = createAsyncThunk("ecommerce/getOrder", async () => {
  try {
    const response = getOrderApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addNewOrder = createAsyncThunk("ecommerce/addNewOrder", async (order: any) => {
  try {
    const response = addNeworderApi(order);
    const data = await response;
    toast.success("Added Order Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Added Order Failed", { autoClose: 2000 });
    return error;
  }
});

export const updateOrder = createAsyncThunk("ecommerce/updateOrder", async (order: any) => {
  try {
    const response = updateOrderApi(order);
    const data = await response;
    toast.success("Updated Order Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Updated Order Failed", { autoClose: 2000 });
    return error;
  }
});


export const deleteOrder = createAsyncThunk("ecommerce/deleteOrder", async (order: any) => {
  try {
    const response = deleteOrderApi(order);
    toast.success("Delete Order Successfully", { autoClose: 2000 });
    return { order, ...response };
  } catch (error) {
    toast.error("Delete Order Failed", { autoClose: 2000 });
    return error;
  }
});


//customers
export const getCustomer = createAsyncThunk("ecommerce/getCustomer", async () => {
  try {
    const response = getCustomerApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addNewCustomer = createAsyncThunk("ecommerce/addNewCustomer", async (customer: any) => {
  try {
    const response = addNewCustomerApi(customer);
    const data = await response;
    toast.success("Coustomer Added Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Coustomer Added Failed", { autoClose: 2000 });
    return error;
  }
});

export const updateCustomer = createAsyncThunk("ecommerce/updateCustomer", async (customer: any) => {
  try {
    const response = updateCustomerApi(customer);
    const data = await response;
    toast.success("Coustomer Updated Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Coustomer Updated Failed", { autoClose: 2000 });
    return error;
  }
});

export const deleteCustomer = createAsyncThunk("ecommerce/deleteCustomer", async (customer: any) => {
  try {
    const response = deleteCustomerApi(customer);
    toast.success("Coustomer Deleted Successfully", { autoClose: 2000 });
    return { customer, ...response };
  } catch (error) {
    toast.error("Coustomer Deleted Failed", { autoClose: 2000 });
    return error;
  }
});

//checkout
export const getCheckout = createAsyncThunk("ecommerce/getCheckout", async () => {
  try {
    const response = getCheckoutApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addNewCheckout = createAsyncThunk("ecommerce/addNewCheckout", async (checkout: any) => {
  try {
    const response = addNewCheckoutApi(checkout);
    const data = await response;
    toast.success("Added Chechout Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error(" Added Chechout Failed", { autoClose: 2000 });
    return error;
  }
});

export const updateCheckout = createAsyncThunk("ecommerce/updateCheckout", async (checkout: any) => {
  try {
    const response = updateCheckoutApi(checkout);
    const data = await response;
    toast.success("Updated Chechout Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Updated Chechout Failed", { autoClose: 2000 });
    return error;
  }
});

export const deleteCheckout = createAsyncThunk("ecommerce/deleteCheckout", async (checkout: any) => {
  try {
    const response = deleteCheckoutApi(checkout);
    toast.success("Delete Chechout Successfully", { autoClose: 2000 });
    return { checkout, ...response };
  } catch (error) {
    toast.error("Delete Chechout Failed", { autoClose: 2000 });
    return error;
  }
});


//sellers
export const getSellers = createAsyncThunk("ecommerce/getSellers", async () => {
  try {
    const response = getSellersApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addNewSellers = createAsyncThunk("ecommerce/addNewSellers", async (sellers: any) => {
  try {
    const response = addNewSellersApi(sellers);
    const data = await response;
    toast.success("Sellerss Added Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Sellerss Added Failed", { autoClose: 2000 });
    return error;
  }
});

export const updateSellers = createAsyncThunk("ecommerce/updateSellers", async (sellers: any) => {
  try {
    const response = updateSellersApi(sellers);
    const data = await response;
    toast.success("Sellerss Updated Successfully", { autoClose: 2000 });
    return data;
  } catch (error) {
    toast.error("Sellerss Updated Failed", { autoClose: 2000 });
    return error;
  }
});

export const deleteSellers = createAsyncThunk("ecommerce/deleteSellers", async (sellers: any) => {
  try {
    const response = deleteSellersApi(sellers);
    toast.success("Sellerss Deleted Successfully", { autoClose: 2000 });
    return { sellers, ...response };
  } catch (error) {
    toast.error("Sellerss Deleted Failed", { autoClose: 2000 });
    return error;
  }
});