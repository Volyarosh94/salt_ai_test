'use client';

import { GradientText } from '@/components/ui/GradientText';
import { GradientButton } from '@/components/ui/GradientButton';
import { NavLink } from '@/components/ui/NavLink';
import styles from '../../styles/hero-content.module.css';

interface HeroContentProps {
  isVisible: boolean;
  isProjectsVisible: boolean;
  isAISectionVisible: boolean;
  isTableVisible: boolean;
}

export function HeroContent({ isVisible, isProjectsVisible, isAISectionVisible, isTableVisible }: HeroContentProps) {
  const contentClasses = [
    styles.content,
    isVisible ? styles.scrolled : '',
    isProjectsVisible ? styles.projectsVisible : '',
    isAISectionVisible ? styles.aiSectionVisible : '',
    isTableVisible ? styles.tableVisible : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={contentClasses}>
      <div className={styles.title}>
        <GradientText 
          as="h1" 
          id="hero-title"
          data-scrolled={isVisible ? 'true' : 'false'}
        >
          <span className={styles.titleLine}>A new economic primitive</span>
          <span className={styles.titleLine}>for funding decentralized AI</span>
        </GradientText>
      </div>

      <p className={styles.subtitle}>
        We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
      </p>

      <div className={styles.actions} role="group" aria-label="Call to action buttons">
        <GradientButton
          variant="outline"
          size="lg"
          aria-label="Buy Salt AI tokens"
        >
          Buy Salt AI
        </GradientButton>
        <NavLink href="#try-now" className={styles.tryNow} aria-label="Try Salt AI now">
          Try Now
        </NavLink>
      </div>
    </div>
  );
}

