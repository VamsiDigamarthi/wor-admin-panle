import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
import {
  fetchDrivingLinces,
  fetchRcDataApi,
} from "../services/docsVerifiedServ";
import { fetchWorUsers } from "../../../features/user/redux/worUserSlice";

export const useDocsModalRightHook = ({ lable }: { lable: string | null }) => {
  const { worUser } = useSelector((state: RootState) => state.worUser);
  const dispatch: AppDispatch = useDispatch();

  const [docsNumber, setDocsNumber] = useState<{
    number: string;
    dob?: string;
  }>({ number: "", dob: "" });

  // const aadharCardDetails = () => {};
  const rcCardDetails = async () => {
    // if (worUser && !worUser?.services?.[0]?.ownerName) {
    //   console.log("---------------rc -------");
    //   const rcDetailsResponse = await fetchRcDataApi({
    //     rcNumber: worUser?.services?.[0]?.rcNumber,
    //     userId: worUser?._id ?? null,
    //   });
    //   if (rcDetailsResponse) {
    //     dispatch(fetchWorUsers());
    //   }
    // }
  };

  const dlDetails = async () => {
    if (
      worUser &&
      !worUser?.licenseCardDetails?.name &&
      (worUser?.adminDocsVerified?.adminLicenVerified === "rejected" ||
        worUser?.adminDocsVerified?.adminLicenVerified === "verified")
    ) {
      const dlRes = await fetchDrivingLinces({
        licNume: worUser?.docsNumber.newLicenNumber,
        dob: worUser?.docsNumber?.dob,
        userId: worUser?._id,
      });
      if (dlRes) {
        dispatch(fetchWorUsers());
      }
    }
  };

  const filterDocsNumber = () => {
    switch (lable) {
      case "Aadhar / Pan Image":
        setDocsNumber({
          number: worUser?.docsNumber?.newAadharNumber || "",
        });
        // aadharCardDetails();
        break;
      case "Driving License":
        setDocsNumber({
          number: worUser?.docsNumber?.newLicenNumber || "",
          dob: worUser?.docsNumber?.dob || "",
        });
        dlDetails();
        break;
      case "Vehicle RC":
        setDocsNumber({
          number: worUser?.services?.[0]?.rcNumber || "",
        });
        rcCardDetails();
        break;
      default:
        setDocsNumber({
          number: "",
          dob: "",
        });
    }
  };

  useEffect(() => {
    filterDocsNumber();
  }, [lable]);

  return { docsNumber, worUser };
};
