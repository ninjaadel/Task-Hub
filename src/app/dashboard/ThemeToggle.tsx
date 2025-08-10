import { MoonIcon, Sun, type Moon } from "lucide-react";
import { useTheme } from "next-themes";

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full dark:text-white">
      {theme === "light" ? <MoonIcon /> : <Sun />}
    </button>
  );
};
