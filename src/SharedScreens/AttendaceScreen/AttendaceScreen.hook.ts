import { useEffect, useState } from "react";
import {
  calculateHoursWorked,
  fetchAllAttendanceApi,
} from "./Attendance.services";

export type AttendanceType = {
  date: Date;
  checkInTime: string;
  checkOutTime: string;
  _id: string;
};

type ColumnData<T> = {
  label: string;
  key: keyof T;
  width: string;
  sliceLength?: number;
  render?: (rowData: T) => React.ReactNode;
};

export const useAttendaceScreenHook = () => {
  const [attendace, setAttendance] = useState<AttendanceType[]>([]);

  const handleFetchAttendace = async () => {
    const attendace = await fetchAllAttendanceApi();
    if (!attendace) return;
    setAttendance(attendace);
  };

  useEffect(() => {
    handleFetchAttendace();
  }, []);

  const columns: ColumnData<AttendanceType>[] = [
    { label: "Date", key: "date", width: "25%", sliceLength: 30 },
    {
      label: "Check In-Time",
      key: "checkInTime",
      width: "25%",
      sliceLength: 30,
    },
    {
      label: "Check Out-Time",
      key: "checkOutTime",
      width: "25%",
      sliceLength: 30,
    },
    {
      label: "Total Hours",
      key: "_id",
      width: "25%",
      sliceLength: 30,
      render: (rowData) =>
        calculateHoursWorked({
          checkInTime: rowData.checkInTime,
          checkOutTime: rowData.checkOutTime,
        }),
    },
  ];

  return {
    attendace,
    columns,
  };
};
