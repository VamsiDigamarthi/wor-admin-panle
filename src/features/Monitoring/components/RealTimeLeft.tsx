import Status from "../../../SharedComponents/Status";
import { useRealTimeLeftHook } from "../Hooks/RealTimeLeft.hook";
import RealTimeActiveRideCard from "./RealTimeActiveRideCard";

const RealTimeLeft = () => {
  const { activeorder, vehicleNumber } = useRealTimeLeftHook();

  return (
    <div className="w-[30%] h-full flex flex-col">
      <div className="w-full flex justify-between items-center border-b py-3 px-3">
        <p className="text-sm font-semibold text-black">Active Rides</p>
        <Status
          text={`${activeorder?.length} Active`}
          bgColor="#dcfce7"
          textColor="#166534"
          height="30px"
          roundedCorners={true}
        />
      </div>
      <div className="w-full h-[90%] overflow-y-scroll">
        {activeorder?.map((eachorder, key) => (
          <RealTimeActiveRideCard
            key={key}
            orderId={eachorder._id}
            profilePic={eachorder?.acceptCaptain?.profilePic}
            captainName={eachorder?.acceptCaptain?.name}
            vehcileNumer={vehicleNumber(eachorder?.acceptCaptain?._id) ?? ""}
            activerServices={eachorder?.acceptCaptain?.activeService}
            orderTime={eachorder?.orderPlaceTime}
          />
        ))}
      </div>
    </div>
  );
};

export default RealTimeLeft;
