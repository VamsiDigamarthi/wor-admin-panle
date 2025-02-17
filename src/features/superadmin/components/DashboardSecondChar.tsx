import Invoices from "./Invoices";
import LineChat from "./LineChat";
import PieChatCardLayout from "./PieChatCardLayout";

const DashboardSecondChar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <PieChatCardLayout title="Ride Trend" width="65%" height="550px">
        <LineChat />
      </PieChatCardLayout>
      <PieChatCardLayout title="Recent Actives " height="550px">
        <Invoices />
        <Invoices />

        <Invoices />

        <Invoices />

        <Invoices />

        <Invoices />
      </PieChatCardLayout>
    </div>
  );
};

export default DashboardSecondChar;
