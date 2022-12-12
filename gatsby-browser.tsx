import React from 'react';
import { GlobalWrapper } from './src/components/global-wrapper';

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalWrapper>
      {element}
    </GlobalWrapper>
  )
}
