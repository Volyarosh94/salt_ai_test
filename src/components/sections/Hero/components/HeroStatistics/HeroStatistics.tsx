'use client';

import { STATS } from '../../constants';
import styles from '../../styles/hero-statistics.module.css';

interface HeroStatisticsProps {
  isVisible: boolean;
  isAISectionVisible: boolean;
  isProjectsVisible: boolean;
  isTableVisible: boolean;
}

export function HeroStatistics({ isVisible, isAISectionVisible, isProjectsVisible, isTableVisible }: HeroStatisticsProps) {
  const statisticsClasses = [
    styles.statistics,
    isVisible ? styles.visible : '',
    isAISectionVisible ? styles.aiSectionVisible : '',
    isProjectsVisible ? styles.projectsVisible : '',
    isTableVisible ? styles.tableVisible : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={statisticsClasses}>
      <div className={styles.statsContainer}>
        {STATS.map((stat, index) => (
          <div
            key={index}
            className={styles.statCard}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

