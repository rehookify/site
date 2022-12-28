import React, { FC, PropsWithChildren } from "react"


export const PrimaryButton: FC<PropsWithChildren> = ({ children, ...props }) => (
  <button className="btn btn--primary" {...props}>
    <div className="btn__content">
      {children}
    </div>
  </button>
);
