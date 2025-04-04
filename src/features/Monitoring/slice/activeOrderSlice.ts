import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../../Core/url";

export type activeOrder = {
  _id: string;
  price: string;
  vehicleType: string;
  status: string;
  orderPlaceDate: string;
  orderPlaceTime: string;
  head: {
    name: string;
    mobile: string;
    profilePic: string;
  };
  acceptCaptain: {
    _id: string;
    name: string;
    mobile: string;
    profilePic: string;
    services: [{ serviceType: string; rcNumber: string }];
    activeService: string;
  };
  captainCoor: number[];
  pickup: {
    type: "Point";
    coordinates: number[];
  };
  pickupAddress: string;
  pickupVicinity: string;
  drop: {
    type: "Point";
    coordinates: number[];
  };
  dropAddress: string;
  dropVicinity: string;
  howManyMans: number;
  orderOtpVerified: boolean;
  isArrived: boolean;
  newDropLocation: {
    type: "Point";
    coordinates: number[];
  };
  newDropAddress: string;
  newDropVicinity: string;
  changeRoute: {
    user: string;
    change: boolean;
  }[];
  quickAlert: {
    user: string;
    coordinates: number[];
  };
};

interface ActiveOrders {
  activeorder: activeOrder[];
  loading: boolean;
  error: string | null;
}

const initialState: ActiveOrders = {
  activeorder: [],
  loading: false,
  error: null,
};

export const fetchActiveOrders = createAsyncThunk(
  "supportChat/fetchSupportChats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get(
        "/manager/all-active-order-to-monitor-team"
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch support chats"
      );
    }
  }
);

// Create the Redux slice
const supportChatSlice = createSlice({
  name: "active-orders",
  initialState,
  reducers: {
    // You can define other reducers here if necessary
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActiveOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.activeorder = action.payload;
      })
      .addCase(fetchActiveOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default supportChatSlice.reducer;
