import { Filter } from "lucide-react";
import SearchCard from "../Search";

const SearchFilterCard = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <SearchCard />
      <button className="flex gap-4 items-center bg-white px-4 h-[50px] rounded-md cursor-pointer shadow-custom">
        <Filter size={20} className="text-grayText" />
        <p>Filter</p>
      </button>
    </div>
  );
};

export default SearchFilterCard;
