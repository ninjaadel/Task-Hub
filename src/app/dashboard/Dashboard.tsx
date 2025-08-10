"use client";
import dynamic from "next/dynamic";

import { Heading } from "@/components/layout/ui/Heading";
import { SearchField } from "@/components/layout/ui/search-field/SearchField";
import { ToggleThemeButton } from "./ThemeToggle";

const DynamicThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ToggleThemeButton),
  {
    ssr: false,
  }
);

export function Dashboard() {
  return (
    <div className="flex justify-between items-center gap-4">
      <Heading>Dashboard</Heading>
      <SearchField />
      <DynamicThemeToggle />
    </div>
  );
}
