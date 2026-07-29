import { Metadata } from 'next';

import './globals.css';

import { Geist, Inter } from 'next/font/google';

import { LazyMotion } from '@/components/ui/lazy-motion';

import { cn } from '@/lib/utils';
import ReactLenis from 'lenis/react';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `TypeScript starter for Next.js by João Pedro Schmitz`,
  description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn('font-sans', geist.variable)}>
      <body className={inter.className}>
        <ReactLenis root>
          <LazyMotion>{children}</LazyMotion>
        </ReactLenis>
      </body>
    </html>
  );
}
