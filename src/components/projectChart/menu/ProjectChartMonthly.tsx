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
  day: Number;
  project: number;
};

const data: ProjectData[] = [
  {
    day: 1,
    project: 2,
  },
  {
    day: 2,
    project: 3,
  },
  {
    day: 3,
    project: 7,
  },
  {
    day: 4,
    project: 3,
  },
  {
    day: 5,
    project: 2,
  },
  {
    day: 6,
    project: 7,
  },
  {
    day: 7,
    project: 3,
  },
];

export function ProjectsChartMonth() {
  return (
    <ResponsiveContainer width="100%" className={"max-h-[380px]"}>
      <AreaChart width={100} height={100} data={data}>
        <XAxis dataKey="day" stroke="#7865d1" />
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
