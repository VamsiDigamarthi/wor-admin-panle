import UserNotification from "./UserNotification";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { FC, useEffect, useState } from "react";
import { WorUser } from "../../../features/user/types/woruser.types";
import { setWorUser } from "../../../features/user/redux/worUserSlice";

const UserVerificationLeftSide: FC = () => {
  const { worUsers } = useSelector((state: RootState) => state.worUser);
  const dispatch: AppDispatch = useDispatch();
  const [filterUsers, setFilterUsers] = useState<WorUser[]>([]);

  const handleFilterUsers = (filter: boolean) => {
    const filterUser = worUsers?.filter((user) => user.userVerified === filter);
    setFilterUsers(filterUser);
    dispatch(setWorUser(filterUser[0]));
  };

  useEffect(() => {
    handleFilterUsers(false);
  }, [worUsers]);

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
