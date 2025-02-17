import AuthLayout from "../../../Layout/AuthLayout";
import Button from "../../../SharedComponents/Button";
import Input from "../Components/Input";
import RememberMe from "../Components/RememberMe";
import { useLogicScreenHook } from "../Hooks/LoginScreen.hook";

const Login = () => {
  const {
    handleSubmitLogic,
    handleInputChange,
    userData,
    loading,
    errors,
    error,
  } = useLogicScreenHook();

  return (
    <AuthLayout>
      <div className="w-full flex flex-col gap-2 shadow-custom rounded-md px-8 py-8">
        <p className="text-md text-primary">Welcome !</p>
        <h2 className="text-2xl text-primary font-[600]">Sign in to</h2>
        <Input
          label="User Name"
          type="text"
          name="userName"
          value={userData.userName}
          onChange={handleInputChange}
          placeholder="Enter your username"
          isValid={errors?.userName ? errors?.userName : false}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          isValid={errors?.password ? errors?.password : false}
        />
        <RememberMe />
        {error && <p className="text-red-400 font-medium text-sm">{error}</p>}
        <Button text="Login" onClick={handleSubmitLogic} isLoading={loading} />
      </div>
    </AuthLayout>
  );
};

export default Login;
