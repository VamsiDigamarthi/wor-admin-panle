import DownloadPdf from "../../SharedComponents/DownloadPdf";
import NotificationMain from "./Components/NotificationMain";

const NotificationScreen = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <DownloadPdf
        title="Notification"
        subTitle="User Verify Page"
        isDisplayMarkSdReadBtn={true}
      />
      <NotificationMain />
    </div>
  );
};

export default NotificationScreen;
