import React, { FC, PropsWithChildren } from 'react';

export const Content: FC<PropsWithChildren> = ({ children }) => (
  <div className="content">{children}</div>
);
