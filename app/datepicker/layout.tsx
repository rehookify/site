import { ReactNode } from 'react';

import { DocsNavigation } from '~/components/docs-navigation';
import { DocsStepNavigation } from '~/components/docs-step-navigation';
import { DATE_PICKER_NAV } from '~/constants/date-picker-nav';
import { DatePickerLogo } from '~/icons/date-picker-logo';
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
        <div
          className={cn(
            'h-auto w-full',
            'md:prose-md prose prose-zinc dark:prose-invert lg:prose-lg',
          )}
        >
          <article className="py-16">
            {children}
            <DocsStepNavigation navigation={DATE_PICKER_NAV} />
          </article>
        </div>
      </div>
    </main>
  );
}
