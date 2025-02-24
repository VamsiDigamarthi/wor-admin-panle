import { FC } from "react";
import { imageUrl } from "../../../Core/url";

type UserImageType = {
  width?: string;
  name: string | null;
  profilePic?: string | null;
  mobile?: string | null;
};

const UserImage: FC<UserImageType> = ({ width, name, profilePic, mobile }) => {
  const imgUrl = `${imageUrl}/${profilePic}`;

  return (
    <div style={{ width }} className="flex gap-2 items-center">
      <img
        src={imgUrl}
        className="w-[50px] h-[50px] rounded-full bg-slate-500"
        alt="profile picture"
      />
      <div className=" flex flex-col gap-1">
        <p className="text-lg font-[600] -mb-1">{name}</p>
        <p className="text-[12px] text-gray-500">{mobile}</p>
      </div>
    </div>
  );
};

export default UserImage;
