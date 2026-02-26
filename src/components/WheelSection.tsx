import { SectionData } from '@/data/marketMapData';

// ── Layout constants (tune to adjust the oval) ────────────────────────────────
const CARD_W    = '178px';  // card width
const CARD_H    = '148px';  // card height (slightly wider than tall)
const RX_REST   = 295;      // horizontal orbit radius (px) — wider axis
const RY_REST   = 162;      // vertical orbit radius (px)  — tighter axis → oval
const RX_ACTIVE = 268;      // hover pull-in, horizontal
const RY_ACTIVE = 146;      // hover pull-in, vertical
const S_REST    = 0.93;     // resting scale (breathing room)
const S_ACTIVE  = 1.08;     // hover pop-out scale
// ─────────────────────────────────────────────────────────────────────────────

// Cards whose brand color is light enough to require dark text
const LIGHT_VARS = new Set(['--c-excel', '--c-agentic', '--c-diligence', '--c-modeling']);

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
  const aiCount  = section.chips.filter((c) => c.type !== 'incumbent').length;
  const incCount = section.chips.filter((c) => c.type === 'incumbent').length;

  // Adaptive text colors based on card background lightness
  const isLight       = LIGHT_VARS.has(section.colorVar);
  const textPrimary   = isLight ? 'rgb(13,8,48)'           : 'rgba(255,255,255,0.95)';
  const textSecondary = isLight ? 'rgba(13,8,48,0.45)'     : 'rgba(255,255,255,0.45)';

  // Ellipse position: cards placed on oval rather than circle
  const rad = (section.angle * Math.PI) / 180;
  const rx  = isActive ? RX_ACTIVE : RX_REST;
  const ry  = isActive ? RY_ACTIVE : RY_REST;
  const tx  = rx * Math.cos(rad);
  const ty  = ry * Math.sin(rad);

  return (
    <div
      className={`absolute left-1/2 top-1/2 overflow-hidden rounded-[7px] cursor-pointer
        transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] origin-center ${
        isActive
          ? 'z-[150]'
          : isAnyHovered
          ? 'z-[1] opacity-50 saturate-50'
          : 'z-[1]'
      }`}
      style={{
        width:      CARD_W,
        height:     CARD_H,
        background: `hsl(var(${section.colorVar}))`,
        border:     isLight
          ? '1px solid rgba(0,0,0,0.09)'
          : '1px solid rgba(255,255,255,0.10)',
        transform:  `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${
          isActive ? S_ACTIVE : S_REST
        })`,
        boxShadow:  isActive
          ? '0 0 0 2px rgba(255,255,255,0.5), 0 20px 50px rgba(0,0,0,0.45)'
          : '0 4px 18px rgba(0,0,0,0.22)',
      }}
      onMouseEnter={() => onHover(section.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(section)}
    >
      {/* Subtle inner highlight at top for depth */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.18)' }}
      />

      {/* Content */}
      <div className="p-3 pt-[13px] flex flex-col h-full">

        {/* Icon + title */}
        <div className="flex-1 min-h-0">
          <span className="text-[15px] leading-none block mb-2">
            {section.icon}
          </span>
          <div
            className="font-syne text-[11px] font-bold uppercase tracking-[0.05em] leading-snug line-clamp-3"
            style={{ color: textPrimary }}
          >
            {section.title}
          </div>
        </div>

        {/* Counts */}
        <div
          className="shrink-0 flex items-center gap-2.5 font-mono-jb text-[9px] pt-1.5"
          style={{ color: textSecondary }}
        >
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: textSecondary }} />
            {aiCount} AI
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: textSecondary }} />
            {incCount} inc
          </span>
        </div>

      </div>
    </div>
  );
}
