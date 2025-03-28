import { ChangeEvent, useEffect, useState } from "react";
import { LoginUserData } from "../types/authTypes";
// import { loginApi } from "../Services/loginServices";
import { loginValidation } from "../validations/loginValidation";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/loginSlice";
import { useNavigate } from "react-router-dom";

export const useLogicScreenHook = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, token, error, role } = useSelector(
    (state: RootState) => state.authToken
  );

  const [userData, setUserData] = useState<LoginUserData>({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitLogic = async () => {
    const validation = loginValidation(userData);
    if (validation.status) {
      setErrors({
        userName: "",
        password: "",
      });
      // const loginStatus = await loginApi(userData);
      dispatch(userLogin({ userData }));
    } else {
      setErrors(validation.errMgs);
      console.log("Validation failed:", validation.errMgs);
    }
  };

  useEffect(() => {
    if (token) {
      console.log("role", role);

      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "manager") {
        navigate("/user-verification");
      } else if (role === "superadmin") {
        navigate("/user-verification");
      } else if (role === "support") {
        navigate("/support-dashboard");
      }
      //  else {
      //   navigate("/default-dashboard");
      // }
    }
  }, [token, role, navigate]);

  return {
    handleSubmitLogic,
    handleInputChange,
    userData,
    loading,
    errors,
    error,
  };
};
