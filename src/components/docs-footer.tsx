'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export const DocsFooter = () => {
  const pathname = usePathname();

  const [copy, setCopy] = useState<string>('');

  useIsomorphicLayoutEffect(() => {
    const currentYear = new Date().getFullYear();
    setCopy(`[Re]Hookify © 2022 - ${currentYear}`);
  }, []);

  return (
    <footer className="mt-16 flex items-center justify-between text-sm">
      <p>{copy}</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/rehookify/site/edit/main/app${pathname}/page.mdx`}
        className="no-prose opacity-60 transition-opacity hover:opacity-100"
      >
        Edit this page on GitHub
      </a>
    </footer>
  );
};
