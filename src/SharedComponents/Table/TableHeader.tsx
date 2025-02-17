import { FC } from "react";

type ColumnData<T> = {
  label: string;
  key: Extract<keyof T, string>;
  width: string;
  sliceLength?: number;
};

type TableHeaderProps<T> = {
  columns: ColumnData<T>[];
};

// Define the TableHeader as a functional component that accepts generic type `T`
const TableHeader: FC<TableHeaderProps<Record<string, unknown>>> = ({
  columns,
}) => {
  return (
    <div className="px-3 py-5 w-full text-[1.2vw] font-[600] flex items-center h-[42px] bg-[#f7f7f7] overflow-hidden">
      {columns.map((column, key) => (
        <span
          className="text-gray-800 text-base"
          key={key}
          style={{ width: column.width || "auto" }}
        >
          {column.label}
        </span>
      ))}
    </div>
  );
};

export default TableHeader;
