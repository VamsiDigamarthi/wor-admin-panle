import { FC } from "react";

type TwoBtnCombineTypes = {
  firstText: string;
  secondText: string;
};

const TwoBtnCombine: FC<TwoBtnCombineTypes> = ({ firstText, secondText }) => {
  return (
    <div className="flex justify-start gap-3 items-center w-full">
      <button className="w-1/2 bg-[#16a34a]  rounded-md px-3 py-2 text-white font-semibold ">
        {firstText}
      </button>
      <button className="w-1/2 bg-[#dc2626] rounded-md px-3 py-2 text-white font-semibold ">
        {secondText}
      </button>
    </div>
  );
};

export default TwoBtnCombine;
