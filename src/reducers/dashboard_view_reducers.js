import { createSlice } from "@reduxjs/toolkit";

const initialState = 'books';
export const DashboardViewReducer = createSlice({
    initialState,
    name:'dashboard_view_reducer',
    reducers:{
        SET_VIEW: (state,payload)=>{
            state = payload.payload;
            return state;
        }
    }
});
export const { SET_VIEW} = DashboardViewReducer.actions;
export default DashboardViewReducer.reducer;