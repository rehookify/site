import { AnchorHTMLAttributes, FC } from 'react';

import { cn } from '~/lib/cn';

export const SocialLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  children,
  ...props
}) => (
  <a
    className={cn(
      'transition-color mr-2 block h-12 w-12 rounded duration-300 hover:bg-zinc-900 hover:text-white',
      className,
    )}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);
