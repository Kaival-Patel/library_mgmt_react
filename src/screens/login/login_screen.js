import React, { useState } from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import "./login_screen.css";
import { APIBASEURL, validateApiResponse } from "../../constants";
import { toast } from "react-toastify";
import {useDispatch} from 'react-redux';
import bookBg from "../../books_login.png";
import { signInWithEmailPassword } from "../../services/auth_service";
import { USER_LOGIN } from "../../reducers/user-reducer";
function LoginScreen({ navigate }) {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = async (vals) => {
    if (!loading) {
      try {
        setloading(true);

        var res = await signInWithEmailPassword({
          email: vals.email,
          password: vals.password,
        });
        if (res !== null) {
          if (validateApiResponse(res)) {
            toast(res.m);
          } else {
            //LOGGED IN
            console.log(res.r);
            localStorage.setItem('user',res.r);
            dispatch(USER_LOGIN(res.r));
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
        <Card style={{ margin: 20 }}>
          <h2>Library Management System</h2>
          <div className="subtitle">Sign in with Email and Password</div>
          <div className="form">
            <Form name="basic" onFinish={handleLogin} onFinishFailed={() => {}}>
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
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                }}
              >
                <Button type="primary" htmlType="submit" loading={loading}>
                  Submit
                </Button>
              </Form.Item>
              <div className="linkBtnContainer">
                Don't have an account?
                <Button className="linkBtn" type="link">
                  {"Register"}
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

export default LoginScreen;
