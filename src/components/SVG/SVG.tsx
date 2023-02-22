import clsx from 'clsx';
import { FC, SVGAttributes } from 'react';

export const SVG: FC<SVGAttributes<HTMLOrSVGElement>> = ({
  children,
  className,
  ...props
}) => (
  <svg className={clsx('block', className)} {...props}>
    {children}
  </svg>
);
