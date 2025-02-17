import { type FC, type MouseEventHandler } from "react";
import { BeatLoader } from "react-spinners";

type ButtonTypes = {
  width?: string;
  bgColor?: string;
  textColor?: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  isApplyBorderStyle?: boolean;
  disabled?: boolean; // Make disabled optional, defaulting to false
};

const Button: FC<ButtonTypes> = ({
  width = "full",
  bgColor = "e02e88", // default color
  textColor = "white", // default text color
  text,
  onClick,
  isLoading = false,
  isApplyBorderStyle = false,
  disabled = false, // Default disabled to false
}) => {
  // Determine background color based on disabled state
  const buttonBgColor = disabled
    ? "bg-gray-300" // Disabled state background color
    : bgColor === "e02e88"
    ? "bg-primary"
    : `bg-[${bgColor}]`;

  // Determine text color
  const buttonTextColor =
    textColor === "white" ? "text-white" : `text-[${textColor}]`;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${width === "full" ? "w-full" : `w-[${width}]`} 
        h-[42px] 
        ${buttonBgColor} 
        rounded-md 
        text-[17px] 
        font-[600] 
        ${buttonTextColor} 
        flex justify-center items-center  
        ${isApplyBorderStyle && "border border-gray-400"} 
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
      `}
    >
      {isLoading ? <BeatLoader color="#fff" size={10} /> : text}
    </button>
  );
};

export default Button;
