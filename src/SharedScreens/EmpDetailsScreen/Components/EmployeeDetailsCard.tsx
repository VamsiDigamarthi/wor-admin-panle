import { Calendar, Mail, MapPinned, Phone } from "lucide-react";
import EmpPersonalInfoCard from "./EmpPersonalInfoCard";

const EmployeeDetailsCard = () => {
  return (
    <div className="w-full flex gap-4 items-start p-6 py-9 bg-white rounded-md">
      <div className="w-1/6 flex flex-col justify-center items-center border-r border-gray-500">
        <img
          className="w-[150px] h-[150px] rounded-full bg-gray-700"
          src=""
          alt=""
        />
        <p>employe id</p>
      </div>
      <div className="w-5/6 flex flex-col gap-3">
        <h2 className="text-xl text-gray-900 font-[600]">Employee Name</h2>
        <span className="text-gray-600 text-sm">User Verified</span>
        <span className="leading-6">
          tt. Donec eu eleifend massa. Donec viverra, ex ut euismod hendrerit,
          nunc nisi cursus est, nec scelerisque lorem erat vel nunc. Duis non
          urna ornare, commodo felis ac, fringilla tortor. Nulla dui libero,
          dignissim et eros id, elementum rutrum risus
        </span>
        <div className="w-full flex gap-10">
          <div className="flex gap-2">
            <Phone className=" text-grayText" />
            <p className="text-base text-grayText">345676543</p>
          </div>
          <div className="flex gap-2">
            <Mail className=" text-grayText" />
            <p className="text-base text-grayText">njasndjns@gmail.com</p>
          </div>
        </div>
        <div className="w-full flex gap-10">
          <div className="flex gap-2">
            <Calendar className=" text-grayText" />
            <p className="text-base text-grayText">345676543</p>
          </div>
          <div className="flex gap-2">
            <MapPinned className=" text-grayText" />
            <p className="text-base text-grayText">njasndjns@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-4">
          <EmpPersonalInfoCard />
          <EmpPersonalInfoCard />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsCard;
