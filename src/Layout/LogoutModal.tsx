import React from "react";
import ModalLayout from "./ModalLayout";
import { AppDispatch } from "../Redux/store";
import { useDispatch } from "react-redux";
import { openCloseModalFunc } from "../Redux/modalFeatureSlice";
import { useNavigate } from "react-router-dom";

const LogoutModal = () => {
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();
  const handleLogoutModal = () => {
    dispatch(openCloseModalFunc());
  };

  const handelLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("worUser");
    localStorage.removeItem("role");
    // localStorage.r;

    window.location.href = "/login";
    // return navigate("/login");
  };

  return (
    <ModalLayout title="" width="30%" height="35%">
      <div className="flex flex-col gap-6 items-center justify-center">
        <p>Are you sure want to logout</p>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handelLogout}
            className="text-white px-8 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
          >
            Logout
          </button>
          <button
            onClick={handleLogoutModal}
            className="text-white px-8 py-2 rounded-md bg-gray-500 hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default LogoutModal;
