import type { PropsWithChildren } from "react";
import { Sidebar } from "../../components/sidebar/menu/Sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen">
      <Sidebar />
      <main className="p-4">{children}</main>
    </div>
  );
}
