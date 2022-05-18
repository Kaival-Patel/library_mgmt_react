import { toast } from "react-toastify";
import { APIBASEURL } from "../constants";

export const signInWithEmailPassword = async ({ email, password }) => {
  try {
    var body = new FormData();
    body.append("email", email);
    body.append("password", password);
    const response = await fetch(APIBASEURL + "/user/login", {
      method: "POST",
      body: body,
    });
    return await response.json();
  } catch (err) {
    console.error(err);
    toast("Something is not right", { type: "error" });
    return null;
  }
};

export const signUpWithEmailPassword = async ({name,type,email, password }) => {
  try {
    var body = new FormData();
    body.append("email", email);
    body.append("password", password);
    body.append("name", name);
    body.append("type", type);
    const response = await fetch(APIBASEURL + "/user/register", {
      method: "POST",
      body: body,
    });
    return await response.json();
  } catch (err) {
    console.error(err);
    toast("Something is not right", { type: "error" });
    return null;
  }
};
