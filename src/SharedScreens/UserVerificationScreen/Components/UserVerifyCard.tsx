// import { useUserVerifyCardHook } from "../hooks/UserVerifyCard.hook";

import { FC } from "react";
import StatusSearchCard from "./StatusSearchCard";

import UserVerificationLeftSide from "./UserVerificationLeftSide";
import UserVerificationRightSide from "./UserVerificationRightSide";

type UserVerifyCardType = {
  filterByText: (text: string) => void;
};

const UserVerifyCard: FC<UserVerifyCardType> = ({ filterByText }) => {
  return (
    <div className="w-full flex flex-col gap-8 items-start p-6 py-9 bg-white rounded-md shadow-custom h-[1300px]">
      <StatusSearchCard filterByText={filterByText} />
      <div className="flex gap-4 w-full h-full ">
        <UserVerificationLeftSide />
        <UserVerificationRightSide />
      </div>
    </div>
  );
};

export default UserVerifyCard;
