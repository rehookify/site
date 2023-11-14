import { FC } from 'react';

import { cn } from '~/lib/cn';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'h-full w-full animate-pulse rounded bg-zinc-300 dark:bg-zinc-300',
        className,
      )}
    />
  );
};
