'use client';

import React, { useState } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export const Footer = () => {
  const [copy, setCopy] = useState<string>('');

  useIsomorphicLayoutEffect(() => {
    const currentYear = new Date().getFullYear();
    setCopy(`[Re]Hookify © 2022 - ${currentYear}`);
  }, []);

  return (
    <footer className="mx-auto w-full max-w-content px-4 py-6">
      <p className="text-sm">{copy}</p>
    </footer>
  );
};
