import { FC, type ReactNode } from "react";
import logo from "../assets/images/wor-logo.png";
import authImage from "../assets/images/login-img.png";

type AuthLayoutTypes = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutTypes> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col px-6">
      <div className="w-full h-[80px] flex justify-start items-center">
        <img className="w-[100px]" src={logo} alt="logo" />
      </div>
      <div className="flex justify-around gap-8 items-center w-full h-[calc(100%-80px)]">
        <div>{children}</div>
        <img src={authImage} className="w-1/3" alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
