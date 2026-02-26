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
      className={`absolute left-1/2 top-1/2 w-[208px] overflow-hidden rounded-[10px] bg-map-bg2 border border-map-line cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] origin-center ${
        isActive
          ? 'z-[150] saturate-[1.02] brightness-[1.03]'
          : isAnyHovered
          ? 'z-[1] saturate-[0.88] brightness-[0.92] opacity-80'
          : 'z-[1]'
      }`}
      style={{
        transform: `translate(-50%, -50%) rotate(${section.angle}deg) translate(${
          isActive ? 'min(17vw, 23vh, 222px)' : 'min(23vw, 31vh, 295px)'
        }) rotate(${-section.angle}deg) scale(${isActive ? 1.06 : 0.93})`,
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
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `hsl(var(${section.colorVar}))` }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 40% at 50% 0%, hsl(var(${section.colorVar}) / 0.10), transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="p-3 pt-4">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-base shrink-0 leading-none">{section.icon}</span>
          <div
            className="font-syne text-[11px] font-bold uppercase tracking-[0.05em] leading-tight line-clamp-2 overflow-hidden min-w-0"
            style={{ color: `hsl(var(${section.colorVar}))` }}
          >
            {section.title}
          </div>
        </div>

        <div className="flex items-center gap-2.5 font-mono-jb text-[9.5px] text-map-txt-dim">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-map-white shrink-0" />
            {aiCount} AI
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-map-txt-faint shrink-0" />
            {incCount} inc
          </span>
        </div>
      </div>
    </div>
  );
}
