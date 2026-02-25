import { ChipData } from '@/data/marketMapData';
import { Badge } from './Badge';

const dotStyles = {
  scaled: 'bg-map-white',
  emerging: 'bg-transparent border-[1.5px] border-dashed border-map-txt-dim',
  llm: 'bg-map-llm',
  incumbent: 'bg-map-txt-faint',
};

const chipBg = {
  ai: 'bg-map-bg3/80 border-map-line hover:bg-map-bg4 hover:border-map-line2 hover:-translate-y-0.5 hover:shadow-lg',
  llm: 'bg-map-bg3/80 border-map-line hover:bg-map-bg4 hover:border-map-line2 hover:-translate-y-0.5 hover:shadow-lg',
  incumbent: 'bg-white/[0.025] border-map-line opacity-70 hover:opacity-100 hover:bg-map-bg4 hover:border-map-line2 hover:-translate-y-px hover:shadow-md',
};

export function ChipItem({ chip }: { chip: ChipData }) {
  return (
    <a
      href={chip.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-1.5 px-2 py-1.5 rounded-[5px] border transition-all duration-150 cursor-pointer relative ${chipBg[chip.type]}`}
    >
      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotStyles[chip.dot]}`} />
      <img
        className="w-4 h-4 rounded-[3px] shrink-0 object-contain bg-white/5"
        src={`https://www.google.com/s2/favicons?domain=${chip.domain}&sz=32`}
        alt=""
        loading="lazy"
      />
      <span
        className={`text-[12px] font-medium truncate flex-1 min-w-0 ${
          chip.type === 'incumbent' ? 'text-map-txt-dim' : 'text-map-white'
        } ${chip.type === 'llm' ? 'font-semibold' : ''}`}
      >
        {chip.name}
      </span>
      <div className="flex gap-0.5 shrink-0">
        {chip.badges.map((b) => (
          <Badge key={b} type={b} />
        ))}
      </div>
      <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[8px] text-map-txt-faint opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ↗
      </span>
    </a>
  );
}
