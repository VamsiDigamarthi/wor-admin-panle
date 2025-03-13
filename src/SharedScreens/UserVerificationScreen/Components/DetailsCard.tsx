import { FC } from "react";

export type DetailsCardType = {
  label: string | null;
  value: string | null;
  index?: number;
};

const DetailsCard: FC<DetailsCardType> = ({ label, value }) => {
  return (
    <span className="text-base font-normal">
      {label} - <span className="text-lg font-semibold ml-2">{value}</span>
    </span>
  );
};

export default DetailsCard;
