import { useState, useCallback, useMemo } from 'react';
import { sections, SectionData, BadgeType } from '@/data/marketMapData';
import { WheelSection } from './WheelSection';
import { SectionModal } from './SectionModal';
import { SectionCard } from './SectionCard';
import { Badge } from './Badge';
import { SearchFilter } from './SearchFilter';

function AerisLogo() {
  return (
    <div className="flex items-stretch shrink-0 rounded overflow-hidden border border-[rgb(13,8,48)]">
      <div className="bg-[rgb(13,8,48)] px-3 py-2 flex items-center">
        <span className="font-syne font-extrabold text-white text-sm tracking-tight">Aeris</span>
      </div>
      <div className="bg-white px-3 py-2 flex items-center">
        <span className="font-syne font-semibold text-[rgb(13,8,48)] text-sm tracking-tight">Partners</span>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="font-mono-jb text-[10px] uppercase tracking-[0.1em] text-gray-400 mb-1.5 block">
          AI Tools
        </span>
        <div className="flex flex-col gap-1.5 font-mono-jb text-[11px] text-gray-600">
          <span className="flex items-center gap-1.5"><Badge type="ai-scaled" /> Proven AI-native</span>
          <span className="flex items-center gap-1.5"><Badge type="ai-emerging" /> High momentum</span>
          <span className="flex items-center gap-1.5"><Badge type="ai-enhanced" /> AI layer added</span>
          <span className="flex items-center gap-1.5"><Badge type="llm" /> Frontier LLM</span>
          <span className="flex items-center gap-1.5"><Badge type="multi" /> Multi-category</span>
        </div>
      </div>
      <div>
        <span className="font-mono-jb text-[10px] uppercase tracking-[0.1em] text-gray-400 mb-1.5 block">
          Incumbents
        </span>
        <div className="flex flex-col gap-1.5 font-mono-jb text-[11px] text-gray-600">
          <span className="flex items-center gap-1.5"><Badge type="incumbent" /> Legacy leader</span>
        </div>
      </div>
      <div>
        <span className="font-mono-jb text-[10px] uppercase tracking-[0.1em] text-gray-400 mb-1.5 block">
          Maturity
        </span>
        <div className="flex flex-col gap-1.5 font-mono-jb text-[11px] text-gray-600">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-700 shrink-0" /> Scaled / Proven
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full border-[1.5px] border-dashed border-gray-400 shrink-0" /> Emerging / Beta
          </span>
        </div>
      </div>
    </div>
  );
}

export function MarketWheel() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [modalSection, setModalSection] = useState<SectionData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<BadgeType[]>([]);

  const hasFilters = searchQuery.trim() !== '' || activeFilters.length > 0;

  const filteredSections = useMemo(() => {
    if (!hasFilters) return sections;
    const q = searchQuery.toLowerCase().trim();
    return sections
      .map((section) => ({
        ...section,
        chips: section.chips.filter((chip) => {
          const matchesSearch = !q || chip.name.toLowerCase().includes(q);
          const matchesFilter =
            activeFilters.length === 0 || chip.badges.some((b) => activeFilters.includes(b));
          return matchesSearch && matchesFilter;
        }),
      }))
      .filter((s) => s.chips.length > 0);
  }, [searchQuery, activeFilters]);

  const handleClick = useCallback((section: SectionData) => {
    setModalSection(section);
  }, []);

  const toggleFilter = useCallback((filter: BadgeType) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-white px-6 pt-5 pb-3">

      {/* Header */}
      <header className="shrink-0 flex justify-between items-start gap-6 pb-4 border-b border-gray-200 mb-3">
        <div>
          <h1 className="font-syne text-2xl md:text-[26px] font-extrabold text-[rgb(13,8,48)] tracking-tight leading-tight">
            Investment Banking Software Tools —
            <br />
            Incumbents & AI Entrants
          </h1>
          <p className="font-syne text-[13px] font-semibold text-[rgb(13,8,48)] mt-1">
            February, 2026 Market Map
          </p>
          <p className="font-mono-jb text-[11px] text-gray-400 tracking-[0.07em] uppercase mt-1">
            AI-Native · AI-Enhanced · Traditional Incumbents · Investment Banking & Advisory
          </p>
        </div>
        <AerisLogo />
      </header>

      {/* Search & Filter */}
      <div className="shrink-0 mb-3">
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilters={activeFilters}
          onToggleFilter={toggleFilter}
          onClearFilters={() => setActiveFilters([])}
        />
      </div>

      {/* Content */}
      {hasFilters ? (
        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="font-mono-jb text-[11px] text-gray-400 mb-3 tracking-wider">
            {filteredSections.reduce((sum, s) => sum + s.chips.length, 0)} results across {filteredSections.length} categories
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-2">
            {filteredSections.map((section) => (
              <SectionCard key={section.id} section={section} onClick={handleClick}>
                <div className="p-3.5">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center text-sm shrink-0"
                      style={{
                        background: `hsl(var(${section.colorVar}) / 0.2)`,
                        border: `1px solid hsl(var(${section.colorVar}) / 0.3)`,
                      }}
                    >
                      {section.icon}
                    </div>
                    <div
                      className="font-syne text-[12px] font-bold uppercase tracking-[0.07em] leading-tight"
                      style={{ color: `hsl(var(${section.colorVar}))` }}
                    >
                      {section.title}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    {section.chips.slice(0, 5).map((chip) => (
                      <div key={chip.name + chip.href} className="flex items-center gap-1.5 font-mono-jb text-[11px] text-map-white">
                        <img
                          className="w-3.5 h-3.5 rounded-sm bg-white/5"
                          src={`https://www.google.com/s2/favicons?domain=${chip.domain}&sz=32`}
                          alt=""
                          loading="lazy"
                        />
                        <span className="truncate">{chip.name}</span>
                      </div>
                    ))}
                    {section.chips.length > 5 && (
                      <span className="font-mono-jb text-[10px] text-map-txt-faint">
                        +{section.chips.length - 5} more…
                      </span>
                    )}
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex gap-6">

          {/* Legend — desktop sidebar */}
          <div className="hidden md:block w-44 shrink-0 overflow-y-auto pt-1">
            <Legend />
          </div>

          {/* Main content */}
          <div className="flex-1 min-h-0 relative">
            {/* Wheel — Desktop */}
            <div className="absolute inset-0 hidden md:block">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(240px,36vw)] text-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm pointer-events-none z-10">
                <div className="font-syne font-extrabold text-[rgb(13,8,48)] text-sm tracking-tight leading-tight">
                  Interactive Market Map
                </div>
                <div className="font-mono-jb text-gray-400 text-[10px] tracking-[0.08em] uppercase mt-1">
                  Hover to preview · Click to expand
                </div>
              </div>
              {sections.map((section) => (
                <WheelSection
                  key={section.id}
                  section={section}
                  isActive={hoveredId === section.id}
                  isAnyHovered={hoveredId !== null}
                  onHover={setHoveredId}
                  onClick={handleClick}
                />
              ))}
            </div>

            {/* Grid — Mobile */}
            <div className="absolute inset-0 overflow-y-auto md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 content-start">
              {/* Legend on mobile */}
              <div className="col-span-full mb-2">
                <Legend />
              </div>
              {sections.map((section) => {
                const aiCount = section.chips.filter((c) => c.type !== 'incumbent').length;
                const incCount = section.chips.filter((c) => c.type === 'incumbent').length;
                return (
                  <SectionCard key={section.id} section={section} onClick={handleClick}>
                    <div className="p-3.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center text-[15px] shrink-0"
                          style={{
                            background: `hsl(var(${section.colorVar}) / 0.14)`,
                            border: `1px solid hsl(var(${section.colorVar}) / 0.22)`,
                          }}
                        >
                          {section.icon}
                        </div>
                        <div className="min-w-0">
                          <div
                            className="font-syne text-[13px] font-bold uppercase tracking-[0.07em] leading-tight"
                            style={{ color: `hsl(var(${section.colorVar}))` }}
                          >
                            {section.title}
                          </div>
                          <div className="font-mono-jb text-[10px] text-map-txt-faint mt-0.5">
                            {section.subtitle}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-2 font-mono-jb text-[10px] text-map-txt-dim">
                        <span>{aiCount} AI tools</span>
                        <span>{incCount} incumbents</span>
                        <span className="ml-auto text-map-txt-faint">Tap to expand ↗</span>
                      </div>
                    </div>
                  </SectionCard>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="shrink-0 mt-2 pt-3 border-t border-gray-200 flex flex-col sm:flex-row justify-between font-mono-jb text-[11px] text-gray-400 tracking-wider gap-1">
        <span>Finance & Investment Banking · AI Market Map · 2026</span>
        <span>AI tools listed first · 🏛 Incumbents listed last · ↗ = Multi-category</span>
      </footer>

      {/* Modal */}
      {modalSection && (
        <SectionModal section={modalSection} onClose={() => setModalSection(null)} />
      )}
    </div>
  );
}
