import { FC } from "react";

type TransactionType = {
  title: string;
};

const TxsUserInfo: FC<TransactionType> = ({ title }) => {
  return (
    <div className="w-1/2 flex flex-col gap-3">
      <h2 className="text-lg font-[600]">{title} Information</h2>
      <div className="flex justify-between items-center w-full">
        <span className="text-sm text-gray-400">Transaction ID</span>
        <span className="text-balance text-gray-600">TXS -9876</span>
      </div>
      <div className="flex justify-between items-center w-full">
        <span className="text-sm text-gray-400">Transaction ID</span>
        <span className="text-balance text-gray-600">TXS -9876</span>
      </div>
      <div className="flex justify-between items-center w-full">
        <span className="text-sm text-gray-400">Transaction ID</span>
        <span className="text-balance text-gray-600">TXS -9876</span>
      </div>
    </div>
  );
};

export default TxsUserInfo;
