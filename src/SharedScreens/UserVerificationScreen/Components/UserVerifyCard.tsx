// import { useUserVerifyCardHook } from "../hooks/UserVerifyCard.hook";

import StatusSearchCard from "./StatusSearchCard";

import UserVerificationLeftSide from "./UserVerificationLeftSide";
import UserVerificationRightSide from "./UserVerificationRightSide";

const UserVerifyCard = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-start p-6 py-9 bg-white rounded-md shadow-custom h-[1100px]">
      <StatusSearchCard />
      <div className="flex gap-4 w-full h-full ">
        <UserVerificationLeftSide />
        <UserVerificationRightSide />
      </div>
    </div>
  );
};

export default UserVerifyCard;
