import DownloadPdf from "../../SharedComponents/DownloadPdf";
import UserVerifyCard from "./Components/UserVerifyCard";

const UserVerificationScreen = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <DownloadPdf
        title="Employees Deails"
        subTitle="User Management employees list"
      />
      <UserVerifyCard />
    </div>
  );
};

export default UserVerificationScreen;
