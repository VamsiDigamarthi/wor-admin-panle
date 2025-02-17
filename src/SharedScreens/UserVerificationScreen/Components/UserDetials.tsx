import StatucChangBtn from "./StatucChangBtn";
import UseNameCard from "./UseNameCard";
import UserImage from "./UserImage";

const UserDetials = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <UserImage />
        <div className="w-1/2 flex gap-4 items-center justify-between ">
          <StatucChangBtn title="Approve" bgColor="#22c55e" iconType="tick" />
          <StatucChangBtn title="Reject" bgColor="#fe4444" iconType="cross" />
          <StatucChangBtn
            title="Escalate"
            bgColor="#fff"
            iconType="upArrow"
            isApplyBorder={true}
            textColor="#000"
          />
        </div>
      </div>
      <UseNameCard />
    </div>
  );
};

export default UserDetials;
