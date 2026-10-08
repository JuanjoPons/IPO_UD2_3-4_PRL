export type Language = 'ca' | 'es';

export interface HazardItem {
  id: string;
  number: number;
  title: Record<Language, string>;
  category: 'EPI' | 'COLLECTIVA' | 'PREVENCIO';
  categoryLabel: Record<Language, string>;
  zoneName: Record<Language, string>;
  riskDescription: Record<Language, string>;
  solutionMissing: Record<Language, string>;
  detailedPedagogy: Record<Language, string>;
  equippedTitle: Record<Language, string>;
  isFound: boolean;
  // Percentage coordinates on the interactive shipyard SVG canvas (0 to 100)
  x: number;
  y: number;
}

export interface PPEBodyZone {
  id: string;
  name: Record<Language, string>;
  icon: string;
  items: Record<Language, string[]>;
  purpose: Record<Language, string>;
  boatApplication: Record<Language, string>;
  normative: string;
}
