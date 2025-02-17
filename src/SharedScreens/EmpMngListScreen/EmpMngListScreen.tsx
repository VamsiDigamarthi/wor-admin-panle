import DownloadPdf from "../../SharedComponents/DownloadPdf";
import Table from "../../SharedComponents/Table/Table";
// import { useEmpMngListScreenHook } from "./Hooks/EmpMngListScreen.hook";
import AddEmployeModal from "./Modals/AddEmployeModal";

const EmpMngListScreen = () => {
  // const { empList } = useEmpMngListScreenHook();
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <DownloadPdf
          title="Employees management list"
          subTitle="User Management employee list"
          isDisplayAddEmployeBtn={true}
        />
        <Table />
      </div>
      <AddEmployeModal />
    </>
  );
};

export default EmpMngListScreen;
