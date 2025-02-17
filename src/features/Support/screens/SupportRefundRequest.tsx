import { X } from "lucide-react";
import DownloadPdf from "../../../SharedComponents/DownloadPdf";
import Table from "../../../SharedComponents/Table/Table";
import RefundRequestFilter from "../components/RefundRequestFilter";
import SupportPercentageCard from "../components/SupportPercentageCard";
import UserImage from "../../../SharedScreens/UserVerificationScreen/Components/UserImage";
import { type FC } from "react";
import TwoBtnCombine from "../../../SharedComponents/TwoBtnCombine";

const SupportRefundRequest = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <DownloadPdf
        title="Refund Request"
        subTitle="Ticket Management of User/Rider"
        isDisplayDownPdfBtn={false}
      />
      <div className="w-full flex flex-wrap gap-6 justify-between items-center">
        <SupportPercentageCard />
        <SupportPercentageCard />
        <SupportPercentageCard />
        <SupportPercentageCard />
      </div>
      <div className="w-full flex gap-4 items-start">
        <div className="w-[70%] flex flex-col gap-4">
          <RefundRequestFilter />
          <Table isDisplayFilters={false} height="640px" />
        </div>
        <div className="w-[30%] bg-white rounded-md shadow-custom px-4 py-6 flex flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-lg font-semibold">Request Details</h2>
            <X />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base text-gray-400 font-medium">User Details</p>
            <UserImage />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-base text-gray-800 font-medium border-b">
              Ride Details
            </p>
            <RideDetailsItem leftText="Ride Id" rightText="TS-987" />
            <RideDetailsItem leftText="Date & Time" rightText="TS-987" />
            <RideDetailsItem leftText="Paymnet Method" rightText="TS-987" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-base text-gray-800 font-medium border-b">
              Refund Information
            </p>
            <RideDetailsItem leftText="Amount Charged" rightText="TS-987" />
            <RideDetailsItem leftText="Refund Amount" rightText="TS-987" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-base text-gray-800 font-medium border-b">
              Reasong
            </p>
            <p className="text-sm text-gray-400 font-medium">
              Ride canceled by captain, but the amount was deducted from my
              account.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-base text-gray-800 font-medium border-b">
              Attechment
            </p>
            <div className="flex justify-start gap-3 items-center w-full">
              <div className="w-[120px] h-[70px] bg-gray-300 rounded-md flex justify-center items-center">
                <p>Screen Shoot</p>
              </div>
              <div className="w-[120px] h-[70px] bg-gray-300 rounded-md flex justify-center items-center">
                <p>Receipt</p>
              </div>
            </div>
          </div>
          <TwoBtnCombine
            firstText="Approved Refund"
            secondText="Reject Request"
          />
          <button className="w-full border py-2 rounded-md">
            Escalate to Super Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportRefundRequest;

type RideDetailsItemType = {
  leftText: string;
  rightText: string;
};
const RideDetailsItem: FC<RideDetailsItemType> = ({ leftText, rightText }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="text-sm text-gray-400 font-medium">{leftText}</p>
      <p className="text-base text-black font-semibold">{rightText}</p>
    </div>
  );
};
