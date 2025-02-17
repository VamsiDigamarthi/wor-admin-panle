import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorUsers } from "../redux/worUserSlice";
import { AppDispatch, RootState } from "../../../Redux/store";

export const useUserDashboardHook = () => {
  const dispatch: AppDispatch = useDispatch();

  const { worUsers } = useSelector((state: RootState) => state.worUser);
  const { userProfile } = useSelector((state: RootState) => state.profile);

  const [worUserCount, setWorUserCount] = useState({
    approvedUsers: 0,
    pendingUsers: 0,
  });

  useEffect(() => {
    dispatch(fetchWorUsers());
  }, [dispatch]);

  const calculateUserApprovedCount = useCallback(() => {
    const apprivedRiders = worUsers?.filter(
      (each) => each.userVerified && each.role === userProfile?.whichType
    )?.length;

    const pendingRiders = worUsers?.filter(
      (each) => !each.userVerified && each.role === userProfile?.whichType
    )?.length;

    setWorUserCount({
      approvedUsers: apprivedRiders,
      pendingUsers: pendingRiders,
    });
  }, [worUsers, userProfile?.whichType]);

  useEffect(() => {
    if (worUsers && worUsers.length > 0) {
      calculateUserApprovedCount();
    }
  }, [calculateUserApprovedCount, worUsers]);

  return { worUsers, worUserCount };
};
