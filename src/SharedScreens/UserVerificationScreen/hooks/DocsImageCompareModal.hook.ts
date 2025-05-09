import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useCallback, useEffect, useState } from "react";
import {
  fetchDrivingLinces,
  fetchPanDetailsFromsurepass,
  fetchRcDataApi,
  handleRejectDocsApi,
} from "../services/docsVerifiedServ";
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

  const [dlChangDataModal, setDlChangeDataModal] = useState(false);
  const [dob, setDob] = useState(worUser?.docsNumber?.dob ?? "");

  const dispatch: AppDispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

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

  // console.log(
  //   "worUser?.services?.[0]?.rcBackImage",
  //   worUser?.services?.[0]?.rcBackImage
  // );

  const returnDcsType = (lable: string | null) => {
    return lable === "Aadhar / Pan Image"
      ? "aadhar"
      : lable === "Driving License"
      ? "dl"
      : lable === "Vehicle Image"
      ? "Vehicle Image"
      : "RC";
  };

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

    const docsType = returnDcsType(lable);
    const data = await handleRejectDocsApi({
      id: worUser?._id,
      docsType,
      status: "verified",
    });
    if (data) {
      //
      dispatch(fetchWorUsers());
      dispatch(openCloseModalFunc());
    }
  };

  const handleRejectDocs = async () => {
    if (!worUser?._id) {
      console.error("User ID is missing.");
      return;
    }

    const docsType = returnDcsType(lable);
    const data = await handleRejectDocsApi({
      id: worUser?._id,
      docsType,
      status: "rejected",
    });
    if (data) {
      dispatch(fetchWorUsers());
      dispatch(openCloseModalFunc());
    }
  };

  const fetchSurePassData = async () => {
    const docsType = returnDcsType(lable);
    if (docsType === "dl") {
      setDlChangeDataModal(true);
    } else if (docsType === "RC") {
      console.log("worUser", worUser);

      if (
        worUser &&
        !worUser?.services?.[0]?.ownerName &&
        worUser?.services?.[0]?.rcVerificationStatuc === "pending"
      ) {
        setIsLoading(true);
        const rcDetailsResponse = await fetchRcDataApi({
          rcNumber: worUser?.services?.[0]?.rcNumber,
          userId: worUser?._id ?? null,
        });
        setIsLoading(false);

        if (rcDetailsResponse) {
          dispatch(fetchWorUsers());
        }
      }
    } else {
      // fetch pan details
      worUser?.docsNumber?.newAadharNumber?.length === 10 &&
        fetcPanDetailsFromSurepass({
          panNumber: worUser?.docsNumber?.newAadharNumber,
        });
    }
  };

  // PAN DETAILS FETCH
  const fetcPanDetailsFromSurepass = async ({
    panNumber,
  }: {
    panNumber: string;
  }) => {
    setIsLoading(true);

    const data = await fetchPanDetailsFromsurepass({
      panNumber: panNumber,
      userId: worUser?._id ?? "",
    });

    setIsLoading(false);
    if (data) {
      dispatch(fetchWorUsers());
    }
  };

  const fetchDlSurePassData = async () => {
    if (
      worUser &&
      !worUser?.licenseCardDetails?.name &&
      worUser?.adminDocsVerified?.adminLicenVerified === "pending"
    ) {
      setIsLoading(true);
      const dlRes = await fetchDrivingLinces({
        licNume: worUser?.docsNumber.newLicenNumber,
        dob: dob,
        userId: worUser?._id,
      });
      setIsLoading(false);
      if (dlRes) {
        setDlChangeDataModal(false);
        dispatch(fetchWorUsers());
      }
    }
  };

  return {
    docImage,
    handleAcceptTheDocs,
    handleRejectDocs,
    fetchSurePassData,
    dlChangDataModal,
    setDob,
    dob,
    fetchDlSurePassData,
    isLoading,
  };
};
