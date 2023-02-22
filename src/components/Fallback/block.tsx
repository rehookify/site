import clsx from 'clsx';
import { FC } from 'react';

interface FallbackBlockProps {
  className?: string;
}

export const FallbackBlock: FC<FallbackBlockProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        'animate-pulse w-full h-full bg-zinc-300 rounded',
        className,
      )}
    />
  );
};
