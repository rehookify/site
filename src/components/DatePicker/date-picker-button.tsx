import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

export const DatePickerButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  const buttonClassName = clsx(
    'flex justify-center items-center',
    'h-10  hover:bg-zinc-300 rounded disabled:opacity-50 disabled:cursor-not-allowed',
    className,
  );
  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
