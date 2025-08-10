import { Search } from "lucide-react";

interface Proops {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function SearchField({
  placeholder = "Search something...",
  onChange,
}: Proops) {
  return (
    <div className="flex items-center w-full max-w-xs  p-3 bg-white rounded-3xl shadow-sm">
      <Search size="20" />
      <input
        type="text"
        className="bg-transparent 
         focus:outline-none text-sm
          placeholder:text-gray-600 text-neutral-800"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
