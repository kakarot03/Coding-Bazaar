import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

var user1 = "";
const user = () => {
  try {
    user1 = JSON.parse(localStorage.getItem("persist:root"))?.user;
    // console.log(user1);
  } catch (error) {
    console.log(error);
  }
};

const currentUser = user1 && JSON.parse(user1).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
