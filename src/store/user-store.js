import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user-reducer";
import dashboardReducer from "../reducers/dashboard_view_reducers";
import dashboard_selected_reducer from "../reducers/dashboard_selected_reducer";
export const store = configureStore({
    reducer:{
        user_reducer : userReducer,
        dashboard_reducer:dashboardReducer,
        dashboard_view_reducer:dashboard_selected_reducer
    }
})