import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

import { cn } from '~/lib/cn';

export const A: FC<
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ children, href = '', className, ...props }) => {
  const linkClassName = cn('underline-offset-4', className);

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props} className={linkClassName}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <a
      {...props}
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className={cn(linkClassName, 'inline-flex items-center')}
    >
      <span>{children}</span>
      <ExternalLink size={16} className="ml-2" aria-label="Opens in new tab" />
    </a>
  );
};
