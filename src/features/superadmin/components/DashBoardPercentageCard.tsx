import { FC } from "react";
import PercentageCard from "../../../SharedComponents/PercentageCard";
import { CircleCheck, UserCheck, Users } from "lucide-react";

type DashboardFirstChartType = {
  _id: string;
  name: string;
  mobile: string;
  role: string;
  userVerified: boolean;
};

const DashBoardPercentageCard: FC<{
  allUsers: DashboardFirstChartType[];
}> = ({ allUsers }) => {
  const userCount = allUsers?.filter((each) => each.role === "user")?.length;

  const apprivedRiders = allUsers?.filter(
    (each) => each.userVerified && each.role === "captain"
  )?.length;

  const pendingRiders = allUsers?.filter(
    (each) => !each.userVerified && each.role === "captain"
  )?.length;

  return (
    <div className="w-full flex flex-wrap gap-6 justify-between items-center">
      <PercentageCard
        bgColor="#DCFCE7"
        title="Total Users"
        percentage={12}
        count={userCount}
      >
        <UserCheck size={20} color="#16A34A" />
      </PercentageCard>
      <PercentageCard
        bgColor="#DBEAFE"
        title="Approved Riders"
        percentage={12}
        count={apprivedRiders}
      >
        <CircleCheck size={20} color="#2563EB" />
      </PercentageCard>
      <PercentageCard
        bgColor="#DBFFFC"
        title="Total Employees"
        percentage={12}
        count={allUsers?.length}
      >
        <Users size={20} color="#1FB2D3" />
      </PercentageCard>
      <PercentageCard
        bgColor="#DCFCE7"
        title="Pending Riders"
        percentage={12}
        count={pendingRiders}
      >
        <UserCheck size={20} color="#16A34A" />
      </PercentageCard>
    </div>
  );
};

export default DashBoardPercentageCard;
