import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getInvoiceList as getInvoiceListApi,
    addInvoiceList as addInvoiceListApi,
    updateInvoiceList as updateInvoiceListApi,
    deleteInvoiceList as deleteInvoiceListApi
} from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";

export const getInvoiceList = createAsyncThunk("invoices/getInvoiceList", async () => {
    try {
        const response = getInvoiceListApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addInvoiceList = createAsyncThunk("ecommerce/addInvoiceList", async (invoicelist: any) => {
    try {
        const response = addInvoiceListApi(invoicelist);
        const data = await response;
        toast.success("Category Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Category Added Failed", { autoClose: 2000 });
        return error;
    }
});

export const updateInvoiceList = createAsyncThunk("ecommerce/updateInvoiceList", async (invoicelist: any) => {
    try {
        const response = updateInvoiceListApi(invoicelist);
        const data = await response;
        toast.success("Category Updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Category Updated Failed", { autoClose: 2000 });
        return error;
    }
});

export const deleteInvoiceList = createAsyncThunk("invoices/deleteInvoiceList", async (invoicelist: any) => {
    try {
        const response = deleteInvoiceListApi(invoicelist);
        toast.success("Category Deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Category Deleted Failed", { autoClose: 2000 });
        return error;
    }
})
