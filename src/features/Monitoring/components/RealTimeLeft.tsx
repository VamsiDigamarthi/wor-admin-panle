import Status from "../../../SharedComponents/Status";
import RealTimeActiveRideCard from "./RealTimeActiveRideCard";

const RealTimeLeft = () => {
  return (
    <div className="w-[30%] flex flex-col">
      <div className="w-full flex justify-between items-center border-b py-3 px-3">
        <p className="text-sm font-semibold text-black">Active Rides</p>
        <Status
          text="12 Active"
          bgColor="#dcfce7"
          textColor="#166534"
          height="30px"
          roundedCorners={true}
        />
      </div>
      <RealTimeActiveRideCard />
      <RealTimeActiveRideCard />

      <RealTimeActiveRideCard />
    </div>
  );
};

export default RealTimeLeft;
