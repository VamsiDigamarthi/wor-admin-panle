import { type FC } from "react";

type UseNameCardType = {
  mobile: string | null;
  name: string | null;
  email: string | null;
  dob: string | null;
};

const UseNameCard: FC<UseNameCardType> = ({ mobile, email, name, dob }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="w-1/2 flex flex-col gap-0">
          <p className="text-sm text-gray-500">Full Name</p>
          <h2 className="text-lg font-[600]">{name}</h2>
        </div>
        <div className="w-1/2 flex flex-col gap-1">
          <p className="text-sm text-gray-500">Date of Birth</p>
          <h2 className="text-lg font-[600]">{dob}</h2>
        </div>
      </div>
      <div className="w-full flex justify-between items-center border-b border-b-gray-200 mb-3">
        <div className="w-1/2 flex flex-col gap-0">
          <p className="text-sm text-gray-500">Contact Number</p>
          <h2 className="text-lg font-[600]">{mobile}</h2>
        </div>
        <div className="w-1/2 flex flex-col gap-1">
          <p className="text-sm text-gray-500">Email Address</p>
          <h2 className="text-lg font-[600]">{email}</h2>
        </div>
      </div>
    </>
  );
};

export default UseNameCard;
