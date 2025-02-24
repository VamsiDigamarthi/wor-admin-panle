import { FC, useState, useEffect } from "react";
import ModalLayout from "../../../Layout/ModalLayout";
import { useDocsImageCompareModalHook } from "../hooks/DocsImageCompareModal.hook";

import DocsModalLeft from "./DocsModalLeft";
import DocsModalRight from "./DocsModalRight";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

type DocsImageCompareModalType = {
  lable: string | null;
};

const DocsImageCompareModal: FC<DocsImageCompareModalType> = ({ lable }) => {
  const { worUser } = useSelector((state: RootState) => state.worUser);

  const { docImage, handleAcceptTheDocs, handleRejectDocs } =
    useDocsImageCompareModalHook({
      lable,
    });

  const [displayAcceptRejectBtns, setDisplayAcceptRejectBtns] = useState(false);
  const [statusText, setStatusText] = useState("");

  // Effect to handle state update based on 'lable' and worUser changes
  useEffect(() => {
    if (lable === "Vehicle RC") {
      if (
        worUser?.services?.[0]?.rcVerificationStatuc === "verified" ||
        worUser?.services?.[0]?.rcVerificationStatuc === "rejected"
      ) {
        setDisplayAcceptRejectBtns(true);
        setStatusText(worUser?.services?.[0]?.rcVerificationStatuc);
      } else {
        setDisplayAcceptRejectBtns(false);
      }
    } else if (lable === "Driving License") {
      if (
        worUser?.adminDocsVerified?.adminLicenVerified === "verified" ||
        worUser?.adminDocsVerified?.adminLicenVerified === "rejected"
      ) {
        setDisplayAcceptRejectBtns(true);
        setStatusText(worUser?.adminDocsVerified?.adminLicenVerified);
      } else {
        setDisplayAcceptRejectBtns(false);
      }
    } else {
      if (
        worUser?.adminDocsVerified?.adminAadharVerified === "verified" ||
        worUser?.adminDocsVerified?.adminAadharVerified === "rejected"
      ) {
        setDisplayAcceptRejectBtns(true);
        setStatusText(worUser?.adminDocsVerified?.adminAadharVerified);
      } else {
        setDisplayAcceptRejectBtns(false);
      }
    }
  }, [lable, worUser]);

  return (
    <ModalLayout title="Add Employee" width="90%" height="90%">
      <div className="w-full flex gap-6 items-center h-full relative">
        <DocsModalLeft docImage={docImage} lable={lable} />
        <div className="w-[2px] h-full bg-red-200" />
        <DocsModalRight lable={lable} />
        {displayAcceptRejectBtns && (
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.355)" }}
            className="w-full h-full bg-fuchsia-100 absolute top-0 left-0 flex justify-center items-center"
          >
            <h2 className="text-[60px] text-red-800 -rotate-45 font-[600]">
              {statusText}
            </h2>
          </div>
        )}
      </div>
      {!displayAcceptRejectBtns && (
        <div className="absolute flex gap-4 items-center bottom-16 right-24">
          <button
            onClick={handleRejectDocs}
            className="text-white bg-red-500 w-[130px] h-[40px] rounded-md"
          >
            Reject
          </button>
          <button
            onClick={handleAcceptTheDocs}
            className="text-white bg-blue-500 w-[130px] h-[40px] rounded-md"
          >
            Accept
          </button>
        </div>
      )}
    </ModalLayout>
  );
};

export default DocsImageCompareModal;
