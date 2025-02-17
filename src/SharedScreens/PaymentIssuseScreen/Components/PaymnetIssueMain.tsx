import StatusSearchCard from "../../UserVerificationScreen/Components/StatusSearchCard";
import TxsCard from "./TxsCard";
import TxsCompleteDetails from "./TxsCompleteDetails";

const PaymnetIssueMain = () => {
  return (
    <div className="w-full h-[750px] flex flex-col gap-8 items-start p-6 py-9 bg-white rounded-md overflow-hidden">
      <StatusSearchCard />
      <div className="flex gap-4 w-full h-full">
        <div className="w-2/5 h-ful overflow-y-auto pb-4">
          <TxsCard />
          <TxsCard />
          <TxsCard />
          <TxsCard />
          <TxsCard />
          <TxsCard />
          <TxsCard />
          <TxsCard />
          <TxsCard />
        </div>
        <div className="w-3/5 pl-5 flex flex-col h-full">
          <TxsCompleteDetails />
        </div>
      </div>
    </div>
  );
};

export default PaymnetIssueMain;
