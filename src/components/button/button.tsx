import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, forwardRef } from 'react';

import { cn } from '~/lib/cn';

export const buttonVariants = cva(
  'cursor-pointer bg-transparent font-bold rounded tracking-wide flex items-center',
  {
    variants: {
      variant: {
        default: '',
        primary:
          'bg-zinc-300 hover:bg-zinc-900 hover:text-zinc-300 transition-colors duration-300 dark:bg-zinc-300 dark:hover:bg-zinc-100 dark:text-zinc-900 dark:hover:text-zinc-900',
      },
      size: {
        default: 'h-10 px-8',
        sm: 'h-9 px-6',
        lg: 'h-12 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
Button.displayName = 'Button';
