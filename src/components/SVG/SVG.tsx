import clsx from 'clsx';
import { FC, SVGAttributes } from 'react';
import styles from './svg.module.css';

export const SVG: FC<SVGAttributes<HTMLOrSVGElement>> = ({
  children,
  className,
  ...props
}) => (
  <svg className={clsx(styles.svg, className)} {...props}>
    {children}
  </svg>
);
