import Status from "../../../SharedComponents/Status";
import UserCard from "../../UserVerificationScreen/Components/UserCard";
import TxsNumer from "./TxsNumer";

const TxsCard = () => {
  return (
    <div className="w-full h-[190px] flex flex-col gap-2 border-b border-b-gray-200 py-2">
      <UserCard isDisplayBBordered={false} />
      <div className="w-full flex justify-between items-center  px-4">
        <TxsNumer iconType="txt" title="TXS-9876" />
        <TxsNumer iconType="rupee" title="1.234" />
        <TxsNumer iconType="clock" title="2 hours ago" />
      </div>
      <div className="flex gap-4">
        <Status text="View Details" bgColor="#e5e7eb" textColor="#2563eb" />
        <Status text="Escalate" bgColor="#fee2e2" textColor="#991b1b" />
      </div>
    </div>
  );
};

export default TxsCard;
