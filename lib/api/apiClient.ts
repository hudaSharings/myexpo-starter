import axios from "axios";


const API_BASE_URL = "https://example.com/api"; 

// Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (for adding auth token if needed)
apiClient.interceptors.request.use(
  async (config) => {
    // Example: Retrieve token from secure storage (AsyncStorage)
    const token = ""; // Fetch your token here
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor (for logging and error handling)
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
