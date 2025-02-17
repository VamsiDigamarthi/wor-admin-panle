import { FC, ReactNode } from "react";

type DateRangeType = {
  title: string;
  children: ReactNode;
};

const DateRange: FC<DateRangeType> = ({ children, title }) => {
  return (
    <button className="px-4 py-3 bg-gray-200 rounded-md flex justify-between items-center gap-3">
      {children}
      <span>{title}</span>
    </button>
  );
};

export default DateRange;
