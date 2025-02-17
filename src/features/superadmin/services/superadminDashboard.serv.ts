import { API } from "../../../Core/url";

export const fetchAllUsers = async () => {
  try {
    const users = await API.get("/super-admin/all-users");
    return users.data;
  } catch (error) {
    return false;
  }
};
