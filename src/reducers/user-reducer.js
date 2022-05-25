import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";
const loggedInUser = localStorage.getItem("user");
const currentUser =
  loggedInUser === null
    ? { authenticated: false }
    : { authenticated: true, user: JSON.parse(loggedInUser) };

export const userReducer = createSlice({
  initialState: currentUser,
  name: "user_reducer",
  reducers: {
    USER_LOGIN: (state, payload) => {
      console.log(payload);
      localStorage.setItem("user", JSON.stringify(payload.payload));
      state = { user: payload.payload, authenticated: true };
      console.log("UPDATED STATE ==>" + JSON.stringify(payload.payload));
      return state;
    },
    USER_LOGOUT: (state, payload) => {
      console.log("LOGOUT REDUCER");
      state = {user:{},authenticated: false };
      localStorage.removeItem("user");
      console.log("UPDATED STATE=>" + JSON.stringify(state));
      return state;
    },
  },
});

export const { USER_LOGIN, USER_LOGOUT } = userReducer.actions;
export default userReducer.reducer;
