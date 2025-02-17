import authToken from "../features/auth/Redux/loginSlice";
import profile from "../features/auth/Redux/profileSlice";

import modalSlice from "./modalFeatureSlice";
import worUser from "../features/user/redux/worUserSlice";

const RootReducer = {
  authToken,
  profile,
  worUser,
  modalSlice,
};
export default RootReducer;
