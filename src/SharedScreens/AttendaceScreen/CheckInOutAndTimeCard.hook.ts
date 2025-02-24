import { useEffect, useState } from "react";

export const useCheckInOutAndTimeCardHook = () => {
  const [checkInTime, setCheckInTime] = useState<string | null>(null);
  const [checkOutTime, setCheckOutTime] = useState<string | null>(null);
  const [isCheckInDisabled, setIsCheckInDisabled] = useState(false);
  const [isCheckOutDisabled, setIsCheckOutDisabled] = useState(true);

  // Get today's date in dd-mm-yyyy format
  const getTodayDate = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(currentDate);
  };

  const todayDate = getTodayDate(); // Only holds the date, no time.

  // Format time to IST (Asia/Kolkata)
  const formatToIST = (time: Date) => {
    return time.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  // Fetch saved data (if user checked in or checked out previously)
  useEffect(() => {
    const storedCheckInTime = localStorage.getItem("checkInTime");
    const storedCheckOutTime = localStorage.getItem("checkOutTime");
    const storedDate = localStorage.getItem("attendanceDate");

    // If it's a new day, reset the check-in and check-out times
    if (storedDate !== todayDate) {
      localStorage.removeItem("checkInTime");
      localStorage.removeItem("checkOutTime");
      localStorage.removeItem("attendanceDate");
      setCheckInTime(null);
      setCheckOutTime(null);
      setIsCheckInDisabled(false);
      setIsCheckOutDisabled(true);
    } else {
      setCheckInTime(storedCheckInTime);
      setCheckOutTime(storedCheckOutTime);

      // If the user has already checked in but not checked out
      if (storedCheckInTime && !storedCheckOutTime) {
        setIsCheckInDisabled(true);
        setIsCheckOutDisabled(false);
      }

      // If the user has already checked out
      if (storedCheckInTime && storedCheckOutTime) {
        setIsCheckInDisabled(true);
        setIsCheckOutDisabled(true);
      }
    }
  }, [todayDate]);

  const handleCheckIn = () => {
    const currentTime = formatToIST(new Date());
    console.log("check in");

    setCheckInTime(currentTime);
    setIsCheckInDisabled(true);
    setIsCheckOutDisabled(false);
    localStorage.setItem("checkInTime", currentTime);
    localStorage.setItem("attendanceDate", todayDate); // Store only the date
  };

  const handleCheckOut = () => {
    const currentTime = formatToIST(new Date());
    console.log("check out");

    setCheckOutTime(currentTime);
    setIsCheckInDisabled(true);
    setIsCheckOutDisabled(true);
    localStorage.setItem("checkOutTime", currentTime);
  };

  return {
    todayDate,
    checkInTime,
    checkOutTime,
    isCheckInDisabled,
    isCheckOutDisabled,
    handleCheckIn,
    handleCheckOut,
    formatToIST,
  };
};
