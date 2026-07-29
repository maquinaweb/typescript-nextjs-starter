'use client';

import { LazyMotion as MotionLazy } from 'motion/react';

const loadFeatures = () => import('@/lib/features').then((res) => res.default);

const LazyMotion: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <MotionLazy features={loadFeatures} strict>
      {children}
    </MotionLazy>
  );
};

export { LazyMotion };
