import DashboardFirstChart from "../components/DashboardFirstChart";
import DashBoardPercentageCard from "../components/DashBoardPercentageCard";
import DashboardSecondChar from "../components/DashboardSecondChar";
import { useSuperAdminDashboardHook } from "../Hooks/SuperAdminDashboard.hook";

const SuperAdminDashboard = () => {
  const { allUsers } = useSuperAdminDashboardHook();
  console.log("allUsers", allUsers);

  return (
    <div className="w-full flex flex-col gap-10 py-5">
      <DashBoardPercentageCard allUsers={allUsers} />
      <DashboardFirstChart />
      <DashboardSecondChar />
    </div>
  );
};

export default SuperAdminDashboard;
