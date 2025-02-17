import { Check } from "lucide-react";

const DocImage = () => {
  return (
    <div className="w-[300px] p-4 border border-gray-300 rounded-md flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <h3>Aadhar ID Card</h3>
        <Check size={20} className="text-black font-[600]" />
      </div>
      <div className="w-full bg-gray-200 h-[100px] rounded-md"></div>
    </div>
  );
};

export default DocImage;
