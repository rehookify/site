import React, { useEffect, useState } from 'react';
import { ContentContainer } from '../Content';

const START_YEAR = 2022;

export const Footer = () => {
  const [copy, setCopy] = useState<string>('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCopy(`[Re]Hookify © ${START_YEAR} - ${currentYear}`);
  }, []);

  return (
    <footer className="py-6">
      <ContentContainer>
        <p className="text-sm">{copy}</p>
      </ContentContainer>
    </footer>
  );
};
