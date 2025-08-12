'use client';
import { useEffect } from 'react';

export default function useLocomotiveScroll() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
}
