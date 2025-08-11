import { ActiveProjects } from "./ActiveProjects";
import { NowProjects } from "./NowProjects";
import { WorkingHoursProjects } from "./WorkingHours";

export function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <ActiveProjects />
      <NowProjects />
      <WorkingHoursProjects />
    </div>
  );
}
