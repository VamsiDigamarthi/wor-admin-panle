import axios from "axios";
import { API } from "../../../Core/url";
import { errorMsgApi } from "../../../Core/toast";

const surePassApiKay =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc0MTU5NzI0OCwianRpIjoiNjcwNGEyZGItM2FlYi00MWQyLThjYjQtODU4NGM1Mjg0NDUzIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2Lm51aHZpbjAyQHN1cmVwYXNzLmlvIiwibmJmIjoxNzQxNTk3MjQ4LCJleHAiOjE3NDI0NjEyNDgsImVtYWlsIjoibnVodmluMDJAc3VyZXBhc3MuaW8iLCJ0ZW5hbnRfaWQiOiJtYWluIiwidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInVzZXIiXX19.GwWgvk34txmEMdoS5I43NoU3-_FMpY0nla8NFtnm484";

export const handleRejectDocsApi = async ({
  id,
  docsType,
  status,
}: {
  id: string | null;
  docsType: string | null;
  status: string;
}) => {
  try {
    console.log("reject apis");
    await API.patch("/manager/verified-captains", { id, status, docsType });
    console.log("reject apis after");

    return true;
  } catch (error) {
    console.log("Error updated docs status", error);
    return false;
  }
};

// pan card details

// const submitSurepassToOwnServer = async ({ data, token }) => {
//   try {
//     await API.patch(
//       "/captain/pan-updated",
//       { data },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     console.log("Error updated docs status", error);
//     return false;
//   }
// };

// export const panCardCheck = async ({ token, panNumber }) => {
//   try {
//     const response = await axios.post(
//       "https://sandbox.surepass.io/api/v1/pan/pan",
//       {
//         id_number: panNumber,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${surePassApiKay}`,
//         },
//       }
//     );
//     console.log("pan apis ");
//     await submitSurepassToOwnServer({ data: response?.data?.data, token });
//     return true;
//   } catch (error) {
//     errorMsgApi(error?.response?.data?.message || "Pan  verification Failed");
//     return false;
//   }
// };

// --------------------------------- rc

type somethingRcDataType = {
  data: {
    rc_number: string;
    fit_up_to: string;
    registration_date: string;
    owner_name: string;
    father_name: string;
    present_address: string;
    permanent_address: string;
    maker_description: string;
    maker_model: string;
    fuel_type: string;
    color: string;
    registered_at: string;
  };
  userId: string;
  rcNumber: string;
};

async function somethingRcData({
  data,
  userId,
  rcNumber,
}: somethingRcDataType) {
  console.log("own server fetch");

  try {
    await API.patch(`/captain/rc-details-update/${userId}/${rcNumber}`, {
      data,
    });
    return true;
  } catch (error) {
    console.log("Error updated docs status", error);
    return false;
  }
}

export const fetchRcDataApi = async ({
  userId,
  rcNumber,
}: {
  userId: string;
  rcNumber: string;
}) => {
  console.log(rcNumber);
  console.log(userId);

  try {
    const response = await axios.post(
      "https://sandbox.surepass.io/api/v1/rc/rc-full",
      {
        id_number: rcNumber,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${surePassApiKay}`,
        },
      }
    );

    // return {
    //   rcDetails: {
    //     number: response.data?.data?.data?.rc_number,
    //     fitUpTo: response.data?.data?.data?.fit_up_to,
    //     registrationDate: response.data?.data?.data?.registration_date,
    //     ownerName: response.data?.data?.data?.owner_name,
    //     fatherName: response.data?.data?.data?.father_name,
    //     presentAddress: response.data?.data?.data?.present_address,
    //     permanentAddress: response.data?.data?.data?.permanent_address,
    //     makerDescription: response.data?.data?.data?.maker_description,
    //     makerModel: response.data?.data?.data?.maker_model,
    //     fuelType: response.data?.data?.data?.fuel_type,
    //     color: response.data?.data?.data?.color,
    //     registeredAt: response.data?.data?.data?.registered_at,
    //   },
    // };

    const data = await somethingRcData({
      data: response.data?.data,
      userId,
      rcNumber,
    });

    if (data) {
      return true;
    }
    // errorMsgApi("failde to upload RC Details to Wor Server");
  } catch (error) {
    // console.log(error?.response?.data?.message, "------------------");

    errorMsgApi(error?.response?.data?.message || "failde to upload RC Number");
    return false;
  }
};

// -------------------------- lin

async function somethingLicenseData({ data, userId }) {
  try {
    await API.patch(`/captain/lince-details-update/${userId}`, { data });
    return true;
  } catch (error) {
    console.log("Error updated docs status", error);
    return false;
  }
}

export const fetchDrivingLinces = async ({
  licNume,
  dob,
  userId,
}: {
  licNume: string | null;
  dob: string | null;
  userId: string | null;
}) => {
  try {
    console.log(licNume);
    console.log(dob);

    const response = await axios.post(
      "https://sandbox.surepass.io/api/v1/driving-license/driving-license",
      {
        id_number: licNume,
        dob: dob,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${surePassApiKay}`,
        },
      }
    );

    console.log("bofere own server", response.data?.data);

    await somethingLicenseData({ data: response.data?.data, userId });

    return true;
  } catch (error) {
    errorMsgApi(error?.response?.data?.message || "failde to upload RC Number");
    return false;
  }
};

// captain verification

export const captainVerificationApi = async ({
  captainId,
  service,
}: {
  captainId: string;
  service: string;
}) => {
  try {
    await API.patch(`/admin/captain-verified/${captainId}`, { service });
    return true;
  } catch (error) {
    console.log("Error updated docs status", error);
    return false;
  }
};
