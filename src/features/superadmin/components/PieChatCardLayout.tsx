import { type FC, type ReactNode } from "react";

type PieChatCardLayoutType = {
  children: ReactNode;
  title: string;
  width?: string;
  height?: string;
};

const PieChatCardLayout: FC<PieChatCardLayoutType> = ({
  children,
  title,
  width = "28%",
  height = "400px", // Default height for the card layout is 400px. You can adjust this as per your requirement.
}) => {
  return (
    <div style={{ width, height }} className=" h-[400px] flex flex-col gap-4">
      <p className="font-semibold text-black text-lg">{title}</p>
      <div className="w-full h-[95%] p-4 rounded-2xl shadow-custom bg-white flex flex-col gap-3 justify-center items-center  overflow-scroll">
        {children}
      </div>
    </div>
  );
};

export default PieChatCardLayout;
