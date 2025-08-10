import { SearchField } from "@/components/layout/ui/search-field/SearchField";
import { Heading } from "../../components/layout/ui/Heading";
import type { Metadata } from "next";
import { Dashboard } from "./Dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
