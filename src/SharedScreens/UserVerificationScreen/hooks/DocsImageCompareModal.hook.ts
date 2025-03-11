import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useCallback, useEffect, useState } from "react";
import { handleRejectDocsApi } from "../services/docsVerifiedServ";
import { openCloseModalFunc } from "../../../Redux/modalFeatureSlice";
import {
  fetchWorUsers,
  setWorUser,
} from "../../../features/user/redux/worUserSlice";

export const useDocsImageCompareModalHook = ({
  lable,
}: {
  lable: string | null;
}) => {
  const { worUser } = useSelector((state: RootState) => state.worUser);

  const dispatch: AppDispatch = useDispatch();

  const [docImage, setDocImage] = useState<{
    frontImage: string | null;
    backImage: string | null;
    leftImage?: string | null;
    rightImage?: string | null;
    helmetImage?: string | null;
    numberImage?: string | null;
  }>({
    frontImage: "",
    backImage: "",
    leftImage: "",
    rightImage: "",
    helmetImage: "",
    numberImage: "",
  });

  console.log(
    "worUser?.services?.[0]?.rcBackImage",
    worUser?.services?.[0]?.rcBackImage
  );

  const handleFilterImages = useCallback(() => {
    switch (lable) {
      case "Aadhar / Pan Image":
        setDocImage({
          frontImage: worUser?.adhar ?? null,
          backImage: worUser?.adharBack ?? null,
        });
        break;
      case "Driving License":
        setDocImage({
          frontImage: worUser?.license ?? null,
          backImage: worUser?.licenseBack ?? null,
        });
        break;
      case "Vehicle RC":
        setDocImage({
          frontImage: worUser?.services?.[0]?.rcFrontImage ?? null,
          backImage: worUser?.services?.[0]?.rcBackImage ?? null,
        });
        break;

      case "Vehicle Image":
        setDocImage({
          frontImage: worUser?.services?.[0]?.vehicleFrontImage ?? null,
          backImage: worUser?.services?.[0]?.vehicleBackImage ?? null,
          leftImage: worUser?.services?.[0]?.vehicleLeftImage ?? null,

          rightImage: worUser?.services?.[0]?.vehicleRightImage ?? null,

          helmetImage: worUser?.services?.[0]?.vehicleHelmetImage ?? null,
          numberImage: worUser?.services?.[0]?.vehicleNumberPlate ?? null,
        });
        break;
      default:
        setDocImage({
          frontImage: "",
          backImage: "",
        });
    }
  }, [lable, worUser]);

  useEffect(() => {
    handleFilterImages();
  }, [handleFilterImages, lable, worUser]);

  const handleAcceptTheDocs = async () => {
    if (!worUser?._id) {
      console.error("User ID is missing.");
      return;
    }

    const docsType =
      lable === "Aadhar / Pan Image"
        ? "aadhar"
        : lable === "Driving License"
        ? "dl"
        : lable === "Vehicle Image"
        ? "Vehicle Image"
        : "RC";

    const data = await handleRejectDocsApi({
      id: worUser?._id,
      docsType,
      status: "verified",
    });
    if (data) {
      //
      dispatch(openCloseModalFunc());

      if (docsType === "aadhar") {
        worUser.adminDocsVerified.adminAadharVerified = "verified";
      } else if (docsType === "dl") {
        worUser.adminDocsVerified.adminLicenVerified = "verified";
      } else {
        if (worUser?.services && worUser.services[0]) {
          worUser.services[0].rcVerificationStatuc = "verified";
        }
        // worUser.services[0].rcVerificationStatuc = "verified";
      }

      dispatch(setWorUser(worUser));
    }
  };

  const handleRejectDocs = async () => {
    if (!worUser?._id) {
      console.error("User ID is missing.");
      return;
    }

    const docsType =
      lable === "Aadhar / Pan Image"
        ? "aadhar"
        : lable === "Driving License"
        ? "dl"
        : lable === "Vehicle Image"
        ? "Vehicle Image"
        : "RC";

    const data = await handleRejectDocsApi({
      id: worUser?._id,
      docsType,
      status: "rejected",
    });
    if (data) {
      dispatch(fetchWorUsers());
      dispatch(openCloseModalFunc());

      if (docsType === "aadhar") {
        worUser.adminDocsVerified.adminAadharVerified = "rejected";
      } else if (docsType === "dl") {
        worUser.adminDocsVerified.adminLicenVerified = "rejected";
      } else {
        if (worUser?.services && worUser.services?.[0]) {
          worUser.services[0].rcVerificationStatuc = "rejected";
        }
      }
      dispatch(setWorUser(worUser));
    }
  };

  return {
    docImage,
    handleAcceptTheDocs,
    handleRejectDocs,
  };
};
