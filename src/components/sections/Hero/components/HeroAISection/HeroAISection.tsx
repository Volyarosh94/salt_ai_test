'use client';

import { GradientButton } from '@/components/ui/GradientButton';
import styles from '../../styles/hero-ai-section.module.css';

interface HeroAISectionProps {
  isVisible: boolean;
  isTableVisible: boolean;
}

export function HeroAISection({ isVisible, isTableVisible }: HeroAISectionProps) {
  const aiSectionClasses = [
    styles.aiSection,
    isVisible ? styles.visible : '',
    isTableVisible ? styles.tableVisible : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={aiSectionClasses}>
      <div className={styles.aiContent}>
        <div className={styles.aiTextContent}>
          <h2 className={styles.aiTitle}>
            Crowdsourcing our collective intelligence to build the best AI
          </h2>
          <p className={styles.aiDescription}>
            Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars. Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.
          </p>
          <GradientButton
            variant="outline"
            size="lg"
            aria-label="Use The Cutting Edge AI"
          >
            Use The Cutting Edge AI
          </GradientButton>
        </div>
      </div>
    </div>
  );
}

