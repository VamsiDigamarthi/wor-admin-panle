import { Search } from "lucide-react";
import { FC } from "react";

type SearchCardType = {
  isApplyBorder?: boolean;
  width?: string;
  height?: string;
  filterByText: (text: string) => void;
};

const SearchCard: FC<SearchCardType> = ({
  isApplyBorder,
  width = "400px",
  height = "50px",
  filterByText,
}) => {
  return (
    <button
      style={{ width: width, minHeight: height }}
      className={`bg-white flex justify-between items-center px-4 rounded-md shadow-custom ${
        isApplyBorder && "border border-gray-400"
      }`}
    >
      <Search size={20} className="text-grayText" />
      <input
        type="text"
        placeholder="Search Here...!"
        className="w-[94%] h-full px-1 outline-none border-none"
        onChange={(e) => filterByText(e.target.value)}
      />
    </button>
  );
};

export default SearchCard;
