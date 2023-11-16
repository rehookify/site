'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { cn } from '~/lib/cn';
import { Navigation } from '~/types/navigation';

const BASE_LINK_CLASSNAME = `
  flex flex-1 items-center gap-4 overflow-hidden px-2 py-8 lg:px-4
  not-prose overflow-ellipsis break-words no-underline
  rounded-md border border-solid border-zinc-300 dark:border-zinc-700
  lg:hover:bg-zinc-300 transition-colors duration-300 lg:dark:hover:bg-zinc-200 lg:dark:hover:text-zinc-900
`;

export const DocsStepNavigation: FC<{ navigation: Navigation }> = ({
  navigation,
}) => {
  const pathname = usePathname();

  const navIndex = navigation.findIndex(({ href }) => href === pathname);
  const prev = navigation[navIndex - 1];
  const next = navigation[navIndex + 1];

  return (
    <div className="not-prose mt-16 flex gap-x-2 text-xl font-bold">
      {prev ? (
        <Link
          href={prev.href}
          className={cn(BASE_LINK_CLASSNAME)}
          aria-label={`Prev: ${prev.title}`}
        >
          <ArrowLeft size={24} />
          <span className="truncate">{prev.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={next.href}
          className={cn(BASE_LINK_CLASSNAME, 'justify-end')}
          aria-label={`Next: ${next.title}`}
        >
          <span className="truncate">{next.title}</span>
          <ArrowRight size={24} />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
};
