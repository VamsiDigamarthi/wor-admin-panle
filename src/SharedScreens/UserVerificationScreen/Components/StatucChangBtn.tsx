import { Check, ChevronUp, X } from "lucide-react";
import { FC } from "react";

type StatucChangBtnTypes = {
  bgColor: string;
  title: string;
  iconType: string;
  textColor?: string;
  isApplyBorder?: boolean;
  onClick?: () => void;
  cursorDisable?: boolean;
};
const StatucChangBtn: FC<StatucChangBtnTypes> = ({
  bgColor,
  title,
  iconType,
  isApplyBorder,
  textColor = "#fff",
  onClick,
  cursorDisable = false,
}) => {
  const icon =
    iconType === "tick" ? (
      <Check size={20} className="text-white font-[600]" />
    ) : iconType === "cross" ? (
      <X size={20} className="text-white font-[600]" />
    ) : (
      <ChevronUp size={20} className="text-black font-[600]" />
    );

  return (
    <button
      style={{
        border: isApplyBorder ? "1px solid lightgray" : "none",
        backgroundColor: cursorDisable ? "gray" : bgColor,
        cursor: cursorDisable ? "not-allowed" : "pointer",
      }}
      className="w-[130px] h-[40px] flex items-center justify-center px-2 bg-green-700 gap-2 rounded-md"
      onClick={onClick}
    >
      {icon}
      <p style={{ color: textColor }} className="text-white font-[600]">
        {title}
      </p>
    </button>
  );
};

export default StatucChangBtn;
