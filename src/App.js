import logo from "./logo.svg";
import "./App.css";
import {
  Router,
  BrowserRouter,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import LoginScreen from "./screens/login/login_screen";
import AutoLogin from "./screens/autologin/autologin";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/" element={<AutoLogin />}></Route>
    </Routes>
  );
}

export default App;
