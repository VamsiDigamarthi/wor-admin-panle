import { FC } from "react";
import Status from "../../../SharedComponents/Status";
import UserImage from "./UserImage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { setWorUser } from "../../../features/user/redux/worUserSlice";

type UserCardType = {
  isDisplayBBordered?: boolean;
  name: string;
  profilePic?: string | null;
  userVerified: boolean;
  _id: string;
  // this propd comming from chat screen
  isChatScreen?: boolean;
  passChatIdToParentComs?: (chatId: string) => void;
  isSelected?: boolean;
  mobile?: string;
};

const UserCard: FC<UserCardType> = ({
  isDisplayBBordered = true,
  name,
  userVerified,
  profilePic,
  _id,
  isChatScreen = false,
  passChatIdToParentComs,
  isSelected = false,
  mobile,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const { worUsers, worUser } = useSelector(
    (state: RootState) => state.worUser
  );

  const handleSetWorUser = () => {
    if (isChatScreen && passChatIdToParentComs) {
      passChatIdToParentComs(_id);
    }
    const user = worUsers?.find((user) => user._id === _id);
    if (user) {
      dispatch(setWorUser(user));
    }
  };

  return (
    <div
      onClick={handleSetWorUser}
      style={{
        borderBottom: isDisplayBBordered ? "1px solid #e5e7eb" : "none",
        background:
          worUser?._id === _id ? "#f9e6ff" : isSelected ? "#f9e6ff" : "none",
        borderRadius: isSelected ? "10px" : "0px",
      }}
      className="w-full flex justify-between items-center py-2 cursor-pointer"
    >
      <UserImage name={name} profilePic={profilePic} mobile={mobile} />
      <Status
        height="30px"
        roundedCorners={true}
        text={userVerified ? "Approved" : "Pending"}
        bgColor={userVerified ? "#DCFCE7" : "#FEF9C3"}
        textColor={userVerified ? "#166534" : "#854D0E"}
      />
    </div>
  );
};

export default UserCard;
