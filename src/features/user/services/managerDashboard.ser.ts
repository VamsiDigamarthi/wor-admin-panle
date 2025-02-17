import { API } from "../../../Core/url";

export const fetchWorUserApi = async () => {
  try {
    const response = await API.get("/manager/wor-user");
    return response.data;
  } catch (error) {
    console.log("Error fetching wor-user data:", error);
    return false;
  }
};
