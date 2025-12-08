import { createSlice } from "@reduxjs/toolkit";

import { getInvoiceList, addInvoiceList, updateInvoiceList, deleteInvoiceList } from "./thunk"

export const initialState = {
    invoiceList: [],
    errors: {}
};

const Invoiceslice = createSlice({
    name: 'Invoice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getInvoiceList.fulfilled, (state: any, action: any) => {
            state.invoiceList = action.payload;
        });
        builder.addCase(getInvoiceList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addInvoiceList.fulfilled, (state: any, action: any) => {
            state.invoiceList.push(action.payload);
        });
        builder.addCase(addInvoiceList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateInvoiceList.fulfilled, (state: any, action: any) => {
            state.invoiceList = state.invoiceList.map((invoice: any) =>
                invoice.id === action.payload.id
                    ? { ...invoice, ...action.payload }
                    : invoice
            )
        });
        builder.addCase(updateInvoiceList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteInvoiceList.fulfilled, (state: any, action: any) => {
            state.invoiceList = state.invoiceList.filter(
                (invoicelist: any) => invoicelist.id !== action.payload
            );
        });
        builder.addCase(deleteInvoiceList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

    }
});

export default Invoiceslice.reducer;