import { Clock, IndianRupee, TicketX } from "lucide-react";
import { FC } from "react";

type TxsNumerType = {
  iconType: string;
  title: string;
};

const TxsNumer: FC<TxsNumerType> = ({ iconType, title }) => {
  const icons =
    iconType === "txt" ? (
      <TicketX size={16} />
    ) : iconType === "rupee" ? (
      <IndianRupee size={16} />
    ) : (
      <Clock size={16} />
    );

  return (
    <div className="flex items-center gap-2">
      {icons}
      <p>{title}</p>
    </div>
  );
};

export default TxsNumer;
