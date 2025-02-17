import DownloadPdf from "../../SharedComponents/DownloadPdf";
import EmployeeDetailsCard from "./Components/EmployeeDetailsCard";

const EmpDetailsScreen = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <DownloadPdf
        title="Employees Deails"
        subTitle="User Management employees list"
      />
      <EmployeeDetailsCard />
    </div>
  );
};

export default EmpDetailsScreen;
