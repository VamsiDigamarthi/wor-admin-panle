import { MoveUp } from "lucide-react";
import { FC, type ReactNode } from "react";

type PercentageTypes = {
  children: ReactNode;
  percentage: number;
  title: string;
  count: number;
  bgColor: string;
};

const PercentageCard: FC<PercentageTypes> = ({
  children,
  count,
  percentage,
  title,
  bgColor,
}) => {
  return (
    <div className="w-[300px] h-[120px] relative bg-white shadow-custom rounded-lg">
      <div className="w-full flex flex-col justify-end items-end px-6 py-3 border-b-iconBg border-b">
        <p className="text-sm text-gray-400">{title}</p>
        <h2 className="text-xl font-[600]">{count}</h2>
      </div>
      <div className="flex gap-1 items-center py-3 px-3">
        <MoveUp size={18} className="text-green-500" />
        <p className="text-green-500 font-[600]">{percentage}% Increment</p>
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className="absolute -top-3 left-4 w-[40px] h-[40px] rounded-lg flex justify-center items-center"
      >
        {children}
      </div>
    </div>
  );
};

export default PercentageCard;
