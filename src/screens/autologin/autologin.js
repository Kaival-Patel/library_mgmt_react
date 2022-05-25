import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_LOGIN } from "../../reducers/user-reducer";
function AutoLogin() {
  const state = useSelector((state) => state.user_reducer);
  let navigate = useNavigate();
  useEffect(() => {
    console.log(state);
    if (!state.authenticated) {
      
      console.log('Not Authenticated');
      navigate("/login", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
      console.log("Already Logged In");
    }
    // setInterval(() => {
    //     navigate("/login",{replace:true});
    // }, 100);
  }, []);

  return (
    <div className="scaffold">
      <Spin />
    </div>
  );
}

export default AutoLogin;
