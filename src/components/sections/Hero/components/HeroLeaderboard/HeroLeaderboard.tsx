'use client';

import { GradientButton } from '@/components/ui/GradientButton';
import { LEADERBOARD_DATA } from '../../constants';
import { TrendType } from '../../types';
import styles from '../../styles/hero-leaderboard.module.css';

function TrendIcon({ trend }: { trend: TrendType }) {
  if (trend === 'up') {
    return <span className={styles.trendIcon} style={{ color: '#4CAF50' }}>↑</span>;
  }
  if (trend === 'down') {
    return <span className={styles.trendIcon} style={{ color: '#F44336' }}>↓</span>;
  }
  return <span className={styles.trendIcon} style={{ color: '#999' }}>—</span>;
}

export function HeroLeaderboard({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`${styles.leaderboardSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.leaderboardHeader}>
        <h2 className={styles.leaderboardTitle}>LLM Leaderboard</h2>
        <GradientButton
          variant="outline"
          size="md"
          aria-label="Submit your model"
        >
          Submit your model
        </GradientButton>
      </div>
      <p className={styles.leaderboardSubtitle}>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks. The higher the score, the better the LLM.
      </p>
      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div>#</div>
            <div>Model Name</div>
            <div>Average</div>
            <div>ARC</div>
            <div>HellaSwag</div>
            <div>MMLU</div>
            <div>TruthfulQA</div>
            <div>Winogrande</div>
            <div>GSM8K</div>
            <div>Earnings</div>
          </div>
          {LEADERBOARD_DATA.map((model) => (
            <div key={model.rank} className={styles.tableRow}>
              <div>
                {model.rank}
                <TrendIcon trend={model.trend} />
              </div>
              <div>{model.name}</div>
              <div>{model.average}</div>
              <div>{model.arc}</div>
              <div>{model.hellaswag}</div>
              <div>{model.mmlu}</div>
              <div>{model.truthfulqa}</div>
              <div>{model.winogrande}</div>
              <div>{model.gsm8k}</div>
              <div>{model.earnings}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

