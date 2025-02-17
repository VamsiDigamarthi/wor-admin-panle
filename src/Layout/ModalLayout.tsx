import { type FC, type ReactNode } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { openCloseModalFunc } from "../Redux/modalFeatureSlice";
import { X } from "lucide-react";

type ModalTemplateProps = {
  title: string; // Title must be a string
  children: ReactNode; // children can be any valid React node
  width?: string;
  height?: string;
  clearFormData?: () => void; //
};

const ModalLayout: FC<ModalTemplateProps> = ({
  width,
  title,
  children,
  height,
  clearFormData,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(openCloseModalFunc());
    if (clearFormData) {
      clearFormData(); // Call clearFormData only if it's provided
    }
  };

  return (
    <div
      className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.555)" }}
    >
      <div
        style={{ width, height }}
        className="w-[90%] h-[90%] shadow-custom bg-white p-12 flex flex-col gap-4 rounded-md"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-[600]">{title}</h2>
          <button onClick={onCloseModal}>
            <X size={25} />
          </button>
        </div>
        <div className="w-full h-[95%] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
