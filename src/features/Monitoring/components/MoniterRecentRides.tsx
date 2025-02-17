import Status from "../../../SharedComponents/Status";
import Table from "../../../SharedComponents/Table/Table";

const MoniterRecentRides = () => {
  return (
    <div className="w-full bg-white p-4 rounded-md shadow-custom flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <p className="black-heading">Recent Rides</p>
        <Status
          text="Download Report"
          bgColor="#fee2e2"
          textColor="#991b1b"
          height="40px"
        />
      </div>
      <Table isDisplayFilters={false} />
    </div>
  );
};

export default MoniterRecentRides;
