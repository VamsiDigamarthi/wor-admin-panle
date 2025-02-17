import DownloadPdf from "../../SharedComponents/DownloadPdf";
import PaymnetIssueMain from "./Components/PaymnetIssueMain";

const PaymentIssuseScreen = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <DownloadPdf
        title="Paymnet Issue Verification"
        subTitle="User Verify Page"
      />
      <PaymnetIssueMain />
    </div>
  );
};

export default PaymentIssuseScreen;
