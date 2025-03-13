import { FC } from "react";
import { imageUrl } from "../../../Core/url";

type UserImageType = {
  width?: string;
  name: string | null;
  profilePic?: string | null;
  mobile?: string | null;
  unreadCount?: number;
};

const UserImage: FC<UserImageType> = ({
  width,
  name,
  profilePic,
  mobile,
  unreadCount = 0,
}) => {
  const imgUrl = `${imageUrl}/${profilePic}`;

  return (
    <div style={{ width }} className="flex gap-2 items-center">
      <div className="w-[50px] h-[50px] rounded-full bg-slate-500  relative">
        <img src={imgUrl} className="w-full h-full" alt="profile picture" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 right-1 bg-red-300 rounded-full text-sm">
            {unreadCount}
          </span>
        )}
      </div>
      <div className=" flex flex-col gap-1">
        <p className="text-lg font-[600] -mb-1">{name}</p>
        <p className="text-[12px] text-gray-500">{mobile}</p>
      </div>
    </div>
  );
};

export default UserImage;
