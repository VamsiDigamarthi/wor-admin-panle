import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for the Line Chart
const data = [
  { name: "Mon", pv: 400, amt: 2400 },
  { name: "Tue", pv: 210, amt: 2290 },
  { name: "Wed", pv: 290, amt: 2000 },
  { name: "Thu", pv: 100, amt: 2181 },
  { name: "Fri", pv: 181, amt: 2500 },
  { name: "Sat", pv: 500, amt: 2100 },
  { name: "Sun", pv: 100, amt: 2400 },
];

const LineChat = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" /> {/* X-axis representing months */}
          <YAxis /> {/* Y-axis values */}
          <Tooltip /> {/* Display tooltip on hover */}
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChat;
