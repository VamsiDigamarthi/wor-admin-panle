import { FC } from "react";

type UserImageType = {
  width?: string;
};

const UserImage: FC<UserImageType> = ({ width }) => {
  return (
    <div style={{ width }} className="flex gap-2 items-center">
      <img
        src=""
        className="w-[50px] h-[50px] rounded-full bg-slate-500"
        alt=""
      />
      <div className=" flex flex-col gap-1">
        <p className="text-lg font-[600] -mb-1">Name</p>
        <p className="text-[12px] text-gray-500">Wor-876fghn </p>
      </div>
    </div>
  );
};

export default UserImage;
