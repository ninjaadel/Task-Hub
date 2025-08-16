"use client";
import { useState, type JSX } from "react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ProjectsChartYear } from "./ProjectChartYear";
import { ProjectsChartMonth } from "./ProjectChartMonthly";

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

export function ProjectsChart() {
  const [activeMonth, setActiveMonth] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "monthly") {
      setActiveMonth(true);
    } else {
      setActiveMonth(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#050910] rounded-3xl shadow-md p-4 w-full max-w-[630px] h-[450px]">
      <div className="flex justify-between items-center ">
        <h3 className="text-2xl font-semibold mb-3">Project Statistic</h3>
        <section>
          <select
            className="text-sm text-gray-500 rounded-2xl border-1 border-gray-300 dark:border-gray-600 p-2 focused:outline-none focus:ring-0 focus:border-transparent"
            onChange={handleChange}
            value={activeMonth ? "monthly" : "yearly"}
          >
            <option
              value="yearly"
              className="rounded-2xl bg-gray-400 text-gray-800"
            >
              yearly
            </option>
            <option
              value="monthly"
              className="rounded-2xl bg-gray-400 text-gray-800"
            >
              monthly
            </option>
          </select>
        </section>
      </div>
      {activeMonth && <ProjectsChartMonth />}
      {!activeMonth && <ProjectsChartYear />}
    </div>
  );
}
