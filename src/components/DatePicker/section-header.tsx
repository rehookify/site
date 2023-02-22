import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

export const SectionHeader: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  children,
}) => (
  <header
    className={clsx('grid grid-cols-header items-center mb-2', className)}
  >
    {children}
  </header>
);
