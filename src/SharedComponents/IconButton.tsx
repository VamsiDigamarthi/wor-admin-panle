import { FC, MouseEventHandler, type ReactNode } from "react";

type IconsButtonType = {
  children: ReactNode;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;
  isDisplayBordered?: boolean;
  textColor?: string;
};

const IconButton: FC<IconsButtonType> = ({
  children,
  title,
  onClick,
  bgColor,
  isDisplayBordered = true,
  textColor = "#b1b1b1",
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        border: isDisplayBordered ? "1px solid #b1b1b1" : "none",
      }}
      onClick={onClick}
      className="px-4 py-2 rounded-md cursor-pointer flex justify-around items-center gap-4"
    >
      {children}

      <p style={{ color: textColor }} className="text-base font-[600]">
        {title}
      </p>
    </button>
  );
};

export default IconButton;
