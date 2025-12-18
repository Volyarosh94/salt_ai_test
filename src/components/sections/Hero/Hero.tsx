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

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
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
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className={`${styles.hero} ${isVisible ? styles.scrolled : ''} ${isProjectsVisible ? styles.projectsVisible : ''}`} 
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
    </section>
  );
}

