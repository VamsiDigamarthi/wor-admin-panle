import "./Error.css";
const Erro = ({ error }: { error: string }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full min-h-[40vh]">
      <h2 className="text-red-600 text-[38px] font-semibold font-[Dancing Script]">
        {error}
      </h2>
    </div>
  );
};

export default Erro;
