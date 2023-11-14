import { FC, HTMLAttributes } from 'react';

import { cn } from '~/lib/cn';

export const ContentSection: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => <section className={cn('mb-24', className)} {...props} />;
