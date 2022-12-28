import React, { FC, PropsWithChildren } from 'react';

interface DatePickerButtonProps {
  className?: string;
}

export const DatePickerButton: FC<PropsWithChildren<DatePickerButtonProps>> = ({
  children,
  className,
  ...props
}) => (
  <button className={`date-picker__button ${className}`} {...props}>
    {children}
  </button>
);
