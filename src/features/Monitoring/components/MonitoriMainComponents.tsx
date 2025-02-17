import Status from "../../../SharedComponents/Status";
import MoniterEmergencyCard from "./MoniterEmergencyCard";

const MonitoriMainComponents = () => {
  return (
    <div className="w-full flex gap-4">
      <div className="w-[70%] bg-white rounded-md p-4 shadow-custom">
        <div className="w-full flex justify-between items-center">
          <p className="black-heading">Live Tracking</p>
          <div className="flex gap-4 items-center">
            <Status
              text="Escalate"
              bgColor="#fee2e2"
              textColor="#991b1b"
              height="40px"
            />
            <Status
              text="Refresh Map"
              bgColor="#fee2e2"
              textColor="#991b1b"
              height="40px"
            />
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-white rounded-md p-4 shadow-custom flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <p className="black-heading">Emergency Alert</p>
          <Status
            text="7 Active"
            bgColor="#fee2e2"
            textColor="#991b1b"
            height="35px"
          />
        </div>
        <MoniterEmergencyCard />
      </div>
    </div>
  );
};

export default MonitoriMainComponents;
