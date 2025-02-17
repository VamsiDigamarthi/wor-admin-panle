import Status from "../../../SharedComponents/Status";
import AdminNote from "./AdminNote";
import TxsScreenShot from "./TxsScreenShot";
import TxsUserInfo from "./TxsUserInfo";

const TxsCompleteDetails = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between items-center border-b border-b-gray-200 py-2">
        <h2 className="text-lg font-[600]">Issue Details</h2>
        <Status
          roundedCorners={true}
          text="8 Rejected"
          bgColor="#fee2e2"
          textColor="#991b1b"
          height="30px"
        />
      </div>
      <div className="w-full flex gap-6 items-start">
        <TxsUserInfo title="Transaction" />
        <TxsUserInfo title="User" />
      </div>
      <h2 className="text-lg font-[600]">Issue Description</h2>
      <p className="text-balance text-gray-600 w-full">
        Payment was deducted but order shows as failed amount has not been
        refunded to my account yet.
      </p>
      <TxsScreenShot />
      <AdminNote />
      <div className="w-full flex justify-end items-center gap-4">
        <Status text="Escalate" bgColor="#fef9c3" textColor="#854d0e" />
        <Status text="Issues Refund" bgColor="#dcfce7" textColor="#166534" />
        <Status text="Mark as Resolved" bgColor="#16a34a" textColor="#fff" />
      </div>
    </div>
  );
};

export default TxsCompleteDetails;
