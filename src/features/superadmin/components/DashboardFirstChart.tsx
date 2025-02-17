import Invoices from "./Invoices";
import PieChat from "./PieChat";
import PieChatCardLayout from "./PieChatCardLayout";

const DashboardFirstChart = () => {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      <PieChatCardLayout title="User / Rider Activity">
        <PieChat />
      </PieChatCardLayout>
      <PieChatCardLayout title="Employees Activity">
        <PieChat />
      </PieChatCardLayout>
      <PieChatCardLayout title="Invoices Sent">
        <Invoices />
        <Invoices />

        <Invoices />

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

export default DashboardFirstChart;
