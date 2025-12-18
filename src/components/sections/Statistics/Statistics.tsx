'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Statistics.module.css';

interface StatCard {
  value: string;
  label: string;
}

const stats: StatCard[] = [
  { value: '1,873', label: 'LLM models' },
  { value: '$326,734', label: 'Paid to data scientists' },
  { value: '6,557', label: 'Developers' },
];

export function Statistics() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.statistics} ${visible ? styles.visible : ''}`}
      aria-label="Statistics"
    >
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
