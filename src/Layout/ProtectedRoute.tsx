import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppDispatch, RootState } from "../Redux/store";
import {
  setRoleFromStorage,
  setTokenFromStorage,
} from "../features/auth/Redux/loginSlice";
import { fetchUserProfile } from "../features/auth/Redux/profileSlice";

export type Roles =
  | "user"
  | "admin"
  | "support"
  | "monitoring"
  | "manager"
  | "superadmin"
  | "verificationTeam";

type AllowedUserTypes = {
  allowedRoles: Roles[];
};

const useGetUserRole = (): Roles => {
  const { role } = useSelector((state: RootState) => state.authToken);
  return role || (localStorage.getItem("role") as Roles) || null;
};
const useGetUserToken = (): string | null => {
  const { token } = useSelector((state: RootState) => state.authToken);
  return token || localStorage.getItem("token") || null;
};

const ProtectedRoute: FC<AllowedUserTypes> = ({ allowedRoles }) => {
  const dispatch: AppDispatch = useDispatch();

  const userRole = useGetUserRole();
  const storedToken = useGetUserToken();

  useEffect(() => {
    if (storedToken && userRole) {
      dispatch(fetchUserProfile());
      dispatch(setRoleFromStorage(userRole));
      dispatch(setTokenFromStorage(storedToken));
    }
  }, [storedToken, userRole, dispatch]);

  if (!storedToken) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.includes(userRole)) {
    return <Outlet />;
  }

  return <Navigate to="/not-authorized" />;
};

export default ProtectedRoute;
