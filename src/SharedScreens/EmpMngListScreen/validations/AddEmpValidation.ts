import { AddEmployeeType } from "../Hooks/AddEmployeModal.hook";

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password validation regex
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~`-])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?/~`-]{8,}$/;

export const addEmployeeValidation = (userData: AddEmployeeType) => {
  let isValid = true;

  // Errors object to collect error messages for each field
  const errorsTemp: AddEmployeeType = {
    userName: "",
    password: "",
    // Add additional fields for validation
    email: "",
    dob: "",
    role: "",
    userId: "",
  };

  // Validate email
  if (!emailRegex.test(userData.email)) {
    errorsTemp.email = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate password
  if (!passwordRegex.test(userData.password)) {
    errorsTemp.password =
      "Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number.";
    isValid = false;
  }

  // Validate userName
  if (userData.userName.trim() === "") {
    errorsTemp.userName = "User name is required.";
    isValid = false;
  }

  // Validate date of birth (dob)
  if (userData.dob.trim() === "") {
    errorsTemp.dob = "Date of birth is required.";
    isValid = false;
  }

  // Validate role
  if (userData.role.trim() === "") {
    errorsTemp.role = "Role is required.";
    isValid = false;
  }

  // Validate userId
  if (userData.userId.trim() === "") {
    errorsTemp.userId = "User ID is required.";
    isValid = false;
  }

  return {
    status: isValid,
    errMgs: errorsTemp,
  };
};
