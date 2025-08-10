import { PROJECT } from "../data/project-data";

export const SidebarProject = () => {
  return (
    <div className="mt-2 p-3">
      <ul className="space-y-4">
        {PROJECT.map((item) => (
          <li key={item.name} className="flex items-center space-x-4">
            <div id="cupe-color" className={`w-4 h-4 ${item.color}`}></div>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
