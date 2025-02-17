import SearchCard from "../../../SharedComponents/Search";
import SelectWithoutLabel from "./SelectWithoutLabel";
import IconButton from "../../../SharedComponents/IconButton";
import { Plus } from "lucide-react";

const SupportDahsboarSearSelecCard = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <SearchCard height="45px" width="330px" />
      <div className="flex gap-4">
        <SelectWithoutLabel />
        <IconButton bgColor="#2563eb" title="Download PDF" onClick={() => {}}>
          <Plus size={20} className="text-grayText" />
        </IconButton>
      </div>
    </div>
  );
};

export default SupportDahsboarSearSelecCard;
