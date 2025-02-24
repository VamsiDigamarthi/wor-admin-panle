// import DownloadPdf from "../../../SharedComponents/DownloadPdf";
import SupLiveChat from "../components/SupLiveChat";

const SupLiveChatScreen = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* <DownloadPdf
        title="Ticket Management"
        subTitle="Ticket Management of User/Rider"
        isDisplayDownPdfBtn={false}
      /> */}
      <SupLiveChat />
    </div>
  );
};

export default SupLiveChatScreen;
