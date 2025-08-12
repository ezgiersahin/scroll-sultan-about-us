'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';

// LocomotiveScroll sadece tarayıcıda çalışsın
const useLocomotiveScroll = dynamic(
  () => import('../hooks/useLocomotiveScroll'),
  { ssr: false }
);

export default function Home() {
  useLocomotiveScroll();

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}
