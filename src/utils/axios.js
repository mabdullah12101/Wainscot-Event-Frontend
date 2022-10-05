import axios from "axios";

const axiosAPIInstances = axios.create({
  baseURL: "http://localhost:3001/api",
});

// Add a request interceptor
axiosAPIInstances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosAPIInstances;
