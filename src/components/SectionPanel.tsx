import { SectionData } from '@/data/marketMapData';
import { ChipItem } from './ChipItem';
import { X } from 'lucide-react';

interface SectionPanelProps {
  section: SectionData;
  onClose: () => void;
}

export function SectionPanel({ section, onClose }: SectionPanelProps) {
  const aiChips = section.chips.filter((c) => c.type !== 'incumbent');
  const incChips = section.chips.filter((c) => c.type === 'incumbent');

  return (
    <div className="fixed inset-y-0 right-0 z-[500] flex">
      {/* Invisible click-outside area */}
      <div className="flex-1" onClick={onClose} />

      {/* Panel */}
      <div
        className="w-80 h-full overflow-y-auto bg-map-bg2 border-l border-map-line shadow-2xl animate-slide-in-right flex flex-col"
        style={{
          borderTopColor: `hsl(var(${section.colorVar}))`,
          boxShadow: `-8px 0 40px -10px rgba(0,0,0,0.5), -2px 0 0 0 hsl(var(${section.colorVar}) / 0.4)`,
        }}
      >
        {/* Top accent */}
        <div
          className="shrink-0 h-[3px] w-full"
          style={{ background: `hsl(var(${section.colorVar}))` }}
        />

        {/* Top glow */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 100% 60% at 50% 0%, hsl(var(${section.colorVar}) / 0.1), transparent 70%)`,
          }}
        />

        {/* Header */}
        <div className="relative shrink-0 p-5 pb-3">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-md bg-map-bg3 border border-map-line text-map-txt-dim hover:text-map-white hover:border-map-line2 transition-colors"
          >
            <X size={14} />
          </button>

          {section.regionTag && (
            <span className="font-mono-jb text-[10px] uppercase tracking-[0.12em] text-map-txt-faint mb-1.5 block">
              {section.regionTag}
            </span>
          )}

          <div className="flex items-center gap-2.5 pr-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0"
              style={{
                background: `hsl(var(${section.colorVar}) / 0.14)`,
                border: `1px solid hsl(var(${section.colorVar}) / 0.22)`,
              }}
            >
              {section.icon}
            </div>
            <div>
              <h2
                className="font-syne text-[13px] font-bold uppercase tracking-[0.07em] leading-tight"
                style={{ color: `hsl(var(${section.colorVar}))` }}
              >
                {section.title}
              </h2>
              <p className="font-mono-jb text-[10px] text-map-txt-faint mt-0.5">
                {section.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="shrink-0 mx-5 h-px bg-map-line" />

        {/* AI Tools */}
        <div className="flex-1 overflow-y-auto px-5 pt-3 pb-4">
          <div className="flex flex-col gap-1">
            {aiChips.map((chip) => (
              <ChipItem key={chip.name + chip.href} chip={chip} />
            ))}
          </div>

          {/* Incumbents */}
          {incChips.length > 0 && (
            <>
              <div className="flex items-center gap-2 py-3">
                <div className="flex-1 h-px bg-map-line" />
                <span className="font-mono-jb text-[9px] uppercase tracking-[0.1em] text-map-txt-faint whitespace-nowrap">
                  🏛 Incumbents
                </span>
                <div className="flex-1 h-px bg-map-line" />
              </div>

              <div className="flex flex-col gap-1">
                {incChips.map((chip) => (
                  <ChipItem key={chip.name + chip.href} chip={chip} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
