import { type FC } from "react";

type SelectWithoutLabelTypes = {
  width?: string;
};

const SelectWithoutLabel: FC<SelectWithoutLabelTypes> = ({
  width = "300px",
}) => {
  return (
    <select
      className={`w-[${width}] h-[45px] shadow-custom rounded-md p-2 bg-white outline-none`}
    >
      <option value="" disabled selected>
        select days
      </option>
    </select>
  );
};

export default SelectWithoutLabel;
