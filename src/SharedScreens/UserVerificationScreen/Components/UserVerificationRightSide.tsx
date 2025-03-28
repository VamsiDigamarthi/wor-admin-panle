import { useDispatch, useSelector } from "react-redux";
import DocImage from "./DocImage";
import UserDetials from "./UserDetials";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useState } from "react";
import { openCloseModalFunc } from "../../../Redux/modalFeatureSlice";

const UserVerificationRightSide = () => {
  const { worUser } = useSelector((state: RootState) => state.worUser);

  const dispatch: AppDispatch = useDispatch();

  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleDocsPreviewModal = (label: string) => {
    setSelectedLabel(label);
    dispatch(openCloseModalFunc());
  };

  return (
    <div className="w-3/5  pl-5 flex flex-col ">
      <UserDetials
        name={worUser?.name ?? null}
        profilePic={worUser?.profilePic}
        mobile={worUser?.mobile ?? null}
        email={worUser?.email ?? null}
      />
      <div className="flex flex-col gap-4 w-full">
        <h3 className="font-semibold text-lg">Upload Images</h3>
        <div className="w-full flex flex-wrap gap-4">
          <DocImage
            lable="Aadhar / Pan Image"
            img={worUser?.adhar ?? null}
            isVerified={
              worUser?.adminDocsVerified?.adminAadharVerified === "verified"
                ? true
                : false
            }
            handleDocsPreviewModal={() =>
              handleDocsPreviewModal("Aadhar / Pan Image")
            }
            selectedLabel={selectedLabel}
            isDisplayRejectTag={
              worUser?.adminDocsVerified?.adminAadharVerified === "rejected"
                ? true
                : false
            }
          />
          <DocImage
            lable="Aadhar / Pan Image"
            img={worUser?.adharBack ?? null}
            isVerified={
              worUser?.adminDocsVerified?.adminAadharVerified === "verified"
                ? true
                : false
            }
            handleDocsPreviewModal={() =>
              handleDocsPreviewModal("Aadhar / Pan Image")
            }
            selectedLabel={selectedLabel}
            isDisplayRejectTag={
              worUser?.adminDocsVerified?.adminAadharVerified === "rejected"
                ? true
                : false
            }
          />
          <DocImage
            lable="Driving License"
            img={worUser?.license ?? null}
            isVerified={
              worUser?.adminDocsVerified?.adminLicenVerified === "verified"
                ? true
                : false
            }
            handleDocsPreviewModal={() =>
              handleDocsPreviewModal("Driving License")
            }
            selectedLabel={selectedLabel}
            isDisplayRejectTag={
              worUser?.adminDocsVerified?.adminLicenVerified === "rejected"
                ? true
                : false
            }
          />
          <DocImage
            lable="Driving License"
            img={worUser?.licenseBack ?? null}
            isVerified={
              worUser?.adminDocsVerified?.adminLicenVerified === "verified"
                ? true
                : false
            }
            handleDocsPreviewModal={() =>
              handleDocsPreviewModal("Driving License")
            }
            selectedLabel={selectedLabel}
            isDisplayRejectTag={
              worUser?.adminDocsVerified?.adminLicenVerified === "rejected"
                ? true
                : false
            }
          />
          <DocImage
            lable="Vehicle RC"
            img={worUser?.services?.[0]?.rcFrontImage ?? null}
            isVerified={
              worUser?.services?.[0]?.rcVerificationStatuc === "verified"
                ? true
                : false
            }
            handleDocsPreviewModal={() => handleDocsPreviewModal("Vehicle RC")}
            selectedLabel={selectedLabel}
            isDisplayRejectTag={
              worUser?.services?.[0]?.rcVerificationStatuc === "rejected"
                ? true
                : false
            }
          />
          <DocImage
            lable="Vehicle RC"
            img={worUser?.services?.[0]?.rcBackImage ?? null}
            isVerified={
              worUser?.services?.[0]?.rcVerificationStatuc === "verified"
                ? true
                : false
            }
            handleDocsPreviewModal={() => handleDocsPreviewModal("Vehicle RC")}
            selectedLabel={selectedLabel}
            isDisplayRejectTag={
              worUser?.services?.[0]?.rcVerificationStatuc === "rejected"
                ? true
                : false
            }
          />
          <DocImage
            lable="Vehicle Front Images"
            img={worUser?.services?.[0]?.vehicleFrontImage ?? null}
            isVerified={
              worUser?.services?.[0]?.vehicleImageVerification === "verified"
                ? true
                : false
            }
            handleDocsPreviewModal={() =>
              handleDocsPreviewModal("Vehicle Image")
            }
            selectedLabel={selectedLabel}
            isDisplayRejectTag={
              worUser?.services?.[0]?.vehicleImageVerification === "rejected"
                ? true
                : false
            }
          />
          <DocImage
            lable="Vehicle Back Images"
            img={worUser?.services?.[0]?.vehicleBackImage ?? null}
            isVerified={
              worUser?.services?.[0]?.vehicleImageVerification === "verified"
                ? true
                : false
            }
            handleDocsPreviewModal={() =>
              handleDocsPreviewModal("Vehicle Image")
            }
            selectedLabel={selectedLabel}
            isDisplayRejectTag={
              worUser?.services?.[0]?.vehicleImageVerification === "rejected"
                ? true
                : false
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UserVerificationRightSide;
