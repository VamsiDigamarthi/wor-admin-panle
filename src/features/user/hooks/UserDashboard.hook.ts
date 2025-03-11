import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorUsers, setVerifiedUsers } from "../redux/worUserSlice";
import { AppDispatch, RootState } from "../../../Redux/store";

export const useUserDashboardHook = () => {
  const dispatch: AppDispatch = useDispatch();

  const { worUsers } = useSelector((state: RootState) => state.worUser);
  const { userProfile } = useSelector((state: RootState) => state.profile);
  // const v = "";

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

    dispatch(
      setVerifiedUsers({
        approvedUsers: apprivedRiders,
        pendingUsers: pendingRiders,
      })
    );
  }, [worUsers, dispatch, userProfile?.whichType]);

  useEffect(() => {
    if (worUsers && worUsers.length > 0) {
      calculateUserApprovedCount();
    }
  }, [calculateUserApprovedCount, worUsers]);

  // return { v };
};
