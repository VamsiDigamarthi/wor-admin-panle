import { FC } from "react";
import StatucChangBtn from "./StatucChangBtn";
import UseNameCard from "./UseNameCard";
import UserImage from "./UserImage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { captainVerificationApi } from "../services/docsVerifiedServ";
import { fetchWorUsers } from "../../../features/user/redux/worUserSlice";

type UserDetialsType = {
  name: string | null;
  profilePic?: string | null;
  mobile: string | null;
  email: string | null;
};

const UserDetials: FC<UserDetialsType> = ({
  name,
  profilePic,
  mobile,
  email,
}) => {
  const { worUser } = useSelector((state: RootState) => state.worUser);
  const dispatch: AppDispatch = useDispatch();

  const handleCaptainVerified = async () => {
    if (!worUser) {
      return;
    }
    const data = await captainVerificationApi({
      captainId: worUser?._id,
      service: worUser?.services?.[0]?.serviceType,
    });
    if (data) {
      dispatch(fetchWorUsers());
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <UserImage name={name} profilePic={profilePic} />
        <div className=" flex gap-4 items-center justify-between ">
          <>
            {worUser?.userVerified ? (
              <StatucChangBtn
                // onClick={handleCaptainVerified}
                title="Verified"
                bgColor="#22c55e"
                iconType="tick"
                cursorDisable={true}
              />
            ) : (
              <StatucChangBtn
                onClick={handleCaptainVerified}
                title="Approve"
                bgColor="#22c55e"
                iconType="tick"
              />
            )}
          </>

          {/* <StatucChangBtn title="Reject" bgColor="#fe4444" iconType="cross" />
          <StatucChangBtn
            title="Escalate"
            bgColor="#fff"
            iconType="upArrow"
            isApplyBorder={true}
            textColor="#000"
          /> */}
        </div>
      </div>
      <UseNameCard mobile={mobile} email={email} name={name} />
    </div>
  );
};

export default UserDetials;
