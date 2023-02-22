import clsx from 'clsx';
import { AnchorHTMLAttributes, FC } from 'react';

export const SocialLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  children,
  ...props
}) => (
  <a
    className={clsx(
      'block rounded w-12 h-12 mr-2 transition-color duration-300 hover:bg-zinc-900 hover:text-white',
      className,
    )}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);
