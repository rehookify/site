import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '~/components/button/button';
import { ButtonIcon } from '~/components/button/button-icon';
import { NotFoundIcon } from '~/icons/not-found';

export const metadata: Metadata = {
  title: '😱 Not found',
};

export default function NotFound() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center py-12">
      <div className="mb-12 flex w-full justify-center">
        <NotFoundIcon className="max-h-106" />
      </div>
      <h1 className="mb-4 px-4 text-center text-5xl font-extrabold uppercase sm:text-5 sm:font-black">
        Page not found
      </h1>
      <p className="mb-12 px-4 text-center text-2 font-bold sm:font-black">
        Sorry, we can&apos;t seem to find what you&apos;re looking for.
      </p>
      <Link href="/">
        <Button variant="primary">
          Go home
          <ButtonIcon variant="end">
            <ExternalLink size={20} />
          </ButtonIcon>
        </Button>
      </Link>
    </main>
  );
}
