import { FilePenLine } from "lucide-react";

const EmpPersonalInfoCard = () => {
  return (
    <div className="w-[400px] p-5 shadow-custom rounded-lg mt-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg text-gray-900 font-[600]">Personal Info</p>
        <button>
          <FilePenLine />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full flex justify-between items-center">
          <span className="w-1/2 ">Nationality</span>
          <span className="w-1/2 ">India</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="w-1/2 ">Nationality</span>
          <span className="w-1/2 ">India</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="w-1/2 ">Nationality</span>
          <span className="w-1/2 ">India</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="w-1/2 ">Nationality</span>
          <span className="w-1/2 ">India</span>
        </div>
      </div>
    </div>
  );
};

export default EmpPersonalInfoCard;
