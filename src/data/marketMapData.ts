export type BadgeType = 'ai-scaled' | 'ai-emerging' | 'ai-enhanced' | 'llm' | 'incumbent' | 'multi';
export type DotType = 'scaled' | 'emerging' | 'llm' | 'incumbent';

export interface ChipData {
  name: string;
  href: string;
  domain: string;
  dot: DotType;
  badges: BadgeType[];
  type: 'ai' | 'llm' | 'incumbent';
}

export interface SectionData {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  regionTag?: string;
  colorVar: string;
  angle: number;
  chips: ChipData[];
  gridCols?: number;
}

export const sections: SectionData[] = [
  {
    id: 'ppt-in',
    icon: '📊',
    title: 'PowerPoint In-App Tools',
    subtitle: 'Add-ins & plugins within PPTX',
    regionTag: 'Presentation Layer',
    colorVar: '--c-ppt-in',
    angle: -90,
    chips: [
      { name: 'Claude in PowerPoint', href: 'https://www.anthropic.com', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Claude Cowork', href: 'https://www.anthropic.com', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Microsoft Copilot', href: 'https://copilot.microsoft.com', domain: 'microsoft.com', dot: 'scaled', badges: ['ai-enhanced', 'multi'], type: 'ai' },
      { name: 'Gamma', href: 'https://gamma.app', domain: 'gamma.app', dot: 'emerging', badges: ['ai-scaled'], type: 'ai' },
      { name: 'think-cell', href: 'https://www.thinkcell.com', domain: 'thinkcell.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Macabacus', href: 'https://www.macabacus.com', domain: 'macabacus.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'Templafy', href: 'https://www.templafy.com', domain: 'templafy.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Noun Project', href: 'https://thenounproject.com', domain: 'thenounproject.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'LogoIntern', href: 'https://logointern.com', domain: 'logointern.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'FactSet PPT Add-in', href: 'https://www.factset.com', domain: 'factset.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
    ],
  },
  {
    id: 'ppt-out',
    icon: '🎨',
    title: 'Presentation Standalone',
    subtitle: 'AI-generated decks & design tools',
    colorVar: '--c-ppt-out',
    angle: -45,
    chips: [
      { name: 'Claude (Artifacts)', href: 'https://claude.ai', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Gamma', href: 'https://gamma.app', domain: 'gamma.app', dot: 'scaled', badges: ['ai-scaled'], type: 'ai' },
      { name: 'Maywood AI', href: 'https://www.maywoodai.com', domain: 'maywoodai.com', dot: 'emerging', badges: ['ai-emerging', 'multi'], type: 'ai' },
      { name: 'Tome', href: 'https://tome.app', domain: 'tome.app', dot: 'scaled', badges: ['ai-scaled'], type: 'ai' },
      { name: 'ChatGPT (Decks)', href: 'https://chatgpt.com', domain: 'openai.com', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'PowerPoint', href: 'https://www.microsoft.com', domain: 'microsoft.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Canva', href: 'https://www.canva.com', domain: 'canva.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Beautiful.ai', href: 'https://www.beautiful.ai', domain: 'beautiful.ai', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Pitch', href: 'https://pitch.com', domain: 'pitch.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
    ],
  },
  {
    id: 'market',
    icon: '📈',
    title: 'Market Data & Research Platforms',
    subtitle: 'Data, deal flow, company & sector intelligence',
    regionTag: 'Research & Intelligence',
    colorVar: '--c-market',
    angle: 0,
    chips: [
      { name: 'Rogo - IB AI Analyst', href: 'https://rogo.ai', domain: 'rogo.ai', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'AlphaSense', href: 'https://www.alpha-sense.com', domain: 'alpha-sense.com', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Daloopa - AI Data Layer', href: 'https://daloopa.com', domain: 'daloopa.com', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Harmonic', href: 'https://harmonic.ai', domain: 'harmonic.ai', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Finchat.io', href: 'https://finchat.io', domain: 'finchat.io', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Capix', href: 'https://capix.ai', domain: 'capix.ai', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Auquan', href: 'https://auquan.com', domain: 'auquan.com', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Bloomberg Terminal', href: 'https://www.bloomberg.com/professional', domain: 'bloomberg.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'S&P Capital IQ', href: 'https://www.spglobal.com', domain: 'spglobal.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'FactSet', href: 'https://www.factset.com', domain: 'factset.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'PitchBook', href: 'https://pitchbook.com', domain: 'pitchbook.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'CB Insights', href: 'https://www.cbinsights.com', domain: 'cbinsights.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Crunchbase', href: 'https://www.crunchbase.com', domain: 'crunchbase.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Dealroom', href: 'https://dealroom.co', domain: 'dealroom.co', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Refinitiv / LSEG', href: 'https://www.lseg.com', domain: 'lseg.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Tegus', href: 'https://www.tegus.com', domain: 'tegus.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
    ],
  },
  {
    id: 'excel',
    icon: '📋',
    title: 'Excel & Spreadsheet Tools',
    subtitle: 'AI extensions, financial modeling & data-pull add-ins',
    regionTag: 'Quantitative Layer',
    colorVar: '--c-excel',
    angle: 45,
    gridCols: 2,
    chips: [
      { name: 'Claude in Excel', href: 'https://www.anthropic.com', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Claude Code (Quant)', href: 'https://www.anthropic.com', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Copilot in Excel', href: 'https://copilot.microsoft.com', domain: 'microsoft.com', dot: 'scaled', badges: ['ai-enhanced', 'multi'], type: 'ai' },
      { name: 'Daloopa (Excel MCP)', href: 'https://daloopa.com', domain: 'daloopa.com', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Causal', href: 'https://causal.app', domain: 'causal.app', dot: 'scaled', badges: ['ai-scaled'], type: 'ai' },
      { name: 'Equals', href: 'https://equals.com', domain: 'equals.com', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Neptyne', href: 'https://neptyne.com', domain: 'neptyne.com', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Runway FP&A', href: 'https://runway.com', domain: 'runway.com', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Microsoft Excel', href: 'https://www.microsoft.com', domain: 'microsoft.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Macabacus', href: 'https://www.macabacus.com', domain: 'macabacus.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'Bloomberg Excel', href: 'https://bloomberg.com', domain: 'bloomberg.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'Capital IQ Excel', href: 'https://www.spglobal.com', domain: 'spglobal.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'FactSet Excel', href: 'https://www.factset.com', domain: 'factset.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
    ],
  },
  {
    id: 'agentic',
    icon: '🤖',
    title: 'LLM Chatbots & Agentic AI',
    subtitle: 'AI-native analysts, autonomous agents & finance-specific LLM platforms',
    regionTag: 'AI Intelligence Layer',
    colorVar: '--c-agentic',
    angle: 90,
    gridCols: 3,
    chips: [
      { name: 'ChatGPT (OpenAI)', href: 'https://chatgpt.com', domain: 'openai.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Claude (Anthropic)', href: 'https://claude.ai', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Gemini (Google)', href: 'https://gemini.google.com', domain: 'google.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Microsoft Copilot', href: 'https://copilot.microsoft.com', domain: 'microsoft.com', dot: 'scaled', badges: ['ai-enhanced', 'multi'], type: 'ai' },
      { name: 'Perplexity', href: 'https://perplexity.ai', domain: 'perplexity.ai', dot: 'scaled', badges: ['ai-enhanced'], type: 'ai' },
      { name: 'Rogo ($75M raised)', href: 'https://rogo.ai', domain: 'rogo.ai', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Hebbia (a16z backed)', href: 'https://hebbia.ai', domain: 'hebbia.ai', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Harvey (Finance/Legal AI)', href: 'https://harvey.ai', domain: 'harvey.ai', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Maywood AI (YC)', href: 'https://www.maywoodai.com', domain: 'maywoodai.com', dot: 'emerging', badges: ['ai-emerging', 'multi'], type: 'ai' },
      { name: 'OffDeal (AI-Native IB)', href: 'https://www.offdeal.com', domain: 'offdeal.com', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Clarum (YC - PE AI)', href: 'https://clarum.ai', domain: 'clarum.ai', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Finpilot (LP/Allocator AI)', href: 'https://www.finpilot.ai', domain: 'finpilot.ai', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'ChatFin (Deal Copilot)', href: 'https://chatfin.ai', domain: 'chatfin.ai', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Glean (Enterprise Search)', href: 'https://glean.com', domain: 'glean.com', dot: 'scaled', badges: ['ai-scaled'], type: 'ai' },
    ],
  },
  {
    id: 'diligence',
    icon: '🔍',
    title: 'Document Review & Due Diligence AI',
    subtitle: 'CIM analysis, VDR intelligence, contract AI',
    regionTag: 'Deal Execution',
    colorVar: '--c-diligence',
    angle: 135,
    chips: [
      { name: 'Claude Cowork', href: 'https://www.anthropic.com', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Hebbia (Matrix)', href: 'https://hebbia.ai', domain: 'hebbia.ai', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Harvey', href: 'https://harvey.ai', domain: 'harvey.ai', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Rogo (CIM Analysis)', href: 'https://rogo.ai', domain: 'rogo.ai', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Maywood AI (Diligence)', href: 'https://www.maywoodai.com', domain: 'maywoodai.com', dot: 'emerging', badges: ['ai-emerging', 'multi'], type: 'ai' },
      { name: 'Genie AI', href: 'https://genieai.co', domain: 'genieai.co', dot: 'emerging', badges: ['ai-emerging'], type: 'ai' },
      { name: 'Kira Systems', href: 'https://kirasystems.com', domain: 'kirasystems.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Luminance', href: 'https://www.luminance.com', domain: 'luminance.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'iManage', href: 'https://imanage.com', domain: 'imanage.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
    ],
  },
  {
    id: 'modeling',
    icon: '📐',
    title: 'Financial Modeling & Quant Analysis',
    subtitle: 'AI-assisted DCF, comps, scenario modeling',
    colorVar: '--c-modeling',
    angle: 180,
    chips: [
      { name: 'Claude Code', href: 'https://claude.ai/code', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Claude Cowork', href: 'https://www.anthropic.com', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Rogo (Valuation AI)', href: 'https://rogo.ai', domain: 'rogo.ai', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Daloopa', href: 'https://daloopa.com', domain: 'daloopa.com', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Finchat.io', href: 'https://finchat.io', domain: 'finchat.io', dot: 'emerging', badges: ['ai-emerging', 'multi'], type: 'ai' },
      { name: 'Causal (FP&A)', href: 'https://causal.app', domain: 'causal.app', dot: 'scaled', badges: ['ai-scaled', 'multi'], type: 'ai' },
      { name: 'Visible Alpha', href: 'https://visiblealpha.com', domain: 'visiblealpha.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Tegus', href: 'https://www.tegus.com', domain: 'tegus.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'Quantrix', href: 'https://www.quantrix.com', domain: 'quantrix.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
    ],
  },
  {
    id: 'workflow',
    icon: '⚡',
    title: 'Workflow, Collaboration & Design Assets',
    subtitle: 'Meeting AI, comms, asset libraries & agentic productivity',
    regionTag: 'Collaboration & Productivity',
    colorVar: '--c-workflow',
    angle: 225,
    gridCols: 2,
    chips: [
      { name: 'Claude Cowork', href: 'https://www.anthropic.com', domain: 'anthropic.com', dot: 'llm', badges: ['llm', 'multi'], type: 'llm' },
      { name: 'Granola (Meeting AI)', href: 'https://granola.so', domain: 'granola.so', dot: 'scaled', badges: ['ai-scaled'], type: 'ai' },
      { name: 'Otter.ai', href: 'https://otter.ai', domain: 'otter.ai', dot: 'scaled', badges: ['ai-enhanced'], type: 'ai' },
      { name: 'Fireflies.ai', href: 'https://fireflies.ai', domain: 'fireflies.ai', dot: 'scaled', badges: ['ai-scaled'], type: 'ai' },
      { name: 'Superhuman', href: 'https://superhuman.com', domain: 'superhuman.com', dot: 'scaled', badges: ['ai-enhanced'], type: 'ai' },
      { name: 'Notion AI', href: 'https://notion.so', domain: 'notion.so', dot: 'scaled', badges: ['ai-enhanced'], type: 'ai' },
      { name: 'Microsoft Teams', href: 'https://www.microsoft.com', domain: 'microsoft.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Slack', href: 'https://slack.com', domain: 'slack.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
      { name: 'Noun Project', href: 'https://thenounproject.com', domain: 'thenounproject.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'LogoIntern', href: 'https://logointern.com', domain: 'logointern.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'Icons8', href: 'https://icons8.com', domain: 'icons8.com', dot: 'incumbent', badges: ['incumbent', 'multi'], type: 'incumbent' },
      { name: 'Loom', href: 'https://www.loom.com', domain: 'loom.com', dot: 'incumbent', badges: ['incumbent'], type: 'incumbent' },
    ],
  },
];
