"use client";
import type { JSX } from "react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ProjectData = {
  name: string;
  project: number;
};

const data: ProjectData[] = [
  {
    name: "Jan",
    project: 20,
  },
  {
    name: "Feb",
    project: 17,
  },
  {
    name: "Mar",
    project: 30,
  },
  {
    name: "Apr",
    project: 38,
  },
  {
    name: "May",
    project: 32,
  },
  {
    name: "June",
    project: 27,
  },
  {
    name: "July",
    project: 35,
  },
];

export function ProjectsChartYear() {
  return (
    <ResponsiveContainer width="100%" className={"max-h-[380px]"}>
      <AreaChart width={100} height={100} data={data}>
        <XAxis dataKey="name" stroke="#7865d1" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="project"
          stroke="#7865d1"
          fill="url(#colorProject)"
          activeDot={{ r: 8 }}
        />
        <defs>
          <linearGradient id="colorProject" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
}
