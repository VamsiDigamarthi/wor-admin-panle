import Status from "../../../SharedComponents/Status";
import RealTimeSOSAlert from "./RealTimeSOSAlert";

const RealTimeRight = () => {
  return (
    <div className="w-[30%] flex flex-col">
      <div className="w-full flex justify-between items-center border-b py-3 px-3">
        <p className="text-sm font-semibold text-black">Live Alert</p>
        <Status
          text="3 Critical"
          bgColor="#dcfce7"
          textColor="#166534"
          height="30px"
          roundedCorners={true}
        />
      </div>
      <RealTimeSOSAlert />
    </div>
  );
};

export default RealTimeRight;
