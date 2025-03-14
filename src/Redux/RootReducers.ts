import authToken from "../features/auth/Redux/loginSlice";
import profile from "../features/auth/Redux/profileSlice";

import modalSlice from "./modalFeatureSlice";
import worUser from "../features/user/redux/worUserSlice";

import supportChatsList from "../features/Support/redux/supportChatSlice";
import unreadMessages from "../features/Support/redux/unreadMessages";

const RootReducer = {
  authToken,
  profile,
  worUser,
  modalSlice,
  supportChatsList,
  unreadMessages,
};
export default RootReducer;
