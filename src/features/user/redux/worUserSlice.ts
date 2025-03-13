import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { API } from "../../../Core/url";
import { WorUser } from "../types/woruser.types";

interface UserDashboardState {
  worUsers: WorUser[];
  worUser: WorUser | null;
  loading: boolean;
  error: string | null;
  verifiedUsers: {
    approvedUsers: number;
    pendingUsers: number;
  };
}

const initialState: UserDashboardState = {
  worUsers: [],
  worUser: null,
  verifiedUsers: {
    approvedUsers: 0,
    pendingUsers: 0,
  },
  loading: false,
  error: null,
};

// Async thunk to fetch wor users
export const fetchWorUsers = createAsyncThunk<
  WorUser[],
  void,
  { rejectValue: string }
>("userDashboard/fetchWorUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await API.get("/manager/wor-user");
    // console.log("response", response);

    return response.data as WorUser[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching wor-user data:", error);
    return rejectWithValue(error.response?.data || "Wor User Fetching Failed");
  }
});

// Redux slice
const userDashboardSlice = createSlice({
  name: "userDashboard",
  initialState,
  reducers: {
    setVerifiedUsers: (
      state,
      action: PayloadAction<{ approvedUsers: number; pendingUsers: number }>
    ) => {
      state.verifiedUsers = action.payload;
    },

    setWorUser: (state, action: PayloadAction<WorUser>) => {
      state.worUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWorUsers.fulfilled,
        (state, action: PayloadAction<WorUser[]>) => {
          state.worUsers = action.payload;

          const storedUser = localStorage.getItem("worUser");
          const parsedUser: WorUser | null = storedUser
            ? JSON.parse(storedUser)
            : null;
          // console.log("parsedUser", parsedUser);

          if (parsedUser) {
            // Try to find the latest version of the stored user in the fetched data
            const updatedUser = action.payload.find(
              (user) => user._id === parsedUser._id
            );
            // console.log("updatedUser", updatedUser);

            if (updatedUser) {
              // If the user is found in the updated data, update the state with the latest user
              state.worUser = updatedUser;
            } else {
              // If the user is not in the updated data, fall back to the local storage user
              state.worUser = parsedUser;
            }
          } else {
            // Set the first unverified user from the fetched list
            state.worUser =
              action.payload.find((user) => !user.userVerified) ?? null;
          }

          state.loading = false;
        }
      )

      .addCase(fetchWorUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch wor users";
      });
  },
});

export const { setVerifiedUsers, setWorUser } = userDashboardSlice.actions;

export default userDashboardSlice.reducer;
