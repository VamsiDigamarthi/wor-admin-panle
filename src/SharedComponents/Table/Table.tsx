import TableRow from "./TableRow";
import SearchFilterCard from "./SearchFilterCard";
import TableHeader from "./TableHeader";

type ColumnData<T> = {
  label: string;
  key: Extract<keyof T, string>;
  width: string;
  sliceLength?: number;
  render?: (rowData: T) => React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TableProps<T extends Record<string, any>> = {
  isDisplayFilters?: boolean;
  height?: string;
  columns: ColumnData<T>[];
  tableData: T[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = <T extends Record<string, any>>({
  isDisplayFilters = true,
  height = "300px",
  columns,
  tableData,
}: TableProps<T>) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {isDisplayFilters && <SearchFilterCard />}
      <div
        style={{ height }}
        className="w-full rounded-lg overflow-hidden shadow-custom bg-white mb-4"
      >
        <TableHeader columns={columns} />
        {tableData.map((dataRow, key) => (
          <TableRow key={key} dataRow={dataRow} columns={columns} />
        ))}
      </div>
    </div>
  );
};

export default Table;
