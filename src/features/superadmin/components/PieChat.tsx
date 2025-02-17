import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Group A", value: 700 },
  { name: "Group B", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F"];
const PieChat = () => {
  return (
    <>
      <PieChart width={330} height={330}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index} - ${entry}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip /> {/* Display data tooltip on hover */}
        <Legend />
      </PieChart>
    </>
  );
};

export default PieChat;
