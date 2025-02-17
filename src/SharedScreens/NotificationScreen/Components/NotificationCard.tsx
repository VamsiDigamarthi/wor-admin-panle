import { TriangleAlert } from "lucide-react";
import Status from "../../../SharedComponents/Status";

const NotificationCard = () => {
  return (
    <div className="w-full flex- flex-col justify-start items-center p-4 border border-red-300 rounded-md">
      <div className="w-full flex justify-between items-start">
        <div className="flex gap-2 items-start">
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-red-100 rounded-full">
            <TriangleAlert color="red" size={20} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-[600]">Payment Issues Detection</p>
            <p className="text-base text-gray-400">
              User #123 requested a refund for Transaction #456
            </p>
            <div className="flex gap-4">
              <Status
                text="View Details"
                bgColor="#e5e7eb"
                textColor="#2563eb"
                height="30px"
                roundedCorners={true}
              />
              <Status
                text="Escalate"
                bgColor="#fee2e2"
                textColor="#991b1b"
                height="30px"
                roundedCorners={true}
              />
            </div>
          </div>
        </div>
        <p className="text-base text-gray-400">2 hours ago</p>
      </div>
      <div className="w-full flex justify-start items-center gap-4 mt-4">
        <Status text="View Details" bgColor="#dcfce7" textColor="#166534" />
        <Status text="Mark as Read" bgColor="#fef9c3" textColor="#854d0e" />
      </div>
    </div>
  );
};

export default NotificationCard;
