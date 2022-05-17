import { Spin } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function AutoLogin() {
  let navigate = useNavigate();
  useEffect(() => {
    let userData = localStorage.getItem("user");
    console.log(userData);
    if (userData === null) {
      navigate("/login", { replace: true });
    }
    else{
        toast('Already Logged In');
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
