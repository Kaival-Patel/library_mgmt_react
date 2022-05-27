import { createSlice } from "@reduxjs/toolkit";

const initialTabViewState = 'books';

export const DashboardViewReducer = createSlice({
    initialState: initialTabViewState,
    name:'dashboard_view_reducer',
    reducers:{
        SET_TAB_VIEW: (state,payload)=>{
            state = payload.payload;
            return state;
        },
    }
});


export const { SET_TAB_VIEW: SET_VIEW} = DashboardViewReducer.actions;
export default DashboardViewReducer.reducer;