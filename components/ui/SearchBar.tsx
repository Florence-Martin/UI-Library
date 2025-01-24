import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative flex items-center flex-grow">
      {/* Champ de recherche */}
      <Input
        type="search"
        placeholder={placeholder || "Search for UI components..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-20"
        aria-label="Search-input"
      />

      {/* Icône de recherche à gauche */}
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
        aria-hidden="true"
      />

      {/* Bouton reset à droite */}
      {value && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onChange("")} // Réinitialise la valeur
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          aria-label="Clear search input"
        >
          Reset
        </Button>
      )}
    </div>
  );
}
