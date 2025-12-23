'use client';

import Image from 'next/image';
import { PROJECTS } from '../../constants';
import styles from '../../styles/hero-projects.module.css';

interface HeroProjectsProps {
  isVisible: boolean;
  isAISectionVisible: boolean;
  isTableVisible: boolean;
}

export function HeroProjects({ isVisible, isAISectionVisible, isTableVisible }: HeroProjectsProps) {
  const projectsClasses = [
    styles.projectsContent,
    isVisible ? styles.projectsVisible : '',
    isAISectionVisible ? styles.aiSectionVisible : '',
    isTableVisible ? styles.tableVisible : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={projectsClasses}>
      <div className={styles.projectsWrapper}>
        <h2 className={styles.projectsTitle} id="projects-title">
          Projects integrated into the Arrakis AI Ecosystem
        </h2>
        <div className={styles.projectsLogosContainer} role="list" aria-label="Integrated projects">
          {PROJECTS.map((project, index) => (
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
  );
}

