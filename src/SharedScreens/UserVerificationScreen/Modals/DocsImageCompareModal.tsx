import { FC, useState, useEffect } from "react";
import ModalLayout from "../../../Layout/ModalLayout";
import { useDocsImageCompareModalHook } from "../hooks/DocsImageCompareModal.hook";

import DocsModalLeft from "./DocsModalLeft";
import DocsModalRight from "./DocsModalRight";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import VehicleImageCard from "../Components/VehicleImageCard";
import Button from "../../../SharedComponents/Button";
import { BeatLoader } from "react-spinners";

type DocsImageCompareModalType = {
  lable: string | null;
};

const DocsImageCompareModal: FC<DocsImageCompareModalType> = ({ lable }) => {
  const { worUser } = useSelector((state: RootState) => state.worUser);

  const {
    docImage,
    handleAcceptTheDocs,
    handleRejectDocs,
    fetchSurePassData,
    dlChangDataModal,
    setDob,
    dob,
    fetchDlSurePassData,
    isLoading,
  } = useDocsImageCompareModalHook({
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
    } else if (lable === "Vehicle Image") {
      if (
        worUser?.services?.[0]?.vehicleImageVerification === "verified" ||
        worUser?.services?.[0]?.vehicleImageVerification === "rejected"
      ) {
        setDisplayAcceptRejectBtns(true);
        setStatusText(worUser?.services?.[0]?.vehicleImageVerification);
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
    <>
      <ModalLayout title="Verified Employee" width="90%" height="90%">
        <div className="w-full flex gap-6 items-center h-full relative">
          {lable === "Vehicle Image" ? (
            <VehicleImageCard docImage={docImage} lable={lable} />
          ) : (
            <>
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
            </>
          )}
        </div>
        {!displayAcceptRejectBtns && (
          <div className="absolute flex gap-4 items-center bottom-16 right-24">
            <button
              onClick={fetchSurePassData}
              className="text-white bg-lime-400 w-[130px] h-[40px] rounded-md"
            >
              {isLoading ? <BeatLoader color="#fff" size={10} /> : "Sure Pass"}
            </button>
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
      {dlChangDataModal && (
        <ModalLayout title="Check DL Details " width="50%" height="40%">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">DL Number</p>

                <p className="text-lg font-semibold">
                  {worUser?.docsNumber?.newLicenNumber}
                </p>
              </div>
              <div>
                <p className="text-sm">DOB</p>
                <input
                  value={dob}
                  className="border border-gray-400"
                  onChange={(event) => setDob(event.target.value)}
                />
                {/* <p className="text-lg font-semibold">
                {worUser?.docsNumber?.dob}
                </p> */}
              </div>
            </div>
            <Button text="Submit" onClick={fetchDlSurePassData} />
          </div>
        </ModalLayout>
      )}
    </>
  );
};

export default DocsImageCompareModal;
