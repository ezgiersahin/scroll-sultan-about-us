'use client';
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';

const LocomotiveWrapper = dynamic(
  async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    return () => {
      new LocomotiveScroll();
      return null;
    };
  },
  { ssr: false }
);

export default function Home() {
  return (
    <main className={styles.main}>
      <LocomotiveWrapper />
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}
