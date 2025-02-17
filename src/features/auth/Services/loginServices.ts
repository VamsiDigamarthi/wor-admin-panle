import { API } from "../../../Core/url";
import { LoginUserData } from "../types/authTypes";

export const loginApi = async (userData: LoginUserData) => {
  try {
    await API.post("/auth/login", userData);

    // const token = response.data.token;
    // localStorage.setItem("authToken", token);

    return true;
  } catch (error: any) {
    // if (error.response) {
    //   console.log("Unauthorized");
    // }
    return false;
  }
};
