import RealTimeLeft from "../components/RealTimeLeft";
import RealTimeRight from "../components/RealTimeRight";

const RealTimeLiveTracking = () => {
  return (
    <div className="w-full bg-white rounded-md shadow-custom flex">
      <RealTimeLeft />
      <div className="w-[60%] bg-black">
        <img
          src="https://www.figma.com/file/syLMDVvThPmw4tsXBm8icB/image/ec89b36743d488389edc0106489b4587ed4f492f"
          alt=""
        />
      </div>
      <RealTimeRight />
    </div>
  );
};

export default RealTimeLiveTracking;
