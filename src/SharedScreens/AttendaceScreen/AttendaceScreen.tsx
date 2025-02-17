import Table from "../../SharedComponents/Table/Table";
import { useAttendaceScreenHook } from "./AttendaceScreen.hook";
import CheckInOutAndTimeCard from "./CheckInOutAndTimeCard";

const AttendaceScreen = () => {
  const { attendace, columns } = useAttendaceScreenHook();

  return (
    <div className="w-full flex flex-col gap-4 bg-white p-6 rounded-md">
      <h1 className="text-xl text-gray-900 font-[600]">Attendace</h1>
      <div className="w-full h-[450px]">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps map</a>
        </iframe>
      </div>
      <CheckInOutAndTimeCard />
      <Table isDisplayFilters={false} columns={columns} tableData={attendace} />
    </div>
  );
};

export default AttendaceScreen;
