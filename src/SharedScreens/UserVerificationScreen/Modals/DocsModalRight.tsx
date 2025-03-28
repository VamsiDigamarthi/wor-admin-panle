import { FC } from "react";
import { useDocsModalRightHook } from "../hooks/DocsModalRight.hook";
import DetailsCard, { DetailsCardType } from "../Components/DetailsCard";

type DocsModalRightType = {
  lable: string | null;
};

const DocsModalRight: FC<DocsModalRightType> = ({ lable }) => {
  const { docsNumber, worUser } = useDocsModalRightHook({ lable });

  const renderDetail = ({ label, value, index }: DetailsCardType) => {
    return value ? (
      <DetailsCard key={index} label={label} value={value} />
    ) : null;
  };

  const aadharCardDetails = worUser?.aadharCardDetails;
  const rcDetails = worUser?.services?.[0];
  const licenseDetails = worUser?.licenseCardDetails;
  const panDetails = worUser?.panCardDetails;

  const fieldsByLabel: {
    [key: string]: { label: string; value: string | null }[];
  } = {
    "Aadhar / Pan Image": [
      {
        label: "Name",
        value: aadharCardDetails?.fullName
          ? aadharCardDetails?.fullName
          : panDetails
          ? panDetails?.name
          : null,
      },
      { label: "DOB", value: aadharCardDetails?.dob ?? null },
      { label: "Gender", value: aadharCardDetails?.gender ?? null },
      {
        label: "Aadhar Number",
        value: aadharCardDetails?.aadhaarNumber ?? null,
      },
      { label: "Pan Numer", value: panDetails ? panDetails?.pan : null },

      { label: "Care-Of", value: aadharCardDetails?.careOf ?? null },
      { label: "Country", value: aadharCardDetails?.address?.country ?? null },
      { label: "Dist", value: aadharCardDetails?.address?.dist ?? null },
      { label: "State", value: aadharCardDetails?.address?.state ?? null },
      { label: "Mandal", value: aadharCardDetails?.address?.mandal ?? null },
      { label: "Village", value: aadharCardDetails?.address?.village ?? null },
      { label: "House", value: aadharCardDetails?.address?.house ?? null },
    ],
    "Vehicle RC": [
      { label: "Fit Up To", value: rcDetails?.fitUpTo ?? null },
      { label: "Fuel Type", value: rcDetails?.fuelType ?? null },
      {
        label: "Maker Description",
        value: rcDetails?.makerDescription ?? null,
      },
      { label: "Maker Model", value: rcDetails?.makerModel ?? null },
      { label: "Owner Name", value: rcDetails?.ownerName ?? null },
      {
        label: "Permanent Address",
        value: rcDetails?.permanentAddress ?? null,
      },
      { label: "Present Address", value: rcDetails?.presentAddress ?? null },
      { label: "Registered At", value: rcDetails?.registeredAt ?? null },
    ],
    "Driving License": [
      { label: "License Number", value: licenseDetails?.licenseNumber ?? null },
      { label: "State", value: licenseDetails?.state ?? null },
      { label: "Name", value: licenseDetails?.name ?? null },
      {
        label: "Permanent Address",
        value: licenseDetails?.permanentAddress ?? null,
      },
      {
        label: "Temporary Address",
        value: licenseDetails?.temporaryAddress ?? null,
      },
      { label: "DOB", value: licenseDetails?.dob ?? null },
      { label: "Gender", value: licenseDetails?.gender ?? null },
    ],
  };

  const detailsToShow = fieldsByLabel[lable || ""] || [];

  return (
    <div className="w-[60%] h-full">
      <div className="w-full flex justify-between items-center">
        {renderDetail({ label: lable, value: docsNumber?.number })}
        {docsNumber?.dob &&
          renderDetail({ label: "DOB", value: docsNumber?.dob })}
      </div>
      <div className="w-full h-[2px] bg-red-200 mb-4" />
      <div className="w-full h-[calc(100%-30px)] overflow-y-scroll flex flex-col gap-1">
        {detailsToShow.map((detail, index) =>
          renderDetail({ label: detail.label, value: detail.value, index })
        )}
      </div>
    </div>
  );
};

export default DocsModalRight;
