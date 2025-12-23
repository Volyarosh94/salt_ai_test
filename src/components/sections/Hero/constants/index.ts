import { StatCard, Project, LeaderboardModel } from '../types';

export const STATS: StatCard[] = [
  { value: '1,873', label: 'LLM models' },
  { value: '$326,734', label: 'Paid to data scientists' },
  { value: '6,557', label: 'Developers' },
];

export const PROJECTS: Project[] = [
  { name: 'Solana', logo: '/images/solana.png', alt: 'Solana logo' },
  { name: 'Arweave', logo: '/images/arweave.png', alt: 'Arweave logo' },
  { name: 'Bittensor', logo: '/images/bittensor.png', alt: 'Bittensor logo' },
  { name: 'Ionic', logo: '/images/lonic.png', alt: 'Ionic logo' },
  { name: 'Telegram', logo: '/images/telegram.png', alt: 'Telegram logo' },
];

export const LEADERBOARD_DATA: LeaderboardModel[] = [
  { rank: 1, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'neutral' },
  { rank: 2, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'up' },
  { rank: 3, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'down' },
  { rank: 4, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'neutral' },
  { rank: 5, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'up' },
  { rank: 6, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'up' },
  { rank: 7, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'down' },
  { rank: 8, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'neutral' },
  { rank: 9, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'down' },
  { rank: 10, name: 'Model_Name123', average: '81.22', arc: '81.22', hellaswag: '81.22', mmlu: '81.22', truthfulqa: '81.22', winogrande: '81.22', gsm8k: '81.22', earnings: '2,854,004', trend: 'neutral' },
];

export const SCROLL_THRESHOLDS = {
  STATISTICS: 0.2,
  STATISTICS_END: 0.6, 
  PROJECTS_START: 0.6,
  PROJECTS_END: 1.2, 
  AI_SECTION_START: 1.2,
  AI_SECTION_END: 1.8, 
  TABLE_START: 1.8, 
  TABLE_END: 3.0, 
} as const;