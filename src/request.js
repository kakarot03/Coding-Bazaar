import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjY2MjlhOWUwMDE5ZDE5ZDkyYjJjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzUzNzc5NiwiZXhwIjoxNjQ0MTQyNTk2fQ.BxSmyjYxjA9ILjJfYmy2oMmPNgp-ujrKpjolwmIH0k4";

  var user1 = ""
const user = () => {
  try {
    user1 = JSON.parse(localStorage.getItem("persist:root"))?.user;
    console.log(user1)
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
  header: { token: `Bearer ${TOKEN}` },
});
