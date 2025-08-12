"use client";
import dynamic from "next/dynamic";

import { Heading } from "@/components/layout/ui/Heading";
import { SearchField } from "@/components/layout/ui/search-field/SearchField";
import { ToggleThemeButton } from "./ThemeToggle";
import { Projects } from "@/components/projects/menu/Projects";
import { ProjectsChart } from "@/components/projectChart/menu/ProjectsChart";

const DynamicThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ToggleThemeButton),
  {
    ssr: false,
  }
);

export function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <Heading>Dashboard</Heading>
        <SearchField />
      </div>
      <div className="flex align-center  gap-4 mt-4">
        <Projects />
        <ProjectsChart />
      </div>
    </div>
  );
}
