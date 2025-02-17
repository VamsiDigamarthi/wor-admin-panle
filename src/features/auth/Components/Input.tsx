import { type ChangeEvent, FC, useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Assuming you're using lucide-react for icons

type InputProps = {
  label: string;
  type: "text" | "password" | "date";
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean | string;
};

const Input: FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  isValid,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div className="w-[330px]">
      <div className={`w-[330px] relative mt-2`}>
        <label className="text-sm text-primary mb-1 block">{label}</label>
        <input
          className={`w-full h-[45px] border rounded-md px-3 outline-none ${
            isValid ? "border-red-400" : "border-gray-300"
          }`}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />

        {/* Icon for password type */}
        {type === "password" && (
          <div
            className="absolute bottom-[13px] right-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        )}

        {/* Icon for date type */}
        {/* {type === "date" && (
        <div className="absolute bottom-[13px] right-3 cursor-pointer">
          <Calendar size={20} />
        </div>
      )} */}
      </div>
      {isValid && <p className="text-xs text-red-300 ">{isValid}</p>}
    </div>
  );
};

export default Input;
