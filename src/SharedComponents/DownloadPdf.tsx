import { FC } from "react";
import IconButton from "./IconButton";
import { CheckCheck, CirclePlus, Download } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { openCloseModalFunc } from "../Redux/modalFeatureSlice";

type DownloadPdfTypes = {
  title: string;
  subTitle: string;
  isDisplayDownPdfBtn?: boolean;
  isDisplayAddEmployeBtn?: boolean;
  isDisplayMarkSdReadBtn?: boolean;
};

const DownloadPdf: FC<DownloadPdfTypes> = ({
  title,
  subTitle,
  isDisplayAddEmployeBtn = false,
  isDisplayMarkSdReadBtn = false,
  isDisplayDownPdfBtn = true,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const handleDisplayAddEmployeModal = () => {
    dispatch(openCloseModalFunc());
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl text-primary font-[600]">{title}</h2>
        <p className="text-base text-grayText">{subTitle}</p>
      </div>
      <div className="flex gap-3">
        {!isDisplayMarkSdReadBtn && isDisplayDownPdfBtn && (
          <IconButton title="Download PDF" onClick={() => {}}>
            <Download size={20} className="text-grayText" />
          </IconButton>
        )}
        {isDisplayAddEmployeBtn && (
          <IconButton
            title="Add Employee"
            onClick={handleDisplayAddEmployeModal}
          >
            <CirclePlus size={20} className="text-grayText" />
          </IconButton>
        )}
        {isDisplayMarkSdReadBtn && (
          <IconButton title="Mark As Read" onClick={() => {}}>
            <CheckCheck size={20} className="text-grayText" />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default DownloadPdf;
