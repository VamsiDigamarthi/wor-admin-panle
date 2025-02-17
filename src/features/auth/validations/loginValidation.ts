import { LoginUserData } from "../types/authTypes";

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password validation regex

// const passwordRegex =
//   /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~`-])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?/~`-]{8,}$/;

export const loginValidation = (userData: LoginUserData) => {
  let isValid = true;
  const errorsTemp: LoginUserData = { userName: "", password: "" };

  // Validate email
  if (!emailRegex.test(userData.userName)) {
    errorsTemp.userName = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate password
  if (userData.password === "") {
    errorsTemp.password = "Password field is required.";
    isValid = false;
  }

  // if (!passwordRegex.test(userData.password)) {
  //   errorsTemp.password =
  //     "Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number.";
  //   isValid = false;
  // }

  return {
    status: isValid,
    errMgs: errorsTemp,
  };
};
