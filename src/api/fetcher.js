import axios from "axios";
import { getLocalStorage } from "../helpers";
import { LOGIN_USER } from "../constants";

// console.log(import.meta.env.VITE_BEARER);
const fetcher = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: {
    TokenCybersoft: import.meta.env.VITE_TOKEN,
    Authorization: import.meta.env.VITE_BEARER,
  },
  timeout: 30000,
});

fetcher.interceptors.request.use((config) => {
  // console.log("config: ", config)
  const user = getLocalStorage(LOGIN_USER);

  //* Thêm Authorization vào header
  if (user) {
    config.headers["Authorization"] = user.accessToken;
  }

  // console.log("login-user: ", user)
  return config;
});

fetcher.interceptors.response.use((response) => {
  return response;
});

export default fetcher;
