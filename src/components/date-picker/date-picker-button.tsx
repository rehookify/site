import { ButtonHTMLAttributes, FC } from 'react';

import { cn } from '~/lib/cn';

export const DatePickerButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  const buttonClassName = cn(
    'flex justify-center items-center',
    'h-10 hover:bg-zinc-300 rounded disabled:opacity-50 disabled:cursor-not-allowed',
    'dark:hover:bg-zinc-100 dark:hover:text-zinc-900',
    className,
  );
  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
