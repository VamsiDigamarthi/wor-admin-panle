type ColumnData<T> = {
  label: string;
  key: keyof T;
  width: string;
  sliceLength?: number;
  render?: (rowData: T) => React.ReactNode;
};

type TableRowProps<T> = {
  dataRow: T;
  columns: ColumnData<T>[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableRow = <T extends Record<string, any>>({
  dataRow,
  columns,
}: TableRowProps<T>) => (
  <div className="text-base flex items-start px-3 h-[48px] border-b border-b-gray-200 gap-1">
    {columns.map((column, colIndex) => (
      <span
        key={colIndex}
        style={{
          width: column.width || "auto",
        }}
        className="text-gray-600 h-full"
      >
        <div className="flex flex-col gap-1 h-full justify-center">
          <p>
            {column.render
              ? column.render(dataRow)
              : typeof dataRow[column.key] === "string"
              ? dataRow[column.key]?.slice(0, column.sliceLength)
              : dataRow[column.key]}
          </p>
        </div>
      </span>
    ))}
  </div>
);

export default TableRow;
