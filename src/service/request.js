import axios from "axios";

// BASE URL
const baseURL = import.meta.env.VITE_BASE_URL;

// AXIOS INSTANCE
const request = axios.create({
  baseURL,
  timeout: 10000,
});

// 🔐 REQUEST INTERCEPTOR (token qo‘shish)
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ⚠️ RESPONSE INTERCEPTOR (error handling)
request.interceptors.response.use(
  (response) => response.data, // faqat data qaytadi
  (error) => {
    const status = error?.response?.status;

    // Unauthorized
    if (status === 401) {
      console.log("Unauthorized, login required");

      // tokenni o‘chirish
      localStorage.removeItem("access_token");

      // login page ga redirect (agar react-router ishlatsang)
      window.location.href = "/login";
    }

    // Server error
    if (status >= 500) {
      console.log("Server error");
    }

    return Promise.reject(error);
  }
);

export default request;