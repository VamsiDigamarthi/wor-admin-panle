import TwoBtnCombine from "../../../SharedComponents/TwoBtnCombine";

const RealTimeSOSAlert = () => {
  return (
    <div className="w-full p-3 flex flex-col gap-3 border-b">
      <div className="w-full flex items-start gap-2">
        <div className="w-[40px] h-[40px] rounded-full bg-red-200"></div>
        <div>
          <p className="text-base font-medium">SOS Alert</p>
          <p className="text-[10px] font-normal text-gray-400">Ride-987</p>
        </div>
      </div>
      <TwoBtnCombine firstText="Call Rider" secondText="Alert Police" />
      <button className="w-full border py-2 rounded-md">
        Access Voice Record
      </button>
    </div>
  );
};

export default RealTimeSOSAlert;
