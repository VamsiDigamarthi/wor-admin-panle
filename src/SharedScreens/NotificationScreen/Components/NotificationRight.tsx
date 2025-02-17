import { TriangleAlert, Wallet } from "lucide-react";

const NotificationRight = () => {
  return (
    <div className="w-full shadow-custom p-8 rounded-md flex flex-col gap-3">
      <h3 className="text-lg font-[600]"> Quick Start</h3>
      <div className="rounded-md p-4 flex justify-between items-center bg-[#f9fafb]">
        <p className="text-lg">Total Notifications</p>
        <p className="text-lg font-[600]">45</p>
      </div>
      <div className="rounded-md p-4 flex justify-between items-center bg-[#eff6ff]">
        <p className="text-lg ">Unread Notifications</p>
        <p className="text-lg font-[600]">15</p>
      </div>
      <h3 className="text-lg font-[600] mt-5">Categories</h3>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Wallet />
          <p className="text-lg ">Payment Issues</p>
        </div>
        <h2 className="text-lg font-semibold">20</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Wallet />
          <p className="text-lg ">Profile Approved</p>
        </div>
        <h2 className="text-lg font-semibold">20</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <TriangleAlert />
          <p className="text-lg ">System Alerts</p>
        </div>
        <h2 className="text-lg font-semibold">20</h2>
      </div>
    </div>
  );
};

export default NotificationRight;
