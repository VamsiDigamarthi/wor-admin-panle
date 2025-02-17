import { FC } from "react";
import Status from "../../../SharedComponents/Status";
import UserImage from "./UserImage";

type UserCardType = {
  isDisplayBBordered?: boolean;
};

const UserCard: FC<UserCardType> = ({ isDisplayBBordered = true }) => {
  return (
    <div
      style={{
        borderBottom: isDisplayBBordered ? "1px solid #e5e7eb" : "none",
      }}
      className="w-full flex justify-between items-center  py-2"
    >
      <UserImage />
      <Status
        height="30px"
        roundedCorners={true}
        text="8 Rejected"
        bgColor="#fee2e2"
        textColor="#991b1b"
      />
    </div>
  );
};

export default UserCard;
