import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWorUsers,
  setVerifiedUsers,
  setWorUsers,
} from "../redux/worUserSlice";
import { AppDispatch, RootState } from "../../../Redux/store";

export const useUserDashboardHook = () => {
  const dispatch: AppDispatch = useDispatch();

  const { worUsers, allWorUser } = useSelector(
    (state: RootState) => state.worUser
  );
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

  const filterByText = (text: string) => {
    if (text?.length <= 0) {
      // dispatch(setFilterUser(notFilterData));
    }

    if (!text || !worUsers || !Array.isArray(worUsers)) return [];

    const lowerText = text.toLowerCase();

    const filtered = allWorUser?.filter((user) => {
      const name = user.name?.toLowerCase() || "";
      const email = user.email?.toLowerCase() || "";
      const mobile = user.mobile?.toLowerCase() || "";

      return (
        name.includes(lowerText) ||
        email.includes(lowerText) ||
        mobile.includes(lowerText)
      );
    });

    dispatch(setWorUsers(filtered));
    // return filtered;
  };

  return { filterByText };
};
