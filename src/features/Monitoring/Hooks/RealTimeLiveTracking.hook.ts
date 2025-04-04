import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
import { fetchActiveOrders } from "../slice/activeOrderSlice";
import { useSocket } from "../../../Layout/SocketContext";

export const useRealTimeLiveTrackingHook = () => {
  const { socket, isConnected } = useSocket();

  const { userProfile } = useSelector((state: RootState) => state.profile);

  const { activeorder } = useSelector((state: RootState) => state.activeorders);

  const [trackingData, setTrackingData] = useState<
    { orderId: string; coordinates: { lat: number; lng: number } }[]
  >([]);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchActiveOrders());
  }, [dispatch]);

  // console.log("activeorder", activeorder);

  useEffect(() => {
    if (isConnected && socket) {
      socket.emit("monitoring-user-connected", {
        newUserId: userProfile?._id,
      });
    }
  }, [socket, isConnected]);

  const allCaptainCoordinates = (coordinatesData: {
    orderId: string;
    coordinates: { lat: number; lng: number };
  }) => {
    setTrackingData((prevData) => {
      const existingIndex = prevData.findIndex(
        (item) => item.orderId === coordinatesData.orderId
      );
      if (existingIndex !== -1) {
        // Update existing orderId coordinates
        const updatedData = [...prevData];
        updatedData[existingIndex] = coordinatesData;
        return updatedData;
      } else {
        // Add new orderId with coordinates
        return [...prevData, coordinatesData];
      }
    });
  };

  useEffect(() => {
    if (socket && isConnected) {
      socket.on("all-captain-coordinates", allCaptainCoordinates);
    }
    return () => {
      socket?.off("all-captain-coordinates", allCaptainCoordinates);
    };
  }, [socket, isConnected]);

  console.log("trackingData", trackingData);

  return {
    activeorder,
    trackingData,
  };
};
