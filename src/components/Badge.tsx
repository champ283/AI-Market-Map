import { BadgeType } from '@/data/marketMapData';

// ── Aeris Partners brand palette ─────────────────────────────────────────────
// Primary:   rgb(13,  8,  48)  — deep navy
// Secondary: rgb( 3, 64, 120)  — dark blue
// Tertiary:  rgb(46,145, 184)  — medium blue
// Color 4:   rgb(120,207, 228) — light blue
// Color 5:   rgb(173,203, 227) — pale blue
// Color 7:   rgb(166,166, 166) — medium gray
// Color 8:   rgb(109,109, 109) — dark gray
// Font:      rgb( 54, 54,  54) — body text
// ─────────────────────────────────────────────────────────────────────────────

// Used when badge appears ON LIGHT/WHITE backgrounds (Legend)
export const badgeStyles: Record<BadgeType, string> = {
  'ai-scaled':  'bg-[rgb(13,8,48)]/8 text-[rgb(13,8,48)] border-[rgb(13,8,48)]/20',
  'ai-emerging':'bg-[rgb(46,145,184)]/12 text-[rgb(3,64,120)] border-[rgb(46,145,184)]/30',
  'ai-enhanced':'bg-[rgb(120,207,228)]/18 text-[rgb(3,64,120)] border-[rgb(120,207,228)]/32',
  'llm':        'bg-[rgb(3,64,120)]/10 text-[rgb(3,64,120)] border-[rgb(3,64,120)]/22 font-semibold',
  'incumbent':  'bg-[rgb(109,109,109)]/10 text-[rgb(54,54,54)] border-[rgb(109,109,109)]/22',
  'multi':      'bg-[rgb(173,203,227)]/22 text-[rgb(3,64,120)] border-[rgb(173,203,227)]/38',
};

// Used when badge appears ON DARK CARD backgrounds (ChipItem, SectionPanel)
export const badgeOnDarkStyles: Record<BadgeType, string> = {
  'ai-scaled':  'bg-white/12 text-white border-white/22',
  'ai-emerging':'bg-[rgb(46,145,184)]/22 text-[rgb(120,207,228)] border-[rgb(46,145,184)]/38',
  'ai-enhanced':'bg-[rgb(120,207,228)]/15 text-[rgb(173,203,227)] border-[rgb(120,207,228)]/28',
  'llm':        'bg-[rgb(3,64,120)]/35 text-[rgb(120,207,228)] border-[rgb(3,64,120)]/50 font-semibold',
  'incumbent':  'bg-white/5 text-[rgb(166,166,166)] border-white/10',
  'multi':      'bg-[rgb(173,203,227)]/18 text-[rgb(173,203,227)] border-[rgb(173,203,227)]/28',
};

// Filter bar — button ACTIVE (clicked/selected)
export const badgeActiveStyles: Record<BadgeType, string> = {
  'ai-scaled':  'bg-[rgb(13,8,48)] text-white border-[rgb(13,8,48)]',
  'ai-emerging':'bg-[rgb(46,145,184)] text-white border-[rgb(46,145,184)]',
  'ai-enhanced':'bg-[rgb(120,207,228)] text-[rgb(13,8,48)] border-[rgb(120,207,228)]',
  'llm':        'bg-[rgb(3,64,120)] text-white border-[rgb(3,64,120)] font-semibold',
  'incumbent':  'bg-[rgb(109,109,109)] text-white border-[rgb(109,109,109)]',
  'multi':      'bg-[rgb(173,203,227)] text-[rgb(13,8,48)] border-[rgb(173,203,227)]',
};

// Filter bar — button INACTIVE (default state)
export const badgeInactiveStyles: Record<BadgeType, string> = {
  'ai-scaled':  'bg-white border-[rgb(217,217,217)] text-[rgb(109,109,109)] hover:border-[rgb(13,8,48)]  hover:text-[rgb(13,8,48)]',
  'ai-emerging':'bg-white border-[rgb(217,217,217)] text-[rgb(109,109,109)] hover:border-[rgb(46,145,184)] hover:text-[rgb(46,145,184)]',
  'ai-enhanced':'bg-white border-[rgb(217,217,217)] text-[rgb(109,109,109)] hover:border-[rgb(3,64,120)]  hover:text-[rgb(3,64,120)]',
  'llm':        'bg-white border-[rgb(217,217,217)] text-[rgb(109,109,109)] hover:border-[rgb(3,64,120)]  hover:text-[rgb(3,64,120)]',
  'incumbent':  'bg-white border-[rgb(217,217,217)] text-[rgb(109,109,109)] hover:border-[rgb(109,109,109)] hover:text-[rgb(54,54,54)]',
  'multi':      'bg-white border-[rgb(217,217,217)] text-[rgb(109,109,109)] hover:border-[rgb(173,203,227)] hover:text-[rgb(3,64,120)]',
};

const badgeLabels: Record<BadgeType, string> = {
  'ai-scaled':   'AI SCALED',
  'ai-emerging': 'AI EMERGING',
  'ai-enhanced': 'AI ENHANCED',
  'llm':         'LLM',
  'incumbent':   '🏛 INCUMBENT',
  'multi':       '↗',
};

export function Badge({ type, onDark = false }: { type: BadgeType; onDark?: boolean }) {
  const styleClass = onDark ? badgeOnDarkStyles[type] : badgeStyles[type];
  return (
    <span
      className={`inline-block font-mono-jb text-[9.5px] font-medium px-1.5 rounded-[3px] leading-[1.7] border tracking-wider ${styleClass}`}
    >
      {badgeLabels[type]}
    </span>
  );
}
