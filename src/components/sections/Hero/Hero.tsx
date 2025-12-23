'use client';

import { useRef } from 'react';
import { useHeroScroll } from './hooks';
import {
  HeroBackground,
  HeroContent,
  HeroStatistics,
  HeroProjects,
  HeroAISection,
  HeroLeaderboard,
} from './components';
import styles from './styles/hero.module.css';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { isVisible, isTableVisible, isProjectsVisible, isAISectionVisible } = useHeroScroll();

  return (
    <section 
      ref={heroRef} 
      className={`${styles.hero} ${isVisible ? styles.scrolled : ''} ${isTableVisible ? styles.tableVisible : ''} ${isProjectsVisible ? styles.projectsVisible : ''} ${isAISectionVisible ? styles.aiSectionVisible : ''}`} 
      aria-labelledby="hero-title"
    >
      <HeroBackground 
        isProjectsVisible={isProjectsVisible}
        isTableVisible={isTableVisible}
      />
      
      <HeroContent 
        isVisible={isVisible}
        isProjectsVisible={isProjectsVisible}
        isAISectionVisible={isAISectionVisible}
        isTableVisible={isTableVisible}
      />

      <HeroStatistics 
        isVisible={isVisible}
        isAISectionVisible={isAISectionVisible}
        isProjectsVisible={isProjectsVisible}
        isTableVisible={isTableVisible}
      />

      <HeroProjects 
        isVisible={isProjectsVisible}
        isAISectionVisible={isAISectionVisible}
        isTableVisible={isTableVisible}
      />

      <HeroAISection 
        isVisible={isAISectionVisible}
        isTableVisible={isTableVisible}
      />

      <HeroLeaderboard 
        isVisible={isTableVisible}
      />
    </section>
  );
}
