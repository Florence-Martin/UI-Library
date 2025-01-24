import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

interface ProjectSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function ProjectSearchBar({
  value,
  onChange,
  placeholder = "Search...",
}: ProjectSearchBarProps) {
  return (
    <div className="relative flex-grow">
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
        aria-label={placeholder}
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
        aria-hidden="true"
      />
    </div>
  );
}
