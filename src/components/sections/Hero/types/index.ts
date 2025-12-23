export type TrendType = 'up' | 'down' | 'neutral';

export interface LeaderboardModel {
  rank: number;
  name: string;
  average: string;
  arc: string;
  hellaswag: string;
  mmlu: string;
  truthfulqa: string;
  winogrande: string;
  gsm8k: string;
  earnings: string;
  trend: TrendType;
}

export interface StatCard {
  value: string;
  label: string;
}

export interface Project {
  name: string;
  logo: string;
  alt: string;
}

export interface HeroScrollState {
  isVisible: boolean;
  isTableVisible: boolean;
  isProjectsVisible: boolean;
  isAISectionVisible: boolean;
}

