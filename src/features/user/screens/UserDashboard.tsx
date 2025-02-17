import DownloadPdf from "../../../SharedComponents/DownloadPdf";
import Table from "../../../SharedComponents/Table/Table";
import { useUserDashboardHook } from "../hooks/UserDashboard.hook";
import ManagerDashPercentage from "../components/ManagerDashPercentage";

const UserDashboard = () => {
  const { worUserCount } = useUserDashboardHook();
  return (
    <div className="w-full h-full flex flex-col gap-6 py-4">
      <ManagerDashPercentage worUserCount={worUserCount} />
      <DownloadPdf
        title="Employees management list"
        subTitle="User Management employee list"
      />
      <Table />
    </div>
  );
};

export default UserDashboard;
