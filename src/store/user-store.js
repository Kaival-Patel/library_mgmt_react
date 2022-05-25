import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user-reducer";
import dashboardReducer from "../reducers/dashboard_view_reducers";
export const store = configureStore({
    reducer:{
        user_reducer : userReducer,
        dashboard_reducer:dashboardReducer
    }
})