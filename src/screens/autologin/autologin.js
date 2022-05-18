import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_LOGIN } from "../../reducers/user-reducer";
function AutoLogin() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    let userData = localStorage.getItem("user");
    console.log(userData);
    if (userData === null) {
      navigate("/login", { replace: true });
    } else {
      dispatch(USER_LOGIN(userData));
      navigate("/dashboard", { replace: true });
      toast("Already Logged In");
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
