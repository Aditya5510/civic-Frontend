import axios from "axios";

// create an axios instace for REACT_APP_BACKEND
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default axiosInstance;
