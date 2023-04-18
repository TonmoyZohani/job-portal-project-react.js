import React from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Line,
  ResponsiveContainer,
} from "recharts";

const assignments = [
  {
    id: 1,
    name: "New Year Website",
    marks: 48,
  },
  {
    id: 2,
    name: "G3-Architects",
    marks: 44,
  },
  {
    id: 3,
    name: "Ed Tech Landing",
    marks: 45,
  },
  {
    id: 4,
    name: "JavaScript Problems",
    marks: 60,
  },
  {
    id: 5,
    name: "Geometry Genious",
    marks: 60,
  },
  {
    id: 6,
    name: "AI Universe",
    marks: 60,
  },
  {
    id: 7,
    name: "Make Quiz Hero",
    marks: 60,
  },
  {
    id: 8,
    name: "Knowledge Cafe",
    marks: 60,
  },
];

const AssignmentChart = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={assignments}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar dataKey="marks" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="marks" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssignmentChart;
