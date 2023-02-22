import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const buttonClassName = clsx(
    'h-12 px-8 font-bold rounded tracking-wide',
    className,
  );
  return (
    <button className={buttonClassName} {...props}>
      <div className="flex items-center h-full">{children}</div>
    </button>
  );
};

// font-size: 1rem;

// transition: all 300ms ease-in-out 0ms;
