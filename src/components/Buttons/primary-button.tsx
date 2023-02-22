import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from './button';

export const PrimaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const buttonClassName = clsx(
    'bg-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors duration-300',
    className,
  );
  return (
    <Button className={buttonClassName} {...props}>
      {children}
    </Button>
  );
};
