import axios from "axios";

// Get tenantId dynamically from URL
const getTenantId = () => {
  const pathParts = window.location.pathname.split("/");
  return pathParts[1] || "default-tenant"; // Fallback if tenantId is missing
};

const LOGIN_URL = `/${getTenantId()}`;

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Attach token to each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle 401 errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response); // Debugging
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("authToken");
      window.location.replace(LOGIN_URL); // Use replace instead of href
    } else if (error.response && error.response.status === 500) {
        alert("Internal server error!");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
