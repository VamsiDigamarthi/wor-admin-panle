import UserCard from "../../../SharedScreens/UserVerificationScreen/Components/UserCard";

const RecentActive = () => {
  return (
    <div className="w-full p-5 shadow-custom rounded-md bg-white">
      <div className="w-full flex justify-between items-center px-5">
        <p className="text-lg font-semibold">Recent Activity</p>
        <button className="text-blue-400 font-normal">View All</button>
      </div>
      <UserCard isDisplayBBordered={false} />
      <UserCard isDisplayBBordered={false} />

      <UserCard isDisplayBBordered={false} />

      <UserCard isDisplayBBordered={false} />
    </div>
  );
};

export default RecentActive;
