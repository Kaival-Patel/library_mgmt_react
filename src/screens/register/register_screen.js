import React, { useState } from "react";
import { Card, Form, Input, Button, Checkbox, Radio } from "antd";
import "./register_screen.css";
import { APIBASEURL, validateApiResponse } from "../../constants";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import bookBg from "../../books_login.png";
import { signUpWithEmailPassword } from "../../services/auth_service";
import { USER_LOGIN } from "../../reducers/user-reducer";
import { useNavigate } from "react-router-dom";
function RegisterScreen() {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = async (vals) => {
    if (!loading) {
      try {
        setloading(true);
        var res = await signUpWithEmailPassword({
          email: vals.email,
          password: vals.password,
          name: vals.name,
          type: vals.role === "user" ? 1 : 2,
        });
        if (res !== null) {
          if (!validateApiResponse(res)) {
            toast(res.m);
          } else {
            //LOGGED IN
            console.log(res.r);
            dispatch(USER_LOGIN(res.r));
            navigate("/dashboard", { replace: true });
            toast(res.m);
          }
        }
        console.log(res.m);
        setloading(false);
      } catch (err) {
        toast("Error while logging in", { type: "error" });
        setloading(false);
        return;
      }
    }
  };
  return (
    <div>
      <div className="scaffold">
        <Card style={{ margin: 10 }}>
          <h2>Library Management System</h2>
          <div className="subtitle">Register with Email and Password</div>
          <div className="form">
            <Form
              name="basic"
              layout="vertical"
              onFinish={handleRegister}
              onFinishFailed={() => {}}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please Provide Name" }]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please Provide Email" }]}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please Provide Password",
                    max: 6,
                  },
                ]}
              >
                <Input type="password" />
              </Form.Item>
              <Form.Item initialValue={"user"} label="I am" name="role">
                <Radio.Group>
                  <Radio.Button value="librarian">Librarian</Radio.Button>
                  <Radio.Button value="user">User</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                }}
              >
                <Button type="primary" htmlType="submit" loading={loading}>
                  Register
                </Button>
              </Form.Item>
              <div className="linkBtnContainer">
                Already have an account?
                <Button
                  className="linkBtn"
                  type="link"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  {"Login"}
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </div>
      <div className="bookBg">
        <img src={<bookBg />} />
      </div>
    </div>
  );
}

export default RegisterScreen;
