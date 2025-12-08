import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getSupportTicketList as getSupportTicketListApi,
    addSupportTicketList as addSupportTicketListApi,
    updateSupportTicketList as updateSupportTicketListApi,
    deleteSupportTicketList as deleteSupportTicketListApi
} from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";

export const getSupportTicketList = createAsyncThunk("ecommerce/getSupportTicketList", async () => {
    try {
        const response = getSupportTicketListApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addSupportTicketList = createAsyncThunk("supporttickets/addSupportTicketList", async (supportticketlist: any) => {
    try {
        const response = addSupportTicketListApi(supportticketlist);
        const data = await response;
        toast.success("Category Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Category Added Failed", { autoClose: 2000 });
        return error;
    }
});

export const updateSupportTicketList = createAsyncThunk("realestate/updateSupportTicketList", async (supportticketlist: any) => {
    try {
        const response = updateSupportTicketListApi(supportticketlist);
        const data = await response;
        toast.success("Category Updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Category Updated Failed", { autoClose: 2000 });
        return error;
    }
});


export const deleteSupportTicketList = createAsyncThunk("supporttickets/deleteSupportTicketList", async (supportticketlist: any) => {
    try {
        const response = deleteSupportTicketListApi(supportticketlist);
        toast.success("Category Deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Category Deleted Failed", { autoClose: 2000 });
        return error;
    }
})