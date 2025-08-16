import { SidebarHeader } from "./SidebarHeader";
import { SidebarMenu } from "./SidebarMainMenu";
import { SidebarProfile } from "./SidebarProfile";
import { SidebarProject } from "./SidebarProjects";

export function Sidebar() {
  return (
    <nav className="w-full  h-auto pt-4 px-3 py-2 dark:bg-[#04080f]">
      {/* Account */}
      <SidebarHeader title="Account" />
      <SidebarProfile />
      {/* Main Menu */}
      <SidebarHeader title="Main Menu" />
      <SidebarMenu />
      {/* Projects */}
      <SidebarHeader title="Projects" />
      <SidebarProject />
    </nav>
  );
}
