import { PROJECTS } from "./projects-data";

export function WorkingHoursProjects() {
  const project = PROJECTS.WorkingHoursProject;
  return (
    <div className="w-full max-w-sm p-6 bg-[#fdc3f6] dark:bg-[#5d30f7] shadow-sm rounded-2xl ">
      <div className="flex  justify-between align-items-center text-center">
        <div className="flex flex-col items-start">
          <h3 className="text-[45px] font-semibold">{project.id}h 9m</h3>
          <p className="text-md text-gray-500">{project.name}</p>
        </div>
        <div className="relative">
          <img
            src={project.icon}
            alt={project.name}
            className="w-18 h-18  -rotate-4 "
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3 w-full bg-[#fb8eec] dark:bg-[#4f1ece] rounded-[70%] rotate-12 z-0" />
        </div>
      </div>
    </div>
  );
}
