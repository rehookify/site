import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

export const Section: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  children,
}) => <section className={clsx(className)}>{children}</section>;
