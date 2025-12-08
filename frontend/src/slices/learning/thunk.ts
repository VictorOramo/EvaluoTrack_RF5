import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getCourseList as getCourseListApi,
    addCourseList as addCourseListApi,
    updateCourseList as updateCourseListApi,
    deleteCourseList as deleteCourseListApi,
    getSubscriptionList as getSubscriptionListApi,
    getCategoryList as getCategoryListApi,
    addCategoryList as addCategoryListApi,
    getCourseGridList as getCourseGridListApi,
    addCourseGridList as addCourseGridListApi,
    updateCourseGridList as updateCourseGridListApi,
    deleteCourseGridList as deleteCourseGridListApi,
    getInstructorGridList as getInstructorGridListApi,
    addInstructorGridList as addInstructorGridListApi,
    updateInstructorGridList as updateInstructorGridListApi,
    deleteInstructorGridList as onDeleteInstructorGridList,
    getInstructorList as getInstructorListApi,
    addInstructorList as addInstructorListApi,
    updateInstructorList as updateInstructorListApi,
    deleteInstructorList as deleteInstructorListApi,
    getInstructorCourseList as getInstructorCourseListApi,
    deleteInstructorCourseList as deleteInstructorCourseListApi,
    getInstructorStudentList as getInstructorStudentListApi,
    deleteInstructorStudentList as deleteInstructorStudentListApi
} from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

////course list
export const getCourseList = createAsyncThunk("course/getCourseList", async () => {
    try {
        const response = getCourseListApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addCourseList = createAsyncThunk("ecommerce/addCourseList", async (list: any) => {
    try {
        const response = addCourseListApi(list);
        const data = await response;
        toast.success("Course Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Course Added Failed", { autoClose: 2000 });
        return error;
    }
});

export const updateCourseList = createAsyncThunk("ecommerce/updateCourseList", async (list: any) => {
    try {
        const response = updateCourseListApi(list);
        const data = await response;
        toast.success("Course updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Course updated Failed", { autoClose: 2000 });
        return error;
    }
});

export const deleteCourseList = createAsyncThunk("ecommerence/deleteProductList", async (list: any) => {
    try {
        const response = deleteCourseListApi(list);
        toast.success("Course deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Course deleted Failed", { autoClose: 2000 });
        return error;
    }
})

////course grid
export const getCourseGridList = createAsyncThunk("course/getCourseGridList", async () => {
    try {
        const response = getCourseGridListApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addCourseGridList = createAsyncThunk("ecommerce/addCourseGridList", async (grid: any) => {
    try {
        const response = addCourseGridListApi(grid);
        const data = await response;
        toast.success("Course Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Course Added Failed", { autoClose: 2000 });
        return error;
    }
});

export const updateCourseGridList = createAsyncThunk("ecommerce/updateCourseGridList", async (grid: any) => {
    try {
        const response = updateCourseGridListApi(grid);
        const data = await response;
        toast.success("Course updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Course updated Failed", { autoClose: 2000 });
        return error;
    }
});

export const deleteCourseGridList = createAsyncThunk("ecommerence/deleteProductGridList", async (coursegridId: any) => {
    try {
        const response = deleteCourseGridListApi(coursegridId);
        toast.success("Course deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Course deleted Failed", { autoClose: 2000 });
        return error;
    }
})
//instuctor Grid
export const getInstructorGridList = createAsyncThunk("course/getInstructorGridList", async () => {
    try {
        const response = getInstructorGridListApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addInstructorGridList = createAsyncThunk("ecommerce/addInstructorGridList", async (grid: any) => {
    try {
        const response = addInstructorGridListApi(grid);
        const data = await response;
        toast.success("Instructor Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Instructor Added Failed", { autoClose: 2000 });
        return error;
    }
});


export const updateInstructorGridList = createAsyncThunk("ecommerce/updateInstructorGridList", async (grid: any) => {
    try {
        const response = updateInstructorGridListApi(grid);
        const data = await response;
        toast.success("Instructor updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Instructor updated Failed", { autoClose: 2000 });
        return error;
    }
});

export const deleteInstructorGridList = createAsyncThunk("ecommerence/deleteInstructorGridList", async (instructorgridId: any) => {
    try {
        const response = onDeleteInstructorGridList(instructorgridId);
        toast.success("Instructor deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Instructor deleted Failed", { autoClose: 2000 });
        return error;
    }
})


export const getSubscriptionList = createAsyncThunk("student/getSubscriptionList", async () => {
    try {
        const response = getSubscriptionListApi();

        return response;
    } catch (error) {
        return error;
    }
});

export const getInstructorList = createAsyncThunk("instructor/getInstructorList", async () => {
    try {
        const response = getInstructorListApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addInstructorList = createAsyncThunk("course/addInstructorList", async (instructorlist: any) => {
    try {
        const response = addInstructorListApi(instructorlist);
        const data = await response;
        toast.success("Instructor Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Instructor Added Failed", { autoClose: 2000 });
        return error;
    }
});

export const updateInstructorList = createAsyncThunk("ecommerce/updateInstructorList", async (instructorlist: any) => {
    try {
        const response = updateInstructorListApi(instructorlist);
        const data = await response;
        toast.success("Instructor updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Instructor updated Failed", { autoClose: 2000 });
        return error;
    }
});

export const deleteInstructorList = createAsyncThunk("instructor/deleteInstructorList", async (instructorlist: any) => {
    try {
        const response = deleteInstructorListApi(instructorlist);
        toast.success("Instructor deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Instructor deleted Failed", { autoClose: 2000 });
        return error;
    }
})

//category list
export const getCategoryList = createAsyncThunk("course/getCategoryList", async () => {
    try {
        const response = getCategoryListApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addCategoryList = createAsyncThunk("course/addCategoryList ", async (category: any) => {
    try {
        const response = addCategoryListApi(category);
        toast.success("Category Added Successfully", { autoClose: 2000 });
        const data = await response;
        return data;
    } catch (error) {
        toast.error("Category Added Failed", { autoClose: 2000 });
        return error;
    }
});

export const getInstructorCourseList = createAsyncThunk("instructor/getInstructorCourseList", async () => {
    try {
        const response = getInstructorCourseListApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const deleteInstructorCourseList = createAsyncThunk("instructor/deleteInstructorCourseList", async (instructorcourselist: any) => {
    try {
        const response = deleteInstructorCourseListApi(instructorcourselist);
        toast.success("Instructor deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Instructor deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getInstructorStudentList = createAsyncThunk("instructor/getInstructorStudentList", async () => {
    try {
        const response = getInstructorStudentListApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const deleteInstructorStudentList = createAsyncThunk("instructor/deleteInstructorStudentList", async (instructorstudentlist: any) => {
    try {
        const response = deleteInstructorStudentListApi(instructorstudentlist);
        toast.success("Instructor deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Instructor deleted Failed", { autoClose: 2000 });
        return error;
    }
});
