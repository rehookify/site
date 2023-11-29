'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

import { ARTICLE_CONTENT_ID } from '~/constants/ids';

export const DocsTOC: FC<any> = () => {
  const pathname = usePathname();
  const [anchors, setAnchors] = useState<any[]>([]);

  useIsomorphicLayoutEffect(() => {
    const localAnchors: any[] = [];
    document
      ?.querySelector(`#${ARTICLE_CONTENT_ID}`)
      ?.querySelectorAll('h2,h3')
      .forEach((node: any) => {
        localAnchors.push({
          title: node.textContent,
          url: `#${node.id}`,
          id: node.id,
        });
      });

    setAnchors(localAnchors);
  }, [pathname]);

  if (!anchors.length) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 right-0 top-0 hidden w-60 overflow-y-auto pr-6 pt-24 xl:block 2xl:w-72">
      <h4 className="mb-6 text-sm font-bold opacity-60">Table of Content</h4>
      <ul className="flex flex-col gap-y-2 border-l border-solid border-zinc-300 dark:border-zinc-700">
        {anchors.map(({ url, title, id }) => (
          <li key={id}>
            <Link
              href={url}
              className="block rounded-e-md px-4 py-2 text-sm transition-colors duration-200 hover:bg-zinc-300 dark:hover:text-zinc-900"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
