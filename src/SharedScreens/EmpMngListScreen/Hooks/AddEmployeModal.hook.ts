import { type ChangeEvent, useState } from "react";
import { addEmployeeValidation } from "../validations/AddEmpValidation";
import { addEmployeeApi } from "../services/addEmpServices";
import { openCloseModalFunc } from "../../../Redux/modalFeatureSlice";
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";

export type AddEmployeeType = {
  _id?: string;
  userName: string;
  dob: string;
  email: string;
  role: string;
  userId: string;
  password: string;
};

export const useAddEmployeModalHook = () => {
  const dispatch: AppDispatch = useDispatch();

  const [employeeData, setEmployeeData] = useState<AddEmployeeType>({
    userName: "",
    dob: "",
    email: "",
    role: "",
    userId: "",
    password: "",
  });

  const [errors, setErrors] = useState<AddEmployeeType>({
    userName: "",
    dob: "",
    email: "",
    role: "",
    userId: "",
    password: "",
  });

  const roles = [
    { value: "support", label: "Support Team" },
    { value: "monitoring", label: "Monitoring Team" },
    { value: "verificationTeam", label: "Verification Team" },
  ];

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleClearForm = () => {
    setEmployeeData({
      userName: "",
      dob: "",
      email: "",
      role: "",
      userId: "",
      password: "",
    });
  };

  const handleSubmitForm = async () => {
    const validation = addEmployeeValidation(employeeData);
    if (validation.status) {
      const employeeStatus = await addEmployeeApi(employeeData);
      if (employeeStatus) {
        handleClearForm();
        dispatch(openCloseModalFunc());
      } else {
        console.log("Error adding employee:", employeeStatus);
      }
    } else {
      setErrors(validation.errMgs);
      console.log("Validation failed:", validation.errMgs);
    }
  };

  return {
    handleInputChange,
    employeeData,
    errors,
    roles,
    handleSubmitForm,
    handleClearForm,
  };
};
