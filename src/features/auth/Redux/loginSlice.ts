import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "../../../Core/url"; // Ensure your API URL is correctly imported
import { LoginUserData, LoginResponse, AuthState } from "../types/authTypes";
import { Roles } from "../../../Layout/ProtectedRoute";

// Thunk for user login
export const userLogin = createAsyncThunk<
  LoginResponse, // Return type of fulfilled action
  { userData: LoginUserData }, // Input argument to the thunk
  { rejectValue: string } // Type of rejected action's payload (error message)
>("auth/login", async ({ userData }, { rejectWithValue }) => {
  try {
    const response = await API.post("/manager/login", userData);
    console.log("LoginSlice response:", response);
    return response.data;
  } catch (error: any) {
    console.log("LoginSlice error:", error?.response?.data);
    if (error?.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue(error.message);
  }
});

// Initial state with correct typing
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
  role: null, // Default role
};

const validRoles: Roles[] = [
  "user",
  "admin",
  "support",
  "manager",
  "monitoring",
  "superadmin",
];

function isValidRole(role: string): role is Roles {
  return validRoles.includes(role as Roles);
}

const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.error = null; // Clear error on logout
      state.role = null; // Clear role on logout
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
    setRoleFromStorage: (state, action: PayloadAction<Roles>) => {
      state.role = action.payload;
    },
    setTokenFromStorage: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userLogin.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;

          if (isValidRole(action.payload.role)) {
            state.role = action.payload.role;
          }

          // Store token and role in localStorage
          localStorage.setItem("role", action.payload.role);
          localStorage.setItem("token", action.payload.token);

          state.token = action.payload.token;
          state.error = null;
        }
      )
      .addCase(
        userLogin.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "An error occurred";
        }
      );
  },
});

// Export actions and reducer
export const { logout, setRoleFromStorage, setTokenFromStorage } =
  tokenSlice.actions;
export default tokenSlice.reducer;
