import { type FC } from "react";
import Button from "../../SharedComponents/Button";
import { useCheckInOutAndTimeCardHook } from "./CheckInOutAndTimeCard.hook";
import { calculateHoursWorked } from "./Attendance.services";

const CheckInOutAndTimeCard: FC = () => {
  const {
    todayDate,
    checkInTime,
    checkOutTime,
    isCheckInDisabled,
    isCheckOutDisabled,
    handleCheckIn,
    handleCheckOut,
    formatToIST,
  } = useCheckInOutAndTimeCardHook();

  return (
    <div className="w-full flex justify-around items-center">
      <div className="flex flex-col gap-2 justify-start items-start">
        <p className="text-base font-[600]">
          Date: <span>{todayDate?.slice(0, 10)}</span>
        </p>
        <p className="text-base font-[600]">
          Time: <span>{formatToIST(new Date())}</span>
        </p>
        <p className="text-base font-[600]">
          Check In: <span>{checkInTime || "Not checked in"}</span>
        </p>
        <p className="text-base font-[600]">
          Check Out: <span>{checkOutTime || "Not checked out"}</span>
        </p>
        <p className="text-base font-[600]">
          No Of Hours:{" "}
          <span>{calculateHoursWorked({ checkInTime, checkOutTime })}</span>
        </p>
      </div>
      <div className="flex flex-col gap-3 w-1/6">
        <Button
          text="Check IN"
          onClick={handleCheckIn}
          isLoading={false}
          disabled={isCheckInDisabled}
        />
        <Button
          text="Check Out"
          onClick={handleCheckOut}
          isLoading={false}
          bgColor="#fff"
          textColor="#e02e88"
          isApplyBorderStyle={true}
          disabled={isCheckOutDisabled}
        />
      </div>
    </div>
  );
};

export default CheckInOutAndTimeCard;
