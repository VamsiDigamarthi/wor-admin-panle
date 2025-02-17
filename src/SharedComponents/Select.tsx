import { type ChangeEvent, FC } from "react";

type SelectProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  isValid: boolean;
};

const Select: FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  isValid,
}) => {
  return (
    <div className="w-[330px] relative mt-2">
      <label className="text-sm text-primary mb-1 block">{label}</label>
      <select
        className={`w-full h-[45px] border rounded-md px-3 outline-none ${
          isValid ? "border-red-400" : "border-gray-300"
        }`}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
