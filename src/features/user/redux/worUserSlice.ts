import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { API } from "../../../Core/url";
import { WorUser } from "../types/woruser.types";

interface UserDashboardState {
  worUsers: WorUser[];
  loading: boolean;
  error: string | null;
}

const initialState: UserDashboardState = {
  worUsers: [],
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
  } catch (error: any) {
    console.error("Error fetching wor-user data:", error);
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

// Redux slice
const userDashboardSlice = createSlice({
  name: "userDashboard",
  initialState,
  reducers: {},
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
          state.loading = false;
        }
      )
      .addCase(fetchWorUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch wor users";
      });
  },
});

export default userDashboardSlice.reducer;
