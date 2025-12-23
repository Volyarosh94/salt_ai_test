'use client';

import Image from 'next/image';
import styles from '../../styles/hero-background.module.css';

interface HeroBackgroundProps {
  isProjectsVisible: boolean;
  isTableVisible: boolean;
}

export function HeroBackground({ isProjectsVisible, isTableVisible }: HeroBackgroundProps) {
  const moonClasses = [
    styles.moon,
    isProjectsVisible ? styles.projectsVisible : '',
    isTableVisible ? styles.tableVisible : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.moonLayer}>
        <Image
          src="/images/moon.png"
          alt=""
          width={1016}
          height={1016}
          className={moonClasses}
          priority
        />
      </div>
      <div className={styles.blurLayer}>
        <Image
          src="/images/blueBlur.png"
          alt=""
          width={505}
          height={796}
          className={`${styles.blurBlue} ${isTableVisible ? styles.tableVisible : ''}`}
          priority
        />
        <Image
          src="/images/orangeBlur.png"
          alt=""
          width={505}
          height={796}
          className={`${styles.blurOrange} ${isTableVisible ? styles.tableVisible : ''}`}
          priority
        />
      </div>
    </div>
  );
}

