import Status from "../../../SharedComponents/Status";
import TwoBtnCombine from "../../../SharedComponents/TwoBtnCombine";
import UserImage from "../../../SharedScreens/UserVerificationScreen/Components/UserImage";

const MoniterEmergencyCard = () => {
  return (
    <div className="w-full p-4 border rounded-md flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <Status
          text="SOS Aleart"
          bgColor="#fee2e2"
          textColor="#991b1b"
          height="35px"
        />
        <p className="text-sm text-gray-500">2 Mins Ago</p>
      </div>
      <UserImage />
      <TwoBtnCombine firstText="Call Me" secondText="View Details" />
    </div>
  );
};

export default MoniterEmergencyCard;
