import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { cn } from '~/lib/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hookify',
  description: 'Tiny utils to build performant React apps',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="h-full" lang="en">
      <body
        className={cn(
          'h-full bg-zinc-100 text-zinc-900 antialiased',
          'dark:bg-zinc-900 dark:text-zinc-100',
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
