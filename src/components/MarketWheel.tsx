import { useState, useCallback, useMemo } from 'react';
import { sections, SectionData, BadgeType } from '@/data/marketMapData';
import { WheelSection } from './WheelSection';
import { SectionModal } from './SectionModal';
import { SectionCard } from './SectionCard';
import { Badge } from './Badge';
import { SearchFilter } from './SearchFilter';

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
    <div className="h-screen overflow-hidden flex flex-col bg-background px-5 pt-4 pb-3 md:px-6 md:pt-5">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -10%, hsl(var(--c-ppt-in) / 0.07), transparent),
            linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      />

      {/* Header */}
      <header className="relative shrink-0 flex flex-col md:flex-row justify-between items-start gap-4 pb-3 border-b border-map-line mb-3">
        <div>
          <h1 className="font-syne text-2xl md:text-[26px] font-extrabold text-map-white tracking-tight leading-tight">
            Finance & IB Software
            <br />
            Market Map 2026
          </h1>
          <p className="font-mono-jb text-[11px] text-map-txt-dim tracking-[0.07em] uppercase mt-1">
            AI-Native · AI-Enhanced · Traditional Incumbents · Investment Banking & Advisory
          </p>
        </div>

        {/* Legend */}
        <div className="flex gap-5 flex-wrap shrink-0">
          <div className="flex flex-col gap-1">
            <span className="font-mono-jb text-[10px] uppercase tracking-[0.1em] text-map-txt-faint mb-0.5">
              AI Tools
            </span>
            <div className="flex flex-col gap-1 font-mono-jb text-[11px] text-map-txt-dim">
              <span className="flex items-center gap-1.5"><Badge type="ai-scaled" /> Proven, adopted AI-native</span>
              <span className="flex items-center gap-1.5"><Badge type="ai-emerging" /> New disruptor, high momentum</span>
              <span className="flex items-center gap-1.5"><Badge type="ai-enhanced" /> Traditional tool with AI layer</span>
              <span className="flex items-center gap-1.5"><Badge type="llm" /> Frontier LLM platform</span>
              <span className="flex items-center gap-1.5"><Badge type="multi" /> Multi-category</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono-jb text-[10px] uppercase tracking-[0.1em] text-map-txt-faint mb-0.5">
              Incumbents
            </span>
            <div className="flex flex-col gap-1 font-mono-jb text-[11px] text-map-txt-dim">
              <span className="flex items-center gap-1.5"><Badge type="incumbent" /> Legacy leader</span>
            </div>
            <span className="font-mono-jb text-[10px] uppercase tracking-[0.1em] text-map-txt-faint mt-2 mb-0.5">
              Maturity
            </span>
            <div className="flex flex-col gap-1 font-mono-jb text-[11px] text-map-txt-dim">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-map-white" /> Scaled / Proven
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full border-[1.5px] border-dashed border-map-txt-dim" /> Emerging / Beta
              </span>
            </div>
          </div>
        </div>
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
          <div className="font-mono-jb text-[11px] text-map-txt-dim mb-3 tracking-wider">
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
                        background: `hsl(var(${section.colorVar}) / 0.14)`,
                        border: `1px solid hsl(var(${section.colorVar}) / 0.22)`,
                      }}
                    >
                      {section.icon}
                    </div>
                    <div
                      className="font-syne text-[12px] font-bold uppercase tracking-[0.07em] leading-tight"
                      style={{ color: `hsl(var(${section.colorVar}) / 0.85)` }}
                    >
                      {section.title}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    {section.chips.slice(0, 5).map((chip) => (
                      <div key={chip.name + chip.href} className="flex items-center gap-1.5 font-mono-jb text-[11px] text-map-txt">
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
        <div className="flex-1 min-h-0 relative">
          {/* Wheel — Desktop */}
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(280px,40vw)] text-center p-3 rounded-xl bg-white/[0.02] border border-map-line shadow-[0_18px_60px_rgba(0,0,0,0.45)] pointer-events-none z-10">
              <div className="font-syne font-extrabold text-map-white text-base tracking-tight leading-tight">
                Interactive Market Map
              </div>
              <div className="font-mono-jb text-map-txt-dim text-[11px] tracking-[0.08em] uppercase mt-1">
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
                          style={{ color: `hsl(var(${section.colorVar}) / 0.85)` }}
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
      )}

      {/* Footer */}
      <footer className="relative shrink-0 mt-2 pt-3 border-t border-map-line flex flex-col sm:flex-row justify-between font-mono-jb text-[11px] text-map-txt-faint tracking-wider gap-1">
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
