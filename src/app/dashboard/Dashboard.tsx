"use client";
import dynamic from "next/dynamic";

import { Heading } from "@/components/layout/ui/Heading";
import { SearchField } from "@/components/layout/ui/search-field/SearchField";
import { ToggleThemeButton } from "./ThemeToggle";
import { Projects } from "@/components/projects/menu/Projects";

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
      <Projects />
    </div>
  );
}
