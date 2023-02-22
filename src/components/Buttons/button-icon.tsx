import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

export const ButtonIcon: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const iconClassName = clsx('w-6 h-6', className);
  return <div className={iconClassName} {...props} />;
};
