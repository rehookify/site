import { Inter } from '@next/font/google';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { ExternalLinkIcon, NotFoundIcon } from '@/icons';
import { ButtonIcon, PrimaryButton } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function NotFoundPage() {
  const mainClassName = clsx(
    inter.className,
    'w-full h-full flex items-center justify-center flex-col py-12',
  );
  return (
    <>
      <Head>
        <title>😱 Not found</title>
        <meta
          name="description"
          content="Tiny utils to build performant React apps"
        />
      </Head>
      <main className={mainClassName}>
        <div className="flex justify-center w-full mb-12">
          <NotFoundIcon className="max-h-106" />
        </div>
        <h1 className="text-5xl font-extrabold uppercase mb-4 px-4 text-center sm:font-black sm:text-5">
          Page not found
        </h1>
        <p className="text-2 font-bold text-center mb-12 px-4 sm:font-black">
          Sorry, we can&apos;t seem to find what you&apos;re looking for.
        </p>
        <Link href="/">
          <PrimaryButton>
            Go home
            <ButtonIcon className="ml-2">
              <ExternalLinkIcon />
            </ButtonIcon>
          </PrimaryButton>
        </Link>
      </main>
    </>
  );
}

// @media screen and (min-width: 414px) {
//   .not-found__title {
//     font-size: 4rem;
//   }
// }

// @media screen and (min-width: 768px) {
//   .not-found__title {
//     font-size: 5rem;
//     margin-bottom: 0;
//   }

//   .not-found__text {
//     font-weight: 900;
//   }
// }
