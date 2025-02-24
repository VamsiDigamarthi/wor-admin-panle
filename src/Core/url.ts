import axios from "axios";
import { errorMsgApi } from "./toast";

export const API = axios.create({
  baseURL: "http://192.168.1.12:5051",
});

export const imageUrl = "http://192.168.1.12:5051";

const useGetUserToken = (): string | null => {
  return localStorage.getItem("token") || null;
};

API.interceptors.request.use(
  (config) => {
    const token = useGetUserToken();

    if (token && !config.url?.includes("/login")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Content-Type"] =
      config.headers["Content-Type"] || "application/json";

    return config; // Return the modified config object
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for centralized error handling
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorMessage =
      error?.response?.data?.message || "Something went wrong";
    console.log("API call failed:", errorMessage);

    errorMsgApi(errorMessage);

    return Promise.reject(error);
  }
);

// import { API } from "./apiConfig";

// // Example API to get user profile
// export const getUserProfile = async () => {
//   try {
//     const response = await API.get("/user/profile");
//     return response.data;
//   } catch (error) {
//     console.log("Error fetching user profile:", error);
//     return false;
//   }
// };

// // Example API with custom Content-Type
// export const uploadImage = async (formData: FormData) => {
//   try {
//     const response = await API.post("/upload/image", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data", // Overriding Content-Type
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.log("Error uploading image:", error);
//     return false;
//   }
// };
