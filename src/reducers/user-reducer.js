import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const currentUser = { authenticated: false };

export const userReducer = createSlice({
  initialState: currentUser,
  name: "user_reducer",
  reducers: {
    USER_LOGIN: (state, payload) => {
      console.log(payload);
      state = { ...payload, authenticated: true };
      console.log("UPDATED STATE ==>" + state);
    },
    USER_LOGOUT: (state, payload) => {
      console.log("LOGOUT REDUCER");
      state = { authenticated: false };
      console.log("UPDATED STATE=>" + state);
    },
  },
});

export const { USER_LOGIN, USER_LOGOUT } = userReducer.actions;
export default userReducer.reducer;
