import { SectionData } from '@/data/marketMapData';

interface WheelSectionProps {
  section: SectionData;
  isActive: boolean;
  isAnyHovered: boolean;
  onHover: (id: string | null) => void;
  onClick: (section: SectionData) => void;
}

export function WheelSection({
  section,
  isActive,
  isAnyHovered,
  onHover,
  onClick,
}: WheelSectionProps) {
  const aiCount = section.chips.filter((c) => c.type !== 'incumbent').length;
  const incCount = section.chips.filter((c) => c.type === 'incumbent').length;

  return (
    <div
      className={`absolute left-1/2 top-1/2 w-[168px] rounded-[9px] bg-map-bg2 border border-map-line cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] origin-center ${
        isActive
          ? 'z-[150] saturate-[1.02] brightness-[1.03]'
          : isAnyHovered
          ? 'z-[1] saturate-[0.88] brightness-[0.92] opacity-80'
          : 'z-[1]'
      }`}
      style={{
        transform: `translate(-50%, -50%) rotate(${section.angle}deg) translate(${
          isActive ? 'min(15vw, 22vh, 205px)' : 'min(19vw, 28vh, 250px)'
        }) rotate(${-section.angle}deg) scale(${isActive ? 1.05 : 0.94})`,
        borderColor: isActive ? `hsl(var(${section.colorVar}))` : undefined,
        boxShadow: isActive
          ? `0 0 0 1.5px hsl(var(${section.colorVar})), 0 16px 50px -10px rgba(0,0,0,0.7), 0 0 80px -25px hsl(var(${section.colorVar}))`
          : undefined,
      }}
      onMouseEnter={() => onHover(section.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(section)}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-[9px]"
        style={{ background: `hsl(var(${section.colorVar}))` }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 rounded-[9px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 40% at 50% 0%, hsl(var(${section.colorVar}) / 0.08), transparent 70%)`,
        }}
      />

      {/* Region tag */}
      {section.regionTag && (
        <span className="absolute -top-2 left-3 font-mono-jb text-[8px] uppercase tracking-[0.1em] text-map-txt-faint bg-map-bg2 px-1 pointer-events-none">
          {section.regionTag}
        </span>
      )}

      {/* Content */}
      <div className="p-2.5">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-6 h-6 rounded flex items-center justify-center text-xs shrink-0"
            style={{
              background: `hsl(var(${section.colorVar}) / 0.14)`,
              border: `1px solid hsl(var(${section.colorVar}) / 0.22)`,
            }}
          >
            {section.icon}
          </div>
          <div
            className="font-syne text-[10px] font-bold uppercase tracking-[0.06em] leading-tight"
            style={{ color: `hsl(var(${section.colorVar}))` }}
          >
            {section.title}
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono-jb text-[9px] text-map-txt-dim">
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-map-white shrink-0" />
            {aiCount} AI
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-map-txt-faint shrink-0" />
            {incCount} inc
          </span>
        </div>
      </div>
    </div>
  );
}
