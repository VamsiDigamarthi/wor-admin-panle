import MoniterRecentRides from "../components/MoniterRecentRides";
import MonitoriMainComponents from "../components/MonitoriMainComponents";
import SupportPercentageCard from "../../Support/components/SupportPercentageCard";

const MonitoringTeamScreen = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-wrap gap-6 justify-between items-center">
        <SupportPercentageCard />
        <SupportPercentageCard />
        <SupportPercentageCard />
        <SupportPercentageCard />
      </div>
      <MonitoriMainComponents />
      <MoniterRecentRides />
    </div>
  );
};

export default MonitoringTeamScreen;
