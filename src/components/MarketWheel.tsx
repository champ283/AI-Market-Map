import { useState, useCallback, useMemo } from 'react';
import { sections, SectionData, BadgeType } from '@/data/marketMapData';
import { WheelSection } from './WheelSection';
import { SectionPanel } from './SectionPanel';
import { SectionCard } from './SectionCard';
import { Badge } from './Badge';
import { SearchFilter } from './SearchFilter';

function Legend() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span
          className="text-[10px] uppercase tracking-[0.1em] font-bold mb-1.5 block"
          style={{ color: 'rgb(109,109,109)' }}
        >
          AI Tools
        </span>
        <div className="flex flex-col gap-1.5 text-[11px]" style={{ color: 'rgb(54,54,54)' }}>
          <span className="flex items-center gap-1.5"><Badge type="ai-scaled" /> Proven AI-native</span>
          <span className="flex items-center gap-1.5"><Badge type="ai-emerging" /> High momentum</span>
          <span className="flex items-center gap-1.5"><Badge type="ai-enhanced" /> AI layer added</span>
          <span className="flex items-center gap-1.5"><Badge type="llm" /> Frontier LLM</span>
          <span className="flex items-center gap-1.5"><Badge type="multi" /> Multi-category</span>
        </div>
      </div>
      <div>
        <span
          className="text-[10px] uppercase tracking-[0.1em] font-bold mb-1.5 block"
          style={{ color: 'rgb(109,109,109)' }}
        >
          Incumbents
        </span>
        <div className="flex flex-col gap-1.5 text-[11px]" style={{ color: 'rgb(54,54,54)' }}>
          <span className="flex items-center gap-1.5"><Badge type="incumbent" /> Legacy leader</span>
        </div>
      </div>
      <div>
        <span
          className="text-[10px] uppercase tracking-[0.1em] font-bold mb-1.5 block"
          style={{ color: 'rgb(109,109,109)' }}
        >
          Maturity
        </span>
        <div className="flex flex-col gap-1.5 text-[11px]" style={{ color: 'rgb(54,54,54)' }}>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: 'rgb(13,8,48)' }} />
            Scaled / Proven
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full border-[1.5px] border-dashed shrink-0"
              style={{ borderColor: 'rgb(166,166,166)' }}
            />
            Emerging / Beta
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
    <div className="h-screen overflow-hidden flex flex-col bg-white">

      {/* ── Header: full-width Aeris navy bar ── */}
      <header
        className="shrink-0 flex justify-between items-center gap-4 px-6 py-3"
        style={{ background: 'rgb(13,8,48)' }}
      >
        <div>
          <h1 className="font-syne text-[19px] md:text-[22px] font-bold text-white tracking-tight leading-tight">
            Investment Banking Software Tools —{' '}
            <span className="block md:inline">Incumbents & AI Entrants</span>
          </h1>
          <p className="text-[12px] mt-0.5" style={{ color: 'rgb(173,203,227)' }}>
            February, 2026 Market Map
          </p>
        </div>
        {/* Logo in white pill — stays readable on navy background */}
        <div className="shrink-0 bg-white rounded px-2.5 py-1.5">
          <img
            src="/aeris-logo.png"
            alt="Aeris Partners"
            className="h-7 w-auto object-contain"
          />
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden px-6 pt-3 pb-3">

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
            <div
              className="text-[11px] mb-3 tracking-wider"
              style={{ color: 'rgb(109,109,109)' }}
            >
              {filteredSections.reduce((sum, s) => sum + s.chips.length, 0)} results across{' '}
              {filteredSections.length} categories
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
                        <div
                          key={chip.name + chip.href}
                          className="flex items-center gap-1.5 font-mono-jb text-[11px] text-map-white"
                        >
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

            {/* Legend — desktop overlay (left side) */}
            <div className="absolute left-0 top-0 bottom-0 hidden md:flex flex-col w-44 shrink-0 overflow-y-auto pt-1 z-20">
              <Legend />
            </div>

            {/* Wheel — Desktop (full width so center is true screen center) */}
            <div className="absolute inset-0 hidden md:block">
              {/* Center label */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(180px,14vw)] text-center p-2.5 rounded-xl bg-white pointer-events-none z-10"
                style={{
                  border: '1px solid rgb(217,217,217)',
                  boxShadow: '0 2px 16px rgba(13,8,48,0.08)',
                }}
              >
                <div
                  className="font-syne font-bold text-xs tracking-tight leading-tight"
                  style={{ color: 'rgb(13,8,48)' }}
                >
                  Interactive Market Map
                </div>
                <div
                  className="text-[9px] tracking-[0.07em] uppercase mt-1"
                  style={{ color: 'rgb(166,166,166)' }}
                >
                  Hover · Click to expand
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
                      <div
                        className="flex items-center gap-3 mt-2 font-mono-jb text-[10px]"
                        style={{ color: 'rgb(109,109,109)' }}
                      >
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

        {/* ── Footer ── */}
        <footer
          className="shrink-0 mt-2 pt-2 border-t flex flex-col sm:flex-row justify-between font-mono-jb text-[11px] tracking-wider gap-1"
          style={{ borderColor: 'rgb(217,217,217)', color: 'rgb(109,109,109)' }}
        >
          <span>Finance & Investment Banking · AI Market Map · 2026</span>
          <span>AI tools listed first · 🏛 Incumbents listed last · ↗ = Multi-category</span>
        </footer>
      </div>

      {/* Side Panel */}
      {modalSection && (
        <SectionPanel section={modalSection} onClose={() => setModalSection(null)} />
      )}
    </div>
  );
}
