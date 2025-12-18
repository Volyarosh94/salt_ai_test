import { GradientButton } from '@/components/ui/GradientButton';
import { NavLink } from '@/components/ui/NavLink';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <NavLink href="#how-it-works" aria-label="Learn how Salt AI works">
          How It Works
        </NavLink>
        <GradientButton
          variant="outline"
          size="md"
          aria-label="Buy Salt AI tokens"
        >
          Buy Salt AI
        </GradientButton>
      </nav>
    </header>
  );
}

