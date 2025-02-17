import DownloadPdf from "../../../SharedComponents/DownloadPdf";
import SearchCard from "../../../SharedComponents/Search";
import Table from "../../../SharedComponents/Table/Table";
import UserImage from "../../../SharedScreens/UserVerificationScreen/Components/UserImage";
import SelectWithoutLabel from "../components/SelectWithoutLabel";
import Image from "../../../assets/images/image-imge.png";
import { Download } from "lucide-react";
const SupportTicketManagementScreen = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <DownloadPdf
        title="Ticket Management"
        subTitle="Ticket Management of User/Rider"
        isDisplayDownPdfBtn={false}
      />
      <div className="w-full p-4 bg-white rounded-md shadow-custom flex gap-4 items-center flex-wrap justify-center">
        <SearchCard height="45px" width="300px" />
        <SelectWithoutLabel />
        <SelectWithoutLabel />
        <SelectWithoutLabel />
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <Table isDisplayFilters={false} height="380px" />
        </div>
        <div className="w-[30%] h-[380px] py-4 bg-white shadow-custom rounded-lg p-4 flex flex-col gap-6">
          <h2 className="text-lg font-[600] border-b border-b-gray-300">
            Ticket Details
          </h2>
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium">User Details</p>
            <UserImage />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium">Issue Description</p>
            <p className="text-gray-400 text-sm">
              Unable to access the dashboard after recent password change.
              Getting error 403.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium">Attachments</p>
            <div className="w-full bg-[#e5e7eb] rounded-md p-3 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={Image} alt="image" />
                <p>Screen shoot.png</p>
              </div>
              <Download color="#2563eb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTicketManagementScreen;
