import { API } from "../../Core/url";
import { AttendanceType } from "./AttendaceScreen.hook";

export const fetchAllAttendanceApi = async () => {
  try {
    const response = await API.get("/manager/attendance");
    return response.data as AttendanceType[];
  } catch (error) {
    console.log("Error fetching Attendance", error);
    return false;
  }
};

type calculateHoursWorkedTypes = {
  checkInTime: string | null;
  checkOutTime: string | null;
};
export const calculateHoursWorked = ({
  checkInTime,
  checkOutTime,
}: calculateHoursWorkedTypes): string => {
  if (checkInTime && checkOutTime) {
    const checkInDate = new Date(`1970-01-01 ${checkInTime}`);
    const checkOutDate = new Date(`1970-01-01 ${checkOutTime}`);

    const diffInMs = checkOutDate.getTime() - checkInDate.getTime();

    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  }
  return "";
};
