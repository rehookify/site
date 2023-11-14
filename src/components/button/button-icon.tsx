import { cva, type VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

import { cn } from '~/lib/cn';

const toggleVariants = cva('w-5 h-5', {
  variants: {
    variant: {
      start: 'me-2',
      end: 'ms-2',
    },
  },
  defaultVariants: {
    variant: 'start',
  },
});

interface ButtonIconProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toggleVariants> {}

export const ButtonIcon: FC<ButtonIconProps> = ({
  className,
  variant,
  ...props
}) => <div className={cn(toggleVariants({ variant, className }))} {...props} />;
