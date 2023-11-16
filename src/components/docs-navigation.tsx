'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';

import { cn } from '~/lib/cn';

import { Navigation } from '../types/navigation';

const navVariants = cva(
  'relative flex items-center px-4 lg:px-6 transition-colors duration-500 h-12 mb-1',
  {
    variants: {
      depth: {
        0: 'rounded-md hover:bg-zinc-300 dark:hover:text-zinc-900',
        1: 'before:content-[" "] ml-4 lg:ml-6 before:absolute before:left-0 before:h-full before:w-px before:bg-zinc-300 dark:before:bg-zinc-700 hover:before:w-1 hover:before:bg-zinc-900 before:transition-all dark:hover:before:bg-zinc-100',
      },
      active: {
        none: '',
        0: 'pointer-events-none cursor-default bg-zinc-900 font-medium text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900',
        1: 'pointer-events-none cursor-default before:w-1 before:bg-zinc-900 font-bold dark:before:bg-zinc-100',
      },
    },
  },
);

interface DocsNavigationProps {
  navigation: Navigation;
  logo: ReactNode;
}

type NavVariants = VariantProps<typeof navVariants>;

export const DocsNavigation: FC<DocsNavigationProps> = ({
  navigation,
  logo,
}) => {
  const pathname = usePathname();

  return (
    <aside className="relative w-64 shrink-0 border-r border-dashed border-zinc-300 px-4 dark:border-zinc-700 lg:w-80 lg:px-6">
      <div className="py-16">
        <div className="mb-8">{logo}</div>
        <nav>
          {navigation.map(({ href, depth, title }) => (
            <Link
              href={href}
              className={cn(
                navVariants({
                  depth: depth as NavVariants['depth'],
                  active: (pathname === href
                    ? depth
                    : 'none') as NavVariants['active'],
                }),
              )}
              key={title.replace(' ', '-').toLowerCase()}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};
