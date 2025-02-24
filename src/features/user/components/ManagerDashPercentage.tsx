import { type FC } from "react";
import PercentageCard from "../../../SharedComponents/PercentageCard";
import { CircleCheck, UserCheck, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

const ManagerDashPercentage: FC = () => {
  const { userProfile } = useSelector((state: RootState) => state.profile);
  const { verifiedUsers } = useSelector((state: RootState) => state.worUser);
  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-8">
      <PercentageCard
        bgColor="#DCFCE7"
        title={`Approved ${userProfile?.whichType}`}
        percentage={12}
        count={verifiedUsers?.approvedUsers}
      >
        <UserCheck size={20} color="#16A34A" />
      </PercentageCard>
      <PercentageCard
        bgColor="#DBEAFE"
        title={`Pending ${userProfile?.whichType}`}
        percentage={12}
        count={verifiedUsers.pendingUsers}
      >
        <CircleCheck size={20} color="#2563EB" />
      </PercentageCard>
      <PercentageCard
        bgColor="#DBFFFC"
        title="Payment Issuse"
        percentage={12}
        count={10}
      >
        <Users size={20} color="#1FB2D3" />
      </PercentageCard>
      <PercentageCard
        bgColor="#DCFCE7"
        title="User Reports"
        percentage={12}
        count={5}
      >
        <UserCheck size={20} color="#16A34A" />
      </PercentageCard>
    </div>
  );
};

export default ManagerDashPercentage;
