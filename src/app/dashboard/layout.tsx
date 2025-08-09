import { PropsWithChildren } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
