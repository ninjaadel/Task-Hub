"use client";
import dynamic from "next/dynamic";

import { Heading } from "@/components/layout/ui/Heading";
import { SearchField } from "@/components/layout/ui/search-field/SearchField";
import { ToggleThemeButton } from "./ThemeToggle";
import { Projects } from "@/components/projects/menu/Projects";
import { ProjectsChart } from "@/components/projectChart/menu/ProjectsChart";
import { LastTasksList } from "@/components/lastTasks/menu/LastTasksList";
import { Mesajlasma } from "@/components/chat/Mesajlasma";

const DynamicThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ToggleThemeButton),
  {
    ssr: false,
  }
);

export function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6 h-screen">
      {/* Sol taraf - Dashboard Content */}
      <div className="col-span-9">
        <div className="flex justify-between items-center gap-2">
          <Heading>Dashboard</Heading>
          <SearchField />
        </div>
        <div className="flex align-center gap-2 mt-4">
          <Projects />
          <ProjectsChart />
        </div>
        <div>
          <LastTasksList />
        </div>
      </div>

      {/* Sağ taraf - Mesajlaşma (Tüm yüksekliği kaplar) */}
      <div className="col-span-3 h-full">
        <Mesajlasma />
      </div>
    </div>
  );
}
