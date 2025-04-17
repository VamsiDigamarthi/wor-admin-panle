import { useSelector } from "react-redux";
import SearchCard from "../../../SharedComponents/Search";
import Status from "../../../SharedComponents/Status";
import { RootState } from "../../../Redux/store";
import { FC } from "react";

type StatusSearchCardType = {
  filterByText: (text: string) => void;
};

const StatusSearchCard: FC<StatusSearchCardType> = ({ filterByText }) => {
  const { verifiedUsers } = useSelector((state: RootState) => state.worUser);
  return (
    <div className="w-full flex justify-end items-center gap-4 border-b border-b-gray-300 py-2">
      <SearchCard
        filterByText={filterByText}
        height="40px"
        width="330px"
        isApplyBorder={true}
      />
      <Status
        text={`${verifiedUsers?.pendingUsers} Pending`}
        bgColor="#fef9c3"
        textColor="#854d0e"
      />
      <Status
        text={`${verifiedUsers?.approvedUsers} Approved`}
        bgColor="#dcfce7"
        textColor="#166534"
      />
      {/* <Status text="8 Rejected" bgColor="#fee2e2" textColor="#991b1b" /> */}
    </div>
  );
};

export default StatusSearchCard;
