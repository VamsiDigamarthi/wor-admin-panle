import { FC } from "react";
import { imageUrl } from "../../../Core/url";

type RealTimeActiveRideCard = {
  orderId: string;
  profilePic: string;
  captainName: string;
  vehcileNumer: string;
  activerServices: string;
  orderTime: string;
};

const RealTimeActiveRideCard: FC<RealTimeActiveRideCard> = ({
  orderId,
  profilePic,
  captainName,
  vehcileNumer,
  activerServices,
  orderTime,
}) => {
  let profile = profilePic
    ? `${imageUrl}/${profilePic}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewpmWt8SOjwIjb3owMju057f3aytZR8NdGw&s";

  return (
    <div className="w-full flex flex-col gap-3 px-3 py-3 border-b">
      <div className="w-full flex justify-between items-center">
        <p className="text-sm text-gray-400 font-medium">ride id - {orderId}</p>
        {/* <span className="w-[10px] h-[10px] bg-green-500 rounded-full"></span> */}
      </div>
      <div className="w-full flex gap-2">
        <div className="w-[50px] flex flex-col gap-0">
          <img
            className="w-[40px] h-[40px] bg-yellow-200 rounded-full"
            src={profile}
            alt=""
          />
          <p className="text-sm font-medium text-black">Driver</p>
        </div>
        <div className="flex flex-col gap-0 w-[calc(100%-50px)]">
          <p className="text-base font-semibold">{captainName}</p>
          <p className="text-xs text-gray-400">
            Vehicle: {vehcileNumer} • {activerServices}
          </p>
          {/* <p className="text-xs text-gray-400">Speed: 45 km/h</p> */}
        </div>
      </div>
      {/* <div className="w-full flex gap-2 items-center">
        <p>.</p>
        <p className="text-sm font-medium">123 Main St, Downtown</p>
      </div>
      <div className="w-full flex gap-2 items-center">
        <p>.</p>
        <p className="text-sm font-medium">123 Main St, Downtown</p>
      </div> */}
      <div className="w-full flex justify-between items-center">
        <p className="text-base text-gray-400">Started: {orderTime}</p>
        {/* <p className="text-base text-gray-400">ETA: 11:15 AM</p> */}
      </div>
    </div>
  );
};

export default RealTimeActiveRideCard;
