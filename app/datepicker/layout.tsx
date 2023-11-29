import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { DocsFooter } from '@/src/components/docs-footer';
import { buttonVariants } from '~/components/button/button';
import { DocsNavigation } from '~/components/docs-navigation';
import { DocsStepNavigation } from '~/components/docs-step-navigation';
import { DocsTOC } from '~/components/docs-toc';
import { DATE_PICKER_NAV } from '~/constants/date-picker-nav';
import { ARTICLE_CONTENT_ID } from '~/constants/ids';
import { DatePickerLogo } from '~/icons/date-picker-logo';
import { GithubIcon } from '~/icons/github';
import { cn } from '~/lib/cn';

export default function DatePickerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="block pl-64 lg:pl-80 xl:pr-60 2xl:pr-72">
      <header className="fixed left-64 right-0 top-0 z-20 flex h-16 items-center justify-between bg-zinc-100/80 dark:bg-zinc-900/80 lg:left-80">
        <Link className={cn(buttonVariants())} href="/">
          <ArrowLeft size={20} className="me-2" />
          Home
        </Link>
        <a
          href="https://github.com/rehookify/datepicker"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants())}
        >
          <div className="me-2 h-6 w-6">
            <GithubIcon />
          </div>
          github
        </a>
      </header>
      <DocsNavigation navigation={DATE_PICKER_NAV} logo={<DatePickerLogo />} />
      <section className="flex max-w-full justify-center px-6 pb-16 pt-24">
        <article
          id={ARTICLE_CONTENT_ID}
          className="md:prose-md prose prose-zinc w-full dark:prose-invert lg:prose-lg prose-headings:scroll-mt-16"
        >
          {children}
          <DocsStepNavigation navigation={DATE_PICKER_NAV} />
          <DocsFooter />
        </article>
      </section>
      <DocsTOC />
    </main>
  );
}
