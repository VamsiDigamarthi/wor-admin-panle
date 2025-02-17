import SearchFilterCard from "../../../SharedComponents/Table/SearchFilterCard";
import NotificationCard from "./NotificationCard";
import NotificationRight from "./NotificationRight";

const NotificationMain = () => {
  return (
    <div className="w-fullflex h-[700px] flex-col gap-8 items-start p-6 py-9 bg-white rounded-md overflow-hidden ">
      <SearchFilterCard />
      <div className="w-full h-[calc(100%-100px)] flex gap-4 items-start mt-4">
        <div className="w-3/5 flex flex-col gap-4 h-full overflow-y-auto">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
        <div className="w-2/5">
          <NotificationRight />
        </div>
      </div>
    </div>
  );
};

export default NotificationMain;
