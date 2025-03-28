import { type FC } from "react";

type IconsLayoutType = {
  children: React.ReactNode;
  onPress?: () => void;
};

const IconsLayout: FC<IconsLayoutType> = ({ children, onPress }) => {
  return (
    <div
      onClick={onPress}
      className="w-[40px] h-[40px] bg-iconBg rounded-full flex justify-center items-center"
    >
      {children}
    </div>
  );
};

export default IconsLayout;
