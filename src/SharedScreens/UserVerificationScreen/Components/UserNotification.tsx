const UserNotification = () => {
  return (
    <div className="w-full bg-gray-300 px-4 py-4 flex justify-between gap-4 items-center rounded-md">
      <button className="w-1/2 bg-primary text-white h-[40px] rounded-md">
        New Notification
      </button>
      <button className="w-1/2 bg-white border border-gray-500  h-[40px] rounded-md">
        Completed
      </button>
    </div>
  );
};

export default UserNotification;
