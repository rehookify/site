'use client';

import React, { useEffect, useState } from 'react';

const START_YEAR = 2022;

export const Footer = () => {
  const [copy, setCopy] = useState<string>('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCopy(`[Re]Hookify © ${START_YEAR} - ${currentYear}`);
  }, []);

  return (
    <footer className="mx-auto w-full max-w-content px-4 py-6">
      <p className="text-sm">{copy}</p>
    </footer>
  );
};
