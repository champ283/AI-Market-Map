import { Search, X } from 'lucide-react';
import { BadgeType } from '@/data/marketMapData';

const filterOptions: { type: BadgeType; label: string }[] = [
  { type: 'ai-scaled', label: 'AI Scaled' },
  { type: 'ai-emerging', label: 'AI Emerging' },
  { type: 'ai-enhanced', label: 'AI Enhanced' },
  { type: 'llm', label: 'LLM' },
  { type: 'incumbent', label: 'Incumbent' },
  { type: 'multi', label: 'Multi ↗' },
];

const filterColors: Record<BadgeType, { active: string; inactive: string }> = {
  'ai-scaled': { active: 'bg-emerald-500/25 border-emerald-500/50 text-emerald-400', inactive: 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-emerald-500/30 hover:text-emerald-400' },
  'ai-emerging': { active: 'bg-orange-400/20 border-orange-400/50 text-orange-400', inactive: 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-orange-400/30 hover:text-orange-400' },
  'ai-enhanced': { active: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-500', inactive: 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-yellow-500/30 hover:text-yellow-500' },
  'llm': { active: 'bg-violet-400/20 border-violet-400/50 text-violet-300', inactive: 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-violet-400/30 hover:text-violet-300' },
  'incumbent': { active: 'bg-slate-500/25 border-slate-500/50 text-slate-400', inactive: 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-slate-500/30 hover:text-slate-400' },
  'multi': { active: 'bg-amber-700/25 border-amber-600/50 text-amber-500', inactive: 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-amber-600/30 hover:text-amber-500' },
};

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeFilters: BadgeType[];
  onToggleFilter: (f: BadgeType) => void;
}

export function SearchFilter({ searchQuery, onSearchChange, activeFilters, onToggleFilter }: SearchFilterProps) {
  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-1">
      {/* Search input */}
      <div className="relative w-full sm:w-64">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-map-txt-faint" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tools…"
          className="w-full pl-8 pr-8 py-2 rounded-lg bg-map-bg3 border border-map-line text-map-white text-sm font-mono-jb placeholder:text-map-txt-faint focus:outline-none focus:border-map-line2 focus:ring-1 focus:ring-primary/30 transition-colors"
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
          const colors = filterColors[type];
          return (
            <button
              key={type}
              onClick={() => onToggleFilter(type)}
              className={`px-2.5 py-1 rounded-md border font-mono-jb text-[11px] font-medium tracking-wider uppercase transition-all duration-150 ${
                isActive ? colors.active : colors.inactive
              }`}
            >
              {label}
            </button>
          );
        })}
        {activeFilters.length > 0 && (
          <button
            onClick={() => activeFilters.forEach(onToggleFilter)}
            className="px-2 py-1 rounded-md font-mono-jb text-[11px] text-map-txt-faint hover:text-map-white transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}
