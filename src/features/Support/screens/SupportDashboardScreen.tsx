import RecentActive from "../components/RecentActive";
import SupportDahsboarSearSelecCard from "../components/SupportDahsboarSearSelecCard";
import SupportPercentageCard from "../components/SupportPercentageCard";

const SupportDashboardScreen = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <SupportDahsboarSearSelecCard />
      <div className="w-full flex flex-wrap gap-6 justify-between items-center">
        <SupportPercentageCard />
        <SupportPercentageCard />
        <SupportPercentageCard />
        <SupportPercentageCard />
      </div>
      <RecentActive />
    </div>
  );
};

export default SupportDashboardScreen;
