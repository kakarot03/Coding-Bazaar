import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest } from "../request";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    return dispatch(loginSuccess(res.data));
  } catch (err) {
    return dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", user);
    return dispatch(registerSuccess(res.data));
  } catch (err) {
    return dispatch(registerFailure());
  }
};