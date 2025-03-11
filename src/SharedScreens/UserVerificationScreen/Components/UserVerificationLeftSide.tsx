import UserNotification from "./UserNotification";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { FC, useEffect, useState } from "react";
import { WorUser } from "../../../features/user/types/woruser.types";
import {
  fetchWorUsers,
  setWorUser,
} from "../../../features/user/redux/worUserSlice";
import {
  fetchDrivingLinces,
  fetchRcDataApi,
} from "../services/docsVerifiedServ";

const UserVerificationLeftSide: FC = () => {
  const { worUsers, worUser } = useSelector(
    (state: RootState) => state.worUser
  );
  const dispatch: AppDispatch = useDispatch();
  const [filterUsers, setFilterUsers] = useState<WorUser[]>([]);

  const handleFilterUsers = (filter: boolean) => {
    const filterUser = worUsers?.filter((user) => user.userVerified === filter);
    setFilterUsers(filterUser);
    dispatch(setWorUser(filterUser[0]));
  };

  const fetchRc = async () => {
    if (
      worUser &&
      !worUser?.services?.[0]?.ownerName &&
      worUser?.services?.[0]?.rcVerificationStatuc === "pending"
    ) {
      console.log("---------------rc -------");

      const rcDetailsResponse = await fetchRcDataApi({
        rcNumber: worUser?.services?.[0]?.rcNumber,
        userId: worUser?._id ?? null,
      });

      if (rcDetailsResponse) {
        dispatch(fetchWorUsers());
      }
    }
  };

  const fetchDl = async () => {
    console.log("dl ---------------------------", worUser);

    if (
      worUser &&
      !worUser?.licenseCardDetails?.name &&
      worUser?.adminDocsVerified?.adminLicenVerified === "pending"
    ) {
      console.log("inside dl-----");

      const dlRes = await fetchDrivingLinces({
        licNume: worUser?.docsNumber.newLicenNumber,
        dob: worUser?.docsNumber?.dob,
        userId: worUser?._id,
      });
      if (dlRes) {
        dispatch(fetchWorUsers());
      }
    }
  };

  const fetchDocsDetailsLeftSideSelectUser = () => {
    fetchRc();
    fetchDl();
  };

  useEffect(() => {
    handleFilterUsers(false);
  }, [worUsers]);

  useEffect(() => {
    fetchDocsDetailsLeftSideSelectUser();
  }, [worUser]);

  return (
    <div className="w-2/5 h-full overflow-hidden">
      <UserNotification handleFilterUsers={handleFilterUsers} />
      <div className="flex flex-col h-[calc(100%-180px)] w-full overflow-y-scroll">
        {filterUsers?.map((each) => (
          <UserCard
            key={each._id}
            _id={each._id}
            name={each.name}
            profilePic={each.profilePic}
            userVerified={each.userVerified}
          />
        ))}
      </div>
    </div>
  );
};

export default UserVerificationLeftSide;
