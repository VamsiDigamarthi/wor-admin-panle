import { Ticket } from "lucide-react";

const SupportPercentageCard = () => {
  return (
    <div className="w-[300px] p-4 rounded-md shadow-custom bg-white flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="w-[40px] h-[40px] rounded-full bg-red-200 flex justify-center items-center">
          <Ticket size={22} color="#ef4444" />
        </div>
        <p className="text-lg text-[#ef4444] font-semibold">+12%</p>
      </div>
      <div className="w-full flex flex-col gap-1">
        <h2 className="text-black font-semibold text-2xl">245</h2>
        <p className="text-base font-medium">Open Tickest</p>
      </div>
    </div>
  );
};

export default SupportPercentageCard;
