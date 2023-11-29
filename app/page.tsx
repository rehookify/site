import Link from 'next/link';

import { buttonVariants } from '~/components/button/button';
import { ContentSection } from '~/components/content-section';
import { Footer } from '~/components/footer';
import { SocialLink } from '~/components/social-link';
import { DATE_PICKER_FEATURES } from '~/constants/date-picker-features';
import { PROS_ITEMS } from '~/constants/pros';
import { DatePickerContent } from '~/content/date-picker/date-picker-content';
import { DatePickerLogo } from '~/icons/date-picker-logo';
import { DiscordIcon } from '~/icons/discord';
import { GithubIcon } from '~/icons/github';
import { Logo } from '~/icons/logo';
import { cn } from '~/lib/cn';
import dpStyles from '~/styles/dp-content.module.css';

export default function Home() {
  return (
    <>
      <header className="relative mb-24 w-full">
        <Logo />
        <nav className="absolute right-0 top-0 flex h-full w-8/12 items-center justify-end sm:h-[29%]">
          <SocialLink
            href="https://discord.gg/EsjhwxH79d"
            className="p-1"
            aria-label="discord link"
          >
            <DiscordIcon />
          </SocialLink>
          <SocialLink
            href="https://github.com/rehookify"
            className="p-2"
            aria-label="github link"
          >
            <GithubIcon />
          </SocialLink>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-content px-4">
        <ContentSection>
          <h1 className="mb-6 text-center text-2 font-black leading-none md:text-3">
            <span className="text-3 uppercase md:text-5">Tiny utils</span>
            <br />
            to build performant React apps
          </h1>
          <p className="mx-auto w-full max-w-2xl text-center text-xl leading-8 text-zinc-500 dark:text-zinc-300">
            [Re]Hookify offers a small, zero-dependency, highly efficient set of
            headless UI tools that are ready to use. It can help you build a
            design system using your React tech stack.
          </p>
        </ContentSection>
        <ContentSection>
          <ul className="grid grid-cols-1 gap-x-1 gap-y-12 sm:grid-cols-2 min-[900px]:grid-cols-4">
            {PROS_ITEMS.map(({ icon, title, description }) => (
              <li className="text-center text-2" key={title}>
                <div className="sm:text-3">{icon}</div>
                <h3 className="mb-2 font-bold">{title}</h3>
                <p className="text-xl text-zinc-500 dark:text-zinc-300">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </ContentSection>
        <ContentSection>
          <div className="mb-12 flex max-h-48 justify-center">
            <DatePickerLogo />
          </div>
          <div className={dpStyles.dp}>
            <h2
              className={cn(
                dpStyles.title,
                'text-2xl font-bold leading-normal sm:max-[900px]:text-center md:text-2.5',
              )}
            >
              Set of React hooks that will help you to build a date, range and
              time picker in your apps.
            </h2>
            <div
              className={cn(
                dpStyles.features,
                'md-8 justify-self-start md:mb-0 md:justify-self-center',
              )}
            >
              <p className="mb-4 text-2xl font-bold leading-normal md:text-2.5">
                Main features:
              </p>
              <ul className="mb-8 list-disc pl-4 text-zinc-500 dark:text-zinc-300">
                {DATE_PICKER_FEATURES.map((feature) => (
                  <li key={feature.replace(' ', '-')} className="mb-2 text-xl">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/datepicker"
                className={cn(
                  buttonVariants({
                    variant: 'primary',
                  }),
                  'max-w-min',
                )}
              >
                Documentation
              </Link>
            </div>
            <div className={dpStyles.calendars}>
              <DatePickerContent />
            </div>
          </div>
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
