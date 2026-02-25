import { BadgeType } from '@/data/marketMapData';

export const badgeStyles: Record<BadgeType, string> = {
  'ai-scaled': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'ai-emerging': 'bg-orange-400/15 text-orange-400 border-orange-400/30',
  'ai-enhanced': 'bg-yellow-500/15 text-yellow-500 border-yellow-500/30',
  'llm': 'bg-violet-400/15 text-violet-300 border-violet-400/30 font-semibold',
  'incumbent': 'bg-slate-500/20 text-slate-400 border-slate-500/35',
  'multi': 'bg-amber-700/20 text-amber-600 border-amber-700/30',
};

export const badgeActiveStyles: Record<BadgeType, string> = {
  'ai-scaled': 'bg-emerald-500/25 border-emerald-500/50 text-emerald-400',
  'ai-emerging': 'bg-orange-400/20 border-orange-400/50 text-orange-400',
  'ai-enhanced': 'bg-yellow-500/20 border-yellow-500/50 text-yellow-500',
  'llm': 'bg-violet-400/20 border-violet-400/50 text-violet-300',
  'incumbent': 'bg-slate-500/25 border-slate-500/50 text-slate-400',
  'multi': 'bg-amber-700/25 border-amber-600/50 text-amber-500',
};

export const badgeInactiveStyles: Record<BadgeType, string> = {
  'ai-scaled': 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-emerald-500/30 hover:text-emerald-400',
  'ai-emerging': 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-orange-400/30 hover:text-orange-400',
  'ai-enhanced': 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-yellow-500/30 hover:text-yellow-500',
  'llm': 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-violet-400/30 hover:text-violet-300',
  'incumbent': 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-slate-500/30 hover:text-slate-400',
  'multi': 'bg-map-bg3 border-map-line text-map-txt-dim hover:border-amber-600/30 hover:text-amber-500',
};

const badgeLabels: Record<BadgeType, string> = {
  'ai-scaled': 'AI SCALED',
  'ai-emerging': 'AI EMERGING',
  'ai-enhanced': 'AI ENHANCED',
  'llm': 'LLM',
  'incumbent': '🏛 INCUMBENT',
  'multi': '↗',
};

export function Badge({ type }: { type: BadgeType }) {
  return (
    <span
      className={`inline-block font-mono-jb text-[9.5px] font-medium px-1.5 rounded-[3px] leading-[1.7] border tracking-wider ${badgeStyles[type]}`}
    >
      {badgeLabels[type]}
    </span>
  );
}
