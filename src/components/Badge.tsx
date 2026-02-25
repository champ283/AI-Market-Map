import { BadgeType } from '@/data/marketMapData';

const badgeStyles: Record<BadgeType, string> = {
  'ai-scaled': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'ai-emerging': 'bg-orange-400/15 text-orange-400 border-orange-400/30',
  'ai-enhanced': 'bg-yellow-500/15 text-yellow-500 border-yellow-500/30',
  'llm': 'bg-violet-400/15 text-violet-300 border-violet-400/30 font-semibold',
  'incumbent': 'bg-slate-500/20 text-slate-400 border-slate-500/35',
  'multi': 'bg-amber-700/20 text-amber-600 border-amber-700/30',
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
