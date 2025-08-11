import { Search } from "lucide-react";
import dynamic from "next/dynamic";

interface Proops {
  placeholder?: string;
  onChange?: (value: string) => void;
}
const DynamicThemeToggle = dynamic(
  () =>
    import("../../../../app/dashboard/ThemeToggle").then(
      (mod) => mod.ToggleThemeButton
    ),
  {
    ssr: false,
  }
);

export function SearchField({
  placeholder = "Search something...",
  onChange,
}: Proops) {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex items-center w-full max-w-sm  p-3 bg-[#ffffff] dark:bg-[#050910] dark:text-[#485464] rounded-3xl shadow-sm">
        <Search size="20" />
        <input
          type="text"
          className="bg-transparent 
         focus:outline-none text-sm
          placeholder:text-neutral-800 dark:placeholder:text-[#485464] ml-2"
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
      <DynamicThemeToggle />
    </div>
  );
}
