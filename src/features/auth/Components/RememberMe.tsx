const RememberMe = () => {
  return (
    <div className="flex justify-between items-center w-full py-2">
      <div className="flex gap-2 items-center">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" className="text-gray-600 text-sm">
          Remember Me
        </label>
      </div>
      <p className="text-gray-600 text-sm cursor-pointer">Forgot Password?</p>
    </div>
  );
};

export default RememberMe;
