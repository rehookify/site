import clsx from 'clsx';
import { FC, SVGAttributes } from 'react';

export const SVG: FC<SVGAttributes<HTMLOrSVGElement>> = ({
  children,
  className,
  ...props
}) => (
  <svg className={clsx('block w-full', className)} {...props}>
    {children}
  </svg>
);
