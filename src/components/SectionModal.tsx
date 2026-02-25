import { SectionData } from '@/data/marketMapData';
import { ChipItem } from './ChipItem';
import { Badge } from './Badge';
import { X } from 'lucide-react';

interface SectionModalProps {
  section: SectionData;
  onClose: () => void;
}

export function SectionModal({ section, onClose }: SectionModalProps) {
  const aiChips = section.chips.filter((c) => c.type !== 'incumbent');
  const incChips = section.chips.filter((c) => c.type === 'incumbent');

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl bg-map-bg2 border border-map-line shadow-2xl animate-modal-in"
        style={{
          borderTopColor: `hsl(var(${section.colorVar}))`,
          borderTopWidth: '3px',
          boxShadow: `0 0 80px -20px hsl(var(${section.colorVar}) / 0.3), 0 20px 60px -15px rgba(0,0,0,0.6)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top glow */}
        <div
          className="absolute inset-x-0 top-0 h-32 rounded-t-xl pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(${section.colorVar}) / 0.1), transparent 70%)`,
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-md bg-map-bg3 border border-map-line text-map-txt-dim hover:text-map-white hover:border-map-line2 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="relative p-6 pb-4">
          {section.regionTag && (
            <span className="font-mono-jb text-[11px] uppercase tracking-[0.12em] text-map-txt-faint mb-2 block">
              {section.regionTag}
            </span>
          )}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
              style={{
                background: `hsl(var(${section.colorVar}) / 0.14)`,
                border: `1px solid hsl(var(${section.colorVar}) / 0.22)`,
              }}
            >
              {section.icon}
            </div>
            <div>
              <h2
                className="font-syne text-base font-bold uppercase tracking-[0.07em] leading-tight"
                style={{ color: `hsl(var(${section.colorVar}) / 0.92)` }}
              >
                {section.title}
              </h2>
              <p className="font-mono-jb text-[11px] text-map-txt-faint mt-0.5">
                {section.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* AI Tools */}
        <div className="px-6 pb-2">
          <div
            className={`grid gap-1.5 ${
              section.gridCols === 3
                ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                : section.gridCols === 2
                ? 'grid-cols-1 sm:grid-cols-2'
                : 'grid-cols-1'
            }`}
          >
            {aiChips.map((chip) => (
              <ChipItem key={chip.name + chip.href} chip={chip} />
            ))}
          </div>
        </div>

        {/* Divider */}
        {incChips.length > 0 && (
          <>
            <div className="flex items-center gap-2 px-6 py-3">
              <div className="flex-1 h-px bg-map-line" />
              <span className="font-mono-jb text-[10px] uppercase tracking-[0.1em] text-map-txt-faint whitespace-nowrap">
                🏛 Incumbents
              </span>
              <div className="flex-1 h-px bg-map-line" />
            </div>

            <div className="px-6 pb-6">
              <div
                className={`grid gap-1.5 ${
                  section.gridCols && section.gridCols >= 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1'
                }`}
              >
                {incChips.map((chip) => (
                  <ChipItem key={chip.name + chip.href} chip={chip} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
