import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { API } from "../../../Core/url";

interface UserProfile {
  _id: string;
  userId: string;
  email: string;
  dateOfBirth: string;
  role: string;
  whichType: string;
}

interface ProfileState {
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  userProfile: null,
  loading: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk<
  UserProfile,
  void,
  { rejectValue: string }
>("profile/fetchUserProfile", async (_, { rejectWithValue }) => {
  try {
    const response = await API.get("/manager/profile");
    return response.data;
  } catch (error: any) {
    if (error?.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue(error.message);
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserProfile.fulfilled,
        (state, action: PayloadAction<UserProfile>) => {
          state.userProfile = action.payload;
          state.loading = false;
        }
      )

      .addCase(
        fetchUserProfile.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.error = action.payload || "Something went wrong";
          state.loading = false;
        }
      );
  },
});

export default profileSlice.reducer;
