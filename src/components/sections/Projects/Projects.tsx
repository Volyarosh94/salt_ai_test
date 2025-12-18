'use client';

import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  { name: 'Solana', logo: '/images/solana.png', alt: 'Solana logo' },
  { name: 'Arweave', logo: '/images/arweave.png', alt: 'Arweave logo' },
  { name: 'Bittensor', logo: '/images/bittensor.png', alt: 'Bittensor logo' },
  { name: 'Ionic', logo: '/images/lonic.png', alt: 'Ionic logo' },
  { name: 'Telegram', logo: '/images/telegram.png', alt: 'Telegram logo' },
];

export function Projects() {
  return (
    <section className={styles.projects} aria-labelledby="projects-title" id="projects">
      <div className={styles.content}>
        <h2 className={styles.title} id="projects-title">
          Projects integrated into the Arrakis AI Ecosystem
        </h2>
        <div className={styles.logosContainer} role="list" aria-label="Integrated projects">
          {projects.map((project) => (
            <div key={project.name} className={styles.logoItem} role="listitem">
              <Image
                src={project.logo}
                alt={project.alt}
                width={200}
                height={60}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

