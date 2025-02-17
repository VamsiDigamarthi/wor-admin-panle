import { Calendar, Filter } from "lucide-react";
import SearchCard from "../../../SharedComponents/Search";
import DateRange from "./DateRange";
import SelectWithoutLabel from "./SelectWithoutLabel";

const RefundRequestFilter = () => {
  return (
    <div className="w-full p-4 bg-white rounded-md shadow-custom flex gap-4 items-center flex-wrap justify-center">
      <SearchCard height="45px" width="25%" />
      <SelectWithoutLabel width="30%" />
      <DateRange title="Date Range">
        <Calendar />
      </DateRange>
      <DateRange title="More Filters">
        <Filter />
      </DateRange>
    </div>
  );
};

export default RefundRequestFilter;
