import { useEffect, useState } from "react";
import { fetchAllUsers } from "../services/superadminDashboard.serv";

export const useSuperAdminDashboardHook = () => {
  const [allUsers, setAllUsers] = useState([]);

  const handleFetchAllUsers = async () => {
    const users = await fetchAllUsers();
    if (users.length) {
      setAllUsers(users);
    }
  };

  useEffect(() => {
    handleFetchAllUsers();
  }, []);
  return { allUsers };
};
