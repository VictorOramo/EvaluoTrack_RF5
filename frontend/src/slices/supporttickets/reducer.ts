import { createSlice } from "@reduxjs/toolkit";

import { getSupportTicketList, addSupportTicketList, updateSupportTicketList, deleteSupportTicketList } from "./thunk";

export const initialState = {
    supportticketList: [],
    errors: {}
};

const SupportTicketslice = createSlice({
    name: 'SupportTickets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getSupportTicketList.fulfilled, (state: any, action: any) => {
            state.supportticketList = action.payload;
        });
        builder.addCase(getSupportTicketList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(addSupportTicketList.fulfilled, (state: any, action: any) => {
            state.supportticketList.push(action.payload);
        });
        builder.addCase(addSupportTicketList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateSupportTicketList.fulfilled, (state: any, action: any) => {
            state.supportticketList = state.supportticketList.map((supportticketlist: any) =>
                supportticketlist.id === action.payload.id
                    ? { ...supportticketlist, ...action.payload }
                    : supportticketlist
            )
        });
        builder.addCase(updateSupportTicketList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteSupportTicketList.fulfilled, (state: any, action: any) => {
            state.supportticketList = state.supportticketList.filter(
                (supportticketlist: any) => supportticketlist.id !== action.payload
            );
        });
        builder.addCase(deleteSupportTicketList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default SupportTicketslice.reducer;