import { createSlice } from "@reduxjs/toolkit";
import { getDirectContact, getChannels, getMessages, addMessage, deleteMessage } from './thunk';

export const initialState = {
  chats: [],
  messages: {},
  channels: [],
  error: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDirectContact.fulfilled, (state:any, action:any) => {
      state.chats = action.payload;
    });
    builder.addCase(getDirectContact.rejected, (state:any, action:any) => {
      state.error = action.error.message;
    });

    builder.addCase(getChannels.fulfilled, (state:any, action:any) => {
      state.channels = action.payload;
    });
    builder.addCase(getChannels.rejected, (state:any, action:any) => {
      state.error = action.error.message
    });

    builder.addCase(getMessages.fulfilled, (state:any, action:any) => {
      state.messages = action.payload;
    });
    builder.addCase(getMessages.rejected, (state:any, action:any) => {
      state.error = action.error.message
    });

    builder.addCase(addMessage.fulfilled, (state:any, action:any) => {
      state.messages.push(action.payload);
    });
    builder.addCase(addMessage.rejected, (state:any, action:any) => {
      state.error = action.error.message
    });

    builder.addCase(deleteMessage.fulfilled, (state:any, action:any) => {
      state.messages = (state.messages || []).filter((message:any) => message.id.toString() !== action.payload.toString());
    });
    builder.addCase(deleteMessage.rejected, (state:any, action:any) => {
      state.error = action.error.message
    });

  },
});

export default chatSlice.reducer;