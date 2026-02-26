import { Search, X } from 'lucide-react';
import { BadgeType } from '@/data/marketMapData';
import { badgeActiveStyles, badgeInactiveStyles } from './Badge';

const filterOptions: { type: BadgeType; label: string }[] = [
  { type: 'ai-scaled', label: 'AI Scaled' },
  { type: 'ai-emerging', label: 'AI Emerging' },
  { type: 'ai-enhanced', label: 'AI Enhanced' },
  { type: 'llm', label: 'LLM' },
  { type: 'incumbent', label: 'Incumbent' },
  { type: 'multi', label: 'Multi ↗' },
];

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeFilters: BadgeType[];
  onToggleFilter: (f: BadgeType) => void;
  onClearFilters: () => void;
}

export function SearchFilter({
  searchQuery,
  onSearchChange,
  activeFilters,
  onToggleFilter,
  onClearFilters,
}: SearchFilterProps) {
  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-3">
      {/* Search input */}
      <div className="relative w-full sm:w-64">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-map-txt-faint" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tools…"
          className="w-full pl-8 pr-8 py-2 rounded-lg bg-white text-sm font-mono-jb placeholder:text-[rgb(166,166,166)] focus:outline-none transition-colors"
          style={{
            border: '1px solid rgb(217,217,217)',
            color: 'rgb(54,54,54)',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgb(3,64,120)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgb(217,217,217)'; }}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-map-txt-faint hover:text-map-white transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Filter badges */}
      <div className="flex flex-wrap gap-1.5">
        {filterOptions.map(({ type, label }) => {
          const isActive = activeFilters.includes(type);
          return (
            <button
              key={type}
              onClick={() => onToggleFilter(type)}
              className={`px-2.5 py-1 rounded-md border font-mono-jb text-[11px] font-medium tracking-wider uppercase transition-all duration-150 ${
                isActive ? badgeActiveStyles[type] : badgeInactiveStyles[type]
              }`}
            >
              {label}
            </button>
          );
        })}
        {activeFilters.length > 0 && (
          <button
            onClick={onClearFilters}
            className="px-2 py-1 rounded-md font-mono-jb text-[11px] transition-colors"
            style={{ color: 'rgb(166,166,166)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgb(54,54,54)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgb(166,166,166)'; }}
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}
