const Invoices = () => {
  return (
    <div className="w-full flex items-center ">
      <div className="w-[85%] flex items-center gap-3">
        <div className="w-[60px] h-[60px] bg-red-300 rounded-md flex justify-center items-center"></div>
        <div>
          <h3 className="text-lg text-gray-400 font-semibold">#captain name</h3>
          <p className="text-base text-[#718EBF] font-medium">5h ago</p>
        </div>
      </div>
      <p className="text-base font-medium text-[#718EBF]">₹ 78</p>
    </div>
  );
};

export default Invoices;
