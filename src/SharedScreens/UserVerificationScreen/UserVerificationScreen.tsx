import { useUserDashboardHook } from "../../features/user/hooks/UserDashboard.hook";
import DownloadPdf from "../../SharedComponents/DownloadPdf";
import UserVerifyCard from "./Components/UserVerifyCard";

const UserVerificationScreen = () => {
  useUserDashboardHook();
  // console.log(v);
  return (
    <div className="w-full flex flex-col gap-4 pb-6">
      <DownloadPdf
        title="Employees Deails"
        subTitle="User Management employees list"
      />
      <UserVerifyCard />
    </div>
  );
};

export default UserVerificationScreen;
