import logo from "./logo.svg";
import "./App.css";
import { Route, Redirect, Routes, Navigate } from "react-router-dom";
import LoginScreen from "./screens/login/login_screen";
import AutoLogin from "./screens/autologin/autologin";
import RegisterScreen from "./screens/register/register_screen";
import { useSelector } from "react-redux";
import Dashboard from "./screens/dashboard/dashboard_screen";

function App() {
  const state = useSelector((state) => state.user_reducer);
  console.warn(state);
  const redirectToDashboard = <Navigate to="/dashboard" />;
  return (
    <Routes>
      <Route
        path="/login"
        element={state.authenticated ? redirectToDashboard : <LoginScreen />}
      ></Route>
      <Route
        path="/"
        element={state.authenticated ? redirectToDashboard : <AutoLogin />}
      ></Route>
      <Route
        path="/register"
        element={state.authenticated ? redirectToDashboard : <RegisterScreen />}
      ></Route>
      <Route
        path="/dashboard"
        element={state.authenticated ?<Dashboard/>:<AutoLogin/>}
      ></Route>
    </Routes>
  );
}

export default App;
