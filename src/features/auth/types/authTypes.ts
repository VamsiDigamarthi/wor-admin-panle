import { Roles } from "../../../Layout/ProtectedRoute";

export interface LoginUserData {
  userName: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  role: string;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
  role: Roles | null;
}
