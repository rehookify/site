import React, { FC, PropsWithChildren } from 'react';
import '../styles/global.css';

// We need this component to apply global styles in gatsby-browser
export const GlobalWrapper: FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
);
