import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

export const ContentContainer: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <section
    className={clsx('w-full max-w-content px-4 mx-auto', className)}
    {...props}
  />
);
