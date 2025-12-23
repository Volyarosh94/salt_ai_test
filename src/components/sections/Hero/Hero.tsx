'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GradientText } from '@/components/ui/GradientText';
import { GradientButton } from '@/components/ui/GradientButton';
import { NavLink } from '@/components/ui/NavLink';
import styles from './Hero.module.css';

const stats = [
  { value: '1,873', label: 'LLM models' },
  { value: '$326,734', label: 'Paid to data scientists' },
  { value: '6,557', label: 'Developers' },
];

const projects = [
  { name: 'Solana', logo: '/images/solana.png', alt: 'Solana logo' },
  { name: 'Arweave', logo: '/images/arweave.png', alt: 'Arweave logo' },
  { name: 'Bittensor', logo: '/images/bittensor.png', alt: 'Bittensor logo' },
  { name: 'Ionic', logo: '/images/lonic.png', alt: 'Ionic logo' },
  { name: 'Telegram', logo: '/images/telegram.png', alt: 'Telegram logo' },
];

type TrendType = 'up' | 'down' | 'neutral';

interface LeaderboardModel {
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

const leaderboardData: LeaderboardModel[] = [
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

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isAISectionVisible, setIsAISectionVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollProgress = scrollY / windowHeight;
      
      if (scrollProgress > 0.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (scrollProgress > 0.8) {
        setIsProjectsVisible(true);
      } else {
        setIsProjectsVisible(false);
      }

      if (scrollProgress > 0.8 && scrollProgress < 2.0) {
        setIsAISectionVisible(true);
      } else {
        setIsAISectionVisible(false);
      }

      if (scrollProgress > 1.4) {
        setIsTableVisible(true);
      } else {
        setIsTableVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className={`${styles.hero} ${isVisible ? styles.scrolled : ''} ${isTableVisible ? styles.tableVisible : ''} ${isProjectsVisible ? styles.projectsVisible : ''} ${isAISectionVisible ? styles.aiSectionVisible : ''}`} 
      aria-labelledby="hero-title"
    >
      <div className={styles.background} aria-hidden="true">
        <div className={styles.moonLayer}>
          <Image
            src="/images/moon.png"
            alt=""
            width={1016}
            height={1016}
            className={styles.moon}
            priority
          />
        </div>
        <div className={styles.blurLayer}>
          <Image
            src="/images/blueBlur.png"
            alt=""
            width={505}
            height={796}
            className={styles.blurBlue}
            priority
          />
          <Image
            src="/images/orangeBlur.png"
            alt=""
            width={505}
            height={796}
            className={styles.blurOrange}
            priority
          />
        </div>
      </div>

      <div className={styles.content}>
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

      <div className={`${styles.statistics} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
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

      <div className={`${styles.projectsContent} ${isProjectsVisible ? styles.projectsVisible : ''}`}>
        <div className={styles.projectsWrapper}>
          <h2 className={styles.projectsTitle} id="projects-title">
            Projects integrated into the Arrakis AI Ecosystem
          </h2>
          <div className={styles.projectsLogosContainer} role="list" aria-label="Integrated projects">
            {projects.map((project, index) => (
              <div key={project.name} className={styles.projectsLogoItem} role="listitem" data-logo={project.name}>
                <Image
                  src={project.logo}
                  alt={project.alt}
                  width={200}
                  height={60}
                  className={styles.projectsLogo}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.aiSection} ${isAISectionVisible ? styles.visible : ''}`}>
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

      <div className={`${styles.leaderboardSection} ${isTableVisible ? styles.visible : ''}`}>
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
            {leaderboardData.map((model) => (
              <div key={model.rank} className={styles.tableRow}>
                <div>
                  {model.rank}
                  {model.trend === 'up' && (
                    <span className={styles.trendIcon} style={{ color: '#4CAF50' }}>↑</span>
                  )}
                  {model.trend === 'down' && (
                    <span className={styles.trendIcon} style={{ color: '#F44336' }}>↓</span>
                  )}
                  {model.trend === 'neutral' && (
                    <span className={styles.trendIcon} style={{ color: '#999' }}>—</span>
                  )}
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
    </section>
  );
}

