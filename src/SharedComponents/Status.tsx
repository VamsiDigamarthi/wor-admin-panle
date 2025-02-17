import { FC } from "react";

type StatusTypes = {
  bgColor: string;
  textColor: string;
  text: string;
  roundedCorners?: boolean;
  height?: string;
};

const Status: FC<StatusTypes> = ({
  bgColor,
  textColor,
  text,
  roundedCorners = false,
  height = "40px",
}) => {
  return (
    <button
      style={{
        height,
        backgroundColor: bgColor,
        borderRadius: roundedCorners ? "20px" : "6px", // Default to 4px if roundedCorners is false
      }}
      className="px-2"
    >
      <p style={{ color: textColor }}>{text}</p>
    </button>
  );
};

export default Status;
