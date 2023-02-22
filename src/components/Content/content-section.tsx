import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

export const ContentSection: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => <section className={clsx('mb-24', className)} {...props} />;
