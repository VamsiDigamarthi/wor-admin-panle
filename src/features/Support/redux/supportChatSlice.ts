import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../Core/url";

export type SupportChat = {
  participants: [
    {
      participantId: string;
      participantModal: "User" | "AdminUsers";
      unreacCount: number;
      _id: string;
    }
  ];
  userData: {
    mobile: string;
    name: string;
    userVerified: boolean;
    _id: string;
    profilePic: string;
  };
  _id: string;
  messages: message[];
};

export type message = {
  sender: string;
  message: string;
  type: string;
  read: boolean;
  mediaUrl: string;
};

interface SupportChatState {
  supportChats: SupportChat[]; // Array of support chats
  loading: boolean;
  error: string | null;
}

const initialState: SupportChatState = {
  supportChats: [],
  loading: false,
  error: null,
};

// Create an async thunk to fetch support chats
export const fetchSupportChats = createAsyncThunk(
  "supportChat/fetchSupportChats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/manager/support-chats");
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch support chats"
      );
    }
  }
);

// Create the Redux slice
const supportChatSlice = createSlice({
  name: "supportChat",
  initialState,
  reducers: {
    // You can define other reducers here if necessary
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupportChats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSupportChats.fulfilled, (state, action) => {
        state.loading = false;
        state.supportChats = action.payload;
      })
      .addCase(fetchSupportChats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default supportChatSlice.reducer;
