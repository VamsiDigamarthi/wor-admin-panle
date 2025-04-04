import GoogleMapComponent from "../components/GoogleMapComponent";
import RealTimeLeft from "../components/RealTimeLeft";
import RealTimeRight from "../components/RealTimeRight";
import { useRealTimeLiveTrackingHook } from "../Hooks/RealTimeLiveTracking.hook";

const RealTimeLiveTracking = () => {
  const { activeorder, trackingData } = useRealTimeLiveTrackingHook();
  return (
    <div className="w-full bg-white rounded-md shadow-custom flex h-[700px]">
      <RealTimeLeft />
      <div className="w-[60%] h-full bg-black">
        <GoogleMapComponent orders={activeorder} trackingData={trackingData} />
      </div>
      <RealTimeRight />
    </div>
  );
};

export default RealTimeLiveTracking;
