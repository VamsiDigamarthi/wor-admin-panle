import { type FC } from "react";
import { Check, CircleX } from "lucide-react";
import { imageUrl } from "../../../Core/url";
import DocsImageCompareModal from "../Modals/DocsImageCompareModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

type DocImageType = {
  lable: string;
  img: string | null;
  isVerified: boolean;
  handleDocsPreviewModal: () => void;
  selectedLabel: string | null;
  isDisplayRejectTag: boolean;
};

const DocImage: FC<DocImageType> = ({
  lable,
  img,
  isVerified,
  handleDocsPreviewModal,
  selectedLabel,
  isDisplayRejectTag = false,
}) => {
  const docImage = `${imageUrl}/${img}`;

  const { isDisplayModal } = useSelector(
    (state: RootState) => state.modalSlice
  );

  return (
    <>
      <div
        onClick={handleDocsPreviewModal} // Pass the label here
        className="w-[300px] p-4 border border-gray-300 rounded-md flex flex-col gap-2 cursor-pointer relative"
      >
        <div className="w-full flex justify-between items-center">
          <h3>{lable}</h3>
          {isVerified ? (
            <Check size={20} className="text-green-500 font-[600]" />
          ) : (
            <CircleX size={20} className="text-red-400" />
          )}
        </div>
        <div className="w-full bg-gray-200 h-[100px] rounded-md">
          <img
            src={docImage}
            alt={lable}
            className="w-full h-full object-contain"
          />
        </div>
        {isDisplayRejectTag && (
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.355)" }}
            className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
          >
            <h2 className="text-[30px] text-red-800 -rotate-45 font-[600]">
              Rejected
            </h2>
          </div>
        )}
      </div>

      {/* Display the modal only if the modal state is true and the label is set */}
      {isDisplayModal && selectedLabel && (
        <DocsImageCompareModal lable={selectedLabel} />
      )}
    </>
  );
};

export default DocImage;
