import { createSlice } from "@reduxjs/toolkit";
import { getMailDetails, deleteMail } from './thunk';

export const initialState = {
  mailDetails: [],
  error: {},
  isLoader : false
};

const MailBoxSlice = createSlice({
  name: 'MailBoxSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMailDetails.fulfilled, (state:any, action:any) => {
      state.mailDetails = action.payload;
      state.isLoader = false;
    });
    builder.addCase(getMailDetails.rejected, (state:any, action:any) => {
      state.error = action.payload.error || null;
      state.isLoader = true;
    });
    builder.addCase(deleteMail.fulfilled, (state:any, action:any) => {
      state.mailDetails = state.mailDetails.filter(
        (mail:any) => mail.forId.toString() !== action.payload.toString()
      );
      state.isMailDetailsDeleted = false;
    });
    builder.addCase(deleteMail.rejected, (state:any, action:any) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });
  }
});

export default MailBoxSlice.reducer;