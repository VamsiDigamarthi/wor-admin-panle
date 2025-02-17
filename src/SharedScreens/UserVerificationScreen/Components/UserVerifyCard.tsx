import DocImage from "./DocImage";
import StatusSearchCard from "./StatusSearchCard";
import UserCard from "./UserCard";
import UserDetials from "./UserDetials";
import UserNotification from "./UserNotification";

const UserVerifyCard = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-start p-6 py-9 bg-white rounded-md">
      <StatusSearchCard />
      <div className="flex gap-4 w-full">
        <div className="w-2/5">
          <UserNotification />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <div className="w-3/5  pl-5 flex flex-col ">
          <UserDetials />
          <div className="flex flex-col gap-4 w-full">
            <h3 className="font-semibold text-lg">Upload Images</h3>
            <div className="w-full flex flex-wrap gap-4">
              <DocImage />
              <DocImage />
              <DocImage />
              <DocImage />
            </div>
            <h3 className="font-semibold text-lg">
              Driving Skill Verification
            </h3>
            <p className="bg-gray-100 px-4 py-2 rounded-md leading-6 text-base">
              Completed basic riding course with excellent performance. Shows
              good control and understanding of traffic rules
            </p>
            <h3 className="font-semibold text-lg">Audit Log</h3>
            <div className="w-full flex flex-col gap-1">
              <p>Profile Submittion on Jan 15, 2025</p>
              <p>Profile Submittion on Jan 15, 2025</p>
              <p>Profile Submittion on Jan 15, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserVerifyCard;
