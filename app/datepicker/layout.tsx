import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { buttonVariants } from '~/components/button/button';
import { DocsNavigation } from '~/components/docs-navigation';
import { DocsStepNavigation } from '~/components/docs-step-navigation';
import { DATE_PICKER_NAV } from '~/constants/date-picker-nav';
import { DatePickerLogo } from '~/icons/date-picker-logo';
import { GithubIcon } from '~/icons/github';
import { cn } from '~/lib/cn';

export default function DatePickerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex h-full">
      <DocsNavigation navigation={DATE_PICKER_NAV} logo={<DatePickerLogo />} />
      <div className="flex h-full max-w-full grow justify-center overflow-y-scroll px-6">
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
        <div
          className={cn(
            'h-auto w-full',
            'md:prose-md prose prose-zinc dark:prose-invert lg:prose-lg',
          )}
        >
          <article className="pb-16 pt-24">
            {children}
            <DocsStepNavigation navigation={DATE_PICKER_NAV} />
          </article>
        </div>
      </div>
    </main>
  );
}
