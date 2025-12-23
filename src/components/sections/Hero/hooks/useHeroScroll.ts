import { useEffect, useState } from 'react';
import { HeroScrollState } from '../types';
import { SCROLL_THRESHOLDS } from '../constants';

export function useHeroScroll(): HeroScrollState {
  const [isVisible, setIsVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isAISectionVisible, setIsAISectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollProgress = scrollY / windowHeight;
      
      setIsVisible(
        scrollProgress > SCROLL_THRESHOLDS.STATISTICS && 
        scrollProgress < SCROLL_THRESHOLDS.STATISTICS_END
      );
      
      setIsProjectsVisible(
        scrollProgress > SCROLL_THRESHOLDS.PROJECTS_START && 
        scrollProgress < SCROLL_THRESHOLDS.PROJECTS_END
      );
      
      setIsAISectionVisible(
        scrollProgress > SCROLL_THRESHOLDS.AI_SECTION_START && 
        scrollProgress < SCROLL_THRESHOLDS.AI_SECTION_END
      );
      
      setIsTableVisible(scrollProgress > SCROLL_THRESHOLDS.TABLE_START);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    isVisible,
    isTableVisible,
    isProjectsVisible,
    isAISectionVisible,
  };
}