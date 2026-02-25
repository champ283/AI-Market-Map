import { SectionData } from '@/data/marketMapData';

interface SectionCardProps {
  section: SectionData;
  onClick: (section: SectionData) => void;
  children: React.ReactNode;
  className?: string;
}

export function SectionCard({ section, onClick, children, className = '' }: SectionCardProps) {
  return (
    <div
      className={`relative rounded-[9px] bg-map-bg2 border border-map-line cursor-pointer transition-all hover:border-map-line2 active:scale-[0.98] ${className}`}
      onClick={() => onClick(section)}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-[9px]"
        style={{ background: `hsl(var(${section.colorVar}))` }}
      />
      <div
        className="absolute inset-0 rounded-[9px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 40% at 50% 0%, hsl(var(${section.colorVar}) / 0.08), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
