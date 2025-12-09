import { createSlice } from "@reduxjs/toolkit";
import {
    getCourseList,
    addCourseGridList,
    getSubscriptionList,
    getCategoryList,
    addCategoryList,
    getCourseGridList,
    deleteCourseGridList,
    getInstructorGridList,
    addInstructorGridList,
    updateInstructorGridList,
    deleteInstructorGridList,
    updateCourseGridList,
    addCourseList,
    updateCourseList,
    deleteCourseList,
    getInstructorList,
    addInstructorList,
    updateInstructorList,
    deleteInstructorList,
    getInstructorCourseList,
    deleteInstructorCourseList,
    getInstructorStudentList,
    deleteInstructorStudentList
} from './thunk';

export const initialState = {
    courseList: [],
    subscriptionList: [],
    categoryList: [],
    coursegridList: [],
    instructorgridList: [],
    instructorList: [],
    instructorcourseList: [],
    instructorstudentList: [],
    errors: {}
};

const Learningslice = createSlice({
    name: 'Learning',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCourseList.fulfilled, (state: any, action: any) => {
            state.courseList = action.payload;
        });
        builder.addCase(getCourseList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addCourseList.fulfilled, (state: any, action: any) => {
            state.courseList.push(action.payload);
        });
        builder.addCase(addCourseList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateCourseList.fulfilled, (state: any, action: any) => {
            state.courseList = state.courseList.map((list: any) =>
                list.id === action.payload.id
                    ? { ...list, ...action.payload }
                    : list
            )
        });
        builder.addCase(updateCourseList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteCourseList.fulfilled, (state: any, action: any) => {
            state.courseList = state.courseList.filter(
                (courseList: any) => courseList.id !== action.payload
            );
        });
        builder.addCase(deleteCourseList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(getSubscriptionList.fulfilled, (state: any, action: any) => {
            state.subscriptionList = action.payload;
        });
        builder.addCase(getSubscriptionList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(getCategoryList.fulfilled, (state: any, action: any) => {
            state.categoryList = action.payload;
        });
        builder.addCase(getCategoryList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addCategoryList.fulfilled, (state: any, action: any) => {
            state.categoryList.unshift(action.payload);
        });
        builder.addCase(addCategoryList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        // course grid
        builder.addCase(getCourseGridList.fulfilled, (state: any, action: any) => {
            state.coursegridList = action.payload;
        });
        builder.addCase(getCourseGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addCourseGridList.fulfilled, (state: any, action: any) => {
            state.coursegridList.unshift(action.payload);
        });
        builder.addCase(addCourseGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateCourseGridList.fulfilled, (state: any, action: any) => {
            state.coursegridList = state.coursegridList.map((grid: any) =>
                grid.id === action.payload.id
                    ? { ...grid, ...action.payload }
                    : grid
            )
        });
        builder.addCase(updateCourseGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteCourseGridList.fulfilled, (state: any, action: any) => {
            state.coursegridList = state.coursegridList.filter(
                (courseGrid: any) => courseGrid.id !== action.payload
            );
        });
        builder.addCase(deleteCourseGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(getInstructorGridList.fulfilled, (state: any, action: any) => {
            state.instructorgridList = action.payload;
        });
        builder.addCase(getInstructorGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addInstructorGridList.fulfilled, (state: any, action: any) => {
            state.instructorgridList.unshift(action.payload);
        });
        builder.addCase(addInstructorGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateInstructorGridList.fulfilled, (state: any, action: any) => {
            state.instructorgridList = state.instructorgridList.map((grid: any) =>
                grid.id === action.payload.id
                    ? { ...grid, ...action.payload }
                    : grid
            )
        });
        builder.addCase(updateInstructorGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteInstructorGridList.fulfilled, (state: any, action: any) => {
            state.instructorgridList = state.instructorgridList.filter(
                (instructorGrid: any) => instructorGrid.id !== action.payload
            );
        });
        builder.addCase(deleteInstructorGridList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getInstructorList.fulfilled, (state: any, action: any) => {
            state.instructorList = action.payload;
        });
        builder.addCase(getInstructorList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addInstructorList.fulfilled, (state: any, action: any) => {
            state.instructorList.push(action.payload);
        });
        builder.addCase(addInstructorList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(updateInstructorList.fulfilled, (state: any, action: any) => {
            state.instructorList = state.instructorList.map((list: any) =>
                list.id === action.payload.id
                    ? { ...list, ...action.payload }
                    : list
            )
        });
        builder.addCase(updateInstructorList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteInstructorList.fulfilled, (state: any, action: any) => {
            state.instructorList = state.instructorList.filter(
                (instructorlist: any) => instructorlist.id !== action.payload
            );
        });
        builder.addCase(deleteInstructorList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getInstructorCourseList.fulfilled, (state: any, action: any) => {
            state.instructorcourseList = action.payload;
        });
        builder.addCase(getInstructorCourseList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteInstructorCourseList.fulfilled, (state: any, action: any) => {
            state.instructorcourseList = state.instructorcourseList.filter(
                (instructorcourseList: any) => instructorcourseList.id !== action.payload
            );
        });
        builder.addCase(deleteInstructorCourseList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getInstructorStudentList.fulfilled, (state: any, action: any) => {
            state.instructorstudentList = action.payload;
        });
        builder.addCase(getInstructorStudentList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(deleteInstructorStudentList.fulfilled, (state: any, action: any) => {
            state.instructorstudentList = state.instructorstudentList.filter(
                (instructorstudentList: any) => instructorstudentList.id !== action.payload
            );
        });
        builder.addCase(deleteInstructorStudentList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default Learningslice.reducer;