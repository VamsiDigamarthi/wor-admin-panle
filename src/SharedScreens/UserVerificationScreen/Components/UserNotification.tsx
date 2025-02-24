import { FC, useState } from "react";

type UserNotificationType = {
  handleFilterUsers: (filter: boolean) => void;
};

const UserNotification: FC<UserNotificationType> = ({ handleFilterUsers }) => {
  const [selectCard, setSelectCard] = useState(false);

  const handleFilterUsersFun = (filter: boolean) => {
    setSelectCard(filter);
    handleFilterUsers(filter);
  };

  return (
    <div className="w-full bg-gray-300 px-4 py-4 flex justify-between gap-4 items-center rounded-md h-[70px]">
      <button
        onClick={() => handleFilterUsersFun(false)}
        className="w-1/2 bg-primary text-white h-[40px] rounded-md"
        style={{
          backgroundColor: !selectCard ? "#e02e88" : "#fff",
          color: !selectCard ? "#fff" : "#000",
        }}
      >
        New Notification
      </button>
      <button
        onClick={() => handleFilterUsersFun(true)}
        className="w-1/2 bg-white border border-gray-500  h-[40px] rounded-md"
        style={{ backgroundColor: selectCard ? "#e02e88" : "#fff" }}
      >
        Completed
      </button>
    </div>
  );
};

export default UserNotification;
