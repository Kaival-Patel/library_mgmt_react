import { createSlice } from "@reduxjs/toolkit";
const initialSelectedViewState = null;
export const DashboardSelectedViewReducer = createSlice({
    initialState: initialSelectedViewState,
    name:'dashboard_selected_reducer',
    reducers:{
        SET_SELECTED_VIEW: (state,payload)=>{
            state = payload.payload;
            return state;
        },
    }
});

export const { SET_SELECTED_VIEW} = DashboardSelectedViewReducer.actions;
export default DashboardSelectedViewReducer.reducer;