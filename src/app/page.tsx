import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.heroWrapper}>
          <Hero />
        </div>
      </main>
    </>
  );
}

