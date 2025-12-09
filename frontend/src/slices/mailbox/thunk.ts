import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
  getMailDetails as getMailDetailsApi,
  deleteMail as deleteMailApi
} from "../../helpers/fakebackend_helper";

export const getMailDetails:any = createAsyncThunk("mailbox/getMailDetails", async () => {
  try {
    const response = getMailDetailsApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const deleteMail:any = createAsyncThunk("mailbox/deleteMail", async (mail:any) => {
  try {
    const response = deleteMailApi(mail);
    toast.success("Mail Deleted Successfully", { autoClose: 2000 });
    return response;
  } catch (error) {
    toast.error("Mail Deleted Failed", { autoClose: 2000 });
    return error;
  }
});